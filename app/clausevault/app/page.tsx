"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useUser, useAuth, useClerk } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";

interface Clause {
  id?: string;
  title: string;
  side: string;
  category: string;
  topic: string;
  tags: string;
  snippet: string;
  notes?: string;
  risk_level: string;
  isCustom?: boolean;
}

export default function ClauseVaultAppPage() {
  const [clauses, setClauses] = useState<Clause[]>([]);
  const [filteredClauses, setFilteredClauses] = useState<Clause[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentView, setCurrentView] = useState<'main' | 'recents' | 'favorites'>('main');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recents, setRecents] = useState<string[]>([]);
  const [customClause, setCustomClause] = useState({
    title: '',
    snippet: '',
    category: '',
    isFavorite: false
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  // Load clauses from JSON file
  useEffect(() => {
    const loadClauses = async () => {
      try {
        const response = await fetch('/data/clauses.json');
        if (response.ok) {
          const data = await response.json();
          setClauses(data);
        }
      } catch (error) {
        console.error('Error loading clauses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadClauses();
  }, []);

  // Cycle through background images every 6 hours
  useEffect(() => {
    const now = new Date();
    const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
    const imageIndex = Math.floor(hoursSinceEpoch / 6) % 35; // Change every 6 hours, cycle through 35 images
    setCurrentBgIndex(imageIndex);
  }, []);

  // Typing animation for search placeholder
  useEffect(() => {
    const messages = [
      "What are we working on today?",
      "Select any categories...or all of them"
    ];

    const currentMessage = messages[currentMessageIndex];
    
    if (currentCharIndex < currentMessage.length) {
      const timer = setTimeout(() => {
        setTypedPlaceholder(currentMessage.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100); // Type speed: 100ms per character
      
      return () => clearTimeout(timer);
    } else {
      // Wait before starting next message
      const timer = setTimeout(() => {
        setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        setCurrentCharIndex(0);
        setTypedPlaceholder("");
      }, 2000); // Wait 2 seconds before next message
      
      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentMessageIndex]);

  // Filter clauses based on search query and selected categories
  useEffect(() => {
    let filtered = [...clauses];

    // Apply search filter first
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(clause =>
        clause.title.toLowerCase().includes(query) ||
        clause.snippet.toLowerCase().includes(query) ||
        clause.category.toLowerCase().includes(query)
      );
    }

    // Then apply category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes("all")) {
      filtered = filtered.filter(clause =>
        selectedCategories.includes(clause.category)
      );
    } else if (selectedCategories.includes("all")) {
      filtered = [...clauses];
    }

    setFilteredClauses(filtered);
  }, [searchQuery, selectedCategories, clauses]);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories(prev => {
        const newSelection = prev.filter(c => c !== "all");
        if (newSelection.includes(category)) {
          return newSelection.filter(c => c !== category);
        } else {
          return [...newSelection, category];
        }
      });
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string, title: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Add to recents
      addToRecents(title);
      console.log('Clause copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Add to recents
  const addToRecents = (clauseId: string) => {
    setRecents(prev => {
      const filtered = prev.filter(id => id !== clauseId);
      return [clauseId, ...filtered].slice(0, 10); // Keep last 10
    });
  };

  // Toggle favorite
  const toggleFavorite = (clauseId: string) => {
    setFavorites(prev => {
      if (prev.includes(clauseId)) {
        return prev.filter(id => id !== clauseId);
      } else {
        return [...prev, clauseId];
      }
    });
  };

  // Handle custom clause creation
  const handleCustomClauseSubmit = () => {
    if (customClause.title && customClause.snippet) {
      const newClause = {
        ...customClause,
        id: `custom-${Date.now()}`,
        side: 'buyer',
        tags: 'custom',
        risk_level: 'low',
        isCustom: true,
        topic: customClause.category || 'Custom' // Use category as topic or default to 'Custom'
      };
      
      // Add to clauses list
      setClauses(prev => [newClause, ...prev]);
      
      // Add to recents (use title for consistency)
      addToRecents(newClause.title);
      
      // Add to favorites if marked (use title for consistency)
      if (customClause.isFavorite) {
        setFavorites(prev => [...prev, newClause.title]);
      }
      
      // Reset form and close modal
      setCustomClause({
        title: '',
        snippet: '',
        category: '',
        isFavorite: false
      });
      setShowCustomModal(false);
      
      // Show success feedback
      console.log('Custom clause created successfully!', newClause);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds
    }
  };

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/clausevault');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white font-mono lowercase">clausevault</h1>
              <span className="text-white/60 text-xs -mt-1">Searchable, copy-ready clauses</span>
            </div>
            <div className="flex items-center gap-4">
              {isSignedIn ? (
                <button
                  onClick={handleSignOut}
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>Sign Out</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => router.push('/sign-in')}
                  className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-4xl px-6 min-h-screen">
        {/* Search and Categories Section */}
        <div className="pt-12 pb-6 space-y-4">
          {/* Action Icons */}
          <div className="flex justify-end gap-2">
            {/* Recents Icon */}
            <button 
              onClick={() => setCurrentView('recents')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                currentView === 'recents' 
                  ? 'text-white bg-white/20' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Recent clauses"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            
            {/* Favorites Icon */}
            <button 
              onClick={() => setCurrentView('favorites')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                currentView === 'favorites' 
                  ? 'text-white bg-white/20' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Favorite clauses"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {/* Create Custom Clause Icon */}
            <button 
              onClick={() => setShowCustomModal(true)}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200" 
              aria-label="Create custom clause"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={typedPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
            />
          </div>

          {/* View Navigation */}
          {currentView !== 'main' && (
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setCurrentView('main')}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Main
              </button>
              <span className="text-white/40 text-sm">
                {currentView === 'recents' ? 'Recent Clauses' : 'Favorite Clauses'}
              </span>
            </div>
          )}

          {/* Category Quick Access - Only show in main view */}
          {currentView === 'main' && (
            <>
              <div className="flex flex-col gap-0.5">
                <span className="text-white/60 text-xs whitespace-nowrap mb-2">Access by Category:</span>
                <div className="flex items-center gap-2 overflow-x-auto categories-scroll pb-1" style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255,255,255,0.08) transparent'
                }}>
                  {["all", "Access", "Additional", "Address", "Appraisal", "Assignability", "Closing", "Commission", "Credits", "Deposit", "Disclosure", "Earnest", "Escrow", "Financing", "Home", "Inspection", "Insurance", "Lien", "Loan", "Occupancy", "Possession", "Property", "Repair", "Sale", "Seller", "Termination", "Title", "Utilities", "Warranty"].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`px-3 py-1 text-xs font-medium transition-all whitespace-nowrap ${
                        selectedCategories.includes(category)
                          ? 'bg-white text-black'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {category === "all" ? "All" : category}
                    </button>
                  ))}
                  {selectedCategories.length > 0 && (
                    <button
                      onClick={() => clearFilters()}
                      className="text-white/60 hover:text-white text-xs underline transition-colors whitespace-nowrap"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Thin line separator */}
              <div className="h-px bg-white/10 w-full"></div>
            </>
          )}
        </div>

        {/* Main Content - SCROLLABLE CONTAINER WITH FIXED BOUNDARIES */}
        <div className="flex-1 flex flex-col">
          {/* Scrollable Content Area - Fixed between category line and footer */}
          <div className="flex-1 overflow-y-auto scrollbar-hide px-6" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.2) transparent'
          }}>
            {/* Content Container - Normal layout, not centered */}
            <div className="py-6 pb-32">
              {/* Recents View */}
              {currentView === 'recents' && (
                <div>
                  {recents.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">No recent clauses yet</h3>
                      <p className="text-gray-300">Start using clauses to see them here!</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {recents.map((clauseId) => {
                        const clause = clauses.find(c => c.title === clauseId);
                        if (!clause) return null;
                        
                        return (
                          <motion.div
                            key={clauseId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-lg font-medium text-white mb-1">{clause.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                                  <span className="px-2 py-1 bg-gray-600 rounded-full">{clause.category}</span>
                                  <span className="px-2 py-1 bg-gray-600 rounded-full">{clause.side}</span>
                                  {clause.risk_level && (
                                    <span className={`px-2 py-1 rounded-full ${
                                      clause.risk_level === 'high' ? 'bg-red-500/20 text-red-300' :
                                      clause.risk_level === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                      'bg-green-500/20 text-green-300'
                                    }`}>
                                      {clause.risk_level} risk
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleFavorite(clauseId)}
                                  className={`p-2 rounded-lg transition-colors ${
                                    favorites.includes(clauseId) 
                                      ? 'text-red-400 hover:text-red-300' 
                                      : 'text-white/60 hover:text-white hover:bg-white/10'
                                  }`}
                                >
                                  <svg className="w-4 h-4" fill={favorites.includes(clauseId) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => copyToClipboard(clause.snippet, clause.title)}
                                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">{clause.snippet}</p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <span>Topic: {clause.topic}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Favorites View */}
              {currentView === 'favorites' && (
                <div>
                  {favorites.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">No favorite clauses yet</h3>
                      <p className="text-gray-300">Click the heart icon on any clause to add it to favorites!</p>
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {favorites.map((clauseId) => {
                        const clause = clauses.find(c => c.title === clauseId);
                        if (!clause) return null;
                        
                        return (
                          <motion.div
                            key={clauseId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-lg font-medium text-white mb-1">{clause.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                                  <span className="px-2 py-1 bg-gray-600 rounded-full">{clause.category}</span>
                                  <span className="px-2 py-1 bg-gray-600 rounded-full">{clause.side}</span>
                                  {clause.risk_level && (
                                    <span className={`px-2 py-1 rounded-full ${
                                      clause.risk_level === 'high' ? 'bg-red-500/20 text-red-300' :
                                      clause.risk_level === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                      'bg-green-500/20 text-green-300'
                                    }`}>
                                      {clause.risk_level} risk
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleFavorite(clauseId)}
                                  className="p-2 text-red-400 hover:text-red-300 rounded-lg transition-colors"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => copyToClipboard(clause.snippet, clause.title)}
                                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">{clause.snippet}</p>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <span>Topic: {clause.topic}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Main View - Categories and Search */}
              {currentView === 'main' && (
                <>
                  {/* No Categories Selected - Only show when no search AND no categories */}
                  {!isLoading && !searchQuery.trim() && selectedCategories.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">No categories selected</h3>
                      <p className="text-gray-300">Select one or more categories above to view clauses</p>
                    </div>
                  )}

                  {/* No Search Results - Show when searching but no results found */}
                  {!isLoading && searchQuery.trim() && filteredClauses.length === 0 && (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white mb-2">No results found</h3>
                      <p className="text-gray-300">Try adjusting your search terms or categories</p>
                    </div>
                  )}

                  {/* Loading State */}
                  {isLoading && (
                    <div className="text-center py-12">
                      <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-300">Loading clauses...</p>
                    </div>
                  )}

                  {/* Clauses Grid - Show when there are filtered clauses */}
                  {!isLoading && filteredClauses.length > 0 && (
                    <div className="grid gap-4">
                      {filteredClauses.map((clause, index) => (
                        <motion.div
                          key={`${clause.title}-${index}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-lg font-medium text-white mb-1">{clause.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                                  <span className="px-2 py-1 bg-gray-600 rounded-full">{clause.category}</span>
                                  <span className="px-2 py-1 bg-gray/600 rounded-full">{clause.side}</span>
                                  {clause.risk_level && (
                                    <span className={`px-2 py-1 rounded-full ${
                                      clause.risk_level === 'high' ? 'bg-red-500/20 text-red-300' :
                                      clause.risk_level === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                      'bg-green-500/20 text-green-300'
                                    }`}>
                                      {clause.risk_level} risk
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {/* Favorite Button */}
                                <button
                                  onClick={() => toggleFavorite(clause.title)}
                                  className={`p-2 rounded-lg transition-colors ${
                                    favorites.includes(clause.title) 
                                      ? 'text-red-400 hover:text-red-300' 
                                      : 'text-white/60 hover:text-white hover:bg-white/10'
                                  }`}
                                  aria-label={favorites.includes(clause.title) ? "Remove from favorites" : "Add to favorites"}
                                >
                                  <svg className="w-4 h-4" fill={favorites.includes(clause.title) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                </button>
                                
                                {/* Copy Button */}
                                <button
                                  onClick={() => copyToClipboard(clause.snippet, clause.title)}
                                  className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                  aria-label="Copy clause"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          
                          <p className="text-gray-300 text-sm leading-relaxed mb-3">{clause.snippet}</p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>Topic: {clause.topic}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>



      {/* Custom Clause Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-[#252A33] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-white tracking-wide">Create Custom Clause</h2>
              <button 
                onClick={() => setShowCustomModal(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {showSuccessMessage && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm font-light">
                ✅ Custom clause created successfully! It's now available in your clauses list.
              </div>
            )}
            
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              console.log('Form submitted, customClause:', customClause);
              handleCustomClauseSubmit(); 
            }} className="space-y-6">
              <div>
                <label className="block text-white/80 text-xs font-light tracking-wide mb-3">Clause Title</label>
                <input
                  type="text"
                  value={customClause.title}
                  onChange={(e) => setCustomClause(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all font-light"
                  placeholder="Enter clause title"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-xs font-light tracking-wide mb-3">Clause Text</label>
                <textarea
                  value={customClause.snippet}
                  onChange={(e) => setCustomClause(prev => ({ ...prev, snippet: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all font-light"
                  placeholder="Enter your custom clause text"
                  rows={8}
                  required
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-xs font-light tracking-wide mb-3">Category</label>
                <input
                  type="text"
                  value={customClause.category}
                  onChange={(e) => setCustomClause(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all font-light"
                  placeholder="e.g., Deposit, Closing"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="favorite"
                  checked={customClause.isFavorite}
                  onChange={(e) => setCustomClause(prev => ({ ...prev, isFavorite: e.target.checked }))}
                  className="w-4 h-4 text-red-500 bg-white/10 border-white/20 rounded focus:ring-red-500 focus:ring-2"
                />
                <label htmlFor="favorite" className="text-white/80 text-sm font-light">Mark as favorite</label>
              </div>
              
              <div className="pt-6">
                <button
                  type="submit"
                  onClick={() => {
                    console.log('Button clicked, customClause:', customClause);
                    if (customClause.title && customClause.snippet) {
                      handleCustomClauseSubmit();
                    } else {
                      console.log('Missing required fields');
                    }
                  }}
                  className="w-full bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors rounded-lg"
                >
                  Create Clause
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer with icons above line and disclaimer below */}
      <footer className="fixed bottom-0 left-0 right-0 pb-4 z-50 pointer-events-none">
        <div className="max-w-4xl mx-auto px-6">
          {/* Icons above the line - Right side only */}
          <div className="flex justify-end mb-1">
            <div className="flex items-center gap-4 pointer-events-auto">
              {/* User Profile Icon */}
              <button
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm border border-white/10"
                aria-label="User Profile"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Email Support Icon */}
              <button
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm border border-white/10"
                aria-label="Email Support"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Settings Icon */}
              <button
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm border border-white/10"
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
    </div>
  );
}
