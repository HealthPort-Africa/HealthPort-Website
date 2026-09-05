import { VideoPlaceholder } from "@/components/shared/VideoPlaceholder";

/**
 * OaaS §3 — Full-width infrastructure services video. Per DESIGN-BRIEF this
 * is the marquee video moment on OaaS. Video is client-supplied; placeholder
 * ships at full container width until MP4 lands.
 */
export function InfrastructureVideo() {
  return (
    <section
      className="chapter"
      aria-label="Infrastructure services"
      style={{ paddingBlock: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-6">Infrastructure in the field</p>
        <p className="lead mb-10 max-w-2xl">
          A look at HealthPort infrastructure &mdash; cylinders, reticulation,
          delivery, and the teams that keep it running.
        </p>
        <VideoPlaceholder
          label="Infrastructure services video"
          note="Client-supplied MP4 will replace this placeholder."
        />
      </div>
    </section>
  );
}
