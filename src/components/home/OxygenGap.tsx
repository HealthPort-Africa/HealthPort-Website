/**
 * OxygenGap — the "problem" chapter, restrained.
 * Second Draft: prose left, Tea Green fact panel right. Both sides bleed —
 * a photo of an oxygen cylinder valve anchored to the LEFT of the viewport
 * clipped by the section bottom; the fact panel extends past the RIGHT edge
 * of the container so it feels tucked to the viewport wall.
 *
 * Motion: right-column fact items fade-up-and-settle with an 80 ms stagger
 * via [[StatReveal]] client leaf. Section itself fades in via SectionReveal.
 *
 * Facts marked `FACT NEEDED` until a citable source is provided.
 */
import Image from "next/image";
import oxygenValve from "../../../public/images/oxygen-valve.png";

type Fact = {
  headline: string;
  body: React.ReactNode;
};

const facts: Fact[] = [
  {
    headline: "1 in 5",
    body: (
      <>
        Hospital departments{" "}
        <strong className="font-semibold">can&rsquo;t see</strong> how much
        oxygen they have left until it runs out.
      </>
    ),
  },
  {
    headline: "Hours",
    body: (
      <>
        wait time between running low and getting a refill during{" "}
        <strong className="font-semibold">peak demand.</strong>
      </>
    ),
  },
  {
    headline: "Everyday",
    body: (
      <>
        a hospital somewhere in the region{" "}
        <strong className="font-semibold">rations care</strong> because oxygen
        is unavailable.
      </>
    ),
  },
];

export function OxygenGap() {
  return (
    <section
      className="w-full relative overflow-hidden"
      aria-label="The oxygen access gap"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      {/* Content — max-width, centred */}
      <div className="container-page relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: prose. Sits at the top of the column against the
              container edge — the tank is at the bottom of the section, so
              they don't collide vertically. */}
          <div>
            <h2 className="mb-6">
              The oxygen access{" "}
              <span style={{ color: "var(--color-coral)" }}>gap.</span>
            </h2>
            <p className="lead">
              Across Nigerian hospitals, the gap isn&rsquo;t supply &mdash;{" "}
              <span style={{ color: "var(--color-violet)" }}>
                it&rsquo;s delivery, maintenance, and visibility.
              </span>
            </p>
          </div>

          {/* Right: Tea Green fact panel. On md+ its right edge is pinned to
              the viewport wall — negative margin scales with viewport so the
              panel always bleeds off the container padding AND any gutter
              between the container and the viewport edge. */}
          <aside
            data-stat-group
            className="p-8 md:p-10 lg:p-12 flex flex-col gap-8"
            style={{
              background: "var(--color-teagreen)",
              color: "var(--color-ink)",
              borderTopLeftRadius: "var(--radius-card)",
              borderBottomLeftRadius: "var(--radius-card)",
              marginRight:
                "calc(-1 * (max(0px, (100vw - var(--container-max)) / 2) + var(--container-pad-x)))",
            }}
          >
            {facts.map((f, i) => (
              <div
                key={f.headline}
                data-stat-reveal
                className="flex flex-col gap-3"
                style={
                  i > 0
                    ? {
                        paddingTop: "1.75rem",
                        borderTop: "1px solid rgba(0,19,22,0.12)",
                      }
                    : undefined
                }
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    lineHeight: "var(--text-h3--line-height)",
                    letterSpacing: "var(--text-h3--letter-spacing)",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                  }}
                >
                  {f.headline}
                </p>
                <p
                  style={{
                    fontSize: "var(--text-p2)",
                    lineHeight: 1.55,
                    color: "var(--color-ink)",
                    maxWidth: "38ch",
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
            {/* FACT NEEDED: verify these framing numbers with a citable source. */}
          </aside>
        </div>
      </div>

      {/* Bleed image — anchored to viewport LEFT, expanded to fill the
          left ~half of the section. Sits at the bottom; text sits at the
          top of the column so they don't visually collide. */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "clamp(440px, 52vw, 740px)",
          transform: "translateY(-2%)",
          zIndex: 0,
        }}
      >
        <Image
          src={oxygenValve}
          alt=""
          sizes="(min-width: 1280px) 740px, (min-width: 768px) 52vw, 0px"
          placeholder="blur"
          priority={false}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

    </section>
  );
}
