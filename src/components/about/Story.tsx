/**
 * About §4 — The story: how HealthPort started, where it's going. Copy is
 * placeholder until client supplies founding-story bullets (see
 * open_client_decisions).
 */
export function Story() {
  return (
    <section
      className="chapter"
      aria-label="Our story"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Our story</p>
        <h2 className="max-w-3xl mb-12">
          How HealthPort started &mdash; and where it&rsquo;s going.
        </h2>

        <div
          className="prose-column"
          style={{
            fontSize: "var(--text-p1)",
            lineHeight: 1.7,
            color: "var(--color-fg)",
          }}
        >
          <p>
            Founding-story copy pending client input. This section reads as
            a two- or three-paragraph narrative from bullet-point material
            supplied by the founding team.
          </p>
          <p className="mt-6" style={{ color: "var(--color-muted)" }}>
            Founding-story bullets pending client input.
          </p>
        </div>
      </div>
    </section>
  );
}
