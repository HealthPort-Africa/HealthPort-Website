/**
 * About §6 — Licences, certifications, and regulatory approvals. Placeholder
 * rows until client provides the confirmed list.
 */
const rows = [
  { title: "Regulatory approvals", note: "List pending client input" },
  { title: "Certifications", note: "List pending client input" },
  { title: "Licences", note: "List pending client input" },
];

export function Licenses() {
  return (
    <section
      className="chapter"
      aria-label="Licences and certifications"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4vw, 6rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Licences and certifications</p>
        <h2 className="max-w-3xl mb-10">
          Regulated infrastructure, held to standard.
        </h2>

        <ul
          className="list-none"
          style={{ borderTop: "1px solid var(--color-keyline)" }}
        >
          {rows.map((r) => (
            <li
              key={r.title}
              className="flex items-baseline justify-between py-5"
              style={{ borderBottom: "1px solid var(--color-keyline)" }}
            >
              <span
                style={{
                  fontSize: "var(--text-h5)",
                  fontWeight: 600,
                }}
              >
                {r.title}
              </span>
              <span
                className="eyebrow"
                style={{ color: "var(--color-muted)" }}
              >
                {r.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
