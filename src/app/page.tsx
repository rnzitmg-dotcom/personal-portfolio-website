import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiBackground } from "@/components/ai-background";
import { AiOrb } from "@/components/ai-orb";
import { BlogCard } from "@/components/blog-card";
import { CtaBanner } from "@/components/cta-banner";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Timeline } from "@/components/timeline";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  blogs,
  featuredServices,
  processSteps,
  testimonials,
  whyChoose,
} from "@/data/site";

const consultantCardImage =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
        <AiBackground />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              AI Marketing Expert & Consultant
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI Marketing That Drives{" "}
              <span className="text-gradient">Real Business Growth</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Helping businesses grow with AI-powered marketing, automation,
              branding, SEO, and digital strategy.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore Services
              </ButtonLink>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <AiOrb />
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] p-8">
              <Image
                src={consultantCardImage}
                alt=""
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-slate-950/5" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-transparent to-violet-600/30" />
              <div className="relative flex h-full flex-col justify-end">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-600 text-3xl font-bold text-slate-950">
                  RT
                </div>
                <p className="text-2xl font-semibold text-white">
                  Ranjit Tamang
                </p>
                <p className="mt-2 text-slate-300">
                  AI Marketing Expert & Consultant
                </p>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1} className="flex flex-col justify-center">
            <SectionHeading
              align="left"
              eyebrow="About ClickForge"
              title="Premium strategy for brands ready to use AI with purpose."
              description="ClickForge blends AI systems, brand thinking, SEO, content, and performance marketing into practical growth plans for ambitious businesses."
            />
            <div className="mt-8 grid gap-3 text-slate-300 sm:grid-cols-2">
              {[
                "AI-backed growth planning",
                "Automation that saves real time",
                "Brand and funnel clarity",
                "Performance reporting that makes sense",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
            <ButtonLink
              href="/about"
              variant="secondary"
              className="mt-8 w-fit"
            >
              Learn More
            </ButtonLink>
          </MotionReveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Services"
          title="AI-powered services built for modern growth."
          description="From strategy to automation, every service is designed to make marketing clearer, faster, and more profitable."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose ClickForge"
          title="Built for clarity, speed, and measurable impact."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map(({ title, text, icon: Icon }) => (
            <Card key={title}>
              <Icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work Process"
          title="A clear timeline from discovery to growth."
        />
        <div className="mt-12">
          <Timeline steps={processSteps} />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Realistic results from focused marketing systems."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-sm leading-7 text-slate-300">“{item.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Latest thinking on AI marketing and growth."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="focus-ring inline-flex rounded-full text-sm font-semibold text-cyan-200"
          >
            View all articles
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
