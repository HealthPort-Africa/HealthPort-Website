/**
 * OxyIntel §5 — brief ML/LLM approach. Kept short and honest per the
 * concept note: hybrid forecasting, LLM-powered clinical guidance, learning
 * from real operational data.
 */
export function MLApproach() {
  return (
    <section
      className="chapter"
      aria-label="ML and LLM approach"
      style={{ paddingBlock: "clamp(4rem, 3rem + 6vw, 8rem)" }}
    >
      <div className="chapter-inner grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-10 md:gap-16 items-start">
        <div>
          <p className="eyebrow mb-4">Built on intelligence</p>
          <h2 style={{ fontSize: "var(--text-h3)", lineHeight: 1.15 }}>
            Hybrid ML + LLMs.
          </h2>
        </div>
        <div>
          <p className="lead mb-6">
            OxyIntel combines classical statistical models with machine
            learning and large language models. Forecasts run in parallel,
            compared against ground truth, and improve continuously as more
            operational data accumulates.
          </p>
          <p style={{ color: "var(--color-muted)" }}>
            External data sources &mdash; environmental variables, connected
            sensors, clinical patterns &mdash; feed the system as it evolves.
          </p>
        </div>
      </div>
    </section>
  );
}
