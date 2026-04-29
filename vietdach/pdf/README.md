# PDFTools Signature Studio

Frontend-only web app for preparing signatures/stamps from phone photos, placing them on PDF/image pages, doing basic annotation, and exporting a PDF while preserving original PDF text/vector content.

## Focus

The main workflow is signature extraction:

1. Upload JPG/PNG signature or stamp.
2. Process in a Web Worker using canvas pixel data.
3. Crop manually or use auto crop to remove extra paper around the signature.
4. Preview transparent PNG.
5. Drag or add the processed signature onto a PDF/image page.
6. Save processed signatures in `localStorage`.

The extraction worker uses adaptive local background estimation, grayscale denoise, soft alpha edges, edge-only alpha smoothing, light speckle removal, optional alpha thickening, and background unblending to reduce white halos.

## Project Structure

```text
.
├── index.html
├── styles.css
├── src
│   ├── app.js
│   └── signature-worker.js
└── README.md
```

## Run Locally

No install step is required.

```bash
python3 -m http.server 5173
```

Open:

```text
http://localhost:5173
```

The app loads Tailwind, Fabric.js, PDF.js, pdf-lib, Sortable, and Lucide from public CDNs. Documents and signature images are processed locally in the browser and are not uploaded.

PDF preview uses a PDF.js-style page viewer: pages are mounted as separate DOM surfaces, visible PDF pages are rendered lazily at device-pixel-ratio quality, and each page has an independent Fabric.js overlay for signatures and annotations.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to repository `Settings` → `Pages`.
3. Set source to the branch containing these files.
4. Set folder to `/root`.
5. Save and open the generated Pages URL.

No build command is needed.

## Current Capabilities

- Upload PDF and image documents.
- Render PDF pages lazily with PDF.js and edit on a per-page Fabric overlay.
- Reorder pages in the sidebar.
- Upload and process signature/stamp photos.
- Auto crop and manual crop before signature extraction.
- Export transparent PNG signatures internally for placement.
- Resize, rotate, and drag signatures with Fabric.js controls.
- Basic text, line, and rectangle annotation.
- Rectangle border and fill color controls.
- Viewer zoom controls.
- Export PDF with low, medium, or high overlay quality.

## Notes

For pages imported from a PDF, export copies the original PDF page and draws the signature/annotation overlay on top. This preserves the original page text and vector content. Pages imported from images are exported as image-backed PDF pages because the source content is already raster.
