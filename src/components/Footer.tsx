"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram } from "lucide-react";

interface FooterProps {
  language: string;
}

const footerContent = {
  en: {
    solutions: "Solutions",
    resources: "Resources",
    company: "Company",
    support: "Support",
    description: "Empowering businesses through digital transformation with innovative web solutions, strategic marketing, and cutting-edge technology.",
    copyright: "iTA Groupe. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    solutionLinks: [
      { label: "Custom Software Development", href: "/services/software-product-development" },
      { label: "Mobile Development", href: "/services/mobile-development" },
      { label: "Software Architecture", href: "/services/software-architecture" },
      { label: "UX/UI Design", href: "/services/ux-ui-design" },
      { label: "Quality Assurance", href: "/services/quality-assurance" },
      { label: "Business Analysis", href: "/services/business-analysis" },
      { label: "Dedicated Teams", href: "/services/dedicated-teams" },
    ],
    resourceLinks: [
      { label: "Cases", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    companyLinks: [
      { label: "About iTA Groupe", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
    supportLinks: [
      { label: "Get Started", href: "/contact" },
      { label: "Help Center", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  fr: {
    solutions: "Solutions",
    resources: "Ressources",
    company: "Entreprise",
    support: "Support",
    description: "Autonomiser les entreprises grâce à la transformation numérique avec des solutions web innovantes, du marketing stratégique et une technologie de pointe.",
    copyright: "iTA Groupe. Tous droits réservés.",
    privacy: "Confidentialité",
    terms: "Conditions",
    solutionLinks: [
      { label: "Développement de Logiciels sur Mesure", href: "/services/software-product-development" },
      { label: "Développement Mobile", href: "/services/mobile-development" },
      { label: "Architecture Logicielle", href: "/services/software-architecture" },
      { label: "Design UX/UI", href: "/services/ux-ui-design" },
      { label: "Assurance Qualité", href: "/services/quality-assurance" },
      { label: "Analyse d'Affaires", href: "/services/business-analysis" },
      { label: "Équipe Dédiée", href: "/services/dedicated-teams" },
    ],
    resourceLinks: [
      { label: "Cas", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    companyLinks: [
      { label: "À Propos d'iTA Groupe", href: "/about" },
      { label: "Carrières", href: "/careers" },
      { label: "Nous Contacter", href: "/contact" },
    ],
    supportLinks: [
      { label: "Commencer", href: "/contact" },
      { label: "Centre d'Aide", href: "/faq" },
      { label: "Confidentialité", href: "/privacy" },
      { label: "Conditions d'Utilisation", href: "/terms" },
    ],
  },
  pl: {
    solutions: "Rozwiązania",
    resources: "Zasoby",
    company: "Firma",
    support: "Wsparcie",
    description: "Wspieramy firmy w cyfrowej transformacji dzięki innowacyjnym rozwiązaniom web, strategicznemu marketingowi i najnowocześniejszej technologii.",
    copyright: "iTA Groupe. Wszelkie prawa zastrzeżone.",
    privacy: "Prywatność",
    terms: "Warunki",
    solutionLinks: [
      { label: "Niestandardowe Tworzenie Oprogramowania", href: "/services/software-product-development" },
      { label: "Rozwój Aplikacji Mobilnych", href: "/services/mobile-development" },
      { label: "Architektura Oprogramowania", href: "/services/software-architecture" },
      { label: "Projektowanie UX/UI", href: "/services/ux-ui-design" },
      { label: "Zapewnienie Jakości", href: "/services/quality-assurance" },
      { label: "Analiza Biznesowa", href: "/services/business-analysis" },
      { label: "Dedykowany Zespół", href: "/services/dedicated-teams" },
    ],
    resourceLinks: [
      { label: "Przypadki", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    companyLinks: [
      { label: "O iTA Groupe", href: "/about" },
      { label: "Kariera", href: "/careers" },
      { label: "Kontakt", href: "/contact" },
    ],
    supportLinks: [
      { label: "Rozpocznij", href: "/contact" },
      { label: "Centrum pomocy", href: "/faq" },
      { label: "Polityka prywatności", href: "/privacy" },
      { label: "Warunki usługi", href: "/terms" },
    ],
  }
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/itagroupe", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/itagroupe", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/itagroupe", label: "Instagram" },
];

export default function Footer({ language = "en" }: FooterProps) {
  const content = footerContent[language as keyof typeof footerContent] || footerContent.en;

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
                alt="iTA Groupe"
                className="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              {content.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground text-base">{content.solutions}</h4>
            <ul className="space-y-3">
              {content.solutionLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground text-base">{content.resources}</h4>
            <ul className="space-y-3">
              {content.resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground text-base">{content.company}</h4>
            <ul className="space-y-3">
              {content.companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-foreground text-base">{content.support}</h4>
            <ul className="space-y-3">
              {content.supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {content.copyright}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">
              {content.privacy}
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              {content.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}