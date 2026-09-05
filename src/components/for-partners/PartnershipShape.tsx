/**
 * For Partners §3 — what partnership looks like: programme design, funding,
 * distribution. Three pillars, restrained.
 */
const pillars = [
  {
    title: "Programme design",
    body: "We co-design programmes that match the operational realities of the facilities you serve &mdash; from single-hospital pilots to multi-region rollouts.",
  },
  {
    title: "Funding & delivery",
    body: "We align funding structures with deployment plans so infrastructure lands where it&rsquo;s needed and stays functional afterward.",
  },
  {
    title: "Distribution & scale",
    body: "We extend reach through logistics, distribution, and last-mile partnerships that keep oxygen moving predictably.",
  },
];

export function PartnershipShape() {
  return (
    <section className="chapter" aria-label="What partnership looks like">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">What partnership looks like</p>
        <h2 className="max-w-3xl mb-16">
          Three ways we build together.
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          style={{
            borderTop: "1px solid var(--color-keyline)",
            paddingTop: "3rem",
          }}
        >
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col gap-4">
              <h3
                style={{
                  fontSize: "var(--text-h5)",
                  lineHeight: 1.3,
                  fontWeight: 600,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: "var(--text-p2)",
                  lineHeight: 1.6,
                }}
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
