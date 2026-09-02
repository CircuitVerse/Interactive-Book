"""Entry point: regenerate the whole output directory in one shot."""

from __future__ import annotations

import os
import shutil
import tempfile
from pathlib import Path

from .bibliography import load_bibliography
from .book import build_navbar, build_page, chapter_contents, discover_chapters
from .config import (
    BIBLIOGRAPHY_PATH,
    DOCS_PATH,
    OUTPUT_PATH,
    REPO_ROOT,
    ROOT_PAGES,
    WIDGET_CHAPTER_CONTENTS,
    resolve_root_page,
)
from .output import write_document


def generate(staging: Path) -> tuple[int, list[tuple[Path, str]]]:
    """Write every document into `staging`, returning the count and warnings."""
    bibliography = load_bibliography()
    chapters = discover_chapters(DOCS_PATH)
    written = 0
    warnings: list[tuple[Path, str]] = []

    def emit(relative: str, document: dict) -> None:
        """Write one document at `relative` inside the staging directory."""
        nonlocal written
        write_document(staging / relative, document, staging)
        written += 1

    # Standalone pages that live at the root of the output directory.
    for source, target in ROOT_PAGES.items():
        path = resolve_root_page(DOCS_PATH, source)
        if path is None:
            print(f"[miss] {source} not found; {target} not generated")
            continue
        page = build_page(path, keep_title=True, bibliography=bibliography)
        warnings += [(path, w) for w in page.warnings]
        emit(target, {"name": page.name, "views": page.views})

    emit("navbar.json", build_navbar(chapters))

    for chapter in chapters:
        index = build_page(
            chapter.index_path, keep_title=True, bibliography=bibliography
        )
        warnings += [(chapter.index_path, w) for w in index.warnings]
        for view in index.views:
            if view.get("sub_type") == WIDGET_CHAPTER_CONTENTS:
                view["items"] = chapter_contents(chapter)
        emit(f"{chapter.directory}/0.json", {"name": index.name, "views": index.views})

        for number, section in enumerate(chapter.sections, start=1):
            page = build_page(section.path, bibliography=bibliography)
            warnings += [(section.path, w) for w in page.warnings]
            emit(
                f"{chapter.directory}/{number}.json",
                {"name": page.name, "views": page.views},
            )

    return written, warnings


def report(warnings: list[tuple[Path, str]]) -> None:
    """Print the parser warnings collected during a run."""
    if not warnings:
        return
    print("\nwarnings:")
    for path, warning in warnings:
        try:
            shown = path.relative_to(REPO_ROOT)
        except ValueError:
            shown = path
        print(f"  {shown}: {warning}")


def main() -> int:
    """Regenerate the output tree from docs/, replacing it only on success."""
    if not DOCS_PATH.is_dir():
        print(f"docs directory not found: {DOCS_PATH}")
        return 1

    # The output tree is replaced wholesale and its predecessor is then deleted,
    # so refuse any path overlapping a source tree in either direction: equal to
    # it, containing it, or inside it. Resolved first so a relative path or a
    # symlink cannot slip past.
    output = OUTPUT_PATH.resolve()
    for source in (DOCS_PATH.resolve(), BIBLIOGRAPHY_PATH.resolve()):
        if output == source or output in source.parents or source in output.parents:
            print(f"refusing to generate into {output}: it overlaps sources at {source}")
            return 1

    # The output tree is generator-owned: build it beside the real one and swap,
    # so a removed or renumbered section cannot leave stale JSON behind and a
    # failure part-way through cannot leave a half-written tree. The previous
    # tree is moved aside rather than deleted, and restored if the swap fails,
    # so a failure never leaves the output missing.
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    staging = Path(tempfile.mkdtemp(dir=OUTPUT_PATH.parent, prefix=".md2json-"))
    backup = OUTPUT_PATH.with_name(f".{OUTPUT_PATH.name}.backup-{os.getpid()}")
    moved = swapped = False
    try:
        written, warnings = generate(staging)
        shutil.rmtree(backup, ignore_errors=True)  # leftover from an earlier crash
        moved = OUTPUT_PATH.exists()
        if moved:
            OUTPUT_PATH.replace(backup)
        try:
            staging.replace(OUTPUT_PATH)
            swapped = True
        except BaseException:
            if moved:
                backup.replace(OUTPUT_PATH)
            raise
    except BaseException:
        shutil.rmtree(staging, ignore_errors=True)
        raise
    finally:
        # Only discard the backup once the new tree is in place. If the swap and
        # the restore both failed it holds the only copy, so say where it is.
        if swapped:
            shutil.rmtree(backup, ignore_errors=True)
        elif moved and backup.exists():
            print(f"previous output preserved at {backup}")

    report(warnings)
    print(f"\n{written} files written to {OUTPUT_PATH.relative_to(REPO_ROOT)}/")
    return 0
