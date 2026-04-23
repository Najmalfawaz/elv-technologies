import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CONTACT_CONFIG } from '@/lib/contact-config';
import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, isNotRobot, source = 'website' } = body;

    // Server-side validation
    if (!name || !email || !subject || !message || !isNotRobot) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save to database
    try {
      await prisma.inquiry.create({
        data: {
          name,
          email,
          phone,
          subject,
          message,
          source,
        },
      });
    } catch (dbError) {
      console.error('Failed to save inquiry to database:', dbError);
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL 
      ? `${name} (${email}) <${process.env.CONTACT_FROM_EMAIL}>` 
      : `${name} (${email}) <onboarding@resend.dev>`;

    const sourceName = source === 'chatbot' ? 'ETS Chatbot' : 'Contact Form';
    const emailSubject = `New Lead from ${sourceName}`;
    const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_CONFIG.toEmail;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #d32f2f; margin-top: 0;">New Lead from ${sourceName}</h2>
          <p style="font-size: 16px; font-weight: bold; color: #555;">Project Details: ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p>Hello Team,</p>
          <p>You have received a new message from your ${sourceName.toLowerCase()}.</p>
          
          <p><strong>Details:</strong></p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</li>
            <li style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</li>
            <li style="margin-bottom: 8px;"><strong>number:</strong> ${phone || 'Not provided'}</li>
            <li style="margin-bottom: 8px;"><strong>Subject:</strong> ${subject}</li>
          </ul>
          
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #d32f2f;">
            ${message.replace(/\n/g, '<br />')}
          </div>
          
          <p style="margin-top: 30px;">Thankyou!!</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 10px;" />
          <p style="color: #888; font-size: 12px; font-style: italic;">
            This message was sent from the ${sourceName.toLowerCase()} by <strong>${name}</strong> (${email}).<br />
            You can reply directly to this email to contact them.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
