/**
 * Contact §4 + §5 — Lagos office address (static-map placeholder, not an
 * embedded Google Map — see CLAUDE.md bandwidth rules) and expected
 * response time.
 */
export function OfficeAndResponse() {
  return (
    <section
      className="chapter"
      aria-label="Office and response time"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4vw, 6rem)" }}
    >
      <div className="chapter-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="eyebrow mb-4">Lagos office</p>
            <h3
              className="mb-2"
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              The Phillipi Centre
            </h3>
            <p style={{ color: "var(--color-muted)" }}>
              Plot A, Awolowo Way, Ikeja,<br />Lagos, Nigeria.
            </p>

            <div
              className="mt-6"
              style={{
                aspectRatio: "16 / 9",
                background:
                  "color-mix(in srgb, var(--color-teal) 8%, var(--color-parchment))",
                border: "1px solid var(--color-keyline)",
                borderRadius: "var(--radius-media)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              role="img"
              aria-label="Static map placeholder"
            >
              <p
                className="eyebrow"
                style={{ color: "var(--color-muted)" }}
              >
                Static map · pending address
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Expected response time</p>
            <h3
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              Within 24 hours.
            </h3>
            <p className="mt-4" style={{ color: "var(--color-muted)" }}>
              Hospital assessments and urgent partnership conversations are
              flagged and handled ahead of general enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
