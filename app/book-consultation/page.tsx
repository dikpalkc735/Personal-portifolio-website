import type { Metadata } from "next";
import { CalendarCheck2, Check, Clock3, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Book a Free Consultation", description: "Book a free consultation with Digital Dikpal for a business analysis, marketing opportunity review, and practical action plan.", alternates: { canonical: "/book-consultation" } };

const agenda = ["Business and marketing analysis", "Identification of key marketing problems", "Growth opportunities", "AI and automation recommendations", "Customized Digital Marketing Plan", "Clear next steps"];

export default function BookingPage() {
  return <main><section className="booking-hero"><div className="shell"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Free Consultation" }]} /><div className="booking-grid"><div className="booking-intro"><p className="eyebrow eyebrow-light">Free Consultation</p><h1>Not Sure What Your Business Needs?</h1><p>That&apos;s exactly what the Free Consultation is for. I&apos;ll look at your business, current marketing, challenges, and growth opportunities.</p><div className="booking-reassurance"><span><Clock3 size={17} />Practical business and marketing review</span><span><ShieldCheck size={17} />Clear recommendations without complicated jargon</span></div></div><div className="booking-form-card"><div className="booking-form-heading"><CalendarCheck2 size={30} /><div><p className="eyebrow">Request your consultation</p><h2>Tell me about your business</h2></div></div><p>Complete the form below and I&apos;ll contact you about the next step.</p><ContactForm variant="consultation" /></div></div></div></section>
    <section className="section"><div className="shell consultation-agenda"><div><p className="eyebrow">Your Free Consultation Includes</p><h2>A customized Digital Marketing Plan and clear next steps.</h2><p className="lead-copy">You&apos;ll leave with practical actions you can start implementing immediately.</p></div><ol>{agenda.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p><Check size={18} /></li>)}</ol></div></section>
  </main>;
}
