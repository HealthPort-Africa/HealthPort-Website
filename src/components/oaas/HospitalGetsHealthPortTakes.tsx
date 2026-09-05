import { BeforeAfter } from "@/components/shared/BeforeAfter";

/**
 * OaaS §7 — What the hospital gets vs what HealthPort takes on.
 * Both columns are positive commitments, so neither reads muted
 * (leftMuted={false}).
 */
const hospitalGets = {
  eyebrow: "What the hospital gets",
  items: [
    "Reliable oxygen availability",
    "Managed oxygen infrastructure",
    "Real-time visibility into usage and inventory",
    "Predictable monthly billing",
    "Optimised distribution across departments",
    "Better patient outcomes through continuous supply",
  ],
};

const healthPortTakes = {
  eyebrow: "What HealthPort takes on",
  items: [
    "Cylinder supply, ownership, and maintenance",
    "Scheduled replenishment and delivery",
    "Usage monitoring and reporting",
    "Distribution optimisation and wastage reduction",
    "Clinician training and operational support",
    "Compliance with regulatory and safety standards",
  ],
};

export function HospitalGetsHealthPortTakes() {
  return (
    <BeforeAfter
      eyebrow="A clear division of work"
      headline="You get reliable oxygen. We take on the operational burden."
      left={hospitalGets}
      right={healthPortTakes}
      leftMuted={false}
    />
  );
}
