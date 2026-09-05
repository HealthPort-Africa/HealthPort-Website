/**
 * For Partners §6 — current partners and programmes. Placeholder rows until
 * client provides confirmed partner names, programme scopes, and use
 * permissions. Layout holds proportions for real content to drop in.
 */
const programmes = [
  { partner: "Partner name pending", programme: "Programme name pending", scope: "Scope pending" },
  { partner: "Partner name pending", programme: "Programme name pending", scope: "Scope pending" },
  { partner: "Partner name pending", programme: "Programme name pending", scope: "Scope pending" },
];

export function CurrentPartners() {
  return (
    <section className="chapter" aria-label="Current partners and programmes">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Current partners and programmes</p>
        <h2 className="max-w-3xl mb-12">
          The organisations building this with us.
        </h2>

        <div style={{ borderTop: "1px solid var(--color-keyline)" }}>
          {programmes.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 py-6 md:py-8"
              style={{ borderBottom: "1px solid var(--color-keyline)" }}
            >
              <p
                className="eyebrow"
                style={{ color: "var(--color-muted)" }}
              >
                {p.partner}
              </p>
              <p style={{ color: "var(--color-muted)" }}>{p.programme}</p>
              <p style={{ color: "var(--color-muted)" }}>{p.scope}</p>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-[13px]"
          style={{ color: "var(--color-muted)" }}
        >
          Partner names and programme details pending client input and
          permissions.
        </p>
      </div>
    </section>
  );
}
