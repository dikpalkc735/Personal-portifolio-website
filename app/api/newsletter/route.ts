import { NextResponse } from "next/server";
import { z } from "zod";
import { saveNewsletterSubscriber } from "@/lib/contact-submissions";

export async function POST(request: Request) {
  try {
    const parsed = z.object({ email: z.string().email().max(200) }).safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    await saveNewsletterSubscriber(parsed.data.email);

    const endpoint = process.env.NEWSLETTER_ENDPOINT?.trim() || process.env.CONTACT_FORM_ENDPOINT?.trim() || "https://formsubmit.co/ajax/dikpalkc735@gmail.com";
    const sourceUrl = "https://ai-marketing-growth-expert.willparker56.chatgpt.site/blog";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://ai-marketing-growth-expert.willparker56.chatgpt.site",
        Referer: sourceUrl,
        ...(process.env.NEWSLETTER_API_KEY ? { Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}` } : {}),
      },
      body: JSON.stringify({
        _subject: "New Newsletter Signup — Digital Dikpal",
        _template: "table",
        _url: sourceUrl,
        email: parsed.data.email,
        source: "website-newsletter",
      }),
    });
    const deliveryResult = await response.json().catch(() => null) as { success?: boolean | string; message?: string } | null;
    const deliverySucceeded = response.ok && (deliveryResult?.success == null || String(deliveryResult.success).toLowerCase() === "true");
    if (!deliverySucceeded) {
      console.error("Newsletter email delivery failed", response.status, deliveryResult?.message ?? "Unknown endpoint response");
      return NextResponse.json({ message: "Sign-up is unavailable right now. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ message: "You’re on the list. Watch your inbox for practical marketing insights." });
  } catch (error) {
    console.error("Newsletter sign-up failed", error);
    return NextResponse.json({ message: "Sign-up is unavailable right now. Please try again." }, { status: 500 });
  }
}
