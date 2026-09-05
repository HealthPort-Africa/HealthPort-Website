import type { Metadata } from "next";
import { HospitalIntro } from "@/components/hospital-solutions/HospitalIntro";
import { SignsRightForYou } from "@/components/hospital-solutions/SignsRightForYou";
import { WhyChooseHealthPort } from "@/components/hospital-solutions/WhyChooseHealthPort";
import { PartnershipShape } from "@/components/hospital-solutions/PartnershipShape";
import { InfrastructureIncluded } from "@/components/hospital-solutions/InfrastructureIncluded";
import { OxyIntelAdvantage } from "@/components/hospital-solutions/OxyIntelAdvantage";
import { CaseStudies } from "@/components/hospital-solutions/CaseStudies";
import { HospitalTestimonial } from "@/components/hospital-solutions/HospitalTestimonial";
import { Onboarding } from "@/components/hospital-solutions/Onboarding";
import { HospitalClosingCTA } from "@/components/hospital-solutions/HospitalClosingCTA";

export const metadata: Metadata = {
  title: "Hospital Solutions",
  description:
    "HealthPort takes on oxygen as an operational partner so your teams can focus on patient care. Managed cylinders, reticulation, monitoring, and clinician training — under one accountable partnership.",
  openGraph: {
    title: "Hospital Solutions · HealthPort",
    description:
      "One partner for reliable oxygen — managed cylinders, real-time visibility, trained clinicians.",
    type: "website",
  },
  alternates: { canonical: "/hospital-solutions" },
};

export default function HospitalSolutionsPage() {
  return (
    <>
      <HospitalIntro />
      <SignsRightForYou />
      <WhyChooseHealthPort />
      <PartnershipShape />
      <InfrastructureIncluded />
      <OxyIntelAdvantage />
      <CaseStudies />
      <HospitalTestimonial />
      <Onboarding />
      <HospitalClosingCTA />
    </>
  );
}
