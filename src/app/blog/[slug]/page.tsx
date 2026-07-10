import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link2, Mail, Share2 } from "lucide-react";
import Image from "next/image";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs, siteConfig } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.description,
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: { images: [blog.image] },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();
  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <article className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {blog.category}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {blog.title}
          </h1>
          <p className="mt-5 text-slate-300">
            {blog.author} · {blog.date} · {blog.readingTime}
          </p>
        </div>
        <div className="relative mx-auto mt-12 aspect-[16/8] max-w-6xl overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src={blog.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <Card>
              <h2 className="font-semibold text-white">Table of Contents</h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-400">
                <a href="#overview" className="hover:text-cyan-200">
                  Overview
                </a>
                <a href="#framework" className="hover:text-cyan-200">
                  Framework
                </a>
                <a href="#next-steps" className="hover:text-cyan-200">
                  Next Steps
                </a>
              </div>
              <div className="mt-6 flex gap-2">
                {[Share2, Link2, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="focus-ring rounded-full border border-white/10 p-2 text-slate-300 hover:text-cyan-200"
                    aria-label="Share article"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          </aside>
          <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-p:leading-8 prose-headings:text-white">
            <h2 id="overview">Overview</h2>
            {blog.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2 id="framework">Framework</h2>
            <p>
              The best marketing systems combine clear positioning, useful
              content, automation, and a feedback loop that turns campaign data
              into better decisions.
            </p>
            <h2 id="next-steps">Next Steps</h2>
            <p>
              Start with one measurable bottleneck, design a small experiment,
              and use AI to increase the speed or quality of the work without
              losing strategic judgment.
            </p>
          </div>
        </div>
      </article>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card>
            <h2 className="text-2xl font-semibold text-white">
              About the Author
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              {siteConfig.owner} is an AI marketing consultant helping
              businesses grow through strategy, SEO, automation, and performance
              systems.
            </p>
          </Card>
          <Card className="mt-6">
            <h2 className="text-2xl font-semibold text-white">Comments</h2>
            <p className="mt-4 text-slate-400">
              Comments placeholder for future community discussion and
              moderation.
            </p>
          </Card>
          <Card className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Get AI Marketing Insights
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Subscribe for practical ideas on automation, SEO, brand strategy,
              and digital growth.
            </p>
            <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                aria-label="Email for newsletter"
                placeholder="Email address"
                className="focus-ring min-h-12 flex-1 rounded-full border border-white/10 bg-slate-950/70 px-5 text-sm text-white"
              />
              <ButtonLink href="/contact">Subscribe</ButtonLink>
            </div>
          </Card>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Related Articles"
          title="Keep exploring AI marketing."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.slug} blog={item} />
          ))}
        </div>
      </section>
    </>
  );
}
