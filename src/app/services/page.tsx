import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ClickForge services including AI marketing strategy, SEO, performance marketing, brand strategy, lead generation, and automation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Premium AI marketing services for business growth."
          description="Choose focused consulting and execution support across strategy, search, content, automation, paid growth, and brand building."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
