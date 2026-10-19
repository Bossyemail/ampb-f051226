// ClauseVault billing portal session endpoint — disabled.
// ClauseVault has no active subscribers on aylenmontenegro.com.
// When ClauseVault launches on its own domain, it will use its own Stripe account,
// billing portal, and authentication infrastructure.
//
// PRESERVED SOURCE — do not delete. Required for ClauseVault standalone extraction.
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
//     const { customerEmail, returnUrl } = await request.json();
//     const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
//     if (customers.data.length === 0) {
//       return NextResponse.json({ error: 'No subscription found for this email address' }, { status: 404 });
//     }
//     const customer = customers.data[0];
//     const portalSession = await stripe.billingPortal.sessions.create({
//       customer: customer.id,
//       return_url: returnUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/profile`,
//     });
//     return NextResponse.json({ url: portalSession.url });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to create portal session', details: error instanceof Error ? error.message : 'Unknown error' },
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
