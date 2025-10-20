"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr" | "pl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to detect browser language
const detectBrowserLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  
  // Get browser language (e.g., "en-US", "fr-FR", "pl-PL")
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Extract the primary language code
  const langCode = browserLang.toLowerCase().split('-')[0];
  
  // Map to supported languages
  if (langCode === "fr") return "fr";
  if (langCode === "pl") return "pl";
  
  // Default to English
  return "en";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Detect browser language or use saved preference
  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    
    if (saved && (saved === "en" || saved === "fr" || saved === "pl")) {
      // Use saved preference if exists
      setLanguage(saved);
    } else {
      // Auto-detect browser language on first visit
      const detected = detectBrowserLanguage();
      setLanguage(detected);
      localStorage.setItem("language", detected);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fr" : language === "fr" ? "pl" : "en";
    handleSetLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}