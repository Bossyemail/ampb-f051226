import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <BookOpen className="w-16 h-16 text-[#D3CCD6] mx-auto mb-4" />
          <h1 className="text-3xl font-semibold text-white mb-2">Book Not Found</h1>
          <p className="text-gray-400">
            Sorry, the book you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link
          href="/read"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          style={{ color: '#000000' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Books
        </Link>
      </div>
    </div>
  );
}
