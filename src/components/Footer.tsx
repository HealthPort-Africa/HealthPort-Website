import Link from "next/link";
import Image from "next/image";
import { FooterWatermark } from "@/components/FooterWatermark";

export function Footer() {
  return (
    <footer>
      {/* Top band — parchment closing CTA. Merged into the footer so it and
          the dark footer body read as one contiguous element. */}
      <section
        aria-label="Book an assessment"
        style={{ paddingBlock: "clamp(48px, 5vw, 84px)" }}
      >
        <div className="container-page flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          <h2
            className="max-w-2xl"
            style={{
              fontSize: "var(--text-h3)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              fontWeight: 600,
              textWrap: "balance",
              margin: 0,
            }}
          >
            You focus on patient care.<br />
            We make sure oxygen is always available.
          </h2>
          <Link href="/contact" className="btn-primary shrink-0">
            Book an Assessment
            <Arrow />
          </Link>
        </div>
      </section>

      {/* Dark footer body — dashed keyline separates it from the parchment
          CTA band above. */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "var(--color-ink)",
          color: "var(--color-parchment)",
          borderTop: "1px dashed rgba(242,239,234,0.16)",
        }}
      >
        {/* Atmospheric wash at the bottom — Coral · Violet · Sky ambient
            hues glowing up from the footer's bottom edge into Ink. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "55%",
            zIndex: 0,
            background: [
              "radial-gradient(ellipse 70% 60% at 12% 110%, rgba(239, 100, 97, 0.18), transparent 60%)",
              "radial-gradient(ellipse 80% 65% at 50% 115%, rgba(128, 16, 120, 0.30), transparent 60%)",
              "radial-gradient(ellipse 75% 60% at 88% 110%, rgba(93, 183, 222, 0.22), transparent 60%)",
            ].join(", "),
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4) 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4) 75%, transparent 100%)",
          }}
        />

        {/* Watermark — huge translucent HealthPort wordmark anchored to the
            bottom, fades + rises from below on scroll-in. */}
        <FooterWatermark />

        <div className="container-page relative" style={{ zIndex: 1, paddingTop: "clamp(56px, 6vw, 88px)", paddingBottom: "clamp(48px, 5vw, 72px)" }}>
          {/* Top row: logo+quote hard-left | 3 tight link columns hard-right. */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-start gap-10 md:gap-16 w-full">
            {/* Left: logo + quote card, sits at container-left */}
            <div className="flex flex-col gap-5 items-start" style={{ maxWidth: "22rem" }}>
              <Image
                src="/brand/logo-horizontal-teagreen.svg"
                alt="HealthPort"
                width={600}
                height={128}
                className="h-11 w-auto"
                priority={false}
              />
              <p
                style={{
                  color: "rgba(242,239,234,0.72)",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                &ldquo;You focus on patient care. We make sure oxygen is
                always available.&rdquo;
              </p>
            </div>

            {/* Middle: spacer column */}
            <div aria-hidden />

            {/* Right: 3 tightly-grouped link columns */}
            <div className="flex gap-10 md:gap-14 md:pt-1">
              <FooterCol title="Solutions">
                <FooterLink href="/oxygen-as-a-service">
                  Oxygen as a service
                </FooterLink>
                <FooterLink href="/oxyintel">OxyIntel</FooterLink>
              </FooterCol>
              <FooterCol title="Who it's for">
                <FooterLink href="/hospital-solutions">
                  Hospital Solutions
                </FooterLink>
                <FooterLink href="/for-partners">For Partners</FooterLink>
              </FooterCol>
              <FooterCol title="Company">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterCol>
            </div>
          </div>

          {/* Watermark breathing space */}
          <div style={{ height: "clamp(120px, 16vw, 200px)" }} />

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
            style={{
              paddingTop: "20px",
              borderTop: "1px solid rgba(242,239,234,0.1)",
              fontSize: "13px",
              color: "rgba(242,239,234,0.5)",
            }}
          >
            <p>{new Date().getFullYear()} Healthport. Lagos, Nigeria.</p>
            <p>
              Community care by{" "}
              <Link
                href="/about"
                style={{
                  color: "var(--color-teagreen)",
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "3px",
                }}
              >
                AirUp
              </Link>{" "}
              &mdash; here for every breath.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p
        style={{
          color: "var(--color-parchment)",
          fontSize: "15px",
          fontWeight: 500,
          letterSpacing: "-0.005em",
        }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="opacity-60 hover:opacity-100 transition-opacity"
      style={{
        color: "var(--color-parchment)",
        fontSize: "14px",
        lineHeight: 1.4,
      }}
    >
      {children}
    </Link>
  );
}

function Arrow() {
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
