import type { Metadata } from "next";
import { Suspense } from "react";
import SoftwareArchitecturePageClient from "./SoftwareArchitecturePageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Software Architecture Services - System Design & Technical Consulting | iTA Groupe",
  description: "Expert software architecture services including system design, microservices architecture, cloud architecture, and technical consulting. Build scalable, maintainable, and robust software systems with our experienced architects.",
  keywords: [
    "software architecture services",
    "system design",
    "microservices architecture",
    "cloud architecture",
    "technical consulting",
    "software design patterns",
    "scalable architecture",
    "enterprise architecture",
    "API architecture",
    "software architecture Morocco",
    "system integration",
    "architecture consulting"
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
    title: "Software Architecture Services - System Design & Technical Consulting | iTA Groupe",
    description: "Expert software architecture services including system design, microservices architecture, cloud architecture, and technical consulting. Build scalable, maintainable, and robust software systems with our experienced architects.",
    url: "https://itagroupe.com/services/software-architecture",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-software-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Software Architecture Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Architecture Services - System Design & Technical Consulting | iTA Groupe",
    description: "Expert software architecture services including system design, microservices architecture, cloud architecture, and technical consulting.",
    images: ["/twitter-software-architecture.jpg"],
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
    canonical: "https://itagroupe.com/services/software-architecture",
  },
};

export default function SoftwareArchitecturePage() {
  // JSON-LD structured data for Software Architecture service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Architecture Services",
    "description": "Expert software architecture services including system design, microservices architecture, cloud architecture, and technical consulting. Build scalable, maintainable, and robust software systems with our experienced architects.",
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
    "serviceType": "Software Architecture",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Architecture Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System Design",
            "description": "Comprehensive system design services including architecture planning, technology selection, and scalability planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microservices Architecture",
            "description": "Design and implement microservices architecture for scalable, maintainable, and distributed systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Architecture",
            "description": "Cloud-native architecture design and implementation using AWS, Azure, and Google Cloud platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Consulting",
            "description": "Expert technical consulting for architecture decisions, technology stack selection, and best practices"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Software architecture services with expert architects and proven methodologies for robust system design",
      "priceRange": "$$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
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
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png" alt="iTA Groupe Logo" width={100} height={100} priority />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <SoftwareArchitecturePageClient />
      </Suspense>
    </>
  );
}