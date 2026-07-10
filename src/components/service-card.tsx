import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function ServiceCard({
  service,
}: {
  service: {
    slug: string;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}) {
  const Icon = service.icon;

  return (
    <Card className="group h-full">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">
        {service.description}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-cyan-200"
      >
        Read More{" "}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}
