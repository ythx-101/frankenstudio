# Structure
- `app/` Next.js UI (idea box, live "operating table" view of stages, result page)
- `stages/` one folder per organ: plan, research, write, illustrate, critic, render-image, render-video
- `orchestrator/` job graph, retries, critic loop (max 2 revisions)
- `schemas/` zod schemas shared by stages
- `.kiro/` specs, steering, hooks — committed, never gitignored
