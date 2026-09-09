import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { Card } from "@/components/ui/card";
import { processSteps, siteConfig, skills, stats, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ranjit Tamang and the mission behind Digital Ranjit, an AI marketing consultancy based in Kathmandu, Nepal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div className="glass aspect-[4/5] rounded-[2rem] p-8">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    Founder
                  </p>
                  <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                    {siteConfig.owner}
                  </h1>
                  <p className="mt-4 text-xl text-slate-300">
                    {siteConfig.role}
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm leading-7 text-slate-300">
                    Based in Pharping, Kathmandu, Ranjit helps businesses use
                    AI, automation, and strategy to build smarter marketing
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Professional Introduction
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Marketing expertise sharpened by AI systems.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Digital Ranjit exists for businesses that want more than scattered
              tactics. Ranjit combines digital consulting, brand strategy, SEO,
              performance marketing, and automation into practical growth
              systems that teams can understand and execute.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The approach is strategic, hands-on, and outcome focused: clarify
              the market, design the funnel, use AI where it creates leverage,
              and keep improving through data.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            [
              "Mission",
              "Help ambitious businesses turn AI-enabled marketing into practical systems for growth.",
            ],
            [
              "Vision",
              "Become a trusted consulting partner for brands that want modern, ethical, measurable digital growth.",
            ],
            [
              "Biography",
              "Ranjit Tamang is an AI marketing consultant focused on strategy, automation, SEO, branding, and performance execution.",
            ],
          ].map(([title, text]) => (
            <Card key={title}>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="The principles behind every engagement."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value} className="p-5">
              <p className="font-semibold text-white">{value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience Timeline"
          title="A repeatable process shaped by real consulting work."
        />
        <div className="mt-12">
          <Timeline steps={processSteps} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Skills"
              title="Capabilities across the modern marketing stack."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map(([value, label]) => (
              <Card key={label}>
                <p className="text-4xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
