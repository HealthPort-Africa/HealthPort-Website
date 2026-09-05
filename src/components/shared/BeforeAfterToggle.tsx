"use client";

import { useState } from "react";
import type { ColumnData } from "./BeforeAfter";

/**
 * Toggle variant of BeforeAfter — used on Hospital Solutions (Why Hospitals
 * Choose HealthPort) per DESIGN-BRIEF's list of allowed animations. A
 * pill toggle at the top; content below cross-fades between the two
 * columns. Default view is "after" — the transformation is the message.
 */
export function BeforeAfterToggle({
  eyebrow,
  headline,
  left,
  right,
}: {
  eyebrow: string;
  headline: string;
  left: ColumnData;
  right: ColumnData;
}) {
  const [view, setView] = useState<"left" | "right">("right");
  const data = view === "left" ? left : right;
  const muted = view === "left";

  return (
    <section className="chapter" aria-label={eyebrow}>
      <div className="chapter-inner">
        <p className="eyebrow mb-8">{eyebrow}</p>
        <h2
          className="max-w-4xl mb-12"
          dangerouslySetInnerHTML={{ __html: headline }}
        />

        <div className="flex flex-col gap-10">
          {/* Toggle */}
          <div
            role="radiogroup"
            aria-label="Before or after HealthPort"
            className="inline-flex items-center self-start p-1"
            style={{
              border: "1px solid var(--color-keyline)",
              borderRadius: "999px",
              background: "var(--color-parchment)",
            }}
          >
            <ToggleButton
              label="Before HealthPort"
              active={view === "left"}
              onClick={() => setView("left")}
            />
            <ToggleButton
              label="After HealthPort"
              active={view === "right"}
              onClick={() => setView("right")}
            />
          </div>

          {/* Content */}
          <div
            key={view}
            className="animate-fade-in"
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              borderTop: "1px solid var(--color-keyline)",
              borderBottom: "1px solid var(--color-keyline)",
              minHeight: "22rem",
            }}
          >
            <p
              className="eyebrow mb-6"
              style={muted ? { color: "var(--color-muted)" } : undefined}
            >
              {data.eyebrow}
            </p>
            <ul className="list-none flex flex-col gap-4 max-w-3xl">
              {data.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3"
                  style={{
                    fontSize: "var(--text-p1)",
                    color: muted ? "var(--color-muted)" : "var(--color-fg)",
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      background: muted
                        ? "var(--color-muted)"
                        : "var(--color-teal)",
                      flexShrink: 0,
                      transform: "translateY(-2px)",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 260ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in { animation: none; }
        }
      `}</style>
    </section>
  );
}

function ToggleButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className="transition-colors"
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "999px",
        fontFamily: "var(--font-display)",
        fontSize: "13px",
        letterSpacing: "0.03em",
        fontWeight: 600,
        background: active ? "var(--color-violet)" : "transparent",
        color: active ? "var(--color-parchment)" : "var(--color-fg)",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
