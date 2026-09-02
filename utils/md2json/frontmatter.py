"""Jekyll front matter parsing."""

from __future__ import annotations

import re

FRONT_MATTER_RE = re.compile(r"\A---\n(.*?)\n---\n?", re.S)


def parse_front_matter(text: str) -> tuple[dict[str, str], str]:
    """Split a page into its (flat) front matter mapping and its body."""
    match = FRONT_MATTER_RE.match(text)
    if match is None:
        return {}, text

    data: dict[str, str] = {}
    for line in match.group(1).split("\n"):
        if ":" not in line or line.lstrip().startswith("#"):
            continue
        key, value = line.split(":", 1)
        data[key.strip()] = value.strip().strip("\"'")
    return data, text[match.end():]
