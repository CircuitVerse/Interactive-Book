"""Tunables shared by the docs -> chapters translation.

Everything in here is data: which files to read, which Jekyll constructs map to
which frontend widget, and which headings are plumbing rather than content.
"""

from __future__ import annotations

from pathlib import Path

def _find_repo_root(start: Path) -> Path:
    """Walk up to the directory holding _config.yml, so the package can move."""
    for candidate in (start, *start.parents):
        if (candidate / "_config.yml").is_file():
            return candidate
    return start.parents[1]  # start is utils/md2json, so parents[1] is the repo


REPO_ROOT = _find_repo_root(Path(__file__).resolve().parent)
DOCS_PATH = REPO_ROOT / "docs"
# The generated tree, written inside the Jekyll build output so the deploy
# workflow publishes it to GitHub Pages alongside the site. Served at <site>/api/.
# Must stay a subdirectory of out/: it is replaced wholesale on every run.
OUTPUT_PATH = REPO_ROOT / "out" / "api"
# BibTeX sources behind {% cite %} / {% bibliography %}.
BIBLIOGRAPHY_PATH = REPO_ROOT / "_bibliography"

# Standalone Jekyll pages that become root-level documents. These live at the
# repo root rather than under docs/: `about.md` and `CONTRIBUTING.md` both carry
# Jekyll front matter (`title: About` / `title: Guidelines`) and neither is in
# the `_config.yml` exclude list, so Jekyll serves them alongside the book.
ROOT_PAGES = {
    "about.md": "about.json",
    "CONTRIBUTING.md": "guidelines.json",
}

# cvib_level -> category label used by the chapter_contents widget.
LEVEL_LABELS = {
    "basic": "Basic Level",
    "medium": "Medium Level",
    "advanced": "Advanced Level",
}
LEVEL_ORDER = ["basic", "medium", "advanced"]

# {% include <name>.html %} -> interactive widget sub_type. Includes that are not
# listed here are dropped with a warning; add them as the frontend gains widgets.
INCLUDE_WIDGETS = {
    "binary.html": "binary-simulator",
    "bool.html": "boolean-simulator",
    "fsm.html": "fsm-simulator",
    "gates.html": "gates-simulator",
    "kmap.html": "kmap-simulator",
    "truth_table.html": "truth-table-simulator",
    "application2.html": "character_representation",
    "application1.html": "subject_encoder",
    "binary2.html": "bitwise-simulator",
    "flipflop2.html": "flipflop-simulator",
}

# Includes handled specially rather than as a plain widget: they carry arguments
# or document structure. Named here so no module repeats the filenames.
IMAGE_INCLUDE = "image.html"
CHAPTER_TOC_INCLUDE = "chapter_toc.html"
# Structural includes carry document shape rather than page content, so they
# survive a dropped section (see DROPPED_SECTIONS).
STRUCTURAL_INCLUDES = {CHAPTER_TOC_INCLUDE}

# Headings that carry Jekyll plumbing rather than content. The heading and
# everything under it is dropped (the "1. TOC" placeholder).
DROPPED_SECTIONS = {"table of contents"}
# Headings whose body is real content but whose title is plumbing.
DROPPED_HEADINGS = {"chapter contents"}

# Code fence languages that are content rather than source code: no label line.
UNLABELLED_FENCES = {"", "text", "txt", "yaml", "yml", "markdown", "md"}

# Widget sub_types the generator names itself. Unlike INCLUDE_WIDGETS these have
# no token in the markdown to derive from -- a table is just "| a | b |" -- so
# they are the translator's own vocabulary. This is the frontend contract:
# renaming one here renames it in the JSON the app consumes.
WIDGET_TOC = "toc"
WIDGET_TABLE = "table"
WIDGET_BULLET_LIST = "bullet_list"
WIDGET_NUMBERED_LIST = "numbered_list"
WIDGET_CLIPBOARD = "clipboard"
WIDGET_IMAGE = "image"
WIDGET_QUIZ = "pop-quiz"
WIDGET_CHAPTER_CONTENTS = "chapter_contents"

# Heading whose body is a bibliography rather than prose.
REFERENCES_HEADING = "references"

# Text sizes. The frontend renders H1 as a section heading, H2 as a sub-heading
# and H3 as body copy.
SIZE_HEADING = "H1"
SIZE_SUBHEADING = "H2"
SIZE_BODY = "H3"


def resolve_root_page(docs: Path, source: str) -> Path | None:
    """Find a root page, preferring the docs tree and falling back to the repo."""
    for candidate in (docs / source, REPO_ROOT / source):
        if candidate.is_file():
            return candidate
    return None
