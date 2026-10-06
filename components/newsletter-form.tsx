"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/components/analytics";

export function NewsletterForm() {
  const [message, setMessage] = useState(""); const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setMessage(""); const form = event.currentTarget; const email = String(new FormData(form).get("email") ?? ""); try { const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) }); const result = await response.json() as { message?: string }; if (!response.ok) throw new Error(result.message); form.reset(); setMessage(result.message ?? "You’re on the list."); trackEvent("newsletter_signup"); } catch (error) { setMessage(error instanceof Error ? error.message : "Please try again."); } finally { setLoading(false); } }
  return <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" required placeholder="you@business.com" /><button className="button" disabled={loading}>{loading ? "Joining…" : "Get practical insights"}</button>{message && <p role="status">{message}</p>}</form>;
}
