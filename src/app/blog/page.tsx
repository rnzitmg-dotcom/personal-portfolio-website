import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs, categoryOptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read ClickForge insights on AI marketing, SEO, automation, branding, and digital growth strategy.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogs[0];

  return (
    <section className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="AI marketing insights for modern business growth."
        description="Professional placeholder articles covering practical strategy, automation, SEO, and brand building."
      />
      <div className="mx-auto mt-12 max-w-7xl">
        <Card className="grid gap-8 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8">
          <div
            className="min-h-80 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(5,8,22,.1), rgba(5,8,22,.55)), url(${featured.image})`,
            }}
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Featured Article
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {featured.title}
            </h2>
            <p className="mt-4 text-slate-300 leading-7">
              {featured.description}
            </p>
            <ButtonLink href={`/blog/${featured.slug}`} className="mt-7 w-fit">
              Read Featured Article
            </ButtonLink>
          </div>
        </Card>
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:flex-row">
          <label className="sr-only" htmlFor="blog-search">
            Search articles
          </label>
          <input
            id="blog-search"
            placeholder="Search articles"
            className="focus-ring min-h-12 flex-1 rounded-full border border-white/10 bg-slate-950/70 px-5 text-sm text-white placeholder:text-slate-500"
          />
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => (
              <button
                key={category}
                className="focus-ring rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {["1", "2", "3"].map((page) => (
            <button
              key={page}
              className="focus-ring h-10 w-10 rounded-full border border-white/10 text-sm text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
