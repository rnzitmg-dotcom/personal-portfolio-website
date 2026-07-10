import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35",
        className,
      )}
    >
      {children}
    </div>
  );
}
