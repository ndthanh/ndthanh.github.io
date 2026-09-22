"""Invented policy for engineering tests only. Never a real banking regulation."""

from .structure import stable_id


def fixture():
    text = [
        ("title", "CHÍNH SÁCH GIẢ LẬP — CHỈ DÙNG KIỂM THỬ", 0),
        ("section_header", "Chương I. Nhận biết khách hàng giả lập", 0),
        ("section_header", "Điều 1. Hồ sơ kiểm thử", 0),
        ("text", "1. Khách hàng cá nhân phải cung cấp thẻ căn cước còn hiệu lực.", 0),
        ("text", "a) Không được chấp nhận giấy tờ hết hiệu lực.", 0),
        (
            "text",
            "đ) Trừ trường hợp kiểm thử ngoại lệ đã được người có thẩm quyền phê duyệt bằng văn bản.",
            1,
        ),
        (
            "text",
            "2. Thời hạn xử lý hồ sơ giả lập là tối đa 03 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ.",
            1,
        ),
        ("section_header", "Điều 2. Giao dịch giả lập", 1),
        (
            "text",
            "1. Giao dịch từ 450.000.000 đồng trở lên phải được chuyển kiểm tra thủ công trong bộ dữ liệu giả lập này.",
            1,
        ),
        ("text", "2. Không được tự động kết luận giao dịch là gian lận chỉ dựa vào số tiền.", 1),
        (
            "table",
            "<table><tr><th>Loại</th><th>Thời hạn giả lập</th></tr><tr><td>Hồ sơ bổ sung</td><td>02 ngày làm việc</td></tr></table>",
            1,
        ),
    ]
    version = stable_id("synthetic-vi-policy", "v1")
    doc = {
        "version_id": version,
        "document_id": "synthetic-vi-policy",
        "document_name": "GIẢ LẬP - Chính sách kiểm thử",
        "source_uri": "fixture://synthetic-vi-policy/v1",
    }
    parsed = {
        "document": {
            "pages": [{"id": 0}, {"id": 1}],
            "elements": [
                {
                    "id": i,
                    "type": kind,
                    "content": content,
                    "bbox": [{"page_id": page, "coord": [0, 0, 100, 100]}],
                }
                for i, (kind, content, page) in enumerate(text)
            ],
        },
        "error_status": [],
        "metadata": {"version": "2.0"},
    }
    return doc, parsed
