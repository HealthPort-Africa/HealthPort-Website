/**
 * For Partners §5 — impact reporting and transparency. Written for funders
 * who need to defend their spend and see outcomes in numbers.
 */
const commitments = [
  {
    label: "Measured outcomes",
    body: "Impact quantified in the language funders and governments already use — hospitals served, patients supported, litres delivered, uptime achieved.",
  },
  {
    label: "Auditable data",
    body: "Ground-truth operational data from OxyIntel, not survey estimates. Every cylinder is a data point.",
  },
  {
    label: "Public transparency",
    body: "Programme-level reporting shared with partners, so accountability lives in the relationship.",
  },
];

export function ImpactReporting() {
  return (
    <section className="chapter" aria-label="Impact reporting and transparency">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Impact reporting and transparency</p>
        <h2 className="max-w-3xl mb-16">
          What we build, you can measure.
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          style={{
            borderTop: "1px solid var(--color-keyline)",
            paddingTop: "3rem",
          }}
        >
          {commitments.map((c) => (
            <div key={c.label} className="flex flex-col gap-3">
              <p className="eyebrow" style={{ color: "var(--color-teal)" }}>
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
