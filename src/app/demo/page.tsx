import { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
  title: 'Get Your Modern Website Built | Professional Web Development',
  description: 'Transform your business with a stunning, modern website. Get a professional website built by our expert team. Free consultation available.',
  keywords: [
    'modern website',
    'web development',
    'professional website',
    'business website',
    'custom website design',
    'responsive website',
    'website builder'
  ],
  openGraph: {
    title: 'Get Your Modern Website Built | Professional Web Development',
    description: 'Transform your business with a stunning, modern website. Get a professional website built by our expert team.',
    type: 'website',
  },
};

export default function LandingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <Image
          src="/favicon.ico"
          alt="Loading..."
          width={32}
          height={32}
          className="animate-spin"
        />
      </div>
    }>
      <LandingPageClient />
    </Suspense>
  );
}
