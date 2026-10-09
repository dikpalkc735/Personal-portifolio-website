import { env } from "cloudflare:workers";

export type ContactSubmission = {
  name: string;
  business: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  budget: string;
  business_details: string;
  challenge: string;
  form_source: string;
};

export async function saveContactSubmission(submission: ContactSubmission) {
  if (!env.DB) throw new Error("Consultation storage is unavailable.");

  return env.DB.prepare(`
    INSERT INTO consultation_requests
      (name, business, email, phone, website, service, budget, business_details, challenge, source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    submission.name,
    submission.business,
    submission.email,
    submission.phone,
    submission.website,
    submission.service,
    submission.budget,
    submission.business_details,
    submission.challenge,
    submission.form_source,
  ).run();
}

export async function saveNewsletterSubscriber(email: string) {
  if (!env.DB) throw new Error("Newsletter storage is unavailable.");

  return env.DB.prepare(`
    INSERT OR IGNORE INTO newsletter_subscribers (email, source)
    VALUES (?, ?)
  `).bind(email, "website-newsletter").run();
}
