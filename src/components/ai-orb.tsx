import { BrainCircuit, Cpu, Sparkles, Workflow } from "lucide-react";

export function AiOrb() {
  const items = [
    { Icon: BrainCircuit, label: "Strategy" },
    { Icon: Cpu, label: "AI" },
    { Icon: Workflow, label: "Automation" },
    { Icon: Sparkles, label: "Brand" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-8 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm" />
      <div className="animate-glow absolute inset-16 rounded-full border border-violet-300/30 bg-gradient-to-br from-cyan-300/20 via-slate-900 to-violet-600/25" />
      <div className="absolute inset-28 rounded-full border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/20" />
      <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-cyan-300/25" />
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-300 to-violet-600 p-[1px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
          <BrainCircuit
            className="h-16 w-16 text-cyan-200"
            aria-hidden="true"
          />
        </div>
      </div>
      {items.map(({ Icon, label }, index) => (
        <div
          key={label}
          className="glass animate-float absolute flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-100"
          style={{
            left:
              index === 0
                ? "2%"
                : index === 1
                  ? "66%"
                  : index === 2
                    ? "8%"
                    : "64%",
            top:
              index === 0
                ? "22%"
                : index === 1
                  ? "18%"
                  : index === 2
                    ? "70%"
                    : "68%",
            animationDelay: `${index * 0.4}s`,
          }}
        >
          <Icon className="h-4 w-4 text-cyan-300" aria-hidden="true" />
          {label}
        </div>
      ))}
    </div>
  );
}
