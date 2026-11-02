# Tech
- Web app: Next.js (App Router) + TypeScript, deployed on Vercel free tier.
- Worker: Node 22 job runner; ffmpeg for video; Playwright (Chromium) for research and for rendering HTML → PNG.
- Models at runtime: DeepSeek API (planner, writer) and a second vendor for the critic, called through one `llm()` adapter. Kiro is the build tool, not a runtime dependency.
- Storage: local filesystem in dev, Vercel Blob in prod. Job state in SQLite (dev) / Turso (prod).
- Every stage is a pure function `stage(input) -> artifact` with a JSON schema; the orchestrator only wires schemas.
- Secrets only from env vars; never commit keys or personal paths.
