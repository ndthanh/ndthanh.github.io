import unicodedata
import pytest
from banking_rag.vietnamese import normalize, fold, query_plan


def test_nfc_does_not_rewrite_legal_meaning():
    text = "Không được trả quá 450.000.000 đồng; tối đa 03 ngày làm việc, và/hoặc ngoại lệ."
    assert normalize(unicodedata.normalize("NFD", text)) == text


@pytest.mark.parametrize(
    "text,expected",
    [
        ("điểm đ khoản 2 Điều 5", {"point": "đ", "clause": "2", "article": "5"}),
        ("diem d khoan 2 dieu 5", {"point": "d", "clause": "2", "article": "5"}),
    ],
)
def test_point_d_is_not_point_dd(text, expected):
    assert query_plan(text)["references"] == expected


def test_abbreviation_expansion_keeps_original():
    p = query_plan("KYC cần CCCD không?")
    assert p["variants"][0] == "KYC cần CCCD không?"
    assert "căn cước công dân" in p["variants"][1]
    assert "negation" in p["flags"]


def test_fold_is_only_search_alias():
    assert fold("Điều kiện") == "dieu kien"
    assert query_plan("Hồ sơ ngày 01/02/2026")["dates"] == ["01/02/2026"]


def test_flags():
    assert set(query_plan("So sánh tất cả ngoại lệ khi không được áp dụng")["flags"]) == {
        "comparison",
        "global",
        "exception",
        "condition",
        "negation",
    }
