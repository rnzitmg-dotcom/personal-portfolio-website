import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { MotionReveal } from "@/components/motion-reveal";

export function CtaBanner() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <MotionReveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-slate-900 to-violet-600/20 p-8 text-center shadow-2xl shadow-cyan-950/40 sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
          Consultation
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to Grow Your Business with AI?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Turn marketing complexity into a clear growth system built around
          strategy, automation, content, and measurable outcomes.
        </p>
        <ButtonLink href="/contact" className="mt-8">
          Book a Consultation <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </MotionReveal>
    </section>
  );
}
