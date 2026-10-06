"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { BlogPost } from "@/lib/site-data";
import { BlogCard } from "@/components/blog-card";

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  const filtered = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [posts, query, category]);
  return <div><div className="blog-controls"><label className="search-field"><Search size={18} /><span className="sr-only">Search articles</span><input type="search" placeholder="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} /></label><div className="category-filters" aria-label="Filter by category">{categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>{filtered.length ? <div className="blog-grid">{filtered.map((post) => <BlogCard key={post.slug} post={post} />)}</div> : <div className="empty-state"><h2>No articles found</h2><p>Try another search or choose a different category.</p><button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button></div>}</div>;
}
