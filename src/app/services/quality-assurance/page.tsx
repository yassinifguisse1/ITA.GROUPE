import type { Metadata } from "next";
import { Suspense } from "react";
import QualityAssurancePageClient from "./QualityAssurancePageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quality Assurance Services - Software Testing & QA Consulting | iTA Groupe",
  description: "Professional quality assurance services including software testing, automated testing, performance testing, and QA consulting. Ensure your software meets the highest quality standards with our expert QA team.",
  keywords: [
    "quality assurance services",
    "software testing services",
    "QA testing",
    "automated testing",
    "performance testing",
    "manual testing",
    "test automation",
    "QA consulting",
    "software quality assurance",
    "testing services Morocco",
    "bug testing",
    "user acceptance testing"
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
    title: "Quality Assurance Services - Software Testing & QA Consulting | iTA Groupe",
    description: "Professional quality assurance services including software testing, automated testing, performance testing, and QA consulting. Ensure your software meets the highest quality standards with our expert QA team.",
    url: "https://itagroupe.com/services/quality-assurance",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-quality-assurance.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Quality Assurance Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Assurance Services - Software Testing & QA Consulting | iTA Groupe",
    description: "Professional quality assurance services including software testing, automated testing, performance testing, and QA consulting.",
    images: ["/twitter-quality-assurance.jpg"],
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
    canonical: "https://itagroupe.com/services/quality-assurance",
  },
};

export default function QualityAssurancePage() {
  // JSON-LD structured data for Quality Assurance service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quality Assurance Services",
    "description": "Professional quality assurance services including software testing, automated testing, performance testing, and QA consulting. Ensure your software meets the highest quality standards with our expert QA team.",
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
    "serviceType": "Quality Assurance",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Quality Assurance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manual Testing",
            "description": "Comprehensive manual testing services including functional, integration, and user acceptance testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Testing",
            "description": "Test automation services using industry-leading tools and frameworks for efficient testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Testing",
            "description": "Load testing, stress testing, and performance optimization to ensure optimal application performance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Testing",
            "description": "Comprehensive security testing to identify vulnerabilities and ensure application security"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Quality assurance services with comprehensive testing methodologies and expert QA professionals",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "160",
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
        <QualityAssurancePageClient />
      </Suspense>
    </>
  );
}