import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();

    if (!apiKey || apiKey === '' || apiKey.startsWith('re_your_')) {
      console.warn('RESEND_API_KEY is not set or using placeholder in .env.local');
      // Graceful fallback for local development / preview mode
      return NextResponse.json(
        {
          success: true,
          message: 'Message received! (Note: Add your RESEND_API_KEY in .env.local for live delivery)',
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || 'premkalagate52@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Message from ${name} via Portfolio`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #4f46e5; margin-top: 0; padding-bottom: 12px; border-bottom: 2px solid #e0e7ff; font-size: 20px;">
            📬 New Portfolio Contact Message
          </h2>
          <div style="margin: 16px 0; font-size: 14px; line-height: 1.6; color: #334155;">
            <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
          </div>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #4f46e5;">
            <strong style="color: #1e293b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</strong>
            <p style="margin-top: 8px; margin-bottom: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent from your portfolio contact form • Built with Next.js & Resend
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend email error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: err?.message || 'Internal server error while sending email' },
      { status: 500 }
    );
  }
}
