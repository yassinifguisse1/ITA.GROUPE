"use client";

import { Smartphone, Tablet, Watch, Zap, CheckCircle2, ArrowRight, MapPin, Users, Award, Check, Trophy, UsersRound, Sparkles , Phone } from "lucide-react";
import Image from "next/image";
import AnimatedTechTabs from "@/components/AnimatedTechTabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground"
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
        title: "E-Commerce Mobile App",
        location: "Morocco",
        description: "Complete e-commerce solution with payment integration, inventory management, and real-time analytics.",
        users: "50K+ Users",
        rating: "4.9/5",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
      },
      {
        title: "Healthcare Telemedicine",
        location: "France",
        description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers.",
        users: "25K+ Users",
        rating: "4.8/5",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
      },
      {
        title: "Fintech Banking App",
        location: "Germany",
        description: "Secure banking application with biometric authentication and real-time transactions.",
        users: "100K+ Users",
        rating: "4.9/5",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
      }
    ],
    whyUsPoints: [
      {
        title: "Proven Expertise",
        description: "10+ years of mobile development experience with 500+ successful projects delivered across iOS, Android, and cross-platform solutions."
      },
      {
        title: "Latest Technologies",
        description: "We stay ahead with the latest mobile technologies including SwiftUI, Jetpack Compose, React Native, and Flutter for optimal performance."
      },
      {
        title: "User-Centered Design",
        description: "Every app we build is designed with the end user in mind, ensuring intuitive interfaces and exceptional user experiences."
      },
      {
        title: "End-to-End Support",
        description: "From concept to App Store deployment, we provide comprehensive support including design, development, testing, and maintenance."
      }
    ],
    ctaTitle: "Ready to Build Your Mobile App?",
    ctaDesc: "Let's discuss your mobile app idea and bring it to life with our expert development team.",
    ctaButton: "Start Your Project",
    androidTitle: "ANDROID TECHNOLOGIES & SERVICES",
    androidSubtitle: "Our technology stack for building Android applications.",
    iosTitle: "iOS TECHNOLOGIES & SERVICES",
    iosSubtitle: "Our technology stack for building iOS applications.",
    crossPlatformTitle: "CROSS-PLATFORM TECHNOLOGIES & SERVICES",
    crossPlatformSubtitle: "Our technology stack for building cross-platform applications."
  },
  fr: {
    badge: "Développement Mobile Natif & Cross-Platform",
    title: "Développement Mobile",
    subtitle: "Que les Utilisateurs Adorent",
    description: "Créez des applications mobiles puissantes qui engagent les utilisateurs et stimulent la croissance de l'entreprise. Solutions iOS natives, Android ou cross-platform adaptées à vos besoins.",
    cta1: "Commencer Votre Projet Mobile",
    cta2: "Planifier un Appel",
    trust1: "10+ Ans d'Expérience",
    trust2: "500+ Projets Livrés",
    trust3: "98% Satisfaction Client",
    platformsTitle: "Plateformes Mobiles",
    platformsDesc: "Solutions mobiles complètes pour chaque plateforme et appareil",
    platforms: [
      {
        title: "Développement iOS",
        description: "Applications iOS natives construites avec Swift et SwiftUI pour des performances et une expérience utilisateur optimales."
      },
      {
        title: "Développement Android",
        description: "Applications Android natives utilisant Kotlin et Jetpack Compose pour des applications modernes et efficaces."
      },
      {
        title: "Cross-Platform",
        description: "Développement React Native et Flutter pour des applications qui fonctionnent parfaitement sur toutes les plateformes."
      },
      {
        title: "Applications Wearables",
        description: "Applications pour montres connectées et appareils portables pour étendre votre écosystème mobile."
      }
    ],
    caseStudiesBadge: "Nos Histoires de Succès",
    caseStudiesTitle: "Nos Études de Cas",
    caseStudiesDesc: "Découvrez comment nous avons aidé des entreprises du monde entier à créer des applications mobiles exceptionnelles",
    caseStudies: [
      {
        title: "Application E-Commerce Mobile",
        location: "Maroc",
        description: "Solution e-commerce complète avec intégration de paiement, gestion d'inventaire et analyses en temps réel.",
        users: "50K+ Utilisateurs",
        rating: "4.9/5",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
      },
      {
        title: "Télémédecine Santé",
        location: "France",
        description: "Plateforme de télémédecine conforme HIPAA connectant patients et prestataires de soins.",
        users: "25K+ Utilisateurs",
        rating: "4.8/5",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
      },
      {
        title: "Application Bancaire Fintech",
        location: "Allemagne",
        description: "Application bancaire sécurisée avec authentification biométrique et transactions en temps réel.",
        users: "100K+ Utilisateurs",
        rating: "4.9/5",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
      }
    ],
    whyUsPoints: [
      {
        title: "Expertise Prouvée",
        description: "10+ ans d'expérience en développement mobile avec 500+ projets réussis livrés sur iOS, Android et solutions cross-platform."
      },
      {
        title: "Technologies de Pointe",
        description: "Nous restons à la pointe avec les dernières technologies mobiles incluant SwiftUI, Jetpack Compose, React Native et Flutter pour des performances optimales."
      },
      {
        title: "Design Centré Utilisateur",
        description: "Chaque application que nous construisons est conçue avec l'utilisateur final en tête, garantissant des interfaces intuitives et des expériences utilisateur exceptionnelles."
      },
      {
        title: "Support Complet",
        description: "Du concept au déploiement sur l'App Store, nous fournissons un support complet incluant design, développement, tests et maintenance."
      }
    ],
    ctaTitle: "Prêt à Construire Votre Application Mobile?",
    ctaDesc: "Discutons de votre idée d'application mobile et donnons-lui vie avec notre équipe de développement experte.",
    ctaButton: "Commencer Votre Projet",
    androidTitle: "TECHNOLOGIES ET SERVICES ANDROID",
    androidSubtitle: "Notre stack technologique pour créer des applications Android.",
    iosTitle: "TECHNOLOGIES ET SERVICES iOS",
    iosSubtitle: "Notre stack technologique pour créer des applications iOS.",
    crossPlatformTitle: "TECHNOLOGIES ET SERVICES CROSS-PLATFORM",
    crossPlatformSubtitle: "Notre stack technologique pour créer des applications cross-platform."
  },
  pl: {
    badge: "Natywny i Wieloplatformowy Rozwój Mobilny",
    title: "Rozwój Mobilny",
    subtitle: "Który Użytkownicy Kochają",
    description: "Twórz potężne aplikacje mobilne, które angażują użytkowników i napędzają wzrost biznesu. Natywne rozwiązania iOS, Android lub wieloplatformowe dostosowane do Twoich potrzeb.",
    cta1: "Rozpocznij Swój Projekt Mobilny",
    cta2: "Zaplanuj Rozmowę",
    trust1: "10+ Lat Doświadczenia",
    trust2: "500+ Dostarczonych Projektów",
    trust3: "98% Satysfakcji Klientów",
    platformsTitle: "Platformy Mobilne",
    platformsDesc: "Kompleksowe rozwiązania mobilne dla każdej platformy i urządzenia",
    platforms: [
      {
        title: "Rozwój iOS",
        description: "Natywne aplikacje iOS zbudowane ze Swift i SwiftUI dla optymalnej wydajności i doświadczenia użytkownika."
      },
      {
        title: "Rozwój Android",
        description: "Natywne aplikacje Android używające Kotlin i Jetpack Compose dla nowoczesnych, wydajnych aplikacji."
      },
      {
        title: "Wieloplatformowe",
        description: "Rozwój React Native i Flutter dla aplikacji, które działają bezproblemowo na wszystkich platformach."
      },
      {
        title: "Aplikacje Wearable",
        description: "Aplikacje dla smartwatchów i urządzeń noszonych, aby rozszerzyć Twój ekosystem mobilny."
      }
    ],
    caseStudiesBadge: "Nasze Historie Sukcesu",
    caseStudiesTitle: "Nasze Studia Przypadków",
    caseStudiesDesc: "Odkryj, jak pomogliśmy firmom na całym świecie budować wyjątkowe aplikacje mobilne",
    caseStudies: [
      {
        title: "Mobilna Aplikacja E-Commerce",
        location: "Maroko",
        description: "Kompletne rozwiązanie e-commerce z integracją płatności, zarządzaniem magazynem i analityką w czasie rzeczywistym.",
        users: "50K+ Użytkowników",
        rating: "4.9/5",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
      },
      {
        title: "Telemedycyna Zdrowotna",
        location: "Francja",
        description: "Platforma telemedyczna zgodna z HIPAA łącząca pacjentów z dostawcami opieki zdrowotnej.",
        users: "25K+ Użytkowników",
        rating: "4.8/5",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop"
      },
      {
        title: "Aplikacja Bankowa Fintech",
        location: "Niemcy",
        description: "Bezpieczna aplikacja bankowa z uwierzytelnianiem biometrycznym i transakcjami w czasie rzeczywistym.",
        users: "100K+ Użytkowników",
        rating: "4.9/5",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop"
      }
    ],
    whyUsPoints: [
      {
        title: "Sprawdzone Doświadczenie",
        description: "10+ lat doświadczenia w rozwoju mobilnym z 500+ udanymi projektami dostarczonymi na iOS, Android i rozwiązania wieloplatformowe."
      },
      {
        title: "Najnowsze Technologie",
        description: "Pozostajemy na czele z najnowszymi technologiami mobilnymi, w tym SwiftUI, Jetpack Compose, React Native i Flutter dla optymalnej wydajności."
      },
      {
        title: "Design Skoncentrowany na Użytkowniku",
        description: "Każda aplikacja, którą budujemy, jest zaprojektowana z myślą o użytkowniku końcowym, zapewniając intuicyjne interfejsy i wyjątkowe doświadczenia użytkownika."
      },
      {
        title: "Wsparcie End-to-End",
        description: "Od koncepcji do wdrożenia w App Store, zapewniamy kompleksowe wsparcie, w tym design, rozwój, testowanie i utrzymanie."
      }
    ],
    ctaTitle: "Gotowy do Budowy Swojej Aplikacji Mobilnej?",
    ctaDesc: "Porozmawiajmy o Twoim pomyśle na aplikację mobilną i ożywijmy go z naszym ekspertowym zespołem deweloperskim.",
    ctaButton: "Rozpocznij Swój Projekt",
    androidTitle: "TECHNOLOGIE I USŁUGI ANDROID",
    androidSubtitle: "Nasz stos technologiczny do tworzenia aplikacji Android.",
    iosTitle: "TECHNOLOGIE I USŁUGI IOS",
    iosSubtitle: "Nasz stos technologiczny do tworzenia aplikacji iOS.",
    crossPlatformTitle: "TECHNOLOGIE I USŁUGI WIELOPLATFORMOWE",
    crossPlatformSubtitle: "Nasz stos technologiczny do tworzenia aplikacji wieloplatformowych."
  }
};

export default function MobileDevelopmentPageClient() {
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
        { name: "Room Database", icon: "🗄️", color: "from-indigo-500 to-indigo-600" },
        { name: "Jetpack Compose", icon: "🎨", color: "from-pink-500 to-pink-600" },
        { name: "Coroutines", icon: "⚡", color: "from-teal-500 to-teal-600" },
        { name: "Dagger Hilt", icon: "💉", color: "from-violet-500 to-violet-600" },
        { name: "Firebase", icon: "🔥", color: "from-red-500 to-red-600" }
      ]
    },
    ios: {
      title: t.iosTitle,
      subtitle: t.iosSubtitle,
      technologies: [
        { name: "Swift", icon: "🦉", color: "from-orange-500 to-orange-600" },
        { name: "SwiftUI", icon: "🎨", color: "from-blue-500 to-blue-600" },
        { name: "UIKit", icon: "📱", color: "from-green-500 to-green-600" },
        { name: "Core Data", icon: "🗄️", color: "from-purple-500 to-purple-600" },
        { name: "Combine", icon: "🔄", color: "from-cyan-500 to-cyan-600" },
        { name: "Alamofire", icon: "🌐", color: "from-yellow-500 to-yellow-600" },
        { name: "RxSwift", icon: "⚡", color: "from-pink-500 to-pink-600" },
        { name: "MVVM", icon: "🏗️", color: "from-red-500 to-red-600" },
        { name: "VIPER", icon: "🎭", color: "from-indigo-500 to-indigo-600" },
        { name: "Firebase", icon: "🔥", color: "from-red-500 to-red-600" },
        { name: "TestFlight", icon: "✈️", color: "from-blue-500 to-blue-600" },
        { name: "App Store Connect", icon: "🏪", color: "from-green-500 to-green-600" }
      ]
    },
    crossPlatform: {
      title: t.crossPlatformTitle,
      subtitle: t.crossPlatformSubtitle,
      technologies: [
        { name: "React Native", icon: "⚛️", color: "from-blue-500 to-blue-600" },
        { name: "Flutter", icon: "🦋", color: "from-cyan-500 to-cyan-600" },
        { name: "Expo", icon: "🚀", color: "from-purple-500 to-purple-600" },
        { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", icon: "🟨", color: "from-yellow-500 to-yellow-600" },
        { name: "Dart", icon: "🎯", color: "from-cyan-500 to-cyan-600" },
        { name: "Redux", icon: "🔄", color: "from-purple-500 to-purple-600" },
        { name: "MobX", icon: "📦", color: "from-green-500 to-green-600" },
        { name: "Firebase", icon: "🔥", color: "from-red-500 to-red-600" },
        { name: "AWS Amplify", icon: "☁️", color: "from-orange-500 to-orange-600" },
        { name: "GraphQL", icon: "📊", color: "from-pink-500 to-pink-600" },
        { name: "WebSocket", icon: "🔌", color: "from-indigo-500 to-indigo-600" }
      ]
    }
  };

  return (
    <div className="relative">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-black overflow-hidden">
          <ShaderBackground>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                  >
                    <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                      {t.badge}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  >
                    {t.title} <br />
                    <span className="text-[#239D89]">{t.subtitle}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
                  >
                    {t.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  >
                    <Button size="lg" className="bg-[#239D89] hover:bg-[#239D89]/90 text-white px-8 py-4 text-lg">
                      {t.cta1}
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                      {t.cta2}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </ShaderBackground>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white dark:bg-[#0A1628]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#239D89]/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-[#239D89]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#163C2E] dark:text-white mb-2">{t.trust1}</h3>
                  <p className="text-neutral-600 dark:text-gray-400">Proven expertise in mobile development</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#239D89]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#239D89]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#163C2E] dark:text-white mb-2">{t.trust2}</h3>
                  <p className="text-neutral-600 dark:text-gray-400">Successful mobile applications delivered</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#239D89]/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-[#239D89]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#163C2E] dark:text-white mb-2">{t.trust3}</h3>
                  <p className="text-neutral-600 dark:text-gray-400">Happy clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 md:py-32 bg-neutral-50 dark:bg-[#0D1B2A]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                  {t.platformsTitle}
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4">
                  {t.platformsTitle}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {t.platformsDesc}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-[#0A1628] p-8 rounded-2xl border border-neutral-200 dark:border-[#1E3A5F] hover:border-[#239D89] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-16 h-16 bg-[#239D89]/10 rounded-full flex items-center justify-center mb-6">
                      {index === 0 && <Smartphone className="w-8 h-8 text-[#239D89]" />}
                      {index === 1 && <Smartphone className="w-8 h-8 text-[#239D89]" />}
                      {index === 2 && <Tablet className="w-8 h-8 text-[#239D89]" />}
                      {index === 3 && <Watch className="w-8 h-8 text-[#239D89]" />}
                    </div>
                    <h3 className="text-xl font-bold text-[#163C2E] dark:text-white mb-3">
                      {platform.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-[#0A1628]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                  Technology Stack
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4">
                  Our Technology Expertise
                </h2>
                <p className="text-lg text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto">
                  We use the latest technologies and frameworks to build high-performance mobile applications
                </p>
              </motion.div>

              <AnimatedTechTabs technologyStacks={technologyStacks} />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 md:py-32 bg-neutral-50 dark:bg-[#0D1B2A]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                  {t.caseStudiesBadge}
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4">
                  {t.caseStudiesTitle}
                </h2>
                <p className="text-lg text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {t.caseStudiesDesc}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-[#0A1628] rounded-2xl overflow-hidden border border-neutral-200 dark:border-[#1E3A5F] hover:border-[#239D89] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-[#239D89]" />
                        <span className="text-sm text-[#239D89] font-medium">{study.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#163C2E] dark:text-white mb-3">
                        {study.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-gray-400 mb-4">
                        {study.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-neutral-500" />
                          <span className="text-sm text-neutral-500">{study.users}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#239D89]" />
                          <span className="text-sm text-[#239D89] font-medium">{study.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32 bg-[#0f1724] relative overflow-hidden">
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
                Why Choose Us
              </div>
            </motion.div>

            <div className="space-y-24">
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

      </main>
    </div>
  );
}
