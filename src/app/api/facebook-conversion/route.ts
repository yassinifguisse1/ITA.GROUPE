import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface ConversionData {
  eventName: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  eventSourceUrl?: string;
  fbp?: string; // Facebook browser ID
  fbc?: string; // Facebook click ID
}

// Hash data with SHA256
function hashData(data: string): string {
  return crypto
    .createHash('sha256')
    .update(data.toLowerCase().trim())
    .digest('hex');
}

// Normalize phone number (remove spaces, dashes, parentheses)
function normalizePhone(phone: string): string {
  return phone.replace(/[\s\-\(\)]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const body: ConversionData = await request.json();
    
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const testEventCode = process.env.FACEBOOK_TEST_EVENT_CODE;

    if (!pixelId || !accessToken) {
      console.error('Missing Facebook credentials');
      return NextResponse.json(
        { error: 'Facebook credentials not configured' },
        { status: 500 }
      );
    }

    // Get client IP and user agent
    const clientIp = 
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '';
    
    const userAgent = request.headers.get('user-agent') || '';

    // Prepare user data
    const userData: any = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };

    // Add hashed email if provided
    if (body.email) {
      userData.em = [hashData(body.email)];
    }

    // Add hashed phone if provided
    if (body.phone) {
      const normalizedPhone = normalizePhone(body.phone);
      userData.ph = [hashData(normalizedPhone)];
    }

    // Add hashed first name if provided
    if (body.firstName) {
      userData.fn = [hashData(body.firstName)];
    }

    // Add hashed last name if provided
    if (body.lastName) {
      userData.ln = [hashData(body.lastName)];
    }

    // Add Facebook browser and click IDs if available
    if (body.fbp) {
      userData.fbp = body.fbp;
    }
    if (body.fbc) {
      userData.fbc = body.fbc;
    }

    // Prepare event data
    const eventData: any = {
      event_name: body.eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: body.eventSourceUrl || request.headers.get('referer') || '',
      action_source: 'website',
      user_data: userData,
    };

    // Prepare request payload
    const payload: any = {
      data: [eventData],
      access_token: accessToken,
    };

    // Add test event code if in testing mode
    if (testEventCode) {
      payload.test_event_code = testEventCode;
    }

    // Send to Facebook Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook API error:', result);
      return NextResponse.json(
        { error: 'Failed to send event to Facebook', details: result },
        { status: response.status }
      );
    }

    console.log('Facebook Conversion API success:', result);
    return NextResponse.json({ success: true, result });

  } catch (error) {
    console.error('Error in Facebook Conversion API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}