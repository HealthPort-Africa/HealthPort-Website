/**
 * §7 — Why hospitals choose HealthPort.
 * Single-column list of six transformations, each animated on scroll:
 * row fades up → coral strike-through draws across the pain → outcome side
 * fades in with its check. Draws the eye down the list; each row feels like
 * a small "cross this off" moment.
 *
 * Client component: IntersectionObserver drives per-row reveal. Respects
 * prefers-reduced-motion (renders instantly). Motion sits inside the "fade
 * up on reveal" bucket already allowed by CLAUDE.md.
 */
"use client";

import { useEffect, useRef, useState } from "react";

type Transition = { before: string; after: string };

const transitions: Transition[] = [
  {
    before: "Staff constantly chasing oxygen suppliers",
    after: "Reliable oxygen availability",
  },
  {
    before: "Frequent stock shortages",
    after: "Managed oxygen infrastructure",
  },
  {
    before: "Poor inventory visibility",
    after: "Real-time visibility",
  },
  {
    before: "Oxygen wastage",
    after: "Optimised distribution",
  },
  {
    before: "Emergency refills",
    after: "Predictable monthly billing",
  },
  {
    before: "Unpredictable operating costs",
    after: "Better patient outcomes",
  },
];

export function BeforeAfter() {
  const [allRevealed, setAllRevealed] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setAllRevealed(true);
      return;
    }

    // Single observer on the list container. When list enters view, reveal
    // all rows with per-index delay for the cascade. When it leaves view,
    // reset so the cascade replays next time. Observer stays live.
    const io = new IntersectionObserver(
      ([entry]) => {
        setAllRevealed(entry.isIntersecting && entry.intersectionRatio > 0);
      },
      { rootMargin: "0px 0px -12% 0px", threshold: [0, 0.15, 0.3] }
    );
    io.observe(list);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="w-full"
      aria-label="Why hospitals choose HealthPort"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="container-page">
        {/* Centered intro — parallax on the whole block so children stay
            together (accent line + eyebrow + h2 + sub-line + accent line). */}
        <div
          className="flex flex-col items-center text-center"
          data-parallax="-0.1"
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: "32px",
              height: "2px",
              background: "var(--color-teal)",
              marginBottom: "24px",
            }}
          />
          <p
            className="eyebrow mb-5"
            style={{ color: "var(--color-violet)" }}
          >
            Why hospitals choose HealthPort
          </p>
          <h2 className="max-w-3xl mb-4" style={{ textWrap: "balance" }}>
            Better{" "}
            <span style={{ color: "var(--color-violet)" }}>outcomes</span>{" "}
            matter more than infrastructure.
          </h2>
          <p
            className="mb-6 max-w-xl"
            style={{
              color: "var(--color-fg)",
              fontSize: "var(--text-p2)",
              lineHeight: 1.5,
            }}
          >
            Six things a hospital administrator never thinks about again.
          </p>
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: "32px",
              height: "2px",
              background: "var(--color-coral)",
              marginBottom: "56px",
            }}
          />
        </div>

        {/* Transformation rows */}
        <ul
          ref={listRef}
          className="list-none max-w-4xl mx-auto"
        >
          {transitions.map((t, i) => {
            const isRevealed = allRevealed;
            // Per-row cascade: base delay + 110ms per index.
            const rowDelay = i * 110;
            const strikeDelay = rowDelay + 220;
            const afterDelay = rowDelay + 420;
            return (
              <li
                key={t.before}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-8"
                style={{
                  padding: "22px 0",
                  borderTop:
                    i === 0 ? "1px solid var(--color-keyline)" : "none",
                  borderBottom: "1px solid var(--color-keyline)",
                  opacity: isRevealed ? 1 : 0,
                  transform: isRevealed
                    ? "translateY(0)"
                    : "translateY(14px)",
                  transition: `opacity 500ms cubic-bezier(0.22,1,0.36,1) ${rowDelay}ms, transform 500ms cubic-bezier(0.22,1,0.36,1) ${rowDelay}ms`,
                }}
              >
                {/* Before — coral × icon, strike-through draws in */}
                <div className="flex items-center gap-3 min-w-0">
                  <IconX revealed={isRevealed} delay={strikeDelay - 100} />
                  <span
                    style={{
                      display: "inline",
                      fontSize: "var(--text-p2)",
                      color: "var(--color-muted)",
                      lineHeight: 1.4,
                      // Animated strike-through: coral line drawn across the
                      // text via background-image sizing from 0% → 100%.
                      backgroundImage:
                        "linear-gradient(var(--color-coral), var(--color-coral))",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "0 58%",
                      backgroundSize: isRevealed
                        ? "100% 1.5px"
                        : "0% 1.5px",
                      transition: `background-size 560ms cubic-bezier(0.22,1,0.36,1) ${strikeDelay}ms`,
                    }}
                  >
                    {t.before}
                  </span>
                </div>

                {/* Arrow — draws in with the outcome */}
                <ArrowRight revealed={isRevealed} delay={afterDelay - 100} />

                {/* After — fades in after the strike */}
                <div
                  className="flex items-center gap-3 min-w-0"
                  style={{
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    transition: `opacity 460ms cubic-bezier(0.22,1,0.36,1) ${afterDelay}ms, transform 460ms cubic-bezier(0.22,1,0.36,1) ${afterDelay}ms`,
                  }}
                >
                  <IconCheck />
                  <span
                    style={{
                      fontSize: "var(--text-p2)",
                      color: "var(--color-fg)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {t.after}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function IconX({ revealed, delay = 0 }: { revealed: boolean; delay?: number }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      style={{
        flexShrink: 0,
        color: "var(--color-coral)",
        opacity: revealed ? 1 : 0.4,
        transition: `opacity 380ms ease-out ${delay}ms`,
      }}
    >
      <path
        d="M4 4l10 10M14 4l-10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0, color: "var(--color-teal)" }}
    >
      <path
        d="M3.5 9.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight({ revealed, delay = 0 }: { revealed: boolean; delay?: number }) {
  return (
    <span
      aria-hidden
      className="hidden md:flex items-center justify-center"
      style={{
        color: "var(--color-muted)",
        opacity: revealed ? 0.7 : 0,
        transform: revealed ? "translateX(0)" : "translateX(-6px)",
        transition: `opacity 380ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 380ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
        <path
          d="M1 6h19M15 1l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
