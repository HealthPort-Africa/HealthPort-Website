/**
 * Hospital Solutions §7 — Case studies. 1–2 short hospital stories per client
 * feedback. Ships as two labeled placeholder cards until client provides
 * material and naming permissions (see open_client_decisions).
 */
const cases = [
  { code: "01", tag: "Tertiary hospital · Nigeria" },
  { code: "02", tag: "Referral hospital · West Africa" },
];

export function CaseStudies() {
  return (
    <section className="chapter" aria-label="Case studies">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Case studies</p>
        <h2 className="max-w-3xl mb-16">
          Hospitals like yours, before and after.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {cases.map((c) => (
            <article
              key={c.code}
              className="p-8 md:p-10 flex flex-col gap-6"
              style={{
                border: "1px solid var(--color-keyline)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="stat"
                  style={{
                    fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2rem)",
                    color: "var(--color-teal)",
                    lineHeight: 1,
                  }}
                >
                  {c.code}
                </span>
                <span
                  className="eyebrow"
                  style={{ color: "var(--color-muted)" }}
                >
                  {c.tag}
                </span>
              </div>

              <Row label="Before" text="Facility situation pending client input." />
              <Row label="What changed" text="Intervention pending client input." />
              <Row label="Outcome" text="Measured result pending client input." />
            </article>
          ))}
        </div>

        <p
          className="mt-8 text-[13px]"
          style={{ color: "var(--color-muted)" }}
        >
          Case-study material and naming permissions pending client input.
        </p>
      </div>
    </section>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="eyebrow" style={{ color: "var(--color-muted)" }}>
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h5)",
          lineHeight: 1.4,
          fontWeight: 600,
          color: "var(--color-muted)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
