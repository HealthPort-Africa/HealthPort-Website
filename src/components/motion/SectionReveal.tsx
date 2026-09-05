"use client";

import { useEffect } from "react";

/**
 * SectionReveal — mounted once in the root layout. Watches every
 * `main > section` and fades it up 12px on first entry into the viewport
 * (once). Respects `prefers-reduced-motion: reduce` — under that setting
 * nothing is animated and content renders in its final position.
 *
 * Zero-dependency: uses IntersectionObserver + inline style transitions.
 * Sections already in the initial viewport stay visible immediately (no
 * flash-of-hidden-content on first paint).
 *
 * This covers one of the six allowed animations per CLAUDE.md:
 * "Sections fade-up 12px on first reveal (250ms ease-out, once: true)".
 */
export function SectionReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main#main > section")
    );
    if (sections.length === 0) return;

    // Hide only sections that start below the initial viewport, so
    // above-the-fold content renders without flashing.
    const winH = window.innerHeight;
    const belowFold: HTMLElement[] = [];
    sections.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > winH * 0.85) {
        el.style.opacity = "0";
        el.style.transform = "translateY(12px)";
        el.style.transition =
          "opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)";
        el.style.willChange = "opacity, transform";
        belowFold.push(el);
      }
    });

    if (belowFold.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          window.setTimeout(() => {
            el.style.willChange = "";
          }, 500);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    belowFold.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
