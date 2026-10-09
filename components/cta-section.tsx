import Link from "@/components/site-link";
import { CalendarCheck2 } from "lucide-react";

export function CTASection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta-band ${compact ? "cta-compact" : ""}`}><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Free Consultation</p><h2>Ready to Improve Your Marketing?</h2><p>Stop guessing which marketing strategy to try next. Book a <strong>Free Consultation</strong> and I&apos;ll analyze your business and create a customized Digital Marketing Plan with clear actions you can start implementing immediately.</p></div><Link className="button button-light" href="/book-consultation" data-event="consultation_cta_click"><CalendarCheck2 size={19} aria-hidden="true" /> Book a Free Consultation</Link></div></section>
  );
}
