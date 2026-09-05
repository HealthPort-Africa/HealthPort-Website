import Link from "next/link";

/**
 * OxyIntel §1 — intro as the intelligence layer behind HealthPort. This is
 * the one page that reads slightly more "product" — Sky Surge is allowed
 * as an accent per the brand guide.
 */
export function OxyIntelHero() {
  return (
    <section
      className="chapter pt-16 md:pt-24"
      style={{ paddingBottom: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8" style={{ color: "var(--color-sky-deep)" }}>
          OxyIntel
        </p>
        <h1 className="max-w-5xl mb-10">
          The intelligence layer
          <br />
          behind reliable oxygen.
        </h1>
        <p className="lead mb-12">
          One platform, three modules. OxyIntel turns operational data into
          decisions &mdash; from cylinder-level visibility to demand
          forecasting to clinical decision support at the bedside.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Talk to us about OxyIntel
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
