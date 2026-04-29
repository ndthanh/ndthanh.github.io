/* global fabric, pdfjsLib, PDFLib, Sortable, lucide */

const els = {
  documentInput: document.getElementById("documentInput"),
  signatureInput: document.getElementById("signatureInput"),
  pageList: document.getElementById("pageList"),
  canvasDropZone: document.getElementById("canvasDropZone"),
  documentPages: document.getElementById("documentPages"),
  statusText: document.getElementById("statusText"),
  signatureCropCanvas: document.getElementById("signatureCropCanvas"),
  processedPreview: document.getElementById("processedPreview"),
  autoCropBtn: document.getElementById("autoCropBtn"),
  resetCropBtn: document.getElementById("resetCropBtn"),
  thresholdSlider: document.getElementById("thresholdSlider"),
  backgroundSlider: document.getElementById("backgroundSlider"),
  denoiseSlider: document.getElementById("denoiseSlider"),
  thresholdValue: document.getElementById("thresholdValue"),
  backgroundValue: document.getElementById("backgroundValue"),
  denoiseValue: document.getElementById("denoiseValue"),
  boldToggle: document.getElementById("boldToggle"),
  strongBgToggle: document.getElementById("strongBgToggle"),
  sigStats: document.getElementById("sigStats"),
  addSignatureBtn: document.getElementById("addSignatureBtn"),
  saveSignatureBtn: document.getElementById("saveSignatureBtn"),
  savedSignatures: document.getElementById("savedSignatures"),
  clearSignaturesBtn: document.getElementById("clearSignaturesBtn"),
  addTextBtn: document.getElementById("addTextBtn"),
  addLineBtn: document.getElementById("addLineBtn"),
  addRectBtn: document.getElementById("addRectBtn"),
  selectToolBtn: document.getElementById("selectToolBtn"),
  deleteBtn: document.getElementById("deleteBtn"),
  blankPageBtn: document.getElementById("blankPageBtn"),
  exportPdfBtn: document.getElementById("exportPdfBtn"),
  exportQuality: document.getElementById("exportQuality"),
  strokeColorInput: document.getElementById("strokeColorInput"),
  fillColorInput: document.getElementById("fillColorInput"),
  transparentFillInput: document.getElementById("transparentFillInput"),
  zoomOutBtn: document.getElementById("zoomOutBtn"),
  zoomSelect: document.getElementById("zoomSelect"),
  zoomInBtn: document.getElementById("zoomInBtn"),
};

const PDF_CSS_UNITS = 96 / 72;
const PDF_THUMBNAIL_SCALE = 0.18;
const DEFAULT_PAGE_WIDTH = 794;
const DEFAULT_PAGE_HEIGHT = 1123;

const state = {
  pages: [],
  currentPageId: null,
  signatures: loadSavedSignatures(),
  processedSignature: null,
  signatureImage: null,
  signatureSource: null,
  signatureCrop: null,
  signatureCropView: null,
  cropPointer: null,
  pdfSources: new Map(),
  worker: new Worker("./src/signature-worker.js"),
  workerRequestId: 0,
  zoom: 1,
  observer: null,
};

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

init();

function init() {
  wireEvents();
  renderSavedSignatures();
  addBlankPage();
  lucide.createIcons();
  setStatus("Ready");
}

function wireEvents() {
  els.documentInput.addEventListener("change", handleDocumentFiles);
  els.signatureInput.addEventListener("change", handleSignatureFile);
  els.addSignatureBtn.addEventListener("click", () => addSignatureToPage(state.processedSignature));
  els.saveSignatureBtn.addEventListener("click", saveCurrentSignature);
  els.clearSignaturesBtn.addEventListener("click", clearSavedSignatures);
  els.addTextBtn.addEventListener("click", addText);
  els.addLineBtn.addEventListener("click", addLine);
  els.addRectBtn.addEventListener("click", addRect);
  els.selectToolBtn.addEventListener("click", () => currentFabricCanvas()?.discardActiveObject().requestRenderAll());
  els.deleteBtn.addEventListener("click", deleteSelected);
  els.blankPageBtn.addEventListener("click", addBlankPage);
  els.exportPdfBtn.addEventListener("click", exportPdf);
  els.autoCropBtn.addEventListener("click", autoCropCurrentSignature);
  els.resetCropBtn.addEventListener("click", resetSignatureCrop);
  els.strokeColorInput.addEventListener("input", applyStyleToSelection);
  els.fillColorInput.addEventListener("input", applyStyleToSelection);
  els.transparentFillInput.addEventListener("change", applyStyleToSelection);
  els.zoomOutBtn.addEventListener("click", () => stepZoom(-1));
  els.zoomInBtn.addEventListener("click", () => stepZoom(1));
  els.zoomSelect.addEventListener("change", () => setZoom(Number(els.zoomSelect.value)));

  for (const input of [els.thresholdSlider, els.backgroundSlider, els.denoiseSlider, els.boldToggle, els.strongBgToggle]) {
    input.addEventListener("input", () => {
      syncOptionLabels();
      scheduleSignatureProcessing();
    });
  }

  window.addEventListener("resize", debounce(() => {
    resizeRenderedPages();
    renderSignatureCropCanvas();
  }, 120));

  document.addEventListener("keydown", (event) => {
    const active = currentFabricCanvas()?.getActiveObject();
    if ((event.key === "Delete" || event.key === "Backspace") && !active?.isEditing && !isTextInput(event.target)) {
      deleteSelected();
    }
  });

  els.signatureCropCanvas.addEventListener("pointerdown", startSignatureCrop);
  els.signatureCropCanvas.addEventListener("pointermove", moveSignatureCrop);
  els.signatureCropCanvas.addEventListener("pointerup", endSignatureCrop);
  els.signatureCropCanvas.addEventListener("pointercancel", endSignatureCrop);

  els.canvasDropZone.addEventListener("dragover", (event) => event.preventDefault());
  els.canvasDropZone.addEventListener("drop", handleWorkspaceDrop);

  els.processedPreview.addEventListener("dragstart", (event) => {
    if (state.processedSignature) {
      event.dataTransfer.setData("text/plain", state.processedSignature);
    }
  });

  state.worker.onmessage = handleWorkerMessage;

  new Sortable(els.pageList, {
    animation: 120,
    handle: ".page-tile",
    onEnd: () => {
      saveAllPages();
      const orderedIds = [...els.pageList.querySelectorAll("[data-page-id]")].map((node) => node.dataset.pageId);
      state.pages.sort((a, b) => orderedIds.indexOf(a.id) - orderedIds.indexOf(b.id));
      renderDocument();
    },
  });
}

async function handleDocumentFiles(event) {
  const files = [...event.target.files];
  if (!files.length) return;

  saveAllPages();
  setStatus("Loading documents...");

  for (const file of files) {
    if (file.type === "application/pdf") {
      await addPdfFile(file);
    } else if (file.type.startsWith("image/")) {
      await addImageFile(file);
    }
  }

  const blank = state.pages[0];
  if (state.pages.length > 1 && blank?.name === "Blank page" && !blank.objects?.objects?.length && blank.sourceType === "blank") {
    disposePageRuntime(blank);
    state.pages.shift();
    if (blank.id === state.currentPageId) {
      state.currentPageId = null;
    }
  }

  if (!state.currentPageId && state.pages[0]) {
    state.currentPageId = state.pages[0].id;
  }

  renderDocument();
  event.target.value = "";
  setStatus("Documents ready");
}

async function addPdfFile(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const sourcePdfId = crypto.randomUUID();
  const pdfjsDoc = await pdfjsLib.getDocument({ data: bytes.slice().buffer }).promise;
  const sourcePdf = await PDFLib.PDFDocument.load(bytes.slice());
  state.pdfSources.set(sourcePdfId, { name: file.name, bytes, pdfjsDoc });

  for (let pageNumber = 1; pageNumber <= pdfjsDoc.numPages; pageNumber++) {
    const pdfPage = await pdfjsDoc.getPage(pageNumber);
    const viewport = pdfPage.getViewport({ scale: PDF_CSS_UNITS });
    const sourcePage = sourcePdf.getPage(pageNumber - 1);
    state.pages.push(createPage(`${file.name} · ${pageNumber}`, viewport.width, viewport.height, null, {
      sourceType: "pdf",
      sourcePdfId,
      sourcePageIndex: pageNumber - 1,
      pdfWidth: sourcePage.getWidth(),
      pdfHeight: sourcePage.getHeight(),
    }));
  }
}

async function addImageFile(file) {
  const dataUrl = await fileToDataUrl(file);
  const image = await loadImage(dataUrl);
  const { width, height, dataUrl: normalized } = normalizeImageForPage(image);
  state.pages.push(createPage(file.name, width, height, normalized));
}

function addBlankPage() {
  saveAllPages();
  const page = createPage("Blank page", DEFAULT_PAGE_WIDTH, DEFAULT_PAGE_HEIGHT, null);
  state.pages.push(page);
  state.currentPageId = page.id;
  renderDocument();
}

function createPage(name, width, height, backgroundDataUrl, extra = {}) {
  return {
    id: crypto.randomUUID(),
    name,
    width,
    height,
    backgroundDataUrl,
    thumbnailDataUrl: null,
    objects: null,
    sourceType: extra.sourceType || (backgroundDataUrl ? "image" : "blank"),
    sourcePdfId: extra.sourcePdfId || null,
    sourcePageIndex: Number.isInteger(extra.sourcePageIndex) ? extra.sourcePageIndex : null,
    pdfWidth: extra.pdfWidth || width * 0.75,
    pdfHeight: extra.pdfHeight || height * 0.75,
    runtime: null,
  };
}

function renderDocument() {
  saveAllPages();
  disconnectObserver();
  for (const page of state.pages) {
    disposePageRuntime(page);
  }
  els.documentPages.innerHTML = "";
  state.observer = new IntersectionObserver(handlePageIntersection, {
    root: els.canvasDropZone,
    rootMargin: "900px 0px",
    threshold: 0.01,
  });

  for (const page of state.pages) {
    mountPage(page);
  }

  renderPageList();
  lucide.createIcons();
  queueMicrotask(() => {
    const current = currentPage();
    if (current?.runtime?.node) {
      current.runtime.node.scrollIntoView({ block: "nearest" });
    }
  });
}

function mountPage(page) {
  disposePageRuntime(page);

  const node = document.createElement("section");
  node.className = `doc-page ${page.id === state.currentPageId ? "is-active" : ""}`;
  node.dataset.pageId = page.id;

  const surface = document.createElement("div");
  surface.className = "doc-page-surface";
  surface.style.width = `${page.width * state.zoom}px`;
  surface.style.height = `${page.height * state.zoom}px`;

  const backgroundLayer = document.createElement("div");
  backgroundLayer.className = "pdf-background-layer";
  const overlayLayer = document.createElement("div");
  overlayLayer.className = "fabric-overlay-layer";

  const overlayCanvas = document.createElement("canvas");
  overlayLayer.appendChild(overlayCanvas);
  surface.append(backgroundLayer, overlayLayer);
  node.appendChild(surface);
  els.documentPages.appendChild(node);

  const fabricCanvas = new fabric.Canvas(overlayCanvas, {
    backgroundColor: null,
    preserveObjectStacking: true,
    selection: true,
    enableRetinaScaling: true,
  });

  page.runtime = {
    node,
    surface,
    backgroundLayer,
    overlayLayer,
    fabricCanvas,
    renderedZoom: null,
    isLoadingObjects: false,
    renderTask: null,
  };

  sizeFabricOverlay(page);
  wireFabricCanvas(page);
  loadPageObjects(page);

  node.addEventListener("pointerdown", () => setCurrentPage(page.id));
  if (page.sourceType === "pdf") {
    state.observer.observe(node);
  } else {
    renderStaticBackground(page);
  }
}

function wireFabricCanvas(page) {
  const canvas = page.runtime.fabricCanvas;
  const save = debounce(() => savePage(page), 120);
  canvas.on("object:added", save);
  canvas.on("object:modified", save);
  canvas.on("object:removed", save);
  canvas.on("text:changed", save);
  canvas.on("selection:created", syncStyleControlsFromSelection);
  canvas.on("selection:updated", syncStyleControlsFromSelection);
}

function loadPageObjects(page) {
  const canvas = page.runtime.fabricCanvas;
  page.runtime.isLoadingObjects = true;
  if (!page.objects) {
    page.runtime.isLoadingObjects = false;
    return;
  }

  canvas.loadFromJSON(page.objects, () => {
    page.runtime.isLoadingObjects = false;
    canvas.renderAll();
  });
}

function handlePageIntersection(entries) {
  for (const entry of entries) {
    const page = state.pages.find((item) => item.id === entry.target.dataset.pageId);
    if (!page) continue;
    if (entry.isIntersecting) {
      renderPdfPage(page);
      setCurrentPage(page.id, { silentScroll: true });
    }
  }
}

async function renderPdfPage(page) {
  const runtime = page.runtime;
  if (!runtime || runtime.renderedZoom === state.zoom) return;

  if (runtime.renderTask) {
    try {
      runtime.renderTask.cancel();
    } catch {
      // PDF.js may have completed the task before cancellation.
    }
  }

  const source = state.pdfSources.get(page.sourcePdfId);
  if (!source?.pdfjsDoc) return;

  const pdfPage = await source.pdfjsDoc.getPage(page.sourcePageIndex + 1);
  if (page.runtime !== runtime) return;
  const viewport = pdfPage.getViewport({ scale: PDF_CSS_UNITS * state.zoom });
  const dpr = window.devicePixelRatio || 1;
  let canvas = runtime.backgroundLayer.querySelector("canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.className = "pdf-page-canvas";
    runtime.backgroundLayer.replaceChildren(canvas);
  }

  canvas.width = Math.floor(viewport.width * dpr);
  canvas.height = Math.floor(viewport.height * dpr);
  canvas.style.width = `${viewport.width}px`;
  canvas.style.height = `${viewport.height}px`;

  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);

  runtime.renderTask = pdfPage.render({
    canvasContext: context,
    viewport,
    transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null,
    annotationMode: pdfjsLib.AnnotationMode?.ENABLE,
  });

  try {
    await runtime.renderTask.promise;
    if (page.runtime !== runtime) return;
    runtime.renderedZoom = state.zoom;
    runtime.renderTask = null;
    if (!page.thumbnailDataUrl) {
      page.thumbnailDataUrl = await renderPdfThumbnail(page);
      renderPageList();
    }
  } catch (error) {
    if (error?.name !== "RenderingCancelledException") {
      setStatus(`PDF render error: ${error.message || error}`);
    }
  }
}

async function renderPdfThumbnail(page) {
  const source = state.pdfSources.get(page.sourcePdfId);
  if (!source?.pdfjsDoc) return null;
  const pdfPage = await source.pdfjsDoc.getPage(page.sourcePageIndex + 1);
  const viewport = pdfPage.getViewport({ scale: PDF_CSS_UNITS * PDF_THUMBNAIL_SCALE });
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(viewport.width);
  canvas.height = Math.round(viewport.height);
  await pdfPage.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
  return canvas.toDataURL("image/jpeg", 0.72);
}

function renderStaticBackground(page) {
  const runtime = page.runtime;
  runtime.backgroundLayer.innerHTML = "";

  if (page.backgroundDataUrl) {
    const img = document.createElement("img");
    img.className = "pdf-page-image";
    img.src = page.backgroundDataUrl;
    img.alt = "";
    runtime.backgroundLayer.appendChild(img);
    page.thumbnailDataUrl ||= page.backgroundDataUrl;
  } else {
    const blank = document.createElement("div");
    blank.className = "blank-page-background";
    runtime.backgroundLayer.appendChild(blank);
  }
}

function resizeRenderedPages() {
  for (const page of state.pages) {
    if (!page.runtime) continue;
    page.runtime.surface.style.width = `${page.width * state.zoom}px`;
    page.runtime.surface.style.height = `${page.height * state.zoom}px`;
    sizeFabricOverlay(page);
    if (page.sourceType === "pdf") {
      page.runtime.renderedZoom = null;
      renderPdfPage(page);
    }
  }
}

function stepZoom(direction) {
  const values = [...els.zoomSelect.options].map((option) => Number(option.value));
  const currentIndex = values.findIndex((value) => value === state.zoom);
  const nextIndex = Math.max(0, Math.min(values.length - 1, currentIndex + direction));
  setZoom(values[nextIndex]);
}

function setZoom(zoom) {
  if (!Number.isFinite(zoom) || zoom <= 0 || zoom === state.zoom) return;
  saveAllPages();
  state.zoom = zoom;
  els.zoomSelect.value = String(zoom);
  resizeRenderedPages();
}

function sizeFabricOverlay(page) {
  const runtime = page.runtime;
  if (!runtime?.fabricCanvas) return;
  const cssWidth = Math.round(page.width * state.zoom);
  const cssHeight = Math.round(page.height * state.zoom);
  runtime.fabricCanvas.setWidth(page.width);
  runtime.fabricCanvas.setHeight(page.height);
  runtime.fabricCanvas.setDimensions({ width: cssWidth, height: cssHeight }, { cssOnly: true });
  runtime.fabricCanvas.calcOffset();
  runtime.overlayLayer.style.width = `${cssWidth}px`;
  runtime.overlayLayer.style.height = `${cssHeight}px`;
  runtime.fabricCanvas.requestRenderAll();
}

function setCurrentPage(pageId, options = {}) {
  if (state.currentPageId === pageId) return;
  state.currentPageId = pageId;
  for (const page of state.pages) {
    page.runtime?.node.classList.toggle("is-active", page.id === pageId);
  }
  renderPageList();
  if (!options.silentScroll) {
    currentPage()?.runtime?.node.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}

function renderPageList() {
  els.pageList.innerHTML = "";
  state.pages.forEach((page, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `page-tile w-full text-left ${page.id === state.currentPageId ? "is-active" : ""}`;
    item.dataset.pageId = page.id;
    item.innerHTML = `
      <span class="page-thumb">${page.thumbnailDataUrl ? `<img src="${page.thumbnailDataUrl}" alt="">` : `<span class="text-xs text-zinc-400">${index + 1}</span>`}</span>
      <span class="min-w-0">
        <span class="block truncate text-sm font-medium">${escapeHtml(page.name)}</span>
        <span class="block text-xs text-zinc-500">${Math.round(page.pdfWidth)} × ${Math.round(page.pdfHeight)} pt</span>
      </span>
      <span class="text-zinc-400"><i data-lucide="grip-vertical" class="h-4 w-4"></i></span>
    `;
    item.addEventListener("click", () => setCurrentPage(page.id));
    els.pageList.appendChild(item);
  });
  lucide.createIcons();
}

function savePage(page) {
  if (!page?.runtime?.fabricCanvas || page.runtime.isLoadingObjects) return;
  page.objects = page.runtime.fabricCanvas.toJSON(["selectable"]);
  delete page.objects.backgroundImage;
  delete page.objects.background;
}

function saveAllPages() {
  for (const page of state.pages) {
    savePage(page);
  }
}

function currentPage() {
  return state.pages.find((page) => page.id === state.currentPageId) || state.pages[0] || null;
}

function currentFabricCanvas() {
  return currentPage()?.runtime?.fabricCanvas || null;
}

function disposePageRuntime(page) {
  if (!page?.runtime) return;
  savePage(page);
  try {
    page.runtime.renderTask?.cancel();
  } catch {
    // Ignore completed render task cancellation.
  }
  page.runtime.fabricCanvas?.dispose();
  page.runtime = null;
}

function disconnectObserver() {
  if (!state.observer) return;
  state.observer.disconnect();
  state.observer = null;
}

function handleWorkspaceDrop(event) {
  event.preventDefault();
  const dataUrl = event.dataTransfer.getData("text/plain");
  if (!dataUrl) return;

  const page = pageFromPoint(event.clientX, event.clientY) || currentPage();
  if (!page) return;
  const position = pointOnPage(page, event.clientX, event.clientY);
  setCurrentPage(page.id, { silentScroll: true });
  addSignatureToPage(dataUrl, position);
}

function pageFromPoint(clientX, clientY) {
  const nodes = [...els.documentPages.querySelectorAll(".doc-page")];
  for (const node of nodes) {
    const rect = node.getBoundingClientRect();
    if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
      return state.pages.find((page) => page.id === node.dataset.pageId);
    }
  }
  return null;
}

function pointOnPage(page, clientX, clientY) {
  const rect = page.runtime.surface.getBoundingClientRect();
  return {
    left: (clientX - rect.left) / state.zoom,
    top: (clientY - rect.top) / state.zoom,
  };
}

async function handleSignatureFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  setStatus("Processing signature...");
  const dataUrl = await fileToDataUrl(file);
  const image = await loadImage(dataUrl);
  state.signatureImage = image;
  state.signatureCrop = detectSignatureCrop(image);
  state.processedSignature = null;
  els.processedPreview.removeAttribute("src");
  els.autoCropBtn.disabled = false;
  els.resetCropBtn.disabled = false;
  renderSignatureCropCanvas();
  updateSignatureSourceFromCrop();
  event.target.value = "";
}

function scheduleSignatureProcessing() {
  if (!state.signatureImage) return;
  setStatus("Processing signature...");
  updateSignatureSourceFromCropDebounced();
}

const updateSignatureSourceFromCropDebounced = debounce(updateSignatureSourceFromCrop, 180);

function updateSignatureSourceFromCrop() {
  if (!state.signatureImage || !state.signatureCrop) return;
  state.signatureSource = cropImageToImageData(state.signatureImage, state.signatureCrop, 3000);
  processSignature();
}

function processSignature() {
  if (!state.signatureSource) return;
  const requestId = ++state.workerRequestId;
  const cloned = new Uint8ClampedArray(state.signatureSource.data);
  state.worker.postMessage(
    {
      id: requestId,
      width: state.signatureSource.width,
      height: state.signatureSource.height,
      buffer: cloned.buffer,
      options: currentSignatureOptions(),
    },
    [cloned.buffer],
  );
}

function handleWorkerMessage(event) {
  const { id, width, height, buffer, stats, error } = event.data;
  if (id !== state.workerRequestId) return;
  if (error) {
    setStatus(`Signature error: ${error}`);
    return;
  }

  const imageData = new ImageData(new Uint8ClampedArray(buffer), width, height);
  const previewCanvas = document.createElement("canvas");
  previewCanvas.width = width;
  previewCanvas.height = height;
  previewCanvas.getContext("2d").putImageData(imageData, 0, 0);
  state.processedSignature = previewCanvas.toDataURL("image/png");
  els.processedPreview.src = state.processedSignature;
  els.addSignatureBtn.disabled = false;
  els.saveSignatureBtn.disabled = false;
  els.sigStats.textContent = stats ? `${stats.inkPercent}% ink` : "";
  setStatus("Signature ready");
}

function currentSignatureOptions() {
  return {
    threshold: Number(els.thresholdSlider.value),
    backgroundRemoval: Number(els.backgroundSlider.value),
    denoise: Number(els.denoiseSlider.value),
    bold: els.boldToggle.checked,
    strongBackground: els.strongBgToggle.checked,
  };
}

function syncOptionLabels() {
  els.thresholdValue.textContent = els.thresholdSlider.value;
  els.backgroundValue.textContent = els.backgroundSlider.value;
  els.denoiseValue.textContent = els.denoiseSlider.value;
}

function autoCropCurrentSignature() {
  if (!state.signatureImage) return;
  state.signatureCrop = detectSignatureCrop(state.signatureImage);
  renderSignatureCropCanvas();
  updateSignatureSourceFromCrop();
}

function resetSignatureCrop() {
  if (!state.signatureImage) return;
  state.signatureCrop = {
    x: 0,
    y: 0,
    width: state.signatureImage.naturalWidth,
    height: state.signatureImage.naturalHeight,
  };
  renderSignatureCropCanvas();
  updateSignatureSourceFromCrop();
}

function renderSignatureCropCanvas() {
  const cropCanvas = els.signatureCropCanvas;
  if (!cropCanvas || !state.signatureImage || !state.signatureCrop) return;

  const parentWidth = cropCanvas.parentElement?.clientWidth || 300;
  const image = state.signatureImage;
  const maxDisplayHeight = 238;
  const displayScale = Math.min(parentWidth / image.naturalWidth, maxDisplayHeight / image.naturalHeight, 1);
  const displayWidth = Math.max(1, Math.round(image.naturalWidth * displayScale));
  const displayHeight = Math.max(1, Math.round(image.naturalHeight * displayScale));
  const dpr = window.devicePixelRatio || 1;
  cropCanvas.style.width = `${displayWidth}px`;
  cropCanvas.style.height = `${displayHeight}px`;
  cropCanvas.width = Math.round(displayWidth * dpr);
  cropCanvas.height = Math.round(displayHeight * dpr);
  state.signatureCropView = { displayScale, dpr, displayWidth, displayHeight };

  const ctx = cropCanvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, displayWidth, displayHeight);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, 0, 0, displayWidth, displayHeight);

  const box = cropToDisplayRect(state.signatureCrop);
  ctx.save();
  ctx.fillStyle = "rgb(9 9 11 / 0.48)";
  ctx.fillRect(0, 0, displayWidth, box.y);
  ctx.fillRect(0, box.y + box.height, displayWidth, displayHeight - box.y - box.height);
  ctx.fillRect(0, box.y, box.x, box.height);
  ctx.fillRect(box.x + box.width, box.y, displayWidth - box.x - box.width, box.height);
  ctx.strokeStyle = "#059669";
  ctx.lineWidth = 2;
  ctx.strokeRect(box.x + 1, box.y + 1, Math.max(0, box.width - 2), Math.max(0, box.height - 2));
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#111827";
  for (const handle of cropHandles(box)) {
    ctx.fillRect(handle.x - 5, handle.y - 5, 10, 10);
    ctx.strokeRect(handle.x - 5, handle.y - 5, 10, 10);
  }
  ctx.restore();
}

function startSignatureCrop(event) {
  if (!state.signatureImage || !state.signatureCrop || !state.signatureCropView) return;
  const point = cropEventPoint(event);
  const crop = state.signatureCrop;
  const action = cropHitTest(point);
  if (!action) return;

  els.signatureCropCanvas.setPointerCapture(event.pointerId);
  state.cropPointer = {
    action,
    startX: point.x,
    startY: point.y,
    crop: { ...crop },
  };
}

function moveSignatureCrop(event) {
  if (!state.cropPointer || !state.signatureImage || !state.signatureCropView) return;
  const point = cropEventPoint(event);
  const pointer = state.cropPointer;
  const dx = point.x - pointer.startX;
  const dy = point.y - pointer.startY;
  let crop = { ...pointer.crop };

  if (pointer.action === "move") {
    crop.x += dx;
    crop.y += dy;
  } else {
    if (pointer.action.includes("w")) {
      crop.x += dx;
      crop.width -= dx;
    }
    if (pointer.action.includes("e")) {
      crop.width += dx;
    }
    if (pointer.action.includes("n")) {
      crop.y += dy;
      crop.height -= dy;
    }
    if (pointer.action.includes("s")) {
      crop.height += dy;
    }
  }

  state.signatureCrop = normalizeCrop(crop, state.signatureImage.naturalWidth, state.signatureImage.naturalHeight);
  renderSignatureCropCanvas();
}

function endSignatureCrop(event) {
  if (!state.cropPointer) return;
  try {
    els.signatureCropCanvas.releasePointerCapture(event.pointerId);
  } catch {
    // Pointer capture may already be released by the browser.
  }
  state.cropPointer = null;
  updateSignatureSourceFromCrop();
}

function cropEventPoint(event) {
  const rect = els.signatureCropCanvas.getBoundingClientRect();
  const scale = state.signatureCropView.displayScale;
  return {
    x: (event.clientX - rect.left) / scale,
    y: (event.clientY - rect.top) / scale,
  };
}

function cropHitTest(point) {
  const crop = state.signatureCrop;
  const handleSize = 12 / state.signatureCropView.displayScale;
  const nearLeft = Math.abs(point.x - crop.x) <= handleSize;
  const nearRight = Math.abs(point.x - (crop.x + crop.width)) <= handleSize;
  const nearTop = Math.abs(point.y - crop.y) <= handleSize;
  const nearBottom = Math.abs(point.y - (crop.y + crop.height)) <= handleSize;
  const withinX = point.x >= crop.x - handleSize && point.x <= crop.x + crop.width + handleSize;
  const withinY = point.y >= crop.y - handleSize && point.y <= crop.y + crop.height + handleSize;

  if (nearLeft && nearTop) return "nw";
  if (nearRight && nearTop) return "ne";
  if (nearLeft && nearBottom) return "sw";
  if (nearRight && nearBottom) return "se";
  if (nearLeft && withinY) return "w";
  if (nearRight && withinY) return "e";
  if (nearTop && withinX) return "n";
  if (nearBottom && withinX) return "s";
  if (point.x >= crop.x && point.x <= crop.x + crop.width && point.y >= crop.y && point.y <= crop.y + crop.height) return "move";
  return null;
}

function cropToDisplayRect(crop) {
  const scale = state.signatureCropView.displayScale;
  return {
    x: crop.x * scale,
    y: crop.y * scale,
    width: crop.width * scale,
    height: crop.height * scale,
  };
}

function cropHandles(box) {
  return [
    { x: box.x, y: box.y },
    { x: box.x + box.width / 2, y: box.y },
    { x: box.x + box.width, y: box.y },
    { x: box.x, y: box.y + box.height / 2 },
    { x: box.x + box.width, y: box.y + box.height / 2 },
    { x: box.x, y: box.y + box.height },
    { x: box.x + box.width / 2, y: box.y + box.height },
    { x: box.x + box.width, y: box.y + box.height },
  ];
}

function detectSignatureCrop(image) {
  const sample = imageToImageData(image, 900);
  const data = sample.data;
  const width = sample.width;
  const height = sample.height;
  const bg = estimateCornerBackground(data, width, height);
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  let found = false;

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const p = (y * width + x) * 4;
      const lum = luminance(data[p], data[p + 1], data[p + 2]);
      const sat = colorSaturation(data[p], data[p + 1], data[p + 2]);
      const bgDiff = bg.lum - lum;
      const colorDiff = Math.abs(data[p] - bg.r) + Math.abs(data[p + 1] - bg.g) + Math.abs(data[p + 2] - bg.b);
      if ((bgDiff > 20 && lum < 238) || (sat > bg.sat + 0.16 && colorDiff > 34 && lum < 245)) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        found = true;
      }
    }
  }

  if (!found) {
    return { x: 0, y: 0, width: image.naturalWidth, height: image.naturalHeight };
  }

  const scaleX = image.naturalWidth / width;
  const scaleY = image.naturalHeight / height;
  const padX = Math.max(24, (maxX - minX) * 0.16) * scaleX;
  const padY = Math.max(24, (maxY - minY) * 0.24) * scaleY;
  return normalizeCrop(
    {
      x: minX * scaleX - padX,
      y: minY * scaleY - padY,
      width: (maxX - minX) * scaleX + padX * 2,
      height: (maxY - minY) * scaleY + padY * 2,
    },
    image.naturalWidth,
    image.naturalHeight,
  );
}

function cropImageToImageData(image, crop, maxEdge) {
  const normalized = normalizeCrop(crop, image.naturalWidth, image.naturalHeight);
  const scale = Math.min(maxEdge / Math.max(normalized.width, normalized.height), 1);
  const width = Math.max(1, Math.round(normalized.width * scale));
  const height = Math.max(1, Math.round(normalized.height * scale));
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = width;
  sourceCanvas.height = height;
  const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, normalized.x, normalized.y, normalized.width, normalized.height, 0, 0, width, height);
  return context.getImageData(0, 0, width, height);
}

function normalizeCrop(crop, imageWidth, imageHeight) {
  const minSize = Math.max(32, Math.min(imageWidth, imageHeight) * 0.025);
  let x = Number(crop.x);
  let y = Number(crop.y);
  let width = Number(crop.width);
  let height = Number(crop.height);

  if (width < 0) {
    x += width;
    width = Math.abs(width);
  }
  if (height < 0) {
    y += height;
    height = Math.abs(height);
  }

  width = Math.max(minSize, Math.min(width, imageWidth));
  height = Math.max(minSize, Math.min(height, imageHeight));
  x = Math.max(0, Math.min(x, imageWidth - width));
  y = Math.max(0, Math.min(y, imageHeight - height));
  return { x, y, width, height };
}

function estimateCornerBackground(data, width, height) {
  const sampleSize = Math.max(8, Math.round(Math.min(width, height) * 0.08));
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;
  const corners = [
    [0, 0],
    [width - sampleSize, 0],
    [0, height - sampleSize],
    [width - sampleSize, height - sampleSize],
  ];

  for (const [startX, startY] of corners) {
    for (let y = startY; y < startY + sampleSize; y += 2) {
      for (let x = startX; x < startX + sampleSize; x += 2) {
        const p = (y * width + x) * 4;
        r += data[p];
        g += data[p + 1];
        b += data[p + 2];
        count++;
      }
    }
  }

  r /= count;
  g /= count;
  b /= count;
  return { r, g, b, lum: luminance(r, g, b), sat: colorSaturation(r, g, b) };
}

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function colorSaturation(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max === 0 ? 0 : (max - min) / max;
}

function addSignatureToPage(dataUrl, position = null) {
  const page = currentPage();
  const canvas = currentFabricCanvas();
  if (!dataUrl || !page || !canvas) return;

  fabric.Image.fromURL(dataUrl, (image) => {
    const targetWidth = Math.min(page.width * 0.28, 240);
    image.set({
      left: position?.left ?? page.width * 0.52,
      top: position?.top ?? page.height * 0.68,
      originX: "center",
      originY: "center",
      cornerColor: "#059669",
      cornerStyle: "circle",
      transparentCorners: false,
    });
    image.scaleToWidth(targetWidth);
    canvas.add(image);
    canvas.setActiveObject(image);
    canvas.requestRenderAll();
    savePage(page);
  }, { crossOrigin: "anonymous" });
}

async function saveCurrentSignature() {
  if (!state.processedSignature) return;
  const dataUrl = await resizeDataUrl(state.processedSignature, 1400);
  state.signatures.unshift({ id: crypto.randomUUID(), dataUrl, createdAt: Date.now() });
  state.signatures = state.signatures.slice(0, 12);
  try {
    localStorage.setItem("pdftools.signatures", JSON.stringify(state.signatures));
  } catch {
    state.signatures = state.signatures.slice(0, 4);
    localStorage.setItem("pdftools.signatures", JSON.stringify(state.signatures));
  }
  renderSavedSignatures();
  setStatus("Signature saved");
}

function renderSavedSignatures() {
  els.savedSignatures.innerHTML = "";
  if (!state.signatures.length) {
    els.savedSignatures.innerHTML = `<div class="col-span-3 text-sm text-zinc-500">No saved signatures</div>`;
    return;
  }

  for (const signature of state.signatures) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "saved-signature checkerboard";
    button.draggable = true;
    button.innerHTML = `<img src="${signature.dataUrl}" alt="Saved signature">`;
    button.addEventListener("click", () => addSignatureToPage(signature.dataUrl));
    button.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", signature.dataUrl));
    els.savedSignatures.appendChild(button);
  }
}

function clearSavedSignatures() {
  state.signatures = [];
  localStorage.removeItem("pdftools.signatures");
  renderSavedSignatures();
}

function loadSavedSignatures() {
  try {
    return JSON.parse(localStorage.getItem("pdftools.signatures") || "[]");
  } catch {
    return [];
  }
}

function addText() {
  const page = currentPage();
  const canvas = currentFabricCanvas();
  if (!page || !canvas) return;
  const styles = currentAnnotationStyle();
  const text = new fabric.IText("Text", {
    left: page.width * 0.2,
    top: page.height * 0.2,
    fill: styles.stroke,
    fontFamily: "Arial",
    fontSize: Math.max(18, Math.round(page.width / 42)),
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  savePage(page);
}

function addLine() {
  const page = currentPage();
  const canvas = currentFabricCanvas();
  if (!page || !canvas) return;
  const styles = currentAnnotationStyle();
  const y = page.height * 0.3;
  const line = new fabric.Line([page.width * 0.25, y, page.width * 0.65, y], {
    stroke: styles.stroke,
    strokeWidth: 3,
  });
  canvas.add(line);
  canvas.setActiveObject(line);
  savePage(page);
}

function addRect() {
  const page = currentPage();
  const canvas = currentFabricCanvas();
  if (!page || !canvas) return;
  const styles = currentAnnotationStyle();
  const rect = new fabric.Rect({
    left: page.width * 0.25,
    top: page.height * 0.25,
    width: page.width * 0.28,
    height: page.height * 0.12,
    fill: styles.fill,
    stroke: styles.stroke,
    strokeWidth: 3,
  });
  canvas.add(rect);
  canvas.setActiveObject(rect);
  savePage(page);
}

function currentAnnotationStyle() {
  return {
    stroke: els.strokeColorInput.value,
    fill: els.transparentFillInput.checked ? "transparent" : els.fillColorInput.value,
  };
}

function applyStyleToSelection() {
  const canvas = currentFabricCanvas();
  const activeObjects = canvas?.getActiveObjects() || [];
  if (!activeObjects.length) return;
  const styles = currentAnnotationStyle();

  for (const object of activeObjects) {
    if (object.type === "line") {
      object.set({ stroke: styles.stroke });
    } else if (object.type === "rect") {
      object.set({ stroke: styles.stroke, fill: styles.fill });
    } else if (object.type === "i-text" || object.type === "textbox" || object.type === "text") {
      object.set({ fill: styles.stroke });
    }
  }

  canvas.requestRenderAll();
  savePage(currentPage());
}

function syncStyleControlsFromSelection() {
  const object = currentFabricCanvas()?.getActiveObject();
  if (!object) return;

  if (object.stroke && typeof object.stroke === "string") {
    els.strokeColorInput.value = normalizeColorForInput(object.stroke);
  } else if (object.fill && typeof object.fill === "string" && object.fill !== "transparent") {
    els.strokeColorInput.value = normalizeColorForInput(object.fill);
  }

  if (object.type === "rect") {
    const hasFill = object.fill && object.fill !== "transparent" && object.fill !== "rgba(0,0,0,0)";
    els.transparentFillInput.checked = !hasFill;
    if (hasFill && typeof object.fill === "string") {
      els.fillColorInput.value = normalizeColorForInput(object.fill);
    }
  }
}

function normalizeColorForInput(color) {
  if (/^#[0-9a-f]{6}$/i.test(color)) return color;
  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }

  const context = document.createElement("canvas").getContext("2d");
  context.fillStyle = color;
  return /^#[0-9a-f]{6}$/i.test(context.fillStyle) ? context.fillStyle : "#111827";
}

function deleteSelected() {
  const page = currentPage();
  const canvas = currentFabricCanvas();
  const active = canvas?.getActiveObjects() || [];
  if (!active.length) return;
  active.forEach((object) => canvas.remove(object));
  canvas.discardActiveObject().requestRenderAll();
  savePage(page);
}

async function exportPdf() {
  saveAllPages();
  if (!state.pages.length) return;
  setStatus("Exporting PDF...");
  const pdfDoc = await PDFLib.PDFDocument.create();
  const sourceCache = new Map();
  const multiplier = Number(els.exportQuality.value);

  try {
    for (const pageModel of state.pages) {
      const pdfPage = await createExportPage(pdfDoc, sourceCache, pageModel);
      await drawOverlayOnPdfPage(pdfDoc, pdfPage, pageModel, multiplier);
    }

    const bytes = await pdfDoc.save();
    downloadBlob(new Blob([bytes], { type: "application/pdf" }), `pdftools-${Date.now()}.pdf`);
    setStatus("PDF exported");
  } catch (error) {
    setStatus(`Export error: ${error.message || error}`);
  }
}

async function createExportPage(pdfDoc, sourceCache, pageModel) {
  if (pageModel.sourceType === "pdf" && pageModel.sourcePdfId) {
    const sourceDoc = await getSourcePdfDocument(sourceCache, pageModel.sourcePdfId);
    const [copiedPage] = await pdfDoc.copyPages(sourceDoc, [pageModel.sourcePageIndex]);
    pdfDoc.addPage(copiedPage);
    return copiedPage;
  }

  const pdfPage = pdfDoc.addPage([pageModel.pdfWidth, pageModel.pdfHeight]);
  if (pageModel.backgroundDataUrl) {
    const embedded = await embedImageDataUrl(pdfDoc, pageModel.backgroundDataUrl);
    pdfPage.drawImage(embedded, {
      x: 0,
      y: 0,
      width: pdfPage.getWidth(),
      height: pdfPage.getHeight(),
    });
  }
  return pdfPage;
}

async function getSourcePdfDocument(cache, sourcePdfId) {
  if (cache.has(sourcePdfId)) return cache.get(sourcePdfId);
  const source = state.pdfSources.get(sourcePdfId);
  if (!source) {
    throw new Error("Original PDF source is missing from this browser session.");
  }
  const doc = await PDFLib.PDFDocument.load(source.bytes.slice());
  cache.set(sourcePdfId, doc);
  return doc;
}

async function drawOverlayOnPdfPage(pdfDoc, pdfPage, pageModel, multiplier) {
  if (!pageModel.objects?.objects?.length) return;
  const overlayDataUrl = await renderOverlayToDataUrl(pageModel, multiplier);
  const overlay = await pdfDoc.embedPng(dataUrlToBytes(overlayDataUrl));
  pdfPage.drawImage(overlay, {
    x: 0,
    y: 0,
    width: pdfPage.getWidth(),
    height: pdfPage.getHeight(),
  });
}

async function renderOverlayToDataUrl(pageModel, multiplier) {
  const element = document.createElement("canvas");
  const overlayCanvas = new fabric.StaticCanvas(element, {
    width: pageModel.width,
    height: pageModel.height,
    backgroundColor: null,
  });

  await loadFabricJson(overlayCanvas, pageModel.objects);
  overlayCanvas.renderAll();
  const dataUrl = overlayCanvas.toDataURL({ format: "png", multiplier, enableRetinaScaling: false });
  overlayCanvas.dispose();
  return dataUrl;
}

async function embedImageDataUrl(pdfDoc, dataUrl) {
  const bytes = dataUrlToBytes(dataUrl);
  if (dataUrl.startsWith("data:image/jpeg") || dataUrl.startsWith("data:image/jpg")) {
    return pdfDoc.embedJpg(bytes);
  }
  return pdfDoc.embedPng(bytes);
}

function dataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function normalizeImageForPage(image) {
  const maxEdge = 1800;
  const scale = Math.min(maxEdge / Math.max(image.naturalWidth, image.naturalHeight), 1);
  const width = Math.round(image.naturalWidth * scale);
  const height = Math.round(image.naturalHeight * scale);
  const normalized = document.createElement("canvas");
  normalized.width = width;
  normalized.height = height;
  const context = normalized.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, width, height);
  return { width, height, dataUrl: normalized.toDataURL("image/jpeg", 0.94) };
}

function imageToImageData(image, maxEdge) {
  const scale = Math.min(maxEdge / Math.max(image.naturalWidth, image.naturalHeight), 1);
  const width = Math.round(image.naturalWidth * scale);
  const height = Math.round(image.naturalHeight * scale);
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = width;
  sourceCanvas.height = height;
  const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, width, height);
  return context.getImageData(0, 0, width, height);
}

function loadFabricJson(targetCanvas, json) {
  return new Promise((resolve) => {
    targetCanvas.loadFromJSON(json, () => {
      targetCanvas.renderAll();
      resolve();
    });
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function resizeDataUrl(dataUrl, maxEdge) {
  const image = await loadImage(dataUrl);
  const scale = Math.min(maxEdge / Math.max(image.naturalWidth, image.naturalHeight), 1);
  if (scale >= 1) return dataUrl;

  const resized = document.createElement("canvas");
  resized.width = Math.round(image.naturalWidth * scale);
  resized.height = Math.round(image.naturalHeight * scale);
  const context = resized.getContext("2d");
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, resized.width, resized.height);
  return resized.toDataURL("image/png");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function setStatus(text) {
  els.statusText.textContent = text;
}

function isTextInput(target) {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function debounce(callback, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), wait);
  };
}
