import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import DigitalMarketingPageClient from "./DigitalMarketingPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, PPC, Social Media & Content Marketing | iTA Groupe",
  description: "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, and email campaigns. Drive traffic, leads, and sales for your business.",
  keywords: [
    "digital marketing services",
    "SEO services",
    "PPC advertising",
    "social media marketing",
    "content marketing",
    "email marketing",
    "digital marketing agency",
    "online marketing Morocco",
    "marketing automation",
    "lead generation",
    "digital advertising",
    "marketing strategy"
  ],
  authors: [{ name: "iTA Groupe" }],
  creator: "iTA Groupe",
  publisher: "iTA Groupe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Digital Marketing Services - SEO, PPC, Social Media & Content Marketing | iTA Groupe",
    description: "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, and email campaigns. Drive traffic, leads, and sales for your business.",
    url: "https://itagroupe.com/services/digital-marketing",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-digital-marketing.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Digital Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services - SEO, PPC, Social Media & Content Marketing | iTA Groupe",
    description: "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, and email campaigns.",
    images: ["/twitter-digital-marketing.jpg"],
    creator: "@itagroupe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://itagroupe.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  // JSON-LD structured data for Digital Marketing service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, and email campaigns. Drive traffic, leads, and sales for your business.",
    "provider": {
      "@type": "Organization",
      "name": "iTA Groupe",
      "url": "https://itagroupe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://itagroupe.com/logo.png",
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA",
        "addressLocality": "Casablanca"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 (307) 310-6370",
        "contactType": "customer service",
        "availableLanguage": ["English", "French", "Polish"]
      }
    },
    "serviceType": "Digital Marketing",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization to improve organic search rankings and drive qualified traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PPC Advertising",
            "description": "Pay-per-click advertising campaigns on Google, Facebook, and other platforms for immediate results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Social media strategy, content creation, and community management across all platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing",
            "description": "Strategic content creation and distribution to attract and engage your target audience"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Digital marketing services with proven strategies and measurable results",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "180",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Suspense fallback={
        <div className="min-h-screen bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-600 flex flex-col items-center">
            {/* iTA Groupe Logo */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
              alt="iTA Groupe Logo"
              width={100}
              height={100}
              priority
            />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <DigitalMarketingPageClient />
      </Suspense>
    </>
  );
}