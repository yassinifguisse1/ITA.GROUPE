"use client";

import { Search, TrendingUp, Target, ArrowRight, Sparkles, Globe, Users, BarChart3, Award, Zap, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ShaderBackground";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { CheckCircle2, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SEOPagClient() {
  const { language } = useLanguage();
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const content = {
    en: {
      hero: {
        badge: "SEO & Optimization",
        title: "SEO: Your",
        titleHighlight: "Organic Growth Engine",
        subtitle: "Discover how SEO transforms your online visibility and generates a constant flow of qualified customers without paid advertising.",
        cta1: "See Our SEO Services",
        cta2: "Schedule a Call",
        trust1: "Measurable Results",
        trust2: "Long-Term ROI",
        trust3: "Qualified Traffic"
      },
      stats: {
        badge: "KEY NUMBERS",
        title: "SEO Statistics That Matter\nFor Your Business",
        items: [
          {
            name: "ONLINE EXPERIENCES",
            description: "Begin with a search engine. If your business doesn't appear in top Google results, you're invisible to the majority of your potential customers."
          },
          {
            name: "CONVERSION RATE",
            description: "Of SEO traffic (vs 1.7% ads). Organic traffic from search engines converts much better than paid advertising."
          },
          {
            name: "OF USERS",
            description: "Never go past page 1. Appearing on Google's first page is crucial to capture your potential customers' attention."
          },
          {
            name: "VISIBILITY",
            description: "Average increase in 6 months. With a solid SEO strategy, you can significantly improve your online visibility."
          }
        ]
      },
      whySeo: {
        badge: "WHY SEO",
        title: "Why SEO is Essential\nFor Your Business",
        items: [
          {
            name: "93% OF EXPERIENCES",
            description: "93% of online experiences start with a search engine. If your business doesn't appear in top Google results, you're invisible."
          },
          {
            name: "14.6% CONVERSION RATE",
            description: "SEO traffic converts at 14.6% vs only 1.7% for paid advertising. SEO generates much more qualified prospects."
          },
          {
            name: "75% DON'T PASS PAGE 1",
            description: "75% of users never go past the first results page. Being well positioned is crucial for your visibility."
          },
          {
            name: "LONG-TERM ROI",
            description: "SEO offers the best return on investment of all marketing channels. Once well positioned, your site continues to attract customers for months and years."
          }
        ]
      },
      benefits: {
        badge: "KEY BENEFITS",
        title: "The Transformative Benefits of SEO",
        items: [
          {
            title: "Qualified & Free Traffic",
            desc: "Unlike paid ads that stop as soon as you cut the budget, SEO generates a continuous flow of qualified visitors for free."
          },
          {
            title: "Superior Long-Term ROI",
            desc: "SEO offers the best return on investment of all digital marketing channels. Once well positioned, your site continues to attract customers for months and years without recurring costs."
          },
          {
            title: "Credibility & Brand Authority",
            desc: "75% of users never go past the first page of Google results. Appearing at the top automatically signals authority and credibility."
          },
          {
            title: "Competitiveness & Market Share",
            desc: "If you don't invest in SEO, your competitors do. Every day without optimization is a day your competitors capture YOUR potential clients."
          },
          {
            title: "Market Insights",
            desc: "SEO reveals exactly what your clients are searching for: their questions, concerns, and needs. This market intelligence is invaluable for refining your offer."
          },
          {
            title: "Synergy with Other Channels",
            desc: "A well-ranked site amplifies all your other marketing efforts. Your advertising campaigns, social media, and email marketing become more effective."
          }
        ]
      },
      approach: {
        badge: "OUR APPROACH",
        title: "Our Complete SEO Approach",
        items: [
          {
            number: "[01]",
            title: "TECHNICAL SETUP",
            description: "Solid foundations with metas, sitemap, robots.txt, Search Console, and Analytics. Impeccable technical foundation is essential to allow search engines to properly understand and index your site."
          },
          {
            number: "[02]",
            title: "GOOGLE BUSINESS",
            description: "Maximum local visibility with complete optimization of your Google Maps listing. Appear in local searches and attract customers in your region actively looking for your services."
          },
          {
            number: "[03]",
            title: "ON-PAGE OPTIMIZATION",
            description: "H1-H6 structure, internal linking, speed, and strategic keyword research. Every page is optimized to perform on the most relevant queries in your sector."
          },
          {
            number: "[04]",
            title: "TRACKING & IMPROVEMENT",
            description: "Continuous monitoring and adjustments to maintain and improve your positions. SEO is an ongoing process of improvement based on data and algorithm evolution."
          }
        ]
      },
      results: {
        badge: "TYPICAL RESULTS",
        title: "What Our Clients Generally See",
        items: [
          {
            number: "01",
            metric: "+150%",
            title: "VISIBILITY INCREASE",
            description: "in search results in 6 months. Your pages progressively climb Google results, moving from invisible positions to the first page for your strategic keywords."
          },
          {
            number: "02",
            metric: "+85%",
            title: "QUALIFIED ORGANIC TRAFFIC GROWTH",
            description: "constant lead generation. SEO traffic brings visitors actively searching for your products or services, with a naturally higher conversion rate than other channels."
          },
          {
            number: "03",
            metric: "+60%",
            title: "CONVERSION IMPROVEMENT",
            description: "thanks to better targeted traffic. Visitors arriving via organic search already have clear intent, resulting in more contact requests and sales."
          },
          {
            number: "04",
            metric: "Top 10",
            title: "POSITIONING",
            description: "for strategic keywords. Your pages appear in Google's top 10 results for your sector's most important queries, ensuring maximum visibility."
          }
        ]
      },
      timeline: {
        title: "Why SEO Takes Time (and Why It's Worth It)",
        description: "SEO isn't instant—and that's precisely why it offers a lasting competitive advantage. Results start appearing after 3-6 months, but once established, they continue generating leads for years. Start today to reap tomorrow."
      },
      cta: {
        title: "Ready to Dominate Search Results?",
        subtitle: "Invest in your online visibility and build a constant flow of qualified leads.",
        button1: "See Our SEO Services",
        button2: "Back to Home"
      }
    },
    fr: {
      hero: {
        badge: "SEO & Référencement",
        title: "Le SEO: Votre",
        titleHighlight: "Moteur de Croissance Organique",
        subtitle: "Découvrez comment le référencement naturel transforme votre visibilité en ligne et génère un flux constant de clients qualifiés sans pub payante.",
        cta1: "Voir Nos Services SEO",
        cta2: "Planifier un Appel",
        trust1: "Résultats Mesurables",
        trust2: "ROI Long Terme",
        trust3: "Trafic Qualifié"
      },
      stats: {
        badge: "LES CHIFFRES CLÉS",
        title: "Les Statistiques SEO Qui Comptent\nPour Votre Business",
        items: [
          {
            name: "DES EXPÉRIENCES EN LIGNE",
            description: "Commencent par un moteur de recherche. Si votre entreprise n'apparaît pas dans les premiers résultats Google, vous êtes invisible pour la majorité de vos clients potentiels."
          },
          {
            name: "TAUX DE CONVERSION",
            description: "Du trafic SEO (vs 1.7% ads). Le trafic organique provenant des moteurs de recherche convertit beaucoup mieux que la publicité payante."
          },
          {
            name: "DES UTILISATEURS",
            description: "Ne dépassent jamais la page 1. Apparaître sur la première page de Google est crucial pour capter l'attention de vos clients potentiels."
          },
          {
            name: "VISIBILITÉ",
            description: "Augmentation moyenne en 6 mois. Avec une stratégie SEO solide, vous pouvez considérablement améliorer votre visibilité en ligne."
          }
        ]
      },
      whySeo: {
        badge: "POURQUOI LE SEO",
        title: "Pourquoi le SEO est Essentiel\nPour Votre Business",
        items: [
          {
            name: "93% DES EXPÉRIENCES",
            description: "93% des expériences en ligne commencent par un moteur de recherche. Si votre entreprise n'apparaît pas dans les premiers résultats Google, vous êtes invisible."
          },
          {
            name: "TAUX DE CONVERSION 14.6%",
            description: "Le trafic SEO convertit à 14.6% vs seulement 1.7% pour la publicité payante. Le SEO génère des prospects beaucoup plus qualifiés."
          },
          {
            name: "75% NE PASSENT PAS PAGE 1",
            description: "75% des utilisateurs ne dépassent jamais la première page de résultats. Être bien positionné est crucial pour votre visibilité."
          },
          {
            name: "ROI LONG TERME",
            description: "Le SEO offre le meilleur retour sur investissement de tous les canaux marketing. Une fois bien positionné, votre site continue à attirer des clients pour des mois et années."
          }
        ]
      },
      benefits: {
        badge: "KEY BENEFITS",
        title: "Les Avantages Transformateurs du SEO",
        items: [
          {
            title: "Trafic Qualifié & Gratuit",
            desc: "Contrairement aux publicités payantes qui s'arrêtent dès que vous coupez le budget, le SEO génère un flux continu de visiteurs qualifiés gratuitement."
          },
          {
            title: "ROI Supérieur à Long Terme",
            desc: "Le SEO offre le meilleur retour sur investissement de tous les canaux de marketing digital. Une fois bien positionné, votre site continue à attirer des clients pendant des mois et des années sans coûts récurrents."
          },
          {
            title: "Crédibilité & Autorité de Marque",
            desc: "75% des utilisateurs ne dépassent jamais la première page de résultats Google. Apparaître en haut signale automatiquement autorité et crédibilité."
          },
          {
            title: "Compétitivité & Part de Marché",
            desc: "Si vous n'investissez pas dans le SEO, vos concurrents le font. Chaque jour sans optimisation est un jour où vos concurrents capturent VOS clients potentiels."
          },
          {
            title: "Insights Marché",
            desc: "Le SEO révèle exactement ce que vos clients recherchent : leurs questions, préoccupations et besoins. Cette intelligence de marché est inestimable pour affiner votre offre."
          },
          {
            title: "Synergia avec Autres Canaux",
            desc: "Un site bien classé amplifie tous vos autres efforts marketing. Vos campagnes publicitaires, réseaux sociaux et email marketing deviennent plus efficaces."
          }
        ]
      },
      approach: {
        badge: "NOTRE APPROCHE",
        title: "Notre Approche SEO Complète",
        items: [
          {
            number: "[01]",
            title: "SETUP TECHNIQUE",
            description: "Fondations solides avec metas, sitemap, robots.txt, Search Console, et Analytics. Une base technique impeccable est essentielle pour permettre aux moteurs de recherche de comprendre et indexer correctement votre site."
          },
          {
            number: "[02]",
            title: "GOOGLE BUSINESS",
            description: "Visibilité locale maximale avec optimisation complète de votre fiche Google Maps. Apparaissez dans les recherches locales et attirez les clients de votre région qui cherchent activement vos services."
          },
          {
            number: "[03]",
            title: "OPTIMISATION ON-PAGE",
            description: "Structure H1-H6, maillage interne, vitesse, et recherche de mots-clés stratégiques. Chaque page est optimisée pour performer sur les requêtes les plus pertinentes de votre secteur."
          },
          {
            number: "[04]",
            title: "SUIVI ET AMÉLIORATION",
            description: "Monitoring continu et ajustements pour maintenir et améliorer vos positions. Le SEO est un processus continu d'amélioration basé sur les données et l'évolution des algorithmes."
          }
        ]
      },
      results: {
        badge: "RÉSULTATS TYPIQUES",
        title: "Ce Que Nos Clients Constatent Généralement",
        items: [
          {
            number: "01",
            metric: "+150%",
            title: "AUGMENTATION DE LA VISIBILITÉ",
            description: "dans les résultats de recherche en 6 mois. Vos pages grimpent progressivement dans les résultats Google, passant de positions invisibles à la première page pour vos mots-clés stratégiques."
          },
          {
            number: "02",
            metric: "+85%",
            title: "CROISSANCE DU TRAFIC ORGANIQUE QUALIFIÉ",
            description: "génération de leads constante. Le trafic SEO apporte des visiteurs qui recherchent activement vos produits ou services, avec un taux de conversion naturellement plus élevé que les autres canaux."
          },
          {
            number: "03",
            metric: "+60%",
            title: "AMÉLIORATION DES CONVERSIONS",
            description: "grâce à un trafic mieux ciblé. Les visiteurs qui arrivent via la recherche organique ont déjà une intention claire, ce qui se traduit par plus de demandes de contact et de ventes."
          },
          {
            number: "04",
            metric: "Top 10",
            title: "POSITIONNEMENT",
            description: "pour les mots-clés stratégiques. Vos pages apparaissent dans les 10 premiers résultats Google pour les requêtes les plus importantes de votre secteur, assurant une visibilité maximale."
          }
        ]
      },
      timeline: {
        title: "Pourquoi le SEO Prend du Temps (et Pourquoi Ça en Vaut la Peine)",
        description: "Le SEO n'est pas instantané—et c'est précisément pourquoi il offre un avantage compétitif durable. Les résultats commencent à apparaître après 3-6 mois, mais une fois établis, ils continuent à générer des leads pendant des années. Commencez aujourd'hui pour récolter demain."
      },
      cta: {
        title: "Prêt à Dominer Les Résultats de Recherche?",
        subtitle: "Investissez dans votre visibilité en ligne et construisez un flux constant de leads qualifiés.",
        button1: "Voir Nos Services SEO",
        button2: "Retour à l'Accueil"
      }
    },
    pl: {
      hero: {
        badge: "SEO i Optymalizacja",
        title: "SEO: Twój",
        titleHighlight: "Silnik Organicznego Wzrostu",
        subtitle: "Odkryj, jak SEO przekształca Twoją widoczność online i generuje stały przepływ wykwalifikowanych klientów bez płatnych reklam.",
        cta1: "Zobacz Nasze Usługi SEO",
        cta2: "Zaplanuj Rozmowę",
        trust1: "Wymierne Rezultaty",
        trust2: "Długoterminowy ROI",
        trust3: "Wykwalifikowany Ruch"
      },
      stats: {
        badge: "KLUCZOWE LICZBY",
        title: "Statystyki SEO, Które Mają Znaczenie\nDla Twojego Biznesu",
        items: [
          {
            name: "DOŚWIADCZEŃ ONLINE",
            description: "Zaczyna się od wyszukiwarki. Jeśli Twoja firma nie pojawia się w najlepszych wynikach Google, jesteś niewidoczny dla większości potencjalnych klientów."
          },
          {
            name: "WSPÓŁCZYNNIK KONWERSJI",
            description: "Ruchu SEO (vs 1,7% reklam). Ruch organiczny z wyszukiwarek konwertuje znacznie lepiej niż płatne reklamy."
          },
          {
            name: "UŻYTKOWNIKÓW",
            description: "Nigdy nie przechodzi dalej niż strona 1. Pojawienie się na pierwszej stronie Google jest kluczowe dla przyciągnięcia uwagi potencjalnych klientów."
          },
          {
            name: "WIDOCZNOŚĆ",
            description: "Średni wzrost w 6 miesięcy. Dzięki solidnej strategii SEO możesz znacznie poprawić swoją widoczność online."
          }
        ]
      },
      whySeo: {
        badge: "DLACZEGO SEO",
        title: "Dlaczego SEO Jest Niezbędne\nDla Twojego Biznesu",
        items: [
          {
            name: "93% DOŚWIADCZEŃ",
            description: "93% doświadczeń online zaczyna się od wyszukiwarki. Jeśli Twoja firma nie pojawia się w najlepszych wynikach Google, jesteś niewidoczny."
          },
          {
            name: "WSPÓŁCZYNNIK KONWERSJI 14,6%",
            description: "Ruch SEO konwertuje na 14,6% vs tylko 1,7% dla płatnych reklam. SEO generuje znacznie bardziej wykwalifikowanych prospektów."
          },
          {
            name: "75% NIE PRZECHODZI STRONY 1",
            description: "75% użytkowników nigdy nie przechodzi dalej niż pierwsza strona wyników. Dobre pozycjonowanie jest kluczowe dla Twojej widoczności."
          },
          {
            name: "DŁUGOTERMINOWY ROI",
            description: "SEO oferuje najlepszy zwrot z inwestycji ze wszystkich kanałów marketingowych. Po dobrym pozycjonowaniu Twoja strona przyciąga klientów przez miesiące i lata."
          }
        ]
      },
      benefits: {
        badge: "KLUCZOWE KORZYŚCI",
        title: "Transformacyjne Korzyści SEO",
        items: [
          {
            title: "Wykwalifikowany i Darmowy Ruch",
            desc: "W przeciwieństwie do płatnych reklam, które przestają działać po obcięciu budżetu, SEO generuje ciągły przepływ wykwalifikowanych odwiedzających za darmo."
          },
          {
            title: "Doskonały Długoterminowy ROI",
            desc: "SEO oferuje najlepszy zwrot z inwestycji ze wszystkich kanałów marketingu cyfrowego. Po dobrym pozycjonowaniu Twoja strona przyciąga klientów przez miesiące i lata bez kosztów cyklicznych."
          },
          {
            title: "Wiarygodność i Autorytet Marki",
            desc: "75% użytkowników nigdy nie przechodzi dalej niż pierwsza strona wyników Google. Pojawienie się na górze automatycznie sygnalizuje autorytet i wiarygodność."
          },
          {
            title: "Konkurencyjność i Udział w Rynku",
            desc: "Jeśli nie inwestujesz w SEO, robią to Twoi konkurenci. Każdy dzień bez optymalizacji to dzień, w którym konkurenci zdobywają TWOICH potencjalnych klientów."
          },
          {
            title: "Wgląd w Rynek",
            desc: "SEO ujawnia dokładnie to, czego szukają Twoi klienci: ich pytania, obawy i potrzeby. Ta inteligencja rynkowa jest nieoceniona dla udoskonalenia Twojej oferty."
          },
          {
            title: "Synergia z Innymi Kanałami",
            desc: "Dobrze pozycjonowana strona wzmacnia wszystkie inne działania marketingowe. Twoje kampanie reklamowe, media społecznościowe i email marketing stają się bardziej efektywne."
          }
        ]
      },
      approach: {
        badge: "NASZE PODEJŚCIE",
        title: "Nasze Kompleksowe Podejście SEO",
        items: [
          {
            number: "[01]",
            title: "SETUP TECHNICZNY",
            description: "Solidne fundamenty z metami, mapą witryny, robots.txt, Search Console i Analytics. Nienaganna podstawa techniczna jest niezbędna, aby umożliwić wyszukiwarkom prawidłowe zrozumienie i indeksowanie Twojej witryny."
          },
          {
            number: "[02]",
            title: "GOOGLE BUSINESS",
            description: "Maksymalna widoczność lokalna z pełną optymalizacją Twojego wpisu w Google Maps. Pojawiaj się w lokalnych wyszukiwaniach i przyciągaj klientów z Twojego regionu aktywnie szukających Twoich usług."
          },
          {
            number: "[03]",
            title: "OPTYMALIZACJA ON-PAGE",
            description: "Struktura H1-H6, linkowanie wewnętrzne, prędkość i strategiczne badanie słów kluczowych. Każda strona jest zoptymalizowana pod kątem najbardziej istotnych zapytań w Twoim sektorze."
          },
          {
            number: "[04]",
            title: "ŚLEDZENIE I POPRAWA",
            description: "Ciągłe monitorowanie i dostosowania w celu utrzymania i poprawy Twoich pozycji. SEO to ciągły proces poprawy oparty na danych i ewolucji algorytmów."
          }
        ]
      },
      results: {
        badge: "TYPOWE REZULTATY",
        title: "Co Nasi Klienci Zazwyczaj Widzą",
        items: [
          {
            number: "01",
            metric: "+150%",
            title: "WZROST WIDOCZNOŚCI",
            description: "w wynikach wyszukiwania w 6 miesięcy. Twoje strony stopniowo wspinają się w wynikach Google, przechodząc z niewidocznych pozycji na pierwszą stronę dla strategicznych słów kluczowych."
          },
          {
            number: "02",
            metric: "+85%",
            title: "WZROST WYKWALIFIKOWANEGO RUCHU ORGANICZNEGO",
            description: "stała generacja leadów. Ruch SEO przynosi odwiedzających aktywnie poszukujących Twoich produktów lub usług, z naturalnie wyższym współczynnikiem konwersji niż inne kanały."
          },
          {
            number: "03",
            metric: "+60%",
            title: "POPRAWA KONWERSJI",
            description: "dzięki lepiej ukierunkowanemu ruchowi. Odwiedzający przybywający przez wyszukiwanie organiczne mają już jasny cel, co przekłada się na więcej zapytań kontaktowych i sprzedaży."
          },
          {
            number: "04",
            metric: "Top 10",
            title: "POZYCJONOWANIE",
            description: "dla strategicznych słów kluczowych. Twoje strony pojawiają się w top 10 wynikach Google dla najważniejszych zapytań w Twoim sektorze, zapewniając maksymalną widoczność."
          }
        ]
      },
      timeline: {
        title: "Dlaczego SEO Wymaga Czasu (i Dlaczego Jest Tego Warte)",
        description: "SEO nie jest natychmiastowe—i właśnie dlatego oferuje trwałą przewagę konkurencyjną. Wyniki zaczynają pojawiać się po 3-6 miesiącach, ale po ich ustabilizowaniu generują leady przez lata. Zacznij dzisiaj, aby zbierać jutro."
      },
      cta: {
        title: "Gotowy, Aby Zdominować Wyniki Wyszukiwania?",
        subtitle: "Zainwestuj w swoją widoczność online i zbuduj stały przepływ wykwalifikowanych leadów.",
        button1: "Zobacz Nasze Usługi SEO",
        button2: "Powrót do Strony Głównej"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Hero Section - MATCHING SOFTWARE PRODUCT DEVELOPMENT PAGE */}
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
                <Search className="h-4 w-4" />
                <span>{t.hero.badge}</span>
              </Badge>
            </motion.div>

            {/* Headline */}
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
                  {t.hero.title}
                </span>
              </PointerHighlight>
              <br />
              {t.hero.titleHighlight}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-[#163C2E] hover:bg-white/90" asChild>
                <Link href="/#seo">
                  {t.hero.cta1}
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
                  {t.hero.cta2}
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

      {/* Stats Section - MATCHING WE DELIVER DESIGN */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              — {t.stats.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.stats.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative group"
              >
                <motion.div 
                  className="h-full p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 transition-all duration-300 cursor-pointer"
                  animate={{
                    borderColor: hoveredStat === index ? "#1e90ff" : "",
                    boxShadow: hoveredStat === index ? "0 10px 40px rgba(30, 144, 255, 0.15)" : "",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="flex justify-center mb-6"
                    animate={{
                      scale: hoveredStat === index ? 1.1 : 1,
                      rotateY: hoveredStat === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-[#1e90ff]">
                      {index === 0 && <Search className="w-10 h-10" />}
                      {index === 1 && <TrendingUp className="w-10 h-10" />}
                      {index === 2 && <Target className="w-10 h-10" />}
                      {index === 3 && <Zap className="w-10 h-10" />}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-center mb-4 text-[#1e3a5f] dark:text-white uppercase tracking-wide"
                    animate={{
                      color: hoveredStat === index ? "#1e90ff" : "",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-center text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    animate={{
                      y: hoveredStat === index ? -3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.description}
                  </motion.p>

                  {/* Hover accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-[#1e90ff] to-[#00bfff] rounded-full"
                    initial={{ width: 0, x: "-50%" }}
                    animate={{
                      width: hoveredStat === index ? "80%" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - MATCHING WE DELIVER DESIGN */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              — {t.whySeo.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.whySeo.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whySeo.items.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredStat(index + 4)}
                onHoverEnd={() => setHoveredStat(null)}
                className="relative group"
              >
                <motion.div 
                  className="h-full p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 transition-all duration-300 cursor-pointer"
                  animate={{
                    borderColor: hoveredStat === index + 4 ? "#1e90ff" : "",
                    boxShadow: hoveredStat === index + 4 ? "0 10px 40px rgba(30, 144, 255, 0.15)" : "",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="flex justify-center mb-6"
                    animate={{
                      scale: hoveredStat === index + 4 ? 1.1 : 1,
                      rotateY: hoveredStat === index + 4 ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-[#1e90ff]">
                      {index === 0 && <Search className="w-10 h-10" />}
                      {index === 1 && <TrendingUp className="w-10 h-10" />}
                      {index === 2 && <Target className="w-10 h-10" />}
                      {index === 3 && <Zap className="w-10 h-10" />}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-center mb-4 text-[#1e3a5f] dark:text-white uppercase tracking-wide"
                    animate={{
                      color: hoveredStat === index + 4 ? "#1e90ff" : "",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-center text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    animate={{
                      y: hoveredStat === index + 4 ? -3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.description}
                  </motion.p>

                  {/* Hover accent line */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-[#1e90ff] to-[#00bfff] rounded-full"
                    initial={{ width: 0, x: "-50%" }}
                    animate={{
                      width: hoveredStat === index + 4 ? "80%" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Benefits Grid - EXACT MATCH OF SOFTWARE PRODUCT DEV PAGE */}
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
              — {t.benefits.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.benefits.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  hoveredBenefit === index
                    ? 'bg-[#163C2E] border-[#239D89] shadow-lg shadow-[#239D89]/20'
                    : 'bg-white dark:bg-[#1a2942] border-neutral-200 dark:border-[#1a2942] hover:border-[#239D89]/50'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="p-3 rounded-xl bg-[#239D89]/10 text-[#239D89]"
                    animate={{
                      scale: hoveredBenefit === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === 0 && <Users className="w-8 h-8" />}
                    {index === 1 && <TrendingUp className="w-8 h-8" />}
                    {index === 2 && <Shield className="w-8 h-8" />}
                    {index === 3 && <Target className="w-8 h-8" />}
                    {index === 4 && <BarChart3 className="w-8 h-8" />}
                    {index === 5 && <Zap className="w-8 h-8" />}
                  </motion.div>
                  <motion.div
                    animate={{
                      x: hoveredBenefit === index ? 5 : 0,
                      opacity: hoveredBenefit === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#239D89]" />
                  </motion.div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredBenefit === index ? 'text-white' : 'text-neutral-900 dark:text-white'
                }`}>
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed ${
                  hoveredBenefit === index ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Our Approach - MATCHING VALUES WE SHARE FROM ABOUT PAGE */}
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
                — {t.approach.badge}
              </Badge>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4"
            >
              {t.approach.title}
            </motion.h2>
          </div>
          
          {/* Overlapping Cards Container */}
          <div className="relative max-w-6xl mx-auto" style={{ minHeight: '700px' }}>
            {t.approach.items.map((approach, index) => {
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
                    {approach.number}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      {index === 0 && <Globe className="h-6 w-6 text-primary" />}
                      {index === 1 && <Target className="h-6 w-6 text-primary" />}
                      {index === 2 && <Search className="h-6 w-6 text-primary" />}
                      {index === 3 && <BarChart3 className="h-6 w-6 text-primary" />}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#163C2E] dark:text-white tracking-wide">
                      {approach.title}
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-gray-400 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                    {approach.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - Results - MATCHING HOW WE WORK SECTION */}
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
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              — {t.results.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.results.title}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {t.results.items.map((result, index) => (
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
                      [{result.number}]
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
                      
                      {/* Metric Badge */}
                      <motion.div 
                        className="inline-block px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-lg font-bold mb-4 relative z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.1 + 0.35,
                          type: "spring"
                        }}
                      >
                        {result.metric}
                      </motion.div>

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
                        {result.title}
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
                        {result.description}
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

      {/* Section 5 - Why It Takes Time */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.timeline.title}</h2>
              <Card className="p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20">
                <p className="text-lg leading-relaxed">
                  {t.timeline.description}
                </p>
              </Card>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#seo">
                <Button size="lg" className="rounded-xl text-lg px-8 py-6">
                  {t.cta.button1}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="rounded-xl text-lg px-8 py-6">
                  {t.cta.button2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}