import type { Metadata } from "next";
import Link from "next/link";
import { Check, Compass, Gauge, Lightbulb, RefreshCw, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = { title: "About Me", description: "Meet Dikpal K C, an AI Marketing Expert helping small and medium-sized businesses grow with practical digital marketing strategies.", alternates: { canonical: "/about" } };

const principles = [
  { icon: Compass, title: "Built around your business", text: "Your marketing strategy should reflect your goals, customers, challenges, and opportunities." },
  { icon: Gauge, title: "Focused on business growth", text: "Marketing should help create better leads, stronger sales opportunities, and more efficient work." },
  { icon: Lightbulb, title: "The right tools for the problem", text: "AI is useful when it solves a real problem, improves performance, or saves valuable time." },
  { icon: RefreshCw, title: "Clear, practical improvement", text: "Recommendations are designed to be understandable, actionable, and improved over time." },
];

export default function AboutPage() {
  return <main><section className="page-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Me" }]} /><p className="eyebrow">About Me</p><h1>Helping Businesses Grow Smarter with <span>AI & Digital Marketing</span></h1><p>I&apos;m an AI Marketing Expert helping small and medium-sized business owners grow online using AI tools and proven digital marketing strategies.</p></div></section>
    <section className="section"><div className="shell two-col align-start"><div className="story-card"><span className="story-monogram">DK</span><p>Dikpal K C · Digital Dikpal</p></div><div><p className="eyebrow">My focus</p><h2>The right tools and strategies for real business problems.</h2><p className="lead-copy">My focus is not on using AI just because it&apos;s new.</p><p>It&apos;s about using the right tools and strategies to solve real business problems, improve marketing performance, save time, and create more opportunities for growth.</p><p>Every business is different, which is why I believe your marketing strategy should be built around your specific goals and customers.</p><Link className="button button-outline" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div></div></section>
    <section className="section section-muted"><div className="shell"><div className="section-heading"><p className="eyebrow">My approach</p><h2>Marketing that helps your business grow without adding more complexity.</h2></div><div className="principle-grid">{principles.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div><div className="approach-note"><Check size={20} /><p><strong>AI and proven digital marketing:</strong> practical tools and strategies working together to improve your marketing, save time, and create more opportunities for growth.</p></div></div></section>
    <section className="section"><div className="shell audience-panel"><div><p className="eyebrow eyebrow-light">Who I work with</p><h2>Businesses that want a clearer, more effective way to grow online.</h2></div><div className="audience-list">{["Small business owners", "Medium-sized companies", "Entrepreneurs", "Service businesses", "Growing teams that need better digital marketing"].map((item) => <span key={item}><Users size={17} />{item}</span>)}</div></div></section><CTASection compact /></main>;
}
