"use client";

import { useEffect, useRef } from "react";

/**
 * HeroWash — atmospheric brand-hue wash (Coral · Violet · Sky) for the hero.
 * Parallax'd: moves at 0.4× scroll speed so it trails the page as you scroll,
 * creating depth. rAF-throttled scroll listener, GPU-friendly transform.
 * Respects prefers-reduced-motion.
 */
export function HeroWash() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      el.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-x-0 top-0 -z-10 pointer-events-none"
      style={{
        height: "70%",
        willChange: "transform",
        background: [
          "radial-gradient(ellipse 70% 60% at 12% -10%, rgba(239, 100, 97, 0.28), transparent 60%)",
          "radial-gradient(ellipse 80% 65% at 50% -15%, rgba(128, 16, 120, 0.22), transparent 60%)",
          "radial-gradient(ellipse 75% 60% at 88% -10%, rgba(93, 183, 222, 0.32), transparent 60%)",
        ].join(", "),
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4) 75%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.4) 75%, transparent 100%)",
      }}
    />
  );
}
