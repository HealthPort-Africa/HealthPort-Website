/**
 * About §3 — Core values from the brand guide: Reliability, Responsibility,
 * Human Impact, Accessibility.
 */
const values = [
  {
    label: "Reliability",
    body: "Uptime you can count on, cylinders where they should be, systems that work when it matters.",
  },
  {
    label: "Responsibility",
    body: "We take on the operational burden of oxygen so hospitals can take responsibility for care.",
  },
  {
    label: "Human impact",
    body: "Every cylinder, every algorithm, every deployment is measured against patient outcomes.",
  },
  {
    label: "Accessibility",
    body: "Reliable oxygen should not depend on where a patient happens to be treated.",
  },
];

export function CoreValues() {
  return (
    <section className="chapter" aria-label="Core values">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">What we hold to</p>
        <h2 className="max-w-3xl mb-16">Four values, unchanged.</h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
          style={{
            borderTop: "1px solid var(--color-keyline)",
            paddingTop: "3rem",
          }}
        >
          {values.map((v) => (
            <div key={v.label} className="flex flex-col gap-3">
              <p className="eyebrow" style={{ color: "var(--color-teal)" }}>
                {v.label}
              </p>
              <p
                style={{
                  color: "var(--color-fg)",
                  fontSize: "var(--text-p1)",
                  lineHeight: 1.5,
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
