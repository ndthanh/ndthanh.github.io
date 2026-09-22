from dataclasses import dataclass, field
from hashlib import sha256
import re

from .vietnamese import fold, legal_markers, normalize


def stable_id(*parts):
    return sha256("\x1f".join(str(p) for p in parts).encode()).hexdigest()[:32]


@dataclass
class Node:
    node_id: str
    parent_node_id: str
    kind: str
    number: str
    title: str
    depth: int
    ancestors: list[str]
    path: list[str]
    blocks: list[dict] = field(default_factory=list)
    article: str = ""
    clause: str = ""
    point: str = ""


def heading(text, current):
    # A dotted TOC leader is not a source heading.
    if re.search(r"\.{3,}\s*\d+\s*$", text):
        return None
    patterns = [
        ("part", 1, r"^Phần\s+([IVXLCDM\d]+)\b"),
        ("chapter", 2, r"^Chương\s+([IVXLCDM\d]+)\b"),
        ("section", 3, r"^Mục\s+(\d+)\b"),
        ("article", 4, r"^Điều\s+(\d+[a-zđ]?)\s*[.:]?"),
        ("appendix", 1, r"^Phụ lục\s+([IVXLCDM\d]+)\b"),
    ]
    for kind, level, pattern in patterns:
        m = re.match(pattern, text, re.I)
        if m:
            return kind, level, m.group(1).lower()
    if current.article:
        m = re.match(r"^(?:Khoản\s+)?(\d+)\.\s+", text, re.I)
        if m:
            return "clause", 5, m.group(1)
        m = re.match(r"^(?:Điểm\s+)?([a-zđ])\)\s+", text, re.I)
        if m and current.clause:
            return "point", 6, m.group(1).lower()
    return None


def build_nodes(parsed, version_id, document_name):
    if parsed.get("error_status"):
        raise ValueError("PARSE_PARTIAL_ERROR: inspect Bronze error_status before publishing")
    elements = parsed.get("document", {}).get("elements", [])
    if not elements:
        raise ValueError("PARSE_EMPTY: no document.elements in v2 output")
    root = Node(stable_id(version_id, "root"), "", "document", "", document_name, 0, [], [document_name])
    nodes, stack, warnings = [root], [root], []
    for element in elements:
        kind = element.get("type", "text")
        if kind in {"page_header", "page_footer", "page_number", "figure"}:
            continue
        content = element.get("content") or ""
        pages = sorted(
            {int(b["page_id"]) + 1 for b in element.get("bbox", []) if b.get("page_id") is not None}
        )
        lines = [content] if kind == "table" else content.splitlines()
        for line_no, raw in enumerate(lines):
            clean = normalize(raw)
            if not clean:
                continue
            if re.search(r"\.{3,}\s*\d+\s*$", clean) or fold(clean) == "muc luc":
                continue
            h = None if kind == "table" else heading(clean, stack[-1])
            if h:
                node_type, depth, number = h
                while stack[-1].depth >= depth:
                    stack.pop()
                parent = stack[-1]
                node = Node(
                    stable_id(version_id, element["id"], line_no),
                    parent.node_id,
                    node_type,
                    number,
                    clean[:240],
                    depth,
                    parent.ancestors + [parent.node_id],
                    parent.path + [clean[:240]],
                    article=number if node_type == "article" else (parent.article if depth > 4 else ""),
                    clause=number if node_type == "clause" else (parent.clause if depth > 5 else ""),
                    point=number if node_type == "point" else "",
                )
                nodes.append(node)
                stack.append(node)
            if not pages:
                warnings.append(f"MISSING_PAGE: element {element['id']}")
            stack[-1].blocks.append(
                {"text": raw, "element_id": str(element["id"]), "line": line_no, "pages": pages, "type": kind}
            )
    if len(nodes) == 1:
        warnings.append("NO_LEGAL_HEADINGS: verify outline; document-level paths only")
    return nodes, list(dict.fromkeys(warnings))


def split_block(block, size):
    text = block["text"]
    if block["type"] == "table":
        if len(text) > size * 3:
            raise ValueError("TABLE_TOO_LARGE: review/split by rows with repeated headers before indexing")
        return [block]
    result, start = [], 0
    while start < len(text):
        end = min(start + size, len(text))
        if end < len(text):
            stop = text.rfind(" ", start + size // 2, end)
            if stop > start:
                end = stop + 1
        result.append({**block, "text": text[start:end]})
        start = end
    return result


def make_chunks(nodes, doc, max_chars=2200):
    rows = []
    for node in nodes:
        blocks = [piece for b in node.blocks for piece in split_block(b, max_chars)]
        batches, current, length = [], [], 0
        for block in blocks:
            if current and length + len(block["text"]) > max_chars:
                batches.append(current)
                current, length = [], 0
            current.append(block)
            length += len(block["text"]) + 1
        if current:
            batches.append(current)
        for ordinal, batch in enumerate(batches):
            raw = "\n".join(b["text"] for b in batch)
            pages = sorted({p for b in batch for p in b["pages"]})
            if not pages:
                raise ValueError("MISSING_PAGE: cannot publish evidence without page provenance")
            path = " > ".join(node.path)
            content = normalize(raw)
            rows.append(
                {
                    "chunk_pk": stable_id(doc["version_id"], node.node_id, ordinal, content),
                    "chunk_id": str(ordinal),
                    "document_id": doc["document_id"],
                    "document_name": doc["document_name"],
                    "version_id": doc["version_id"],
                    "node_id": node.node_id,
                    "parent_node_id": node.parent_node_id,
                    "ancestor_ids": node.ancestors,
                    "path_text": path,
                    "article": node.article,
                    "clause": node.clause,
                    "point": node.point,
                    "chunk_content": raw,
                    "chunk_to_embed": f"Văn bản: {doc['document_name']}\nĐường dẫn: {path}\nNội dung:\n{content}",
                    "search_folded": fold(content),
                    "start_page": min(pages),
                    "end_page": max(pages),
                    "element_ids": list(dict.fromkeys(b["element_id"] for b in batch)),
                    "source_uri": doc["source_uri"],
                    "legal_markers": legal_markers(content),
                    "chunk_position": len(rows),
                }
            )
    for node in nodes:
        local = [r for r in rows if r["node_id"] == node.node_id]
        for i, row in enumerate(local):
            row["previous_chunk_id"] = local[i - 1]["chunk_pk"] if i else ""
            row["next_chunk_id"] = local[i + 1]["chunk_pk"] if i + 1 < len(local) else ""
    return rows


def enrich_with_prep(rows, prepare):
    """Preserve legal boundaries + source offsets. Generated prep text is search-only.

    Call per bounded source chunk, not whole PDF: prep may otherwise merge legal nodes.
    Prep's local page numbers/IDs are deliberately not used as original PDF citations.
    """
    for row in rows:
        result = prepare(row["chunk_to_embed"])
        if result.get("error_status"):
            raise ValueError("PREP_ERROR: inspect ai_prep_search output")
        items = result.get("document", {}).get("contents", [])
        if not items:
            raise ValueError("PREP_EMPTY: no document.contents")
        enriched = "\n".join(i["chunk_to_embed"] for i in items)
        if len(enriched.encode("utf-8")) >= 30000:
            raise ValueError("PREP_TOO_LARGE: embedding source exceeds project byte budget")
        row["chunk_to_embed"] = enriched
    return rows
