import { ClosingCTA } from "@/components/shared/ClosingCTA";

/**
 * OaaS §10 — Closing beat. Reuses the shared ClosingCTA with an OaaS-specific
 * verb ("Request an assessment" per the sitemap).
 */
export function OaasClosingCTA() {
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
      ctaLabel="Request an assessment"
      ctaHref="/contact"
    />
  );
}
