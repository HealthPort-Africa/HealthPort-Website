import { BeforeAfterToggle } from "@/components/shared/BeforeAfterToggle";

/**
 * Hospital Solutions §3 — Why Hospitals Choose HealthPort. Uses the toggle
 * variant per DESIGN-BRIEF ("Before/after comparison toggle on Hospital
 * Solutions"). Purity and clinician training added as trust signals per
 * client feedback.
 */
const before = {
  eyebrow: "The typical day, today",
  items: [
    "Staff chasing multiple suppliers",
    "Emergency refills at unpredictable cost",
    "Cylinders lost between wards",
    "Oxygen wastage nobody can quantify",
    "Purity varies by delivery",
    "Training happens ad-hoc, if at all",
  ],
};

const after = {
  eyebrow: "The typical day, with HealthPort",
  items: [
    "One partner. One monthly invoice.",
    "Reliable supply, tracked in real time",
    "Cylinders followed through their lifecycle",
    "Wastage measured and reduced",
    "Medical-grade purity to a stated standard",
    "Clinician training built into the service",
  ],
};

export function WhyChooseHealthPort() {
  return (
    <BeforeAfterToggle
      eyebrow="Why hospitals choose HealthPort"
      headline="Reliability, purity, and training &mdash; not just supply."
      left={before}
      right={after}
    />
  );
}
