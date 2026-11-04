import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

// Use the private SERVICE_ROLE_KEY here so it securely bypasses RLS on the server
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // 1. Save lead to Supabase database securely
    const { error: dbError } = await supabase
      .from('leads')
      .insert([{ name, email, phone, service, message }]);

    if (dbError) {
      console.error("Supabase Database Error:", dbError);
      return NextResponse.json({ success: false, message: 'Failed to save lead to database' }, { status: 500 });
    }

    // 2. Send instant email notification via Resend
    const emailResponse = await resend.emails.send({
      from: 'Clearby Research <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'eclearbyresearchconsulting@gmail.com'],
      subject: `New Enquiry: ${service || 'General'} from ${name}`,
      html: `
        <h2>New Client Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service Requested:</strong> ${service || 'N/A'}</p>
        <p><strong>Research Brief:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #2E1A47;">
          ${message || 'N/A'}
        </blockquote>
      `,
    });

    console.log("Lead successfully stored and email dispatched:", emailResponse);

    return NextResponse.json({ success: true, message: 'Enquiry processed successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}