import { Globe2, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { navItems, services, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="focus-ring inline-flex rounded-md">
            <BrandLogo imageClassName="h-20 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[Globe2, Share2, Mail].map((Icon, index) => (
              <a
                key={index}
                href={index === 2 ? `mailto:${siteConfig.email}` : "#"}
                className="focus-ring rounded-full border border-white/10 p-2 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Navigation
          </h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contact
          </h2>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex gap-3 hover:text-cyan-200"
            >
              <Mail className="h-4 w-4 text-cyan-300" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
              className="flex gap-3 hover:text-cyan-200"
            >
              <Phone className="h-4 w-4 text-cyan-300" />
              {siteConfig.phone}
            </a>
            <p className="flex gap-3">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ClickForge. Premium AI marketing consulting
        by Ranjit Tamang.
      </div>
      <div className="sr-only">
        {services.map((service) => service.title).join(", ")}
      </div>
    </footer>
  );
}
