"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { services } from "@/lib/site-data";
import { trackEvent } from "@/components/analytics";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus({ type: "loading" });
    const form = event.currentTarget; const body = Object.fromEntries(new FormData(form));
    if (String(body.company_website ?? "").trim()) { setStatus({ type: "success", message: "Thank you. Your message has been received." }); return; }
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Please try again.");
      form.reset(); setStatus({ type: "success", message: result.message ?? "Thanks—your message has been sent." }); trackEvent("contact_form_submit", { service: body.service });
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : "Please try again." }); }
  }

  return <form className={`contact-form ${compact ? "form-compact" : ""}`} onSubmit={submit} noValidate>
    <div className="honeypot" aria-hidden="true"><label>Company website<input name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid"><label>Full Name<span>*</span><input name="name" autoComplete="name" required minLength={2} /></label><label>Business Name<span>*</span><input name="business" autoComplete="organization" required minLength={2} /></label><label>Email Address<span>*</span><input name="email" type="email" autoComplete="email" required /></label><label>Phone Number <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" /></label>{!compact && <><label>Website <small>(optional)</small><input name="website" type="url" inputMode="url" placeholder="https://" /></label><label>Service Interested In<span>*</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}<option value="not-sure">Not sure yet</option></select></label><label>Approximate Marketing Budget <small>(optional)</small><select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under $1,000/month</option><option>$1,000–$3,000/month</option><option>$3,000–$7,500/month</option><option>$7,500+/month</option></select></label><span /></>}</div>
    <label>Tell Me About Your Business<span>*</span><textarea name="business_details" required minLength={20} rows={compact ? 4 : 5} /></label>{!compact && <label>Main Marketing Challenge<span>*</span><textarea name="challenge" required minLength={15} rows={4} /></label>}
    {status.type === "success" && <div className="form-notice success" role="status"><CheckCircle2 size={18} /> {status.message}</div>}{status.type === "error" && <div className="form-notice error" role="alert"><AlertCircle size={18} /> {status.message}</div>}
    <button className="button" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? <><LoaderCircle className="spin" size={18} /> Sending…</> : <><Send size={18} /> Send My Message</>}</button><p className="form-privacy">Your information is used only to respond to your enquiry. See the <a href="/privacy-policy">Privacy Policy</a>.</p>
  </form>;
}
