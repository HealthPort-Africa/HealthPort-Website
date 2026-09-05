/**
 * For Partners §2 — partner types. Five institutional partner categories,
 * each with a short description of the working relationship.
 */
const types = [
  {
    name: "Governments",
    body: "Regional and national partners embedding reliable oxygen infrastructure into public health systems.",
  },
  {
    name: "Development organisations",
    body: "Programme partners funding and shaping oxygen access across facilities, districts, and regions.",
  },
  {
    name: "NGOs",
    body: "Implementation and outreach partners extending oxygen access into underserved communities.",
  },
  {
    name: "Funders",
    body: "Institutional funders financing infrastructure deployment, capacity building, and impact scale-up.",
  },
  {
    name: "Distributors",
    body: "Logistics and distribution partners strengthening the last-mile delivery of oxygen and equipment.",
  },
];

export function PartnerTypes() {
  return (
    <section className="chapter" aria-label="Partner types">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Who we partner with</p>
        <h2 className="max-w-3xl mb-16">
          Five roles in the same mission.
        </h2>

        <ul
          className="list-none"
          style={{ borderTop: "1px solid var(--color-keyline)" }}
        >
          {types.map((t) => (
            <li
              key={t.name}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,16rem)_1fr] gap-3 md:gap-16 py-8 md:py-10"
              style={{ borderBottom: "1px solid var(--color-keyline)" }}
            >
              <h3
                style={{
                  fontSize: "var(--text-h4)",
                  lineHeight: 1.2,
                  fontWeight: 600,
                }}
              >
                {t.name}
              </h3>
              <p
                style={{
                  color: "var(--color-muted)",
                  fontSize: "var(--text-p1)",
                  lineHeight: 1.55,
                  maxWidth: "36rem",
                }}
              >
                {t.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
