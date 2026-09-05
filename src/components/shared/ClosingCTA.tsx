import Link from "next/link";

/**
 * Shared closing CTA. Used on every page as the final beat.
 *
 * Two layouts:
 * - `stack` (default): eyebrow → headline → primary CTA, left-aligned.
 * - `inline`: on ≥md screens, headline sits left with the CTA to its right;
 *   below md it collapses to the stacked layout. Home uses this per the
 *   Second-Draft Figma.
 *
 * Caller controls copy + href so the CTA verb matches the page ("Book an
 * assessment" vs "Request an assessment" vs "Start a partnership
 * conversation").
 */
export function ClosingCTA({
  eyebrow,
  headline,
  ctaLabel,
  ctaHref = "/contact",
  layout = "stack",
}: {
  eyebrow?: string;
  headline: React.ReactNode;
  ctaLabel: string;
  ctaHref?: string;
  layout?: "stack" | "inline";
}) {
  const button = (
    <Link href={ctaHref} className="btn-primary shrink-0">
      {ctaLabel}
      <Arrow />
    </Link>
  );

  const heading = (
    <h2 className="max-w-4xl" style={layout === "stack" ? { marginBottom: "3rem" } : undefined}>
      {headline}
    </h2>
  );

  return (
    <section
      className="chapter"
      aria-label={ctaLabel}
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="chapter-inner">
        {eyebrow && <p className="eyebrow mb-8">{eyebrow}</p>}
        {layout === "inline" ? (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {heading}
            {button}
          </div>
        ) : (
          <>
            {heading}
            {button}
          </>
        )}
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
