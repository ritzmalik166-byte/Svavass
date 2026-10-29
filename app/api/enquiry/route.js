import { validateEnquiry } from '@/lib/enquiry';

// Receives site enquiries. Set ENQUIRY_WEBHOOK_URL (CRM, Zapier, Google Apps Script,
// etc.) to forward each lead as JSON; without it, leads are logged on the server only.
export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (data.company) return Response.json({ ok: true });

  const errors = validateEnquiry(data);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const lead = {
    name: String(data.name).trim(),
    phone: String(data.phone).trim(),
    email: String(data.email ?? '').trim(),
    enquiringFor: data.enquiringFor,
    visitDate: String(data.visitDate ?? '').trim(),
    message: String(data.message ?? '').trim(),
    source: 'svavass-website',
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error('[enquiry] forwarding failed', err);
      return Response.json(
        { ok: false, error: 'We could not send your enquiry just now. Please call us instead.' },
        { status: 502 }
      );
    }
  } else {
    console.info('[enquiry] received (no ENQUIRY_WEBHOOK_URL set)', lead);
  }

  return Response.json({ ok: true });
}
