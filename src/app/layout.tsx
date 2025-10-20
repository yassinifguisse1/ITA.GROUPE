import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import GlobalNavigation from "@/components/GlobalNavigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iTA Groupe - Digital Solutions",
  description: "Professional web development and digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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