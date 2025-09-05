"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser, useAuth, useClerk } from "@clerk/nextjs";
import { ArrowLeft, User, Mail, Phone, Camera, CreditCard, X, Check } from "lucide-react";

export default function ProfilePage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const router = useRouter();
  const { user, isLoaded: userLoaded } = useUser();
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
      return Math.floor(hoursSinceEpoch / 6) % 106; // Change every 6 hours, cycle through 106 images (all .jpg)
    };

    const imageIndex = getCurrentImageIndex();
    setCurrentBgIndex(imageIndex);
    
    // Force a re-render to ensure the background image loads
    setTimeout(() => {
      setCurrentBgIndex(imageIndex);
    }, 100);
  }, []);

  // Load user data when user is loaded
  useEffect(() => {
    if (userLoaded && user) {
      setFormData({
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim() || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phone: user.phoneNumbers?.[0]?.phoneNumber || ''
      });
    }
  }, [userLoaded, user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (!user || !userLoaded) {
      setToastMessage('Please wait for profile to load.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    try {
      console.log('Saving profile with data:', formData);
      console.log('Current user:', user);
      
      // Split fullName into firstName and lastName
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      console.log('Split name:', { firstName, lastName });

      // Only update if there are actual changes
      const hasNameChanges = firstName !== (user.firstName || '') || lastName !== (user.lastName || '');
      
      console.log('Has name changes:', hasNameChanges);
      
      if (hasNameChanges) {
        console.log('Updating user profile...');
        // Use unsafeMetadata to store custom profile data
        await user.update({
          unsafeMetadata: {
            ...user.unsafeMetadata,
            firstName,
            lastName,
          }
        });
        console.log('Profile updated successfully');
      }

      // Check if phone number was actually changed
      const currentPhone = user.phoneNumbers?.[0]?.phoneNumber || '';
      const hasPhoneChanges = formData.phone && formData.phone !== currentPhone;
      
      if (hasPhoneChanges) {
        setToastMessage('Profile updated! Note: Phone number changes require verification.');
      } else {
        setToastMessage('Profile updated successfully!');
      }
      
      setShowToast(true);
      setIsEditing(false);
      
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setToastMessage(`Error: ${error instanceof Error ? error.message : 'Please try again.'}`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleCancel = () => {
    if (userLoaded && user) {
      setFormData({
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim() || '',
        email: user.primaryEmailAddress?.emailAddress || '',
        phone: user.phoneNumbers?.[0]?.phoneNumber || ''
      });
    }
    setIsEditing(false);
  };

  const handleSubscriptionManagement = async () => {
    if (!user?.emailAddresses?.[0]?.emailAddress) {
      setToastMessage('Email address not found. Please contact support.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    try {
      setToastMessage('Opening subscription management...');
      setShowToast(true);

      const response = await fetch('/api/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerEmail: user.emailAddresses[0].emailAddress,
          returnUrl: `${window.location.origin}/profile`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        setToastMessage(data.error || 'Failed to open subscription management');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error('Error creating portal session:', error);
      setToastMessage('Failed to open subscription management. Please try again.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleCancelSubscription = async () => {
    if (!user?.emailAddresses?.[0]?.emailAddress) {
      setToastMessage('Email address not found. Please contact support.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    if (confirm('Are you sure you want to cancel your subscription? This action cannot be undone.')) {
      try {
        setToastMessage('Processing cancellation request...');
        setShowToast(true);

        const response = await fetch('/api/create-portal-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerEmail: user.emailAddresses[0].emailAddress,
            returnUrl: `${window.location.origin}/profile`,
          }),
        });

        const data = await response.json();

        if (response.ok && data.url) {
          window.location.href = data.url;
        } else {
          setToastMessage(data.error || 'Failed to open subscription management');
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }
      } catch (error) {
        console.error('Error creating portal session:', error);
        setToastMessage('Failed to open subscription management. Please try again.');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    try {
      // Create a file reader to convert to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        
        // Update user profile image
        await user.setProfileImage({ file });
        
        setToastMessage('Profile image updated successfully!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setToastMessage('Error uploading image. Please try again.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  if (!isSignedIn) {
    return null;
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
        <div className="absolute inset-0 bg-black/60" />
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
                  onClick={() => router.push('/clausevault')}
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
          {/* User Profile Section */}
          <div className="mb-8 flex items-start gap-6">
            <div className="relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center overflow-hidden">
                {userLoaded && user?.imageUrl ? (
                  <img 
                    src={user.imageUrl} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <User className="w-10 h-10 text-white/80" />
                )}
              </div>
              {isEditing && (
                <label className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Camera className="w-3 h-3 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-white text-lg font-medium mb-1">
                {userLoaded && user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User' : 'Loading...'}
              </h3>
            </div>
          </div>

          {/* Profile Information */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl font-medium text-white mb-6 text-left">Profile Information</h2>
            <div className="space-y-4">
              {/* Full Name */}
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <label className="text-white/60 text-sm block mb-1">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                        placeholder="Enter your full name"
                      />
                    ) : (
                      <p className="text-white">{userLoaded && user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Not provided' : 'Loading...'}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Email and Phone in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white/80" />
                    </div>
                    <div className="flex-1">
                      <label className="text-white/60 text-sm block mb-1">Email Address</label>
                      <p className="text-white text-sm">{userLoaded && user ? user.primaryEmailAddress?.emailAddress : 'Loading...'}</p>
                      <p className="text-white/40 text-xs mt-1">Email cannot be changed here</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white/80" />
                    </div>
                    <div className="flex-1">
                      <label className="text-white/60 text-sm block mb-1">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-sm"
                          placeholder="Enter your phone number"
                        />
                      ) : (
                        <p className="text-white text-sm">{userLoaded && user ? user.phoneNumbers?.[0]?.phoneNumber || 'Not provided' : 'Loading...'}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subscription Management */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl font-medium text-white mb-6 text-left">Subscription</h2>
            <div className="space-y-4">
              {/* Manage Subscription */}
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-all"
                onClick={handleSubscriptionManagement}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">Manage Subscription</h3>
                    <p className="text-white/60 text-sm">Update payment method and billing information</p>
                  </div>
                </div>
              </div>

              {/* Cancel Subscription */}
              <div 
                className="bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-lg p-6 cursor-pointer hover:bg-red-500/20 transition-all"
                onClick={handleCancelSubscription}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <X className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">Cancel Subscription</h3>
                    <p className="text-white/60 text-sm">Cancel your clausevault subscription</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-green-500/20 border border-green-500/40 rounded-lg text-green-400 hover:bg-green-500/30 transition-all flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all"
              >
                Edit Profile
              </button>
            )}
          </motion.div>

        </div>
      </div>

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
          <div className="w-full h-px bg-white/20 mb-2" />

          {/* Disclaimer below the line */}
          <div className="text-center">
            <p className="text-white/40 text-xs">
              Manage your ClauseVault account and preferences.
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
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
            <p className="text-white text-sm">{toastMessage}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}