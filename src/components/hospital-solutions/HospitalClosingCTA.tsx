import { ClosingCTA } from "@/components/shared/ClosingCTA";

export function HospitalClosingCTA() {
  return (
    <ClosingCTA
      eyebrow="The OaaS Promise"
      headline={
        <>
          You focus on patient care.
          <br />
          We make sure oxygen is always available.
        </>
      }
      ctaLabel="Book an assessment"
      ctaHref="/contact"
    />
  );
}
