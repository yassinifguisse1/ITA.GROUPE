import { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import LandingPageClient from './LandingPageClient';

export const metadata: Metadata = {
  title: 'Get Your Award Winning Ecommerce Store Done For You | iTA Groupe',
  description: 'Get an award winning ecommerce store done for you in the next 24 hours. Professional Shopify store setup with 30+ products, ready for sales by tomorrow.',
  keywords: [
    'ecommerce store',
    'shopify store',
    'dropshipping store',
    'online store',
    'ecommerce website',
    'shopify setup',
    'ready made store'
  ],
  openGraph: {
    title: 'Get Your Award Winning Ecommerce Store Done For You | iTA Groupe',
    description: 'Get an award winning ecommerce store done for you in the next 24 hours. Professional Shopify store setup with 30+ products.',
    type: 'website',
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

