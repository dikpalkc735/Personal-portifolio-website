import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck2, Check, Clock3, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Book a Free Consultation", description: "Book a free consultation with Digital Dikpal for a business analysis, marketing opportunity review, and practical action plan.", alternates: { canonical: "/book-consultation" } };

const agenda = ["Business and marketing analysis", "Identification of key marketing problems", "Growth opportunities", "AI and automation recommendations", "Customized Digital Marketing Plan", "Clear next steps"];

export default function BookingPage() {
  return <main><section className="booking-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free Consultation" }]} /><div className="booking-grid"><div><p className="eyebrow eyebrow-light">Free Consultation</p><h1>Not Sure What Your Business Needs?</h1><p>That&apos;s exactly what the Free Consultation is for. I&apos;ll look at your business, current marketing, challenges, and growth opportunities.</p><div className="booking-reassurance"><span><Clock3 size={17} />Practical business and marketing review</span><span><ShieldCheck size={17} />Clear recommendations without complicated jargon</span></div></div><div className="booking-card"><CalendarCheck2 size={34} /><h2>Book My Free Consultation</h2><p>Get a customized Digital Marketing Plan with practical actions you can start implementing immediately.</p>{siteConfig.bookingUrl ? <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" data-event="consultation_booking_start">Book My Free Consultation <ArrowUpRight size={18} /></a> : <><div className="integration-note"><strong>Scheduling link ready to connect</strong><p>Add your Calendly, Cal.com, or Google Calendar booking URL with the <code>NEXT_PUBLIC_BOOKING_URL</code> setting.</p></div><Link className="button" href="/contact">Send Me a Message</Link></>}<small>No complicated marketing language. Just practical ideas focused on helping your business grow.</small></div></div></div></section>
    <section className="section"><div className="shell consultation-agenda"><div><p className="eyebrow">Your Free Consultation Includes</p><h2>A customized Digital Marketing Plan and clear next steps.</h2><p className="lead-copy">You&apos;ll leave with practical actions you can start implementing immediately.</p></div><ol>{agenda.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p><Check size={18} /></li>)}</ol></div></section>
  </main>;
}
