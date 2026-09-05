"use client";

import { useEffect, useRef } from "react";

/**
 * OxygenThread — the signature ambient element. A 2px Oceanic Teal SVG line
 * on the left rail that draws in as the user scrolls. Represents piped
 * oxygen (reticulation). Uses SVG stroke-dashoffset with `pathLength="1"`
 * tied to scroll progress via a native scroll listener (rAF-throttled).
 *
 * `scrub` is banned across the site — the thread is the ONE exception per
 * CLAUDE.md. Under prefers-reduced-motion the thread renders full-length
 * statically (no scroll binding).
 *
 * Wrapper centers with the max-w-[75rem] content container so the thread
 * follows the content column on wide viewports.
 */
export function OxygenThread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      line.style.strokeDashoffset = "0";
      return;
    }

    let raf = 0;
    let queued = false;

    const compute = () => {
      queued = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        line.style.strokeDashoffset = "0";
        return;
      }
      const progress = Math.max(0, Math.min(1, window.scrollY / scrollable));
      line.style.strokeDashoffset = String(1 - progress);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0"
    >
      <div
        className="mx-auto relative h-full"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <svg
          className="absolute top-0"
          style={{
            left: "var(--thread-offset-left)",
            width: "2px",
            height: "100%",
          }}
          preserveAspectRatio="none"
          viewBox="0 0 2 100"
        >
          <line
            ref={lineRef}
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="var(--color-thread)"
            strokeWidth="2"
            pathLength={1}
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 1,
            }}
          />
        </svg>
      </div>
    </div>
  );
}
