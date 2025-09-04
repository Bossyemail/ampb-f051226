"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignOutPage() {
  const { signOut } = useClerk();
  const router = useRouter();
  const [status, setStatus] = useState("Signing out...");

  useEffect(() => {
    // Simple and fast sign-out process
    const performSignOut = async () => {
      try {
        setStatus("Signing out...");
        
        // Sign out with a short timeout
        await Promise.race([
          signOut(),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), 2000)
          )
        ]);
        
        setStatus("Redirecting to clausevault...");
        // Small delay to ensure session is fully cleared
        setTimeout(() => {
          router.push('/clausevault');
        }, 100);
        
      } catch (error) {
        console.error("Sign out error:", error);
        setStatus("Redirecting to clausevault...");
        router.push('/clausevault');
      }
    };

    performSignOut();
  }, [signOut, router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-8">
          <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
          <h1 className="text-white text-xl font-medium mb-2">{status}</h1>
          <p className="text-gray-300 text-sm">
            {status === "Signing out..." 
              ? "Please wait while we sign you out." 
              : "You will be redirected shortly."}
          </p>
        </div>
      </div>
    </div>
  );
}
