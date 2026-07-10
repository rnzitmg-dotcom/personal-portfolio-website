import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 pt-28 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          404
        </p>
        <h1 className="mt-4 text-5xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          The page you are looking for may have moved, or the link may no longer
          be available.
        </p>
        <ButtonLink href="/" className="mt-8">
          Return Home
        </ButtonLink>
      </div>
    </section>
  );
}
