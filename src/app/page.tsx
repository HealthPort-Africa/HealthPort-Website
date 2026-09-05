import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { OxygenGap } from "@/components/home/OxygenGap";
import { ImpactChapter } from "@/components/home/ImpactChapter";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Journey } from "@/components/home/Journey";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonial } from "@/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <OxygenGap />
      <ImpactChapter />
      <WhatWeDo />
      <Journey />
      <BeforeAfter />
      <Testimonial />
    </>
  );
}
