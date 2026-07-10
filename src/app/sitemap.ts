import type { MetadataRoute } from "next";
import { blogs, services, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/about", "/services", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${siteConfig.url}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [...baseRoutes, ...serviceRoutes, ...blogRoutes];
}
