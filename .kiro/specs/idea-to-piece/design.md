# Design
Pipeline (each arrow is a schema-checked hand-off):
input → [research: Playwright] → [plan: DeepSeek] → [write: DeepSeek] → [illustrate: LLM→SVG] → [critic: 2nd vendor] ⟲ ≤2 → [render-image: HTML→PNG] → [render-video: ffmpeg]

- Orchestrator: a small DAG runner; each stage writes `jobs/<id>/<stage>.json`; resumable after crash.
- Visual language: one fixed template (paper background, serif headline, ink-line SVGs) so every piece looks like a series.
- Video: section cards from the same HTML, Ken-Burns pan, burned-in captions, royalty-free or code-generated sound.
- UI theme: dark lab / Frankenstein operating table, green bolts light up per stage (fits Kiroween without hurting legibility).
- Kiro usage to show judges: specs drive every stage; hooks run schema tests and a "no secrets" scan on save; steering keeps the visual language; MCP for the browser stage during development.
