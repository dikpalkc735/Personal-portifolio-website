import { NextResponse } from "next/server";
import { z } from "zod";
import { saveContactSubmission } from "@/lib/contact-submissions";

const ContactSchema = z.object({ name: z.string().trim().min(2).max(100), business: z.string().trim().min(2).max(160), email: z.string().email().max(200), phone: z.string().max(60).optional().default(""), website: z.string().max(300).optional().default(""), service: z.string().max(100).optional().default("general"), budget: z.string().max(100).optional().default(""), business_details: z.string().trim().min(20).max(5000), challenge: z.string().max(5000).optional().default(""), company_website: z.string().max(0).optional().default(""), form_source: z.enum(["website-contact", "consultation-booking"]).optional().default("website-contact") });

export async function POST(request: Request) {
  try {
    const parsed = ContactSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
    const { company_website: _honeypot, ...submission } = parsed.data;
    void _honeypot;

    const endpoint = process.env.CONTACT_FORM_ENDPOINT?.trim();
    if (!endpoint) {
      return NextResponse.json({ message: "Email delivery is temporarily unavailable. Please email dikpalkc735@gmail.com directly." }, { status: 503 });
    }

    const isConsultation = submission.form_source === "consultation-booking";
    const formSubmitPayload = {
      _subject: isConsultation ? `New Free Consultation Request — ${submission.business}` : `New Website Enquiry — ${submission.business}`,
      _template: "table",
      _url: isConsultation ? "https://ai-marketing-growth-expert.willparker56.chatgpt.site/book-consultation" : "https://ai-marketing-growth-expert.willparker56.chatgpt.site/contact",
      _replyto: submission.email,
      name: submission.name,
      email: submission.email,
      business: submission.business,
      phone: submission.phone || "Not provided",
      website: submission.website || "Not provided",
      service: submission.service,
      marketing_budget: submission.budget || "Not provided",
      business_details: submission.business_details,
      main_marketing_challenge: submission.challenge || "Not provided",
      form_source: submission.form_source,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.CONTACT_FORM_API_KEY ? { Authorization: `Bearer ${process.env.CONTACT_FORM_API_KEY}` } : {}),
      },
      body: JSON.stringify(formSubmitPayload),
    });
    const deliveryResult = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;
    if (!response.ok || deliveryResult?.success === false) {
      console.error("Contact email delivery failed", response.status, deliveryResult?.message ?? "Unknown FormSubmit response");
      return NextResponse.json({ message: "Your message could not be emailed right now. Please email dikpalkc735@gmail.com directly." }, { status: 502 });
    }

    try {
      await saveContactSubmission(submission);
    } catch (storageError) {
      console.error("Contact submission email was sent, but the database backup failed", storageError);
    }

    return NextResponse.json({ message: isConsultation ? "Thanks—your free consultation request has been sent. I’ll be in touch soon." : "Thanks—your message has been sent to my inbox. I’ll be in touch soon." });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ message: "Your request could not be submitted right now. Please try again." }, { status: 500 });
  }
}
