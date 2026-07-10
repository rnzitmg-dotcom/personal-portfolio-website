import { MotionReveal } from "@/components/motion-reveal";

export function Timeline({ steps }: { steps: string[][] }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-4">
      {steps.map(([number, title, text], index) => (
        <MotionReveal
          key={title}
          delay={index * 0.05}
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[120px_1fr]"
        >
          <div className="text-3xl font-semibold text-cyan-200">{number}</div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
          </div>
        </MotionReveal>
      ))}
    </div>
  );
}
