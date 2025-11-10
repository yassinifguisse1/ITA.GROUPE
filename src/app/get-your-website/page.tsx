import { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
  title: 'Get Your Award Winning Website Done For You | iTA Groupe',
  description: 'Get an award winning website done for you in the next 24 hours. Professional website development with modern design, ready for your business.',
  keywords: [
    'website development',
    'professional website',
    'custom website',
    'website design',
    'web development',
    'business website',
    'modern website',
    'website builder',
    'responsive website'
  ],
  openGraph: {
    title: 'Get Your Award Winning Website Done For You | iTA Groupe',
    description: 'Get an award winning website done for you in the next 24 hours. Professional website development with modern design.',
    type: 'website',
    url: 'https://itagroupe.com/get-your-website',
    siteName: 'iTA Groupe',
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'pl_PL'],
  },
  alternates: {
    canonical: 'https://itagroupe.com/get-your-website',
    languages: {
      'en-US': 'https://itagroupe.com/get-your-website',
      'fr-FR': 'https://itagroupe.com/get-your-website',
      'pl-PL': 'https://itagroupe.com/get-your-website',
    },
  },
};

export default function GetYourWebsitePage() {
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

