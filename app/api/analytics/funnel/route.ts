import { NextResponse } from 'next/server';

// Mock funnel data - in production, this would come from your database
export async function GET() {
  try {
    // Define funnel steps
    const funnelSteps = [
      'visit',
      'hero_view', 
      'services_view',
      'testimonials_view',
      'contact_attempt',
      'email_capture',
      'conversion'
    ];

    // Mock data - replace with real analytics data
    const mockFunnelData = {
      steps: [
        { name: 'Visit', count: 1000, conversionRate: 100 },
        { name: 'Hero View', count: 850, conversionRate: 85 },
        { name: 'Services View', count: 650, conversionRate: 76.5 },
        { name: 'Testimonials View', count: 420, conversionRate: 64.6 },
        { name: 'Contact Attempt', count: 180, conversionRate: 42.9 },
        { name: 'Email Capture', count: 95, conversionRate: 52.8 },
        { name: 'Conversion', count: 35, conversionRate: 36.8 }
      ],
      totalSessions: 1000,
      overallConversionRate: 3.5
    };

    return NextResponse.json(mockFunnelData);
  } catch (error) {
    console.error('Funnel analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve funnel data' },
      { status: 500 }
    );
  }
}
