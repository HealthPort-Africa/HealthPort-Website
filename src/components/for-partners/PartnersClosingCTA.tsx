import { ClosingCTA } from "@/components/shared/ClosingCTA";

export function PartnersClosingCTA() {
  return (
    <ClosingCTA
      eyebrow="Partner with HealthPort"
      headline={
        <>
          Expand oxygen access.
          <br />
          Strengthen African healthcare systems.
        </>
      }
      ctaLabel="Start a partnership conversation"
      ctaHref="/contact"
    />
  );
}
