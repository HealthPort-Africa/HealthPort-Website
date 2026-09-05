"use client";

import { useEffect } from "react";

/**
 * Parallax — mounted once in the root layout. Watches every element tagged
 * `[data-parallax]` and translates it vertically based on its distance from
 * viewport centre. Speed is a per-element attribute: `data-parallax="0.15"`
 * (default 0.15). Negative values reverse direction.
 *
 * Usage note: the parallaxed element should be positioned inside an
 * `overflow: hidden` container and be slightly larger than its container
 * (e.g. `scale(1.15)` or `height: 115%`) so translation doesn't reveal a
 * gap at the edges.
 *
 * rAF-throttled scroll listener, GPU-friendly transform, respects
 * prefers-reduced-motion.
 */
export function Parallax() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (els.length === 0) return;

    let raf = 0;
    const update = () => {
      const winH = window.innerHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Skip elements comfortably outside the viewport
        if (rect.bottom < -200 || rect.top > winH + 200) return;
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const elCenter = rect.top + rect.height / 2;
        const viewCenter = winH / 2;
        const offset = (elCenter - viewCenter) * speed;
        el.style.transform = `translate3d(0, ${-offset}px, 0)`;
      });
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
  }, []);

  return null;
}
