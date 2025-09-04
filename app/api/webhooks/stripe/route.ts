import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
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

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        
        // Send access email
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
        // Handle subscription renewals
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.customer_email && invoice.metadata?.product === 'clausevault') {
          // Could send renewal confirmation email here
          console.log('Subscription renewed for:', invoice.customer_email);
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
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
