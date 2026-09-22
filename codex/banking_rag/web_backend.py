"""App identity -> UC Volume / ingestion Job / Model Serving. No browser tokens."""

from datetime import datetime, timezone
from hashlib import sha256
from io import BytesIO
from pathlib import PurePath
import zipfile
from threading import Lock

from .structure import stable_id
from .storage import SqlStore


def validate_file(filename, data, config):
    filename = PurePath(filename.replace("\\", "/")).name
    if not filename or len(filename) > 180:
        raise ValueError("Tên tệp không hợp lệ (tối đa 180 ký tự).")
    suffix = PurePath(filename).suffix.lower()
    if suffix not in {".pdf", ".docx"}:
        raise ValueError("Chỉ hỗ trợ PDF và DOCX.")
    if not data or len(data) > config.max_upload_mb * 1024 * 1024:
        raise ValueError(f"Tệp phải có dữ liệu và không quá {config.max_upload_mb} MB.")
    pages = 0
    if suffix == ".pdf":
        from pypdf import PdfReader

        if not data.startswith(b"%PDF-"):
            raise ValueError("Nội dung không phải PDF.")
        try:
            reader = PdfReader(BytesIO(data))
            if reader.is_encrypted:
                raise ValueError("Không hỗ trợ PDF được mã hóa.")
            pages = len(reader.pages)
        except Exception as exc:
            raise ValueError("Không đọc được PDF hoặc tệp được mã hóa.") from exc
        if not 0 < pages <= config.max_pages:
            raise ValueError(f"PDF cần có 1–{config.max_pages} trang.")
    else:
        try:
            with zipfile.ZipFile(BytesIO(data)) as z:
                if "word/document.xml" not in z.namelist():
                    raise ValueError("Thiếu nội dung Word.")
                if sum(i.file_size for i in z.infolist()) > 150 * 1024 * 1024:
                    raise ValueError("DOCX giải nén vượt giới hạn 150 MB.")
        except (zipfile.BadZipFile, ValueError) as exc:
            raise ValueError("DOCX không hợp lệ hoặc vượt giới hạn giải nén.") from exc
    return filename, suffix, pages


class RemoteBackend:
    def __init__(self, config, workspace=None):
        from databricks.sdk import WorkspaceClient

        config.validate_remote()
        self.c, self.w = config, workspace or WorkspaceClient()
        self.store = SqlStore(config, self.w)
        self.upload_lock = Lock()

    def documents(self):
        # Do not expose source storage URI, checksum or privileged traceback in UI.
        fields = {
            "version_id",
            "document_name",
            "status",
            "error_code",
            "page_count",
            "chunk_count",
            "updated_at",
            "job_run_id",
        }
        return [{k: v for k, v in row.items() if k in fields} for row in self.store.documents()]

    def upload(self, filename, data):
        with self.upload_lock:
            return self._upload(filename, data)

    def _upload(self, filename, data):
        if not self.c.ingestion_job_id:
            raise ValueError("Cần cấu hình BANKING_JOB_ID trước khi tải tài liệu.")
        filename, suffix, pages = validate_file(filename, data, self.c)
        checksum = sha256(data).hexdigest()
        # Same filename is a logical document. Renamed policies require manual identity review.
        doc_id = stable_id(filename.casefold())
        version = stable_id(doc_id, checksum)
        try:
            existing = self.store.document(version)
            return {"version_id": version, "status": existing["status"], "duplicate": True}
        except KeyError:
            pass
        folder = f"{self.c.volume_path}/{doc_id}/{version}"
        uri = f"{folder}/source{suffix}"
        self.w.files.create_directory(folder)
        # Content-addressed path: safe recovery when storage upload succeeded but registry failed.
        self.w.files.upload(uri, BytesIO(data), overwrite=True)
        stamp = datetime.now(timezone.utc).isoformat()
        self.store.query(
            f"""INSERT INTO {self.c.table("banking_document_registry")}
            (version_id,document_id,document_name,source_uri,checksum,status,error_code,page_count,chunk_count,summary_count,job_run_id,created_at,updated_at)
            VALUES (:v,:d,:name,:uri,:sha,'QUEUED','',CAST(:pages AS INT),0,0,'',:t,:t)""",
            {
                "v": version,
                "d": doc_id,
                "name": filename,
                "uri": uri,
                "sha": checksum,
                "pages": pages,
                "t": stamp,
            },
        )
        return self.start_job(version)

    def start_job(self, version):
        try:
            run = self.w.jobs.run_now(
                job_id=self.c.ingestion_job_id,
                notebook_params={"version_id": version},
                idempotency_token=stable_id(version, "ingest"),
            )
            run_id = str(run.run_id)
            self.store.query(
                f"UPDATE {self.c.table('banking_document_registry')} SET job_run_id=:r WHERE version_id=:v",
                {"r": run_id, "v": version},
            )
            return {"version_id": version, "status": "QUEUED", "job_run_id": run_id}
        except Exception:
            self.store.query(
                f"UPDATE {self.c.table('banking_document_registry')} SET status='FAILED',error_code='JOB_SUBMISSION' WHERE version_id=:v",
                {"v": version},
            )
            raise

    def chat(self, question, as_of):
        # Use authenticated SDK transport for the ResponsesAgent contract.
        response = self.w.api_client.do(
            "POST",
            f"/serving-endpoints/{self.c.serving_endpoint}/invocations",
            body={"input": [{"role": "user", "content": question}], "custom_inputs": {"as_of": as_of}},
        )
        result = response.get("custom_outputs")
        if not isinstance(result, dict) or "answer" not in result:
            raise RuntimeError("SERVING_CONTRACT: expected ResponsesAgent custom_outputs")
        return result


class DemoBackend:
    """UI-only, deliberately no synthetic answer masquerading as a deployed model."""

    def documents(self):
        return []

    def upload(self, filename, data):
        raise ValueError("Chế độ xem giao diện: chưa kết nối Databricks, tệp không được lưu.")

    def chat(self, question, as_of):
        return {
            "answer": "Đây là chế độ xem giao diện. Chưa có tài liệu hoặc kết nối Databricks; hệ thống chưa thực hiện truy xuất hay gọi mô hình.",
            "sources": [],
            "status": "demo",
            "latency_ms": 0,
            "as_of": as_of,
        }
