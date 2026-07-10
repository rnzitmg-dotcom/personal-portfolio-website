import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/cta-banner";
import { FaqAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Card } from "@/components/ui/card";
import { faqs, processSteps, services } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Service
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {service.description}
            </p>
          </div>
          <Card className="flex min-h-72 flex-col justify-between">
            <Icon className="h-14 w-14 text-cyan-300" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Pricing Placeholder
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                Custom Scope
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Pricing is tailored to your business goals, timeline, and
                execution requirements.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {service.benefits.map((benefit) => (
            <Card key={benefit}>
              <CheckCircle2 className="h-7 w-7 text-cyan-300" />
              <h2 className="mt-5 text-xl font-semibold text-white">
                {benefit}
              </h2>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title="A focused engagement built around outcomes."
              description={`The ${service.title} service turns strategy into a concrete plan with clear priorities, implementation guidance, and performance measurement.`}
            />
          </div>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Features</h2>
            <div className="mt-6 grid gap-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  {feature}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="Step-by-step from diagnosis to growth."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-3">
          {processSteps.slice(0, 6).map(([number, title, text]) => (
            <Card key={title}>
              <p className="text-3xl font-semibold text-cyan-200">{number}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Common questions about this service."
        />
        <div className="mt-10">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Related Services"
          title="Services that pair well with this engagement."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
