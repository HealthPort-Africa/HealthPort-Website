"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — mounted once in the root layout. Wraps native scroll with
 * Lenis's inertia-based smoothing so parallax and scroll-driven transforms
 * feel silkier. Respects prefers-reduced-motion (Lenis initialises with
 * near-zero smoothing under that setting so scroll behaves natively).
 *
 * All existing scroll listeners (Parallax, HeroWash, HeroVideo, StatReveal,
 * SectionReveal, ImageReveal) continue to fire on the window `scroll` event
 * that Lenis dispatches — no per-component changes needed.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: reduced ? 0.1 : 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduced,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = window.requestAnimationFrame(loop);
    };
    raf = window.requestAnimationFrame(loop);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
