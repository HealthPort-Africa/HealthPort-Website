import type { Metadata } from "next";
import { PartnersHero } from "@/components/for-partners/PartnersHero";
import { PartnerTypes } from "@/components/for-partners/PartnerTypes";
import { PartnershipShape } from "@/components/for-partners/PartnershipShape";
import { SustainabilityStory } from "@/components/for-partners/SustainabilityStory";
import { ImpactReporting } from "@/components/for-partners/ImpactReporting";
import { CurrentPartners } from "@/components/for-partners/CurrentPartners";
import { PartnersClosingCTA } from "@/components/for-partners/PartnersClosingCTA";

export const metadata: Metadata = {
  title: "For Partners",
  description:
    "HealthPort partners with governments, development organisations, NGOs, funders, and distributors to expand reliable medical oxygen access across Africa.",
  openGraph: {
    title: "For Partners · HealthPort",
    description:
      "Reliable oxygen infrastructure, delivered at scale.",
    type: "website",
  },
  alternates: { canonical: "/for-partners" },
};

export default function ForPartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnerTypes />
      <PartnershipShape />
      <SustainabilityStory />
      <ImpactReporting />
      <CurrentPartners />
      <PartnersClosingCTA />
    </>
  );
}
