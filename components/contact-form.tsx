"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { services, siteConfig } from "@/lib/site-data";
import { trackEvent } from "@/components/analytics";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };
type ContactFormProps = { compact?: boolean; variant?: "contact" | "consultation" };
type FormSubmitResult = { success?: boolean | string; message?: string };

const formSubmitEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim()
  || `https://formsubmit.co/ajax/${siteConfig.email}`;

export function ContactForm({ compact = false, variant = "contact" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const isConsultation = variant === "consultation";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus({ type: "loading" });
    const form = event.currentTarget; const body = Object.fromEntries(new FormData(form));
    body.form_source = isConsultation ? "consultation-booking" : "website-contact";
    if (String(body.company_website ?? "").trim()) { setStatus({ type: "success", message: "Thank you. Your message has been received." }); return; }
    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: isConsultation ? `New Free Consultation Request — ${body.business}` : `New Website Enquiry — ${body.business}`,
          _template: "table",
          _replyto: body.email,
          _url: window.location.href,
          name: body.name,
          email: body.email,
          business: body.business,
          phone: body.phone || "Not provided",
          website: body.website || "Not provided",
          service: body.service,
          marketing_budget: body.budget || "Not provided",
          business_details: body.business_details,
          main_marketing_challenge: body.challenge || "Not provided",
          form_source: body.form_source,
        }),
      });
      const result = await response.json().catch(() => null) as FormSubmitResult | null;
      const succeeded = response.ok && (result?.success == null || String(result.success).toLowerCase() === "true");
      if (!succeeded) throw new Error("Your message could not be sent right now. Please try again or email me directly.");
      form.reset(); setStatus({ type: "success", message: isConsultation ? "Thanks—your free consultation request has been sent. I’ll be in touch soon." : "Thanks—your message has been sent to my inbox. I’ll be in touch soon." }); trackEvent(isConsultation ? "consultation_booking_start" : "contact_form_submit", { service: body.service });
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : `Please email ${siteConfig.email} directly.` }); }
  }

  return <form id={isConsultation ? "consultation-form" : undefined} className={`contact-form ${compact ? "form-compact" : ""} ${isConsultation ? "consultation-form" : ""}`} onSubmit={submit}>
    <div className="honeypot" aria-hidden="true"><label>Company website<input name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid"><label>Full Name<span>*</span><input name="name" autoComplete="name" required minLength={2} /></label><label>Business Name<span>*</span><input name="business" autoComplete="organization" required minLength={2} /></label><label>Email Address<span>*</span><input name="email" type="email" autoComplete="email" required /></label><label>Phone Number <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" /></label>{!compact && !isConsultation && <label>Website <small>(optional)</small><input name="website" type="url" inputMode="url" placeholder="https://" /></label>}{(!compact || isConsultation) && <label>Service Interested In<span>*</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}<option value="not-sure">Not sure yet</option></select></label>}{!compact && !isConsultation && <label>Approximate Marketing Budget <small>(optional)</small><select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under $1,000/month</option><option>$1,000–$3,000/month</option><option>$3,000–$7,500/month</option><option>$7,500+/month</option></select></label>}</div>
    <label>Tell Me About Your Business<span>*</span><textarea name="business_details" required minLength={20} rows={isConsultation ? 3 : compact ? 4 : 5} placeholder={isConsultation ? "What does your business do, and who are your customers?" : undefined} /></label>{(!compact || isConsultation) && <label>Main Marketing Challenge<span>*</span><textarea name="challenge" required minLength={15} rows={isConsultation ? 3 : 4} placeholder={isConsultation ? "What would you most like to improve?" : undefined} /></label>}
    {status.type === "success" && <div className="form-notice success" role="status"><CheckCircle2 size={18} /> {status.message}</div>}{status.type === "error" && <div className="form-notice error" role="alert"><AlertCircle size={18} /> {status.message}</div>}
    <button className="button" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? <><LoaderCircle className="spin" size={18} /> Submitting…</> : <><Send size={18} /> {isConsultation ? "Submit My Free Consultation Request" : "Send My Message"}</>}</button><p className="form-privacy">Your information is used only to respond to your enquiry. See the <a href="/privacy-policy">Privacy Policy</a>.</p>
  </form>;
}
