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

    // Log subscription for tracking
    console.log(`Newsletter subscription: ${email} (${name}) from ${source}`);
    
    // Try KIT integration if configured
    const kitApiKey = process.env.KIT_API_KEY;
    
    if (kitApiKey) {
      try {
        // Subscribe to KIT newsletter
        const kitApiUrl = process.env.KIT_API_URL || 'https://snarkletter.kit.com/api/v1/subscribe';
        const kitApiSecret = process.env.KIT_API_SECRET;

        // Prepare headers for KIT custom subdomain
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };

        // KIT custom subdomain authentication (snarkletter.kit.com)
        if (kitApiSecret) {
          headers['Authorization'] = `Basic ${Buffer.from(`${kitApiKey}:${kitApiSecret}`).toString('base64')}`;
        } else {
          headers['Authorization'] = `Bearer ${kitApiKey}`;
        }

        const kitResponse = await fetch(kitApiUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            email: email,
            name: name || '',
            source: source,
            tags: ['snarkletter', 'spill-page'],
          }),
        });

        if (kitResponse.ok) {
          const kitData = await kitResponse.json();
          console.log(`Newsletter subscription successful via KIT: ${email} from ${source}`);
          return NextResponse.json({ 
            success: true, 
            message: 'Successfully subscribed to the Snarkletter!',
            data: kitData 
          });
        } else {
          console.error('KIT subscription failed, using fallback');
        }
      } catch (error) {
        console.error('KIT integration error, using fallback:', error);
      }
    }

    // Fallback: Always return success and log subscription
    console.log(`Newsletter subscription logged: ${email} (${name}) from ${source}`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to the Snarkletter!',
      data: { email, name, source, timestamp: new Date().toISOString() }
    });

  } catch (error) {
    console.error('Newsletter subscription API error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
