# FigCraft on GitHub Pages

This fork builds the upstream Rust/WebAssembly editor, packages it as an installable offline-capable PWA, and publishes it with GitHub Actions.

## Publish

1. Go to **Settings → Pages** and set **Source: GitHub Actions**.
2. Open **Actions → Deploy FigCraft PWA to GitHub Pages**. A push to main starts the deployment; a manual dispatch is also available.
3. After a successful build, visit https://cptnope.github.io/figcraft/ and choose **Install FigCraft**, or use Chrome/Edge's menu; for iPad use Safari Share → Add to Home Screen.

The upstream CI, release, packaging lint, Windows ARM64, and FreeBSD workflows are manual-only. This workflow alone runs automatically on main.

The editor can run without a server. The upstream web build does not yet support native file dialogs, and the interface is not touch-first. This PWA packaging does **not** add missing editor features or make cloud collaboration work without its separate service.

The PWA's generic document-style icon is not an ArtCraft trademark. Preserve upstream source and licensing notices when redistributing.
