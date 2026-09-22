from datetime import timedelta
from unittest.mock import Mock, patch
from banking_rag.config import Config
from banking_rag.pipeline import sync_indexes


def test_index_scan_uses_scan_schema_not_query_schema():
    c = Config(use_summaries=False, embedding_endpoint="embedding")
    client = Mock()
    client.list_endpoints.return_value = {"endpoints": [{"name": c.search_endpoint}]}
    client.list_indexes.return_value = {"vector_indexes": [{"name": c.table("banking_detail_index")}]}
    index = client.get_index.return_value
    index.scan.side_effect = [
        {
            "data": [{"fields": [{"key": "chunk_pk", "value": {"string_value": "c1"}}]}],
            "last_primary_key": "c1",
        },
        {"data": []},
    ]
    with patch("databricks.ai_search.client.AISearchClient", return_value=client):
        sync_indexes(c, {"banking_detail_index": {"c1"}, "banking_summary_index": set()})
    index.sync.assert_called_once()
    index.wait_until_ready.assert_called_once_with(timeout=timedelta(minutes=30), wait_for_updates=True)
    assert index.scan.call_count == 2


def test_created_index_syncs_only_supported_search_columns():
    c = Config(use_summaries=False, embedding_endpoint="embedding")
    client = Mock()
    client.list_endpoints.return_value = {"endpoints": []}
    client.list_indexes.return_value = {"vector_indexes": []}
    client.create_delta_sync_index.return_value.scan.return_value = {"data": []}
    with patch("databricks.ai_search.client.AISearchClient", return_value=client):
        sync_indexes(c, {"banking_detail_index": set(), "banking_summary_index": set()})
    args = client.create_delta_sync_index.call_args.kwargs
    assert args["pipeline_type"] == "TRIGGERED"
    assert "ancestor_ids" not in args["columns_to_sync"]
    assert "version_id" in args["columns_to_sync"]
