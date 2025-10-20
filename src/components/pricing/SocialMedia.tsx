"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Check, Palette } from "lucide-react";
import Link from "next/link";

interface SocialMediaProps {
  language: "en" | "fr" | "pl";
}

const content = {
  en: {
    badge: "Social Media",
    title: "Grow Your",
    titleGradient: "Community",
    description: "Professional management of your social media. Content creation, strategic planning, and engagement with your audience to build a loyal community.",
    order: "Order",
    startPlan: "Start",
    currency: "USD",
    perMonth: "/ month",
    included: "Included services:",
    plans: [
      {
        name: "Social Basic",
        description: "Ideal solution to start your social media presence with regular and engaging content.",
        features: [
          "8–10 posts per month",
          "Monthly editorial calendar",
          "Automated publishing",
          "Basic comment responses",
          "1 platform of choice (Facebook or Instagram)",
          "Simple visuals with Canva"
        ]
      },
      {
        name: "Social Standard",
        description: "Complete package for businesses looking to maximize engagement with stories and advanced optimization.",
        features: [
          "12–15 posts per month",
          "Daily Instagram stories",
          "Post optimization (hashtags, timing)",
          "Active responses and engagement",
          "2 platforms (Facebook + Instagram)",
          "Premium visuals with custom design"
        ]
      },
      {
        name: "Rebranding / Visual Identity",
        description: "Complete visual identity creation with 3 design proposals to choose from for your brand.",
        features: [
          "3 different design proposals",
          "Professional logo",
          "Brand color palette",
          "Adapted typography",
          "Basic style guide",
          "Source files included (AI, PNG, SVG)"
        ]
      }
    ]
  },
  fr: {
    badge: "Réseaux Sociaux",
    title: "Développez Votre",
    titleGradient: "Communauté",
    description: "Gestion professionnelle de vos réseaux sociaux. Création de contenu, planification stratégique, et engagement avec votre audience pour construire une communauté fidèle.",
    order: "Commander",
    startPlan: "Démarrer",
    currency: "dh",
    perMonth: "/ mois",
    included: "Services inclus:",
    plans: [
      {
        name: "Social Basic",
        description: "Solution idéale pour démarrer votre présence sur les réseaux sociaux avec un contenu régulier et engageant.",
        features: [
          "8–10 posts par mois",
          "Calendrier éditorial mensuel",
          "Publication automatique",
          "Réponses aux commentaires basiques",
          "1 plateforme au choix (Facebook ou Instagram)",
          "Visuels simples avec Canva"
        ]
      },
      {
        name: "Social Standard",
        description: "Formule complète pour entreprises souhaitant maximiser leur engagement avec stories et optimisation avancée.",
        features: [
          "12–15 posts par mois",
          "Stories Instagram quotidiennes",
          "Optimisation des posts (hashtags, timing)",
          "Réponses et engagement actif",
          "2 plateformes (Facebook + Instagram)",
          "Visuels premium avec design personnalisé"
        ]
      },
      {
        name: "Rebranding / Identité Visuelle",
        description: "Création d'identité visuelle complète avec 3 propositions de design au choix pour votre marque.",
        features: [
          "3 propositions de design différentes",
          "Logo professionnel",
          "Palette de couleurs de marque",
          "Typographie adaptée",
          "Guide de style basique",
          "Fichiers sources inclus (AI, PNG, SVG)"
        ]
      }
    ]
  },
  pl: {
    badge: "Media Społecznościowe",
    title: "Rozwijaj Swoją",
    titleGradient: "Społeczność",
    description: "Profesjonalne zarządzanie mediami społecznościowymi. Tworzenie treści, planowanie strategiczne i zaangażowanie z Twoją publicznością, aby zbudować lojalną społeczność.",
    order: "Zamów",
    startPlan: "Rozpocznij",
    currency: "PLN",
    perMonth: "/ miesiąc",
    included: "Usługi w pakiecie:",
    plans: [
      {
        name: "Social Basic",
        description: "Idealne rozwiązanie do rozpoczęcia obecności w mediach społecznościowych z regularną i angażującą treścią.",
        features: [
          "8–10 postów miesięcznie",
          "Miesięczny kalendarz redakcyjny",
          "Automatyczna publikacja",
          "Podstawowe odpowiedzi na komentarze",
          "1 platforma do wyboru (Facebook lub Instagram)",
          "Proste grafiki z Canva"
        ]
      },
      {
        name: "Social Standard",
        description: "Kompleksowy pakiet dla firm chcących zmaksymalizować zaangażowanie z historiami i zaawansowaną optymalizacją.",
        features: [
          "12–15 postów miesięcznie",
          "Codzienne relacje na Instagramie",
          "Optymalizacja postów (hashtagi, timing)",
          "Aktywne odpowiedzi i zaangażowanie",
          "2 platformy (Facebook + Instagram)",
          "Grafiki premium z własnym projektem"
        ]
      },
      {
        name: "Rebranding / Identyfikacja Wizualna",
        description: "Pełne stworzenie tożsamości wizualnej z 3 propozycjami projektowymi do wyboru dla Twojej marki.",
        features: [
          "3 różne propozycje projektowe",
          "Profesjonalne logo",
          "Paleta kolorów marki",
          "Dostosowana typografia",
          "Podstawowy przewodnik stylu",
          "Pliki źródłowe w zestawie (AI, PNG, SVG)"
        ]
      }
    ]
  }
};

const plans = [
  { price: 1000, gradient: "from-pink-500 to-rose-500", icon: null, popular: false },
  { price: 1500, gradient: "from-purple-500 to-indigo-500", icon: null, popular: true },
  { price: 1000, gradient: "from-orange-500 to-amber-500", icon: Palette, popular: false }
];

export default function SocialMedia({ language }: SocialMediaProps) {
  const t = content[language];

  return (
    <section id="social" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20 !w-full !h-[1055px]">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-primary border-primary/20">
            <Facebook className="h-3 w-3 mr-1" />
            <Instagram className="h-3 w-3 mr-2" />
            {t.badge}
          </Badge>
          <h2 className="mb-6">
            {t.title} <span className="gradient-text">{t.titleGradient}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t.description}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, idx) => {
            const planContent = t.plans[idx];
            const PlanIcon = plan.icon;
            return (
              <Link key={planContent.name} href="/services/social-media">
                <Card 
                  className={`group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm overflow-hidden cursor-pointer ${
                    plan.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-2xl">
                      {language === "en" ? "Most Popular" : language === "fr" ? "Plus Populaire" : "Najpopularniejszy"}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon for Rebranding */}
                    {PlanIcon && (
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <PlanIcon className="h-8 w-8 text-white" />
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-4">{planContent.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {planContent.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-primary">{t.included}</h4>
                      {planContent.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button className="w-full rounded-xl" size="lg">
                      {PlanIcon ? t.order : `${t.startPlan} ${planContent.name}`}
                    </Button>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-tl-full`}></div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}