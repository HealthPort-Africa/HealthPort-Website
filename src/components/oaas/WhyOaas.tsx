import { BeforeAfter } from "@/components/shared/BeforeAfter";

/**
 * OaaS §2 — Why Oxygen as a Service? Traditional oxygen procurement vs
 * HealthPort OaaS. Content lifted verbatim from the client's feedback PDF.
 */
const traditional = {
  eyebrow: "Traditional model",
  items: [
    "Vendor-owned cylinders",
    "Inconsistent, vendor-driven maintenance",
    "Hospital manages inventory internally",
    "Coordinating multiple suppliers",
    "Demand predicted manually",
    "Emergency purchases to plug shortages",
  ],
};

const oaas = {
  eyebrow: "HealthPort OaaS",
  items: [
    "HealthPort supplies and owns the cylinders",
    "Scheduled, proactive maintenance",
    "HealthPort monitors usage",
    "HealthPort manages replenishment",
    "HealthPort optimises distribution",
    "One monthly invoice for actual consumption",
  ],
};

export function WhyOaas() {
  return (
    <BeforeAfter
      eyebrow="Why Oxygen as a Service?"
      headline="A different relationship with oxygen &mdash; hospitals stop procuring, we start delivering."
      left={traditional}
      right={oaas}
    />
  );
}
