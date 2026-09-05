/**
 * OxyIntel §3 — what the platform does. Three capability rows: real-time
 * data, forecasting, clinical support. Sits under the modules so the
 * reader sees the abstract benefit after the concrete module list.
 */
const capabilities = [
  {
    label: "Real-time operational data",
    body: "Every cylinder, every movement, every reading. OxyIntel captures ground truth from the field and makes it decision-ready.",
  },
  {
    label: "Demand forecasting",
    body: "Hybrid statistical + AI forecasts turn oxygen from a reactive scramble into a planned input. Accuracy improves as more data accumulates.",
  },
  {
    label: "Clinical decision support",
    body: "AI-assisted triage, respiratory device troubleshooting, and intelligent guidance for frontline healthcare workers.",
  },
];

export function WhatItDoes() {
  return (
    <section
      className="chapter"
      aria-label="What OxyIntel does"
      style={{
        background: "color-mix(in srgb, var(--color-sky) 6%, var(--color-parchment))",
      }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8" style={{ color: "var(--color-sky-deep)" }}>
          What it does
        </p>
        <h2 className="max-w-3xl mb-16">
          From ground truth to clinical decisions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {capabilities.map((c) => (
            <div
              key={c.label}
              className="flex flex-col gap-3"
              style={{
                borderTop: "1px solid var(--color-keyline)",
                paddingTop: "2rem",
              }}
            >
              <p
                className="eyebrow"
                style={{ color: "var(--color-sky-deep)" }}
              >
                {c.label}
              </p>
              <p
                style={{
                  color: "var(--color-fg)",
                  fontSize: "var(--text-p1)",
                  lineHeight: 1.55,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
