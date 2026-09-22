from io import BytesIO
from unittest.mock import Mock
import zipfile
import pytest
from fastapi.testclient import TestClient
from pypdf import PdfWriter
from app import create_app
from banking_rag.config import Config
from banking_rag.web_backend import validate_file


def test_valid_pdf_and_safe_filename():
    writer = PdfWriter()
    writer.add_blank_page(width=100, height=100)
    b = BytesIO()
    writer.write(b)
    name, suffix, pages = validate_file("../../test.pdf", b.getvalue(), Config())
    assert (name, suffix, pages) == ("test.pdf", ".pdf", 1)


@pytest.mark.parametrize(
    "filename,data",
    [("bad.exe", b"123"), ("fake.pdf", b"not a pdf"), ("empty.pdf", b""), ("broken.docx", b"not a zip")],
)
def test_bad_upload_rejected(filename, data):
    with pytest.raises(ValueError):
        validate_file(filename, data, Config())


def test_valid_docx_structure():
    b = BytesIO()
    with zipfile.ZipFile(b, "w") as z:
        z.writestr("word/document.xml", "<document/>")
    assert validate_file("test.docx", b.getvalue(), Config())[2] == 0


def test_api_and_security_headers():
    backend = Mock()
    backend.documents.return_value = []
    backend.chat.return_value = {"answer": "test", "sources": []}
    client = TestClient(create_app(backend))
    assert client.get("/").status_code == 200
    assert "script-src" in client.get("/").headers["content-security-policy"]
    assert client.get("/api/documents").json() == {"documents": []}
    result = client.post("/api/chat", json={"question": "KYC?", "as_of": "2026-09-19"})
    assert result.status_code == 200
    backend.chat.assert_called_once_with("KYC?", "2026-09-19")
    assert client.post("/api/chat", json={"question": "  ", "as_of": "2026-09-19"}).status_code == 422
    assert client.post("/api/chat", json={"question": "KYC?", "as_of": "invalid"}).status_code == 422
    assert (
        client.post(
            "/api/chat",
            headers={"origin": "https://evil.example"},
            json={"question": "KYC?", "as_of": "2026-09-19"},
        ).status_code
        == 403
    )


def test_server_failure_is_503_with_support_id():
    backend = Mock()
    backend.documents.side_effect = RuntimeError("secret backend trace")
    client = TestClient(create_app(backend), raise_server_exceptions=False)
    result = client.get("/api/documents")
    assert result.status_code == 503
    assert "secret backend trace" not in result.text
    assert "mã" in result.text
