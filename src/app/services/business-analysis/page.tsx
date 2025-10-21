import type { Metadata } from "next";
import { Suspense } from "react";
import BusinessAnalysisPageClient from "./BusinessAnalysisPageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Business Analysis Services - Strategic Consulting & Process Optimization | iTA Groupe",
  description: "Professional business analysis services for digital transformation, process optimization, and strategic consulting. Expert analysts helping businesses improve efficiency and drive growth.",
  keywords: [
    "business analysis services",
    "business process optimization",
    "digital transformation consulting",
    "business strategy consulting",
    "process improvement",
    "business requirements analysis",
    "workflow optimization",
    "business consulting Morocco",
    "strategic planning",
    "business intelligence",
    "data analysis consulting",
    "business process reengineering"
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
    title: "Business Analysis Services - Strategic Consulting & Process Optimization | iTA Groupe",
    description: "Professional business analysis services for digital transformation, process optimization, and strategic consulting. Expert analysts helping businesses improve efficiency and drive growth.",
    url: "https://itagroupe.com/services/business-analysis",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-business-analysis.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Business Analysis Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Analysis Services - Strategic Consulting & Process Optimization | iTA Groupe",
    description: "Professional business analysis services for digital transformation, process optimization, and strategic consulting.",
    images: ["/twitter-business-analysis.jpg"],
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
    canonical: "https://itagroupe.com/services/business-analysis",
  },
};

export default function BusinessAnalysisPage() {
  // JSON-LD structured data for Business Analysis service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Analysis Services",
    "description": "Professional business analysis services for digital transformation, process optimization, and strategic consulting. Expert analysts helping businesses improve efficiency and drive growth.",
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
    "serviceType": "Business Analysis",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Analysis Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Analysis & Optimization",
            "description": "Comprehensive analysis of business processes to identify inefficiencies and optimization opportunities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Requirements Gathering & Analysis",
            "description": "Systematic collection and analysis of business requirements for digital transformation projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Planning & Consulting",
            "description": "Strategic business planning and consulting to align technology with business objectives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation Analysis",
            "description": "Analysis and planning for digital transformation initiatives and technology adoption"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Business analysis services with expert consultants and proven methodologies",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120",
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
        <BusinessAnalysisPageClient />
      </Suspense>
    </>
  );
}