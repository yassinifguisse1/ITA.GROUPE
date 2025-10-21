import type { Metadata } from "next";
import { Suspense } from "react";
import MobileDevelopmentPageClient from "./MobileDevelopmentPageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS, Android & Cross-Platform | iTA Groupe",
  description: "Professional mobile app development for iOS, Android, and cross-platform solutions. Native and React Native development with 10+ years experience. 500+ apps delivered worldwide.",
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter development",
    "cross-platform apps",
    "mobile app design",
    "app development Morocco",
    "mobile development agency",
    "native app development",
    "mobile app consulting",
    "app store optimization"
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
    title: "Mobile App Development Services - iOS, Android & Cross-Platform | iTA Groupe",
    description: "Professional mobile app development for iOS, Android, and cross-platform solutions. Native and React Native development with 10+ years experience. 500+ apps delivered worldwide.",
    url: "https://itagroupe.com/services/mobile-development",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-mobile-development.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Mobile App Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services - iOS, Android & Cross-Platform | iTA Groupe",
    description: "Professional mobile app development for iOS, Android, and cross-platform solutions. Native and React Native development with 10+ years experience.",
    images: ["/twitter-mobile-development.jpg"],
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
    canonical: "https://itagroupe.com/services/mobile-development",
  },
};

export default function MobileDevelopmentPage() {
  // JSON-LD structured data for Mobile Development service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "description": "Professional mobile app development for iOS, Android, and cross-platform solutions. Native and React Native development with 10+ years experience.",
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
    "serviceType": "Mobile App Development",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iOS App Development",
            "description": "Native iOS applications built with Swift and SwiftUI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android App Development",
            "description": "Native Android applications using Kotlin and Jetpack Compose"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cross-Platform Development",
            "description": "React Native and Flutter development for multi-platform apps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wearable App Development",
            "description": "Apps for smartwatches and wearable devices"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Mobile app development services with 10+ years experience and 500+ projects delivered",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
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
        <MobileDevelopmentPageClient />
      </Suspense>
    </>
  );
}