"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollScale — wraps children in a container that scales up as the element
 * scrolls through the viewport (starts small, grows to full/beyond as it
 * enters, then holds). Same mechanic as HeroVideo's expand-sideways effect,
 * generalised for reuse. rAF-throttled, GPU transform, respects
 * prefers-reduced-motion.
 *
 * Defaults: 0.85 → 1.15 scale, `center top` origin so growth feels like a
 * widening frame rather than a magnifying lens.
 */
export function ScrollScale({
  children,
  from = 0.85,
  to = 1.15,
  origin = "center top",
  className,
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  origin?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      let p = 0;
      if (rect.bottom > 0 && rect.top < winH) {
        p = Math.min(1, Math.max(0, (winH - rect.top) / (winH * 0.9)));
      } else if (rect.top < 0) {
        p = 1;
      }
      const scale = from + p * (to - from);
      el.style.transform = `scale(${scale})`;

      // Reserve layout space for the visual overflow so following content
      // doesn't overlap the scaled element. offsetHeight is the natural
      // (unscaled) box height, so extra space = (scale - 1) * naturalHeight.
      // With `center top` origin all extra goes below; with `center` it
      // splits above and below.
      const natural = el.offsetHeight;
      const extra = Math.max(0, (scale - 1) * natural);
      if (origin.includes("top")) {
        el.style.marginBottom = `${extra}px`;
      } else if (origin.includes("bottom")) {
        el.style.marginTop = `${extra}px`;
      } else {
        el.style.marginTop = `${extra / 2}px`;
        el.style.marginBottom = `${extra / 2}px`;
      }
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [from, to, origin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformOrigin: origin,
        willChange: "transform",
        transition: "transform 40ms linear",
      }}
    >
      {children}
    </div>
  );
}
