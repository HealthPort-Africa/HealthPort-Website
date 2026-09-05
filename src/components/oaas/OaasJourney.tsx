import { Journey, type JourneyStep } from "@/components/shared/Journey";

/**
 * OaaS §6 — Journey ending on the outcome.
 * Four process steps + a Teal outcome plate per client feedback: Discover →
 * Design → Deploy → Optimize → Never worry about oxygen again.
 */
const steps: JourneyStep[] = [
  {
    n: "01",
    title: "Discover",
    body: "We assess your facility&rsquo;s current oxygen infrastructure, demand, and clinical workflow.",
  },
  {
    n: "02",
    title: "Design",
    body: "We shape a custom oxygen infrastructure plan tailored to your realities.",
  },
  {
    n: "03",
    title: "Deploy",
    body: "Cylinders, reticulation, and supporting equipment are installed and integrated.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Continuous monitoring and optimisation improve efficiency as usage data accumulates.",
  },
];

export function OaasJourney() {
  return (
    <Journey
      eyebrow="How OaaS works"
      headline="Four steps to a hospital that never worries about oxygen."
      steps={steps}
      outcome={{
        eyebrow: "The outcome",
        text: "Never worry about oxygen again.",
      }}
    />
  );
}
