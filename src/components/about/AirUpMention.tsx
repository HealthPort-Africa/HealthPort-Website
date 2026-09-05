/**
 * About §7 — AirUp. Light mention only per the client's approved feedback
 * (Option 2 from the direction PDF). One paragraph. Also mirrored in the
 * global footer.
 */
export function AirUpMention() {
  return (
    <section
      className="chapter"
      aria-label="AirUp"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4vw, 6rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-6">AirUp</p>
        <div className="prose-column">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-h4)",
              lineHeight: 1.35,
              fontWeight: 600,
              color: "var(--color-heading)",
              textWrap: "pretty",
            }}
          >
            AirUp is HealthPort&rsquo;s community-facing brand &mdash;
            focused on making respiratory support approachable, reassuring,
            and accessible to patients and communities.
          </p>
          <p
            className="mt-6"
            style={{ color: "var(--color-muted)" }}
          >
            AirUp will launch on its own dedicated platform when ready. For
            now, this is where it lives.
          </p>
        </div>
      </div>
    </section>
  );
}
