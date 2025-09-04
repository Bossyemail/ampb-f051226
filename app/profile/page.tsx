"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser, useAuth, useClerk } from "@clerk/nextjs";
import { ArrowLeft, CreditCard, MessageSquare, User, Play, Mail } from "lucide-react";

export default function ProfilePage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const router = useRouter();
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  // Redirect if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in');
    }
  }, [isSignedIn, router]);

  // Cycle through background images every 6 hours
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      return Math.floor(hoursSinceEpoch / 6) % 35;
    };

    setCurrentBgIndex(getCurrentImageIndex());
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/clausevault');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    {
      icon: CreditCard,
      title: "Billing & Membership",
      description: "Manage your subscription and payment methods",
      action: () => {
        // TODO: Implement billing management
        console.log('Billing management');
      }
    },
    {
      icon: MessageSquare,
      title: "Share Feedback",
      description: "Help us improve ClauseVault",
      action: () => {
        window.open('mailto:support@clausevault.co?subject=Feedback', '_blank');
      }
    },
    {
      icon: User,
      title: "Edit Profile",
      description: "Update your account information",
      action: () => {
        // TODO: Implement profile editing (non-conflicting with Clerk)
        console.log('Profile editing');
      }
    },
    {
      icon: Play,
      title: "Take Tour",
      description: "Revisit the ClauseVault tutorial",
      action: () => {
        router.push('/clausevault/app?tour=true');
      }
    }
  ];

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(/images/clausevault/clausevault-bg-${currentBgIndex + 1}.jpg)`,
          }}
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/clausevault/app')}
                className="text-white/60 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white font-mono lowercase">clausevault</h1>
                <span className="text-white/60 text-xs -mt-1">Account & Settings</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-4xl px-6 min-h-screen">
        <div className="py-8">
          {/* User Info */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white/60" />
            </div>
            <h2 className="text-xl font-medium text-white mb-2">
              {user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'User'}
            </h2>
            <p className="text-white/60 text-sm">
              {user?.emailAddresses?.[0]?.emailAddress}
            </p>
          </motion.div>

          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <button
                  onClick={item.action}
                  className="w-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white/80" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Sign Out */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              onClick={handleSignOut}
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Sign Out
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 pb-4 z-50 pointer-events-none">
        <div className="max-w-4xl mx-auto px-6">
          {/* Thin line */}
          <div className="h-px bg-white/10 w-full"></div>
          
          {/* Disclaimer below the line - Left justified */}
          <div className="mt-2 text-left">
            <p className="text-xs text-white/40 font-light">
              Manage your ClauseVault account and preferences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}