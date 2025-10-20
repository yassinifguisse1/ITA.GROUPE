"use client";

import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";

type NavItem = {
  name: string;
  link?: string;
  megaDropdown?: boolean;
  dropdown?: { name: string; link: string }[];
};

type NavigationStructure = {
  en: NavItem[];
  fr: NavItem[];
  pl: NavItem[];
};

export default function GlobalNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === language) || languages[0];
  };

  const navItems: NavigationStructure = {
    en: [
      { name: "Home", link: "/" },
      { name: "What We Do", megaDropdown: true },
      { name: "Blog", link: "/blog" },
      { name: "About", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "Contact", link: "/contact" },
    ],
    fr: [
      { name: "Accueil", link: "/" },
      { name: "Ce que nous faisons", megaDropdown: true },
      { name: "Blog", link: "/blog" },
      { name: "À propos", link: "/about" },
      { name: "Carrières", link: "/careers" },
      { name: "Contact", link: "/contact" },
    ],
    pl: [
      { name: "Strona główna", link: "/" },
      { name: "Co robimy", megaDropdown: true },
      { name: "Blog", link: "/blog" },
      { name: "O nas", link: "/about" },
      { name: "Kariera", link: "/careers" },
      { name: "Kontakt", link: "/contact" },
    ],
  };

  const megaDropdownContent = {
    en: {
      services: {
        title: "SERVICES",
        items: [
          { name: "Mobile Development", link: "/services/mobile-development" },
          { name: "Software Architecture", link: "/services/software-architecture" },
          { name: "Software Product Development", link: "/services/software-product-development" },
          { name: "UX/UI Design", link: "/services/ux-ui-design" },
          { name: "Quality Assurance", link: "/services/quality-assurance" },
          { name: "Business Analysis", link: "/services/business-analysis" },
          { name: "Dedicated Teams", link: "/services/dedicated-teams" },
          { name: "SEO", link: "/services/seo" },
          { name: "Digital Marketing", link: "/services/digital-marketing" },
        ],
      },
    },
    fr: {
      services: {
        title: "SERVICES",
        items: [
          { name: "Application Mobile", link: "/services/mobile-application" },
          { name: "Développement Mobile", link: "/services/mobile-development" },
          { name: "Architecture Logicielle", link: "/services/software-architecture" },
          { name: "Développement de Produits Logiciels", link: "/services/software-product-development" },
          { name: "Conception UX/UI", link: "/services/ux-ui-design" },
          { name: "Assurance Qualité", link: "/services/quality-assurance" },
          { name: "Analyse d'Affaires", link: "/services/business-analysis" },
          { name: "Équipes Dédiées", link: "/services/dedicated-teams" },
          { name: "SEO", link: "/services/seo" },
          { name: "Marketing Digital", link: "/services/digital-marketing" },
        ],
      },
    },
    pl: {
      services: {
        title: "USŁUGI",
        items: [
          { name: "Rozwój Mobilny", link: "/services/mobile-development" },
          { name: "Architektura Oprogramowania", link: "/services/software-architecture" },
          { name: "Rozwój Produktów Software", link: "/services/software-product-development" },
          { name: "Projektowanie UX/UI", link: "/services/ux-ui-design" },
          { name: "Zapewnienie Jakości", link: "/services/quality-assurance" },
          { name: "Analiza Biznesowa", link: "/services/business-analysis" },
          { name: "Dedykowane Zespoły", link: "/services/dedicated-teams" },
          { name: "SEO", link: "/services/seo" },
          { name: "Marketing Cyfrowy", link: "/services/digital-marketing" },
        ],
      },
    },
  };

  const toggleMobileSubmenu = (itemName: string) => {
    setMobileSubmenu(prev => prev === itemName ? null : itemName);
  };

  const renderMegaDropdown = () => {
    const content = megaDropdownContent[language];
    
    return (
      <div 
        className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-md pt-4"
        style={{ zIndex: 50 }}
        onMouseEnter={() => setActiveDropdown("services-mega")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="rounded-2xl shadow-2xl border border-white/20 bg-white dark:bg-neutral-900/95 overflow-hidden">
          {/* Services Column */}
          <div className="p-6 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-primary/90 mb-4 pb-2 border-b border-border/30">
              {content.services.title}
            </h3>
            <div className="space-y-1">
              {content.services.items.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block px-3 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderNavItem = (item: NavItem, index: number) => {
    if (item.megaDropdown) {
      const isActive = activeDropdown === "services-mega";
      
      return (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setActiveDropdown("services-mega")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2">
            {item.name}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
          </button>
          {isActive && renderMegaDropdown()}
        </div>
      );
    }

    return (
      <Link
        key={index}
        href={item.link!}
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
      >
        {item.name}
      </Link>
    );
  };

  const renderMobileNavItem = (item: NavItem, index: number) => {
    if (item.megaDropdown) {
      const content = megaDropdownContent[language];
      
      return (
        <div key={index} className="border-b border-border/50">
          <button
            onClick={() => toggleMobileSubmenu(item.name)}
            className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <span>{item.name}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                mobileSubmenu === item.name ? "rotate-180" : ""
              }`}
            />
          </button>
          {mobileSubmenu === item.name && (
            <div className="pl-4 pb-4 space-y-4">
              {/* Services */}
              <div>
                <h4 className="text-xs font-bold tracking-wider text-primary mb-2">
                  {content.services.title}
                </h4>
                <div className="space-y-1">
                  {content.services.items.map((subItem, subIdx) => (
                    <Link
                      key={subIdx}
                      href={subItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={index}
        href={item.link!}
        onClick={() => setMobileMenuOpen(false)}
        className="block py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <div className="flex items-center space-x-8">
          {navItems[language].map((item, index) => renderNavItem(item, index))}
        </div>
        <div className="flex items-center gap-3">
          {/* Language Dropdown - Click Only */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-accent"
              aria-label="Select language"
              type="button"
            >
              <span className="text-lg">{getCurrentLanguage().flag}</span>
              <span>{getCurrentLanguage().name}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {languageDropdownOpen && (
              <>
                {/* Backdrop to close dropdown when clicking outside */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setLanguageDropdownOpen(false)}
                />
                <div className="absolute top-full right-0 mt-2 w-48 rounded-xl shadow-2xl border border-white/20 bg-white dark:bg-neutral-900/95 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as "en" | "fr" | "pl");
                        setLanguageDropdownOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-foreground/70 hover:bg-accent/50 hover:text-primary'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <NavbarButton variant="primary">
            {language === "en" ? "Get Started" : language === "fr" ? "Commencer" : "Zaczynaj"}
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            {/* Mobile Language Selector */}
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-accent relative"
              aria-label="Select language"
            >
              <span className="text-base">{getCurrentLanguage().flag}</span>
              <ChevronDown className={`h-3 w-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>
        
        {/* Mobile Language Dropdown */}
        {languageDropdownOpen && (
          <>
            {/* Backdrop to close dropdown when clicking outside */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setLanguageDropdownOpen(false)}
            />
            <div className="absolute top-16 right-4 w-40 rounded-xl shadow-2xl border border-white/20 bg-white dark:bg-neutral-900/95 overflow-hidden z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as "en" | "fr" | "pl");
                    setLanguageDropdownOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-3 py-2.5 text-sm transition-colors ${
                    language === lang.code
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground/70 hover:bg-accent/50 hover:text-primary'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
        
        <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          {navItems[language].map((item, index) => renderMobileNavItem(item, index))}
          <NavbarButton variant="primary" className="w-full mt-4">
            {language === "en" ? "Get Started" : language === "fr" ? "Commencer" : "Zaczynaj"}
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}