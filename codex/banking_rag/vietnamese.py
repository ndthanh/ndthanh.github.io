"""Conservative Vietnamese normalization. Never rewrite the source evidence."""

import re
import unicodedata

ALIASES = {
    "KYC": "nhận biết khách hàng xác minh danh tính",
    "AML": "phòng chống rửa tiền",
    "CCCD": "căn cước công dân",
    "CMND": "chứng minh nhân dân",
    "NHNN": "Ngân hàng Nhà nước",
    "EDD": "thẩm định tăng cường",
    "CDD": "thẩm định khách hàng",
    "KH": "khách hàng",
    "KHCN": "khách hàng cá nhân",
    "KHDN": "khách hàng doanh nghiệp",
}


def normalize(text):
    text = unicodedata.normalize("NFC", text)
    # Preserve negation, accents, punctuation, amount separators, line boundaries.
    return re.sub(r"[\t\u00a0 ]+", " ", text.replace("\u200b", "").replace("\ufeff", "")).strip()


def fold(text):
    return "".join(
        c
        for c in unicodedata.normalize("NFD", normalize(text).lower().replace("đ", "d"))
        if not unicodedata.combining(c)
    )


def query_plan(question):
    q = normalize(question)
    f = fold(q)
    # Fold accents for keywords, but retain đ: legal points d and đ are distinct.
    reference_text = "".join(
        c for c in unicodedata.normalize("NFD", q.lower()) if not unicodedata.combining(c)
    )
    reference_text = reference_text.replace("đieu", "dieu").replace("điem", "diem")
    refs = {}
    for key, pattern in {
        "article": r"\bdieu\s+(\d+[a-z]?)\b",
        "clause": r"\bkhoan\s+(\d+(?:\.\d+)*)\b",
        "point": r"\bdiem\s+([a-zđ])\b",
    }.items():
        found = re.search(pattern, reference_text)
        if found:
            refs[key] = found.group(1)
    aliases = [
        f"{abbr}: {meaning}" for abbr, meaning in ALIASES.items() if re.search(rf"\b{abbr}\b", q, re.I)
    ]
    # Original query is always retained; expansion is a separate retrieval candidate.
    variants = [q]
    if aliases:
        variants.append(q + "\nThuật ngữ tìm kiếm: " + "; ".join(aliases))
    flags = [
        name
        for name, pattern in {
            "negation": r"\b(khong|cam|chua|khong duoc)\b",
            "exception": r"\b(tru|ngoai le|ngoai tru)\b",
            "condition": r"\b(neu|khi|truong hop|voi dieu kien)\b",
            "comparison": r"\b(so sanh|khac nhau|doi chieu)\b",
            "global": r"\b(tat ca|toan bo|tong hop)\b",
        }.items()
        if re.search(pattern, f)
    ]
    dates = re.findall(r"\b\d{1,2}[/.-]\d{1,2}[/.-]\d{4}\b", q)
    codes = re.findall(r"\b\d+[/-]\d{4}[/-][\wĐđ-]+\b", q)
    return {
        "question": q,
        "variants": variants[:2],
        "references": refs,
        "flags": flags,
        "dates": dates,
        "policy_codes": codes,
        "accentless": q.lower() == f,
    }


def legal_markers(text):
    f = fold(text)
    return [
        term
        for term in (
            "khong duoc",
            "phai",
            "duoc phep",
            "tru truong hop",
            "ngoai tru",
            "neu",
            "toi da",
            "toi thieu",
            "ngay lam viec",
        )
        if term in f
    ]
