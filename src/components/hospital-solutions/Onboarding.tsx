import { Journey, type JourneyStep } from "@/components/shared/Journey";

/**
 * Hospital Solutions §9 — Onboarding: from first call to first delivery.
 * Reuses the shared Journey component with a hospital-specific narrative.
 */
const steps: JourneyStep[] = [
  {
    n: "01",
    title: "First conversation",
    body: "We understand your facility, current supply arrangements, and where oxygen breaks down for you today.",
  },
  {
    n: "02",
    title: "On-site assessment",
    body: "Our engineers walk your wards, storage, and reticulation. We map demand against capacity.",
  },
  {
    n: "03",
    title: "Solution + agreement",
    body: "We propose infrastructure and service terms tuned to your operations. Usage-based commercials.",
  },
  {
    n: "04",
    title: "First delivery",
    body: "Cylinders arrive, monitoring is enabled, clinicians are trained, the partnership begins.",
  },
];

export function Onboarding() {
  return (
    <Journey
      eyebrow="Onboarding"
      headline="From first call to first delivery."
      steps={steps}
      outcome={{
        eyebrow: "The outcome",
        text: "A hospital that stops worrying about oxygen.",
      }}
    />
  );
}
