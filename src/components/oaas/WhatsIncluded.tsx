/**
 * OaaS §4 — What's included. Dense reference list rendered as a keyline
 * table, not a card grid. Oxygen purity standard and clinician training are
 * called out per client feedback as trust signals — marked with
 * FACT NEEDED until client confirms specific values.
 */
type IncludedItem = {
  title: string;
  body: string;
  factNeeded?: boolean;
};

const items: IncludedItem[] = [
  {
    title: "Medical oxygen cylinders",
    body: "Supplied, owned, and maintained by HealthPort across your facility.",
  },
  {
    title: "Cylinder deployment & management",
    body: "Delivered, installed, and tracked through their operational lifecycle.",
  },
  {
    title: "Cylinder replenishment",
    body: "Scheduled replenishment planned against actual usage, not guesswork.",
  },
  {
    title: "Reticulation (copper piping to bedside)",
    body: "Piped-gas installation with flexible payment terms.",
  },
  {
    title: "Pulse oximeters",
    body: "One-time support where required, with training on accuracy.",
  },
  {
    title: "Oxygen pressure gauges",
    body: "One-time support where required, calibrated at deployment.",
  },
  {
    title: "Installation & deployment support",
    body: "HealthPort engineers integrate the system into your existing operations.",
  },
  {
    title: "Ongoing monitoring & optimisation",
    body: "Continuous performance monitoring; optimisation improves as data accumulates.",
  },
  {
    title: "Oxygen purity standard",
    body: "The medical-grade purity level HealthPort guarantees.",
    factNeeded: true,
  },
  {
    title: "Clinician training",
    body: "Safe handling, monitoring, and device usage &mdash; including pulse oximeter accuracy.",
    factNeeded: true,
  },
];

export function WhatsIncluded() {
  return (
    <section className="chapter" aria-label="What's included">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">What&rsquo;s included</p>
        <h2 className="max-w-4xl mb-16">
          Everything a hospital needs to stop managing oxygen.
        </h2>

        <ul
          className="list-none"
          style={{ borderTop: "1px solid var(--color-keyline)" }}
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,18rem)_1fr] gap-3 md:gap-10 py-6 md:py-7"
              style={{ borderBottom: "1px solid var(--color-keyline)" }}
            >
              <div className="flex items-baseline gap-3">
                <h3
                  style={{
                    fontSize: "var(--text-h5)",
                    lineHeight: 1.3,
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>
                {item.factNeeded && (
                  <span
                    className="eyebrow"
                    style={{
                      color: "var(--color-muted)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Pending
                  </span>
                )}
              </div>
              <p
                style={{
                  color: item.factNeeded
                    ? "var(--color-muted)"
                    : "var(--color-fg)",
                  fontSize: "var(--text-p2)",
                  lineHeight: 1.55,
                }}
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
