"""Discovery and assembly: docs/ on disk -> Page / Chapter objects."""

from __future__ import annotations

from pathlib import Path

from .blocks import Parser
from .config import LEVEL_LABELS, LEVEL_ORDER
from .frontmatter import parse_front_matter
from .model import Chapter, Page, Section


def build_page(path: Path, *, keep_title: bool = False, bibliography=None) -> Page:
    """Parse one markdown file into a Page of view documents."""
    front, body = parse_front_matter(path.read_text(encoding="utf-8"))
    parser = Parser(body, keep_title=keep_title, bibliography=bibliography)
    views, _toc, warnings = parser.parse()
    return Page(name=front.get("title", path.stem), views=views, warnings=warnings)


def chapter_contents(chapter: Chapter) -> list[dict]:
    """Group a chapter's sections by difficulty level for the index page."""
    grouped: dict[str, list[dict]] = {level: [] for level in LEVEL_ORDER}
    for number, section in enumerate(chapter.sections, start=1):
        grouped.setdefault(section.level, []).append(
            {"id": number, "name": section.title}
        )
    return [
        {"category": LEVEL_LABELS.get(level, level.title()), "content": entries}
        for level in LEVEL_ORDER
        if (entries := grouped.get(level))
    ]


def discover_chapters(docs: Path) -> list[Chapter]:
    """Find every chapter in `docs`, ordering chapters and sections by nav_order."""
    chapters: list[Chapter] = []
    for index_path in sorted(docs.glob("*/index.md")):
        front, _ = parse_front_matter(index_path.read_text(encoding="utf-8"))
        sections: list[Section] = []
        for md in index_path.parent.glob("*.md"):
            if md.name == "index.md":
                continue
            meta, _ = parse_front_matter(md.read_text(encoding="utf-8"))
            if meta.get("published", "true").lower() == "false":
                continue  # placeholder page, not part of the book yet
            sections.append(
                Section(
                    path=md,
                    title=meta.get("title", md.stem),
                    level=meta.get("cvib_level", "basic").lower(),
                    nav_order=meta.get("nav_order", "l9s999"),
                )
            )
        sections.sort(key=lambda s: (s.nav_order, s.title))
        chapters.append(
            Chapter(
                directory=index_path.parent.name,
                index_path=index_path,
                title=front.get("title", index_path.parent.name),
                nav_order=int(front.get("nav_order", "0") or 0),
                sections=sections,
            )
        )
    chapters.sort(key=lambda c: (c.nav_order, c.directory))
    return chapters


def build_navbar(chapters: list[Chapter]) -> dict:
    """Build the navigation document listing chapters and their sections.

    Each chapter carries the directory it was generated into, so a client can
    build "<base>/<path>/<id>.json" for a section and "<base>/<path>/0.json" for
    the chapter index without knowing the chapter ordering in advance.
    """
    return {
        "chapters": [
            {
                "id": chapter_id,
                "name": chapter.title,
                "path": chapter.directory,
                "sub-chapters": [
                    {"id": number, "name": section.title}
                    for number, section in enumerate(chapter.sections, start=1)
                ],
            }
            for chapter_id, chapter in enumerate(chapters, start=1)
        ]
    }
