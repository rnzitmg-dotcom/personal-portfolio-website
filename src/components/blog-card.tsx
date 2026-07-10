import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function BlogCard({
  blog,
}: {
  blog: {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readingTime: string;
    category: string;
    image: string;
  };
}) {
  return (
    <Card className="group h-full overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <Image
          src={blog.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
          {blog.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          <span>{blog.date}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {blog.readingTime}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-snug text-white">
          {blog.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {blog.description}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">
            {blog.author}
          </span>
          <Link
            href={`/blog/${blog.slug}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-cyan-200"
          >
            Read{" "}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
