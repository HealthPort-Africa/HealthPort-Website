/**
 * OaaS — Process Teaser.
 * Client-confirmed direction: teaser, not the full sales process. Walks the
 * hospital through the process from THEIR point of view. Reference mechanic:
 * famasi.me — stage cards on the left, an animated panel on the right that
 * changes to match the active stage as the user scrolls.
 *
 * Structure: four stages, scroll-synced. Active card fills Violet; inactive
 * cards sit on Parchment with a keyline. SVG panels loop subtly and are
 * designed so a photograph can later replace or sit behind them.
 *
 * Motion: CSS position:sticky for the right panel (no pin, no scroll-jack).
 * Active-stage swap and panel loop are wired in the motion pass.
 */
import Link from "next/link";
import { ProcessTeaserSync } from "@/components/motion/ProcessTeaserSync";

const stages = [
  {
    key: "assess",
    n: "01",
    title: "We assess your facility",
    body: "Wards, bed spaces, existing infrastructure, current usage, current supply. We map what's really happening before we recommend anything.",
  },
  {
    key: "design",
    n: "02",
    title: "We design around what you have",
    body: "On-site plant or managed cylinder supply — whichever fits your facility, budget, and demand curve. Not a template.",
  },
  {
    key: "install",
    n: "03",
    title: "We install and take over",
    body: "Deployment, reticulation to the bedside, and clinician training. From the day we hand over, oxygen availability is our problem, not yours.",
  },
  {
    key: "stay",
    n: "04",
    title: "We stay",
    body: "Monitoring, scheduled refills, one monthly invoice for what you actually used. No expediting fees. No surprise stockouts.",
  },
];

export function ProcessTeaser() {
  return (
    <section
      className="w-full"
      aria-label="How the process works"
      data-process-root
    >
      <div className="chapter">
        <div className="chapter-inner">
          <p className="eyebrow">The process</p>
          <h2 className="mt-6 max-w-3xl">A short walk through how we work with you.</h2>
          <p className="lead mt-6">
            Enough to see how it fits your hospital. For the full picture, book an
            assessment.
          </p>
        </div>

        <div className="chapter-inner mt-16 md:mt-24">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16">
            {/* Stage cards */}
            <ol className="flex flex-col gap-4">
              {stages.map((s, i) => (
                <li
                  key={s.key}
                  data-process-stage={s.key}
                  data-active={i === 0 ? "true" : undefined}
                  className="group transition-colors"
                  style={{
                    background:
                      i === 0 ? "var(--color-violet)" : "var(--color-surface)",
                    color:
                      i === 0 ? "var(--color-parchment)" : "var(--color-fg)",
                    borderRadius: "var(--radius-card)",
                    border:
                      i === 0
                        ? "1px solid transparent"
                        : "1px solid var(--color-keyline)",
                    padding: "1.75rem 1.75rem",
                    transition: "background 220ms var(--ease-out-brand), color 220ms var(--ease-out-brand)",
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="eyebrow"
                      style={{
                        color: i === 0 ? "rgba(242,239,234,0.75)" : "var(--color-muted)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {s.n}
                    </span>
                    <h3
                      style={{
                        color: i === 0 ? "var(--color-parchment)" : "var(--color-heading)",
                        fontSize: "var(--text-h4)",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3"
                    style={{
                      color: i === 0 ? "rgba(242,239,234,0.85)" : "var(--color-muted)",
                      maxWidth: "42ch",
                    }}
                  >
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>

            {/* Sticky visual panel */}
            <div className="hidden md:block">
              <div
                className="sticky top-24"
                style={{
                  aspectRatio: "4 / 5",
                  background: "var(--color-surface)",
                  borderRadius: "var(--radius-media)",
                  border: "1px solid var(--color-keyline)",
                  overflow: "hidden",
                }}
                data-process-panel
              >
                {stages.map((s, i) => (
                  <ProcessPanel
                    key={s.key}
                    stage={s.key}
                    visible={i === 0}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book an assessment
              <ArrowRight />
            </Link>
            <Link href="/hospital-solutions" className="btn-secondary">
              See hospital solutions
            </Link>
          </div>
        </div>
      </div>
      <ProcessTeaserSync />
    </section>
  );
}

/**
 * Per-stage SVG panels. Built from brand tokens so they can be replaced with
 * (or backed by) real HealthPort photography when it lands.
 */
function ProcessPanel({ stage, visible }: { stage: string; visible: boolean }) {
  return (
    <div
      data-process-panel-stage={stage}
      style={{
        position: "absolute",
        inset: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 260ms var(--ease-out-brand)",
      }}
      aria-hidden="true"
    >
      {stage === "assess" && <AssessPanel />}
      {stage === "design" && <DesignPanel />}
      {stage === "install" && <InstallPanel />}
      {stage === "stay" && <StayPanel />}
    </div>
  );
}

function AssessPanel() {
  const items = ["Wards & bed spaces", "Existing infrastructure", "Current usage", "Current supply"];
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: "2.5rem" }}>
      <span className="eyebrow" style={{ color: "var(--color-teal)" }}>Assessment checklist</span>
      <ul className="mt-6 flex flex-col gap-3">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3">
            <span
              style={{
                width: 18, height: 18, borderRadius: 4,
                border: "1.5px solid var(--color-teal)",
                background: "var(--color-teal-tint)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DesignPanel() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full" role="img">
      <path d="M160 40 L160 180" stroke="var(--color-teal)" strokeWidth="2" fill="none" />
      <path d="M160 180 Q 160 220 100 240 L 100 340" stroke="var(--color-teal)" strokeWidth="2" fill="none" />
      <path d="M160 180 Q 160 220 220 240 L 220 340" stroke="var(--color-teal)" strokeWidth="2" fill="none" />
      <circle cx="160" cy="40" r="6" fill="var(--color-violet)" />
      <circle cx="100" cy="340" r="6" fill="var(--color-teal)" />
      <circle cx="220" cy="340" r="6" fill="var(--color-teal)" />
      <text x="100" y="365" textAnchor="middle" fontFamily="var(--font-display)" fontSize="12" fontWeight="600" fill="var(--color-fg)">On-site plant</text>
      <text x="220" y="365" textAnchor="middle" fontFamily="var(--font-display)" fontSize="12" fontWeight="600" fill="var(--color-fg)">Managed cylinders</text>
    </svg>
  );
}

function InstallPanel() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full" role="img">
      <rect x="60" y="60" width="200" height="280" rx="12" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" />
      <line x1="160" y1="60" x2="160" y2="340" stroke="var(--color-teal)" strokeWidth="1.5" strokeDasharray="4 4" />
      {[110, 170, 230, 290].map((y) => (
        <g key={y}>
          <circle cx="160" cy={y} r="5" fill="var(--color-violet)" />
          <line x1="160" y1={y} x2="220" y2={y} stroke="var(--color-teal)" strokeWidth="1.5" />
          <rect x="220" y={y - 8} width="20" height="16" fill="var(--color-teal-tint)" stroke="var(--color-teal)" strokeWidth="1" rx="2" />
        </g>
      ))}
    </svg>
  );
}

function StayPanel() {
  return (
    <svg viewBox="0 0 320 400" className="w-full h-full" role="img">
      <circle cx="160" cy="200" r="120" fill="none" stroke="var(--color-teal)" strokeWidth="1.5" />
      {["Depot", "Hospital", "Ward"].map((label, i) => {
        const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(angle) * 120;
        const y = 200 + Math.sin(angle) * 120;
        return (
          <g key={label}>
            <circle cx={x} cy={y} r="8" fill="var(--color-violet)" />
            <text x={x} y={y + 28} textAnchor="middle" fontFamily="var(--font-display)" fontSize="12" fontWeight="600" fill="var(--color-fg)">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
