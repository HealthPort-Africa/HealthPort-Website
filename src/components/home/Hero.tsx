import Link from "next/link";
import { HeroTicker } from "@/components/home/HeroTicker";
import { HeroWash } from "@/components/shared/HeroWash";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden isolate flex flex-col"
      style={{
        minHeight: "calc(100svh - 4.625rem)",
        paddingTop: "clamp(2rem, 4vw, 4rem)",
      }}
      aria-label="Never worry about oxygen again"
    >
      {/* Atmospheric wash — parallax'd client leaf. */}
      <HeroWash />

      <div className="container-page relative w-full flex-1 flex items-center pb-10">
        {/* Parallax on the whole hero copy block so eyebrow, headline,
            sub-line and CTAs move as one unit (no per-element overlap). */}
        <div className="w-full flex flex-col items-center text-center" data-parallax="-0.1">
          <p className="eyebrow mb-6">Oxygen as a Service</p>
          <h1 className="max-w-4xl mb-8">
            Never worry about
            <br />
            <span className="oxygen-word">oxygen</span>{" "}
            again.
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl"
            style={{
              fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.25rem)",
              lineHeight: 1.55,
              color: "var(--color-muted)",
            }}
          >
            HealthPort delivers reliable oxygen infrastructure. You focus
            on patient care while we ensure a continuous oxygen supply.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Book an assessment
              <ArrowRight />
            </Link>
            <Link href="/oxygen-as-a-service" className="btn-secondary">
              How OaaS works
            </Link>
          </div>
        </div>
      </div>

      {/* Hero photo ticker — pinned to the bottom of the hero section,
          spans the full viewport width (sits outside the centered flex
          column so it isn't shrunk to the container's width). */}
      <HeroTicker />
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
