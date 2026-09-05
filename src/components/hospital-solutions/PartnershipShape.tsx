/**
 * Hospital Solutions §4 — What partnership looks like. Three pillars framed
 * for an administrator: the commercial shape (usage-based), the operational
 * shape (managed service), and the accountability shape (one partner, real
 * SLAs).
 */
const pillars = [
  {
    title: "Usage-based, not procurement",
    body: "You pay for oxygen your hospital actually consumes. No advance purchase. No stockpiling. One monthly invoice at the end of each period.",
  },
  {
    title: "Managed, not supplied",
    body: "HealthPort owns cylinders, replenishment, maintenance, and distribution. Your teams stop coordinating suppliers and start focusing on patients.",
  },
  {
    title: "Accountable, not transactional",
    body: "A long-term infrastructure partnership with shared reliability targets, ongoing monitoring, and continuous optimisation. We&rsquo;re on the same side of the outcome.",
  },
];

export function PartnershipShape() {
  return (
    <section className="chapter" aria-label="What partnership looks like">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">What partnership looks like</p>
        <h2 className="max-w-4xl mb-16">
          A relationship, not a purchase order.
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
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
