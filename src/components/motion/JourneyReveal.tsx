"use client";

import { useEffect } from "react";

/**
 * JourneyReveal — one of the six allowed animations: journey steps reveal in
 * sequence as the oxygen thread reaches them. Each [data-journey-step] fades
 * up 12px with a 60ms stagger on scroll-into-view, once. Respects
 * prefers-reduced-motion.
 *
 * Applies to shared/Journey and to the OaaS process teaser stage cards, both
 * of which mark their step elements with data-journey-step.
 */
export function JourneyReveal() {
  useEffect(() => {
    const steps = Array.from(
      document.querySelectorAll<HTMLElement>("[data-journey-step]")
    );
    if (steps.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Group steps by their nearest journey container so stagger resets per group.
    const groups = new Map<HTMLElement, HTMLElement[]>();
    steps.forEach((el) => {
      const container =
        el.closest<HTMLElement>("[data-journey-root]") || document.body;
      if (!groups.has(container)) groups.set(container, []);
      groups.get(container)!.push(el);
    });

    // Prep initial hidden state.
    steps.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(12px)";
      el.style.transition =
        "opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)";
      el.style.willChange = "opacity, transform";
    });

    const revealedByGroup = new WeakMap<HTMLElement, Set<HTMLElement>>();
    groups.forEach((_, g) => revealedByGroup.set(g, new Set()));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const container =
            el.closest<HTMLElement>("[data-journey-root]") || document.body;
          const groupSteps = groups.get(container) || [];
          const revealed = revealedByGroup.get(container) || new Set();
          const idx = groupSteps.indexOf(el);
          const stagger = Math.max(
            0,
            (idx - (groupSteps.length - Math.min(groupSteps.length, revealed.size + 1))) * 60
          );

          window.setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            window.setTimeout(() => {
              el.style.willChange = "";
            }, 500);
          }, stagger);

          revealed.add(el);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    steps.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
