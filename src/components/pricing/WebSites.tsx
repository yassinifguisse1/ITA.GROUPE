"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Zap, Check, Globe, Code, Layout } from "lucide-react";
import Link from "next/link";

interface WebSitesProps {
  language: "en" | "fr" | "pl";
}

const content = {
  en: {
    badge: "Professional Websites",
    title: "Build Your",
    titleGradient: "Online Presence",
    description: "Modern, fast and conversion-optimized websites. From simple landing pages to complex platforms, we adapt the solution to your needs.",
    learnMore: "Learn more",
    order: "Order",
    currency: "USD",
    includedServices: "Included services:",
    idealFor: "Ideal for:",
    allInclude: "All Our Sites Include",
    process: "Our Creation Process",
    processSteps: [
      { step: "1", title: "Brief", desc: "Needs analysis" },
      { step: "2", title: "Design", desc: "Mockups and validation" },
      { step: "3", title: "Development", desc: "Code and integration" },
      { step: "4", title: "Launch", desc: "Testing and go-live" }
    ],
    services: [
      {
        name: "Level 1",
        description: "Effective landing page, 1-3 sections, ideal for presenting a service or capturing leads.",
        features: [
          "1-3 optimized sections/pages",
          "Responsive design (mobile + desktop)",
          "Integrated contact form",
          "Basic animations and visuals",
          "SEO-ready (metas, H1-H6 structure)",
          "Hosting and maintenance (3 months)",
          "1 major + 2 minor revisions"
        ],
        benefits: [
          "Fast deployment (7-10 days)",
          "Professional design",
          "Conversion optimized",
          "Technical support included"
        ],
        ideal: ["Freelancers", "Startups", "Local services"],
        timeline: "7-10 days"
      },
      {
        name: "Level 2",
        description: "Multi-page site with blog and advanced features. Complete solution for growing businesses.",
        features: [
          "3-5 complete pages + blog",
          "Advanced custom design",
          "Interactive animations",
          "In-depth SEO optimization",
          "Analytics & tracking integration",
          "Multiple forms and CTAs",
          "Hosting and maintenance (6 months)",
          "2 major + 3 minor revisions"
        ],
        benefits: [
          "Complete professional site",
          "Content marketing ready",
          "Optimized performance",
          "Priority support 6 months"
        ],
        ideal: ["SMEs", "E-commerce", "Agencies"],
        timeline: "14-18 days"
      },
      {
        name: "Level 3",
        description: "Advanced web platform with custom features and complex integrations.",
        features: [
          "6-10 pages + complex architecture",
          "Premium design and branding",
          "Advanced animations and interactions",
          "CRM/API third-party integrations",
          "Client area or dashboard",
          "Maximum performance optimization",
          "Premium hosting (12 months)",
          "3 major + 3 minor revisions"
        ],
        benefits: [
          "Enterprise-grade solution",
          "Maximum scalability",
          "Business integrations",
          "Dedicated technical support 1 year"
        ],
        ideal: ["Large companies", "SaaS", "Platforms"],
        timeline: "20-25 days"
      }
    ],
    features: [
      { title: "100% Responsive", desc: "Perfect on all devices" },
      { title: "Optimal Performance", desc: "Ultra-fast loading" },
      { title: "SEO-Ready", desc: "Ready for search engine" },
      { title: "Web Standards", desc: "Clean and modern code" }
    ]
  },
  fr: {
    badge: "Sites Web Professionnels",
    title: "Créez Votre",
    titleGradient: "Présence en Ligne",
    description: "Sites web modernes, rapides et optimisés pour la conversion. Du landing page simple à la plateforme complexe, nous adaptons la solution à vos besoins.",
    learnMore: "En savoir plus",
    order: "Commander",
    currency: "dh",
    includedServices: "Services inclus:",
    idealFor: "Idéal pour:",
    allInclude: "Tous Nos Sites Incluent",
    process: "Notre Processus de Création",
    processSteps: [
      { step: "1", title: "Brief", desc: "Analyse de vos besoins" },
      { step: "2", title: "Design", desc: "Maquettes et validation" },
      { step: "3", title: "Développement", desc: "Code et intégration" },
      { step: "4", title: "Lancement", desc: "Tests et mise en ligne" }
    ],
    services: [
      {
        name: "Niveau 1",
        description: "Landing page efficace, 1-3 sections, idéale pour présenter un service ou capturer des leads.",
        features: [
          "1-3 sections/pages optimisées",
          "Design responsive (mobile + desktop)",
          "Formulaire de contact intégré",
          "Animations basiques et visuels",
          "SEO-ready (métas, structure H1-H6)",
          "Hébergement et maintenance (3 mois)",
          "1 révision majeure + 2 mineures"
        ],
        benefits: [
          "Mise en ligne rapide (7-10 jours)",
          "Design professionnel",
          "Optimisé conversions",
          "Support technique inclus"
        ],
        ideal: ["Freelancers", "Startups", "Services locaux"],
        timeline: "7-10 jours"
      },
      {
        name: "Niveau 2",
        description: "Site multi-pages avec blog et fonctionnalités avancées. Solution complète pour entreprises en croissance.",
        features: [
          "3-5 pages complètes + blog",
          "Design sur-mesure avancé",
          "Animations interactives",
          "Optimisation SEO approfondie",
          "Intégration analytics & tracking",
          "Formulaires multiples et CTA",
          "Hébergement et maintenance (6 mois)",
          "2 révisions majeures + 3 mineures"
        ],
        benefits: [
          "Site professionnel complet",
          "Content marketing ready",
          "Performance optimisée",
          "Support prioritaire 6 mois"
        ],
        ideal: ["PME", "E-commerce", "Agences"],
        timeline: "14-18 jours"
      },
      {
        name: "Niveau 3",
        description: "Plateforme web avancée avec fonctionnalités sur-mesure et intégrations complexes.",
        features: [
          "6-10 pages + architecture complexe",
          "Design premium et branding",
          "Animations avancées et interactions",
          "Intégrations CRM/API tierces",
          "Espace client ou dashboard",
          "Optimisation performance maximale",
          "Hébergement premium (12 mois)",
          "3 révisions majeures + 3 mineures"
        ],
        benefits: [
          "Solution enterprise-grade",
          "Évolutivité maximale",
          "Intégrations business",
          "Support technique dédié 1 an"
        ],
        ideal: ["Grandes entreprises", "SaaS", "Plateformes"],
        timeline: "20-25 jours"
      }
    ],
    features: [
      { title: "100% Responsive", desc: "Parfait sur tous les appareils" },
      { title: "Performance Optimale", desc: "Chargement ultra-rapide" },
      { title: "SEO-Ready", desc: "Prêt pour le référencement" },
      { title: "Standards Web", desc: "Code propre et moderne" }
    ]
  },
  pl: {
    badge: "Profesjonalne Strony Internetowe",
    title: "Zbuduj Swoją",
    titleGradient: "Obecność Online",
    description: "Nowoczesne, szybkie i zoptymalizowane pod konwersję strony internetowe. Od prostych landing page'y po złożone platformy - dostosowujemy rozwiązanie do Twoich potrzeb.",
    learnMore: "Dowiedz się więcej",
    order: "Zamów",
    currency: "PLN",
    includedServices: "Usługi w pakiecie:",
    idealFor: "Idealne dla:",
    allInclude: "Wszystkie Nasze Strony Zawierają",
    process: "Nasz Proces Tworzenia",
    processSteps: [
      { step: "1", title: "Brief", desc: "Analiza potrzeb" },
      { step: "2", title: "Projekt", desc: "Makiety i akceptacja" },
      { step: "3", title: "Rozwój", desc: "Kodowanie i integracja" },
      { step: "4", title: "Uruchomienie", desc: "Testy i publikacja" }
    ],
    services: [
      {
        name: "Poziom 1",
        description: "Efektywny landing page, 1-3 sekcje, idealny do prezentacji usługi lub pozyskiwania leadów.",
        features: [
          "1-3 zoptymalizowane sekcje/strony",
          "Responsywny design (mobile + desktop)",
          "Zintegrowany formularz kontaktowy",
          "Podstawowe animacje i grafiki",
          "Gotowe do SEO (mety, struktura H1-H6)",
          "Hosting i utrzymanie (3 miesiące)",
          "1 duża + 2 małe rewizje"
        ],
        benefits: [
          "Szybkie wdrożenie (7-10 dni)",
          "Profesjonalny design",
          "Zoptymalizowane pod konwersję",
          "Wsparcie techniczne w pakiecie"
        ],
        ideal: ["Freelancerzy", "Startupy", "Usługi lokalne"],
        timeline: "7-10 dni"
      },
      {
        name: "Poziom 2",
        description: "Wielostronicowa witryna z blogiem i zaawansowanymi funkcjami. Kompletne rozwiązanie dla rozwijających się firm.",
        features: [
          "3-5 pełnych stron + blog",
          "Zaawansowany projekt na zamówienie",
          "Interaktywne animacje",
          "Dogłębna optymalizacja SEO",
          "Integracja analytics & tracking",
          "Wiele formularzy i CTA",
          "Hosting i utrzymanie (6 miesięcy)",
          "2 duże + 3 małe rewizje"
        ],
        benefits: [
          "Pełna profesjonalna strona",
          "Gotowa do content marketingu",
          "Zoptymalizowana wydajność",
          "Priorytetowe wsparcie przez 6 miesięcy"
        ],
        ideal: ["MŚP", "E-commerce", "Agencje"],
        timeline: "14-18 dni"
      },
      {
        name: "Poziom 3",
        description: "Zaawansowana platforma internetowa z funkcjami na zamówienie i złożonymi integracjami.",
        features: [
          "6-10 stron + złożona architektura",
          "Premium design i branding",
          "Zaawansowane animacje i interakcje",
          "Integracje z CRM/API stron trzecich",
          "Panel klienta lub dashboard",
          "Maksymalna optymalizacja wydajności",
          "Premium hosting (12 miesięcy)",
          "3 duże + 3 małe rewizje"
        ],
        benefits: [
          "Rozwiązanie klasy enterprise",
          "Maksymalna skalowalność",
          "Integracje biznesowe",
          "Dedykowane wsparcie techniczne przez rok"
        ],
        ideal: ["Duże firmy", "SaaS", "Platformy"],
        timeline: "20-25 dni"
      }
    ],
    features: [
      { title: "100% Responsywne", desc: "Idealne na wszystkich urządzeniach" },
      { title: "Optymalna Wydajność", desc: "Ultra-szybkie ładowanie" },
      { title: "Gotowe do SEO", desc: "Przygotowane dla wyszukiwarek" },
      { title: "Standardy Web", desc: "Czysty i nowoczesny kod" }
    ]
  }
};

const websiteServices = [
  { price: 8000, icon: Layout, gradient: "from-[#163C2E] to-[#239D89]", popular: false },
  { price: 15000, icon: Monitor, gradient: "from-[#239D89] to-[#163C2E]", popular: true },
  { price: 27000, icon: Code, gradient: "from-[#163C2E] via-[#239D89] to-[#163C2E]", popular: false }
];

const websiteFeatures = [
  { icon: Smartphone },
  { icon: Zap },
  { icon: Globe },
  { icon: Check }
];

export default function WebSites({ language }: WebSitesProps) {
  const t = content[language];

  return (
    <section id="web" className="py-24 md:py-32 relative overflow-hidden !w-full !h-[1789px]">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary border-primary/20">
            <Monitor className="h-3 w-3 mr-2" />
            {t.badge}
          </Badge>
          <h2 className="mb-6">
            {t.title} <span className="gradient-text">{t.titleGradient}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {websiteServices.map((service, idx) => {
            const serviceContent = t.services[idx];
            return (
              <Link key={serviceContent.name} href="/services/websites">
                <Card className={`group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm overflow-hidden cursor-pointer ${service.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}>
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-2xl">
                      {language === "en" ? "Most Popular" : "Plus Populaire"}
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{serviceContent.name}</h3>
                        <Button variant="ghost" size="sm" className="text-xs">
                          {t.learnMore} →
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {serviceContent.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-primary">{t.includedServices}</h4>
                      {serviceContent.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border/50 pt-6 mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold">{t.idealFor}</h4>
                        <Badge variant="outline" className="text-xs">{serviceContent.timeline}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceContent.ideal.map((type) => (
                          <Badge key={type} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full rounded-xl" size="lg">
                      {t.order}
                    </Button>
                  </div>

                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tl-full`}></div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">{t.allInclude}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteFeatures.map((feature, idx) => (
              <Card key={t.features[idx].title} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{t.features[idx].title}</h4>
                <p className="text-xs text-muted-foreground">{t.features[idx].desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-12">{t.process}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.processSteps.map((phase) => (
              <div key={phase.step}>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-3">
                  {phase.step}
                </div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-xs text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}