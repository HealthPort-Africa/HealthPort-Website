/**
 * OxyIntel §4 — what's coming. Roadmap capabilities from the concept note:
 * OxySense, OxyDash, advanced AI. Framed as an honest roadmap, not
 * marketing vapor.
 */
const coming = [
  {
    name: "OxySense",
    body: "Real-time oxygen usage monitoring at the point of consumption.",
  },
  {
    name: "OxyDash",
    body: "Operational dashboards and analytics for hospital administrators.",
  },
  {
    name: "Advanced demand AI",
    body: "Deeper machine-learning demand models fed by connected sensors.",
  },
  {
    name: "Computer vision",
    body: "Automated cylinder tracking through image recognition.",
  },
  {
    name: "Predictive maintenance",
    body: "Detect equipment wear before it disrupts supply.",
  },
  {
    name: "Patient-facing services",
    body: "Direct patient support for respiratory care beyond hospital walls.",
  },
];

export function WhatsComing() {
  return (
    <section className="chapter" aria-label="What's coming">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">What&rsquo;s coming</p>
        <h2 className="max-w-3xl mb-12">
          The roadmap. Honest about what&rsquo;s next.
        </h2>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 list-none max-w-4xl"
          style={{ borderTop: "1px solid var(--color-keyline)", paddingTop: "2rem" }}
        >
          {coming.map((c) => (
            <li
              key={c.name}
              className="flex flex-col gap-2"
              style={{ paddingBottom: "1rem" }}
            >
              <h3
                style={{
                  fontSize: "var(--text-h5)",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {c.name}
              </h3>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: "var(--text-p2)",
                  lineHeight: 1.55,
                }}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
