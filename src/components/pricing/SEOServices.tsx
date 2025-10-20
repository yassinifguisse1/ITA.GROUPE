"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Gauge, Check } from "lucide-react";
import Link from "next/link";

interface SEOServicesProps {
  language: "en" | "fr" | "pl";
}

const content = {
  en: {
    badge: "SEO & Referencing",
    title: "Boost Your",
    titleGradient: "Online Visibility",
    description: "Professional SEO optimization to reach the first page of Google. Quick setup, measurable results, and sustainable traffic growth.",
    order: "Order",
    currency: "USD",
    included: "What's included:",
    services: [
      {
        name: "One-time Setup",
        description: "Complete initial configuration to optimize your visibility from the start. Solid SEO foundations.",
        features: [
          "Metas, sitemap, robots, Console, Analytics",
          "Google Search Console configuration",
          "Google Analytics 4 installation",
          "robots.txt and sitemap.xml optimization",
          "Optimized meta tags (title, description)",
          "Basic schema markup"
        ]
      },
      {
        name: "Google Business (Maps)",
        description: "Optimize your local presence and attract customers near you through Google Maps.",
        features: [
          "Profile creation/optimization",
          "Review management and responses",
          "Local performance tracking",
          "Photo and description optimization",
          "Strategic categories and attributes",
          "Hours and services integration"
        ]
      },
      {
        name: "SEO Optimization",
        description: "Complete on-page optimization to improve your ranking and attract qualified organic traffic.",
        features: [
          "On-page: H1, metas, linking, speed",
          "Optimization up to 5 pages",
          "Strategic keyword research",
          "H1-H6 structure optimization",
          "Loading speed improvement",
          "Strategic internal linking"
        ]
      }
    ]
  },
  fr: {
    badge: "SEO & Référencement",
    title: "Boostez Votre",
    titleGradient: "Visibilité en Ligne",
    description: "Optimisation SEO professionnelle pour atteindre la première page de Google. Mise en place rapide, résultats mesurables, et croissance durable de votre trafic.",
    order: "Commander",
    currency: "dh",
    included: "Ce qui est inclus:",
    services: [
      {
        name: "One-time Setup",
        description: "Configuration initiale complète pour optimiser votre visibilité dès le départ. Fondations SEO solides.",
        features: [
          "Metas, sitemap, robots, Console, Analytics",
          "Configuration Google Search Console",
          "Installation Google Analytics 4",
          "Optimisation robots.txt et sitemap.xml",
          "Tags meta optimisés (titre, description)",
          "Schema markup de base"
        ]
      },
      {
        name: "Google Business (Maps)",
        description: "Optimisez votre présence locale et attirez des clients près de chez vous grâce à Google Maps.",
        features: [
          "Création/optimisation de la fiche",
          "Gestion et réponse aux avis",
          "Tracking des performances locales",
          "Optimisation des photos et descriptions",
          "Catégories et attributs stratégiques",
          "Intégration horaires et services"
        ]
      },
      {
        name: "SEO Optimisation",
        description: "Optimisation on-page complète pour améliorer votre classement et attirer du trafic qualifié organique.",
        features: [
          "On-page: H1, metas, maillage, vitesse",
          "Optimisation jusqu'à 5 pages",
          "Recherche de mots-clés stratégiques",
          "Optimisation structure H1-H6",
          "Amélioration vitesse de chargement",
          "Maillage interne stratégique"
        ]
      }
    ]
  },
  pl: {
    badge: "SEO i Pozycjonowanie",
    title: "Zwiększ Swoją",
    titleGradient: "Widoczność Online",
    description: "Profesjonalna optymalizacja SEO, aby dotrzeć na pierwszą stronę Google. Szybka konfiguracja, wymierne rezultaty i trwały wzrost ruchu.",
    order: "Zamów",
    currency: "PLN",
    included: "Co jest zawarte:",
    services: [
      {
        name: "Konfiguracja Jednorazowa",
        description: "Kompletna konfiguracja początkowa, aby zoptymalizować widoczność od samego początku. Solidne fundamenty SEO.",
        features: [
          "Mety, mapa witryny, robots, Konsola, Analytics",
          "Konfiguracja Google Search Console",
          "Instalacja Google Analytics 4",
          "Optymalizacja robots.txt i sitemap.xml",
          "Zoptymalizowane tagi meta (tytuł, opis)",
          "Podstawowe znaczniki schema"
        ]
      },
      {
        name: "Google Business (Mapy)",
        description: "Zoptymalizuj swoją lokalną obecność i przyciągnij klientów w pobliżu poprzez Mapy Google.",
        features: [
          "Tworzenie/optymalizacja profilu",
          "Zarządzanie i odpowiedzi na recenzje",
          "Śledzenie wyników lokalnych",
          "Optymalizacja zdjęć i opisów",
          "Strategiczne kategorie i atrybuty",
          "Integracja godzin i usług"
        ]
      },
      {
        name: "Optymalizacja SEO",
        description: "Kompletna optymalizacja on-page, aby poprawić ranking i przyciągnąć kwalifikowany ruch organiczny.",
        features: [
          "On-page: H1, mety, linkowanie, prędkość",
          "Optymalizacja do 5 stron",
          "Strategiczne badanie słów kluczowych",
          "Optymalizacja struktury H1-H6",
          "Poprawa szybkości ładowania",
          "Strategiczne linkowanie wewnętrzne"
        ]
      }
    ]
  }
};

const services = [
  { price: 1500, icon: Search, gradient: "from-green-500 to-emerald-500" },
  { price: 1000, icon: MapPin, gradient: "from-red-500 to-orange-500" },
  { price: 2500, icon: Gauge, gradient: "from-blue-500 to-indigo-500" }
];

export default function SEOServices({ language }: SEOServicesProps) {
  const t = content[language];

  return (
    <section id="seo" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background !w-full !h-[997px]">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 text-primary border-primary/20">
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
          {services.map((service, idx) => {
            const serviceContent = t.services[idx];
            return (
              <Link key={serviceContent.name} href="/services/seo">
                <Card
                  className="group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm overflow-hidden cursor-pointer">

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-4">{serviceContent.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {serviceContent.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-primary">{t.included}</h4>
                      {serviceContent.features.map((feature) =>
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <Button className="w-full rounded-xl" size="lg">
                      {t.order}
                    </Button>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tl-full`}></div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}