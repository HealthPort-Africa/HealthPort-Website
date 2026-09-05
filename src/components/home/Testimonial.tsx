/**
 * §9 — Hospital testimonial.
 * Fruitful/Vercel-style split card: real testimonial video on the left,
 * pulled quote from the video + attribution on the right. Click the video
 * on the left to play the full 2:50 story with sound.
 *
 * Attribution stays placeholder until Sage sends real name + hospital.
 */
import { TestimonialVideo } from "@/components/home/TestimonialVideo";

export function Testimonial() {
  return (
    <section className="chapter" aria-label="Hospital testimonial">
      <div className="flex flex-col items-center text-center mb-14 md:mb-20">
        <p
          className="eyebrow mb-6"
          style={{ color: "var(--color-violet)" }}
        >
          In their words
        </p>
        <h2 className="max-w-3xl" style={{ textWrap: "balance" }}>
          What one hospital said.
        </h2>
      </div>

      {/* Split card — image left (4:5 portrait), quote right. Stacks on mobile. */}
      <figure
        className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-8 md:gap-12 items-stretch"
        style={{ margin: 0 }}
      >
        {/* VIDEO — click to play the full testimonial (2:50) with sound. */}
        <TestimonialVideo />

        {/* QUOTE + ATTRIBUTION — right column. Uses a soft ambient wash so the
            card feels premium without heavy borders. */}
        <div
          className="relative flex flex-col justify-center"
          style={{
            borderRadius: "24px",
            padding: "clamp(28px, 4vw, 56px)",
            background: [
              "radial-gradient(ellipse 110% 80% at 15% 0%, rgba(204, 238, 170, 0.45), transparent 70%)",
              "radial-gradient(ellipse 90% 70% at 90% 100%, rgba(93, 183, 222, 0.22), transparent 70%)",
            ].join(", "),
          }}
        >
          {/* Large decorative opening quote mark */}
          <span
            aria-hidden
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 8vw, 120px)",
              lineHeight: 0.6,
              fontWeight: 700,
              color: "var(--color-violet)",
              marginBottom: "clamp(12px, 1.5vw, 20px)",
              userSelect: "none",
            }}
          >
            &ldquo;
          </span>

          <blockquote style={{ margin: 0 }}>
            {/* Real quote pulled directly from the video. */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 2.2vw, 28px)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                lineHeight: 1.3,
                color: "var(--color-heading)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              I get a call saying that there was no oxygen in the emergency
              room.
            </p>

            <figcaption
              className="mt-8 flex flex-col gap-1"
              style={{ color: "var(--color-muted)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--color-fg)",
                }}
              >
                [ Speaker name pending ]
              </span>
              <span className="eyebrow" style={{ color: "var(--color-muted)" }}>
                Hospital Director &middot; Lagos, Nigeria
              </span>
            </figcaption>
          </blockquote>
        </div>
      </figure>
    </section>
  );
}
