/**
 * OaaS §5 — Solar-powered oxygen generation.
 *
 * CONFIRM: solar deployment status (deployed / roadmap / not yet).
 * See memory/open_client_decisions.md. Ships as a normal section; easy to
 * delete if the client says "not yet." Copy is deliberately neutral so it
 * reads honestly at either status.
 */
export function Solar() {
  return (
    <section
      className="chapter"
      aria-label="Solar-powered oxygen generation"
      style={{ paddingBlock: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-10 md:gap-16 items-start">
        <div>
          <p className="eyebrow mb-4">Sustainability</p>
          <h2 style={{ fontSize: "var(--text-h3)", lineHeight: 1.15 }}>
            Solar-powered oxygen generation.
          </h2>
        </div>
        <div>
          <p className="lead">
            Reliable oxygen depends on reliable power. Where hospitals face
            unstable grids, HealthPort supports solar-powered oxygen
            generation to keep systems running independent of the mains
            supply &mdash; a resilience story that matters to hospitals,
            governments, and long-term funders alike.
          </p>
          <p
            className="mt-6 text-[13px]"
            style={{ color: "var(--color-muted)" }}
          >
            Deployment status pending client confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
