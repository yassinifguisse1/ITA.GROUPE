import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Create validation schemas for each language
const createValidationSchema = (language: "en" | "fr" | "pl") => {
  const messages = {
    en: {
      fullName: "Full name must be at least 2 characters",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      subject: "Subject must be at least 5 characters",
      service: "Please select a service",
      message: "Message must be at least 10 characters",
    },
    fr: {
      fullName: "Le nom complet doit contenir au moins 2 caractères",
      email: "Veuillez entrer une adresse email valide",
      phone: "Veuillez entrer un numéro de téléphone valide",
      subject: "Le sujet doit contenir au moins 5 caractères",
      service: "Veuillez sélectionner un service",
      message: "Le message doit contenir au moins 10 caractères",
    },
    pl: {
      fullName: "Imię i nazwisko musi mieć co najmniej 2 znaki",
      email: "Proszę podać prawidłowy adres email",
      phone: "Proszę podać prawidłowy numer telefonu",
      subject: "Temat musi mieć co najmniej 5 znaków",
      service: "Proszę wybrać usługę",
      message: "Wiadomość musi mieć co najmniej 10 znaków",
    }
  };

  const msg = messages[language];

  return z.object({
    fullName: z.string().min(2, msg.fullName),
    email: z.string().email(msg.email),
    phone: z.string().optional().refine((val) => {
      if (!val) return true; // Optional field
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      return phoneRegex.test(val.replace(/[\s\-\(\)]/g, ''));
    }, msg.phone),
    company: z.string().optional(),
    subject: z.string().min(5, msg.subject),
    service: z.string().min(1, msg.service),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    message: z.string().min(10, msg.message),
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract language from request body or default to English
    const language = body.language || 'en';
    
    // Validate the request body with language-specific schema
    const validationSchema = createValidationSchema(language as "en" | "fr" | "pl");
    const validationResult = validationSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const { 
      fullName, 
      email, 
      phone, 
      company, 
      subject, 
      service, 
      budget, 
      timeline, 
      message 
    } = validationResult.data;

    // Send email using Resend (following official documentation format)
    console.log('📧 Sending email to:', 'hello.itagroupe@gmail.com');
    console.log('📧 From:', 'ITA Groupe Contact <noreply@itagroupe.com>');
    console.log('📧 Subject:', `New Contact Form Submission: ${subject}`);
    
    const { data, error } = await resend.emails.send({
      from: 'ITA Groupe Contact <noreply@itagroupe.com>',
      to: ['hello.itagroupe@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
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
                background: linear-gradient(135deg, #163C2E 0%, #239D89 100%);
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
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              }
              .label {
                font-weight: 600;
                color: #163C2E;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                color: #4b5563;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                margin-top: 10px;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">ITA Groupe Website</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #239D89; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #239D89; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              ${company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">${service}</div>
              </div>
              
              ${budget ? `
              <div class="field">
                <div class="label">Estimated Budget</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              
              ${timeline ? `
              <div class="field">
                <div class="label">Project Timeline</div>
                <div class="value">${timeline}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Project Details</div>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the ITA Groupe contact form.</p>
                <p>Reply directly to this email to contact the sender.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: error.message || 'Unknown error'
        },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully:', data?.id);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully', 
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}