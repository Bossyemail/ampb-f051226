// ClauseVault checkout session endpoint — disabled while product is not publicly available.
// No active callers exist in this codebase (verified 2026-10-18).
//
// PRESERVED SOURCE — do not delete. Required for ClauseVault standalone extraction.
// To restore: uncomment the implementation below and wire up the frontend CTA on /deploy.
//
// import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';
//
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2025-07-30.basil',
// });
//
// export async function POST(request: NextRequest) {
//   try {
//     const { priceId, successUrl, cancelUrl } = await request.json();
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [{ price: priceId, quantity: 1 }],
//       mode: 'subscription',
//       success_url: successUrl,
//       cancel_url: cancelUrl,
//       metadata: { product: 'clausevault' },
//     });
//     return NextResponse.json({ sessionId: session.id });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to create checkout session', details: error instanceof Error ? error.message : 'Unknown error' },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { error: 'Service temporarily unavailable' },
    { status: 503 }
  );
}
