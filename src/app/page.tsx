"use client";

// Lazy load all components for better performance
const Hero = lazy(() => import("@/components/Hero"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CTA = lazy(() => import("@/components/CTA"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const FAQ = lazy(() => import("@/components/FAQ"));
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Calendar, Clock } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-data"
import HiringBanner from "@/components/HiringBanner"
import { useRef, useState, useEffect, lazy, Suspense } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Lazy load heavy components for better performance
const ShaderBackground = lazy(() => import("@/components/ShaderBackground"));
const StickyScrollRevealDemo = lazy(() => import("@/components/StickyScrollRevealDemo").then(module => ({ default: module.StickyScrollRevealDemo })));
const WorldMap = lazy(() => import("@/components/ui/world-map"));

const faqContent = {
  fr: [
    {
      question: "Quels services propose iTA Groupe?",
      answer: "iTA Groupe offre une gamme complète de services digitaux: création de sites web professionnels, référencement SEO, gestion des réseaux sociaux, campagnes publicitaires Google Ads et Facebook Ads, et stratégies de marketing digital sur mesure."
    },
    {
      question: "Combien de temps faut-il pour créer un site web?",
      answer: "Le délai dépend de la complexité du projet. Un site vitrine simple (Niveau 1) prend 7-10 jours, un site multi-pages avec blog (Niveau 2) nécessite 14-18 jours, et une plateforme complexe (Niveau 3) demande 20-25 jours. Nous respectons toujours les délais convenus."
    },
    {
      question: "Est-ce que vous offrez un support après la mise en ligne?",
      answer: "Oui, absolument! Tous nos forfaits incluent un support technique et une maintenance. Niveau 1 inclut 3 mois, Niveau 2 inclut 6 mois, et Niveau 3 inclut 12 mois de support premium. Nous restons disponibles pour vous accompagner dans la durée."
    },
    {
      question: "Comment fonctionne le référencement SEO?",
      answer: "Notre service SEO inclut l'optimisation technique de votre site, la recherche de mots-clés stratégiques, l'optimisation du contenu, la création d'une fiche Google Business, et le suivi continu des performances. Les premiers résultats apparaissent généralement après 3-6 mois, avec une amélioration continue."
    },
    {
      question: "Puis-je modifier mon site web après sa mise en ligne?",
      answer: "Oui, tous nos sites incluent des révisions (selon le forfait choisi). Pour les modifications après la période initiale, nous proposons des forfaits de maintenance mensuels adaptés à vos besoins, ou des interventions ponctuelles selon vos demandes."
    },
    {
      question: "Travaillez-vous avec des entreprises de toutes tailles?",
      answer: "Absolument! Nous accompagnons les freelancers, startups, PME et grandes entreprises. Nos solutions sont modulables et s'adaptent à votre budget et vos objectifs, que vous débutiez en ligne ou cherchiez à optimiser votre présence digitale existante."
    },
    {
      question: "Proposez-vous des forfaits personnalisés?",
      answer: "Oui, si nos forfaits standards ne correspondent pas exactement à vos besoins, nous créons des solutions sur mesure. Contactez-nous pour discuter de votre projet spécifique et nous élaborerons une offre adaptée à vos objectifs et votre budget."
    },
    {
      question: "Comment mesurer le succès de ma stratégie digitale?",
      answer: "Nous mettons en place des outils d'analyse (Google Analytics, Search Console) pour suivre le trafic, les conversions, le positionnement SEO, et le ROI de vos campagnes. Vous recevez des rapports réguliers avec des métriques claires et des recommandations d'optimisation."
    }
  ],
  en: [
    {
      question: "What services does iTA Groupe offer?",
      answer: "iTA Groupe offers a complete range of digital services: professional website creation, SEO optimization, social media management, Google Ads and Facebook Ads campaigns, and customized digital marketing strategies."
    },
    {
      question: "How long does it take to create a website?",
      answer: "The timeline depends on project complexity. A simple showcase site (Level 1) takes 7-10 days, a multi-page site with blog (Level 2) requires 14-18 days, and a complex platform (Level 3) needs 20-25 days. We always meet agreed deadlines."
    },
    {
      question: "Do you offer support after launch?",
      answer: "Yes, absolutely! All our packages include technical support and maintenance. Level 1 includes 3 months, Level 2 includes 6 months, and Level 3 includes 12 months of premium support. We remain available to support you long-term."
    },
    {
      question: "How does SEO optimization work?",
      answer: "Our SEO service includes technical optimization of your site, strategic keyword research, content optimization, Google Business profile creation, and continuous performance monitoring. Initial results typically appear after 3-6 months, with ongoing improvement."
    },
    {
      question: "Can I modify my website after launch?",
      answer: "Yes, all our sites include revisions (depending on the chosen package). For modifications after the initial period, we offer monthly maintenance packages adapted to your needs, or one-time interventions as requested."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Absolutely! We support freelancers, startups, SMEs, and large enterprises. Our solutions are scalable and adapt to your budget and goals, whether you're starting online or looking to optimize your existing digital presence."
    },
    {
      question: "Do you offer customized packages?",
      answer: "Yes, if our standard packages don't exactly match your needs, we create tailored solutions. Contact us to discuss your specific project and we'll develop an offer adapted to your goals and budget."
    },
    {
      question: "How do we measure digital strategy success?",
      answer: "We implement analytics tools (Google Analytics, Search Console) to track traffic, conversions, SEO rankings, and campaign ROI. You receive regular reports with clear metrics and optimization recommendations."
    }
  ],
  pl: [
    {
      question: "Jakie usługi oferuje iTA Groupe?",
      answer: "iTA Groupe oferuje pełen zakres usług cyfrowych: tworzenie profesjonalnych stron internetowych, optymalizację SEO, zarządzanie mediami społecznościowymi, kampanie reklamowe Google Ads i Facebook Ads oraz strategie marketingu cyfrowego na zamówienie."
    },
    {
      question: "Ile czasu zajmuje stworzenie strony internetowej?",
      answer: "Czas zależy od złożoności projektu. Prosta strona wizytówkowa (Poziom 1) zajmuje 7-10 dni, strona wielostronicowa z blogiem (Poziom 2) wymaga 14-18 dni, a złożona platforma (Poziom 3) potrzebuje 20-25 dni. Zawsze dotrzymujemy ustalonych terminów."
    },
    {
      question: "Czy oferujecie wsparcie po uruchomieniu?",
      answer: "Tak, oczywiście! Wszystkie nasze pakiety obejmują wsparcie techniczne i konserwację. Poziom 1 obejmuje 3 miesiące, Poziom 2 obejmuje 6 miesięcy, a Poziom 3 obejmuje 12 miesięcy wsparcia premium. Pozostajemy dostępni, aby wspierać Cię długoterminowo."
    },
    {
      question: "Jak działa optymalizacja SEO?",
      answer: "Nasza usługa SEO obejmuje optymalizację techniczną Twojej witryny, badanie strategicznych słów kluczowych, optymalizację treści, tworzenie profilu Google Business oraz ciągłe monitorowanie wydajności. Pierwsze wyniki zazwyczaj pojawiają się po 3-6 miesiącach, z ciągłą poprawą."
    },
    {
      question: "Czy mogę modyfikować stronę po uruchomieniu?",
      answer: "Tak, wszystkie nasze strony obejmują poprawki (w zależności od wybranego pakietu). W przypadku modyfikacji po okresie początkowym oferujemy miesięczne pakiety konserwacyjne dostosowane do Twoich potrzeb lub jednorazowe interwencje według żądania."
    },
    {
      question: "Czy pracujecie z firmami każdej wielkości?",
      answer: "Oczywiście! Wspieramy freelancerów, startupy, małe i średnie przedsiębiorstwa oraz duże korporacje. Nasze rozwiązania są skalowalne i dostosowują się do Twojego budżetu i celów, niezależnie od tego, czy zaczynasz działalność online, czy chcesz zoptymalizować istniejącą obecność cyfrową."
    },
    {
      question: "Czy oferujecie spersonalizowane pakiety?",
      answer: "Tak, jeśli nasze standardowe pakiety nie odpowiadają dokładnie Twoim potrzebom, tworzymy rozwiązania na zamówienie. Skontaktuj się z nami, aby omówić swój konkretny projekt, a opracujemy ofertę dostosowaną do Twoich celów i budżetu."
    },
    {
      question: "Jak mierzymy sukces strategii cyfrowej?",
      answer: "Wdrażamy narzędzia analityczne (Google Analytics, Search Console) do śledzenia ruchu, konwersji, pozycji SEO i ROI kampanii. Otrzymujesz regularne raporty z jasnymi wskaźnikami i zaleceniami dotyczącymi optymalizacji."
    }
  ]
};

export default function Home() {
  const { language } = useLanguage();
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesContent = {
    fr: {
      badge: "Nos Services",
      title: "Ce que nous fournissons",
      subtitle: "Services de développement de logiciels sur mesure",
      description: "Services logiciels complets pour développer des solutions logicielles uniques.",
      services: [
        {
          title: "Développement de Logiciels sur Mesure",
          description: "Développement de solutions logicielles personnalisées en appliquant des technologies innovantes.",
          link: "/services/software-product-development"
        },
        {
          title: "Développement Mobile",
          description: "Fournir des services de développement Android, iOS et multiplateformes.",
          link: "/services/mobile-development"
        },
        {
          title: "Architecture Logicielle",
          description: "Construire des solutions logicielles personnalisées évolutives qui grandissent avec votre entreprise.",
          link: "/services/software-architecture"
        },
        {
          title: "Design UX/UI",
          description: "Fournir des services UX/UI pour rendre votre produit pratique et convivial.",
          link: "/services/ux-ui-design"
        },
        {
          title: "SEO & Référencement",
          description: "Optimisation SEO complète pour améliorer votre visibilité en ligne et votre classement.",
          link: "/services/seo"
        },
        {
          title: "Marketing Digital",
          description: "Stratégies de marketing digital complètes pour développer votre entreprise en ligne.",
          link: "/services/digital-marketing"
        },
        {
          title: "Assurance Qualité",
          description: "Tests complets et assurance qualité pour garantir la fiabilité et les performances de vos logiciels.",
          link: "/services/quality-assurance"
        },
        {
          title: "Analyse d'Affaires",
          description: "Analyse approfondie des besoins et stratégies pour optimiser vos processus d'affaires.",
          link: "/services/business-analysis"
        },
        {
          title: "Équipe Dédiée",
          description: "Des équipes dédiées de professionnels expérimentés pour vos projets à long terme.",
          link: "/services/dedicated-teams"
        }
      ]
    },
    en: {
      badge: "Our Services",
      title: "What we provide",
      subtitle: "Custom software development services",
      description: "Full-cycle custom software services to develop unique software solutions.",
      services: [
        {
          title: "Custom Software Development",
          description: "Developing customized software solutions by applying innovative technologies.",
          link: "/services/software-product-development"
        },
        {
          title: "Mobile Development",
          description: "Providing Android, iOS, and cross-platform development services.",
          link: "/services/mobile-development"
        },
        {
          title: "Software Architecture",
          description: "Building scalable customized software solutions that grow with your business.",
          link: "/services/software-architecture"
        },
        {
          title: "UX/UI Design",
          description: "Providing UX/UI services to make your product convenient and user-friendly.",
          link: "/services/ux-ui-design"
        },
        {
          title: "SEO & Optimization",
          description: "Complete SEO optimization to improve your online visibility and rankings.",
          link: "/services/seo"
        },
        {
          title: "Digital Marketing",
          description: "Comprehensive digital marketing strategies to grow your business online.",
          link: "/services/digital-marketing"
        },
        {
          title: "Quality Assurance",
          description: "Comprehensive testing and quality assurance to ensure software reliability and performance.",
          link: "/services/quality-assurance"
        },
        {
          title: "Business Analysis",
          description: "In-depth requirements analysis and strategies to optimize your business processes.",
          link: "/services/business-analysis"
        },
        {
          title: "Dedicated Team",
          description: "Dedicated teams of experienced professionals for your long-term projects.",
          link: "/services/dedicated-teams"
        }
      ]
    },
    pl: {
      badge: "Nasze Usługi",
      title: "Co oferujemy",
      subtitle: "Usługi niestandardowego rozwoju oprogramowania",
      description: "Kompleksowe usługi oprogramowania niestandardowego do tworzenia unikalnych rozwiązań.",
      services: [
        {
          title: "Niestandardowe Tworzenie Oprogramowania",
          description: "Tworzenie niestandardowych rozwiązań programowych przy użyciu innowacyjnych technologii.",
          link: "/services/software-product-development"
        },
        {
          title: "Rozwój Aplikacji Mobilnych",
          description: "Świadczenie usług tworzenia aplikacji Android, iOS i wieloplatformowych.",
          link: "/services/mobile-development"
        },
        {
          title: "Architektura Oprogramowania",
          description: "Budowanie skalowalnych niestandardowych rozwiązań programowych, które rosną z Twoją firmą.",
          link: "/services/software-architecture"
        },
        {
          title: "Projektowanie UX/UI",
          description: "Świadczenie usług UX/UI, aby Twój produkt był wygodny i przyjazny użytkownikowi.",
          link: "/services/ux-ui-design"
        },
        {
          title: "SEO i Optymalizacja",
          description: "Kompleksowa optymalizacja SEO w celu poprawy widoczności i pozycji w internecie.",
          link: "/services/seo"
        },
        {
          title: "Marketing Cyfrowy",
          description: "Kompleksowe strategie marketingu cyfrowego, aby rozwinąć Twój biznes online.",
          link: "/services/digital-marketing"
        },
        {
          title: "Zapewnienie Jakości",
          description: "Kompleksowe testowanie i zapewnienie jakości dla niezawodności i wydajności oprogramowania.",
          link: "/services/quality-assurance"
        },
        {
          title: "Analiza Biznesowa",
          description: "Dogłębna analiza wymagań i strategie optymalizacji procesów biznesowych.",
          link: "/services/business-analysis"
        },
        {
          title: "Dedykowany Zespół",
          description: "Dedykowane zespoły doświadczonych profesjonalistów do długoterminowych projektów.",
          link: "/services/dedicated-teams"
        }
      ]
    }
  };

  const advantagesContent = {
    fr: {
      badge: "Avantages",
      title: "Pourquoi choisir ITA Groupe?",
      description: "Notre agence de développement de logiciels sur mesure aide nos clients à transformer leurs idées commerciales en résultats tangibles en développant des solutions logicielles uniques.",
      items: [
        {
          number: "[01]",
          title: "Processus orientés résultats",
          description: "Nos processus de développement structurés garantissent la livraison de solutions dans les délais."
        },
        {
          number: "[02]",
          title: "Experts du secteur",
          description: "Nous fournissons des solutions spécifiques à l'industrie qui répondent à vos besoins commerciaux."
        },
        {
          number: "[03]",
          title: "Recommandé par nos clients",
          description: "Nous sommes des partenaires technologiques recommandés parmi nos clients."
        },
        {
          number: "[04]",
          title: "Transparent et prévisible",
          description: "Nos clients ont un accès complet à leurs projets et savent à quoi s'attendre de l'équipe."
        },
        {
          number: "[05]",
          title: "Flexible et évolutif",
          description: "Nous adaptons l'équipe et le processus de développement en fonction des besoins de l'entreprise."
        }
      ]
    },
    en: {
      badge: "Advantages",
      title: "Why choose ITA Groupe?",
      description: "Our custom software development agency helps our clients transform their business ideas into tangible results by developing unique software solutions.",
      items: [
        {
          number: "[01]",
          title: "Result-oriented processes",
          description: "Our structured development processes ensure on-time solutions delivery."
        },
        {
          number: "[02]",
          title: "Industries experts",
          description: "We deliver industry-specific solutions that meet your business needs."
        },
        {
          number: "[03]",
          title: "Recommended by clients",
          description: "We are recommended technology partners among our clients."
        },
        {
          number: "[04]",
          title: "Transparent and predictable",
          description: "Our clients have full access to their projects and know what to expect from the team."
        },
        {
          number: "[05]",
          title: "Flexible and scalable",
          description: "We scale the team and adapt the development process according to the business requirements."
        }
      ]
    },
    pl: {
      badge: "Zalety",
      title: "Dlaczego wybrać ITA Groupe?",
      description: "Nasza agencja rozwoju oprogramowania na zamówienie pomaga klientom przekształcić pomysły biznesowe w namacalne rezultaty poprzez tworzenie unikalnych rozwiązań programowych.",
      items: [
        {
          number: "[01]",
          title: "Procesy zorientowane na wyniki",
          description: "Nasze ustrukturyzowane procesy rozwojowe zapewniają terminową dostawę rozwiązań."
        },
        {
          number: "[02]",
          title: "Eksperci branżowi",
          description: "Dostarczamy rozwiązania specyficzne dla branży, które spełniają potrzeby Twojej firmy."
        },
        {
          number: "[03]",
          title: "Polecani przez klientów",
          description: "Jesteśmy rekomendowanymi partnerami technologicznymi wśród naszych klientów."
        },
        {
          number: "[04]",
          title: "Przejrzyści i przewidywalni",
          description: "Nasi klienci mają pełny dostęp do swoich projektów i wiedzą, czego mogą oczekiwać od zespołu."
        },
        {
          number: "[05]",
          title: "Elastyczni i skalowalny",
          description: "Skalujemy zespół i dostosowujemy proces rozwoju zgodnie z wymaganiami biznesowymi."
        }
      ]
    }
  };

  const blogPosts = getAllBlogPosts().slice(0, 2);

  const content = servicesContent[language];
  const advantages = advantagesContent[language];

  // Auto-slide effect for mobile advantages carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === advantages.items.length - 1) {
          return 0; // Loop back to first slide
        }
        return prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [advantages.items.length]);

  const workTogetherContent = {
    fr: {
      title: "Travaillons Ensemble",
      subtitle: "Vous avez une idée?",
      cta: "Construisons-la!"
    },
    en: {
      title: "Let's Work Together",
      subtitle: "Have an idea?",
      cta: "Let's build it!"
    },
    pl: {
      title: "Pracujmy Razem",
      subtitle: "Masz pomysł?",
      cta: "Zbudujmy to!"
    }
  };

  return (
    <div className="relative" key={language}>
      <main>
      <Suspense fallback={<div className="min-h-[65vh] bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <ShaderBackground>
          <Suspense fallback={<div className="min-h-[65vh] bg-black flex items-center justify-center"><div className="text-white">Loading Hero...</div></div>}>
            <Hero language={language} />
          </Suspense>
        </ShaderBackground>
      </Suspense>

      {/* Global Presence Section */}
        <section className="py-20 md:py-32 bg-neutral-50 dark:bg-[#0D1B2A] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#239D89] rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#163C2E] rounded-full blur-[150px]"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                    {language === 'fr' ? 'Présence Mondiale' : language === 'en' ? 'Global Presence' : 'Globalna Obecność'}
                  </Badge>
                </motion.div>
               
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-neutral-700 dark:text-gray-300 mb-4 font-medium"
                >
                  {language === 'fr' ? 'Une équipe distribuée sur plusieurs continents' : language === 'en' ? 'A team distributed across multiple continents' : 'Zespół rozmieszczony na wielu kontynentach'}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                  {language === 'fr' ? 'Avec des talents répartis à travers le monde, nous offrons un service 24/7 et des perspectives uniques pour chaque projet.' : language === 'en' ? 'With talent spread across the globe, we offer 24/7 service and unique perspectives for every project.' : 'Z talentami rozłożonymi na całym świecie, oferujemy obsługę 24/7 i unikalne perspektywy dla każdego projektu.'}
                </motion.p>
              </div>

              {/* World Map */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16"
              >
                <WorldMap
                  dots={[
                    {
                      start: { lat: 48.8566, lng: 2.3522 }, // Paris
                      end: { lat: 40.7128, lng: -74.0060 }, // New York
                    },
                    {
                      start: { lat: 48.8566, lng: 2.3522 }, // Paris
                      end: { lat: 51.5074, lng: -0.1278 }, // London
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                    },
                    {
                      start: { lat: 40.7128, lng: -74.0060 }, // New York
                      end: { lat: -23.5505, lng: -46.6333 }, // São Paulo
                    },
                    {
                      start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                      end: { lat: -33.8688, lng: 151.2093 }, // Sydney
                    },
                    {
                      start: { lat: 48.8566, lng: 2.3522 }, // Paris
                      end: { lat: 25.2048, lng: 55.2708 }, // Dubai
                    },
                  ]}
                  lineColor="#239D89"
                />
              </motion.div> */}

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: language === 'fr' ? '24/7 Disponibilité' : language === 'en' ? '24/7 Availability' : 'Dostępność 24/7',
                    description: language === 'fr' ? 'Service continu grâce à notre équipe distribuée dans différents fuseaux horaires.' : language === 'en' ? 'Continuous service thanks to our team distributed across different time zones.' : 'Ciągła obsługa dzięki naszemu zespołowi rozproszonemu w różnych strefach czasowych.'
                  },
                  {
                    title: language === 'fr' ? 'Perspectives Diverses' : language === 'en' ? 'Diverse Perspectives' : 'Różnorodne Perspektywy',
                    description: language === 'fr' ? 'Enrichissement de chaque projet par la diversité culturelle et professionnelle de notre équipe.' : language === 'en' ? 'Each project enriched by the cultural and professional diversity of our team.' : 'Każdy projekt wzbogacony o różnorodność kulturową i zawodową naszego zespołu.'
                  },
                  {
                    title: language === 'fr' ? 'Flexibilité Maximale' : language === 'en' ? 'Maximum Flexibility' : 'Maksymalna Elastyczność',
                    description: language === 'fr' ? 'Adaptation rapide à vos besoins sans contraintes géographiques ou horaires.' : language === 'en' ? 'Rapid adaptation to your needs without geographical or time constraints.' : 'Szybka adaptacja do Twoich potrzeb bez ograniczeń geograficznych czy czasowych.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group relative bg-white dark:bg-[#0A1628] p-8 rounded-2xl border border-neutral-200 dark:border-[#1E3A5F] hover:border-[#239D89] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#239D89]/5 to-[#163C2E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[#163C2E] dark:text-white mb-3 group-hover:text-[#239D89] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom decorative line */}
              
            </div>
          </div>
          <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
        </section>
         <Suspense fallback={<div className="py-20 bg-gray-100 animate-pulse"><div className="container mx-auto px-4"><div className="h-64 bg-gray-300 rounded-lg"></div></div></div>}>
           <StickyScrollRevealDemo/>
         </Suspense>
             {/* We Provide Services Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#0A1628] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                {content.badge}
              </Badge>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4"
            >
              {content.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-700 dark:text-gray-300 mb-2"
            >
              {content.subtitle}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-neutral-600 dark:text-gray-400"
            >
              {content.description}
            </motion.p>
          </div>
          
          {/* Grid Cards Container */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => {
              const hoverColors = ["#FF8D3E", "#F15556", "#53ACF1", "#1BC65C", "#AF6AF0", "#FF8D3E", "#F15556", "#53ACF1", "#1BC65C"];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => router.push(service.link)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hoverColors[index];
                    (e.currentTarget.querySelector('h3') as HTMLElement)!.style.color = '#FFFFFF';
                    (e.currentTarget.querySelector('p') as HTMLElement)!.style.color = '#FFFFFF';
                    (e.currentTarget.querySelector('.service-number') as HTMLElement)!.style.color = '#FFFFFF';
                    const icon = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                    if (icon) icon.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    (e.currentTarget.querySelector('h3') as HTMLElement)!.style.color = '';
                    (e.currentTarget.querySelector('p') as HTMLElement)!.style.color = '';
                    (e.currentTarget.querySelector('.service-number') as HTMLElement)!.style.color = '';
                    const icon = e.currentTarget.querySelector('.service-icon') as HTMLElement;
                    if (icon) icon.style.color = '';
                  }}
                  className="group relative p-8 bg-white dark:bg-[#0A1628] border border-neutral-200 dark:border-[#1E3A5F] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#239D89]/50 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="service-number text-sm text-[#239D89] font-mono transition-colors duration-300">
                      [0{index + 1}]
                    </div>
                    <ArrowUpRight className="service-icon w-5 h-5 text-[#239D89] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#163C2E] dark:text-white mb-4 tracking-wide transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
      </section>

      {/* Why Choose ITA Groupe Section - Desktop Overlapping Cards, Mobile Auto-Sliding */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-[#0A1628]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                {advantages.badge}
              </Badge>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4"
            >
              {advantages.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-gray-400 leading-relaxed"
            >
              {advantages.description}
            </motion.p>
          </div>
          
          {/* Desktop: Overlapping Cards */}
          <div className="hidden lg:block relative max-w-6xl mx-auto" style={{ minHeight: '600px' }}>
            {advantages.items.map((item, index) => {
              const hoverColors = ["#FF8D3E", "#F15556", "#53ACF1", "#1BC65C", "#AF6AF0"];
              const leftOffset = index * 15;
              const topOffset = index * 100;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.zIndex = '100';
                    e.currentTarget.style.backgroundColor = hoverColors[index];
                    const title = e.currentTarget.querySelector('.advantage-title') as HTMLElement;
                    const desc = e.currentTarget.querySelector('.advantage-desc') as HTMLElement;
                    const number = e.currentTarget.querySelector('.advantage-number') as HTMLElement;
                    if (title) title.style.color = '#FFFFFF';
                    if (desc) desc.style.color = '#FFFFFF';
                    if (number) number.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.zIndex = String(10 + index);
                    e.currentTarget.style.backgroundColor = '';
                    const title = e.currentTarget.querySelector('.advantage-title') as HTMLElement;
                    const desc = e.currentTarget.querySelector('.advantage-desc') as HTMLElement;
                    const number = e.currentTarget.querySelector('.advantage-number') as HTMLElement;
                    if (title) title.style.color = '';
                    if (desc) desc.style.color = '';
                    if (number) number.style.color = '';
                  }}
                  className="group absolute w-full md:w-[650px] p-12 bg-white dark:bg-[#0A1628] border border-neutral-200 dark:border-[#1E3A5F] rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#239D89]/50 cursor-pointer"
                  style={{
                    left: `${leftOffset}%`,
                    top: `${topOffset}px`,
                    zIndex: 10 + index
                  }}
                >
                  <div className="advantage-number text-base text-[#239D89] font-mono mb-6 transition-colors duration-300">
                    {item.number}
                  </div>
                  <h3 className="advantage-title text-3xl md:text-4xl font-bold text-[#163C2E] dark:text-white mb-6 tracking-wide transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="advantage-desc text-lg text-neutral-600 dark:text-gray-400 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile & Tablet: Auto-Sliding Cards */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-700 ease-out"
                animate={{ x: `-${currentSlide * 100}%` }}
              >
                {advantages.items.map((item, index) => {
                  const hoverColors = ["#FF8D3E", "#F15556", "#53ACF1", "#1BC65C", "#AF6AF0"];
                  
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-[350px] sm:h-[400px] rounded-xl border border-[#2a4466] overflow-hidden"
                        style={{ 
                          backgroundColor: hoverColors[index],
                          boxShadow: `0 20px 60px ${hoverColors[index]}50`
                        }}
                      >
                        <div className="absolute top-6 left-6">
                          <span className="text-xs font-mono tracking-wider text-white/80">
                            {item.number}
                          </span>
                        </div>
                        <div className="h-full p-6 sm:p-8 pt-14 sm:pt-16 flex flex-col justify-center">
                          <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight mb-4 text-white">
                            {item.title.split('\n').map((line, i) => (
                              <span key={i}>{line}<br /></span>
                            ))}
                          </h3>
                          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Dots Indicator Only */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {advantages.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#239D89] w-8' 
                      : 'bg-white/30 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4">
              <span className="text-neutral-600 dark:text-white/60 text-sm font-mono">
                {currentSlide + 1} / {advantages.items.length}
              </span>
            </div>
          </div>
        </div>
        <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
      </section>
    

      {/* Blog Section */}
      <section className="py-20 md:py-32 bg-neutral-50 dark:bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-6 text-[#FF8D3E] bg-[#FF8D3E]/10 uppercase tracking-wider text-sm">
                  {language === 'fr' ? 'BLOG' : language === 'en' ? 'BLOG' : 'BLOG'}
                </Badge>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4"
              >
                {language === 'fr' ? 'Perspectives technologiques pour vous' : language === 'en' ? 'Tech insights collected for you' : 'Spostrzeżenia techniczne zebrane dla Ciebie'}
              </motion.h2>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group cursor-pointer"
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="flex flex-col h-full">
                    {/* Blog Image */}
                    <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
                      <Image 
                        src={post.image} 
                        alt={post.title[language]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Category Badge */}
                    <Badge 
                      variant="secondary" 
                      className="mb-4 w-fit text-xs text-[#53ACF1] bg-[#53ACF1]/10 uppercase tracking-wider"
                    >
                      {post.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[#163C2E] dark:text-white mb-4 leading-tight group-hover:text-[#239D89] transition-colors duration-300">
                      {post.title[language]}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-base text-neutral-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                      {post.excerpt[language]}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-gray-500 pt-4 border-t border-neutral-200 dark:border-[#1E3A5F]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-mono">{new Date(post.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
      </section>
      

      {/* WE'RE HIRING Banner - MOVED HERE AFTER BLOG */}
      <HiringBanner />
  
       <Suspense fallback={<div className="py-20 bg-gray-100 animate-pulse"><div className="container mx-auto px-4"><div className="h-64 bg-gray-300 rounded-lg"></div></div></div>}>
         <Testimonials language={language} />
       </Suspense>
       <motion.div
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 viewport={{ once: true }}
                 className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                 animate={{ scaleX: [0, 1, 0] }}
                 transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
               />
       <Suspense fallback={<div className="py-20 bg-gray-100 animate-pulse"><div className="container mx-auto px-4"><div className="h-64 bg-gray-300 rounded-lg"></div></div></div>}>
         <FAQ faqs={faqContent[language]} language={language} />
       </Suspense>
       <motion.div
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 viewport={{ once: true }}
                 className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                 animate={{ scaleX: [0, 1, 0] }}
                 transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
               />
      {/* Let's Work Together Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#0A1628] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Content Box */}
              <div className="relative bg-neutral-50 dark:bg-[#0D1B2A] rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF8D3E] rounded-full blur-[120px]"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#239D89] rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10">
                  {/* Text Content */}
                  <div className="max-w-2xl mb-8">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1B263B] dark:text-white mb-6 leading-tight"
                    >
                      {workTogetherContent[language].title}
                    </motion.h2>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <p className="text-xl md:text-2xl text-neutral-700 dark:text-gray-300 font-medium">
                        {workTogetherContent[language].subtitle}
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-gray-400">
                          {workTogetherContent[language].cta}
                        </p>
                        
                        {/* CTA Button with Orange Circle - Inline */}
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          onClick={() => router.push('/contact')}
                          className="group relative flex-shrink-0"
                          aria-label="Get started"
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#239D89] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#239D89]/30">
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                          </div>
                          
                          {/* Pulse Animation */}
                          <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-[#239D89] rounded-full animate-ping opacity-20"></div>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Simplified Decorative Pattern */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-[#239D89]/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
      </section>
     
       
      
        {/* <CTA language={language} /> */}
      </main>
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
          <Footer language={language} />
        </Suspense>
    </div>
  );
}