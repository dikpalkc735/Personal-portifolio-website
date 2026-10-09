import { NextResponse } from "next/server";
import { z } from "zod";
import { saveNewsletterSubscriber } from "@/lib/contact-submissions";

export async function POST(request: Request) {
  try {
    const parsed = z.object({ email: z.string().email().max(200) }).safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    await saveNewsletterSubscriber(parsed.data.email);

    const endpoint = process.env.NEWSLETTER_ENDPOINT;
    if (endpoint) {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.NEWSLETTER_API_KEY ? { Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}` } : {}) }, body: JSON.stringify({ email: parsed.data.email, source: "website-newsletter" }) });
      if (!response.ok) console.error("Newsletter notification endpoint returned", response.status);
    }

    return NextResponse.json({ message: "You’re on the list. Watch your inbox for practical marketing insights." });
  } catch (error) {
    console.error("Newsletter sign-up failed", error);
    return NextResponse.json({ message: "Sign-up is unavailable right now. Please try again." }, { status: 500 });
  }
}
