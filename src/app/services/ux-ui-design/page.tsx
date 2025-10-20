"use client";

import { Palette, Sparkles, Users, Zap, CheckCircle2, ArrowRight, MapPin, Award, Check, Trophy, UsersRound, Phone, Figma, Layers, Layout, Smile } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimatedTechTabs from "@/components/AnimatedTechTabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    hero: {
      badge: "User-Centered Design Excellence",
      title: "UX/UI Design",
      subtitle: "That Delights Users",
      description: "Craft exceptional user experiences with beautiful, intuitive designs that drive engagement and conversions. From research to pixel-perfect interfaces.",
      cta: "Start Your Design Project",
      ctaSecondary: "Schedule a Call",
      stats: ["10+ Years Experience", "500+ Projects Delivered", "98% Client Satisfaction"]
    },
    services: {
      heading: "Our Design Services",
      subheading: "Comprehensive UX/UI design solutions tailored to your needs",
      items: [
        {
          title: "UI Design",
          description: "Beautiful, intuitive interfaces that captivate users and enhance brand identity with pixel-perfect precision."
        },
        {
          title: "UX Research",
          description: "User-centered research and testing to ensure your product meets real user needs and expectations."
        },
        {
          title: "Wireframing",
          description: "Detailed wireframes and prototypes to visualize and refine your product before development."
        },
        {
          title: "User Testing",
          description: "Comprehensive usability testing to validate design decisions and optimize user experience."
        }
      ]
    },
    caseStudies: {
      badge: "Our Success Stories",
      heading: "Our Case Studies",
      subheading: "Discover how we've transformed user experiences for businesses worldwide",
      locationLabel: "Location",
      clientLabel: "Client",
      toolsLabel: "Tools Used",
      featuresLabel: "Key Features",
      resultsLabels: {
        conversion: "Conversion",
        engagement: "Engagement",
        satisfaction: "Satisfaction",
        adoption: "Adoption",
        rating: "Rating",
        efficiency: "Efficiency"
      },
      items: [
        {
          title: "E-Commerce Platform Redesign",
          client: "Netherlands Client",
          location: "Netherlands",
          description: "A complete redesign of an e-commerce platform focusing on conversion optimization, improved navigation, and a modern visual language. The project resulted in a 45% increase in conversion rates and significantly improved user engagement metrics.",
          technologies: ["Figma", "Adobe XD", "Principle", "User Research"],
          features: [
            "Conversion-focused design",
            "Mobile-first approach",
            "Advanced filtering system",
            "Personalized recommendations",
            "Streamlined checkout flow",
            "Accessibility compliance"
          ]
        },
        {
          title: "Healthcare Mobile App",
          client: "USA Client",
          location: "United States",
          description: "Designed a comprehensive healthcare mobile application with focus on accessibility, ease of use, and HIPAA compliance. The intuitive interface enables patients to manage appointments, prescriptions, and communicate with healthcare providers seamlessly.",
          technologies: ["Figma", "Sketch", "InVision", "Usability Testing"],
          features: [
            "Intuitive appointment booking",
            "Secure messaging system",
            "Prescription management",
            "Health records access",
            "HIPAA compliant design",
            "Multi-language support"
          ]
        }
      ]
    },
    process: {
      badge: "HOW WE WORK",
      heading: "Our Design Process",
      steps: [
        {
          number: "01",
          title: "DISCOVERY & RESEARCH",
          description: "We begin by understanding your business goals, target audience, and competitive landscape. Through user research, interviews, and data analysis, we gather insights that inform our design strategy and ensure we create solutions that resonate with your users."
        },
        {
          number: "02",
          title: "WIREFRAMING & PROTOTYPING",
          description: "Using the insights from research, we create detailed wireframes and interactive prototypes. This allows us to test and refine the user flow, information architecture, and key interactions before investing in high-fidelity designs."
        },
        {
          number: "03",
          title: "UI DESIGN & BRANDING",
          description: "We craft beautiful, modern interfaces that align with your brand identity. Every element is carefully designed with attention to typography, color, spacing, and visual hierarchy to create an engaging and memorable user experience."
        },
        {
          number: "04",
          title: "TESTING & ITERATION",
          description: "We validate our designs through usability testing, gathering feedback from real users. This iterative process ensures the final design meets user needs, achieves business goals, and provides an exceptional user experience across all devices and platforms."
        }
      ]
    },
    whyChooseUs: {
      badge: "WHY US?",
      heading: "Why Choose Us As Your UX/UI Design Partner",
      items: [
        {
          title: "User-Centered Design Approach",
          description: "We place users at the heart of every design decision. Through extensive research, testing, and iteration, we create experiences that not only look beautiful but truly meet user needs and drive business results."
        },
        {
          title: "Award-Winning Design Excellence",
          description: "Our designs have been recognized by industry leaders and have won multiple awards. We combine creativity with strategic thinking to deliver interfaces that are both visually stunning and highly functional."
        },
        {
          title: "Experienced Design Team",
          description: "Our team consists of seasoned UX researchers, UI designers, and interaction designers with diverse backgrounds across multiple industries. We bring a wealth of experience to every project."
        },
        {
          title: "Data-Driven Design Decisions",
          description: "We don't rely on assumptions. Every design choice is backed by research, analytics, and user testing. This data-driven approach ensures our designs deliver measurable improvements in user engagement and conversion."
        }
      ]
    },
    cta: {
      heading: "Ready to Transform Your User Experience?",
      subheading: "Let's create designs that your users will love and remember",
      button: "Get Started Today"
    }
  },
  fr: {
    hero: {
      badge: "Excellence en Design Centré sur l'Utilisateur",
      title: "Design UX/UI",
      subtitle: "Qui Ravit les Utilisateurs",
      description: "Créez des expériences utilisateur exceptionnelles avec des designs beaux et intuitifs qui stimulent l'engagement et les conversions. De la recherche aux interfaces au pixel près.",
      cta: "Démarrer Votre Projet Design",
      ctaSecondary: "Planifier un Appel",
      stats: ["10+ Ans d'Expérience", "500+ Projets Livrés", "98% Satisfaction Client"]
    },
    services: {
      heading: "Nos Services de Design",
      subheading: "Solutions de design UX/UI complètes adaptées à vos besoins",
      items: [
        {
          title: "Design UI",
          description: "Des interfaces belles et intuitives qui captivent les utilisateurs et améliorent l'identité de marque avec une précision au pixel près."
        },
        {
          title: "Recherche UX",
          description: "Recherche et tests centrés sur l'utilisateur pour garantir que votre produit répond aux besoins et attentes réels des utilisateurs."
        },
        {
          title: "Wireframing",
          description: "Wireframes détaillés et prototypes pour visualiser et affiner votre produit avant le développement."
        },
        {
          title: "Tests Utilisateurs",
          description: "Tests d'utilisabilité complets pour valider les décisions de design et optimiser l'expérience utilisateur."
        }
      ]
    },
    caseStudies: {
      badge: "Nos Réussites",
      heading: "Nos Études de Cas",
      subheading: "Découvrez comment nous avons transformé les expériences utilisateur pour des entreprises du monde entier",
      locationLabel: "Localisation",
      clientLabel: "Client",
      toolsLabel: "Outils Utilisés",
      featuresLabel: "Fonctionnalités Clés",
      resultsLabels: {
        conversion: "Conversion",
        engagement: "Engagement",
        satisfaction: "Satisfaction",
        adoption: "Adoption",
        rating: "Note",
        efficiency: "Efficacité"
      },
      items: [
        {
          title: "Refonte Plateforme E-Commerce",
          client: "Client Néerlandais",
          location: "Pays-Bas",
          description: "Une refonte complète d'une plateforme e-commerce axée sur l'optimisation des conversions, l'amélioration de la navigation et un langage visuel moderne. Le projet a entraîné une augmentation de 45% des taux de conversion et une amélioration significative des métriques d'engagement utilisateur.",
          technologies: ["Figma", "Adobe XD", "Principle", "Recherche Utilisateur"],
          features: [
            "Design axé conversion",
            "Approche mobile-first",
            "Système de filtrage avancé",
            "Recommandations personnalisées",
            "Flux de paiement simplifié",
            "Conformité accessibilité"
          ]
        },
        {
          title: "Application Mobile Santé",
          client: "Client USA",
          location: "États-Unis",
          description: "Conception d'une application mobile de santé complète axée sur l'accessibilité, la facilité d'utilisation et la conformité HIPAA. L'interface intuitive permet aux patients de gérer les rendez-vous, les prescriptions et de communiquer avec les prestataires de soins de santé en toute fluidité.",
          technologies: ["Figma", "Sketch", "InVision", "Tests d'Utilisabilité"],
          features: [
            "Prise de rendez-vous intuitive",
            "Système de messagerie sécurisé",
            "Gestion des prescriptions",
            "Accès aux dossiers médicaux",
            "Design conforme HIPAA",
            "Support multilingue"
          ]
        }
      ]
    },
    process: {
      badge: "COMMENT NOUS TRAVAILLONS",
      heading: "Notre Processus de Design",
      steps: [
        {
          number: "01",
          title: "DÉCOUVERTE & RECHERCHE",
          description: "Nous commençons par comprendre vos objectifs commerciaux, votre public cible et le paysage concurrentiel. Par la recherche utilisateur, les entretiens et l'analyse de données, nous recueillons des insights qui informent notre stratégie de design et nous assurons de créer des solutions qui résonnent avec vos utilisateurs."
        },
        {
          number: "02",
          title: "WIREFRAMING & PROTOTYPAGE",
          description: "En utilisant les insights de la recherche, nous créons des wireframes détaillés et des prototypes interactifs. Cela nous permet de tester et d'affiner le flux utilisateur, l'architecture de l'information et les interactions clés avant d'investir dans des designs haute fidélité."
        },
        {
          number: "03",
          title: "DESIGN UI & BRANDING",
          description: "Nous créons des interfaces belles et modernes qui s'alignent avec votre identité de marque. Chaque élément est soigneusement conçu avec attention à la typographie, la couleur, l'espacement et la hiérarchie visuelle pour créer une expérience utilisateur engageante et mémorable."
        },
        {
          number: "04",
          title: "TESTS & ITÉRATION",
          description: "Nous validons nos designs par des tests d'utilisabilité, recueillant des retours d'utilisateurs réels. Ce processus itératif garantit que le design final répond aux besoins des utilisateurs, atteint les objectifs commerciaux et offre une expérience utilisateur exceptionnelle sur tous les appareils et plateformes."
        }
      ]
    },
    whyChooseUs: {
      badge: "POURQUOI NOUS?",
      heading: "Pourquoi Nous Choisir Comme Partenaire Design UX/UI",
      items: [
        {
          title: "Approche Design Centrée Utilisateur",
          description: "Nous plaçons les utilisateurs au cœur de chaque décision de design. Par une recherche extensive, des tests et des itérations, nous créons des expériences qui non seulement sont belles mais répondent vraiment aux besoins des utilisateurs et génèrent des résultats commerciaux."
        },
        {
          title: "Excellence Design Primée",
          description: "Nos designs ont été reconnus par les leaders de l'industrie et ont remporté plusieurs prix. Nous combinons créativité et réflexion stratégique pour livrer des interfaces à la fois visuellement époustouflantes et hautement fonctionnelles."
        },
        {
          title: "Équipe Design Expérimentée",
          description: "Notre équipe se compose de chercheurs UX chevronnés, de designers UI et de designers d'interaction avec des parcours diversifiés dans plusieurs industries. Nous apportons une richesse d'expérience à chaque projet."
        },
        {
          title: "Décisions Design Basées sur les Données",
          description: "Nous ne comptons pas sur les suppositions. Chaque choix de design est soutenu par la recherche, l'analyse et les tests utilisateurs. Cette approche basée sur les données garantit que nos designs offrent des améliorations mesurables en engagement utilisateur et conversion."
        }
      ]
    },
    cta: {
      heading: "Prêt à Transformer Votre Expérience Utilisateur?",
      subheading: "Créons des designs que vos utilisateurs aimeront et se souviendront",
      button: "Commencer Aujourd'hui"
    }
  },
  pl: {
    hero: {
      badge: "Doskonałość w Projektowaniu Zorientowanym na Użytkownika",
      title: "Design UX/UI",
      subtitle: "Który Zachwyca Użytkowników",
      description: "Twórz wyjątkowe doświadczenia użytkownika z pięknymi, intuicyjnymi projektami, które napędzają zaangażowanie i konwersje. Od badań do interfejsów idealnych co do piksela.",
      cta: "Rozpocznij Projekt Designu",
      ctaSecondary: "Zaplanuj Rozmowę",
      stats: ["10+ Lat Doświadczenia", "500+ Dostarczonych Projektów", "98% Satysfakcja Klienta"]
    },
    services: {
      heading: "Nasze Usługi Designu",
      subheading: "Kompleksowe rozwiązania designu UX/UI dostosowane do Twoich potrzeb",
      items: [
        {
          title: "Design UI",
          description: "Piękne, intuicyjne interfejsy, które urzekają użytkowników i wzmacniają tożsamość marki z precyzją co do piksela."
        },
        {
          title: "Badania UX",
          description: "Badania i testy zorientowane na użytkownika, aby zapewnić, że Twój produkt spełnia rzeczywiste potrzeby i oczekiwania użytkowników."
        },
        {
          title: "Wireframing",
          description: "Szczegółowe wireframe'y i prototypy do wizualizacji i udoskonalenia produktu przed rozwojem."
        },
        {
          title: "Testy Użytkowników",
          description: "Kompleksowe testy użyteczności do walidacji decyzji projektowych i optymalizacji doświadczenia użytkownika."
        }
      ]
    },
    caseStudies: {
      badge: "Nasze Sukcesy",
      heading: "Nasze Studia Przypadków",
      subheading: "Odkryj, jak przekształciliśmy doświadczenia użytkowników dla firm na całym świecie",
      locationLabel: "Lokalizacja",
      clientLabel: "Klient",
      toolsLabel: "Używane Narzędzia",
      featuresLabel: "Kluczowe Funkcje",
      resultsLabels: {
        conversion: "Konwersja",
        engagement: "Zaangażowanie",
        satisfaction: "Satysfakcja",
        adoption: "Adopcja",
        rating: "Ocena",
        efficiency: "Efektywność"
      },
      items: [
        {
          title: "Przeprojektowanie Platformy E-Commerce",
          client: "Klient Holenderski",
          location: "Holandia",
          description: "Kompletne przeprojektowanie platformy e-commerce skupiające się na optymalizacji konwersji, ulepszonej nawigacji i nowoczesnym języku wizualnym. Projekt zaowocował 45% wzrostem wskaźników konwersji i znacznie poprawionymi metrykami zaangażowania użytkowników.",
          technologies: ["Figma", "Adobe XD", "Principle", "Badania Użytkowników"],
          features: [
            "Design skupiony na konwersji",
            "Podejście mobile-first",
            "Zaawansowany system filtrowania",
            "Spersonalizowane rekomendacje",
            "Uproszczony proces zakupu",
            "Zgodność z dostępnością"
          ]
        },
        {
          title: "Aplikacja Mobilna Zdrowotna",
          client: "Klient USA",
          location: "Stany Zjednoczone",
          description: "Zaprojektowano kompleksową aplikację mobilną zdrowotną z naciskiem na dostępność, łatwość użycia i zgodność z HIPAA. Intuicyjny interfejs umożliwia pacjentom zarządzanie wizytami, recepty i komunikację z dostawcami opieki zdrowotnej w sposób płynny.",
          technologies: ["Figma", "Sketch", "InVision", "Testy Użyteczności"],
          features: [
            "Intuicyjne umawianie wizyt",
            "Bezpieczny system wiadomości",
            "Zarządzanie recepty",
            "Dostęp do dokumentacji medycznej",
            "Design zgodny z HIPAA",
            "Wsparcie wielojęzyczne"
          ]
        }
      ]
    },
    process: {
      badge: "JAK PRACUJEMY",
      heading: "Nasz Proces Designu",
      steps: [
        {
          number: "01",
          title: "ODKRYCIE I BADANIA",
          description: "Zaczynamy od zrozumienia Twoich celów biznesowych, grupy docelowej i krajobrazu konkurencyjnego. Poprzez badania użytkowników, wywiady i analizę danych zbieramy insighty, które informują naszą strategię designu i zapewniają, że tworzymy rozwiązania rezonujące z Twoimi użytkownikami."
        },
        {
          number: "02",
          title: "WIREFRAMING I PROTOTYPOWANIE",
          description: "Używając insightów z badań, tworzymy szczegółowe wireframe'y i interaktywne prototypy. Pozwala nam to testować i udoskonalać przepływ użytkownika, architekturę informacji i kluczowe interakcje przed inwestowaniem w projekty wysokiej wierności."
        },
        {
          number: "03",
          title: "DESIGN UI I BRANDING",
          description: "Tworzymy piękne, nowoczesne interfejsy zgodne z Twoją tożsamością marki. Każdy element jest starannie zaprojektowany z uwagą na typografię, kolor, odstępy i hierarchię wizualną, aby stworzyć angażujące i niezapomniane doświadczenie użytkownika."
        },
        {
          number: "04",
          title: "TESTOWANIE I ITERACJA",
          description: "Walidujemy nasze projekty poprzez testy użyteczności, zbierając opinie od prawdziwych użytkowników. Ten iteracyjny proces zapewnia, że końcowy design spełnia potrzeby użytkowników, osiąga cele biznesowe i zapewnia wyjątkowe doświadczenie użytkownika na wszystkich urządzeniach i platformach."
        }
      ]
    },
    whyChooseUs: {
      badge: "DLACZEGO MY?",
      heading: "Dlaczego Wybrać Nas Jako Partnera Designu UX/UI",
      items: [
        {
          title: "Podejście Designu Zorientowane na Użytkownika",
          description: "Umieszczamy użytkowników w sercu każdej decyzji projektowej. Poprzez obszerne badania, testy i iteracje tworzymy doświadczenia, które nie tylko wyglądają pięknie, ale naprawdę spełniają potrzeby użytkowników i przynoszą wyniki biznesowe."
        },
        {
          title: "Nagradzana Doskonałość Designu",
          description: "Nasze projekty zostały docenione przez liderów branży i zdobyły liczne nagrody. Łączymy kreatywność ze strategicznym myśleniem, aby dostarczyć interfejsy, które są zarówno wizualnie oszałamiające, jak i wysoce funkcjonalne."
        },
        {
          title: "Doświadczony Zespół Designu",
          description: "Nasz zespół składa się z doświadczonych badaczy UX, projektantów UI i projektantów interakcji z różnorodnym doświadczeniem w wielu branżach. Wnosimy bogactwo doświadczenia do każdego projektu."
        },
        {
          title: "Decyzje Designu Oparte na Danych",
          description: "Nie polegamy na założeniach. Każdy wybór projektowy jest wspierany przez badania, analitykę i testy użytkowników. To podejście oparte na danych zapewnia, że nasze projekty dostarczają mierzalne ulepszenia w zaangażowaniu użytkowników i konwersji."
        }
      ]
    },
    cta: {
      heading: "Gotowy na Przekształcenie Doświadczenia Użytkownika?",
      subheading: "Stwórzmy projekty, które Twoi użytkownicy pokochają i zapamiętają",
      button: "Zacznij Dziś"
    }
  }
};

export default function UXUIDesignPage() {
  const { language } = useLanguage();
  const t = content[language];

  const designServices = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: t.services.items[0].title,
      description: t.services.items[0].description
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t.services.items[1].title,
      description: t.services.items[1].description
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: t.services.items[2].title,
      description: t.services.items[2].description
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: t.services.items[3].title,
      description: t.services.items[3].description
    }
  ];

  const caseStudies = [
    {
      images: [
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ec-1760711542962.webp",
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/eco2-1760711555436.webp"
      ],
      results: {
        conversion: "+45%",
        engagement: "+60%",
        satisfaction: "4.9★"
      }
    },
    {
      images: [
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/heam-1760712022763.webp",
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/hea-1760712022766.webp"
      ],
      results: {
        adoption: "85%",
        rating: "4.8★",
        efficiency: "+50%"
      }
    }
  ];

  const technologyStacks = {
    designTools: {
      title: "DESIGN TOOLS & TECHNOLOGIES",
      subtitle: "Our comprehensive toolkit for creating exceptional user experiences.",
      technologies: [
        { name: "Figma", icon: "🎨", color: "from-purple-500 to-purple-600" },
        { name: "Adobe XD", icon: "🎯", color: "from-pink-500 to-pink-600" },
        { name: "Sketch", icon: "💎", color: "from-orange-500 to-orange-600" },
        { name: "InVision", icon: "🚀", color: "from-blue-500 to-blue-600" },
        { name: "Principle", icon: "⚡", color: "from-yellow-500 to-yellow-600" },
        { name: "Framer", icon: "🎪", color: "from-cyan-500 to-cyan-600" },
        { name: "Adobe Illustrator", icon: "🖌️", color: "from-orange-600 to-red-600" },
        { name: "Adobe Photoshop", icon: "🖼️", color: "from-blue-600 to-cyan-600" },
        { name: "Miro", icon: "🗂️", color: "from-yellow-600 to-orange-600" },
        { name: "Maze", icon: "🧪", color: "from-green-500 to-green-600" },
        { name: "Hotjar", icon: "📊", color: "from-red-500 to-red-600" },
        { name: "UsabilityHub", icon: "👥", color: "from-indigo-500 to-indigo-600" }
      ]
    },
    designSystem: {
      title: "DESIGN SYSTEMS & METHODOLOGY",
      subtitle: "Frameworks and methodologies we use for consistent, scalable design.",
      technologies: [
        { name: "Atomic Design", icon: "⚛️", color: "from-blue-500 to-cyan-600" },
        { name: "Material Design", icon: "📱", color: "from-green-500 to-teal-600" },
        { name: "Human Interface Guidelines", icon: "🍎", color: "from-gray-500 to-gray-600" },
        { name: "Design Tokens", icon: "🎨", color: "from-purple-500 to-purple-600" },
        { name: "Component Libraries", icon: "📦", color: "from-cyan-500 to-blue-600" },
        { name: "Style Guides", icon: "📋", color: "from-orange-500 to-orange-600" }
      ]
    },
    research: {
      title: "UX RESEARCH & TESTING",
      subtitle: "Tools and methods for understanding and validating user needs.",
      technologies: [
        { name: "User Interviews", icon: "🎤", color: "from-blue-500 to-blue-600" },
        { name: "A/B Testing", icon: "🔬", color: "from-purple-500 to-purple-600" },
        { name: "Heat Mapping", icon: "🔥", color: "from-red-500 to-orange-600" },
        { name: "User Personas", icon: "👤", color: "from-green-500 to-green-600" },
        { name: "Journey Mapping", icon: "🗺️", color: "from-cyan-500 to-cyan-600" },
        { name: "Card Sorting", icon: "🃏", color: "from-pink-500 to-pink-600" }
      ]
    }
  };

  const processSteps = [
    {
      number: "01",
      title: "DISCOVERY & RESEARCH",
      description: "We begin by understanding your business goals, target audience, and competitive landscape. Through user research, interviews, and data analysis, we gather insights that inform our design strategy and ensure we create solutions that resonate with your users."
    },
    {
      number: "02",
      title: "WIREFRAMING & PROTOTYPING",
      description: "Using the insights from research, we create detailed wireframes and interactive prototypes. This allows us to test and refine the user flow, information architecture, and key interactions before investing in high-fidelity designs."
    },
    {
      number: "03",
      title: "UI DESIGN & BRANDING",
      description: "We craft beautiful, modern interfaces that align with your brand identity. Every element is carefully designed with attention to typography, color, spacing, and visual hierarchy to create an engaging and memorable user experience."
    },
    {
      number: "04",
      title: "TESTING & ITERATION",
      description: "We validate our designs through usability testing, gathering feedback from real users. This iterative process ensures the final design meets user needs, achieves business goals, and provides an exceptional user experience across all devices and platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
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
                  <Sparkles className="h-4 w-4" />
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
                {t.hero.subtitle}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
              >
                {t.hero.description}
              </motion.p>

              {/* CTA Buttons */}
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

              {/* Trust Indicators */}
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

      {/* Design Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.services.heading}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.services.subheading}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              {t.caseStudies.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.caseStudies.heading}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.caseStudies.subheading}
            </p>
          </div>

          <div className="space-y-24">
            {t.caseStudies.items.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Images Column */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudies[index].images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500"
                      >
                        <Image
                          src={image}
                          alt={`${study.title} design ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Figma Badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F24E1E] flex items-center justify-center">
                      <Figma className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">Designed with Figma</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">Professional design tools</div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h3>
                  
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-6">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">{study.client}</span>
                  </div>

                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4">
                      {t.caseStudies.toolsLabel}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider mb-4">
                      {t.caseStudies.featuresLabel}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {study.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
                    {Object.entries(caseStudies[index].results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 capitalize">
                          {t.caseStudies.resultsLabels[key]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Our Process Section */}
      <section className="py-20 px-6 bg-[#1a2942] dark:bg-[#0f1724]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/20 text-[#239D89] text-sm font-bold mb-6">
              — {t.process.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.process.heading}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.process.steps.map((step, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#0f1724]/50 border border-[#239D89]/20 hover:border-[#239D89]/40 transition-all hover:shadow-xl hover:shadow-[#239D89]/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-[#239D89] text-xl font-bold">[{step.number}]</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-[#1a2942] dark:bg-[#0f1724]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/20 text-[#239D89] text-sm font-bold mb-6">
              — {t.whyChooseUs.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.whyChooseUs.heading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.whyChooseUs.items.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#0f1724]/50 border border-[#239D89]/20 hover:border-[#239D89]/40 transition-all hover:shadow-xl hover:shadow-[#239D89]/10 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#239D89]/20 text-[#239D89] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6" />
                  </div>
                  <span className="text-[#239D89] text-xl font-bold">[0{index + 1}]</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.cta.heading}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {t.cta.subheading}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}