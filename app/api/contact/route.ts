import { NextResponse } from "next/server";
import { z } from "zod";
import { saveContactSubmission } from "@/lib/contact-submissions";

const ContactSchema = z.object({ name: z.string().trim().min(2).max(100), business: z.string().trim().min(2).max(160), email: z.string().email().max(200), phone: z.string().max(60).optional().default(""), website: z.string().max(300).optional().default(""), service: z.string().max(100).optional().default("general"), budget: z.string().max(100).optional().default(""), business_details: z.string().trim().min(20).max(5000), challenge: z.string().max(5000).optional().default(""), company_website: z.string().max(0).optional().default(""), form_source: z.enum(["website-contact", "consultation-booking"]).optional().default("website-contact") });

export async function POST(request: Request) {
  try {
    const parsed = ContactSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
    const { company_website: _honeypot, ...submission } = parsed.data;
    await saveContactSubmission(submission);

    const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (endpoint) {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.CONTACT_FORM_API_KEY ? { Authorization: `Bearer ${process.env.CONTACT_FORM_API_KEY}` } : {}) }, body: JSON.stringify({ ...submission, source: submission.form_source }) });
      if (!response.ok) console.error("Contact notification endpoint returned", response.status);
    }

    return NextResponse.json({ message: submission.form_source === "consultation-booking" ? "Thanks—your free consultation request has been submitted. I’ll be in touch soon." : "Thanks—your message has been sent. I’ll be in touch soon." });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json({ message: "Your request could not be submitted right now. Please try again." }, { status: 500 });
  }
}
