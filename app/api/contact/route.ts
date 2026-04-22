import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CONTACT_CONFIG } from '@/lib/contact-config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, isNotRobot } = body;

    // Server-side validation
    if (!name || !email || !subject || !message || !isNotRobot) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL 
      ? `${name} (${email}) <${process.env.CONTACT_FROM_EMAIL}>` 
      : `${name} (${email}) <onboarding@resend.dev>`;

    const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_CONFIG.toEmail;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: subject,
      html: `
        <p style="white-space: pre-wrap;">${message}</p>
        <br />
        <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">
          <em>This message was sent from the contact form by <strong>${name}</strong> (${email}).<br />You can reply directly to this email to contact them.</em>
        </p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
