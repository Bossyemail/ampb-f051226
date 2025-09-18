"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '/admin/dashboard';

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignIn 
          redirectUrl={redirectUrl}
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white/5 border border-white/10 backdrop-blur-sm",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-300",
              formButtonPrimary: "bg-white text-black hover:bg-gray-100",
              formFieldInput: "bg-white/10 border-white/20 text-white",
              formFieldLabel: "text-gray-300",
              footerActionLink: "text-blue-400 hover:text-blue-300",
              dividerLine: "bg-white/20",
              dividerText: "text-gray-300",
              socialButtonsBlockButton: "bg-white/10 border-white/20 text-white hover:bg-white/20",
            }
          }}
        />
      </div>
    </div>
  );
}
