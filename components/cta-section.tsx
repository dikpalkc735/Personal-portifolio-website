import Link from "next/link";
import { CalendarCheck2 } from "lucide-react";

export function CTASection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta-band ${compact ? "cta-compact" : ""}`}><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Free consultation</p><h2>Ready to grow with AI-powered marketing?</h2><p>Book a free consultation and I&apos;ll analyze your business, identify practical marketing opportunities, and outline a customized action plan you can begin using immediately.</p></div><Link className="button button-light" href="/book-consultation" data-event="consultation_cta_click"><CalendarCheck2 size={19} aria-hidden="true" /> Book a Free Consultation Call</Link></div></section>
  );
}
