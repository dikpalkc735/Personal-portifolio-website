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
  return <main><section className="page-hero blog-page-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} /><p className="eyebrow">Insights & resources</p><h1>Useful marketing thinking for <span>smarter growth.</span></h1><p>Practical guidance for business owners who want better leads, clearer campaigns, and more efficient marketing systems.</p></div></section>
    <section className="section featured-wrap"><div className="shell featured-article"><div className="featured-visual"><span>{featured.category}</span><i /><b /></div><div><p className="eyebrow">Featured article</p><h2>{featured.title}</h2><p>{featured.excerpt}</p><div className="blog-meta"><span>{new Date(`${featured.date}T12:00:00`).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</span><span><Clock3 size={14} />{featured.readingTime}</span></div><Link className="text-link" href={`/blog/${featured.slug}`}>Read the article <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="section section-muted"><div className="shell"><div className="section-heading"><p className="eyebrow">Explore the library</p><h2>Find the next idea worth putting into action.</h2></div><BlogExplorer posts={blogPosts} /></div></section>
    <section className="newsletter-section"><div className="shell newsletter-inner"><div><p className="eyebrow eyebrow-light">Useful, not noisy</p><h2>Get practical AI marketing ideas in your inbox.</h2><p>Occasional notes on better campaigns, faster follow-up, and useful automation. No invented hype.</p></div><NewsletterForm /></div></section>
  </main>;
}
