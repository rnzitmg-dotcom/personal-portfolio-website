import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Digital Ranjit for AI marketing strategy, automation, SEO, brand strategy, and digital growth.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactItems = [
    {
      Icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      Icon: Phone,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replaceAll(" ", "")}`,
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Pharping, Kathmandu",
      href: null,
    },
    {
      Icon: Clock,
      label: "Business Hours",
      value: "Monday-Friday, 9:00 AM - 6:00 PM",
      href: null,
    },
  ];

  return (
    <section className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Book a premium AI marketing consultation."
        description="Share your goals and Ranjit will review the best next step for strategy, automation, SEO, branding, or growth execution."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          {contactItems.map(({ Icon, label, value, href }) => (
            <Card key={label}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">{label}</h2>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-sm text-slate-400 hover:text-cyan-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-400">{value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
