# Bản đồ Việt Nam 34 tỉnh

Trang tĩnh để deploy GitHub Pages: mở `index.html` là tải sẵn GeoJSON 34 đơn vị hành chính cấp tỉnh, chọn tỉnh/thành phố, tô màu tự động và xuất PDF/SVG.

## Dữ liệu

- Ranh giới GIS: [HDX/OCHA COD-AB `Viet Nam - Subnational Administrative Boundaries`](https://data.humdata.org/dataset/cod-ab-vnm), nguồn GSO, Admin 1 = 34 Province, valid từ `01/07/2025`.
- Danh sách hành chính mới: [Nghị quyết 202/2025/QH15](https://xaydungchinhsach.chinhphu.vn/chi-tiet-34-don-vi-hanh-chinh-cap-tinh-tu-12-6-2025-119250612141845533.htm), 34 đơn vị cấp tỉnh gồm 28 tỉnh và 6 thành phố.
- File web đã tối ưu: `data/vietnam-34-provinces.geojson`.
- File high detail gốc Admin 1: `data/vietnam-34-provinces-high.geojson` (~48 MB).
- Trong giao diện có thể chuyển giữa bản nhanh và bản high detail.

## Deploy GitHub Pages

1. Push toàn bộ thư mục này lên repository GitHub.
2. Vào `Settings` → `Pages`.
3. Chọn deploy từ branch chứa `index.html`, thư mục `/root`.
