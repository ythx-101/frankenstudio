#!/usr/bin/env node
/**
 * Frankenstudio worker — Node 22 job runner.
 * Picks up jobs from the queue (SQLite in dev, Turso in prod) and drives
 * the orchestrator pipeline for each job.
 *
 * Usage: npm run worker
 */

import { orchestrate } from "../orchestrator/index.js";

// Placeholder: poll loop will be wired in Task 2+
console.log("[worker] Frankenstudio worker starting…");
console.log("[worker] Orchestrator loaded:", typeof orchestrate);
