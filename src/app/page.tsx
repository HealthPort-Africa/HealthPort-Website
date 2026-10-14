import { Hero } from "@/components/home/Hero";
import { HeroTicker } from "@/components/home/HeroTicker";
import { TrustBar } from "@/components/home/TrustBar";
import { OxygenGap } from "@/components/home/OxygenGap";
import { ImpactChapter } from "@/components/home/ImpactChapter";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Journey } from "@/components/home/Journey";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonial } from "@/components/home/Testimonial";

import { FAQ } from "@/components/oaas/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <OxygenGap />
      <ImpactChapter />
      <section aria-label="HealthPort facility photography" className="w-full overflow-hidden">
        <HeroTicker />
      </section>
      <TrustBar />
      <Journey />
      <BeforeAfter />
      <Testimonial />
      <FAQ />
    </>
  );
}
