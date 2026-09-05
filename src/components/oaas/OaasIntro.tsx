import Link from "next/link";

/**
 * OaaS §1 — What OaaS is and why it matters. Acts as the page hero:
 * eyebrow, h1 in plain terms, lead paragraph, primary CTA + secondary link
 * pointing back at Home. Sits on the oxygen thread like every other page.
 */
export function OaasIntro() {
  return (
    <section
      className="chapter pt-16 md:pt-24"
      style={{ paddingBottom: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Oxygen as a Service</p>
        <h1 className="max-w-5xl mb-10">
          Oxygen delivered as
          <br />
          a managed service.
        </h1>
        <p className="lead mb-12">
          HealthPort takes on the planning, supply, logistics, monitoring, and
          continuous optimisation of your hospital&rsquo;s oxygen ecosystem.
          You pay for what you use. We handle the rest.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Request an assessment
            <ArrowRight />
          </Link>
          <Link href="/hospital-solutions" className="btn-secondary">
            For hospital administrators
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
