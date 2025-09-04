"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bell, Clock, Mail } from "lucide-react";

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

  // Cycle through background images every 6 hours
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      return Math.floor(hoursSinceEpoch / 6) % 106;
    };

    setCurrentBgIndex(getCurrentImageIndex());
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
            backgroundImage: `url(/images/clausevault/clausevault-bg-${currentBgIndex + 1}${currentBgIndex < 35 ? '.jpg' : '.jpeg'})`,
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
                <span className="text-white/60 text-xs -mt-1">Settings & Preferences</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-4xl px-6 min-h-screen">
        <div className="py-8 pb-32">
          {/* Settings */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-medium text-white mb-6 text-center">Preferences</h2>
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-white font-medium mb-2">ClauseVault</h3>
              <p className="text-white/60 text-sm mb-4">
                Version 1.0.0 • Built for Florida real estate professionals
              </p>
              <div className="text-xs text-white/40">
                © 2024 ClauseVault. All rights reserved.
              </div>
            </div>
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
              Customize your ClauseVault experience and preferences.
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
