const DATASETS = {
  standard: {
    badge: "3 MB",
    label: "Nhanh",
    url: "data/vietnam-34-provinces.geojson",
  },
  high: {
    badge: "48 MB",
    label: "High detail",
    url: "data/vietnam-34-provinces-high.geojson",
  },
};
const DEFAULT_VIEW_BOUNDS = [
  [7.4, 102.0],
  [23.6, 110.7],
];

const REGION_META = {
  northHighlands: {
    label: "Trung du & miền núi Bắc Bộ",
    color: "#5b8c5a",
  },
  redRiver: {
    label: "Đồng bằng sông Hồng",
    color: "#2f80a8",
  },
  northCentral: {
    label: "Bắc Trung Bộ",
    color: "#c46b3b",
  },
  southCentralHighlands: {
    label: "Nam Trung Bộ & Tây Nguyên",
    color: "#8d67ad",
  },
  southeast: {
    label: "Đông Nam Bộ",
    color: "#d14f69",
  },
  mekong: {
    label: "Đồng bằng sông Cửu Long",
    color: "#d4a62a",
  },
};

const REGION_BY_PCODE = {
  VN04: "northHighlands",
  VN08: "northHighlands",
  VN11: "northHighlands",
  VN12: "northHighlands",
  VN14: "northHighlands",
  VN15: "northHighlands",
  VN19: "northHighlands",
  VN20: "northHighlands",
  VN25: "northHighlands",
  VN01: "redRiver",
  VN22: "redRiver",
  VN24: "redRiver",
  VN31: "redRiver",
  VN33: "redRiver",
  VN37: "redRiver",
  VN38: "northCentral",
  VN40: "northCentral",
  VN42: "northCentral",
  VN44: "northCentral",
  VN46: "northCentral",
  VN48: "southCentralHighlands",
  VN51: "southCentralHighlands",
  VN52: "southCentralHighlands",
  VN56: "southCentralHighlands",
  VN66: "southCentralHighlands",
  VN68: "southCentralHighlands",
  VN75: "southeast",
  VN79: "southeast",
  VN80: "southeast",
  VN82: "mekong",
  VN86: "mekong",
  VN91: "mekong",
  VN92: "mekong",
  VN96: "mekong",
};

const ADJACENT_PALETTE = [
  "#2f80a8",
  "#d14f69",
  "#5b8c5a",
  "#d4a62a",
  "#8d67ad",
  "#c46b3b",
];

const AREA_PALETTE = ["#d8f0eb", "#9fd6cf", "#5fb4ad", "#1f8a96", "#005e68"];

const dom = {
  dataStatus: document.querySelector("#dataStatus"),
  autoColorButton: document.querySelector("#autoColorButton"),
  exportButton: document.querySelector("#exportButton"),
  exportSvgButton: document.querySelector("#exportSvgButton"),
  provinceSelect: document.querySelector("#provinceSelect"),
  detailSelect: document.querySelector("#detailSelect"),
  labelToggle: document.querySelector("#labelToggle"),
  baseToggle: document.querySelector("#baseToggle"),
  fitButton: document.querySelector("#fitButton"),
  clearButton: document.querySelector("#clearButton"),
  selectedType: document.querySelector("#selectedType"),
  selectedName: document.querySelector("#selectedName"),
  selectedCode: document.querySelector("#selectedCode"),
  selectedArea: document.querySelector("#selectedArea"),
  selectedRegion: document.querySelector("#selectedRegion"),
  legend: document.querySelector("#legend"),
  provinceList: document.querySelector("#provinceList"),
  toast: document.querySelector("#toast"),
  modeButtons: Array.from(document.querySelectorAll("[data-mode]")),
  mapArea: document.querySelector("#mapArea"),
};

const map = L.map("map", {
  attributionControl: true,
  zoomControl: true,
  minZoom: 5,
  maxZoom: 12,
  preferCanvas: false,
});

const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap",
  crossOrigin: true,
  maxZoom: 19,
});

let geojson;
let provinceLayer;
let provinceLayers = new Map();
let selectedPCode = "";
let currentDatasetKey = "standard";
let colorMode = "region";
let colorByPCode = new Map();
let adjacencyByPCode = new Map();
let areaBreaks = [];

init();

async function init() {
  lucide.createIcons();
  bindEvents();
  await loadDataset(currentDatasetKey, { initial: true });
}

async function loadDataset(datasetKey, options = {}) {
  const dataset = DATASETS[datasetKey] || DATASETS.standard;
  const preservedPCode = selectedPCode;
  currentDatasetKey = datasetKey;
  dom.detailSelect.value = datasetKey;
  dom.detailSelect.disabled = true;
  dom.dataStatus.textContent = `Đang tải ${dataset.label}`;

  try {
    const response = await fetch(dataset.url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const nextGeojson = await response.json();
    nextGeojson.features.sort((a, b) => getProvinceName(a).localeCompare(getProvinceName(b), "vi"));

    const hasPreservedSelection = nextGeojson.features.some(
      (feature) => feature.properties.adm1_pcode === preservedPCode,
    );
    selectedPCode = hasPreservedSelection ? preservedPCode : "";

    if (provinceLayer) {
      map.removeLayer(provinceLayer);
      provinceLayer = null;
      provinceLayers.clear();
    }

    geojson = nextGeojson;
    geojson.features.sort((a, b) => getProvinceName(a).localeCompare(getProvinceName(b), "vi"));

    if (!adjacencyByPCode.size || datasetKey === "standard") {
      adjacencyByPCode = buildAdjacency(geojson.features);
    }
    areaBreaks = buildAreaBreaks(geojson.features);
    applyColorMode(colorMode);
    renderProvinceOptions();
    renderLayer();
    renderLegend();

    if (selectedPCode) {
      selectProvince(selectedPCode, true);
    } else {
      renderProvinceList();
      updateSummary();
    }

    const totalArea = geojson.features.reduce(
      (sum, feature) => sum + Number(feature.properties.area_sqkm || 0),
      0,
    );
    dom.dataStatus.textContent = `${geojson.features.length} tỉnh | ${formatArea(totalArea)} | ${dataset.badge}`;
    showToast(options.initial ? "Đã tải bản đồ GIS 34 tỉnh" : `Đã chuyển sang ${dataset.label}`);
  } catch (error) {
    dom.dataStatus.textContent = "Không tải được GIS";
    showToast("Lỗi tải dữ liệu bản đồ");
    console.error(error);
  } finally {
    dom.detailSelect.disabled = false;
  }
}

function bindEvents() {
  dom.autoColorButton.addEventListener("click", () => {
    if (!geojson) return;
    const nextMode = colorMode === "region" ? "adjacent" : colorMode === "adjacent" ? "area" : "region";
    applyColorMode(nextMode);
    renderLegend();
    refreshLayerStyles();
    renderProvinceList();
    updateSummary();
    showToast(`Đã tô màu: ${getModeLabel(nextMode)}`);
  });

  dom.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!geojson) return;
      applyColorMode(button.dataset.mode);
      renderLegend();
      refreshLayerStyles();
      renderProvinceList();
      updateSummary();
    });
  });

  dom.provinceSelect.addEventListener("change", () => {
    if (!geojson) return;
    selectProvince(dom.provinceSelect.value, true);
  });

  dom.detailSelect.addEventListener("change", () => {
    loadDataset(dom.detailSelect.value);
  });

  dom.labelToggle.addEventListener("change", () => {
    refreshLabels();
  });

  dom.baseToggle.addEventListener("change", () => {
    if (dom.baseToggle.checked) {
      osmLayer.addTo(map);
      osmLayer.bringToBack();
    } else {
      map.removeLayer(osmLayer);
    }
  });

  dom.fitButton.addEventListener("click", fitVietnam);
  dom.clearButton.addEventListener("click", () => selectProvince("", true));
  dom.exportButton.addEventListener("click", exportPdf);
  dom.exportSvgButton.addEventListener("click", exportSvg);
  map.on("moveend zoomend", refreshLabels);
}

function renderLayer() {
  provinceLayer = L.geoJSON(geojson, {
    style: getFeatureStyle,
    onEachFeature(feature, layer) {
      const pcode = feature.properties.adm1_pcode;
      provinceLayers.set(pcode, layer);
      layer.on({
        click: () => selectProvince(pcode, false),
        mouseover: () => {
          if (selectedPCode !== pcode) {
            layer.setStyle({ weight: 2.2, color: "#172322", fillOpacity: 0.92 });
          }
        },
        mouseout: () => {
          refreshLayerStyles();
        },
      });
    },
  }).addTo(map);

  fitVietnam();
  refreshLabels();
}

function getFeatureStyle(feature) {
  const pcode = feature.properties.adm1_pcode;
  const selected = pcode === selectedPCode;

  return {
    color: selected ? "#172322" : "#ffffff",
    dashArray: selected ? "" : "1",
    fillColor: colorByPCode.get(pcode) || "#aab8b5",
    fillOpacity: selected ? 0.96 : 0.84,
    opacity: 1,
    weight: selected ? 3 : 1.1,
  };
}

function refreshLayerStyles() {
  if (!provinceLayer) return;
  provinceLayer.setStyle(getFeatureStyle);
}

function refreshLabels() {
  provinceLayers.forEach((layer, pcode) => {
    layer.unbindTooltip();
    if (shouldShowLabel(layer, pcode)) {
      bindProvinceLabel(layer, layer.feature);
    }
  });
}

function bindProvinceLabel(layer, feature) {
  if (!dom.labelToggle.checked) return;
  layer.bindTooltip(getProvinceName(feature), {
    className: "province-label",
    direction: "center",
    permanent: true,
  });
}

function shouldShowLabel(layer, pcode) {
  if (!dom.labelToggle.checked) return false;

  const bounds = map.getBounds();
  if (!bounds.isValid()) return false;

  const padding = selectedPCode === pcode ? 0.36 : 0.08;
  return bounds.pad(padding).contains(layer.getBounds().getCenter());
}

function selectProvince(pcode, fromControl) {
  selectedPCode = pcode || "";
  dom.provinceSelect.value = selectedPCode;
  refreshLayerStyles();
  refreshLabels();
  renderProvinceList();
  updateSummary();

  if (selectedPCode && fromControl) {
    const layer = provinceLayers.get(selectedPCode);
    if (layer) {
      map.fitBounds(layer.getBounds(), { maxZoom: 8.5, padding: [26, 26] });
    }
  }
}

function fitVietnam() {
  map.fitBounds(DEFAULT_VIEW_BOUNDS, { padding: [24, 24] });
}

function applyColorMode(mode) {
  colorMode = mode;
  dom.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  if (mode === "region") {
    colorByPCode = new Map(
      geojson.features.map((feature) => {
        const pcode = feature.properties.adm1_pcode;
        const regionKey = REGION_BY_PCODE[pcode];
        return [pcode, REGION_META[regionKey]?.color || "#aab8b5"];
      }),
    );
    return;
  }

  if (mode === "adjacent") {
    colorByPCode = colorByAdjacency(geojson.features, adjacencyByPCode);
    return;
  }

  colorByPCode = new Map(
    geojson.features.map((feature) => {
      const pcode = feature.properties.adm1_pcode;
      const bucket = getAreaBucket(Number(feature.properties.area_sqkm || 0));
      return [pcode, AREA_PALETTE[bucket]];
    }),
  );
}

function buildAdjacency(features) {
  const segments = new Map();

  features.forEach((feature) => {
    const pcode = feature.properties.adm1_pcode;
    const rings = getRings(feature.geometry);

    rings.forEach((ring) => {
      for (let index = 0; index < ring.length - 1; index += 1) {
        const segmentKey = getSegmentKey(ring[index], ring[index + 1]);
        if (!segments.has(segmentKey)) {
          segments.set(segmentKey, new Set());
        }
        segments.get(segmentKey).add(pcode);
      }
    });
  });

  const adjacency = new Map(features.map((feature) => [feature.properties.adm1_pcode, new Set()]));

  segments.forEach((owners) => {
    if (owners.size < 2) return;
    const list = Array.from(owners);
    list.forEach((left) => {
      list.forEach((right) => {
        if (left !== right) {
          adjacency.get(left).add(right);
        }
      });
    });
  });

  return adjacency;
}

function colorByAdjacency(features, adjacency) {
  const ordered = features
    .map((feature) => feature.properties.adm1_pcode)
    .sort((left, right) => (adjacency.get(right)?.size || 0) - (adjacency.get(left)?.size || 0));
  const assigned = new Map();

  ordered.forEach((pcode) => {
    const used = new Set(
      Array.from(adjacency.get(pcode) || [])
        .map((neighbor) => assigned.get(neighbor))
        .filter(Boolean),
    );
    const color = ADJACENT_PALETTE.find((candidate) => !used.has(candidate)) || ADJACENT_PALETTE[0];
    assigned.set(pcode, color);
  });

  return assigned;
}

function getRings(geometry) {
  if (!geometry) return [];
  if (geometry.type === "Polygon") {
    return geometry.coordinates;
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.flat();
  }
  return [];
}

function getSegmentKey(a, b) {
  const left = `${Number(a[0]).toFixed(4)},${Number(a[1]).toFixed(4)}`;
  const right = `${Number(b[0]).toFixed(4)},${Number(b[1]).toFixed(4)}`;
  return left < right ? `${left}|${right}` : `${right}|${left}`;
}

function buildAreaBreaks(features) {
  const values = features
    .map((feature) => Number(feature.properties.area_sqkm || 0))
    .filter(Boolean)
    .sort((a, b) => a - b);
  const breaks = [];

  for (let index = 1; index < AREA_PALETTE.length; index += 1) {
    const position = Math.floor((values.length * index) / AREA_PALETTE.length);
    breaks.push(values[Math.min(position, values.length - 1)]);
  }

  return breaks;
}

function getAreaBucket(area) {
  return areaBreaks.findIndex((limit) => area <= limit) === -1
    ? AREA_PALETTE.length - 1
    : areaBreaks.findIndex((limit) => area <= limit);
}

function renderLegend() {
  const items = getLegendItems();
  dom.legend.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("div");
      row.className = "legend-item";

      const swatch = document.createElement("span");
      swatch.className = "swatch";
      swatch.style.background = item.color;

      const label = document.createElement("span");
      label.className = "legend-label";
      label.textContent = item.label;

      row.append(swatch, label);
      return row;
    }),
  );
}

function getLegendItems() {
  if (colorMode === "region") {
    return Object.values(REGION_META);
  }

  if (colorMode === "adjacent") {
    return ADJACENT_PALETTE.map((color, index) => ({
      color,
      label: `Màu ${index + 1}`,
    }));
  }

  const labels = AREA_PALETTE.map((color, index) => {
    const from = index === 0 ? 0 : areaBreaks[index - 1];
    const to = areaBreaks[index];
    return {
      color,
      label: to ? `${formatNumber(from)} - ${formatNumber(to)} km²` : `Trên ${formatNumber(from)} km²`,
    };
  });

  return labels;
}

function renderProvinceOptions() {
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Tất cả";

  const options = geojson.features.map((feature) => {
    const option = document.createElement("option");
    option.value = feature.properties.adm1_pcode;
    option.textContent = getProvinceName(feature);
    return option;
  });
  dom.provinceSelect.replaceChildren(defaultOption, ...options);
  dom.provinceSelect.value = selectedPCode;
}

function renderProvinceList() {
  const items = geojson.features.map((feature) => {
    const pcode = feature.properties.adm1_pcode;
    const item = document.createElement("button");
    item.className = `province-item${pcode === selectedPCode ? " active" : ""}`;
    item.type = "button";
    item.addEventListener("click", () => selectProvince(pcode, true));

    const swatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.style.background = colorByPCode.get(pcode) || "#aab8b5";

    const name = document.createElement("strong");
    name.textContent = getProvinceName(feature);

    const area = document.createElement("small");
    area.textContent = formatArea(feature.properties.area_sqkm);

    item.append(swatch, name, area);
    return item;
  });

  dom.provinceList.replaceChildren(...items);
}

function updateSummary() {
  if (!geojson) return;

  if (!selectedPCode) {
    const totalArea = geojson.features.reduce(
      (sum, feature) => sum + Number(feature.properties.area_sqkm || 0),
      0,
    );
    dom.selectedType.textContent = "Toàn quốc";
    dom.selectedName.textContent = `${geojson.features.length} đơn vị cấp tỉnh`;
    dom.selectedCode.textContent = "VN";
    dom.selectedArea.textContent = formatArea(totalArea);
    dom.selectedRegion.textContent = getModeLabel(colorMode);
    return;
  }

  const feature = geojson.features.find((candidate) => candidate.properties.adm1_pcode === selectedPCode);
  if (!feature) return;

  dom.selectedType.textContent = feature.properties.adm1_type_vi || "Tỉnh";
  dom.selectedName.textContent = getProvinceName(feature);
  dom.selectedCode.textContent = feature.properties.adm1_pcode;
  dom.selectedArea.textContent = formatArea(feature.properties.area_sqkm);
  dom.selectedRegion.textContent = getFeatureLegendLabel(feature);
}

function getFeatureLegendLabel(feature) {
  if (colorMode === "region") {
    const regionKey = REGION_BY_PCODE[feature.properties.adm1_pcode];
    return REGION_META[regionKey]?.label || "Chưa phân vùng";
  }

  if (colorMode === "area") {
    const bucket = getAreaBucket(Number(feature.properties.area_sqkm || 0));
    return getLegendItems()[bucket]?.label || "Diện tích";
  }

  return `Kề nhau: ${adjacencyByPCode.get(feature.properties.adm1_pcode)?.size || 0}`;
}

function getProvinceName(feature) {
  const type = feature.properties.adm1_type_vi;
  const name = feature.properties.adm1_name1 || feature.properties.adm1_name;

  if (type === "Thành phố" && !name.startsWith("TP.") && !name.startsWith("Thành phố")) {
    return `Thành phố ${name}`;
  }

  return name;
}

function getModeLabel(mode) {
  if (mode === "region") return "Theo vùng";
  if (mode === "adjacent") return "Không trùng màu kề nhau";
  return "Theo diện tích";
}

async function exportPdf() {
  const hadOsm = map.hasLayer(osmLayer);
  dom.exportButton.classList.add("is-busy");
  dom.exportButton.querySelector("span").textContent = "Đang xuất";
  document.body.classList.add("pdf-export");

  try {
    if (hadOsm) {
      map.removeLayer(osmLayer);
    }
    map.invalidateSize();
    await waitFrame();

    const canvas = await html2canvas(dom.mapArea, {
      backgroundColor: "#f4f7f6",
      logging: false,
      scale: Math.min(2, window.devicePixelRatio || 1.5),
      useCORS: true,
    });

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 9;
    const imageWidth = pageWidth - margin * 2;
    const imageHeight = (canvas.height * imageWidth) / canvas.width;
    const fittedHeight = Math.min(imageHeight, pageHeight - 24);
    const fittedWidth = (canvas.width * fittedHeight) / canvas.height;
    const x = (pageWidth - fittedWidth) / 2;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("Ban do Viet Nam 34 tinh/thanh pho", margin, 9);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.text("GIS: HDX/OCHA COD-AB, GSO. Valid 01/07/2025. Export tu trang tinh GitHub Pages.", margin, 14);
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", x, 18, fittedWidth, fittedHeight);
    pdf.save(`ban-do-viet-nam-34-tinh-${new Date().toISOString().slice(0, 10)}.pdf`);
    showToast("Đã xuất PDF");
  } catch (error) {
    console.error(error);
    showToast("Chưa xuất được PDF");
  } finally {
    if (hadOsm) {
      osmLayer.addTo(map);
      osmLayer.bringToBack();
    }
    document.body.classList.remove("pdf-export");
    dom.exportButton.classList.remove("is-busy");
    dom.exportButton.querySelector("span").textContent = "PDF";
    lucide.createIcons();
    map.invalidateSize();
  }
}

async function exportSvg() {
  if (!provinceLayer) return;

  dom.exportSvgButton.classList.add("is-busy");
  dom.exportSvgButton.querySelector("span").textContent = "Đang xuất";

  try {
    await waitFrame();
    const svgText = buildMapSvg();
    const feature = selectedPCode
      ? geojson.features.find((candidate) => candidate.properties.adm1_pcode === selectedPCode)
      : null;
    const scope = feature ? slugify(getProvinceName(feature)) : "viet-nam-34-tinh";
    downloadBlob(svgText, `ban-do-${scope}-${new Date().toISOString().slice(0, 10)}.svg`, "image/svg+xml");
    showToast("Đã xuất SVG");
  } catch (error) {
    console.error(error);
    showToast("Chưa xuất được SVG");
  } finally {
    dom.exportSvgButton.classList.remove("is-busy");
    dom.exportSvgButton.querySelector("span").textContent = "SVG";
    lucide.createIcons();
  }
}

function buildMapSvg() {
  const sourceSvg = document.querySelector(".leaflet-overlay-pane svg");
  if (!sourceSvg) {
    throw new Error("Không tìm thấy lớp SVG của bản đồ");
  }

  const mapSize = map.getSize();
  const clone = sourceSvg.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", String(mapSize.x));
  clone.setAttribute("height", String(mapSize.y));
  clone.setAttribute("viewBox", `0 0 ${mapSize.x} ${mapSize.y}`);
  clone.setAttribute("role", "img");
  clone.setAttribute("aria-label", selectedPCode ? `Bản đồ ${dom.selectedName.textContent}` : "Bản đồ Việt Nam 34 tỉnh");
  clone.removeAttribute("style");

  const background = createSvgElement("rect", {
    fill: "#f4f7f6",
    height: mapSize.y,
    width: mapSize.x,
    x: 0,
    y: 0,
  });
  clone.insertBefore(background, clone.firstChild);

  const title = createSvgElement("title");
  title.textContent = selectedPCode ? `Bản đồ ${dom.selectedName.textContent}` : "Bản đồ Việt Nam 34 tỉnh/thành phố";
  clone.insertBefore(title, clone.firstChild);

  if (dom.labelToggle.checked) {
    appendSvgLabels(clone, mapSize);
  }

  appendSvgCredit(clone, mapSize);
  return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(clone)}\n`;
}

function appendSvgLabels(svg, mapSize) {
  const labelGroup = createSvgElement("g", {
    "font-family": "Inter, Arial, sans-serif",
    "font-size": "11",
    "font-weight": "800",
    "text-anchor": "middle",
  });

  geojson.features.forEach((feature) => {
    const pcode = feature.properties.adm1_pcode;
    const layer = provinceLayers.get(pcode);
    if (!layer) return;
    if (!shouldShowLabel(layer, pcode)) return;

    const center = map.latLngToLayerPoint(layer.getBounds().getCenter());
    if (center.x < -70 || center.x > mapSize.x + 70 || center.y < -30 || center.y > mapSize.y + 30) {
      return;
    }

    const label = getProvinceName(feature);
    const textWidth = Math.max(34, Math.min(112, label.length * 6.4));
    const isSelected = selectedPCode === pcode;

    labelGroup.append(
      createSvgElement("rect", {
        fill: isSelected ? "#172322" : "rgba(255,255,255,0.86)",
        height: 18,
        rx: 5,
        stroke: "rgba(60,76,73,0.16)",
        width: textWidth,
        x: center.x - textWidth / 2,
        y: center.y - 9,
      }),
      createTextElement(center.x, center.y + 4, label, isSelected ? "#ffffff" : "#172322"),
    );
  });

  svg.appendChild(labelGroup);
}

function appendSvgCredit(svg, mapSize) {
  const caption = selectedPCode
    ? `${dom.selectedName.textContent} | ${dom.selectedCode.textContent} | ${dom.selectedArea.textContent}`
    : "Việt Nam 34 tỉnh/thành phố | GIS: HDX/OCHA COD-AB, GSO | Valid 01/07/2025";
  const credit = createSvgElement("text", {
    fill: "#667774",
    "font-family": "Inter, Arial, sans-serif",
    "font-size": "12",
    "font-weight": "800",
    x: 16,
    y: mapSize.y - 16,
  });
  credit.textContent = caption;
  svg.appendChild(credit);
}

function createSvgElement(tagName, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, String(value));
  });
  return element;
}

function createTextElement(x, y, text, fill) {
  const element = createSvgElement("text", { fill, x, y });
  element.textContent = text;
  return element;
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function waitFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

function formatArea(value) {
  return `${formatNumber(Number(value || 0))} km²`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("vi-VN", {
    maximumFractionDigits: value < 100 ? 2 : 0,
  }).format(value);
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    dom.toast.classList.remove("show");
  }, 2200);
}
