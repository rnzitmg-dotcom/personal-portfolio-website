import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "focus-ring relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition duration-300 disabled:pointer-events-none disabled:opacity-60";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      className={cn(
        base,
        variant === "primary" &&
          "button-gradient text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02]",
        variant === "secondary" &&
          "border border-white/15 bg-white/8 text-white hover:border-cyan-300/50 hover:bg-white/12",
        variant === "ghost" && "text-slate-200 hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        variant === "primary" &&
          "button-gradient text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02]",
        variant === "secondary" &&
          "border border-white/15 bg-white/8 text-white hover:border-cyan-300/50 hover:bg-white/12",
        variant === "ghost" && "text-slate-200 hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}
