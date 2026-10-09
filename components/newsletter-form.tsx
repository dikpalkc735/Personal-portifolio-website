"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/components/analytics";
import { siteConfig } from "@/lib/site-data";

const formSubmitEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim()
  || `https://formsubmit.co/ajax/${siteConfig.email}`;

export function NewsletterForm() {
  const [message, setMessage] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setMessage(""); const form = event.currentTarget; const email = String(new FormData(form).get("email") ?? ""); try { const response = await fetch(formSubmitEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ _subject: "New Newsletter Signup — Digital Dikpal", _template: "table", _url: window.location.href, email, source: "website-newsletter" }) }); const result = await response.json().catch(() => null) as { success?: boolean | string } | null; const succeeded = response.ok && (result?.success == null || String(result.success).toLowerCase() === "true"); if (!succeeded) throw new Error("Sign-up is unavailable right now. Please try again."); form.reset(); setMessage("You’re on the list. Watch your inbox for practical marketing insights."); trackEvent("newsletter_signup"); } catch (error) { setMessage(error instanceof Error ? error.message : "Please try again."); } finally { setLoading(false); } }
  return <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" required placeholder="you@business.com" /><button className="button" disabled={loading}>{loading ? "Joining…" : "Get practical insights"}</button>{message && <p role="status">{message}</p>}</form>;
}
