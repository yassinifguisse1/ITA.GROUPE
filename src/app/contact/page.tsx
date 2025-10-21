import type { Metadata } from "next";
import { Suspense } from "react";
import ContactPageClient from "./ContactPageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact iTA Groupe - Get Your Free Digital Consultation",
  description: "Contact iTA Groupe for professional web development, SEO, and digital marketing services. Get a free consultation for your project. Located in Casablanca, Morocco with global reach.",
  keywords: [
    "contact iTA Groupe",
    "web development consultation",
    "digital marketing consultation",
    "SEO services Morocco",
    "web design consultation",
    "IT consulting Morocco",
    "digital agency contact",
    "software development consultation",
    "get quote web development",
    "free consultation Morocco"
  ],
  openGraph: {
    title: "Contact iTA Groupe - Get Your Free Digital Consultation",
    description: "Contact iTA Groupe for professional web development, SEO, and digital marketing services. Get a free consultation for your project. Located in Casablanca, Morocco with global reach.",
    url: "https://itagroupe.com/contact",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact iTA Groupe - Digital Solutions Consultation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact iTA Groupe - Get Your Free Digital Consultation",
    description: "Contact iTA Groupe for professional web development, SEO, and digital marketing services. Get a free consultation for your project.",
    images: ["/twitter-contact.jpg"],
  },
  alternates: {
    canonical: "https://itagroupe.com/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-600 flex flex-col items-center">
            {/* iTA Groupe Logo */}
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png" alt="iTA Groupe Logo" width={100} height={100} priority />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }
    >
      <ContactPageClient />
    </Suspense>
  );
}