import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting: max 3 submissions per IP per hour
const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimit.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );
  rateLimit.set(ip, timestamps);

  if (timestamps.length >= RATE_LIMIT_MAX) {
    return true;
  }
  timestamps.push(now);
  return false;
}

export async function POST(request: Request) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const {
    "your-name": name,
    "your-email": email,
    "your-message": message,
    website,
  } = body;

  // Honeypot: if the hidden "website" field is filled, it's a bot
  if (website) {
    // Pretend success so bots don't know they were caught
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Emaculata Website <onboarding@resend.dev>",
    to: "miriam.beecham@gmail.com",
    replyTo: email,
    subject: `New booking request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message || "(no message)"}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
