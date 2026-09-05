import { Checklist } from "@/components/shared/Checklist";

const signs = [
  "Frequent oxygen shortages disrupting clinical care",
  "Growing oxygen demand outpacing current supply capacity",
  "Multiple suppliers delivering inconsistent service",
  "Oxygen wastage from poor inventory visibility",
  "Sufficient supply, but distribution optimisation is a challenge",
  "A need for predictable monthly operating costs",
  "A preference for a long-term infrastructure partner over a transactional supplier",
];

export function Eligibility() {
  return (
    <section className="chapter" aria-label="Is OaaS right for your facility">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Is OaaS right for your facility?</p>
        <h2 className="max-w-3xl mb-12">
          If any of these sound familiar, OaaS is designed for you.
        </h2>
        <Checklist items={signs} />
      </div>
    </section>
  );
}
