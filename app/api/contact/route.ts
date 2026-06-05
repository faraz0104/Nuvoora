import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, projectType, budget, message, hp } = body;
  const errors: Record<string, string> = {};

  if (hp) {
    return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
  }

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Please provide your name.';
  }
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!projectType || typeof projectType !== 'string') {
    errors.projectType = 'Please select a project type.';
  }
  if (!budget || typeof budget !== 'string') {
    errors.budget = 'Please select your budget range.';
  }
  if (!message || typeof message !== 'string' || message.trim().length < 20) {
    errors.message = 'Tell us more so we can scope the right solution.';
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!recipient || !apiKey) {
    return NextResponse.json(
      { error: 'Email delivery is not configured. Set RESEND_API_KEY and CONTACT_RECIPIENT_EMAIL.' },
      { status: 500 },
    );
  }

  const payload = {
    from: 'contact@aiagency.studio',
    to: recipient,
    subject: `New enquiry from ${name} – Aiagency website`,
    reply_to: email,
    html: `
      <div style="font-family: system-ui, sans-serif; color: #0f172a;">
        <h1>New enquiry from Aiagency</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Project type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json({ error: 'Failed to send enquiry email.', detail: errorBody }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
