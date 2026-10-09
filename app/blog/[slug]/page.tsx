import type { Metadata } from "next";
import Link from "@/components/site-link";
import { notFound } from "next/navigation";
import { Clock3 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { ShareButtons } from "@/components/share-buttons";
import { blogPosts, siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const post = blogPosts.find((item) => item.slug === slug); if (!post) return {}; return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/blog/${post.slug}`, publishedTime: post.date }, twitter: { card: "summary", title: post.title, description: post.excerpt } }; }

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params; const post = blogPosts.find((item) => item.slug === slug); if (!post) notFound(); const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.date, dateModified: post.date, author: { "@type": "Person", name: siteConfig.name, jobTitle: siteConfig.role }, publisher: { "@type": "Person", name: siteConfig.name }, mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}` };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><article><header className="article-hero"><div className="shell article-header-inner"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.category }]} /><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p>{post.excerpt}</p><div className="article-byline"><div className="author-avatar">DK</div><span><strong>{siteConfig.name}</strong><small>{siteConfig.role}</small></span><span>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</span><span><Clock3 size={15} />{post.readingTime}</span></div></div></header>
      <div className="article-featured" role="img" aria-label={`Abstract visual for ${post.category}`}><span>{post.category}</span><i /><b /></div>
      <div className="shell article-layout"><aside className="toc"><strong>In this article</strong>{post.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>)}</aside><div className="article-body">{post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<div className="article-callout"><h2>Ready to Improve Your Marketing?</h2><p>Book a Free Consultation and I&apos;ll analyze your business and create a customized Digital Marketing Plan with clear actions you can start implementing immediately.</p><Link className="button" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div><ShareButtons title={post.title} /></div></div>
    </article><section className="section section-muted"><div className="shell"><div className="section-heading"><p className="eyebrow">Keep learning</p><h2>Related articles</h2></div><div className="blog-grid">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></div></section><CTASection compact /></main>;
}
