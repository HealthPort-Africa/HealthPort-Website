"use client";

import { useEffect, useRef } from "react";
import faqs from "../../../data/faq.json";

/** Shared FAQ: approved client copy, native keyboard-accessible disclosures. */
export function FAQ() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!section.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations: Animation[] = [];
    const rows = Array.from(section.current.querySelectorAll<HTMLElement>("details"));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      visible.forEach((entry, index) => {
        animations.push((entry.target as HTMLElement).animate(
          [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, delay: index * 65, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "backwards" }
        ));
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -5% 0px" });
    rows.forEach(row => observer.observe(row));
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, []);
  return (
    <section ref={section} id="faq" className="healthport-faq relative isolate overflow-hidden w-full" aria-label="Frequently asked questions" style={{ paddingBlock: "var(--spacing-section)" }}>
      <div className="container-page relative">
        <FAQIllustrations />
        <h2 className="mx-auto mb-10 md:mb-14 max-w-3xl text-center" style={{
          fontSize: "clamp(2rem, 1.2rem + 3vw, 3.5rem)",
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.035em",
        }}>Frequently asked<br className="sm:hidden" /> questions.</h2>
        <div className="relative mx-auto max-w-5xl flex flex-col gap-3">
          {faqs.map(faq => (
            <details key={faq.question} name="healthport-faq" className="faq-item healthport-faq-neutral-row" style={{ borderRadius: "16px", background: "color-mix(in srgb, var(--color-parchment) 55%, white)" }}>
              <summary className="faq-summary flex items-center justify-between gap-6 cursor-pointer list-none" style={{
                padding: "clamp(1.25rem, 2.2vw, 2rem) clamp(1.25rem, 3vw, 3rem)",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)",
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: "-0.015em",
              }}>
                <span>{faq.question}</span>
                <svg className="faq-chevron shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ color: "var(--color-muted)", transition: "transform 240ms ease" }}>
                  <path d="m4 7 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="healthport-faq-answer" style={{ padding: "0 clamp(1.25rem, 3vw, 3rem) clamp(1.25rem, 2.2vw, 2rem)" }}>
                <p style={{ maxWidth: "70ch", fontSize: "16px", lineHeight: 1.7, color: "var(--color-muted)" }}>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


function FAQIllustrations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden xl:block" style={{ zIndex: -1, color: "#858581" }}>
      <svg className="absolute" style={{ width: "150px", left: "-100px", top: "260px", transform: "rotate(-9deg)" }} viewBox="0 0 160 240" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Oxygen cylinder on a delivery trolley. */}
        <path d="M48 193V44q0-18 20-18h24q20 0 20 18v149M48 65h64M48 177h64M67 26V15h26v11M72 15V8h16v7M63 8h34M80 26v-9" />
        <rect x="63" y="91" width="34" height="43" rx="4" />
        <path d="M74 111a7 7 0 1 0 0 1m13 10h7M40 193h83V55l12-13h13M41 201h82M68 165h24" />
        <circle cx="47" cy="211" r="10" /><circle cx="118" cy="211" r="10" />
        <path d="M27 227h112M114 43q25 0 25 25v35" />
      </svg>
      <svg className="absolute" style={{ width: "160px", right: "-105px", top: "450px", transform: "rotate(8deg)" }} viewBox="0 0 180 210" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Bedside monitoring and the clinician's notes. */}
        <rect x="19" y="20" width="128" height="84" rx="9" />
        <rect x="28" y="29" width="110" height="60" rx="3" />
        <path d="M36 64h20l8-17 9 30 10-22 8 9h35M65 104v18h38v-18M50 123h68M147 70h12q10 0 10 10v70M39 169h70" />
        <path d="M23 142h82l17 55H40zM53 145h25v-9H53zM46 161h48M50 172h35M54 184h40" />
        <circle cx="158" cy="158" r="8" /><path d="M143 199h27M152 191v8M165 191v8" />
      </svg>
    </div>
  );
}
