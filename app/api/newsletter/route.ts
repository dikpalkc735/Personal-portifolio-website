import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const parsed = z.object({ email: z.string().email().max(200) }).safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    const endpoint = process.env.NEWSLETTER_ENDPOINT;
    if (!endpoint) return NextResponse.json({ message: "Newsletter sign-up is being connected. Please check back soon." }, { status: 503 });
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.NEWSLETTER_API_KEY ? { Authorization: `Bearer ${process.env.NEWSLETTER_API_KEY}` } : {}) }, body: JSON.stringify({ email: parsed.data.email, source: "website-newsletter" }) });
    if (!response.ok) return NextResponse.json({ message: "Sign-up is unavailable right now. Please try again later." }, { status: 502 });
    return NextResponse.json({ message: "You’re on the list. Watch your inbox for practical marketing insights." });
  } catch { return NextResponse.json({ message: "Sign-up is unavailable right now." }, { status: 500 }); }
}
