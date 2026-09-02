"""Resolve {% cite %} / {% bibliography %} against the BibTeX sources.

Jekyll renders these with jekyll-scholar (``style: ieee-with-url``). Without
this module the citations are stripped and the References sections dropped,
which leaves dangling sentences like "described in Section 1.9 in  and in ...".

Only what the book actually uses is supported: @book, @article, @techreport and
@misc entries, and the ``{% bibliography --cited --file X %}`` tag form.
"""

from __future__ import annotations

import re

from .config import BIBLIOGRAPHY_PATH

ENTRY_RE = re.compile(r"@(\w+)\s*\{\s*([^,\s]+)\s*,", re.I)
FIELD_RE = re.compile(r"(\w+)\s*=\s*", re.I)
# BibTeX convention: OPT-prefixed fields are commented out and must be ignored.
OPT_PREFIX_RE = re.compile(r"^opt", re.I)
LATEX_ESCAPES = {r"\&": "&", r"\_": "_", r"\%": "%", r"\$": "$", r"\#": "#"}


def _read_braced(text: str, start: int) -> tuple[str, int]:
    """Read a {...} group with balanced braces, returning its body and end index."""
    depth, i = 0, start
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return text[start + 1:i], i + 1
        i += 1
    return text[start + 1:], len(text)


def _clean(value: str) -> str:
    """Strip LaTeX escapes, grouping braces and stray whitespace from a value."""
    for escape, plain in LATEX_ESCAPES.items():
        value = value.replace(escape, plain)
    value = value.replace("{", "").replace("}", "")
    return re.sub(r"\s+", " ", value).strip().rstrip(",")


def _read_value(text: str, i: int) -> tuple[str, int]:
    """Read one field value, braced, quoted or bare, from position `i`."""
    while i < len(text) and text[i].isspace():
        i += 1
    if i < len(text) and text[i] == "{":
        raw, i = _read_braced(text, i)
        return _clean(raw), i
    if i < len(text) and text[i] == '"':
        end = text.find('"', i + 1)
        end = len(text) if end == -1 else end
        return _clean(text[i + 1:end]), end + 1
    match = re.compile(r"[^,}]*").match(text, i)
    return _clean(match.group(0)), match.end()


def parse_bibtex(text: str) -> dict[str, dict[str, str]]:
    """Parse a .bib file into {key: {field: value}}, plus a "_kind" entry type.

    The entry type is stored under "_kind" rather than "type" because BibTeX has
    a real `type` field (@techreport uses it for "Standard", "Tech. report", ...).
    """
    entries: dict[str, dict[str, str]] = {}
    for match in ENTRY_RE.finditer(text):
        kind, key = match.group(1).lower(), match.group(2)
        brace = text.index("{", match.start())
        body, _ = _read_braced(text, brace)
        fields: dict[str, str] = {"_kind": kind}
        i = 0
        while i < len(body):
            field = FIELD_RE.search(body, i)
            if field is None:
                break
            value, i = _read_value(body, field.end())
            name = field.group(1).lower()
            if OPT_PREFIX_RE.match(name) and name != "options":
                continue  # OPTauthor / OPTmonth: commented out in BibTeX
            if value:
                fields[name] = value
        entries[key] = fields
    return entries


def load_bibliography() -> dict[str, dict[str, str]]:
    """Load every .bib file in _bibliography/ into one lookup table."""
    entries: dict[str, dict[str, str]] = {}
    if not BIBLIOGRAPHY_PATH.is_dir():
        return entries
    for path in sorted(BIBLIOGRAPHY_PATH.glob("*.bib")):
        entries.update(parse_bibtex(path.read_text(encoding="utf-8")))
    return entries


def _format_author(author: str) -> str:
    """Reorder BibTeX names: "Donzellini, G. and Oneto, L." -> "G. Donzellini, L. Oneto"."""
    names = [n.strip() for n in re.split(r"\s+and\s+", author) if n.strip()]
    formatted = []
    for name in names:
        if "," in name:
            last, first = (part.strip() for part in name.split(",", 1))
            initials = " ".join(
                part[0] + "." if not part.endswith(".") else part
                for part in first.replace(".", ". ").split()
                if part
            )
            formatted.append(f"{initials} {last}".strip())
        else:
            formatted.append(name)
    if len(formatted) > 2:
        return ", ".join(formatted[:-1]) + ", and " + formatted[-1]
    if len(formatted) == 2:
        return f"{formatted[0]} and {formatted[1]}"
    return formatted[0] if formatted else ""


def format_entry(entry: dict[str, str]) -> str:
    """Render one entry roughly in IEEE "ieee-with-url" style, as plain text."""
    parts: list[str] = []
    author = _format_author(entry.get("author", ""))
    if author:
        parts.append(author + ",")

    title = entry.get("title", "")
    kind = entry.get("_kind", "misc")
    if kind in {"article", "techreport", "misc"}:
        parts.append(f'"{title},"' if title else "")
    else:
        parts.append(f"{title}." if title else "")

    if kind == "article":
        if entry.get("journal"):
            parts.append(entry["journal"] + ",")
        if entry.get("volume"):
            parts.append(f"vol. {entry['volume']},")
        if entry.get("number"):
            parts.append(f"no. {entry['number']},")
        if entry.get("pages"):
            parts.append(f"pp. {entry['pages']},")
    else:
        if entry.get("institution"):
            parts.append(entry["institution"] + ",")
        if entry.get("number"):
            parts.append(entry["number"] + ",")
        if entry.get("publisher"):
            parts.append(entry["publisher"] + ",")

    if entry.get("year"):
        parts.append(f"{entry['year']}.")

    link = entry.get("url") or entry.get("howpublished") or ""
    if link.startswith("http"):
        parts.append(f"Available: {link}")
    elif entry.get("doi"):
        parts.append(f"doi: {entry['doi']}")

    return re.sub(r"\s+", " ", " ".join(p for p in parts if p)).strip()


class CitationRegistry:
    """Numbers the citations on one page, in order of first appearance."""

    def __init__(self, entries: dict[str, dict[str, str]]):
        """Start an empty registry backed by the merged BibTeX entries."""
        self.entries = entries
        self.order: list[str] = []
        self.missing: list[str] = []

    def mark(self, keys: list[str]) -> str:
        """Register cited keys and return their inline marker, e.g. "[1], [2]"."""
        numbers = []
        for key in keys:
            if key not in self.entries and key not in self.missing:
                self.missing.append(key)
            if key not in self.order:
                self.order.append(key)
            numbers.append(self.order.index(key) + 1)
        return ", ".join(f"[{n}]" for n in numbers)

    def rendered(self) -> list[str]:
        """The reference list, in citation order.

        Every marked key gets an entry, including keys with no BibTeX record, so
        that an inline "[2]" always points at the second item in this list.
        """
        return [
            format_entry(self.entries[key])
            if key in self.entries
            else f"{key} (no entry found in _bibliography)"
            for key in self.order
        ]
