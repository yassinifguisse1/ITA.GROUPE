import type { Metadata } from "next";
import { Suspense } from "react";
import DedicatedTeamsPageClient from "./DedicatedTeamsPageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dedicated Development Teams - Offshore Software Development | iTA Groupe",
  description: "Hire dedicated development teams for your software projects. Expert developers, designers, and project managers working exclusively on your projects. Flexible engagement models and transparent communication.",
  keywords: [
    "dedicated development teams",
    "offshore software development",
    "remote development teams",
    "dedicated developers",
    "software development outsourcing",
    "IT team augmentation",
    "dedicated team model",
    "offshore development Morocco",
    "remote development services",
    "software development teams",
    "dedicated programmers",
    "development team outsourcing"
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
    title: "Dedicated Development Teams - Offshore Software Development | iTA Groupe",
    description: "Hire dedicated development teams for your software projects. Expert developers, designers, and project managers working exclusively on your projects. Flexible engagement models and transparent communication.",
    url: "https://itagroupe.com/services/dedicated-teams",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-dedicated-teams.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Dedicated Development Teams",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedicated Development Teams - Offshore Software Development | iTA Groupe",
    description: "Hire dedicated development teams for your software projects. Expert developers, designers, and project managers working exclusively on your projects.",
    images: ["/twitter-dedicated-teams.jpg"],
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
    canonical: "https://itagroupe.com/services/dedicated-teams",
  },
};

export default function DedicatedTeamsPage() {
  // JSON-LD structured data for Dedicated Teams service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dedicated Development Teams",
    "description": "Hire dedicated development teams for your software projects. Expert developers, designers, and project managers working exclusively on your projects. Flexible engagement models and transparent communication.",
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
    "serviceType": "Dedicated Development Teams",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dedicated Team Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Development Teams",
            "description": "Complete development teams with frontend, backend, and DevOps specialists"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Development Teams",
            "description": "Dedicated teams for iOS, Android, and cross-platform mobile app development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design Teams",
            "description": "Creative teams specializing in user interface and user experience design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "QA & Testing Teams",
            "description": "Quality assurance teams for comprehensive testing and quality control"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Dedicated development teams with flexible engagement models and transparent pricing",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
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
        <DedicatedTeamsPageClient />
      </Suspense>
    </>
  );
}