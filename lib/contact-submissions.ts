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
  // Email delivery is the portable source of truth on Vercel. This hook is
  // intentionally retained so a database adapter can be added later without
  // changing the form routes.
  void submission;
}

export async function saveNewsletterSubscriber(email: string) {
  void email;
}
