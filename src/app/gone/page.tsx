import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Archive, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Content Permanently Removed - 410 | iTA Groupe',
  description: 'This content has been permanently removed and is no longer available.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Gone() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 410 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mb-4">
            410
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-amber-500 mr-3" />
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Content Permanently Removed
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            This content has been permanently removed and is no longer available. 
            It won't be coming back, but we have plenty of other great content to explore!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-slate-300 dark:border-slate-600">
            <Link href="/services" className="flex items-center gap-2">
              <Archive className="w-4 h-4" />
              Explore Services
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
            What's Available Now
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/services" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
              Our Services
            </Link>
            <Link href="/portfolio" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
              Latest Blog Posts
            </Link>
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
          <p>
            Looking for something specific?{' '}
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium">
              Contact our team
            </Link>{' '}
            and we'll help you find what you need!
          </p>
        </div>
      </div>
    </div>
  );
}
