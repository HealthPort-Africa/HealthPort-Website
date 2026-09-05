"use client";

import { useEffect } from "react";

/**
 * ImageReveal — mounted once in the root layout. Watches every element with
 * `[data-image-reveal]` and fades it in with a subtle scale (0.98 → 1) on
 * first entry into the viewport. Respects prefers-reduced-motion.
 *
 * Extension of SectionReveal, scoped to image containers so photos feel
 * intentional rather than popping in.
 */
export function ImageReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-image-reveal]")
    );
    if (els.length === 0) return;

    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "scale(0.98)";
      el.style.transition =
        "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)";
      el.style.willChange = "opacity, transform";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "scale(1)";
          window.setTimeout(() => {
            el.style.willChange = "";
          }, 800);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
