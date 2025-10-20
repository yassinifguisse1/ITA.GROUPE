"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Megaphone, Settings, BarChart, Check } from "lucide-react";
import Link from "next/link";

interface AdsServicesProps {
  language: "en" | "fr" | "pl";
}

const content = {
  en: {
    badge: "Online Advertising",
    title: "Maximize Your",
    titleGradient: "Ad ROI",
    description: "Professional advertising account setup and optimized campaign management on all platforms to maximize your ROI.",
    setupTab: "Account Setup",
    managementTab: "Campaign Management",
    order: "Order",
    choose: "Choose",
    popular: "Popular",
    budget: "Budget",
    included: "What's Included",
  },
  fr: {
    badge: "Publicité en Ligne",
    title: "Maximisez Votre",
    titleGradient: "Retour Publicitaire",
    description: "Configuration professionnelle de comptes publicitaires et gestion optimisée de vos campagnes sur toutes les plateformes pour maximiser votre ROI.",
    setupTab: "Configuration Comptes",
    managementTab: "Gestion de Campagnes",
    order: "Commander",
    choose: "Choisir",
    popular: "Populaire",
    budget: "Budget",
    included: "Inclus",
  },
  pl: {
    badge: "Reklama Online",
    title: "Maksymalizuj",
    titleGradient: "ROI Reklam",
    description: "Profesjonalna konfiguracja kont reklamowych i zoptymalizowane zarządzanie kampaniami na wszystkich platformach, aby zmaksymalizować ROI.",
    setupTab: "Konfiguracja Konta",
    managementTab: "Zarządzanie Kampaniami",
    order: "Zamów",
    choose: "Wybierz",
    popular: "Najpopularniejszy",
    budget: "Budżet",
    included: "Co jest zawarte",
  }
};

const setupPlans = [
  { 
    price: 1500, 
    gradient: "from-blue-500 to-cyan-500", 
    popular: false,
    features: {
      en: [
        "Google Ads account setup",
        "Basic campaign structure",
        "Keyword research (up to 50)",
        "Ad copywriting (3 ad variations)",
        "Conversion tracking setup",
        "1 platform included"
      ],
      fr: [
        "Configuration compte Google Ads",
        "Structure de campagne basique",
        "Recherche de mots-clés (jusqu'à 50)",
        "Rédaction d'annonces (3 variations)",
        "Configuration suivi conversions",
        "1 plateforme incluse"
      ],
      pl: [
        "Konfiguracja konta Google Ads",
        "Podstawowa struktura kampanii",
        "Badanie słów kluczowych (do 50)",
        "Copywriting reklam (3 warianty)",
        "Konfiguracja śledzenia konwersji",
        "1 platforma wliczona"
      ]
    }
  },
  { 
    price: 2500, 
    gradient: "from-purple-500 to-indigo-500", 
    popular: true,
    features: {
      en: [
        "Multi-platform setup (Google, Meta, LinkedIn)",
        "Advanced campaign structure",
        "Comprehensive keyword research (150+)",
        "Professional ad creative (10 variations)",
        "Advanced conversion tracking & pixels",
        "Audience targeting setup",
        "Retargeting campaign setup",
        "30 days optimization support"
      ],
      fr: [
        "Configuration multi-plateformes (Google, Meta, LinkedIn)",
        "Structure de campagne avancée",
        "Recherche approfondie de mots-clés (150+)",
        "Créations publicitaires pro (10 variations)",
        "Tracking conversions avancé & pixels",
        "Configuration ciblage d'audience",
        "Configuration campagne retargeting",
        "30 jours de support optimisation"
      ],
      pl: [
        "Konfiguracja multi-platformowa (Google, Meta, LinkedIn)",
        "Zaawansowana struktura kampanii",
        "Kompleksowe badanie słów kluczowych (150+)",
        "Profesjonalne kreacje reklamowe (10 wariantów)",
        "Zaawansowane śledzenie konwersji i piksele",
        "Konfiguracja targetowania odbiorców",
        "Konfiguracja kampanii retargetingowej",
        "30 dni wsparcia optymalizacji"
      ]
    }
  },
  { 
    price: 4000, 
    gradient: "from-orange-500 to-amber-500", 
    popular: false,
    features: {
      en: [
        "Full ecosystem setup (all platforms)",
        "Enterprise campaign architecture",
        "Unlimited keyword research",
        "Premium ad creative (20+ variations)",
        "Advanced analytics & dashboard setup",
        "Custom audience segmentation",
        "Multi-channel attribution setup",
        "A/B testing framework",
        "60 days priority optimization support",
        "Dedicated account strategist"
      ],
      fr: [
        "Configuration complète (toutes plateformes)",
        "Architecture de campagne entreprise",
        "Recherche de mots-clés illimitée",
        "Créations publicitaires premium (20+ variations)",
        "Configuration analytics & tableau de bord",
        "Segmentation d'audience personnalisée",
        "Configuration attribution multi-canal",
        "Framework de tests A/B",
        "60 jours de support prioritaire",
        "Stratège de compte dédié"
      ],
      pl: [
        "Pełna konfiguracja ekosystemu (wszystkie platformy)",
        "Architektura kampanii korporacyjnych",
        "Nieograniczone badanie słów kluczowych",
        "Premium kreacje reklamowe (20+ wariantów)",
        "Zaawansowana analityka i konfiguracja dashboardu",
        "Niestandardowa segmentacja odbiorców",
        "Konfiguracja atrybucji wielokanałowej",
        "Framework testów A/B",
        "60 dni priorytetowego wsparcia",
        "Dedykowany strateg konta"
      ]
    }
  }
];

const managementPlans = [
  { 
    price: "1,200 / mois", 
    budget: "≤ 5,000 dh", 
    gradient: "from-green-500 to-emerald-500", 
    popular: false,
    features: {
      en: [
        "Campaign monitoring & optimization",
        "Monthly performance report",
        "Basic A/B testing",
        "Bid management",
        "Email support"
      ],
      fr: [
        "Surveillance & optimisation campagnes",
        "Rapport de performance mensuel",
        "Tests A/B basiques",
        "Gestion des enchères",
        "Support par email"
      ],
      pl: [
        "Monitorowanie i optymalizacja kampanii",
        "Miesięczny raport wydajności",
        "Podstawowe testy A/B",
        "Zarządzanie stawkami",
        "Wsparcie e-mailowe"
      ]
    }
  },
  { 
    price: "2,500 / mois", 
    budget: "≤ 15,000 dh", 
    gradient: "from-blue-500 to-indigo-500", 
    popular: true,
    features: {
      en: [
        "Daily campaign optimization",
        "Advanced A/B testing",
        "Bi-weekly performance reports",
        "Conversion rate optimization",
        "Creative refresh (monthly)",
        "Priority support",
        "Quarterly strategy review"
      ],
      fr: [
        "Optimisation quotidienne campagnes",
        "Tests A/B avancés",
        "Rapports bi-mensuels",
        "Optimisation taux de conversion",
        "Rafraîchissement créatif (mensuel)",
        "Support prioritaire",
        "Revue stratégique trimestrielle"
      ],
      pl: [
        "Codzienna optymalizacja kampanii",
        "Zaawansowane testy A/B",
        "Raporty co dwa tygodnie",
        "Optymalizacja współczynnika konwersji",
        "Odświeżanie kreacji (miesięcznie)",
        "Wsparcie priorytetowe",
        "Kwartalna analiza strategii"
      ]
    }
  },
  { 
    price: "4,000 / mois", 
    budget: "≤ 40,000 dh", 
    gradient: "from-purple-500 to-pink-500", 
    popular: false,
    features: {
      en: [
        "Real-time optimization & monitoring",
        "Advanced multi-variate testing",
        "Weekly strategic reports",
        "Landing page optimization",
        "Custom audience expansion",
        "Creative production (2x/month)",
        "Dedicated account manager",
        "Monthly strategy sessions"
      ],
      fr: [
        "Optimisation & surveillance temps réel",
        "Tests multi-variés avancés",
        "Rapports stratégiques hebdomadaires",
        "Optimisation pages d'atterrissage",
        "Expansion audiences personnalisées",
        "Production créative (2x/mois)",
        "Gestionnaire de compte dédié",
        "Sessions stratégiques mensuelles"
      ],
      pl: [
        "Optymalizacja i monitorowanie w czasie rzeczywistym",
        "Zaawansowane testy wielowariantowe",
        "Cotygodniowe raporty strategiczne",
        "Optymalizacja landing page",
        "Rozszerzenie niestandardowej grupy odbiorców",
        "Produkcja kreacji (2x/miesiąc)",
        "Dedykowany menedżer konta",
        "Miesięczne sesje strategiczne"
      ]
    }
  },
  { 
    price: "10% du spend (min 3,500)", 
    budget: "> 40,000 dh", 
    gradient: "from-red-500 to-orange-500", 
    popular: false,
    features: {
      en: [
        "Enterprise-level optimization",
        "Predictive analytics & AI insights",
        "Real-time dashboard access",
        "Full-funnel optimization",
        "Unlimited creative production",
        "Dedicated growth team",
        "Weekly strategy calls",
        "Custom reporting & KPI tracking"
      ],
      fr: [
        "Optimisation niveau entreprise",
        "Analytics prédictifs & insights IA",
        "Accès tableau de bord temps réel",
        "Optimisation entonnoir complet",
        "Production créative illimitée",
        "Équipe de croissance dédiée",
        "Appels stratégiques hebdomadaires",
        "Rapports personnalisés & suivi KPI"
      ],
      pl: [
        "Optymalizacja na poziomie korporacyjnym",
        "Analityka predykcyjna i insights AI",
        "Dostęp do dashboardu w czasie rzeczywistym",
        "Optymalizacja pełnego lejka",
        "Nieograniczona produkcja kreacji",
        "Dedykowany zespół wzrostu",
        "Cotygodniowe rozmowy strategiczne",
        "Niestandardowe raportowanie i śledzenie KPI"
      ]
    }
  }
];

export default function AdsServices({ language }: AdsServicesProps) {
  const t = content[language];

  return (
    <section id="ads" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-primary border-primary/20">
            <Megaphone className="h-3 w-3 mr-2" />
            {t.badge}
          </Badge>
          <h2 className="mb-6">
            {t.title} <span className="gradient-text">{t.titleGradient}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t.description}
          </p>
        </div>

        <Tabs defaultValue="setup" className="max-w-7xl mx-auto mb-20">
          <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="setup" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Settings className="h-4 w-4 mr-2" />
              {t.setupTab}
            </TabsTrigger>
            <TabsTrigger value="management" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <BarChart className="h-4 w-4 mr-2" />
              {t.managementTab}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="setup">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {setupPlans.map((plan, idx) => (
                <Link key={idx} href="/services/ads">
                  <Card className={`group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer h-full ${plan.popular ? "ring-2 ring-primary shadow-xl" : ""}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
                        {t.popular}
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                        <Settings className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-6">{language === "en" ? ["Essential", "Professional", "Enterprise"][idx] : ["Essentiel", "Professionnel", "Enterprise"][idx]}</h3>
                      
                      <div className="mb-6 flex-grow">
                        <p className="text-sm font-semibold text-muted-foreground mb-3">{t.included}:</p>
                        <ul className="space-y-2">
                          {plan.features[language].map((feature, fidx) => (
                            <li key={fidx} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full rounded-xl mt-auto" size="lg">{t.order}</Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="management">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managementPlans.map((plan, idx) => (
                <Link key={idx} href="/services/ads">
                  <Card className={`group relative p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer h-full ${plan.popular ? "ring-2 ring-primary shadow-xl" : ""}`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-xl">
                        {t.popular}
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4">{language === "en" ? ["Ads Basic", "Ads Standard", "Ads Pro", "Ads Performance"][idx] : ["Ads Basic", "Ads Standard", "Ads Pro", "Ads Performance"][idx]}</h3>
                      <Badge className="mb-4 w-fit" variant="outline">{t.budget}: {plan.budget}</Badge>
                      
                      <div className="mb-6 flex-grow">
                        <p className="text-xs font-semibold text-muted-foreground mb-3">{t.included}:</p>
                        <ul className="space-y-2">
                          {plan.features[language].map((feature, fidx) => (
                            <li key={fidx} className="flex items-start gap-2 text-xs">
                              <Check className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full rounded-xl mt-auto" size="sm">{t.choose}</Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}