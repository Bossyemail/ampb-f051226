import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // Protect admin routes
  if (isAdminRoute(req)) {
    const { userId, sessionClaims } = auth();
    
    // Check if user is authenticated
    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }
    
    // Check if user is authorized (admin emails)
    const email = sessionClaims?.email as string;
    const adminEmails = ['hello@aylenmontenegro.com', 'aylenfrommiami@gmail.com'];
    if (!adminEmails.includes(email)) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
