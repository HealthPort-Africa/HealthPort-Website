import { ClosingCTA } from "@/components/shared/ClosingCTA";

export function OxyIntelClosingCTA() {
  return (
    <ClosingCTA
      eyebrow="Talk to us about OxyIntel"
      headline={
        <>
          Reliable oxygen infrastructure
          <br />
          starts with the data behind it.
        </>
      }
      ctaLabel="Talk to us about OxyIntel"
      ctaHref="/contact"
    />
  );
}
