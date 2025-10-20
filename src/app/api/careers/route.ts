import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Zod validation schema
const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  linkedin: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  position: z.string().min(1, 'Position is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// File validation
const validateFile = (file: File | null, required: boolean = false) => {
  if (!file || file.size === 0) {
    if (required) {
      throw new Error('File is required');
    }
    return false;
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    throw new Error('File size must be less than 5MB');
  }

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('File must be PDF or DOC format');
  }

  return true;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      linkedin: formData.get('linkedin') as string,
      position: formData.get('position') as string,
      message: formData.get('message') as string,
    };

    // Validate data with Zod
    const validatedData = applicationSchema.parse(data);

    const resume = formData.get('resume') as File | null;
    const coverLetter = formData.get('coverLetter') as File | null;

    // Validate files
    try {
      validateFile(resume, true); // Resume is required
      if (coverLetter && coverLetter.size > 0) {
        validateFile(coverLetter, false); // Cover letter is optional
      }
    } catch (fileError) {
      return NextResponse.json(
        { error: fileError instanceof Error ? fileError.message : 'File validation failed' },
        { status: 400 }
      );
    }

    // Convert files to base64 for email attachments
    const attachments: Array<{
      filename: string;
      content: string;
    }> = [];

    if (resume && resume.size > 0) {
      const resumeBuffer = await resume.arrayBuffer();
      const resumeBase64 = Buffer.from(resumeBuffer).toString('base64');
      attachments.push({
        filename: resume.name,
        content: resumeBase64,
      });
    }

    // Add cover letter if provided
    if (coverLetter && coverLetter.size > 0) {
      const coverLetterBuffer = await coverLetter.arrayBuffer();
      const coverLetterBase64 = Buffer.from(coverLetterBuffer).toString('base64');
      attachments.push({
        filename: coverLetter.name,
        content: coverLetterBase64,
      });
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'ITA Groupe Careers <onboarding@resend.dev>',
      to: ['hello.itagroupe@gmail.com'],
      replyTo: validatedData.email,
      subject: `New Job Application: ${validatedData.position} - ${validatedData.fullName}`,
      attachments,
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
              .badge {
                display: inline-block;
                background: #239D89;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-top: 5px;
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
              <h1 style="margin: 0; font-size: 24px;">🎯 New Job Application</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">ITA Groupe Careers Portal</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Position Applied For</div>
                <div class="value">
                  <strong style="font-size: 18px; color: #163C2E;">${validatedData.position}</strong>
                </div>
              </div>

              <div class="field">
                <div class="label">Candidate Name</div>
                <div class="value">${validatedData.fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">
                  <a href="mailto:${validatedData.email}" style="color: #239D89; text-decoration: none;">${validatedData.email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">
                  <a href="tel:${validatedData.phone}" style="color: #239D89; text-decoration: none;">${validatedData.phone}</a>
                </div>
              </div>
              
              ${validatedData.linkedin ? `
              <div class="field">
                <div class="label">LinkedIn Profile</div>
                <div class="value">
                  <a href="${validatedData.linkedin}" target="_blank" style="color: #239D89; text-decoration: none;">${validatedData.linkedin}</a>
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Cover Message</div>
                <div class="message-box">${validatedData.message}</div>
              </div>

              <div class="field">
                <div class="label">Attachments</div>
                <div class="value">
                  ${resume && resume.size > 0 ? `<span class="badge">📄 ${resume.name}</span>` : ''}
                  ${coverLetter && coverLetter.size > 0 ? `<span class="badge">📄 ${coverLetter.name}</span>` : ''}
                </div>
              </div>
              
              <div class="footer">
                <p><strong>Application received via ITA Groupe Careers Portal</strong></p>
                <p>Reply directly to this email to contact the candidate.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send application email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully', 
        id: emailData?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const fieldErrors = error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: fieldErrors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}