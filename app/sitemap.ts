import type { MetadataRoute } from "next";
import { blogPosts, services, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/about", "/services", "/blog", "/contact", "/book-consultation", "/privacy-policy", "/terms"];
  return [...core.map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date(), changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...services.map((service) => ({ url: `${siteConfig.siteUrl}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 })), ...blogPosts.map((post) => ({ url: `${siteConfig.siteUrl}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: .65 }))];
}
