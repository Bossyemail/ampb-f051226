"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, Users, ArrowLeft, Check, BookOpen, Download, Headphones } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import StickyNavigation from '@/components/StickyNavigation';
import ErrorBoundary from '@/components/ErrorBoundary';
import { getBookById, books } from '@/lib/books';
import { notFound } from 'next/navigation';

interface BookPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

export default function BookPage({ params }: BookPageProps) {
  const [bookId, setBookId] = React.useState<string>('');
  const [book, setBook] = React.useState(getBookById(''));

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setBookId(resolvedParams.bookId);
      setBook(getBookById(resolvedParams.bookId));
    });
  }, [params]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handlePurchase = (format: string) => {
    trackEvent('click', 'book_purchase', `${book.id}_${format}`);
    // Handle purchase logic
    console.log(`Purchase ${book.title} in ${format} format`);
  };

  const handleBackClick = () => {
    trackEvent('click', 'navigation', 'back_to_books');
    window.history.back();
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
        {/* Enhanced Sticky Navigation */}
        <StickyNavigation />

        {/* Back Button */}
        <div className="pt-24 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Books
            </button>
          </div>
        </div>

        {/* Book Hero Section */}
        <section className="px-4 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Book Cover */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-32">
                  <div className="relative">
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#D3CCD6] to-[#7B8E90] rounded-2xl overflow-hidden shadow-2xl">
                      {book.coverImage ? (
                        <img 
                          src={book.coverImage} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                          <BookOpen className="w-24 h-24" />
                        </div>
                      )}
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {book.bestseller && (
                        <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full">
                          Bestseller
                        </span>
                      )}
                      {book.new && (
                        <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Book Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Header */}
                <div className="space-y-4">
                  <span className="text-[#D3CCD6] font-medium">{book.category}</span>
                  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    {book.title}
                  </h1>
                  <p className="text-xl text-gray-400">{book.subtitle}</p>
                  
                  {/* Rating and Stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-semibold">{book.rating}</span>
                      <span>({book.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{book.readTime} read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{book.pages} pages</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">About This Book</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {book.description}
                  </p>
                  {book.excerpt && (
                    <blockquote className="border-l-4 border-[#D3CCD6] pl-6 italic text-gray-300">
                      "{book.excerpt}"
                    </blockquote>
                  )}
                </div>

                {/* What You'll Learn */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {book.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#D3CCD6] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Table of Contents */}
                {book.tableOfContents && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Table of Contents</h2>
                    <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {book.tableOfContents.map((chapter, index) => (
                          <div key={index} className="text-gray-300 text-sm">
                            {chapter}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Purchase Options */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-white">Get Your Copy</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {book.availableFormats.map((format) => (
                      <div
                        key={format}
                        className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {format === 'ebook' && <Download className="w-6 h-6 text-[#D3CCD6]" />}
                          {format === 'audiobook' && <Headphones className="w-6 h-6 text-[#D3CCD6]" />}
                          {format === 'paperback' && <BookOpen className="w-6 h-6 text-[#D3CCD6]" />}
                          <span className="text-white font-semibold capitalize">{format}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="text-3xl font-bold text-white">{book.price}</div>
                          
                          <button
                            onClick={() => handlePurchase(format)}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            Get {format.charAt(0).toUpperCase() + format.slice(1)}
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Books */}
        <section className="py-16 px-4 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                You Might Also Like
              </h2>
              <p className="text-lg text-gray-300">
                Complete your real estate education with these other essential reads
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {books
                .filter(b => b.id !== book.id)
                .slice(0, 3)
                .map((relatedBook, index) => (
                  <motion.div
                    key={relatedBook.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#D3CCD6] to-[#7B8E90] rounded-lg overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <BookOpen className="w-12 h-12" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{relatedBook.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{relatedBook.subtitle}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">{relatedBook.price}</span>
                      <button
                        onClick={() => trackEvent('click', 'related_book', relatedBook.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
                      >
                        View Book
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
