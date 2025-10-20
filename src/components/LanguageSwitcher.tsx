"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return document.cookie.includes('NEXT_LOCALE=fr') ? 'fr' : 'en';
    }
    return 'en';
  });

  const switchLanguage = (newLocale: string) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);
    // Reload page to apply new locale
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1">
        <Button
          variant={locale === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => switchLanguage('en')}
          className="h-8 px-3 text-sm"
        >
          EN
        </Button>
        <Button
          variant={locale === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => switchLanguage('fr')}
          className="h-8 px-3 text-sm"
        >
          FR
        </Button>
      </div>
    </div>
  );
}