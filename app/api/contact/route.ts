import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    // Initialize Resend inside the handler to prevent Next.js build-time errors 
    // when environment variables might not be fully loaded during static generation.
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await req.json();
    const { name, phone, appliance, zip, issue } = body;

    if (!name || !phone || !appliance) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Replace onboarding@resend.dev with your verified domain once you have one
    // e.g., 'Contact Form <contact@yourdomain.com>'
    const fromEmail = 'Four States Appliance <onboarding@resend.dev>';
    
    // Replace this with your actual email address where you want to receive the leads
    const toEmail = process.env.CONTACT_EMAIL || 'votre.email@gmail.com';

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[New Lead] Appliance Repair - ${appliance.toUpperCase()} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2563eb; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Service Request</h1>
          </div>
          <div style="padding: 24px; background-color: #f8fafc;">
            <p style="margin-top: 0; color: #475569; font-size: 16px;">You have received a new service request from your website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a; width: 30%;">Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #334155;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">Phone</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #334155;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">Appliance</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #334155;">${appliance}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0f172a;">Zip Code</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #334155;">${zip}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #0f172a; vertical-align: top;">Issue</td>
                <td style="padding: 12px; color: #334155; white-space: pre-wrap;">${issue || 'No details provided.'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 32px; text-align: center;">
              <a href="tel:${phone}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Call Customer Now</a>
            </div>
          </div>
        </div>
      `,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
