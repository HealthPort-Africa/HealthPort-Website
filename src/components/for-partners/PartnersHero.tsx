import Link from "next/link";

/**
 * For Partners §1 — institutional register at its strongest per DESIGN-BRIEF.
 * Frame: how partners help expand oxygen access at scale.
 */
export function PartnersHero() {
  return (
    <section
      className="chapter pt-16 md:pt-24"
      style={{ paddingBottom: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">For Partners</p>
        <h1 className="max-w-5xl mb-10">
          Reliable oxygen infrastructure,
          <br />
          delivered at scale.
        </h1>
        <p className="lead mb-12">
          Governments, development organisations, NGOs, and funders partner
          with HealthPort to expand access to reliable medical oxygen across
          Africa &mdash; from programme design and funding to distribution
          and impact reporting.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Start a partnership conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
