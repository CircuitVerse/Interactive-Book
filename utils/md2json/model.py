"""Dataclasses describing a parsed page and the book's structure."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path


@dataclass
class Page:
    """A parsed markdown page, ready to be rendered as a view document."""

    name: str
    views: list[dict] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)


@dataclass
class Section:
    path: Path
    title: str
    level: str
    nav_order: str


@dataclass
class Chapter:
    directory: str
    index_path: Path
    title: str
    nav_order: int
    sections: list[Section]
