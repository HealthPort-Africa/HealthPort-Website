/**
 * For Partners §4 — Sustainability + solar reprise.
 *
 * CONFIRM: solar deployment status. Reused framing from OaaS §5 but weighted
 * toward the funder/government audience — resilience, sustainability, and
 * long-term systems, not just clinical uptime.
 */
export function SustainabilityStory() {
  return (
    <section
      className="chapter"
      aria-label="Sustainability and solar"
      style={{
        background: "color-mix(in srgb, var(--color-teal) 6%, var(--color-parchment))",
      }}
    >
      <div className="chapter-inner grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-10 md:gap-16 items-start">
        <div>
          <p className="eyebrow mb-4" style={{ color: "var(--color-teal)" }}>
            Sustainability
          </p>
          <h2 style={{ fontSize: "var(--text-h3)", lineHeight: 1.15 }}>
            Resilient by design.
          </h2>
        </div>
        <div>
          <p className="lead mb-6">
            Reliable oxygen depends on reliable power. HealthPort supports
            solar-powered oxygen generation where grids are unstable &mdash;
            an infrastructure story that matters to governments, funders,
            and long-term development partners.
          </p>
          <p style={{ color: "var(--color-muted)" }}>
            Solar generation reduces reliance on diesel, cuts operating
            costs over time, and strengthens the resilience of the systems
            we build together.
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
