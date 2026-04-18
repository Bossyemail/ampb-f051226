"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser, useAuth, useClerk } from "@clerk/nextjs";
import { ArrowLeft, Bell, Clock, Mail, User, CreditCard, MessageCircle, Play } from "lucide-react";

export default function SettingsPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [settings, setSettings] = useState({
    notifications: true,
    searchHistory: true,
    emailUpdates: false
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const router = useRouter();
  const { user, isLoaded: userLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  // Cycle through background images every 6 hours
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      return Math.floor(hoursSinceEpoch / 6) % 106; // Change every 6 hours, cycle through 106 images (all .jpg)
    };

    const imageIndex = getCurrentImageIndex();
    setCurrentBgIndex(imageIndex);
    console.log('Settings page background image index:', imageIndex, 'URL:', `/images/clausevault/clausevault-bg-${imageIndex + 1}.jpg`);
    
    // Force a re-render to ensure the background image loads
    setTimeout(() => {
      setCurrentBgIndex(imageIndex);
    }, 100);
  }, []);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('clausevault-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage
  const updateSetting = (key: string, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('clausevault-settings', JSON.stringify(newSettings));
    
    // Show toast notification
    const settingNames = {
      notifications: 'Notifications',
      searchHistory: 'Search History',
      emailUpdates: 'Email Updates'
    };
    
    setToastMessage(`${settingNames[key as keyof typeof settingNames]} ${value ? 'enabled' : 'disabled'}`);
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
    
    // Show feedback for specific settings
    if (key === 'notifications') {
      if (value) {
        // Request notification permission if enabling
        if ('Notification' in window && Notification.permission === 'default') {
          Notification.requestPermission();
        }
      }
    }
    
    if (key === 'searchHistory') {
      if (!value) {
        // Clear search history if disabling
        localStorage.removeItem('clausevault-search-history');
      }
    }
    
    if (key === 'emailUpdates') {
      if (value) {
        // Could integrate with email service here
        console.log('Email updates enabled');
      }
    }
  };

  const settingItems = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Get notified about updates and new features",
      key: "notifications"
    },
    {
      icon: Clock,
      title: "Search History",
      description: "Remember your recent searches for quick access",
      key: "searchHistory"
    },
    {
      icon: Mail,
      title: "Email Updates",
      description: "Receive updates about new clauses and features",
      key: "emailUpdates"
    }
  ];

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
                <button
                  onClick={() => router.push('/dealdesk')}
                  className="text-2xl font-bold text-white font-mono lowercase hover:text-white/80 transition-colors text-left"
                >
                  clausevault
                </button>
                <span className="text-white/60 text-xs -mt-1">Searchable, copy-ready clauses</span>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="text-white/60 hover:text-white transition-colors text-sm underline"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-4xl px-6 min-h-screen">
        <div className="py-8 pb-32">

          {/* Action Items */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-medium mb-6 text-left">Account & Settings</h2>
            <div className="space-y-4">
              {/* Take Tour */}
              <div
                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-all"
                onClick={() => {
                  localStorage.removeItem('clausevault-tutorial-completed');
                  router.push('/clausevault/app');
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">Take Tour</h3>
                    <p className="text-white/60 text-sm">Revisit the clausevault tutorial</p>
                  </div>
                </div>
              </div>

              {/* Share Feedback */}
              <div
                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-all"
                onClick={() => router.push('/support')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">Share Feedback</h3>
                    <p className="text-white/60 text-sm">Help us improve clausevault</p>
                  </div>
                </div>
              </div>


            </div>
          </div>


          {/* Settings */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-xl font-medium text-white mb-6 text-left">Preferences</h2>
            <div className="space-y-4">
              {settingItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white/80" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateSetting(item.key, !settings[item.key as keyof typeof settings])}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          settings[item.key as keyof typeof settings] 
                            ? 'bg-green-500/30 border border-green-400/50 justify-end' 
                            : 'bg-white/10 border border-white/20 justify-start'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mx-1 transition-colors ${
                          settings[item.key as keyof typeof settings] 
                            ? 'bg-green-400' 
                            : 'bg-white'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          

          {/* App Info */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <h3 className="text-white font-medium mb-1 font-mono lowercase">clausevault</h3>
              <p className="text-white/60 text-sm mb-1">
                Version 1.0.0
              </p>
              <p className="text-white/60 text-sm mb-2">
                Searchable, copy-ready clauses built for real estate professionals
              </p>
              <p className="text-xs text-white/40">
                © 2025 clausevault. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer with icons above line and disclaimer below */}
      <footer className="fixed bottom-0 left-0 right-0 pb-4 z-50 pointer-events-none">
        <div className="max-w-4xl mx-auto px-6">
          {/* Icons above the line - Right side only */}
          <div className="flex justify-end mb-1">
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* User Profile Icon */}
              <button
                onClick={() => router.push('/profile')}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                aria-label="User Profile"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Email Support Icon */}
              <button
                onClick={() => router.push('/support')}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                aria-label="Email Support"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Settings Icon */}
              <button
                onClick={() => router.push('/settings')}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                aria-label="Settings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Thin line */}
          <div className="h-px bg-white/10 w-full"></div>
          
          {/* Disclaimer below the line - Left justified */}
          <div className="mt-2 text-left">
            <p className="text-xs text-white/40 font-light">
              clauses are operational aids and require broker/counsel review when needed. Replace variables in &lt;Angle Brackets&gt; and be sure to verify the addenda form and any applicable laws in your jurisdiction.
            </p>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white text-sm">
            {toastMessage}
          </div>
        </motion.div>
      )}
    </div>
  );
}
