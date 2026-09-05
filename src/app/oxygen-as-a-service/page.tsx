import type { Metadata } from "next";
import { OaasIntro } from "@/components/oaas/OaasIntro";
import { WhyOaas } from "@/components/oaas/WhyOaas";
import { ProcessTeaser } from "@/components/oaas/ProcessTeaser";
import { InfrastructureVideo } from "@/components/oaas/InfrastructureVideo";
import { WhatsIncluded } from "@/components/oaas/WhatsIncluded";
import { Solar } from "@/components/oaas/Solar";
import { OaasJourney } from "@/components/oaas/OaasJourney";
import { HospitalGetsHealthPortTakes } from "@/components/oaas/HospitalGetsHealthPortTakes";
import { Eligibility } from "@/components/oaas/Eligibility";
import { CaseHighlight } from "@/components/oaas/CaseHighlight";
import { OaasClosingCTA } from "@/components/oaas/OaasClosingCTA";

export const metadata: Metadata = {
  title: "Oxygen as a Service",
  description:
    "HealthPort delivers Oxygen as a Service — a managed model that takes cylinders, reticulation, monitoring, and continuous optimisation off the hospital's plate. Pay only for what you use.",
  openGraph: {
    title: "Oxygen as a Service · HealthPort",
    description:
      "A managed model that takes oxygen off the hospital's plate. Pay only for what you use.",
    type: "website",
  },
  alternates: { canonical: "/oxygen-as-a-service" },
};

export default function OaaSPage() {
  return (
    <>
      <OaasIntro />
      <WhyOaas />
      <ProcessTeaser />
      <InfrastructureVideo />
      <WhatsIncluded />
      <Solar />
      <OaasJourney />
      <HospitalGetsHealthPortTakes />
      <Eligibility />
      <CaseHighlight />
      <OaasClosingCTA />
    </>
  );
}
