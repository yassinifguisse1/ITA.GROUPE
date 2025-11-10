import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema for get-your-website form
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(8, 'Phone number is required'), // Phone number includes country code, so min 8 is reasonable
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = formSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.issues,
          message: 'Please check your form data and try again'
        },
        { status: 400 }
      );
    }

    const { fullName, email, phoneNumber } = validationResult.data;

    // Prepare email content
    const emailSubject = `🎁 New Lead from Get Your Website Landing Page: ${fullName}`;
    const replyToEmail = email;
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 10px 10px;
            }
            .priority-badge {
              background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
              border: 2px solid #f59e0b;
              color: #92400e;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 20px;
              text-align: center;
              font-weight: 700;
              font-size: 16px;
            }
            .field {
              margin-bottom: 20px;
              padding: 20px;
              background: white;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            .label {
              font-weight: 600;
              color: #059669;
              margin-bottom: 8px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value {
              color: #1f2937;
              font-size: 18px;
              font-weight: 500;
            }
            .value a {
              color: #059669;
              text-decoration: none;
              font-weight: 600;
            }
            .value a:hover {
              text-decoration: underline;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #059669 0%, #0d9488 100%);
              color: white;
              padding: 12px 24px;
              border-radius: 6px;
              text-decoration: none;
              font-weight: 600;
              margin-top: 10px;
            }
            .info-box {
              background: #eff6ff;
              border-left: 4px solid #3b82f6;
              padding: 15px;
              margin-top: 20px;
              border-radius: 4px;
            }
            .info-box p {
              margin: 5px 0;
              color: #1e40af;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">🎁 New Website Lead</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.95; font-size: 16px;">Get Your Website Landing Page</p>
          </div>
          
          <div class="content">
            <div class="priority-badge">
              ⚡ HIGH PRIORITY - $199 Website Package Lead
            </div>
            
            <div class="field">
              <div class="label">👤 Full Name</div>
              <div class="value">${fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email Address</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone Number</div>
              <div class="value">
                <a href="tel:${phoneNumber}">${phoneNumber}</a>
              </div>
            </div>
            
            <div class="info-box">
              <p><strong>📌 Lead Source:</strong> Get Your Website Landing Page</p>
              <p><strong>💰 Package Interest:</strong> $199 Website Package</p>
              <p><strong>⏰ Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                timeZone: 'UTC',
                dateStyle: 'full',
                timeStyle: 'long'
              })}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: Your Website Inquiry&body=Hi ${fullName},%0D%0A%0D%0AThank you for your interest in our $199 website package!" class="cta-button">
                Reply to Lead
              </a>
            </div>
            
            <div class="footer">
              <p><strong>Next Steps:</strong></p>
              <p>1. Contact the lead within 24 hours</p>
              <p>2. Discuss their website requirements</p>
              <p>3. Provide a custom proposal</p>
              <p style="margin-top: 15px; color: #9ca3af;">This lead came from your Facebook Ads campaign landing page.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    console.log('📧 Sending email to:', process.env.TO_EMAIL || 'hello.itagroupe@gmail.com');
    console.log('📧 From:', process.env.FROM_EMAIL || 'ITA Groupe <noreply@itagroupe.com>');
    console.log('📧 Subject:', emailSubject);
    
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'ITA Groupe <noreply@itagroupe.com>',
      to: [process.env.TO_EMAIL || 'hello.itagroupe@gmail.com'],
      replyTo: replyToEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: error.message || 'Unknown error',
          message: 'Unable to send your message. Please try again later.'
        },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', data?.id);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you soon.', 
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error',
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}

