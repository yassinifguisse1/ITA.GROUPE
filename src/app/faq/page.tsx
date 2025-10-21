import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - iTA Groupe Digital Solutions",
  description: "Find answers to common questions about our web development, SEO, digital marketing, and software development services. Get expert insights from iTA Groupe's digital solutions team.",
  keywords: [
    "FAQ iTA Groupe",
    "web development questions",
    "SEO frequently asked questions",
    "digital marketing FAQ",
    "software development FAQ",
    "website creation questions",
    "digital agency FAQ",
    "web design questions Morocco",
    "IT consulting FAQ",
    "digital solutions questions"
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
    title: "Frequently Asked Questions - iTA Groupe Digital Solutions",
    description: "Find answers to common questions about our web development, SEO, digital marketing, and software development services. Get expert insights from iTA Groupe's digital solutions team.",
    url: "https://itagroupe.com/faq",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe FAQ - Digital Solutions Questions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - iTA Groupe Digital Solutions",
    description: "Find answers to common questions about our web development, SEO, digital marketing, and software development services.",
    images: ["/twitter-faq.jpg"],
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
    canonical: "https://itagroupe.com/faq",
  },
};

export default function FAQPage() {
  // JSON-LD structured data for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does iTA Groupe offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iTA Groupe offers comprehensive digital solutions including web development, SEO optimization, digital marketing, custom software development, mobile app development, and IT consulting services."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to create a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website development timelines vary based on complexity. Simple websites take 7-10 days, multi-page sites with blogs require 14-18 days, and complex platforms need 20-25 days. We always meet agreed deadlines."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer support after website launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our packages include technical support and maintenance. Level 1 includes 3 months, Level 2 includes 6 months, and Level 3 includes 12 months of premium support."
        }
      },
      {
        "@type": "Question",
        "name": "How does SEO optimization work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our SEO service includes technical optimization, keyword research, content optimization, Google Business profile creation, and continuous performance monitoring. Results typically appear after 3-6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Can I modify my website after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our sites include revisions during the initial period. For modifications after that, we offer monthly maintenance packages or one-time interventions as requested."
        }
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "iTA Groupe",
      "url": "https://itagroupe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://itagroupe.com/logo.png",
      },
    },
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
        <FAQPageClient />
      </Suspense>
    </>
  );
}