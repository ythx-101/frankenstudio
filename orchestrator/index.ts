// Orchestrator: small DAG runner.
// Wires stage schemas, handles retries, and drives the critic loop (≤ 2 revisions).
// Each stage writes jobs/<id>/<stage>.json; resumable after crash.
// Task 2+ will implement the full graph.

export type JobId = string;

/** Placeholder — full DAG implementation in Task 2+. */
export async function orchestrate(_jobId: JobId): Promise<void> {
  throw new Error("orchestrate() not yet implemented");
}
