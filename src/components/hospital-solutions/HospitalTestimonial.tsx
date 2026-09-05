import { VideoPlaceholder } from "@/components/shared/VideoPlaceholder";

/**
 * Hospital Solutions §8 — Testimonial video reused from Home. Video and
 * quote are client-supplied. Layout keeps video + quote side by side on
 * desktop, stacked on mobile.
 */
export function HospitalTestimonial() {
  return (
    <section className="chapter" aria-label="Testimonial">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Hear it from a hospital</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <VideoPlaceholder
              label="Hospital testimonial video"
              note="Client-supplied MP4 will replace this placeholder."
            />
          </div>
          <blockquote>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3)",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                fontWeight: 600,
                color: "var(--color-heading)",
                textWrap: "balance",
              }}
            >
              &ldquo;Quote pending &mdash; hospital testimonial and speaker
              attribution to be supplied by the client.&rdquo;
            </p>
            <footer
              className="mt-6"
              style={{ color: "var(--color-muted)" }}
            >
              <span className="eyebrow">Speaker &middot; Hospital name</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
