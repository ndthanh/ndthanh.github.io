from copy import deepcopy
import pytest
from banking_rag.fixtures import fixture
from banking_rag.structure import build_nodes, make_chunks, enrich_with_prep


def test_path_provenance_and_deterministic_ids():
    doc, parsed = fixture()
    nodes, warnings = build_nodes(parsed, doc["version_id"], doc["document_name"])
    assert warnings == []
    rows = make_chunks(nodes, doc)
    point = next(r for r in rows if r["point"] == "đ")
    assert point["article"] == "1" and point["clause"] == "1"
    assert "Chương I" in point["path_text"] and "Điều 1" in point["path_text"]
    assert point["start_page"] == 2
    assert point["element_ids"] == ["5"]
    assert len(point["ancestor_ids"]) == 4
    assert rows == make_chunks(nodes, doc)
    assert len({r["chunk_pk"] for r in rows}) == len(rows)


def test_versions_do_not_collide():
    doc, parsed = fixture()
    nodes, _ = build_nodes(parsed, doc["version_id"], doc["document_name"])
    before = {r["chunk_pk"] for r in make_chunks(nodes, doc)}
    doc["version_id"] = "different-version"
    nodes, _ = build_nodes(parsed, doc["version_id"], doc["document_name"])
    assert before.isdisjoint({r["chunk_pk"] for r in make_chunks(nodes, doc)})


def test_table_and_negation_preserved():
    doc, parsed = fixture()
    nodes, _ = build_nodes(parsed, doc["version_id"], doc["document_name"])
    rows = make_chunks(nodes, doc)
    assert any("<table>" in r["chunk_content"] and "02 ngày làm việc" in r["chunk_content"] for r in rows)
    assert any("Không được tự động" in r["chunk_content"] for r in rows)


def test_partial_parser_error_is_not_ignored():
    doc, parsed = fixture()
    parsed["error_status"] = [{"error_message": "OCR failed", "page_id": 1}]
    with pytest.raises(ValueError, match="PARSE_PARTIAL_ERROR"):
        build_nodes(parsed, doc["version_id"], doc["document_name"])


def test_missing_page_blocks_evidence():
    doc, parsed = fixture()
    parsed["document"]["elements"][0]["bbox"] = []
    nodes, warnings = build_nodes(parsed, doc["version_id"], doc["document_name"])
    assert any("MISSING_PAGE" in w for w in warnings)
    with pytest.raises(ValueError, match="MISSING_PAGE"):
        make_chunks(nodes, doc)


def test_toc_leaders_ignored():
    doc, parsed = fixture()
    parsed["document"]["elements"].insert(
        0, {"id": 900, "content": "Điều 99. Mục lục ........ 10", "bbox": [{"page_id": 0}]}
    )
    nodes, _ = build_nodes(parsed, doc["version_id"], doc["document_name"])
    assert not any(n.article == "99" for n in nodes)


def test_prep_does_not_replace_source_or_original_page():
    doc, parsed = fixture()
    nodes, _ = build_nodes(parsed, doc["version_id"], doc["document_name"])
    rows = make_chunks(nodes, doc)
    original = deepcopy(rows)
    result = enrich_with_prep(
        rows,
        lambda _: {
            "document": {
                "contents": [
                    {"chunk_to_embed": "Ngữ cảnh giả lập", "metadata": {"pages": [{"page_id": 999}]}}
                ]
            }
        },
    )
    for before, after in zip(original, result):
        assert before["chunk_content"] == after["chunk_content"]
        assert before["start_page"] == after["start_page"]
        assert before["chunk_pk"] == after["chunk_pk"]
        assert after["chunk_to_embed"] == "Ngữ cảnh giả lập"


def test_long_chunk_splits_within_node():
    doc, parsed = fixture()
    parsed["document"]["elements"][3]["content"] += " nội dung thử" * 200
    nodes, _ = build_nodes(parsed, doc["version_id"], doc["document_name"])
    rows = make_chunks(nodes, doc, 300)
    long_rows = [r for r in rows if r["clause"] == "1" and r["article"] == "1" and not r["point"]]
    assert len(long_rows) > 3
    assert long_rows[0]["next_chunk_id"] == long_rows[1]["chunk_pk"]
    assert all(r["node_id"] == long_rows[0]["node_id"] for r in long_rows)
