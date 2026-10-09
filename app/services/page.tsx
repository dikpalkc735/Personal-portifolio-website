import type { Metadata } from "next";
import Link from "@/components/site-link";
import { ArrowUpRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { services } from "@/lib/site-data";

export const metadata: Metadata = { title: "AI Marketing Services", description: "Explore AI digital marketing, strategy, Meta Ads, email marketing, and automation services for growing businesses.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <main><section className="page-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} /><p className="eyebrow">Services</p><h1>AI-Powered Marketing Built for <span>Your Business.</span></h1><p>I combine AI tools, automation, and digital marketing to help you create a smarter and more effective way to grow online. Every recommendation is built around your goals, customers, challenges, and opportunities.</p><Link className="button" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div></section>
    <section className="section"><div className="shell service-overview-list">{services.map((service, index) => { const Icon = service.icon; return <article key={service.slug}><div className="service-index">0{index + 1}</div><div className="service-overview-main"><div className="icon-box"><Icon /></div><h2>{service.title}</h2><p>{service.description}</p><Link className="text-link" href={`/services/${service.slug}`}>Learn More <ArrowUpRight size={17} /></Link></div><div className="service-fit"><h3>Best for</h3><p>{service.idealFor}</p><h3>Problems it solves</h3><ul>{service.problems.slice(0, 3).map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div className="service-benefit"><span>Main benefit</span><strong>{service.benefit}</strong><Link className="button button-small" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div></article>; })}</div></section><CTASection /></main>;
}
