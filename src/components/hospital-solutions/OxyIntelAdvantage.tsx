import Link from "next/link";

/**
 * Hospital Solutions §6 — The OxyIntel advantage. Framed as three
 * capabilities the platform adds on top of the service: visibility,
 * forecasting, decision support. Full detail lives on the OxyIntel page.
 */
const advantages = [
  {
    label: "Visibility",
    body: "Real-time tracking of cylinders through their operational lifecycle &mdash; filled, in use, empty &mdash; across your facility.",
  },
  {
    label: "Forecasting",
    body: "Machine-learning demand forecasts turn oxygen from a reactive scramble into a planned operational input.",
  },
  {
    label: "Decision support",
    body: "Clinical guidance for nurses, biomedical technicians, and frontline workers on respiratory devices and case triage.",
  },
];

export function OxyIntelAdvantage() {
  return (
    <section
      className="chapter"
      aria-label="The OxyIntel advantage"
      style={{
        background: "color-mix(in srgb, var(--color-sky) 6%, var(--color-parchment))",
      }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">The OxyIntel advantage</p>
        <h2 className="max-w-3xl mb-16">
          Infrastructure you can see. Decisions you can defend.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {advantages.map((a) => (
            <div
              key={a.label}
              className="flex flex-col gap-3"
              style={{
                borderTop: "1px solid var(--color-keyline)",
                paddingTop: "2rem",
              }}
            >
              <p className="eyebrow" style={{ color: "var(--color-teal)" }}>
                {a.label}
              </p>
              <p
                style={{
                  color: "var(--color-fg)",
                  fontSize: "var(--text-p1)",
                  lineHeight: 1.5,
                }}
                dangerouslySetInnerHTML={{ __html: a.body }}
              />
            </div>
          ))}
        </div>

        <p className="mt-10">
          <Link
            href="/oxyintel"
            className="link-quiet"
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: "var(--color-keyline)",
              color: "var(--color-fg)",
            }}
          >
            Meet OxyIntel &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
