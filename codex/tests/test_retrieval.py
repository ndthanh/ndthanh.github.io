from unittest.mock import Mock
from banking_rag.config import Config
from banking_rag.retrieval import decode_search, fuse, Retriever


def test_manifest_column_order():
    assert decode_search(
        {
            "manifest": {"columns": [{"name": "score"}, {"name": "chunk_pk"}]},
            "result": {"data_array": [[0.4, "c1"]]},
        }
    ) == [{"score": 0.4, "chunk_pk": "c1"}]


def test_rank_fusion_ignores_incomparable_scores():
    rows = fuse(
        [
            [{"chunk_pk": "a", "score": 0.1}, {"chunk_pk": "b", "score": 900}],
            [{"chunk_pk": "a", "score": 0.01}],
        ]
    )
    assert rows[0]["chunk_pk"] == "a"


def test_no_ready_versions_does_not_search():
    store, client = Mock(), Mock()
    store.ready_versions.return_value = []
    assert Retriever(Config(), store, client).retrieve("KYC?", "2026-09-19") == []
    client.get_index.assert_not_called()


def test_missing_explicit_article_not_replaced():
    store, client = Mock(), Mock()
    store.ready_versions.return_value = ["v1"]
    store.exact.return_value = []
    assert Retriever(Config(), store, client).retrieve("Điều 999 quy định gì?", "2026-09-19") == []
    client.get_index.assert_not_called()


def test_query_filter_is_published_version_scope():
    store, client = Mock(), Mock()
    client.get_index.return_value.similarity_search.return_value = {}
    Retriever(Config(), store, client).search("banking_detail_index", "KYC?", ["v1"])
    args = client.get_index.return_value.similarity_search.call_args.kwargs
    assert args["filters"] == {"version_id": ["v1"]}
    assert args["query_type"] == "ANN"
