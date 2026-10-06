import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({ name: z.string().trim().min(2).max(100), business: z.string().trim().min(2).max(160), email: z.string().email().max(200), phone: z.string().max(60).optional().default(""), website: z.string().max(300).optional().default(""), service: z.string().max(100).optional().default("general"), budget: z.string().max(100).optional().default(""), business_details: z.string().trim().min(20).max(5000), challenge: z.string().max(5000).optional().default(""), company_website: z.string().max(0).optional().default("") });

export async function POST(request: Request) {
  try {
    const parsed = ContactSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
    const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    if (!endpoint) return NextResponse.json({ message: "Online enquiries are being connected. Please use the email option on this page in the meantime." }, { status: 503 });
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.CONTACT_FORM_API_KEY ? { Authorization: `Bearer ${process.env.CONTACT_FORM_API_KEY}` } : {}) }, body: JSON.stringify({ ...parsed.data, source: "website-contact" }) });
    if (!response.ok) return NextResponse.json({ message: "Your message could not be sent right now. Please try again or use the email option." }, { status: 502 });
    return NextResponse.json({ message: "Thanks—your message has been sent. I’ll be in touch soon." });
  } catch { return NextResponse.json({ message: "Your message could not be sent right now. Please try again." }, { status: 500 }); }
}
