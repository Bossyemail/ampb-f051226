"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CleanAdminPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in?redirect_url=/admin/clean');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Redirecting to sign in...</div>
      </div>
    );
  }

  const adminEmails = ['hello@aylenmontenegro.com', 'aylenfrommiami@gmail.com'];
  const userEmail = user?.emailAddresses?.[0]?.emailAddress || '';

  if (!adminEmails.includes(userEmail)) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-2xl font-bold mb-4">Access Denied</div>
          <div className="text-white/60 text-lg mb-6">
            Email: {userEmail}
          </div>
          <div className="text-white/60 text-lg mb-6">
            Authorized emails: {adminEmails.join(', ')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-6">Clean Admin Dashboard</h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
          <h2 className="text-white text-xl font-semibold mb-4">Authentication Status</h2>
          <div className="space-y-2 text-white/80">
            <p><strong>Signed In:</strong> {isSignedIn ? 'Yes' : 'No'}</p>
            <p><strong>Email:</strong> {userEmail}</p>
            <p><strong>User ID:</strong> {user?.id}</p>
            <p><strong>Authorized:</strong> {adminEmails.includes(userEmail) ? 'Yes' : 'No'}</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-white text-xl font-semibold mb-4">Dashboard Access</h2>
          <p className="text-white/80 mb-4">
            If you can see this page, your authentication and authorization are working correctly.
          </p>
          <div className="space-x-4">
            <a 
              href="/admin/dashboard"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Go to Full Dashboard
            </a>
            <a 
              href="/admin"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Go to Analytics Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
