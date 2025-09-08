"use client";

import { useState, useEffect, useRef } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function ClauseVaultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoaded: userLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentImageNumber, setCurrentImageNumber] = useState(1);
  
  // Available background images (excluding missing ones like 54, 55)
  const availableImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106
  ];


  const handleMouseEnter = () => setIsAnimationPaused(true);
  const handleMouseLeave = () => setIsAnimationPaused(false);

  // Cycle through background images every 6 hours, starting from image 1
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      const arrayIndex = Math.floor(hoursSinceEpoch / 6) % availableImages.length;
      const imageNumber = availableImages[arrayIndex];
      console.log('Current image number:', imageNumber); // Debug log
      console.log('Image path:', `/images/clausevault/clausevault-bg-${imageNumber}.jpg`); // Debug log
      setCurrentImageNumber(imageNumber);
      return arrayIndex;
    };

    setCurrentBgIndex(getCurrentImageIndex());
  }, []);

  // Check if user should be redirected to app
  useEffect(() => {
    if (!userLoaded) return;

    // If user is signed in and has access, redirect to app
    if (isSignedIn && user) {
      // Check for success parameter from Stripe (new purchase)
      const success = searchParams.get('success');
      
      if (success === 'true' || user.publicMetadata?.clausevaultAccess) {
        console.log('User has access, redirecting to app');
        router.push('/clausevault/app');
        return;
      }
    }
  }, [userLoaded, user, isSignedIn, searchParams, router]);



  // Handle Get Access button click
  const handleGetAccess = () => {
    router.push('/clausevault/pay');
  };

  // Show landing page
  return (
    <div className="min-h-screen flex font-sans relative" style={{ background: 'transparent' }}>
      {/* Background Image - Same as product page */}
      <div className="fixed inset-0 z-10">
        <img 
          src={`/images/clausevault/clausevault-bg-${currentImageNumber}.jpg`}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          onLoad={() => console.log('Image loaded successfully')}
          onError={(e) => console.log('Image failed to load:', e.target.src)}
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Login Button - Top Right */}
      <div className="absolute top-6 right-6 z-30">
        <button 
          onClick={() => router.push('/sign-in?redirect_url=/clausevault/app')}
          className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-medium"
        >
          Sign In
        </button>
      </div>
      
      {/* Left Side */}
      <div className="w-1/2 bg-black/90 backdrop-blur-sm text-white flex flex-col justify-start pt-12 px-12 space-y-4 font-body text-sm relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold font-mono lowercase"
        >
          clausevault
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xs -mt-4 text-white/60"
        >
          Searchable, copy-ready clauses.
        </motion.p>

        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-1"
        >
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="hover:text-white/80 transition-colors cursor-default"
          >
            ↑ 236 ready-to-paste clauses
          </motion.li>
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="hover:text-white/80 transition-colors cursor-default"
          >
            ↑ Covers all contingencies
          </motion.li>
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="hover:text-white/80 transition-colors cursor-default"
          >
            ↑ Built for South Florida
          </motion.li>
          <motion.li 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="hover:text-white/80 transition-colors cursor-default"
          >
            ↑ Editable for anywhere
          </motion.li>
        </motion.ul>

        {/* Elegant Pricing Display */}
        <div className="space-y-3 mt-6">
          {/* Monthly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 w-64 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-light text-sm tracking-wide uppercase text-white/60">Monthly</h3>
                <div className="text-2xl font-light text-white">$99</div>
              </div>
              <div className="text-white/40 text-sm font-light">/ month</div>
            </div>
          </motion.div>
          
          {/* Yearly Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 w-64 hover:bg-white/20 transition-all duration-500 group cursor-pointer relative"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#7B8E90] to-[#d3ccd6] text-white text-xs px-3 py-1 rounded-full font-light tracking-wide">
              3 Months Free
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-light text-sm tracking-wide uppercase text-white/60">Yearly</h3>
                <div className="text-2xl font-light text-white">$891</div>
              </div>
              <div className="text-white/40 text-sm font-light">/ year</div>
            </div>
          </motion.div>
        </div>
        
        {isSignedIn ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-3"
          >
            <motion.button 
              onClick={() => router.push('/clausevault/app')}
              className="bg-white text-black px-6 py-3 font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="relative z-10">Continue to App →</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#7B8E90] to-[#d3ccd6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.button>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-xs text-gray-400"
            >
              Welcome back! Access your clauses
            </motion.p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-3"
          >
            <motion.button 
              onClick={handleGetAccess}
              className="bg-white text-black px-6 py-3 font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="relative z-10">Get Access →</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#7B8E90] to-[#d3ccd6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.button>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-xs text-gray-400"
            >
              Secure payment powered by Stripe
            </motion.p>
          </motion.div>
        )}
      </div>

      {/* Right Side - Full Height Animation */}
      <div className="w-1/2 relative z-20 px-6">
        <div className="min-h-screen overflow-hidden relative m-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="scrolling-content text-white" style={{ 
            animation: isAnimationPaused ? 'scrollUp 45s linear infinite paused' : 'scrollUp 45s linear infinite running',
            position: 'absolute',
            top: '100%'
          }}>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Inspection Deadline Extension</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer and Seller agree to extend the inspection period to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Because nothing says "smooth deal" like buying yourself more time to find what's wrong with the house.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Appraisal Gap Coverage</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer agrees to pay up to $10,000 above appraised value, not to exceed the sales price."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Translation: You're basically paying for the privilege of convincing the seller their overpriced house is worth it.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Repair Cap</h3>
                <p className="text-sm opacity-90 mb-3">"Seller's obligation to make repairs shall not exceed $2,500."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Hope you like YouTube tutorials, because you're inheriting a few "projects."</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Early Access Agreement</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer may enter the property prior to closing for measurements and contractor bids."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Perfect. Now the buyer's mother-in-law can criticize the kitchen before they even own it.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Escrow Deposit Extension</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer and Seller agree to extend the escrow deposit deadline to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Because nothing says "organized deal" like waiting on money that was due yesterday.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Closing Date Extension</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer and Seller agree to extend the closing date to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Translation: Everyone's moving boxes are now sitting in storage, accruing fees, and a whole lot of stress.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Seller's Property Disclosure</h3>
                <p className="text-sm opacity-90 mb-3">"Seller agrees to provide Buyer with a completed Seller's Property Disclosure prior to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: AKA: Please put in writing all the things that will mysteriously come up at the final walkthrough.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Financing Flexibility</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer may change lenders provided it does not delay closing."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Cue the lender musical chairs — everyone's invited, but don't you dare miss the deadline.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Title Defect Window</h3>
                <p className="text-sm opacity-90 mb-3">"Seller has 10 days to cure any title defects identified in the title search."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Nothing like finding out the neighbor's cousin still "technically" owns half the backyard.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Short Sale Addendum</h3>
                <p className="text-sm opacity-90 mb-3">"Contract is contingent on lender approval within 30 days."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Otherwise known as: "Welcome to real estate purgatory, please hold."</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Post-Occupancy Clause</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer agrees to allow Seller to remain in the property for up to 3 days after closing."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Congratulations, you're now a landlord for 72 hours — rent-free.</p>
              </div>
            </div>
            {/* Duplicate content for seamless infinite loop - no gap */}
            <div className="pt-8 space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Inspection Deadline Extension</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer and Seller agree to extend the inspection period to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Because nothing says "smooth deal" like buying yourself more time to find what's wrong with the house.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Appraisal Gap Coverage</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer agrees to pay up to $10,000 above appraised value, not to exceed the sales price."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Translation: You're basically paying for the privilege of convincing the seller their overpriced house is worth it.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Repair Cap</h3>
                <p className="text-sm opacity-90 mb-3">"Seller's obligation to make repairs shall not exceed $2,500."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Hope you like YouTube tutorials, because you're inheriting a few "projects."</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Early Access Agreement</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer may enter the property prior to closing for measurements and contractor bids."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Perfect. Now the buyer's mother-in-law can criticize the kitchen before they even own it.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Escrow Deposit Extension</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer and Seller agree to extend the escrow deposit deadline to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Because nothing says "organized deal" like waiting on money that was due yesterday.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Closing Date Extension</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer and Seller agree to extend the closing date to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Translation: Everyone's moving boxes are now sitting in storage, accruing fees, and a whole lot of stress.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Seller's Property Disclosure</h3>
                <p className="text-sm opacity-90 mb-3">"Seller agrees to provide Buyer with a completed Seller's Property Disclosure prior to ( ___ )."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: AKA: Please put in writing all the things that will mysteriously come up at the final walkthrough.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Financing Flexibility</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer may change lenders provided it does not delay closing."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Cue the lender musical chairs — everyone's invited, but don't you dare miss the deadline.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Title Defect Window</h3>
                <p className="text-sm opacity-90 mb-3">"Seller has 10 days to cure any title defects identified in the title search."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Nothing like finding out the neighbor's cousin still "technically" owns half the backyard.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Short Sale Addendum</h3>
                <p className="text-sm opacity-90 mb-3">"Contract is contingent on lender approval within 30 days."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Otherwise known as: "Welcome to real estate purgatory, please hold."</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Post-Occupancy Clause</h3>
                <p className="text-sm opacity-90 mb-3">"Buyer agrees to allow Seller to remain in the property for up to 3 days after closing."</p>
                <p className="text-xs text-gray-300 italic">Reality Check: Congratulations, you're now a landlord for 72 hours — rent-free.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .scrolling-content {
          display: inline-block;
          margin: 0;
          padding: 0;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
