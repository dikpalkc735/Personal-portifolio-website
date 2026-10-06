import type { Metadata } from "next";
import Link from "next/link";
import { Check, Compass, Gauge, Lightbulb, RefreshCw, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = { title: "About Me", description: "Meet an AI Marketing Expert focused on practical, measurable digital growth for small and medium-sized businesses.", alternates: { canonical: "/about" } };

const principles = [
  { icon: Compass, title: "Understand the business first", text: "Strategy begins with your offer, customers, resources, and commercial goals—not a favorite tool." },
  { icon: Gauge, title: "Focus on measurable growth", text: "Priorities should connect to better leads, customer experience, sales, efficiency, or retention." },
  { icon: Lightbulb, title: "Use the right tool for the problem", text: "AI earns its place by making useful work faster, clearer, or more consistent." },
  { icon: RefreshCw, title: "Test, learn, and improve", text: "Marketing gets stronger through practical experiments, honest measurement, and regular refinement." },
];

export default function AboutPage() {
  return <main><section className="page-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Me" }]} /><p className="eyebrow">About me</p><h1>Helping businesses grow smarter with <span>AI & digital marketing.</span></h1><p>I help small and medium-sized businesses turn modern marketing technology into practical growth—without making the work more complicated than it needs to be.</p></div></section>
    <section className="section"><div className="shell two-col align-start"><div className="story-card"><span className="story-monogram">DK</span><p>Dikpal K C · Digital Dikpal</p></div><div><p className="eyebrow">My story</p><h2>Business outcomes come before tools.</h2><p className="lead-copy">I&apos;m Dikpal K C, the AI Marketing Expert behind Digital Dikpal. My work is focused on helping owners and growing teams use AI and digital marketing in a practical, commercially useful way.</p><p>AI can accelerate research, content, analysis, and follow-up—but technology alone is not a strategy. I start by understanding how your business wins customers today, where the journey breaks down, and what improvement would make the biggest difference.</p><p>That creates a clearer foundation for strategy, advertising, email, automation, and measurement. The goal is a marketing system that supports growth and that your team can understand, use, and improve.</p><Link className="button button-outline" href="/book-consultation">Talk through your growth goals</Link></div></div></section>
    <section className="section section-muted"><div className="shell"><div className="section-heading"><p className="eyebrow">My approach</p><h2>Five principles behind every recommendation.</h2></div><div className="principle-grid">{principles.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div><div className="approach-note"><Check size={20} /><p><strong>AI + proven marketing principles:</strong> automation and intelligent tools support good positioning, useful content, relevant offers, strong follow-up, and clear measurement.</p></div></div></section>
    <section className="section"><div className="shell audience-panel"><div><p className="eyebrow eyebrow-light">Who I work with</p><h2>Ambitious businesses that need marketing to feel clearer.</h2></div><div className="audience-list">{["Small business owners", "Medium-sized companies", "Entrepreneurs", "Service businesses", "Growing teams that need better digital marketing"].map((item) => <span key={item}><Users size={17} />{item}</span>)}</div></div></section><CTASection compact /></main>;
}
