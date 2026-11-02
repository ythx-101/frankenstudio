export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "640px", margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: "0.5rem" }}>
        🧟 Frankenstudio
      </h1>
      <p style={{ color: "var(--muted)" }}>
        One idea in. One finished, publishable piece out.
      </p>
      <p style={{ marginTop: "2rem", color: "var(--bolt-green)", fontSize: "0.85rem" }}>
        🚧 Under construction
      </p>
    </main>
  );
}
