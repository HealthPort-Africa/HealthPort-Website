import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { OfficeAndResponse } from "@/components/contact/OfficeAndResponse";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HealthPort — the healthcare infrastructure company delivering Oxygen as a Service to hospitals across Africa. Routed inquiry form, WhatsApp, phone, and email.",
  openGraph: {
    title: "Contact · HealthPort",
    description: "Tell us about your facility. We'll route it to the right person on the team.",
    type: "website",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section
        className="chapter"
        aria-label="Inquiry form"
        style={{ paddingBlock: "clamp(2rem, 1.5rem + 2vw, 4rem)" }}
      >
        <div className="chapter-inner max-w-3xl">
          <InquiryForm />
        </div>
      </section>
      <ContactChannels />
      <OfficeAndResponse />
    </>
  );
}
