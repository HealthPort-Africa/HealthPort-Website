/**
 * About §2 — Why We Exist, reprised from Home. The emotional foundation
 * repeats here as the connecting story between mission and everything else.
 */
export function WhyWeExistReprise() {
  return (
    <section
      className="chapter"
      aria-label="Why we exist"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Why we exist</p>
        <div
          className="prose-column"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-h3)",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            fontWeight: 600,
            color: "var(--color-heading)",
            textWrap: "pretty",
          }}
        >
          <p>
            Every day, patients lose access to life-saving oxygen &mdash; not
            because oxygen doesn&rsquo;t exist, but because healthcare
            systems struggle to deliver it reliably.
          </p>
          <p className="mt-8">
            HealthPort exists to remove that burden. Hospitals should never
            have to worry about oxygen availability &mdash; so healthcare
            professionals can focus entirely on caring for patients.
          </p>
        </div>
      </div>
    </section>
  );
}
