import Link from "next/link";

/**
 * Hospital Solutions §1 — the pain of managing oxygen in-house. Framed for a
 * hospital administrator: what their day looks like now, and what changes.
 */
export function HospitalIntro() {
  return (
    <section
      className="chapter pt-16 md:pt-24"
      style={{ paddingBottom: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Hospital Solutions</p>
        <h1 className="max-w-5xl mb-10">
          Stop managing oxygen.
          <br />
          Start delivering care.
        </h1>
        <p className="lead mb-12">
          Chasing suppliers, tracking cylinders, absorbing shortages &mdash;
          none of it is patient care. HealthPort takes on oxygen as an
          operational partner so your teams can focus on the work only they
          can do.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Book an assessment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/oxygen-as-a-service" className="btn-secondary">
            How the service works
          </Link>
        </div>
      </div>
    </section>
  );
}
