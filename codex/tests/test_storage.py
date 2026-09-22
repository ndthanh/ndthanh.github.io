from types import SimpleNamespace as NS
from unittest.mock import Mock
import pytest
from banking_rag.config import Config
from banking_rag.storage import SqlStore


def response(rows, next_chunk=None, truncated=False):
    return NS(
        statement_id="statement-1",
        status=NS(state=NS(value="SUCCEEDED")),
        manifest=NS(truncated=truncated, schema=NS(columns=[NS(name="value")])),
        result=NS(data_array=rows, next_chunk_index=next_chunk),
    )


def test_sql_parameters_not_interpolated_and_pages_drained():
    w = Mock()
    w.statement_execution.execute_statement.return_value = response([["one"]], 1)
    w.statement_execution.get_statement_result_chunk_n.return_value = NS(
        data_array=[["two"]], next_chunk_index=None
    )
    store = SqlStore(Config(warehouse_id="warehouse"), w)
    result = store.query("SELECT :question AS value", {"question": "' OR 1=1 --"})
    assert result == [{"value": "one"}, {"value": "two"}]
    args = w.statement_execution.execute_statement.call_args.kwargs
    assert args["statement"] == "SELECT :question AS value"
    assert args["parameters"][0].value == "' OR 1=1 --"
    w.statement_execution.get_statement_result_chunk_n.assert_called_once_with("statement-1", 1)


def test_truncated_evidence_fails_closed():
    w = Mock()
    w.statement_execution.execute_statement.return_value = response([["partial"]], truncated=True)
    with pytest.raises(RuntimeError, match="SQL_TRUNCATED"):
        SqlStore(Config(), w).query("SELECT 1")


def test_failed_sql_is_not_empty_search():
    w = Mock()
    w.statement_execution.execute_statement.return_value = NS(
        statement_id="failed", status=NS(state=NS(value="FAILED"), error=NS(error_code="PERMISSION_DENIED"))
    )
    with pytest.raises(RuntimeError, match="PERMISSION_DENIED"):
        SqlStore(Config(), w).query("SELECT 1")


def test_validity_filter_has_exclusive_end_and_ready_gate():
    store = SqlStore(Config(), Mock())
    store.query = Mock(return_value=[{"version_id": "v1"}])
    assert store.ready_versions("2026-09-19") == ["v1"]
    sql, params = store.query.call_args.args
    assert "d.status='READY'" in sql and "AS DATE)>CAST(:day" in sql
    assert params == {"day": "2026-09-19"}
