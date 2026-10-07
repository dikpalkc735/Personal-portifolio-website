import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogExplorer } from "@/components/blog-explorer";
import { NewsletterForm } from "@/components/newsletter-form";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = { title: "AI Marketing Blog & Resources", description: "Practical articles about AI marketing, lead generation, Meta Ads, email, automation, and small business growth.", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  return <main><section className="page-hero blog-page-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} /><p className="eyebrow">Blog</p><h1>Practical Marketing Ideas to <span>Help You Grow</span></h1><p>Learn how to use AI, digital marketing, advertising, email, automation, and lead generation to grow your business.</p></div></section>
    <section className="section featured-wrap"><div className="shell featured-article"><div className="featured-visual"><span>{featured.category}</span><i /><b /></div><div><p className="eyebrow">Featured article</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><div className="blog-meta"><span>{new Date(`${featured.date}T12:00:00`).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</span><span><Clock3 size={14} />{featured.readingTime}</span></div><Link className="text-link" href={`/blog/${featured.slug}`}>Read the article <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="section section-muted"><div className="shell"><div className="section-heading"><p className="eyebrow">Latest Articles</p><h2>Read practical ideas you can put into action.</h2></div><BlogExplorer posts={blogPosts} /></div></section>
    <section className="newsletter-section"><div className="shell newsletter-inner"><div><p className="eyebrow eyebrow-light">Practical marketing ideas</p><h2>Get useful growth ideas in your inbox.</h2><p>Learn more about AI, digital marketing, advertising, email, automation, and lead generation.</p></div><NewsletterForm /></div></section>
  </main>;
}
