import type { Metadata } from "next";
import SoftwareProductDevelopmentPageClient from "./SoftwareProductDevelopmentPageClient";
import Image from "next/image";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Software Product Development - Custom Software Solutions & MVP Development | iTA Groupe",
  description: "Expert software product development services including custom software solutions, MVP development, product strategy, and full-stack development. Transform your ideas into successful digital products with our experienced development team.",
  keywords: [
    "software product development",
    "custom software development",
    "MVP development",
    "product strategy",
    "full-stack development",
    "software solutions",
    "product development consulting",
    "digital product development",
    "software development Morocco",
    "product lifecycle management",
    "agile development",
    "software engineering"
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
    title: "Software Product Development - Custom Software Solutions & MVP Development | iTA Groupe",
    description: "Expert software product development services including custom software solutions, MVP development, product strategy, and full-stack development. Transform your ideas into successful digital products with our experienced development team.",
    url: "https://itagroupe.com/services/software-product-development",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-software-product-development.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Software Product Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Product Development - Custom Software Solutions & MVP Development | iTA Groupe",
    description: "Expert software product development services including custom software solutions, MVP development, product strategy, and full-stack development.",
    images: ["/twitter-software-product-development.jpg"],
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
    canonical: "https://itagroupe.com/services/software-product-development",
  },
};

export default function SoftwareProductDevelopmentPage() {
  // JSON-LD structured data for Software Product Development service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Product Development",
    "description": "Expert software product development services including custom software solutions, MVP development, product strategy, and full-stack development. Transform your ideas into successful digital products with our experienced development team.",
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
    "serviceType": "Software Product Development",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Product Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions built from scratch to meet specific business requirements and objectives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP Development",
            "description": "Minimum Viable Product development to validate ideas quickly and cost-effectively with market feedback"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Strategy",
            "description": "Strategic planning and consultation for software product development, market analysis, and product roadmap"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Development",
            "description": "Complete end-to-end software development including frontend, backend, database, and deployment"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Software product development services with agile methodologies and proven development processes",
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
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png" alt="iTA Groupe Logo" width={100} height={100} priority />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <SoftwareProductDevelopmentPageClient />
      </Suspense>
    </>
  );
}