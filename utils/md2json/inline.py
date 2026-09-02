"""Inline markdown/HTML -> the plain text the frontend widgets expect."""

from __future__ import annotations

import html
import re

CITE_RE = re.compile(r"\{%\s*cite\s+(.*?)\s*%\}")
IMAGE_LINK_RE = re.compile(r"!\[([^\]]*)\]\(([^)]+)\)")
LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
AUTOLINK_RE = re.compile(r"<((?:https?|mailto):[^>]+)>")
SUP_RE = re.compile(r"<sup>(.*?)</sup>", re.S | re.I)
SUB_RE = re.compile(r"<sub>(.*?)</sub>", re.S | re.I)
TAG_RE = re.compile(r"</?[a-zA-Z][^>]*>")
BOLD_ITALIC_RE = re.compile(r"(\*{1,3}|_{1,3})(\S.*?\S|\S)\1", re.S)
CODE_RE = re.compile(r"`([^`]+)`")


def cite_keys(argument: str) -> list[str]:
    """The keys in a {% cite a b --file books %} tag, ignoring its flags."""
    keys = []
    for token in argument.split():
        if token.startswith("--"):
            break
        keys.append(token)
    return keys


def inline_text(text: str, citations=None) -> str:
    """Flatten inline markdown/HTML to plain text.

    With a CitationRegistry, {% cite %} becomes an IEEE marker such as "[1]";
    without one it is dropped, which is what non-prose contexts want.
    """
    if citations is None:
        text = CITE_RE.sub("", text)
    else:
        text = CITE_RE.sub(lambda m: citations.mark(cite_keys(m.group(1))), text)
    text = IMAGE_LINK_RE.sub(lambda m: m.group(1) or "", text)
    # In-page anchors have no meaning outside the Jekyll build: keep the label only.
    text = LINK_RE.sub(
        lambda m: m.group(1) if m.group(2).startswith("#") else f"{m.group(1)} ({m.group(2)})",
        text,
    )
    text = AUTOLINK_RE.sub(lambda m: m.group(1), text)
    text = SUP_RE.sub(lambda m: f"^{m.group(1)}", text)
    text = SUB_RE.sub(lambda m: f"_{m.group(1)}", text)
    text = TAG_RE.sub("", text)
    text = CODE_RE.sub(lambda m: m.group(1), text)
    text = BOLD_ITALIC_RE.sub(lambda m: m.group(2), text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()
