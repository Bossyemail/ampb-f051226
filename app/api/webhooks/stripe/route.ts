import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
import { webhookManager } from '@/lib/webhook-manager';
import { rateLimiters, withRateLimit } from '@/lib/rate-limiter';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting to webhook endpoints
    const rateLimitError = withRateLimit(rateLimiters.general)(request);
    if (rateLimitError) {
      return rateLimitError;
    }

    const body = await request.text();
    const headersList = await headers();
    const sig = headersList.get('stripe-signature');

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
    }

    // Register the webhook event with the webhook manager
    try {
      const eventId = await webhookManager.registerEvent(
        'stripe',
        event.type,
        event.data.object,
        {
          eventId: event.id,
          created: event.created,
          livemode: event.livemode
        }
      );

      console.log(`Stripe webhook event ${event.type} registered with ID: ${eventId}`);
      
      return NextResponse.json({ 
        received: true, 
        eventId,
        status: 'registered'
      });
    } catch (error) {
      console.error('Failed to register webhook event:', error);
      
      // Fallback to immediate processing for critical events
      if (['checkout.session.completed', 'invoice.payment_succeeded'].includes(event.type)) {
        try {
          await processEventImmediately(event);
          return NextResponse.json({ received: true, status: 'processed_immediately' });
        } catch (processingError) {
          console.error('Immediate processing failed:', processingError);
          return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
          );
        }
      }
      
      return NextResponse.json(
        { error: 'Failed to register webhook event' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Webhook endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Fallback immediate processing for critical events
async function processEventImmediately(event: Stripe.Event) {
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      
      if (session.customer_email && session.metadata?.product === 'clausevault') {
        await sendAccessEmail({
          email: session.customer_email,
          customerName: session.customer_details?.name || '',
          productName: 'ClauseVault Pro',
          accessUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/clausevault?success=true`,
        });
      }
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.customer_email && invoice.metadata?.product === 'clausevault') {
        console.log('Subscription renewed for:', invoice.customer_email);
      }
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
}

async function sendAccessEmail({ email, customerName, productName, accessUrl }: {
  email: string;
  customerName: string;
  productName: string;
  accessUrl: string;
}) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-access-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        customerName,
        productName,
        accessUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send access email');
    }

    console.log('Access email sent successfully to:', email);
  } catch (error) {
    console.error('Error sending access email:', error);
  }
}
