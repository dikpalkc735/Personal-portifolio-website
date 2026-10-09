import type { Metadata } from "next";
import Link from "@/components/site-link";
import { CalendarCheck2, Mail, MessageSquareText } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact", description: "Contact Digital Dikpal to discuss AI marketing, strategy, Meta Ads, email, automation, and growth opportunities.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main><section className="page-hero contact-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} /><p className="eyebrow">Contact</p><h1>Let&apos;s Talk About <span>Growing Your Business</span></h1><p>Have questions about AI, digital marketing, advertising, email marketing, or automation?</p><p>Tell me about your business and what you&apos;re trying to achieve. I&apos;ll help you understand where the biggest opportunities may be.</p><Link className="button" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div></section>
    <section className="section"><div className="shell contact-layout"><aside><div className="contact-side-card"><MessageSquareText size={26} /><h2>Or send me a message using the form.</h2><p>Share your business goals and main marketing challenge so I can understand where the biggest opportunities may be.</p></div><Link className="contact-method" href="/book-consultation" data-event="consultation_cta_click"><CalendarCheck2 /><span><strong>Book a Free Consultation</strong><small>Get a focused business review and a customized Digital Marketing Plan.</small></span></Link><a className="contact-method muted" href={`mailto:${siteConfig.email}`}><Mail /><span><strong>{siteConfig.email}</strong><small>Email me directly if you prefer.</small></span></a></aside><ContactForm /></div></section>
  </main>;
}
