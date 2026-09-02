"""Translate the Jekyll book in ``docs/`` into the view JSON the app consumes.

Run it with ``python3 utils/md2json``. There are no options: every run reads
``docs/`` and rewrites the whole output tree.

Module map:
    config       constants, paths, widget/heading tables
    frontmatter  Jekyll front matter parsing
    inline       inline markdown/HTML -> plain text
    blocks       block-level markdown -> view documents (the Parser)
    model        Page / Section / Chapter dataclasses
    book         discovery and assembly from the docs tree
    output       serialisation and writing
    cli          the run loop
"""

from .blocks import Parser
from .book import build_navbar, build_page, chapter_contents, discover_chapters
from .cli import main
from .frontmatter import parse_front_matter
from .inline import inline_text
from .model import Chapter, Page, Section

__all__ = [
    "Chapter",
    "Page",
    "Parser",
    "Section",
    "build_navbar",
    "build_page",
    "chapter_contents",
    "discover_chapters",
    "inline_text",
    "main",
    "parse_front_matter",
]
