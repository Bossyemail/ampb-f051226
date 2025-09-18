import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // Temporarily disable admin protection for debugging
  console.log('Middleware running for:', req.url);
  
  // Protect only specific admin routes, not test pages
  if (isAdminRoute(req) && !req.url.includes('/admin/test') && !req.url.includes('/admin/simple')) {
    const { userId, sessionClaims } = auth();
    
    console.log('Checking admin route:', req.url, 'userId:', userId, 'email:', sessionClaims?.email);
    
    // Check if user is authenticated
    if (!userId) {
      console.log('No user ID, redirecting to sign-in');
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }
    
    // Check if user is authorized (admin emails)
    const email = sessionClaims?.email as string;
    const adminEmails = ['hello@aylenmontenegro.com', 'aylenfrommiami@gmail.com'];
    if (!adminEmails.includes(email)) {
      console.log('Unauthorized email:', email, 'allowed:', adminEmails);
      return NextResponse.redirect(new URL('/', req.url));
    }
    
    console.log('Admin access granted for:', email);
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
