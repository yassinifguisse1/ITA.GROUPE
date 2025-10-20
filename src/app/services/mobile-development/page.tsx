"use client";

import { Smartphone, Tablet, Watch, Zap, CheckCircle2, ArrowRight, MapPin, Users, Award, Check, Trophy, UsersRound, Sparkles , Phone } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimatedTechTabs from "@/components/AnimatedTechTabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground"
import GlobalNavigation from "@/components/GlobalNavigation";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    badge: "Native & Cross-Platform Mobile Development",
    title: "Mobile Development",
    subtitle: "That Users Love",
    description: "Create powerful mobile applications that engage users and drive business growth. Native iOS, Android, or cross-platform solutions tailored to your needs.",
    cta1: "Start Your Mobile Project",
    cta2: "Schedule a Call",
    trust1: "10+ Years Experience",
    trust2: "500+ Projects Delivered",
    trust3: "98% Client Satisfaction",
    platformsTitle: "Mobile Platforms",
    platformsDesc: "Comprehensive mobile solutions for every platform and device",
    platforms: [
      {
        title: "iOS Development",
        description: "Native iOS apps built with Swift and SwiftUI for optimal performance and user experience."
      },
      {
        title: "Android Development",
        description: "Native Android apps using Kotlin and Jetpack Compose for modern, efficient applications."
      },
      {
        title: "Cross-Platform",
        description: "React Native and Flutter development for apps that work seamlessly across platforms."
      },
      {
        title: "Wearable Apps",
        description: "Apps for smartwatches and wearable devices to extend your mobile ecosystem."
      }
    ],
    caseStudiesBadge: "Our Success Stories",
    caseStudiesTitle: "Our Case Studies",
    caseStudiesDesc: "Discover how we've helped businesses worldwide build exceptional mobile applications",
    caseStudies: [
      {
        title: "Fitness App",
        client: "USA Client",
        location: "United States",
        description: "A comprehensive fitness tracking application featuring daily challenges, workout plans, personalized goals, and social features. Built with React Native for seamless cross-platform performance.",
        technologies: ["React Native", "Firebase", "Push Notifications", "Analytics"],
        features: [
          "Daily fitness challenges",
          "Personalized workout plans",
          "Social features & community",
          "Progress tracking & statistics",
          "Goal setting & achievements",
          "Real-time activity monitoring"
        ],
        results: {
          downloads: "50K+",
          rating: "4.8★",
          retention: "85%"
        }
      },
      {
        title: "Delivery Mobile App",
        client: "Sweden Client",
        location: "Sweden",
        description: "A robust delivery tracking application with real-time GPS tracking, shipment management, and seamless logistics coordination. Developed using React Native for optimal performance on both iOS and Android.",
        technologies: ["React Native", "Google Maps API", "Real-time Tracking", "Payment Integration"],
        features: [
          "Real-time GPS tracking",
          "Shipment status updates",
          "Multiple delivery management",
          "Route optimization",
          "In-app payment processing",
          "Push notifications for updates"
        ],
        results: {
          deliveries: "100K+",
          rating: "4.9★",
          efficiency: "+40%"
        }
      }
    ],
    techBadge: "— TECHNOLOGIES",
    processBadge: "— HOW WE WORK",
    processTitle: "Our Process",
    processSteps: [
      {
        title: "PRODUCT DISCOVERY",
        description: "We start providing our mobile application development services by creating a clear vision of your business idea. Our business analysts conduct interviews with your team, research competitors, and users' need, and prepare technical requirements for software developers."
      },
      {
        title: "SOFTWARE ARCHITECTURE",
        description: "Our solution architect chooses the infrastructure and frameworks based on the technical requirements to ensure smooth functionality development, integration with your existing ecosystem, and unlimited scalability in the future."
      },
      {
        title: "DEVELOPMENT & TESTING",
        description: "Our mobile engineers work on your project by applying our best practices and approaches to deliver a marketable product that will satisfy your customers. We engage QA specialists in the earliest project stages to prevent bug appearance."
      },
      {
        title: "PRODUCT LAUNCH",
        description: "We launch your mobile application by ensuring its smooth work without any inconsistencies or mistakes. Our specialists provide full support and maintenance to bring your customers maximum value."
      }
    ],
    whyUsBadge: "— WHY US?",
    whyUsTitle: "Why Choose Us As Mobile<br />App Development Company",
    whyUsPoints: [
      {
        title: "Full-Cycle Mobile Development Services",
        description: "We provide end-to-end mobile app development services from initial concept and design to deployment and post-launch support. Our comprehensive approach ensures every aspect of your mobile application is handled with expertise and precision."
      },
      {
        title: "High-Quality Mobile Applications",
        description: "Quality is at the core of everything we do. Our rigorous testing processes, code reviews, and quality assurance protocols ensure that your mobile app performs flawlessly across all devices and platforms with an exceptional user experience."
      },
      {
        title: "Industry-Focused Mobile Development Team",
        description: "Our experienced team of mobile developers specializes in various industries including healthcare, finance, e-commerce, and more. We understand the unique challenges and requirements of each sector to deliver tailored solutions."
      },
      {
        title: "Innovation and Cutting-Edge Technologies",
        description: "We stay ahead of the curve by leveraging the latest mobile technologies and frameworks including Swift, Kotlin, React Native, and Flutter. Our commitment to innovation ensures your app is built with modern, scalable solutions."
      }
    ],
    ctaTitle: "Ready to Build Your Mobile App?",
    ctaDesc: "Let's create an app that your users will love",
    ctaButton: "Get Started Today",
    builtWith: "Built with React Native",
    crossPlatform: "Cross-platform excellence",
    techUsed: "Technologies Used",
    keyFeatures: "Key Features",
    androidTitle: "ANDROID TECHNOLOGIES AND SERVICES",
    androidSubtitle: "Our technology stack for Android app development.",
    iosTitle: "IOS TECHNOLOGIES AND SERVICES",
    iosSubtitle: "Our technology stack for iOS app development.",
    crossPlatformTitle: "CROSS-PLATFORM TECHNOLOGIES AND SERVICES",
    crossPlatformSubtitle: "Our technology stack for cross-platform app development."
  },
  fr: {
    badge: "Développement Mobile Natif et Multi-Plateforme",
    title: "Développement Mobile",
    subtitle: "Que Les Utilisateurs Adorent",
    description: "Créez des applications mobiles puissantes qui engagent les utilisateurs et stimulent la croissance de votre entreprise. Solutions natives iOS, Android ou multi-plateformes adaptées à vos besoins.",
    cta1: "Démarrez Votre Projet Mobile",
    cta2: "Planifier un Appel",
    trust1: "10+ Ans d'Expérience",
    trust2: "500+ Projets Livrés",
    trust3: "98% de Satisfaction Client",
    platformsTitle: "Plateformes Mobiles",
    platformsDesc: "Solutions mobiles complètes pour chaque plateforme et appareil",
    platforms: [
      {
        title: "Développement iOS",
        description: "Applications iOS natives construites avec Swift et SwiftUI pour des performances optimales et une expérience utilisateur exceptionnelle."
      },
      {
        title: "Développement Android",
        description: "Applications Android natives utilisant Kotlin et Jetpack Compose pour des applications modernes et efficaces."
      },
      {
        title: "Multi-Plateforme",
        description: "Développement React Native et Flutter pour des applications qui fonctionnent parfaitement sur toutes les plateformes."
      },
      {
        title: "Applications Portables",
        description: "Applications pour montres connectées et appareils portables pour étendre votre écosystème mobile."
      }
    ],
    caseStudiesBadge: "Nos Success Stories",
    caseStudiesTitle: "Nos Études de Cas",
    caseStudiesDesc: "Découvrez comment nous avons aidé des entreprises du monde entier à créer des applications mobiles exceptionnelles",
    caseStudies: [
      {
        title: "Application Fitness",
        client: "Client USA",
        location: "États-Unis",
        description: "Une application complète de suivi de fitness avec des défis quotidiens, des plans d'entraînement, des objectifs personnalisés et des fonctionnalités sociales. Construite avec React Native pour des performances multi-plateformes fluides.",
        technologies: ["React Native", "Firebase", "Notifications Push", "Analytics"],
        features: [
          "Défis fitness quotidiens",
          "Plans d'entraînement personnalisés",
          "Fonctionnalités sociales et communauté",
          "Suivi des progrès et statistiques",
          "Définition d'objectifs et réalisations",
          "Surveillance d'activité en temps réel"
        ],
        results: {
          downloads: "50K+",
          rating: "4.8★",
          retention: "85%"
        }
      },
      {
        title: "Application de Livraison Mobile",
        client: "Client Suède",
        location: "Suède",
        description: "Une application robuste de suivi de livraison avec suivi GPS en temps réel, gestion des expéditions et coordination logistique fluide. Développée avec React Native pour des performances optimales sur iOS et Android.",
        technologies: ["React Native", "API Google Maps", "Suivi en Temps Réel", "Intégration Paiement"],
        features: [
          "Suivi GPS en temps réel",
          "Mises à jour du statut d'expédition",
          "Gestion de plusieurs livraisons",
          "Optimisation d'itinéraire",
          "Traitement des paiements in-app",
          "Notifications push pour les mises à jour"
        ],
        results: {
          deliveries: "100K+",
          rating: "4.9★",
          efficiency: "+40%"
        }
      }
    ],
    techBadge: "— TECHNOLOGIES",
    processBadge: "— COMMENT NOUS TRAVAILLONS",
    processTitle: "Notre Processus",
    processSteps: [
      {
        title: "DÉCOUVERTE PRODUIT",
        description: "Nous commençons nos services de développement d'applications mobiles en créant une vision claire de votre idée d'entreprise. Nos analystes commerciaux mènent des entretiens avec votre équipe, recherchent les concurrents et les besoins des utilisateurs, et préparent les exigences techniques pour les développeurs."
      },
      {
        title: "ARCHITECTURE LOGICIELLE",
        description: "Notre architecte de solutions choisit l'infrastructure et les frameworks basés sur les exigences techniques pour assurer un développement fonctionnel fluide, une intégration avec votre écosystème existant et une évolutivité illimitée à l'avenir."
      },
      {
        title: "DÉVELOPPEMENT ET TEST",
        description: "Nos ingénieurs mobiles travaillent sur votre projet en appliquant nos meilleures pratiques et approches pour livrer un produit commercialisable qui satisfera vos clients. Nous engageons des spécialistes QA dès les premières étapes du projet pour prévenir l'apparition de bugs."
      },
      {
        title: "LANCEMENT PRODUIT",
        description: "Nous lançons votre application mobile en assurant son fonctionnement fluide sans aucune incohérence ou erreur. Nos spécialistes fournissent un support et une maintenance complets pour apporter une valeur maximale à vos clients."
      }
    ],
    whyUsBadge: "— POURQUOI NOUS?",
    whyUsTitle: "Pourquoi Nous Choisir Comme\nEntreprise de Développement Mobile",
    whyUsPoints: [
      {
        title: "Services de Développement Mobile Complet",
        description: "Nous fournissons des services de développement d'applications mobiles de bout en bout, de la conception initiale et du design au déploiement et au support post-lancement. Notre approche complète garantit que chaque aspect de votre application mobile est géré avec expertise et précision."
      },
      {
        title: "Applications Mobiles de Haute Qualité",
        description: "La qualité est au cœur de tout ce que nous faisons. Nos processus de test rigoureux, nos revues de code et nos protocoles d'assurance qualité garantissent que votre application mobile fonctionne parfaitement sur tous les appareils et plateformes avec une expérience utilisateur exceptionnelle."
      },
      {
        title: "Équipe de Développement Mobile Axée sur l'Industrie",
        description: "Notre équipe expérimentée de développeurs mobiles se spécialise dans diverses industries, notamment la santé, la finance, le commerce électronique, et plus encore. Nous comprenons les défis et exigences uniques de chaque secteur pour fournir des solutions sur mesure."
      },
      {
        title: "Innovation et Technologies de Pointe",
        description: "Nous restons à l'avant-garde en tirant parti des dernières technologies et frameworks mobiles, notamment Swift, Kotlin, React Native et Flutter. Notre engagement envers l'innovation garantit que votre application est construite avec des solutions modernes et évolutives."
      }
    ],
    ctaTitle: "Prêt à Créer Votre Application Mobile?",
    ctaDesc: "Créons une application que vos utilisateurs adoreront",
    ctaButton: "Commencez Aujourd'hui",
    builtWith: "Construit avec React Native",
    crossPlatform: "Excellence multi-plateforme",
    techUsed: "Technologies Utilisées",
    keyFeatures: "Fonctionnalités Clés",
    androidTitle: "TECHNOLOGIES ET SERVICES ANDROID",
    androidSubtitle: "Notre pile technologique pour le développement d'applications Android.",
    iosTitle: "TECHNOLOGIES ET SERVICES IOS",
    iosSubtitle: "Notre pile technologique pour le développement d'applications iOS.",
    crossPlatformTitle: "TECHNOLOGIES ET SERVICES MULTI-PLATEFORMES",
    crossPlatformSubtitle: "Notre pile technologique pour le développement d'applications multi-plateformes."
  },
  pl: {
    badge: "Natywny i Wieloplatformowy Rozwój Mobilny",
    title: "Rozwój Mobilny",
    subtitle: "Który Użytkownicy Uwielbiają",
    description: "Twórz potężne aplikacje mobilne, które angażują użytkowników i napędzają rozwój biznesu. Natywne rozwiązania iOS, Android lub wieloplatformowe dostosowane do Twoich potrzeb.",
    cta1: "Rozpocznij Swój Projekt Mobilny",
    cta2: "Zaplanuj Rozmowę",
    trust1: "10+ Lat Doświadczenia",
    trust2: "500+ Dostarczonych Projektów",
    trust3: "98% Zadowolenia Klientów",
    platformsTitle: "Platformy Mobilne",
    platformsDesc: "Kompleksowe rozwiązania mobilne dla każdej platformy i urządzenia",
    platforms: [
      {
        title: "Rozwój iOS",
        description: "Natywne aplikacje iOS zbudowane w Swift i SwiftUI dla optymalnej wydajności i doświadczenia użytkownika."
      },
      {
        title: "Rozwój Android",
        description: "Natywne aplikacje Android wykorzystujące Kotlin i Jetpack Compose dla nowoczesnych, wydajnych aplikacji."
      },
      {
        title: "Wieloplatformowe",
        description: "Rozwój React Native i Flutter dla aplikacji, które działają płynnie na wszystkich platformach."
      },
      {
        title: "Aplikacje Ubieralne",
        description: "Aplikacje dla smartwatchy i urządzeń ubieralnych, aby rozszerzyć ekosystem mobilny."
      }
    ],
    caseStudiesBadge: "Nasze Historie Sukcesu",
    caseStudiesTitle: "Nasze Studia Przypadków",
    caseStudiesDesc: "Odkryj, jak pomogliśmy firmom na całym świecie tworzyć wyjątkowe aplikacje mobilne",
    caseStudies: [
      {
        title: "Aplikacja Fitness",
        client: "Klient USA",
        location: "Stany Zjednoczone",
        description: "Kompleksowa aplikacja do śledzenia fitness z codziennymi wyzwaniami, planami treningowymi, spersonalizowanymi celami i funkcjami społecznościowymi. Zbudowana w React Native dla płynnej wydajności wieloplatformowej.",
        technologies: ["React Native", "Firebase", "Powiadomienia Push", "Analytics"],
        features: [
          "Codzienne wyzwania fitness",
          "Spersonalizowane plany treningowe",
          "Funkcje społecznościowe i społeczność",
          "Śledzenie postępów i statystyki",
          "Wyznaczanie celów i osiągnięć",
          "Monitorowanie aktywności w czasie rzeczywistym"
        ],
        results: {
          downloads: "50K+",
          rating: "4.8★",
          retention: "85%"
        }
      },
      {
        title: "Aplikacja Mobilna Dostaw",
        client: "Klient Szwecja",
        location: "Szwecja",
        description: "Solidna aplikacja do śledzenia dostaw z śledzeniem GPS w czasie rzeczywistym, zarządzaniem przesyłkami i płynną koordynacją logistyczną. Opracowana przy użyciu React Native dla optymalnej wydajności na iOS i Android.",
        technologies: ["React Native", "API Google Maps", "Śledzenie w Czasie Rzeczywistym", "Integracja Płatności"],
        features: [
          "Śledzenie GPS w czasie rzeczywistym",
          "Aktualizacje statusu przesyłki",
          "Zarządzanie wieloma dostawami",
          "Optymalizacja trasy",
          "Przetwarzanie płatności w aplikacji",
          "Powiadomienia push o aktualizacjach"
        ],
        results: {
          deliveries: "100K+",
          rating: "4.9★",
          efficiency: "+40%"
        }
      }
    ],
    techBadge: "— TECHNOLOGIE",
    processBadge: "— JAK PRACUJEMY",
    processTitle: "Nasz Proces",
    processSteps: [
      {
        title: "ODKRYWANIE PRODUKTU",
        description: "Rozpoczynamy świadczenie usług rozwoju aplikacji mobilnych poprzez stworzenie jasnej wizji Twojego pomysłu biznesowego. Nasi analitycy biznesowi przeprowadzają wywiady z Twoim zespołem, badają konkurencję i potrzeby użytkowników oraz przygotowują wymagania techniczne dla programistów."
      },
      {
        title: "ARCHITEKTURA OPROGRAMOWANIA",
        description: "Nasz architekt rozwiązań wybiera infrastrukturę i frameworki w oparciu o wymagania techniczne, aby zapewnić płynny rozwój funkcjonalności, integrację z istniejącym ekosystemem i nieograniczoną skalowalność w przyszłości."
      },
      {
        title: "ROZWÓJ I TESTOWANIE",
        description: "Nasi inżynierowie mobilni pracują nad Twoim projektem, stosując nasze najlepsze praktyki i podejścia, aby dostarczyć produkt rynkowy, który zadowoli Twoich klientów. Angażujemy specjalistów QA na najwcześniejszych etapach projektu, aby zapobiec pojawieniu się błędów."
      },
      {
        title: "URUCHOMIENIE PRODUKTU",
        description: "Uruchamiamy Twoją aplikację mobilną, zapewniając jej płynne działanie bez żadnych niespójności czy błędów. Nasi specjaliści zapewniają pełne wsparcie i konserwację, aby przynieść Twoim klientom maksymalną wartość."
      }
    ],
    whyUsBadge: "— DLACZEGO MY?",
    whyUsTitle: "Dlaczego Wybrać Nas Jako\nFirmę Rozwoju Aplikacji Mobilnych",
    whyUsPoints: [
      {
        title: "Pełnocyklowe Usługi Rozwoju Mobilnego",
        description: "Zapewniamy kompleksowe usługi rozwoju aplikacji mobilnych od wstępnej koncepcji i projektu po wdrożenie i wsparcie po uruchomieniu. Nasze kompleksowe podejście zapewnia, że każdy aspekt Twojej aplikacji mobilnej jest obsługiwany z wiedzą i precyzją."
      },
      {
        title: "Wysokiej Jakości Aplikacje Mobilne",
        description: "Jakość jest podstawą wszystkiego, co robimy. Nasze rygorystyczne procesy testowania, przeglądy kodu i protokoły zapewnienia jakości gwarantują, że Twoja aplikacja mobilna działa bezbłędnie na wszystkich urządzeniach i platformach z wyjątkowym doświadczeniem użytkownika."
      },
      {
        title: "Zespół Rozwoju Mobilnego Skupiony na Branży",
        description: "Nasz doświadczony zespół programistów mobilnych specjalizuje się w różnych branżach, w tym opieki zdrowotnej, finansach, e-commerce i innych. Rozumiemy unikalne wyzwania i wymagania każdego sektora, aby dostarczyć dostosowane rozwiązania."
      },
      {
        title: "Innowacje i Najnowocześniejsze Technologie",
        description: "Wyprzedzamy krzywą, wykorzystując najnowsze technologie mobilne i frameworki, w tym Swift, Kotlin, React Native i Flutter. Nasze zaangażowanie w innowacje zapewnia, że Twoja aplikacja jest zbudowana na nowoczesnych, skalowalnych rozwiązaniach."
      }
    ],
    ctaTitle: "Gotowy na Stworzenie Swojej Aplikacji Mobilnej?",
    ctaDesc: "Stwórzmy aplikację, którą Twoi użytkownicy pokochają",
    ctaButton: "Rozpocznij Dzisiaj",
    builtWith: "Zbudowane z React Native",
    crossPlatform: "Doskonałość wieloplatformowa",
    techUsed: "Użyte Technologie",
    keyFeatures: "Kluczowe Funkcje",
    androidTitle: "TECHNOLOGIE I USŁUGI ANDROID",
    androidSubtitle: "Nasz stos technologiczny do tworzenia aplikacji Android.",
    iosTitle: "TECHNOLOGIE I USŁUGI IOS",
    iosSubtitle: "Nasz stos technologiczny do tworzenia aplikacji iOS.",
    crossPlatformTitle: "TECHNOLOGIE I USŁUGI WIELOPLATFORMOWE",
    crossPlatformSubtitle: "Nasz stos technologiczny do tworzenia aplikacji wieloplatformowych."
  }
};

export default function MobileDevelopmentPage() {
  const { language } = useLanguage();
  const t = content[language];

  const technologyStacks = {
    android: {
      title: t.androidTitle,
      subtitle: t.androidSubtitle,
      technologies: [
        { name: "Kotlin", icon: "🟣", color: "from-purple-500 to-purple-600" },
        { name: "Clean Architecture", icon: "📐", color: "from-blue-500 to-blue-600" },
        { name: "Android SDK", icon: "🤖", color: "from-green-500 to-green-600" },
        { name: "MVVM", icon: "🏗️", color: "from-red-500 to-red-600" },
        { name: "Retrofit2", icon: "🔄", color: "from-yellow-500 to-yellow-600" },
        { name: "Okhttp3", icon: "🌐", color: "from-cyan-500 to-cyan-600" },
        { name: "Java", icon: "☕", color: "from-orange-500 to-orange-600" },
        { name: "Kotlin Coroutines", icon: "⚡", color: "from-purple-600 to-pink-600" },
        { name: "RxJava", icon: "💫", color: "from-pink-500 to-pink-600" },
        { name: "Kotlin Flow", icon: "🌊", color: "from-blue-600 to-cyan-600" },
        { name: "Android Jetpack", icon: "🚀", color: "from-green-600 to-teal-600" },
        { name: "Realm", icon: "💎", color: "from-red-600 to-pink-600" },
        { name: "Unit Testing", icon: "🧪", color: "from-indigo-500 to-indigo-600" },
        { name: "Room", icon: "🗄️", color: "from-teal-500 to-teal-600" },
        { name: "Dagger2", icon: "💉", color: "from-orange-600 to-red-600" },
        { name: "Hilt", icon: "🔧", color: "from-green-500 to-emerald-600" },
        { name: "Google Play Services", icon: "🎮", color: "from-blue-500 to-purple-600" },
        { name: "Firebase", icon: "🔥", color: "from-yellow-600 to-orange-600" },
        { name: "CameraX", icon: "📷", color: "from-cyan-600 to-blue-600" },
        { name: "Android NDK", icon: "⚙️", color: "from-gray-600 to-gray-700" }
      ]
    },
    ios: {
      title: t.iosTitle,
      subtitle: t.iosSubtitle,
      technologies: [
        { name: "Swift", icon: "🦅", color: "from-orange-500 to-orange-600" },
        { name: "Combine", icon: "🔗", color: "from-blue-500 to-blue-600" },
        { name: "RxSwift", icon: "💫", color: "from-pink-500 to-pink-600" },
        { name: "ARKit", icon: "🥽", color: "from-purple-500 to-purple-600" },
        { name: "MapKit", icon: "🗺️", color: "from-green-500 to-green-600" },
        { name: "Google Maps", icon: "📍", color: "from-blue-600 to-cyan-600" },
        { name: "MapBox", icon: "🌍", color: "from-cyan-500 to-cyan-600" },
        { name: "CoreData", icon: "💾", color: "from-indigo-500 to-indigo-600" },
        { name: "CoreMotion", icon: "📱", color: "from-teal-500 to-teal-600" },
        { name: "CoreGraphics", icon: "🎨", color: "from-pink-600 to-red-600" },
        { name: "MVVM", icon: "🏗️", color: "from-red-500 to-red-600" },
        { name: "Swinject", icon: "💉", color: "from-orange-600 to-red-600" },
        { name: "Unit Testing", icon: "🧪", color: "from-green-600 to-teal-600" },
        { name: "CoreLocation", icon: "📍", color: "from-purple-600 to-pink-600" }
      ]
    },
    crossPlatform: {
      title: t.crossPlatformTitle,
      subtitle: t.crossPlatformSubtitle,
      technologies: [
        { name: "RxDart", icon: "🎯", color: "from-blue-500 to-cyan-600" },
        { name: "BLoC", icon: "🧱", color: "from-cyan-500 to-blue-600" },
        { name: "Cupertino UI", icon: "📱", color: "from-gray-500 to-gray-600" },
        { name: "Plugins", icon: "🔌", color: "from-purple-500 to-purple-600" },
        { name: "Material UI", icon: "🎨", color: "from-green-500 to-teal-600" },
        { name: "Dart", icon: "🎯", color: "from-blue-600 to-cyan-500" }
      ]
    }
  };

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
                <Sparkles className="h-4 w-4" />
                <span>{t.badge}</span>
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
                  {t.title}
                </span>
              </PointerHighlight>
              <br />
              {t.subtitle}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            >
              {t.description}
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
                  {t.cta1}
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
                  {t.cta2}
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
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                <span>{t.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                <span>{t.trust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                <span>{t.trust3}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </ShaderBackground>

      {/* Platforms Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.platformsTitle}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.platformsDesc}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[Smartphone, Smartphone, Tablet, Watch].map((Icon, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.platforms[index].title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{t.platforms[index].description}</p>
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
              {t.caseStudiesBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.caseStudiesTitle}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.caseStudiesDesc}
            </p>
          </div>

          <div className="space-y-24">
            {t.caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Images Column */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {index === 0 ? (
                      <>
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/fitnees-app-1760614705285.webp"
                            alt={`${study.title} screenshot 1`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/fitness-app-1760614705297.webp"
                            alt={`${study.title} screenshot 2`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Delivery-Mobile-App1-1760614933755.webp"
                            alt={`${study.title} screenshot 1`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Delivery-Mobile-App-1760614933753.webp"
                            alt={`${study.title} screenshot 2`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* React Native Badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#61DAFB] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#222222]">
                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.86 4.3c.18.74.24 1.38.17 1.75-.18.18-.93.07-2.07-.67.37-.42.73-.87 1.07-1.33.26-.04.52-.09.76-.15M7.36 7.7c-.18-.74-.24-1.38-.17-1.75.18-.18.93-.07 2.07.67-.37.42-.73.87-1.07 1.33-.26.04-.52.09-.76.15z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{t.builtWith}</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">{t.crossPlatform}</div>
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
                      {t.techUsed}
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
                      {t.keyFeatures}
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
                    {Object.entries(study.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 capitalize">
                          {key}
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

      {/* Technologies Section - ANIMATED TABS */}
      <section className="py-20 px-6 bg-[#1a2942] dark:bg-[#0f1724] overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/20 text-[#239D89] text-sm font-bold mb-6">
            {t.techBadge}
          </div>
        </div>

        <AnimatedTechTabs technologyStacks={technologyStacks} />
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-6 bg-[#1a2942] dark:bg-[#0f1724]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/20 text-[#239D89] text-sm font-bold mb-6">
              {t.processBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.processTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.processSteps.map((step, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#0f1724]/50 border border-[#239D89]/20 hover:border-[#239D89]/40 transition-all hover:shadow-xl hover:shadow-[#239D89]/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-[#239D89] text-xl font-bold">[0{index + 1}]</span>
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
              {t.whyUsBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 whitespace-pre-line">
              {t.whyUsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.whyUsPoints.map((point, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#0f1724]/50 border border-[#239D89]/20 hover:border-[#239D89]/40 transition-all hover:shadow-xl hover:shadow-[#239D89]/10 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#239D89]/20 text-[#239D89] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {index === 0 && <Check className="w-6 h-6" />}
                    {index === 1 && <Trophy className="w-6 h-6" />}
                    {index === 2 && <UsersRound className="w-6 h-6" />}
                    {index === 3 && <Sparkles className="w-6 h-6" />}
                  </div>
                  <span className="text-[#239D89] text-xl font-bold">[0{index + 1}]</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                  {point.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {t.ctaDesc}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            {t.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}