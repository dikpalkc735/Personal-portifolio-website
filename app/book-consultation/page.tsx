import type { Metadata } from "next";
import { CalendarCheck2, Check, Clock3, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Book a Free Consultation", description: "Book a free consultation with Digital Dikpal for a business analysis, marketing opportunity review, and practical action plan.", alternates: { canonical: "/book-consultation" } };

const agenda = ["Business and marketing analysis", "Identification of key marketing problems", "Growth opportunities", "AI and automation recommendations", "Customized Digital Marketing Plan", "Clear next steps"];

export default function BookingPage() {
  return <main><section className="booking-hero"><div className="shell booking-simple-layout"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free Consultation" }]} /><div className="booking-intro"><p className="eyebrow">Free Consultation</p><h1>Book Your Free Marketing Consultation</h1><p>Tell me a little about your business and your biggest marketing challenge. I&apos;ll review your information and contact you about the next step.</p><div className="booking-reassurance"><span><Clock3 size={17} />Practical business review</span><span><ShieldCheck size={17} />Clear, confidential conversation</span></div></div><div className="booking-form-card"><div className="booking-form-heading"><span className="booking-form-icon"><CalendarCheck2 size={24} /></span><div><p className="eyebrow">Request your consultation</p><h2>Tell me about your business</h2></div></div><p>Fields marked with * are required.</p><ContactForm variant="consultation" /></div></div></section>
    <section className="section"><div className="shell consultation-agenda"><div><p className="eyebrow">Your Free Consultation Includes</p><h2>A customized Digital Marketing Plan and clear next steps.</h2><p className="lead-copy">You&apos;ll leave with practical actions you can start implementing immediately.</p></div><ol>{agenda.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p><Check size={18} /></li>)}</ol></div></section>
  </main>;
}
