# Portfolio (React + TypeScript + Vite)

This project powers Hashim Ali's portfolio. It uses TailwindCSS and Framer Motion for a polished, animated UI.

## Project Images

Place screenshots under `public/images/projects/` with this convention:

- `<slug>-1.jpg`, `<slug>-2.jpg`, ...
- Slug is derived from project name lowercased, non-alphanumerics replaced with `-`.

Examples:

- `Wisemarket` → `public/images/projects/wisemarket-1.jpg`, `wisemarket-2.jpg`, `wisemarket-3.jpg`
- `Gorex v2` → `public/images/projects/gorex-v2-1.jpg`, `gorex-v2-2.jpg`
- `ERP Handy` → `public/images/projects/erp-handy-1.jpg`, `erp-handy-2.jpg`

The gallery auto-detects counts via `shotsFor()` in `src/components/Projects.tsx`. Update that function if you add more images for a project.
