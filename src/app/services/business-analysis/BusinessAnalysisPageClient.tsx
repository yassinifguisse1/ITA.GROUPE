"use client";

import { Metadata } from "next";
import { Target, TrendingUp, Users, FileSearch, CheckCircle2, ArrowRight, Sparkles, BarChart3, Clock, Shield, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import GlobalNavigation from "@/components/GlobalNavigation";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground";
import { useState } from "react";

const content = {
  en: {
    hero: {
      badge: "Expert Business Analysis Services",
      title: "Business Analysis",
      subtitle: "Bridge the gap between business needs and technical solutions. Our expert business analysts ensure your projects deliver real business value.",
      cta: "Get Expert Analysis",
      ctaSecondary: "Schedule a Call",
      stats: [
        "200+ Projects Analyzed",
        "95% On-Time Delivery",
        "40% Cost Reduction"
      ]
    },
    services: {
      heading: "Analysis Services",
      subheading: "Comprehensive business analysis services to drive project success",
      badge: "— OUR SERVICES",
      items: [
        {
          title: "Requirements Analysis",
          description: "Comprehensive requirements gathering and documentation to align business and technical teams."
        },
        {
          title: "Process Optimization",
          description: "Identify inefficiencies and optimize business processes for maximum productivity."
        },
        {
          title: "Stakeholder Management",
          description: "Facilitate communication between stakeholders and development teams."
        },
        {
          title: "Feasibility Studies",
          description: "Assess technical and business feasibility of proposed solutions and initiatives."
        }
      ]
    },
    benefits: {
      heading: "Key Benefits",
      subheading: "Why business analysis is critical for project success",
      badge: "— BENEFITS",
      items: [
        "Reduce bugs and defects by up to 90%",
        "Clear alignment between business goals and technical solutions",
        "Reduced project risks and cost overruns",
        "Improved stakeholder satisfaction",
        "Better decision-making with data-driven insights",
        "Streamlined processes and increased efficiency"
      ]
    },
    deliverables: {
      heading: "What You'll Receive",
      subheading: "Comprehensive documentation and artifacts to guide your project",
      categories: [
        {
          title: "Requirements Documentation",
          items: [
            "Business requirements document (BRD)",
            "Functional requirements specification (FRS)",
            "User stories and use cases",
            "Acceptance criteria"
          ]
        },
        {
          title: "Process Documentation",
          items: [
            "Current state analysis",
            "Future state design",
            "Process flow diagrams",
            "Gap analysis reports"
          ]
        },
        {
          title: "Strategic Planning",
          items: [
            "Roadmap development",
            "Risk assessment",
            "Cost-benefit analysis",
            "Change management plans"
          ]
        },
        {
          title: "Stakeholder Artifacts",
          items: [
            "Stakeholder matrices",
            "Communication plans",
            "Status reports",
            "Presentation materials"
          ]
        }
      ]
    },
    expertise: {
      heading: "Our Expertise",
      subheading: "Skilled business analysts with deep industry knowledge and technical understanding",
      items: [
        "Requirements elicitation and management",
        "Business process modeling (BPMN)",
        "Data modeling and analysis",
        "User acceptance testing (UAT)",
        "Change management",
        "Agile and Scrum methodologies",
        "Project management",
        "Vendor evaluation and selection"
      ]
    },
    process: {
      heading: "Our Process",
      subheading: "A structured approach to business analysis",
      badge: "— HOW WE WORK",
      steps: [
        {
          number: "01",
          title: "DISCOVERY",
          description: "We begin by thoroughly understanding your business context, stakeholders, and objectives. Our BA team works closely with stakeholders to define analysis strategies, success criteria, and business metrics that align with your project goals."
        },
        {
          number: "02",
          title: "REQUIREMENTS ANALYSIS",
          description: "Our team gathers comprehensive requirements and analyzes current processes to identify gaps and opportunities. We establish documentation standards, select appropriate tools, and define validation strategies for optimal requirement coverage."
        },
        {
          number: "03",
          title: "DOCUMENTATION & MODELING",
          description: "We create detailed documentation including BRDs, FRSs, process flows, and user stories. Our analysts implement best practices for documentation, perform stakeholder reviews, and conduct specialized analysis including feasibility and risk assessments."
        },
        {
          number: "04",
          title: "VALIDATION & SIGN-OFF",
          description: "Every requirement is reviewed, validated, and prioritized with stakeholders. We provide detailed acceptance criteria, maintain transparency through regular status updates, and work closely with development teams to ensure alignment."
        },
        {
          number: "05",
          title: "CONTINUOUS SUPPORT",
          description: "Business analysis is an ongoing process. We continuously refine requirements, update documentation, monitor project metrics, and provide recommendations for improving project outcomes, delivery, and stakeholder satisfaction throughout the project lifecycle."
        }
      ]
    },
    whyChooseUs: {
      heading: "Why Choose Us As Extended Team Model",
      subheading: "Partner with experienced business analysts who become part of your team",
      badge: "— WHY US?",
      items: [
        {
          title: "Deep Business Expertise",
          description: "With over a decade of experience in business analysis, we bring deep expertise across all analysis types - from requirements elicitation to complex process optimization. Our BA specialists have analyzed hundreds of projects across various industries.",
          hoverBg: "#FF8D3E"
        },
        {
          title: "End-to-End Analysis Solutions",
          description: "We provide complete BA services covering requirements analysis, process optimization, stakeholder management, and strategic planning. Our holistic approach ensures every aspect of your project is thoroughly analyzed before development begins.",
          hoverBg: "#F15556"
        },
        {
          title: "Agile & Adaptive Approach",
          description: "We leverage modern BA frameworks and methodologies to accelerate project delivery. Our business analysts integrate seamlessly with Agile teams and adapt quickly to changing business needs and priorities.",
          hoverBg: "#53ACF1"
        },
        {
          title: "Stakeholder-Driven Culture",
          description: "Communication isn't just a phase—it's embedded in our DNA. We implement collaborative practices, conduct regular stakeholder reviews, and maintain rigorous documentation standards throughout the project lifecycle.",
          hoverBg: "#1BC65C"
        },
        {
          title: "Transparent Communication",
          description: "Stay informed every step of the way with detailed analysis reports, real-time dashboards, and regular status updates. We provide clear metrics, comprehensive documentation, and actionable insights to help you make informed decisions.",
          hoverBg: "#AF6AF0"
        }
      ]
    },
    stats: [
      { value: "200+", label: "Projects Analyzed" },
      { value: "95%", label: "On-Time Delivery" },
      { value: "40%", label: "Cost Reduction" }
    ],
    finalCta: {
      heading: "Ready to Align Business and Technology?",
      subheading: "Let's ensure your project delivers real business value",
      button: "Get Started Today"
    }
  },
  fr: {
    hero: {
      badge: "Services d'Analyse d'Affaires Experts",
      title: "Analyse d'Affaires",
      subtitle: "Combler le fossé entre les besoins commerciaux et les solutions techniques. Nos analystes d'affaires experts garantissent que vos projets apportent une réelle valeur commerciale.",
      cta: "Obtenir une Analyse d'Expert",
      ctaSecondary: "Planifier un Appel",
      stats: [
        "200+ Projets Analysés",
        "95% Livraison à Temps",
        "40% Réduction des Coûts"
      ]
    },
    services: {
      heading: "Services d'Analyse",
      subheading: "Services complets d'analyse d'affaires pour assurer le succès du projet",
      badge: "— NOS SERVICES",
      items: [
        {
          title: "Analyse des Exigences",
          description: "Collecte et documentation complètes des exigences pour aligner les équipes commerciales et techniques."
        },
        {
          title: "Optimisation des Processus",
          description: "Identifier les inefficacités et optimiser les processus métier pour une productivité maximale."
        },
        {
          title: "Gestion des Parties Prenantes",
          description: "Faciliter la communication entre les parties prenantes et les équipes de développement."
        },
        {
          title: "Études de Faisabilité",
          description: "Évaluer la faisabilité technique et commerciale des solutions et initiatives proposées."
        }
      ]
    },
    benefits: {
      heading: "Avantages Clés",
      subheading: "Pourquoi l'analyse d'affaires est essentielle pour le succès du projet",
      badge: "— AVANTAGES",
      items: [
        "Réduire les bugs et défauts jusqu'à 90%",
        "Alignement clair entre les objectifs commerciaux et les solutions techniques",
        "Réduction des risques de projet et des dépassements de coûts",
        "Satisfaction améliorée des parties prenantes",
        "Meilleure prise de décision avec des informations basées sur les données",
        "Processus rationalisés et efficacité accrue"
      ]
    },
    deliverables: {
      heading: "Ce Que Vous Recevrez",
      subheading: "Documentation complète et artefacts pour guider votre projet",
      categories: [
        {
          title: "Documentation des Exigences",
          items: [
            "Document des exigences commerciales (BRD)",
            "Spécification des exigences fonctionnelles (FRS)",
            "User stories et cas d'utilisation",
            "Critères d'acceptation"
          ]
        },
        {
          title: "Documentation des Processus",
          items: [
            "Analyse de l'état actuel",
            "Conception de l'état futur",
            "Diagrammes de flux de processus",
            "Rapports d'analyse des écarts"
          ]
        },
        {
          title: "Planification Stratégique",
          items: [
            "Développement de feuille de route",
            "Évaluation des risques",
            "Analyse coûts-bénéfices",
            "Plans de gestion du changement"
          ]
        },
        {
          title: "Artefacts des Parties Prenantes",
          items: [
            "Matrices des parties prenantes",
            "Plans de communication",
            "Rapports d'état",
            "Matériaux de présentation"
          ]
        }
      ]
    },
    expertise: {
      heading: "Notre Expertise",
      subheading: "Analystes d'affaires qualifiés avec une connaissance approfondie de l'industrie et une compréhension technique",
      items: [
        "Élicitation et gestion des exigences",
        "Modélisation des processus métier (BPMN)",
        "Modélisation et analyse des données",
        "Tests d'acceptation utilisateur (UAT)",
        "Gestion du changement",
        "Méthodologies Agile et Scrum",
        "Gestion de projet",
        "Évaluation et sélection de fournisseurs"
      ]
    },
    process: {
      heading: "Notre Processus",
      subheading: "Une approche structurée de l'analyse d'affaires",
      badge: "— COMMENT NOUS TRAVAILLONS",
      steps: [
        {
          number: "01",
          title: "DÉCOUVERTE",
          description: "Nous commençons par comprendre en profondeur votre contexte commercial, vos parties prenantes et vos objectifs. Notre équipe BA travaille en étroite collaboration avec les parties prenantes pour définir des stratégies d'analyse, des critères de succès et des métriques commerciales alignées sur vos objectifs de projet."
        },
        {
          number: "02",
          title: "ANALYSE DES EXIGENCES",
          description: "Notre équipe recueille des exigences complètes et analyse les processus actuels pour identifier les lacunes et les opportunités. Nous établissons des normes de documentation, sélectionnons les outils appropriés et définissons des stratégies de validation pour une couverture optimale des exigences."
        },
        {
          number: "03",
          title: "DOCUMENTATION ET MODÉLISATION",
          description: "Nous créons une documentation détaillée comprenant BRD, FRS, flux de processus et user stories. Nos analystes mettent en œuvre les meilleures pratiques de documentation, effectuent des examens avec les parties prenantes et mènent des analyses spécialisées incluant des évaluations de faisabilité et de risque."
        },
        {
          number: "04",
          title: "VALIDATION ET APPROBATION",
          description: "Chaque exigence est examinée, validée et priorisée avec les parties prenantes. Nous fournissons des critères d'acceptation détaillés, maintenons la transparence par des mises à jour régulières et travaillons en étroite collaboration avec les équipes de développement pour assurer l'alignement."
        },
        {
          number: "05",
          title: "SUPPORT CONTINU",
          description: "L'analyse d'affaires est un processus continu. Nous affinons continuellement les exigences, mettons à jour la documentation, surveillons les métriques du projet et fournissons des recommandations pour améliorer les résultats du projet, la livraison et la satisfaction des parties prenantes tout au long du cycle de vie du projet."
        }
      ]
    },
    whyChooseUs: {
      heading: "Pourquoi Nous Choisir Comme Modèle d'Équipe Étendue",
      subheading: "Associez-vous à des analystes d'affaires expérimentés qui deviennent partie intégrante de votre équipe",
      badge: "— POURQUOI NOUS?",
      items: [
        {
          title: "Expertise Commerciale Approfondie",
          description: "Avec plus d'une décennie d'expérience en analyse d'affaires, nous apportons une expertise approfondie dans tous les types d'analyse - de l'élicitation des exigences à l'optimisation complexe des processus. Nos spécialistes BA ont analysé des centaines de projets dans divers secteurs.",
          hoverBg: "#FF8D3E"
        },
        {
          title: "Solutions d'Analyse de Bout en Bout",
          description: "Nous fournissons des services BA complets couvrant l'analyse des exigences, l'optimisation des processus, la gestion des parties prenantes et la planification stratégique. Notre approche holistique garantit que chaque aspect de votre projet est minutieusement analysé avant le début du développement.",
          hoverBg: "#F15556"
        },
        {
          title: "Approche Agile et Adaptative",
          description: "Nous utilisons des cadres et méthodologies BA modernes pour accélérer la livraison des projets. Nos analystes d'affaires s'intègrent de manière transparente avec les équipes Agile et s'adaptent rapidement aux besoins et priorités commerciaux changeants.",
          hoverBg: "#53ACF1"
        },
        {
          title: "Culture Axée sur les Parties Prenantes",
          description: "La communication n'est pas qu'une phase—elle est ancrée dans notre ADN. Nous mettons en œuvre des pratiques collaboratives, menons des examens réguliers avec les parties prenantes et maintenons des normes de documentation rigoureuses tout au long du cycle de vie du projet.",
          hoverBg: "#1BC65C"
        },
        {
          title: "Communication Transparente",
          description: "Restez informé à chaque étape avec des rapports d'analyse détaillés, des tableaux de bord en temps réel et des mises à jour régulières. Nous fournissons des métriques claires, une documentation complète et des informations exploitables pour vous aider à prendre des décisions éclairées.",
          hoverBg: "#AF6AF0"
        }
      ]
    },
    stats: [
      { value: "200+", label: "Projets Analysés" },
      { value: "95%", label: "Livraison à Temps" },
      { value: "40%", label: "Réduction des Coûts" }
    ],
    finalCta: {
      heading: "Prêt à Aligner Business et Technologie?",
      subheading: "Assurons-nous que votre projet apporte une réelle valeur commerciale",
      button: "Commencer Aujourd'hui"
    }
  },
  pl: {
    hero: {
      badge: "Eksperckie Usługi Analizy Biznesowej",
      title: "Analiza Biznesowa",
      subtitle: "Wypełnij lukę między potrzebami biznesowymi a rozwiązaniami technicznymi. Nasi eksperci ds. analizy biznesowej zapewniają, że Twoje projekty przynoszą rzeczywistą wartość biznesową.",
      cta: "Uzyskaj Ekspercką Analizę",
      ctaSecondary: "Zaplanuj Rozmowę",
      stats: [
        "200+ Przeanalizowanych Projektów",
        "95% Dostawa na Czas",
        "40% Redukcja Kosztów"
      ]
    },
    services: {
      heading: "Usługi Analizy",
      subheading: "Kompleksowe usługi analizy biznesowej dla sukcesu projektu",
      badge: "— NASZE USŁUGI",
      items: [
        {
          title: "Analiza Wymagań",
          description: "Kompleksowe zbieranie i dokumentowanie wymagań w celu dostosowania zespołów biznesowych i technicznych."
        },
        {
          title: "Optymalizacja Procesów",
          description: "Identyfikuj nieefektywności i optymalizuj procesy biznesowe dla maksymalnej produktywności."
        },
        {
          title: "Zarządzanie Interesariuszami",
          description: "Ułatw komunikację między interesariuszami a zespołami rozwojowymi."
        },
        {
          title: "Studia Wykonalności",
          description: "Oceń wykonalność techniczną i biznesową proponowanych rozwiązań i inicjatyw."
        }
      ]
    },
    benefits: {
      heading: "Kluczowe Korzyści",
      subheading: "Dlaczego analiza biznesowa jest kluczowa dla sukcesu projektu",
      badge: "— KORZYŚCI",
      items: [
        "Zmniejsz błędy i defekty do 90%",
        "Wyraźne dostosowanie między celami biznesowymi a rozwiązaniami technicznymi",
        "Zmniejszone ryzyko projektowe i przekroczenia kosztów",
        "Lepsza satysfakcja interesariuszy",
        "Lepsza podejmowanie decyzji dzięki insights opartym na danych",
        "Usprawnienie procesów i zwiększona wydajność"
      ]
    },
    deliverables: {
      heading: "Co Otrzymasz",
      subheading: "Kompleksowa dokumentacja i artefakty do prowadzenia projektu",
      categories: [
        {
          title: "Dokumentacja Wymagań",
          items: [
            "Dokument wymagań biznesowych (BRD)",
            "Specyfikacja wymagań funkcjonalnych (FRS)",
            "User stories i przypadki użycia",
            "Kryteria akceptacji"
          ]
        },
        {
          title: "Dokumentacja Procesów",
          items: [
            "Analiza stanu obecnego",
            "Projekt stanu przyszłego",
            "Diagramy przepływu procesów",
            "Raporty analizy luk"
          ]
        },
        {
          title: "Planowanie Strategiczne",
          items: [
            "Rozwój mapy drogowej",
            "Ocena ryzyka",
            "Analiza kosztów i korzyści",
            "Plany zarządzania zmianą"
          ]
        },
        {
          title: "Artefakty Interesariuszy",
          items: [
            "Matryce interesariuszy",
            "Plany komunikacji",
            "Raporty statusu",
            "Materiały prezentacyjne"
          ]
        }
      ]
    },
    expertise: {
      heading: "Nasza Ekspertyza",
      subheading: "Wykwalifikowani analitycy biznesowi z głęboką wiedzą branżową i rozumieniem technicznym",
      items: [
        "Elicytacja i zarządzanie wymaganiami",
        "Modelowanie procesów biznesowych (BPMN)",
        "Modelowanie i analiza danych",
        "Testy akceptacyjne użytkowników (UAT)",
        "Zarządzanie zmianą",
        "Metodyki Agile i Scrum",
        "Zarządzanie projektami",
        "Ocena i wybór dostawców"
      ]
    },
    process: {
      heading: "Nasz Proces",
      subheading: "Strukturalne podejście do analizy biznesowej",
      badge: "— JAK PRACUJEMY",
      steps: [
        {
          number: "01",
          title: "ODKRYCIE",
          description: "Zaczynamy od dokładnego zrozumienia kontekstu biznesowego, interesariuszy i celów. Nasz zespół BA ściśle współpracuje z interesariuszami, aby zdefiniować strategie analizy, kryteria sukcesu i metryki biznesowe zgodne z celami projektu."
        },
        {
          number: "02",
          title: "ANALIZA WYMAGAŃ",
          description: "Nasz zespół zbiera kompleksowe wymagania i analizuje obecne procesy, aby zidentyfikować luki i możliwości. Ustalamy standardy dokumentacji, wybieramy odpowiednie narzędzia i definiujemy strategie walidacji dla optymalnego pokrycia wymagań."
        },
        {
          number: "03",
          title: "DOKUMENTACJA I MODELOWANIE",
          description: "Tworzymy szczegółową dokumentację obejmującą BRD, FRS, przepływy procesów i user stories. Nasi analitycy wdrażają najlepsze praktyki dokumentacji, przeprowadzają przeglądy z interesariuszami i prowadzą specjalistyczne analizy, w tym oceny wykonalności i ryzyka."
        },
        {
          number: "04",
          title: "WALIDACJA I ZATWIERDZENIE",
          description: "Każde wymaganie jest przeglądane, walidowane i priorytetyzowane z interesariuszami. Dostarczamy szczegółowe kryteria akceptacji, utrzymujemy przejrzystość poprzez regularne aktualizacje statusu i ściśle współpracujemy z zespołami rozwojowymi, aby zapewnić zgodność."
        },
        {
          number: "05",
          title: "CIĄGŁE WSPARCIE",
          description: "Analiza biznesowa to proces ciągły. Ciągle udoskonalamy wymagania, aktualizujemy dokumentację, monitorujemy metryki projektu i dostarczamy rekomendacje dotyczące poprawy wyników projektu, dostawy i satysfakcji interesariuszy przez cały cykl życia projektu."
        }
      ]
    },
    whyChooseUs: {
      heading: "Dlaczego Wybrać Nas Jako Model Zespołu Rozszerzonego",
      subheading: "Współpracuj z doświadczonymi analitykami biznesowymi, którzy stają się częścią Twojego zespołu",
      badge: "— DLACZEGO MY?",
      items: [
        {
          title: "Głęboka Ekspertyza Biznesowa",
          description: "Z ponad dziesięcioletnią doświadczeniem w analizie biznesowej wnosimy głęboką wiedzę we wszystkich typach analizy - od elicytacji wymagań po złożoną optymalizację procesów. Nasi specjaliści BA przeanalizowali setki projektów w różnych branżach.",
          hoverBg: "#FF8D3E"
        },
        {
          title: "Kompleksowe Rozwiązania Analityczne",
          description: "Zapewniamy pełne usługi BA obejmujące analizę wymagań, optymalizację procesów, zarządzanie interesariuszami i planowanie strategiczne. Nasze holistyczne podejście zapewnia, że każdy aspekt Twojego projektu jest dokładnie przeanalizowany przed rozpoczęciem rozwoju.",
          hoverBg: "#F15556"
        },
        {
          title: "Zwinne i Adaptacyjne Podejście",
          description: "Wykorzystujemy nowoczesne ramy i metodologie BA, aby przyspieszyć dostawę projektu. Nasi analitycy biznesowi bezproblemowo integrują się z zespołami Agile i szybko dostosowują do zmieniających się potrzeb i priorytetów biznesowych.",
          hoverBg: "#53ACF1"
        },
        {
          title: "Kultura Zorientowana na Interesariuszy",
          description: "Komunikacja to nie tylko faza—jest zakorzeniona w naszym DNA. Wdrażamy praktyki współpracy, prowadzimy regularne przeglądy z interesariuszami i utrzymujemy rygorystyczne standardy dokumentacji przez cały cykl życia projektu.",
          hoverBg: "#1BC65C"
        },
        {
          title: "Przejrzysta Komunikacja",
          description: "Bądź poinformowany na każdym kroku dzięki szczegółowym raportom analitycznym, pulpitom w czasie rzeczywistym i regularnym aktualizacjom statusu. Dostarczamy jasne metryki, kompleksową dokumentację i praktyczne wnioski, aby pomóc Ci podejmować świadome decyzje.",
          hoverBg: "#AF6AF0"
        }
      ]
    },
    stats: [
      { value: "200+", label: "Przeanalizowanych Projektów" },
      { value: "95%", label: "Dostawa na Czas" },
      { value: "40%", label: "Redukcja Kosztów" }
    ],
    finalCta: {
      heading: "Gotowy na Dopasowanie Biznesu i Technologii?",
      subheading: "Upewnijmy się, że Twój projekt dostarcza rzeczywistą wartość biznesową",
      button: "Zacznij Dziś"
    }
  }
};

export default function BusinessAnalysisPageClient() {
  const { language } = useLanguage();
  const t = content[language];
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredWhy, setHoveredWhy] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.whyChooseUs.items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.whyChooseUs.items.length) % t.whyChooseUs.items.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <GlobalNavigation />

      {/* Hero Section - Like QA Page */}
      <ShaderBackground>
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#163C2E] via-[#1a4838] to-[#239D89]"></div>

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

            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <Sparkles className="h-4 w-4" />
                  <span>{t.hero.badge}</span>
                </Badge>
              </motion.div>

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
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-[#163C2E] hover:bg-white/90" asChild>
                  <a href="/contact">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <a href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.hero.ctaSecondary}
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-white/70"
              >
                {t.hero.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                    <span>{stat}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </ShaderBackground>

      {/* Services Grid */}
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
              {t.services.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.services.heading}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              {t.services.subheading}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { icon: <Target className="w-6 h-6" />, ...t.services.items[0] },
              { icon: <TrendingUp className="w-6 h-6" />, ...t.services.items[1] },
              { icon: <Users className="w-6 h-6" />, ...t.services.items[2] },
              { icon: <FileSearch className="w-6 h-6" />, ...t.services.items[3] }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`group p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  hoveredService === index
                    ? 'bg-[#163C2E] border-[#239D89] shadow-lg shadow-[#239D89]/20'
                    : 'bg-white dark:bg-[#1a2942] border-neutral-200 dark:border-[#1a2942] hover:border-[#239D89]/50'
                }`}
                variants={fadeInUp}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#163C2E]/10 to-[#239D89]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  hoveredService === index ? 'text-[#239D89]' : 'text-[#239D89]'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  hoveredService === index ? 'text-white' : 'text-neutral-900 dark:text-white'
                }`}>
                  {service.title}
                </h3>
                <p className={`transition-colors duration-300 ${
                  hoveredService === index ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              {t.benefits.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.benefits.heading}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              {t.benefits.subheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-[#239D89]/5 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#239D89] flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-6 bg-[#0f1724] overflow-hidden">
        <div className="absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.process.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t.process.heading}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {t.process.steps.map((step, index) => (
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
                      [{step.number}]
                    </motion.div>
                  </div>

                  <div className="lg:col-span-10">
                    <motion.div
                      className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1a2942] to-[#0f1724] border-2 border-[#239D89]/20 hover:border-[#239D89]/50 transition-all duration-500"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 60px rgba(35, 157, 137, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
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
                        {step.title}
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
                        {step.description}
                      </motion.p>

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

                {index < t.process.steps.length - 1 && (
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

      {/* Why Choose Us As Extended Team Model */}
      <section className="relative py-32 px-6 overflow-hidden bg-white dark:bg-neutral-950">
        <div className="absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.whyChooseUs.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.whyChooseUs.heading}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              {t.whyChooseUs.subheading}
            </p>
          </motion.div>

          {/* Desktop: Overlapping Cards */}
          <div className="hidden lg:block relative max-w-7xl mx-auto" style={{ minHeight: '850px' }}>
            {t.whyChooseUs.items.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 - index * 20, x: -20 + index * 5 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredWhy(index)}
                onHoverEnd={() => setHoveredWhy(null)}
                className="absolute rounded-sm border border-[#2a4466] overflow-hidden cursor-pointer group transition-all duration-500"
                style={{
                  left: `${80 * index}px`,
                  top: `${100 * index}px`,
                  width: '900px',
                  height: '500px',
                  zIndex: hoveredWhy === index ? 100 : 5 - index,
                  backgroundColor: hoveredWhy === index ? card.hoverBg : `hsl(210, 50%, ${8 + index * 2}%)`,
                  boxShadow: hoveredWhy === index ? `0 20px 60px ${card.hoverBg}50` : 'none'
                }}
              >
                <div className="absolute top-12 left-12">
                  <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                    [0{index + 1}]
                  </span>
                </div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h3 className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8 transition-all duration-500 text-white">
                    {card.title.split(' ').map((word, i) => (
                      <span key={i}>{word}<br /></span>
                    ))}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredWhy === index ? 1 : 0,
                      y: hoveredWhy === index ? 0 : 20
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-lg text-white leading-relaxed max-w-2xl"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                animate={{ x: `-${currentSlide * 100}%` }}
              >
                {t.whyChooseUs.items.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-[550px] rounded-xl border border-[#2a4466] overflow-hidden"
                      style={{
                        backgroundColor: card.hoverBg,
                        boxShadow: `0 20px 60px ${card.hoverBg}50`
                      }}
                    >
                      <div className="absolute top-8 left-8">
                        <span className="text-sm font-mono tracking-wider text-white/80">
                          [0{index + 1}]
                        </span>
                      </div>
                      <div className="h-full p-8 pt-16 flex flex-col justify-center">
                        <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight mb-6 text-white">
                          {card.title.split(' ').map((word, i) => (
                            <span key={i}>{word}<br /></span>
                          ))}
                        </h3>
                        <p className="text-base text-white/90 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#239D89] text-white flex items-center justify-center hover:bg-[#1e8473] transition-colors duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {t.whyChooseUs.items.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-[#239D89] w-8'
                        : 'bg-neutral-300 dark:bg-neutral-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#239D89] text-white flex items-center justify-center hover:bg-[#1e8473] transition-colors duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-4">
              <span className="text-neutral-600 dark:text-neutral-400 text-sm font-mono">
                {currentSlide + 1} / {t.whyChooseUs.items.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">{t.deliverables.heading}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.deliverables.subheading}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {t.deliverables.categories.map((category, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-[#163C2E]/5 to-transparent border border-neutral-200 dark:border-neutral-800 hover:border-[#239D89]/30 transition-all"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-bold mb-4 text-[#239D89]">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <CheckCircle2 className="w-4 h-4 text-[#239D89] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-6">{t.finalCta.heading}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {t.finalCta.subheading}
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] text-white rounded-xl hover:shadow-2xl hover:shadow-[#239D89]/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.finalCta.button}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      <Footer language={language} />
    </div>
  );
}