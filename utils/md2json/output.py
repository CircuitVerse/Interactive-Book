"""Writing view documents to disk."""

from __future__ import annotations

import json
from pathlib import Path

from .config import OUTPUT_PATH


def dumps(document: dict) -> str:
    """Serialise one view document as indented, UTF-8 friendly JSON."""
    return json.dumps(document, indent=4, ensure_ascii=False) + "\n"


def label(path: Path, root: Path | None = None) -> str:
    """Path shown in the run log, relative to the output root where possible."""
    try:
        return str(path.relative_to(root or OUTPUT_PATH))
    except ValueError:
        return str(path)


def write_document(path: Path, document: dict, root: Path | None = None) -> None:
    """Write one document, overwriting whatever was there."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(dumps(document), encoding="utf-8")
    print(f"[write] {label(path, root)}")
