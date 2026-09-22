import logging
import os
from datetime import date
from pathlib import Path
import uuid

from fastapi import FastAPI, File, HTTPException, Request, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
from starlette.concurrency import run_in_threadpool

from banking_rag.config import Config
from banking_rag.web_backend import DemoBackend, RemoteBackend


class ChatRequest(BaseModel):
    question: str = Field(min_length=1, max_length=4000)
    as_of: date


def create_app(backend=None):
    app = FastAPI(title="BCT Banking Knowledge Assistant", docs_url=None, redoc_url=None)
    c = Config.load()
    demo = os.getenv("BANKING_DEMO") == "1"
    app.state.backend = backend

    def service():
        if app.state.backend is None:
            app.state.backend = DemoBackend() if demo else RemoteBackend(c)
        return app.state.backend

    @app.middleware("http")
    async def security(request: Request, call_next):
        # Browser same-origin writes only. Databricks Apps provides upstream authentication.
        if request.method == "POST":
            origin = request.headers.get("origin")
            from urllib.parse import urlsplit

            if (origin and urlsplit(origin).netloc != request.headers.get("host")) or request.headers.get(
                "sec-fetch-site"
            ) == "cross-site":
                return JSONResponse({"detail": "Cross-origin request blocked"}, status_code=403)
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'self'"
        )
        response.headers["Cache-Control"] = "no-store"
        return response

    @app.exception_handler(Exception)
    async def unexpected(request, exc):
        code = str(uuid.uuid4())[:12]
        logging.exception("request_id=%s path=%s", code, request.url.path, exc_info=exc)
        return JSONResponse(
            {
                "detail": f"Không thể hoàn tất yêu cầu. Kiểm tra log Databricks Apps, mã {code}. Đây là lỗi hệ thống, không phải kết luận thiếu tài liệu."
            },
            status_code=503,
        )

    @app.get("/api/info")
    def info():
        return {"demo": demo, "max_upload_mb": c.max_upload_mb, "max_pages": c.max_pages}

    @app.get("/api/documents")
    def documents():
        return {"documents": service().documents()}

    @app.post("/api/documents")
    async def upload(file: UploadFile = File(...)):
        data = bytearray()
        try:
            while chunk := await file.read(1024 * 1024):
                data.extend(chunk)
                if len(data) > c.max_upload_mb * 1024 * 1024:
                    raise HTTPException(413, f"Tệp vượt giới hạn {c.max_upload_mb} MB.")
            try:
                return await run_in_threadpool(service().upload, file.filename or "", bytes(data))
            except ValueError as exc:
                raise HTTPException(400, str(exc)) from exc
        finally:
            await file.close()

    @app.post("/api/chat")
    def chat(body: ChatRequest):
        if not body.question.strip():
            raise HTTPException(422, "Câu hỏi không được để trống.")
        return service().chat(body.question.strip(), body.as_of.isoformat())

    static = Path(__file__).parent / "static"
    app.mount("/static", StaticFiles(directory=static), name="static")

    @app.get("/")
    def index():
        return FileResponse(static / "index.html")

    return app


app = create_app()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("DATABRICKS_APP_PORT", "8000")))
