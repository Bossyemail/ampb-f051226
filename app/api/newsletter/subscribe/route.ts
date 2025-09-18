import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name, source = 'spill-page' } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Subscribe to KIT newsletter
    // KIT custom subdomain: snarkletter.kit.com
    const kitApiUrl = process.env.KIT_API_URL || 'https://snarkletter.kit.com/api/v1/subscribe';
    const kitApiKey = process.env.KIT_API_KEY;
    const kitApiSecret = process.env.KIT_API_SECRET;
    
    if (!kitApiKey) {
      console.error('KIT_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    // Prepare headers for KIT custom subdomain
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // KIT custom subdomain authentication (snarkletter.kit.com)
    if (kitApiSecret) {
      // Option 1: Basic auth with API key and secret
      headers['Authorization'] = `Basic ${Buffer.from(`${kitApiKey}:${kitApiSecret}`).toString('base64')}`;
    } else {
      // Option 2: API key in Authorization header
      headers['Authorization'] = `Bearer ${kitApiKey}`;
      // Alternative: headers['X-API-Key'] = kitApiKey;
    }

    const kitResponse = await fetch(kitApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: email,
        name: name || '',
        source: source,
        tags: ['snarkletter', 'spill-page'],
        // Add any other KIT-specific fields you need
      }),
    });

    if (!kitResponse.ok) {
      const errorData = await kitResponse.json();
      console.error('KIT subscription error:', errorData);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    const kitData = await kitResponse.json();

    // Log subscription for analytics
    console.log(`Newsletter subscription: ${email} from ${source} via KIT`);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to the Snarkletter!',
      data: kitData 
    });

  } catch (error) {
    console.error('Newsletter subscription API error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
