import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import Link from 'next/link';

interface BookCardProps {
  book: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage?: string;
    rating: number;
    reviews: number;
    readTime: string;
    price: string;
    category: string;
    bestseller?: boolean;
    new?: boolean;
    features: string[];
    excerpt?: string;
  };
  variant?: 'default' | 'featured' | 'compact' | 'elevated';
  onClick?: (bookId: string, bookTitle: string) => void;
}

export default function BookCard({ book, variant = 'default', onClick }: BookCardProps) {
  const handleClick = () => {
    trackEvent('click', 'book', book.id);
    if (onClick) {
      onClick(book.id, book.title);
    }
  };

  const variants = {
    default: {
      container: "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300",
      cover: "aspect-[3/4] bg-gradient-to-br from-[#D3CCD6] to-[#7B8E90] rounded-lg overflow-hidden",
      title: "text-xl font-semibold text-white mt-1",
      description: "text-gray-300 text-sm leading-relaxed",
      features: "space-y-2",
      cta: "inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
    },
    featured: {
      container: "bg-gradient-to-br from-gray-800/70 to-gray-700/70 border-2 border-[#D3CCD6]/20 rounded-2xl p-8 hover:border-[#D3CCD6]/40 transition-all duration-300",
      cover: "aspect-[3/4] bg-gradient-to-br from-[#D3CCD6] to-[#7B8E90] rounded-lg overflow-hidden",
      title: "text-2xl font-semibold text-white mt-1",
      description: "text-gray-300 text-base leading-relaxed",
      features: "space-y-3",
      cta: "inline-flex items-center gap-2 px-6 py-3 bg-[#D3CCD6] text-black font-semibold rounded-lg hover:bg-[#C9C3D9] transition-colors"
    },
    compact: {
      container: "bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all duration-300",
      cover: "aspect-[3/4] bg-gradient-to-br from-[#D3CCD6] to-[#7B8E90] rounded-md overflow-hidden",
      title: "text-lg font-semibold text-white mt-1",
      description: "text-gray-300 text-xs leading-relaxed",
      features: "space-y-1",
      cta: "inline-flex items-center gap-1 px-3 py-1.5 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors text-sm"
    },
    elevated: {
      container: "bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-white/15 rounded-2xl p-8 hover:border-white/25 hover:bg-gray-900/70 transition-all duration-500 backdrop-blur-sm",
      cover: "aspect-[3/4] bg-gradient-to-br from-[#D3CCD6] to-[#7B8E90] rounded-xl overflow-hidden shadow-2xl",
      title: "text-2xl font-heading font-medium tracking-tight text-white mt-2",
      description: "text-gray-300 text-base leading-relaxed",
      features: "space-y-3",
      cta: "inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg"
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div className={currentVariant.container}>
        {/* Book Cover */}
        <div className="relative mb-6">
          <div className={currentVariant.cover}>
            {book.coverImage ? (
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                <BookOpen className="w-16 h-16" />
              </div>
            )}
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {book.bestseller && (
              <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded">
                Bestseller
              </span>
            )}
            {book.new && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded">
                New
              </span>
            )}
          </div>
        </div>

        {/* Book Info */}
        <div className="space-y-4">
          <div>
            <span className="text-sm text-[#D3CCD6] font-medium">{book.category}</span>
            <h3 className={currentVariant.title}>{book.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{book.subtitle}</p>
          </div>

          <p className={currentVariant.description}>
            {book.description}
          </p>

          {/* Rating and Stats */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{book.rating}</span>
              <span>({book.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{book.readTime}</span>
            </div>
          </div>

          {/* Features */}
          {variant !== 'compact' && (
            <div className={currentVariant.features}>
              <h4 className="text-sm font-semibold text-white">What you'll learn:</h4>
              <ul className="space-y-1">
                {book.features.slice(0, variant === 'elevated' ? 4 : 3).map((feature, idx) => (
                  <li key={idx} className={`${variant === 'elevated' ? 'text-sm' : 'text-xs'} text-gray-400 flex items-center gap-2`}>
                    <div className="w-1 h-1 bg-[#D3CCD6] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl font-bold text-white">{book.price}</span>
            <Link
              href={`/read/${book.id}`}
              onClick={handleClick}
              className={currentVariant.cta}
            >
              Get Book
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
