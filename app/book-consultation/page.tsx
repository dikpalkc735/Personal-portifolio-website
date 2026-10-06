import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Check, Clock3, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Book a Free Consultation", description: "Book a free consultation with Digital Dikpal for a business analysis, marketing opportunity review, and practical action plan.", alternates: { canonical: "/book-consultation" } };

const agenda = ["Analyze your business, offer, and current marketing", "Review how you generate leads and customers today", "Identify opportunities across AI, automation, advertising, email, and conversion", "Create a customized digital marketing action plan", "Share practical recommendations you can begin implementing"];

export default function BookingPage() {
  return <main><section className="booking-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free Consultation" }]} /><div className="booking-grid"><div><p className="eyebrow eyebrow-light">Free consultation · practical value</p><h1>Get a clearer plan for your next marketing move.</h1><p>Use this focused conversation to understand what is holding your marketing back, where AI can genuinely help, and what to prioritize next.</p><div className="booking-reassurance"><span><Clock3 size={17} />Focused business review</span><span><ShieldCheck size={17} />No exaggerated promises</span></div></div><div className="booking-card"><CalendarCheck2 size={34} /><h2>Book your free consultation</h2><p>Choose a suitable time using the scheduling link, or contact me if you would rather arrange it directly.</p>{siteConfig.bookingUrl ? <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" data-event="consultation_booking_start">Open the booking calendar <ArrowUpRight size={18} /></a> : <><div className="integration-note"><strong>Scheduling link ready to connect</strong><p>Add your Calendly, Cal.com, or Google Calendar booking URL with the <code>NEXT_PUBLIC_BOOKING_URL</code> setting.</p></div><Link className="button" href="/contact">Arrange a call by message</Link></>}<small>No obligation. The conversation is designed to leave you with useful next steps.</small></div></div></div></section>
    <section className="section"><div className="shell consultation-agenda"><div><p className="eyebrow">What we&apos;ll cover</p><h2>A useful working session—not a generic sales pitch.</h2><p className="lead-copy">We&apos;ll use the time to build context, identify the most valuable opportunities, and turn them into a realistic order of action.</p></div><ol>{agenda.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p><Check size={18} /></li>)}</ol></div></section>
  </main>;
}
