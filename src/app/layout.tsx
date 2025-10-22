import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import GlobalNavigation from "@/components/GlobalNavigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://itagroupe.com'),
  title: {
    default: "iTA Groupe | Software Development Company",
    template: "%s | iTA Groupe"
  },
  description: "Professional software development, web development, SEO optimization, digital marketing, and custom software solutions. Expert team delivering results-driven digital strategies for businesses worldwide.",
  keywords: [
    "web development",
    "software development",
    "digital marketing",
    "SEO optimization", 
    "custom software",
    "e-commerce development",
    "mobile app development",
    "digital transformation",
    "IT consulting",
    "software development company"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "iTA Groupe" }],
  creator: "iTA Groupe",
  publisher: "iTA Groupe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itagroupe.com",
    siteName: "iTA Groupe",
    title: "iTA Groupe - Digital Solutions & Web Development Agency",
    description: "Professional web development, SEO optimization, digital marketing, and custom software solutions. Expert team delivering results-driven digital strategies for businesses worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe - Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iTA Groupe - Digital Solutions & Web Development Agency",
    description: "Professional web development, SEO optimization, digital marketing, and custom software solutions.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://itagroupe.com",
    languages: {
      "en-US": "https://itagroupe.com",
      "fr-FR": "https://itagroupe.com/fr",
      "pl-PL": "https://itagroupe.com/pl",
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1B2A" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "iTA Groupe",
    "url": "https://itagroupe.com",
    "logo": "https://itagroupe.com/logo.png",
    "description": "Professional web development, SEO optimization, digital marketing, and custom software solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (307) 310-6370",
      "contactType": "customer service",
      "email": "hello.itagroupe@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/itagroupe",
      "https://www.instagram.com/ita.groupe/"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Information Technology",
    "services": [
      "Web Development",
      "SEO Optimization", 
      "Digital Marketing",
      "Software Development",
      "Mobile App Development",
      "E-commerce Solutions"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <VisualEditsMessenger />
        <ErrorReporter />
        <LanguageProvider>
          <GlobalNavigation />
          {children}
        </LanguageProvider>
        <Toaster />
        <Script id="orchids-init" strategy="afterInteractive">
          {`window.__ORCHIDS_VISUAL_EDITS__ = true;`}
        </Script>
      </body>
    </html>
  );
}