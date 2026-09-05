/**
 * OxyIntel §2 — three modules with status tags. Status framing locked from
 * the concept note: OxyTrack Deployed · OxyFlow MVP · RespiraAI Prototype.
 * Rows (not cards) per DESIGN-BRIEF so the platform reads as one system.
 */
const modules = [
  {
    name: "OxyTrack",
    verb: "Monitor",
    status: "Deployed",
    body: "Real-time tracking of oxygen cylinders through their lifecycle &mdash; filled, in use, empty. Inventory accountability, reduced losses, streamlined distribution.",
  },
  {
    name: "OxyFlow",
    verb: "Predict",
    status: "MVP",
    body: "Intelligent oxygen demand forecasting. Combines operational data, environmental variables, and machine learning to plan production and distribution before demand spikes.",
  },
  {
    name: "RespiraAI",
    verb: "Support",
    status: "Prototype",
    body: "AI-powered clinical support for nurses, biomedical technicians, and frontline workers. Respiratory case triage, device troubleshooting, and intelligent clinical guidance.",
  },
];

export function Modules() {
  return (
    <section className="chapter" aria-label="OxyIntel modules">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">The modules</p>
        <h2 className="max-w-3xl mb-16">
          One platform. Three focused capabilities.
        </h2>

        <div style={{ borderTop: "1px solid var(--color-keyline)" }}>
          {modules.map((m) => (
            <div
              key={m.name}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] gap-4 md:gap-16 py-10 md:py-14"
              style={{ borderBottom: "1px solid var(--color-keyline)" }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3
                    style={{
                      fontSize: "var(--text-h3)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      fontWeight: 700,
                    }}
                  >
                    {m.name}
                  </h3>
                  <StatusTag label={m.status} />
                </div>
                <p
                  className="eyebrow"
                  style={{ color: "var(--color-sky-deep)" }}
                >
                  {m.verb}
                </p>
              </div>
              <p
                style={{
                  color: "var(--color-fg)",
                  fontSize: "var(--text-p1)",
                  lineHeight: 1.55,
                  maxWidth: "40rem",
                }}
                dangerouslySetInnerHTML={{ __html: m.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusTag({ label }: { label: string }) {
  const colorByStatus: Record<string, string> = {
    Deployed: "var(--color-teal)",
    MVP: "var(--color-sky-deep)",
    Prototype: "var(--color-muted)",
  };
  const color = colorByStatus[label] ?? "var(--color-muted)";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.25rem 0.6rem",
        border: `1px solid ${color}`,
        borderRadius: "999px",
        color,
        fontFamily: "var(--font-display)",
        fontSize: "10px",
        letterSpacing: "0.12em",
        fontWeight: 600,
        textTransform: "uppercase",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: color,
        }}
      />
      {label}
    </span>
  );
}
