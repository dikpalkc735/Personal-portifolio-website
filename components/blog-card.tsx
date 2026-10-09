import Link from "@/components/site-link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/lib/site-data";

const categoryClass: Record<string, string> = { "AI Marketing": "visual-ai", "Lead Generation": "visual-leads", "Meta Ads": "visual-ads", "Email Marketing": "visual-email" };

export function BlogCard({ post }: { post: BlogPost }) {
  return <article className="blog-card"><Link href={`/blog/${post.slug}`} className={`blog-visual ${categoryClass[post.category] ?? "visual-growth"}`} aria-label={`Read ${post.title}`}><span>{post.category}</span><i /><b /></Link><div className="blog-card-body"><div className="blog-meta"><span>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" })}</span><span><Clock3 size={14} /> {post.readingTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="card-link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link></div></article>;
}
