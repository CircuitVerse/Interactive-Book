"""Block-level markdown parsing: markdown lines -> a list of view documents."""

from __future__ import annotations

import html
import re

from .bibliography import CitationRegistry
from .config import (
    CHAPTER_TOC_INCLUDE,
    DROPPED_HEADINGS,
    DROPPED_SECTIONS,
    IMAGE_INCLUDE,
    INCLUDE_WIDGETS,
    REFERENCES_HEADING,
    SIZE_BODY,
    SIZE_HEADING,
    SIZE_SUBHEADING,
    STRUCTURAL_INCLUDES,
    UNLABELLED_FENCES,
    WIDGET_BULLET_LIST,
    WIDGET_CHAPTER_CONTENTS,
    WIDGET_CLIPBOARD,
    WIDGET_IMAGE,
    WIDGET_NUMBERED_LIST,
    WIDGET_QUIZ,
    WIDGET_TABLE,
    WIDGET_TOC,
)
from .inline import inline_text

HEADING_RE = re.compile(r"^(#{1,6})\s+(.*?)\s*#*$")
ATTR_RE = re.compile(r"^\{:.*\}\s*$")
FENCE_RE = re.compile(r"^\s*(?:```|~~~)\s*(\w*)\s*$")
HR_RE = re.compile(r"^\s*(?:-{3,}|\*{3,}|_{3,})\s*$")
TABLE_ROW_RE = re.compile(r"^\s*\|.*")
TABLE_SEP_RE = re.compile(r"^\s*\|?[\s:\-|]+\|[\s:\-|]*$")
LIST_ITEM_RE = re.compile(r"^(\s*)(?:([-*+])|(\d+)[.)])\s+(.*)$")
LIQUID_RE = re.compile(r"^\s*\{%\s*(.*?)\s*%\}\s*$")
INCLUDE_RE = re.compile(r"^include\s+(\S+)(.*)$")
INCLUDE_ARG_RE = re.compile(r"(\w+)\s*=\s*[\"']([^\"']*)[\"']")
IFRAME_SRC_RE = re.compile(r"<iframe[^>]*\ssrc=[\"']([^\"']+)[\"']", re.I)


class Parser:
    def __init__(self, body: str, *, keep_title: bool = False, bibliography=None):
        """Prepare to scan one page body, minus its front matter."""
        self.lines = body.split("\n")
        self.i = 0
        self.keep_title = keep_title
        self.citations = CitationRegistry(bibliography or {})
        self.pending_references: str | None = None
        self.views: list[dict] = []
        self.toc: list[str] = []
        self.warnings: list[str] = []
        self.wants_toc = False
        self.skipping_section = False  # inside "Table of contents" / "References"
        self.seen_title = False
        self.next_is_quiz = False
        self.scroll_id = 0

    # -- helpers ---------------------------------------------------------- #

    def text(self, raw: str) -> str:
        """Flatten inline markup, numbering any citations it contains."""
        return inline_text(raw, self.citations)

    def peek(self, offset: int = 0) -> str | None:
        """The line `offset` ahead of the cursor, or None past the end."""
        index = self.i + offset
        return self.lines[index] if index < len(self.lines) else None

    def add_text(self, size: str, content: str, scroll_to: int | None = None) -> None:
        """Append a text view, skipping empties and tagging TOC anchors."""
        if not content:
            return
        view: dict = {"type": "text", "size": size, "content": content}
        if scroll_to is not None:
            view["scrollToId"] = scroll_to
        self.views.append(view)

    def add_widget(self, sub_type: str, **payload) -> None:
        """Append a widget view of `sub_type` carrying `payload`."""
        self.views.append({"type": "widget", "sub_type": sub_type, **payload})

    def add_section_heading(self, text: str, *, in_toc: bool) -> None:
        """A top-level section heading, optionally registered in the page TOC."""
        if not in_toc:
            self.add_text(SIZE_HEADING, text)
            return
        self.toc.append(text)
        self.add_text(SIZE_HEADING, text, scroll_to=self.scroll_id)
        self.scroll_id += 1

    # -- entry point ------------------------------------------------------ #

    def parse(self) -> tuple[list[dict], list[str], list[str]]:
        """Scan the body once, returning its views, TOC entries and warnings."""
        while self.i < len(self.lines):
            line = self.lines[self.i]

            if not line.strip():
                self.i += 1
            elif ATTR_RE.match(line):
                self.handle_attribute(line)
            elif HEADING_RE.match(line):
                self.handle_heading(HEADING_RE.match(line))
            elif HR_RE.match(line) and not TABLE_ROW_RE.match(line):
                self.i += 1
            elif FENCE_RE.match(line):
                self.handle_fence(FENCE_RE.match(line).group(1))
            elif TABLE_ROW_RE.match(line):
                self.handle_table()
            elif LIST_ITEM_RE.match(line):
                self.handle_list()
            elif LIQUID_RE.match(line):
                self.handle_liquid(LIQUID_RE.match(line).group(1))
            elif "<iframe" in line.lower():
                self.handle_iframe()
            else:
                self.handle_paragraph()

        if self.wants_toc and self.toc:
            self.views.insert(0, {"type": "widget", "sub_type": WIDGET_TOC, "items": self.toc})
        return self.views, self.toc, self.warnings

    # -- block handlers --------------------------------------------------- #

    def handle_attribute(self, line: str) -> None:
        """kramdown block attributes: `{: .no_toc}`, `{:toc}`, `{:.quiz}`."""
        if "quiz" in line:
            self.next_is_quiz = True
            # Several pages park the quiz below "## References". The quiz is real
            # content, so it has to survive that dropped section.
            self.skipping_section = False
        if ":toc}" in line.replace(" ", ""):
            self.wants_toc = True
        self.i += 1

    def handle_heading(self, match: re.Match) -> None:
        """Emit a heading, or route plumbing headings to their special cases."""
        level, raw = len(match.group(1)), match.group(2)
        self.i += 1

        no_toc = False
        while ATTR_RE.match(self.peek() or ""):
            no_toc = no_toc or "no_toc" in self.lines[self.i]
            self.handle_attribute(self.lines[self.i])

        text = self.text(raw)
        key = text.lower().rstrip(":")

        if level == 1 and not self.seen_title:
            # The page's own title. Section pages carry it in "name" only; chapter
            # index pages and the standalone pages render the long form as well.
            self.seen_title = True
            self.skipping_section = False
            if self.keep_title:
                self.add_text(SIZE_HEADING, text)
            return

        if key == REFERENCES_HEADING:
            # Emitted only once {% bibliography %} yields entries, so a page that
            # cites nothing does not get an empty References heading.
            self.pending_references = text
            self.skipping_section = True
            return

        if key in DROPPED_SECTIONS:
            self.skipping_section = True
            return

        if key in DROPPED_HEADINGS:
            self.skipping_section = False
            return

        self.skipping_section = False

        # A repeated level-1 heading is a second top-level section, not a
        # sub-heading: treat it exactly like "##".
        if level <= 2:
            self.add_section_heading(text, in_toc=not no_toc)
        else:
            self.add_text(SIZE_SUBHEADING, text)

    def handle_paragraph(self) -> None:
        """Collect consecutive prose lines into one body-text view."""
        chunk: list[str] = []
        while self.i < len(self.lines):
            line = self.lines[self.i]
            if (
                not line.strip()
                or HEADING_RE.match(line)
                or ATTR_RE.match(line)
                or FENCE_RE.match(line)
                or TABLE_ROW_RE.match(line)
                or LIST_ITEM_RE.match(line)
                or LIQUID_RE.match(line)
                or HR_RE.match(line)
                or "<iframe" in line.lower()
            ):
                break
            chunk.append(line.strip())
            self.i += 1

        if self.skipping_section:
            return
        self.add_text(SIZE_BODY, self.text(" ".join(chunk)))

    def handle_fence(self, language: str) -> None:
        """Turn a fenced code block into a clipboard widget."""
        self.i += 1
        code: list[str] = []
        while self.i < len(self.lines) and not FENCE_RE.match(self.lines[self.i]):
            code.append(self.lines[self.i])
            self.i += 1
        self.i += 1  # closing fence

        if self.skipping_section:
            return
        body = html.unescape("\n".join(code).rstrip())
        if not body:
            return
        label = "" if language.lower() in UNLABELLED_FENCES else f"{language.title()}:\n"
        self.add_widget(WIDGET_CLIPBOARD, content=f"{label}{body}")

    def handle_table(self) -> None:
        """Collect a pipe table into a heading row plus body rows."""
        rows: list[list[str]] = []
        while self.i < len(self.lines) and TABLE_ROW_RE.match(self.lines[self.i]):
            line = self.lines[self.i]
            self.i += 1
            if TABLE_SEP_RE.match(line) and set(line) <= set(" |:-"):
                continue
            cells = [self.text(c) for c in line.strip().strip("|").split("|")]
            rows.append(cells)

        if self.skipping_section or not rows:
            return
        heading, *body = rows
        self.add_widget(WIDGET_TABLE, content={"heading": heading, "rows": body})

    def handle_list(self) -> None:
        """Emit a list as a quiz, numbered list or bullet list."""
        items = self.collect_list()
        if self.skipping_section:
            return
        if not items:
            return

        if self.next_is_quiz:
            self.next_is_quiz = False
            self.add_widget(WIDGET_QUIZ, content=self.build_quiz(items))
            return

        if items[0]["ordered"]:
            self.add_widget(WIDGET_NUMBERED_LIST, items=[self.build_item(i) for i in items])
        else:
            self.add_widget(WIDGET_BULLET_LIST, items=[i["text"] for i in items])

    def collect_list(self) -> list[dict]:
        """Collect one list, nesting children by indentation."""
        stack: list[tuple[int, list[dict]]] = []
        root: list[dict] = []
        current: list[dict] = root
        base_indent: int | None = None
        root_ordered: bool | None = None

        while self.i < len(self.lines):
            line = self.lines[self.i]
            match = LIST_ITEM_RE.match(line)

            if match is None:
                if not line.strip():
                    # A blank line only ends the list if no list item follows.
                    lookahead = self.i + 1
                    while lookahead < len(self.lines) and not self.lines[lookahead].strip():
                        lookahead += 1
                    if lookahead < len(self.lines) and LIST_ITEM_RE.match(self.lines[lookahead]):
                        self.i = lookahead
                        continue
                break

            indent = len(match.group(1).expandtabs(4))
            ordered = match.group(3) is not None

            if base_indent is None:
                base_indent = indent
                root_ordered = ordered
            elif not stack and indent <= base_indent and ordered != root_ordered:
                # "- a" then "1. b" are two lists; handle_list picks one widget
                # type per call, so stop and let the next call own the second.
                break

            text = self.text(match.group(4))
            self.i += 1

            if indent > base_indent:
                parent = current[-1] if current else None
                if parent is not None:
                    stack.append((base_indent, current))
                    current = parent["children"]
                    base_indent = indent
            else:
                while indent < base_indent and stack:
                    base_indent, current = stack.pop()

            current.append({"text": text, "ordered": ordered, "children": []})

        return root

    def build_item(self, item: dict) -> dict:
        """Shape one collected list item for a numbered_list widget."""
        entry: dict = {"content": item["text"]}
        if item["children"]:
            entry["children"] = [c["text"] for c in item["children"]]
        return entry

    def build_quiz(self, items: list[dict]) -> list[dict]:
        """`{:.quiz}` lists: numbered children are answers, bulleted ones are not."""
        questions = []
        for item in items:
            options = [
                {"option": child["text"], "isAnswer": child["ordered"]}
                for child in item["children"]
            ]
            if not options:
                self.warnings.append(f"quiz question without options: {item['text']!r}")
                continue
            if not any(o["isAnswer"] for o in options):
                self.warnings.append(f"quiz question without an answer: {item['text']!r}")
            questions.append({"question": item["text"], "options": options})
        return questions

    def render_bibliography(self) -> None:
        """{% bibliography --cited %} -> the References heading and its list."""
        entries = self.citations.rendered()
        for key in self.citations.missing:
            self.warnings.append(f"cited key not found in _bibliography: {key!r}")
        if not entries:
            return
        self.skipping_section = False
        if self.pending_references is not None:
            self.add_section_heading(self.pending_references, in_toc=True)
            self.pending_references = None
        self.add_widget(WIDGET_NUMBERED_LIST, items=[{"content": e} for e in entries])

    def handle_liquid(self, tag: str) -> None:
        """Translate a Liquid tag into its widget, or warn if unmapped."""
        self.i += 1

        if tag.startswith("bibliography"):
            self.render_bibliography()
            return

        include = INCLUDE_RE.match(tag)
        if include is None:
            if self.skipping_section:
                return
            self.warnings.append(f"unhandled liquid tag: {{% {tag} %}}")
            return

        name, rest = include.group(1), include.group(2)
        # Structural includes describe the document's shape. One chapter files its
        # chapter_toc under "## Table of contents" instead of "## Chapter contents",
        # so it must not be dropped along with that section.
        if self.skipping_section and name not in STRUCTURAL_INCLUDES:
            return

        args = dict(INCLUDE_ARG_RE.findall(rest))

        if name == IMAGE_INCLUDE:
            content = {"link": args.get("url", "")}
            if args.get("description"):
                content["description"] = args["description"]
            self.add_widget(WIDGET_IMAGE, content=content)
        elif name == CHAPTER_TOC_INCLUDE:
            self.add_widget(WIDGET_CHAPTER_CONTENTS, items=[])  # filled in by the caller
        elif name in INCLUDE_WIDGETS:
            self.add_widget(INCLUDE_WIDGETS[name])
        else:
            self.warnings.append(f"unhandled include: {name}")

    def handle_iframe(self) -> None:
        """Turn an embedded iframe into an image widget carrying its src."""
        block: list[str] = []
        while self.i < len(self.lines):
            block.append(self.lines[self.i])
            self.i += 1
            if "</iframe>" in block[-1].lower() or "/>" in block[-1]:
                break

        if self.skipping_section:
            return
        match = IFRAME_SRC_RE.search("\n".join(block))
        if match is None:
            self.warnings.append("iframe without a src attribute")
            return
        self.add_widget(WIDGET_IMAGE, content={"link": match.group(1)})
