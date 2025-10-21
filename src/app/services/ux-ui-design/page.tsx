import type { Metadata } from "next";
import UXUIDesignPageClient from "./UXUIDesignPageClient";
import Image from "next/image";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "UX/UI Design Services - User Experience & Interface Design | iTA Groupe",
  description: "Professional UX/UI design services including user experience design, interface design, user research, wireframing, prototyping, and design systems. Create intuitive and engaging digital experiences with our expert design team.",
  keywords: [
    "UX design services",
    "UI design services",
    "user experience design",
    "interface design",
    "user interface design",
    "UX research",
    "wireframing",
    "prototyping",
    "design systems",
    "UX/UI design Morocco",
    "digital design",
    "user-centered design"
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
    title: "UX/UI Design Services - User Experience & Interface Design | iTA Groupe",
    description: "Professional UX/UI design services including user experience design, interface design, user research, wireframing, prototyping, and design systems. Create intuitive and engaging digital experiences with our expert design team.",
    url: "https://itagroupe.com/services/ux-ui-design",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-ux-ui-design.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe UX/UI Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UX/UI Design Services - User Experience & Interface Design | iTA Groupe",
    description: "Professional UX/UI design services including user experience design, interface design, user research, wireframing, prototyping, and design systems.",
    images: ["/twitter-ux-ui-design.jpg"],
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
    canonical: "https://itagroupe.com/services/ux-ui-design",
  },
};

export default function UXUIDesignPage() {
  // JSON-LD structured data for UX/UI Design service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UX/UI Design Services",
    "description": "Professional UX/UI design services including user experience design, interface design, user research, wireframing, prototyping, and design systems. Create intuitive and engaging digital experiences with our expert design team.",
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
    "serviceType": "UX/UI Design",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UX/UI Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "User Experience Design",
            "description": "Comprehensive UX design services including user research, journey mapping, and experience optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "User Interface Design",
            "description": "Modern and intuitive UI design services including visual design, component libraries, and design systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "User Research",
            "description": "In-depth user research and usability testing to understand user needs and improve product usability"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prototyping & Wireframing",
            "description": "Interactive prototyping and wireframing services to visualize and test design concepts before development"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "UX/UI design services with user-centered design principles and modern design methodologies",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "190",
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
        <UXUIDesignPageClient />
      </Suspense>
    </>
  );
}