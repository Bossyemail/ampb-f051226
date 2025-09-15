"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  href: string;
}

interface SectionNavigationProps {
  sections: Section[];
  className?: string;
}

export default function SectionNavigation({ sections, className = '' }: SectionNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);

  useEffect(() => {
    if (searchTerm) {
      setFilteredSections(
        sections.filter(section =>
          section.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredSections(sections);
    }
  }, [searchTerm, sections]);

  const handleSectionClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5 rounded"
      >
        <span className="text-sm font-medium">Navigate</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 rounded text-sm"
                />
              </div>
            </div>

            {/* Sections List */}
            <div className="py-2 max-h-64 overflow-y-auto">
              {filteredSections.length > 0 ? (
                filteredSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.href)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {section.title}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-400">
                  No sections found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
