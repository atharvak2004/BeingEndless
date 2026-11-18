/**
 * Receives Personal Consultation Requests from /contact-8.
 *
 * Set CONSULTATION_WEBHOOK_URL (e.g. a Zapier/Make/Slack/Formspree webhook, or your own email
 * service endpoint) to forward submissions. Without it, submissions are only logged on the server.
 */
const REQUIRED = ["firstName", "lastName", "email", "phone", "since", "preferredTime"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 500) : "");
  const data = {
    firstName: str(body.firstName),
    lastName: str(body.lastName),
    email: str(body.email),
    identity: str(body.identity),
    phone: str(body.phone),
    support: Array.isArray(body.support) ? body.support.map(str).filter(Boolean).slice(0, 10) : [],
    since: str(body.since),
    preferredTime: str(body.preferredTime),
    submittedAt: new Date().toISOString(),
  };

  const missing = REQUIRED.filter((k) => !data[k]);
  if (missing.length || data.support.length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ ok: false, error: "Missing or invalid fields", missing }, { status: 422 });
  }

  const webhook = process.env.CONSULTATION_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) return Response.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  } else {
    console.info("[consultation] New request (set CONSULTATION_WEBHOOK_URL to forward):", data.email);
  }

  return Response.json({ ok: true });
}
