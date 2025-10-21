"use client";

import { Megaphone, Target, TrendingUp, ArrowRight, Sparkles, Users, BarChart3, Award, Zap, Globe, Mail, Share2, CheckCircle2, Phone, MousePointerClick, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Footer from "@/components/Footer";
import GlobalNavigation from "@/components/GlobalNavigation";
import ShaderBackground from "@/components/ShaderBackground";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import React from "react";

export default function DigitalMarketingPageClient() {
  const { language } = useLanguage();
  const [hoveredService, setHoveredService] = React.useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = React.useState<number | null>(null);

  const translations = {
    en: {
      hero: {
        badge: "Digital Marketing & Growth",
        titleHighlight: "Digital Marketing",
        titleRest: "Results-Driven",
        subtitle: "We've helped businesses generate over",
        subtitleAmount: "$1.5M per month",
        subtitleEnd: "through our data-driven digital marketing strategies and optimized campaigns.",
        ctaPrimary: "Start Your Campaign",
        ctaSecondary: "Free Consultation",
        trust1: "Measurable ROI",
        trust2: "Custom Strategy",
        trust3: "Proven Results"
      },
      stats: {
        badge: "OUR RESULTS",
        title: "Numbers That Speak",
        stat1: { value: "$1.5M+", label: "REVENUE GENERATED", desc: "For our clients each month" },
        stat2: { value: "350%", label: "AVERAGE ROI", desc: "Return on ad spend" },
        stat3: { value: "4.8%", label: "CONVERSION RATE", desc: "Average conversion rate achieved" },
        stat4: { value: "85%", label: "CLIENT ENGAGEMENT", desc: "Digital engagement improvement" }
      },
      services: {
        badge: "OUR SERVICES",
        title: "Complete Marketing Solutions",
        items: [
          {
            title: "Google Ads & PPC",
            desc: "Targeted advertising campaigns on Google Ads, Facebook Ads, LinkedIn Ads and more. Complete management with continuous optimization to maximize your ROI."
          },
          {
            title: "Social Media Marketing",
            desc: "Strategic management of your social media with engaging content creation, community management and targeted advertising campaigns."
          },
          {
            title: "Email Marketing",
            desc: "Personalized email marketing campaigns that convert. Automation, segmentation and optimization to maximize engagement and sales."
          },
          {
            title: "Content Marketing",
            desc: "Quality content creation that attracts and engages your audience. Blogs, videos, infographics and more to establish your authority."
          },
          {
            title: "Analytics & Data",
            desc: "In-depth analysis of your marketing data to make informed decisions. Custom dashboards and actionable reports."
          },
          {
            title: "Marketing Automation",
            desc: "Automate your marketing processes to save time and improve efficiency. Lead nurturing, scoring and custom workflows."
          }
        ]
      },
      whyChoose: {
        badge: "WHY US",
        title: "Why Choose Our Agency?",
        items: [
          {
            number: "01",
            title: "MULTI-CHANNEL EXPERTISE",
            description: "Our team masters all digital marketing channels: SEO, SEM, social media, email, content marketing and more. A holistic approach to maximize your online presence."
          },
          {
            number: "02",
            title: "MEASURABLE RESULTS",
            description: "Every campaign is tracked and analyzed in depth. You get detailed reports with clear KPIs and concrete optimization recommendations."
          },
          {
            number: "03",
            title: "CUSTOM STRATEGY",
            description: "No one-size-fits-all solutions. We create a custom marketing strategy tailored to your business, goals and specific budget."
          },
          {
            number: "04",
            title: "DEDICATED SUPPORT",
            description: "A dedicated account manager for your project. Transparent communication, responsiveness and availability to answer all your questions."
          }
        ]
      },
      process: {
        badge: "OUR PROCESS",
        title: "How We Work",
        steps: [
          {
            number: "[01]",
            title: "AUDIT & ANALYSIS",
            description: "In-depth analysis of your current situation, competitors and market. Identification of opportunities and areas for improvement."
          },
          {
            number: "[02]",
            title: "STRATEGY & PLANNING",
            description: "Development of a personalized marketing strategy with clear objectives, measurable KPIs and detailed roadmap for each channel."
          },
          {
            number: "[03]",
            title: "EXECUTION & OPTIMIZATION",
            description: "Campaign implementation with real-time monitoring. Continuous A/B testing and data-driven optimizations to maximize performance."
          },
          {
            number: "[04]",
            title: "REPORTING & IMPROVEMENT",
            description: "Regular detailed reports with results analysis, strategic recommendations and adjustments to continuously improve ROI."
          }
        ]
      },
      cta: {
        title: "Ready to Boost Your Digital Presence?",
        subtitle: "Let's discuss your project and create together a marketing strategy that generates results.",
        ctaPrimary: "Request a Consultation",
        ctaSecondary: "Discover Our Services"
      }
    },
    fr: {
      hero: {
        badge: "Marketing Digital & Growth",
        titleHighlight: "Marketing Digital",
        titleRest: "Axé sur les Résultats",
        subtitle: "Nous avons aidé des entreprises à générer plus de",
        subtitleAmount: "$1.5M par mois",
        subtitleEnd: "grâce à nos stratégies de marketing digital data-driven et nos campagnes optimisées.",
        ctaPrimary: "Démarrer Votre Campagne",
        ctaSecondary: "Consultation Gratuite",
        trust1: "ROI Mesurable",
        trust2: "Stratégie Personnalisée",
        trust3: "Résultats Prouvés"
      },
      stats: {
        badge: "NOS RÉSULTATS",
        title: "Les Chiffres Qui Parlent",
        stat1: { value: "$1.5M+", label: "REVENUS GÉNÉRÉS", desc: "Pour nos clients chaque mois" },
        stat2: { value: "350%", label: "ROI MOYEN", desc: "Retour sur investissement publicitaire" },
        stat3: { value: "4.8%", label: "TAUX DE CONVERSION", desc: "Taux de conversion moyen atteint" },
        stat4: { value: "85%", label: "ENGAGEMENT CLIENT", desc: "Amélioration de l'engagement digital" }
      },
      services: {
        badge: "NOS SERVICES",
        title: "Solutions Marketing Complètes",
        items: [
          {
            title: "Google Ads & PPC",
            desc: "Campagnes publicitaires ciblées sur Google Ads, Facebook Ads, LinkedIn Ads et plus. Gestion complète avec optimisation continue pour maximiser votre ROI."
          },
          {
            title: "Social Media Marketing",
            desc: "Gestion stratégique de vos réseaux sociaux avec création de contenu engageant, community management et campagnes publicitaires ciblées."
          },
          {
            title: "Email Marketing",
            desc: "Campagnes d'email marketing personnalisées qui convertissent. Automation, segmentation et optimisation pour maximiser l'engagement et les ventes."
          },
          {
            title: "Content Marketing",
            desc: "Création de contenu de qualité qui attire et engage votre audience. Blogs, vidéos, infographies et plus pour établir votre autorité."
          },
          {
            title: "Analytics & Data",
            desc: "Analyse approfondie de vos données marketing pour prendre des décisions éclairées. Dashboards personnalisés et rapports actionnables."
          },
          {
            title: "Marketing Automation",
            desc: "Automatisez vos processus marketing pour gagner du temps et améliorer l'efficacité. Lead nurturing, scoring et workflows personnalisés."
          }
        ]
      },
      whyChoose: {
        badge: "POURQUOI NOUS",
        title: "Pourquoi Choisir Notre Agence?",
        items: [
          {
            number: "01",
            title: "EXPERTISE MULTI-CANAL",
            description: "Notre équipe maîtrise tous les canaux du marketing digital: SEO, SEM, social media, email, content marketing et plus. Une approche holistique pour maximiser votre présence en ligne."
          },
          {
            number: "02",
            title: "RÉSULTATS MESURABLES",
            description: "Chaque campagne est trackée et analysée en profondeur. Vous obtenez des rapports détaillés avec des KPIs clairs et des recommandations d'optimisation concrètes."
          },
          {
            number: "03",
            title: "STRATÉGIE PERSONNALISÉE",
            description: "Pas de solutions toutes faites. Nous créons une stratégie marketing sur mesure adaptée à votre business, vos objectifs et votre budget spécifique."
          },
          {
            number: "04",
            title: "SUPPORT DÉDIÉ",
            description: "Un gestionnaire de compte dédié pour votre projet. Communication transparente, réactivité et disponibilité pour répondre à toutes vos questions."
          }
        ]
      },
      process: {
        badge: "NOTRE PROCESSUS",
        title: "Comment Nous Travaillons",
        steps: [
          {
            number: "[01]",
            title: "AUDIT & ANALYSE",
            description: "Analyse approfondie de votre situation actuelle, de vos concurrents et de votre marché. Identification des opportunités et des axes d'amélioration."
          },
          {
            number: "[02]",
            title: "STRATÉGIE & PLANNING",
            description: "Développement d'une stratégie marketing personnalisée avec objectifs clairs, KPIs mesurables et roadmap détaillée pour chaque canal."
          },
          {
            number: "[03]",
            title: "EXÉCUTION & OPTIMISATION",
            description: "Mise en place des campagnes avec suivi en temps réel. Tests A/B continus et optimisations basées sur les données pour maximiser les performances."
          },
          {
            number: "[04]",
            title: "REPORTING & AMÉLIORATION",
            description: "Rapports détaillés réguliers avec analyse des résultats, recommandations stratégiques et ajustements pour améliorer continuellement le ROI."
          }
        ]
      },
      cta: {
        title: "Prêt à Booster Votre Présence Digitale?",
        subtitle: "Discutons de votre projet et créons ensemble une stratégie marketing qui génère des résultats.",
        ctaPrimary: "Demander une Consultation",
        ctaSecondary: "Découvrir Nos Services"
      }
    },
    pl: {
      hero: {
        badge: "Marketing Cyfrowy i Wzrost",
        titleHighlight: "Marketing Cyfrowy",
        titleRest: "Oparty na Wynikach",
        subtitle: "Pomogliśmy firmom wygenerować ponad",
        subtitleAmount: "$1.5M miesięcznie",
        subtitleEnd: "dzięki naszym strategiom marketingu cyfrowego opartym na danych i zoptymalizowanym kampaniom.",
        ctaPrimary: "Rozpocznij Kampanię",
        ctaSecondary: "Bezpłatna Konsultacja",
        trust1: "Mierzalny ROI",
        trust2: "Spersonalizowana Strategia",
        trust3: "Sprawdzone Wyniki"
      },
      stats: {
        badge: "NASZE WYNIKI",
        title: "Liczby, Które Mówią Wszystko",
        stat1: { value: "$1.5M+", label: "WYGENEROWANE PRZYCHODY", desc: "Dla naszych klientów miesięcznie" },
        stat2: { value: "350%", label: "ŚREDNI ROI", desc: "Zwrot z wydatków reklamowych" },
        stat3: { value: "4.8%", label: "WSKAŹNIK KONWERSJI", desc: "Średni osiągnięty wskaźnik konwersji" },
        stat4: { value: "85%", label: "ZAANGAŻOWANIE KLIENTÓW", desc: "Poprawa zaangażowania cyfrowego" }
      },
      services: {
        badge: "NASZE USŁUGI",
        title: "Kompleksowe Rozwiązania Marketingowe",
        items: [
          {
            title: "Google Ads i PPC",
            desc: "Ukierunkowane kampanie reklamowe w Google Ads, Facebook Ads, LinkedIn Ads i innych. Kompleksowe zarządzanie z ciągłą optymalizacją w celu maksymalizacji ROI."
          },
          {
            title: "Marketing w Mediach Społecznościowych",
            desc: "Strategiczne zarządzanie mediami społecznościowymi z tworzeniem angażujących treści, zarządzaniem społecznością i ukierunkowanymi kampaniami reklamowymi."
          },
          {
            title: "Email Marketing",
            desc: "Spersonalizowane kampanie e-mail marketingowe, które konwertują. Automatyzacja, segmentacja i optymalizacja w celu maksymalizacji zaangażowania i sprzedaży."
          },
          {
            title: "Content Marketing",
            desc: "Tworzenie wysokiej jakości treści, które przyciągają i angażują odbiorców. Blogi, filmy, infografiki i więcej, aby ustanowić swoją pozycję."
          },
          {
            title: "Analityka i Dane",
            desc: "Dogłębna analiza danych marketingowych w celu podejmowania świadomych decyzji. Niestandardowe dashboardy i raporty działań."
          },
          {
            title: "Automatyzacja Marketingu",
            desc: "Zautomatyzuj procesy marketingowe, aby zaoszczędzić czas i poprawić efektywność. Lead nurturing, scoring i niestandardowe przepływy pracy."
          }
        ]
      },
      whyChoose: {
        badge: "DLACZEGO MY",
        title: "Dlaczego Wybrać Naszą Agencję?",
        items: [
          {
            number: "01",
            title: "DOŚWIADCZENIE WIELOKANAŁOWE",
            description: "Nasz zespół opanował wszystkie kanały marketingu cyfrowego: SEO, SEM, media społecznościowe, email, content marketing i więcej. Holistyczne podejście do maksymalizacji Twojej obecności online."
          },
          {
            number: "02",
            title: "MIERZALNE WYNIKI",
            description: "Każda kampania jest śledzona i analizowana dogłębnie. Otrzymujesz szczegółowe raporty z jasnymi KPI i konkretnymi zaleceniami dotyczącymi optymalizacji."
          },
          {
            number: "03",
            title: "SPERSONALIZOWANA STRATEGIA",
            description: "Żadnych uniwersalnych rozwiązań. Tworzymy spersonalizowaną strategię marketingową dostosowaną do Twojej firmy, celów i konkretnego budżetu."
          },
          {
            number: "04",
            title: "DEDYKOWANE WSPARCIE",
            description: "Dedykowany menedżer konta dla Twojego projektu. Przejrzysta komunikacja, responsywność i dostępność, aby odpowiedzieć na wszystkie Twoje pytania."
          }
        ]
      },
      process: {
        badge: "NASZ PROCES",
        title: "Jak Pracujemy",
        steps: [
          {
            number: "[01]",
            title: "AUDIT I ANALIZA",
            description: "Dogłębna analiza Twojej obecnej sytuacji, konkurencji i rynku. Identyfikacja możliwości i obszarów do poprawy."
          },
          {
            number: "[02]",
            title: "STRATEGIA I PLANOWANIE",
            description: "Opracowanie spersonalizowanej strategii marketingowej z jasnymi celami, mierzalnymi KPI i szczegółową mapą drogową dla każdego kanału."
          },
          {
            number: "[03]",
            title: "REALIZACJA I OPTYMALIZACJA",
            description: "Wdrożenie kampanii z monitorowaniem w czasie rzeczywistym. Ciągłe testy A/B i optymalizacje oparte na danych w celu maksymalizacji wydajności."
          },
          {
            number: "[04]",
            title: "RAPORTOWANIE I ULEPSZANIE",
            description: "Regularne szczegółowe raporty z analizą wyników, strategicznymi zaleceniami i korektami w celu ciągłego poprawiania ROI."
          }
        ]
      },
      cta: {
        title: "Gotowy na Wzmocnienie Swojej Obecności Cyfrowej?",
        subtitle: "Porozmawiajmy o Twoim projekcie i stwórzmy razem strategię marketingową, która generuje wyniki.",
        ctaPrimary: "Zamów Konsultację",
        ctaSecondary: "Odkryj Nasze Usługi"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <GlobalNavigation />
      
      {/* Hero Section */}
      <ShaderBackground>
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Animated Gradient Background with Brand Colors */}
          <div className="absolute inset-0 -z-10">
            {/* Base gradient layer with brand colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#163C2E] via-[#1a4838] to-[#239D89]"></div>
            
            {/* Animated orbs */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#239D89]/30 rounded-full blur-[120px]"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#163C2E]/40 rounded-full blur-[120px]"
              animate={{
                x: [0, -30, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
            
            {/* Noise texture */}
            <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
            }}></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <Megaphone className="h-4 w-4" />
                  <span>{t.hero.badge}</span>
                </Badge>
              </motion.div>

              {/* Headline with PointerHighlight */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                <PointerHighlight
                  rectangleClassName="bg-[#239D89]/20 border-[#239D89]/30 leading-loose"
                  pointerClassName="text-[#239D89] h-3 w-3"
                  containerClassName="inline-block"
                >
                  <span className="text-white font-bold">
                    {t.hero.titleHighlight}
                  </span>
                </PointerHighlight>
                <br />
                {t.hero.titleRest}
              </motion.h1>

              {/* Subheadline with $1.5M achievement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
              >
                {t.hero.subtitle} <span className="text-[#239D89] font-bold">{t.hero.subtitleAmount}</span> {t.hero.subtitleEnd}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-[#163C2E] hover:bg-white/90" asChild>
                  <Link href="/contact">
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.hero.ctaSecondary}
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-white/70"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                  <span>{t.hero.trust1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                  <span>{t.hero.trust2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                  <span>{t.hero.trust3}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ShaderBackground>

      {/* Stats Section - MATCHING "WE DELIVER" DESIGN */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              — {t.stats.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.stats.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[t.stats.stat1, t.stats.stat2, t.stats.stat3, t.stats.stat4].map((stat, index) => {
              const icons = [DollarSign, TrendingUp, MousePointerClick, Users];
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredTech(index)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="relative group"
                >
                  <motion.div 
                    className="h-full p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 transition-all duration-300 cursor-pointer"
                    animate={{
                      borderColor: hoveredTech === index ? "#239D89" : "",
                      boxShadow: hoveredTech === index ? "0 10px 40px rgba(35, 157, 137, 0.15)" : "",
                      scale: hoveredTech === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div 
                      className="flex justify-center mb-6"
                      animate={{
                        scale: hoveredTech === index ? 1.1 : 1,
                        rotateY: hoveredTech === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-[#239D89]/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#239D89]" />
                      </div>
                    </motion.div>

                    {/* Value */}
                    <motion.div 
                      className="text-4xl font-bold text-center mb-2 text-[#1e3a5f] dark:text-white"
                      animate={{ 
                        color: hoveredTech === index ? "#239D89" : ""
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <motion.h3 
                      className="text-sm font-bold text-center mb-3 text-[#1e3a5f] dark:text-white uppercase tracking-wide"
                      animate={{ 
                        color: hoveredTech === index ? "#239D89" : ""
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.label}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-sm text-center text-neutral-600 dark:text-neutral-400"
                      animate={{
                        y: hoveredTech === index ? -3 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.desc}
                    </motion.p>

                    {/* Hover accent line */}
                    <motion.div 
                      className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-[#239D89] to-[#1e8473] rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{
                        width: hoveredTech === index ? "80%" : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid - MATCHING SOFTWARE PRODUCT DEVELOPMENT PAGE */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              — {t.services.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.services.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => {
              const icons = [Target, Share2, Mail, Globe, BarChart3, Zap];
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    hoveredService === index
                      ? 'bg-[#163C2E] border-[#239D89] shadow-lg shadow-[#239D89]/20'
                      : 'bg-white dark:bg-[#1a2942] border-neutral-200 dark:border-[#1a2942] hover:border-[#239D89]/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className="p-3 rounded-xl bg-[#239D89]/10 text-[#239D89]"
                      animate={{
                        scale: hoveredService === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <motion.div
                      animate={{
                        x: hoveredService === index ? 5 : 0,
                        opacity: hoveredService === index ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 text-[#239D89]" />
                    </motion.div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    hoveredService === index ? 'text-white' : 'text-neutral-900 dark:text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    hoveredService === index ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'
                  }`}>
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - MATCHING "HOW WE WORK" DESIGN FROM SOFTWARE PRODUCT DEVELOPMENT PAGE */}
      <section className="relative py-32 px-6 bg-[#0f1724] overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2942]/50 via-transparent to-[#239D89]/10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              — {t.whyChoose.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t.whyChoose.title}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {t.whyChoose.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.27, 0.9]
                }}
                className="relative"
              >
                <motion.div 
                  className="grid lg:grid-cols-12 gap-8 items-start"
                  whileInView={{ 
                    scale: [0.95, 1],
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1 + 0.2 
                  }}
                >
                  {/* Number */}
                  <div className="lg:col-span-2">
                    <motion.div 
                      className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#239D89] to-[#1e90ff] bg-clip-text text-transparent"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      [{item.number}]
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <motion.div 
                      className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1a2942] to-[#0f1724] border-2 border-[#239D89]/20 hover:border-[#239D89]/50 transition-all duration-500"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 60px rgba(35, 157, 137, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#239D89]/10 to-transparent rounded-bl-full" />
                      
                      <motion.h3 
                        className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.1 + 0.4 
                        }}
                      >
                        {item.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-neutral-300 leading-relaxed relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.1 + 0.5 
                        }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Progress indicator line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#239D89] to-[#1e90ff]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8,
                          delay: index * 0.1 + 0.6,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Connecting line between steps */}
                {index < 3 && (
                  <motion.div 
                    className="hidden lg:block absolute left-16 top-full w-0.5 h-24 bg-gradient-to-b from-[#239D89] to-transparent"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1 + 0.7 
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - MATCHING "OUR VALUES" DESIGN FROM ABOUT PAGE */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-neutral-50 dark:bg-[#0D1B2A]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10">
                — {t.process.badge}
              </Badge>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4"
            >
              {t.process.title}
            </motion.h2>
          </div>
          
          {/* Overlapping Cards Container */}
          <div className="relative max-w-6xl mx-auto" style={{ minHeight: '700px' }}>
            {t.process.steps.map((step, index) => {
              // Calculate position offsets for overlapping effect
              const leftOffset = index * 15; // Horizontal offset
              const topOffset = index * 100; // Vertical offset increased for bigger cards
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group absolute w-full md:w-[650px] p-12 bg-white dark:bg-[#0A1628] border border-neutral-200 dark:border-[#1E3A5F] rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#239D89]/50 cursor-pointer"
                  style={{
                    left: `${leftOffset}%`,
                    top: `${topOffset}px`,
                    zIndex: 10 + index
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.zIndex = '100';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.zIndex = String(10 + index);
                  }}
                >
                  <div className="text-base text-[#239D89] font-mono mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#163C2E] dark:text-white mb-6 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-gray-400 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#163C2E]/10 via-[#239D89]/10 to-[#163C2E]/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="rounded-xl text-lg px-8 py-6 bg-[#239D89] hover:bg-[#1e8473]">
                  {t.cta.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="rounded-xl text-lg px-8 py-6 border-[#239D89] text-[#239D89] hover:bg-[#239D89]/10">
                  {t.cta.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}   