import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck2, Mail, MessageSquareText } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact", description: "Contact Digital Dikpal to discuss AI marketing, strategy, Meta Ads, email, automation, and growth opportunities.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <main><section className="page-hero contact-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} /><p className="eyebrow">Let&apos;s talk</p><h1>Tell me where your marketing is <span>getting stuck.</span></h1><p>Share a little about your business, current challenge, and the result you want to improve. I&apos;ll use that context to make the first conversation more useful.</p></div></section>
    <section className="section"><div className="shell contact-layout"><aside><div className="contact-side-card"><MessageSquareText size={26} /><h2>Start with a conversation.</h2><p>Not sure which service fits? That&apos;s completely fine. Describe the challenge and I&apos;ll help identify the most useful next step.</p></div><Link className="contact-method" href="/book-consultation" data-event="consultation_cta_click"><CalendarCheck2 /><span><strong>Book a free consultation</strong><small>Choose this for a focused business review and action plan.</small></span></Link><div className="contact-method muted"><Mail /><span><strong>{siteConfig.email}</strong><small>Replace this placeholder in the central site configuration.</small></span></div></aside><ContactForm /></div></section>
  </main>;
}
