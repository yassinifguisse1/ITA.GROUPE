"use client";

import { Metadata } from "next";
import { Code2, Rocket, Users, Zap, CheckCircle2, ArrowRight, Layout, Database, Cloud, Smartphone, Blocks, RefreshCw, ExternalLink, Calendar, MapPin, ChevronLeft, ChevronRight, Phone, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground"
import GlobalNavigation from "@/components/GlobalNavigation";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    badge: "End-to-End Software Development",
    title: "Software Product",
    titleHighlight: "Development",
    description: "Transform your ideas into successful software products. We provide end-to-end development services from concept to launch and beyond.",
    cta1: "Start Your Project",
    cta2: "Schedule a Call",
    trust1: "10+ Years Experience",
    trust2: "500+ Projects Delivered",
    trust3: "98% Client Satisfaction",
    successBadge: "— SUCCESS STORIES",
    successTitle: "Our Case Studies",
    successDesc: "Real projects, real results. Discover how we've helped businesses transform their digital presence.",
    servicesBadge: "— OUR SERVICES",
    servicesTitle: "Software Product Development\nServices We Provide",
    services: [
      {
        title: "Software Consulting",
        description: "Planning to develop software? Or looking for a way to improve the ready one? We are here to assist you with the software consulting services you need. Technical specialists at our software product development agency gather your business requirements, analyze them thoroughly and deliver you a detailed plan of software implementation."
      },
      {
        title: "Mobile Development",
        description: "We make your products always at hand for customers with our mobile development services. Our expertise covers both native and cross-platform development approaches to pick up the one that suits your project the most."
      },
      {
        title: "Cloud Development",
        description: "Software must work on your business. That's why we care about its infrastructure optimization. With our cloud development services, you can rest assured that your solution is highly reliable with close to zero downtime."
      },
      {
        title: "Web Development",
        description: "Our custom software product development services help you bring the best experience for users and generate high conversions in the web environment. We produce interactive interfaces and ensure functionality performance on a high level to make your web products sharp for competitors, and pleasant for customers."
      },
      {
        title: "Database Development",
        description: "We provide database development services to ensure that all the data in your customized software solution is organized and easy to access. Our engineering teams design and build databases that efficiently store and retrieve to make your product's work flawless."
      },
      {
        title: "SaaS Development",
        description: "We offer full-cycle SaaS product development services for a wide range of industries based on our vast domain expertise. Our development teams produce secure and fast-loading SaaS products that are scalable on demand to grow with your business."
      },
      {
        title: "API Development & Integrations",
        description: "We enhance software products by developing custom API solutions and providing integrations with third-party services. Our expertise covers integrations with payment gateways, enterprise solutions, communication platforms, mapping systems, as well as industry-specific solutions."
      },
      {
        title: "Software Modernization",
        description: "We breathe life into legacy software. Our software engineers specialize in migrating software solutions to modern platforms and empowering them with new software product development services based on your business needs. Our expertise covers wide range of industries, from education, finance & banking to real estate and many more."
      }
    ],
    techBadge: "— WE DELIVER",
    techTitle: "Technologies We Use For\nSoftware Product Development",
    technologies: [
      { name: "BIG DATA", description: "Transforming big data into valuable and business-tailored models." },
      { name: "CLOUD SERVICES", description: "Optimizing software infrastructure in high-performing cloud environments." },
      { name: "BLOCKCHAIN", description: "Developing secure and transparent solutions based on a digital ledger." },
      { name: "VIDEO STREAMING", description: "Implementing video streaming technologies to make your product engaging." },
      { name: "SHOPIFY ECOSYSTEM", description: "Delivering profitable e-commerce solutions based on the Shopify ecosystem." },
      { name: "GEOLOCATION SERVICES", description: "Providing advanced geographic and spatial data management." },
      { name: "THIRD-PARTY INTEGRATIONS", description: "Extending capabilities of your product by external software solutions." },
      { name: "INTERNET OF THINGS", description: "Embedding IoT devices of any complexity into your software." }
    ],
    processBadge: "— HOW WE WORK",
    processTitle: "Our Software Product Development Process",
    processSteps: [
      {
        number: "01",
        title: "PRODUCT DISCOVERY PHASE",
        description: "Ensuring your product will be developed efficiently and cost-effectively is the first strategic goal. We create a clear vision of your business idea with your team and transform it into the technical requirements for further development."
      },
      {
        number: "02",
        title: "BUILDING SOFTWARE ARCHITECTURE",
        description: "Axon is a software product development company producing software able to grow with your business and be slightly integrated to your current ecosystem. That's why our Solution Architects create scalable architecture solutions for your product."
      },
      {
        number: "03",
        title: "FRONT-END & BACK-END DEVELOPMENT",
        description: "We create interfaces by implementing visual and interactive elements that will engage and satisfy your customers on the front-end side. On the back end, we ensure that all functionality of your product is performed on a high level."
      },
      {
        number: "04",
        title: "MOBILE APP DEVELOPMENT",
        description: "Want to cover more users and make your product always at hand for your clients? We are ready to assist you with native and cross-platform app solutions tailored to your project."
      },
      {
        number: "05",
        title: "QUALITY ASSURANCE & TESTING",
        description: "We care about the quality of your software at the very beginning of the project to predict and eliminate mistakes. Our Quality Assurance specialists apply proven manual and automated testing techniques for proper functionality performance."
      }
    ],
    whyUsBadge: "— WHY US?",
    whyUsTitle: "Why Choose Us As Your Software\nProduct Development Partner",
    whyUsPoints: [
      {
        title: "RESULT-ORIENTED\nSOFTWARE\nDEVELOPMENT",
        titleDisplay: "RESULT-ORIENTED<br />SOFTWARE<br />DEVELOPMENT",
        description: "We create custom software product development solutions for more than ten years. All our processes are structured and organized that guarantee the on-time delivery of your project with a predictable budget."
      },
      {
        title: "INDUSTRY-FOCUSED\nEXPERTISE",
        titleDisplay: "INDUSTRY-FOCUSED<br />EXPERTISE",
        description: "We specialize in custom business software development for several industries. Before starting every project, we dive deep into the market by researching its features. That's why our expertise is solid, and you can be ensured you cooperate with the professionals from your field."
      },
      {
        title: "TRUSTED BY\nCLIENTS",
        titleDisplay: "TRUSTED BY<br />CLIENTS",
        description: "ITA GROUPE is recommended custom software product development company by our clients. The most powerful marketing for our services is their feedback."
      },
      {
        title: "FULL\nTRANSPARENCY",
        titleDisplay: "FULL<br />TRANSPARENCY",
        description: "We organize the work on the project transparently for you. As our client, you are always aware of any updates in the development process and know what to expect from the team at the next steps of our cooperation."
      },
      {
        title: "FLEXIBLE\nENGINEERING\nTEAM",
        titleDisplay: "FLEXIBLE<br />ENGINEERING<br />TEAM",
        description: "We understand that your business is changing and growing continuously. That's why we are flexible in cooperation with you and ready to scale the development team to meet your needs."
      }
    ],
    ctaTitle: "Ready to Build Your Product?",
    ctaDesc: "Let's discuss your project and turn your vision into reality",
    ctaButton: "Get Started Today",
    builtWith: "Built with Next.js",
    modernTech: "Modern web technology",
    location: "Location",
    timeline: "Timeline",
    role: "Role",
    highlights: "Key Highlights",
    techUsed: "Technologies Used",
    viewProject: "View Live Project",
    caseStudies: [
      {
        name: "DadofSEO",
        tagline: "AI-Driven SEO Content Platform",
        description: "An innovative AI-powered SEO content platform that helps businesses and bloggers create high-impact articles in minutes. Features AI-generated content optimization and AI image generation via Recraft.",
        location: "USA",
        timeline: "March 2025 - Present",
        role: "Full-Stack Development",
        highlights: [
          "AI-driven content generation",
          "Automated SEO optimization",
          "AI image generation with Recraft",
          "Stripe payment integration",
          "Full-stack Next.js implementation"
        ]
      },
      {
        name: "Eden Build",
        tagline: "Principal Construction Contractor",
        description: "A comprehensive website for a principal contractor with extensive experience across all areas of the construction industry, delivering projects ranging from £200K to £10M with a focus on on-time and on-budget completion.",
        location: "United Kingdom",
        timeline: "2024",
        role: "Web Development & Design",
        highlights: [
          "Professional corporate website",
          "Project showcase system",
          "Responsive design",
          "Performance optimization",
          "SEO implementation"
        ]
      },
      {
        name: "Orlion Studio",
        tagline: "Freelance Graphic Designer & Motion Design",
        description: "A vibrant e-commerce website for Orlion Studio, a freelance graphic designer based in Denmark specializing in illustration, branding, and motion design. The website features bold typography, playful animations using GSAP, and a modern lime-green aesthetic.",
        location: "Denmark",
        timeline: "2024",
        role: "Web Development & Animation",
        highlights: [
          "Advanced GSAP animations",
          "E-commerce functionality",
          "Bold, playful design system",
          "Multi-language support",
          "Portfolio showcase system"
        ]
      }
    ]
  },
  fr: {
    badge: "Développement Logiciel de Bout en Bout",
    title: "Développement de",
    titleHighlight: "Produit Logiciel",
    description: "Transformez vos idées en produits logiciels réussis. Nous fournissons des services de développement de bout en bout, du concept au lancement et au-delà.",
    cta1: "Démarrez Votre Projet",
    cta2: "Planifier un Appel",
    trust1: "10+ Ans d'Expérience",
    trust2: "500+ Projets Livrés",
    trust3: "98% de Satisfaction Client",
    successBadge: "— NOS SUCCESS STORIES",
    successTitle: "Nos Études de Cas",
    successDesc: "Projets réels, résultats réels. Découvrez comment nous avons aidé les entreprises à transformer leur présence numérique.",
    servicesBadge: "— NOS SERVICES",
    servicesTitle: "Services de Développement de\nProduits Logiciels Que Nous Fournissons",
    services: [
      {
        title: "Conseil Logiciel",
        description: "Vous prévoyez de développer un logiciel ? Ou vous cherchez un moyen d'améliorer celui qui existe déjà ? Nous sommes là pour vous aider avec les services de conseil en logiciels dont vous avez besoin. Les spécialistes techniques de notre agence de développement de produits logiciels recueillent vos besoins commerciaux, les analysent en profondeur et vous fournissent un plan détaillé de mise en œuvre du logiciel."
      },
      {
        title: "Développement Mobile",
        description: "Nous rendons vos produits toujours à portée de main pour les clients grâce à nos services de développement mobile. Notre expertise couvre à la fois les approches de développement natif et multiplateforme pour choisir celle qui convient le mieux à votre projet."
      },
      {
        title: "Développement Cloud",
        description: "Le logiciel doit fonctionner pour votre entreprise. C'est pourquoi nous nous soucions de l'optimisation de son infrastructure. Avec nos services de développement cloud, vous pouvez être assuré que votre solution est très fiable avec un temps d'arrêt proche de zéro."
      },
      {
        title: "Développement Web",
        description: "Nos services personnalisés de développement de produits logiciels vous aident à offrir la meilleure expérience aux utilisateurs et à générer des conversions élevées dans l'environnement Web. Nous produisons des interfaces interactives et assurons des performances fonctionnelles de haut niveau pour rendre vos produits Web compétitifs et agréables pour les clients."
      },
      {
        title: "Développement de Base de Données",
        description: "Nous fournissons des services de développement de bases de données pour garantir que toutes les données de votre solution logicielle personnalisée sont organisées et faciles d'accès. Nos équipes d'ingénieurs conçoivent et construisent des bases de données qui stockent et récupèrent efficacement pour que le travail de votre produit soit impeccable."
      },
      {
        title: "Développement SaaS",
        description: "Nous proposons des services de développement de produits SaaS en cycle complet pour un large éventail d'industries basés sur notre vaste expertise de domaine. Nos équipes de développement produisent des produits SaaS sécurisés et à chargement rapide qui sont évolutifs à la demande pour croître avec votre entreprise."
      },
      {
        title: "Développement d'API et Intégrations",
        description: "Nous améliorons les produits logiciels en développant des solutions API personnalisées et en fournissant des intégrations avec des services tiers. Notre expertise couvre les intégrations avec les passerelles de paiement, les solutions d'entreprise, les plateformes de communication, les systèmes de cartographie, ainsi que les solutions spécifiques à l'industrie."
      },
      {
        title: "Modernisation Logicielle",
        description: "Nous redonnons vie aux logiciels hérités. Nos ingénieurs logiciels se spécialisent dans la migration de solutions logicielles vers des plateformes modernes et les renforcent avec de nouveaux services de développement de produits logiciels basés sur vos besoins commerciaux. Notre expertise couvre un large éventail d'industries, de l'éducation, de la finance et de la banque à l'immobilier et bien d'autres."
      }
    ],
    techBadge: "— NOUS LIVRONS",
    techTitle: "Technologies Que Nous Utilisons Pour\nle Développement de Produits Logiciels",
    technologies: [
      { name: "BIG DATA", description: "Transformer le big data en modèles précieux et adaptés aux entreprises." },
      { name: "SERVICES CLOUD", description: "Optimiser l'infrastructure logicielle dans des environnements cloud performants." },
      { name: "BLOCKCHAIN", description: "Développer des solutions sécurisées et transparentes basées sur un registre numérique." },
      { name: "STREAMING VIDÉO", description: "Mettre en œuvre des technologies de streaming vidéo pour rendre votre produit engageant." },
      { name: "ÉCOSYSTÈME SHOPIFY", description: "Fournir des solutions de commerce électronique rentables basées sur l'écosystème Shopify." },
      { name: "SERVICES DE GÉOLOCALISATION", description: "Fournir une gestion avancée des données géographiques et spatiales." },
      { name: "INTÉGRATIONS TIERCES", description: "Étendre les capacités de votre produit par des solutions logicielles externes." },
      { name: "INTERNET DES OBJETS", description: "Intégrer des appareils IoT de toute complexité dans votre logiciel." }
    ],
    processBadge: "— COMMENT NOUS TRAVAILLONS",
    processTitle: "Notre Processus de Développement de Produits Logiciels",
    processSteps: [
      {
        number: "01",
        title: "PHASE DE DÉCOUVERTE PRODUIT",
        description: "Garantir que votre produit sera développé de manière efficace et rentable est le premier objectif stratégique. Nous créons une vision claire de votre idée commerciale avec votre équipe et la transformons en exigences techniques pour un développement ultérieur."
      },
      {
        number: "02",
        title: "CONSTRUCTION DE L'ARCHITECTURE LOGICIELLE",
        description: "Axon est une entreprise de développement de produits logiciels produisant des logiciels capables de croître avec votre entreprise et d'être légèrement intégrés à votre écosystème actuel. C'est pourquoi nos architectes de solutions créent des solutions d'architecture évolutives pour votre produit."
      },
      {
        number: "03",
        title: "DÉVELOPPEMENT FRONT-END ET BACK-END",
        description: "Nous créons des interfaces en implémentant des éléments visuels et interactifs qui engageront et satisferont vos clients du côté front-end. Du côté back-end, nous veillons à ce que toutes les fonctionnalités de votre produit soient exécutées à un niveau élevé."
      },
      {
        number: "04",
        title: "DÉVELOPPEMENT D'APPLICATION MOBILE",
        description: "Vous voulez couvrir plus d'utilisateurs et rendre votre produit toujours à portée de main pour vos clients ? Nous sommes prêts à vous aider avec des solutions d'applications natives et multiplateformes adaptées à votre projet."
      },
      {
        number: "05",
        title: "ASSURANCE QUALITÉ ET TESTS",
        description: "Nous nous soucions de la qualité de votre logiciel dès le début du projet pour prévoir et éliminer les erreurs. Nos spécialistes de l'assurance qualité appliquent des techniques de test manuelles et automatisées éprouvées pour des performances fonctionnelles appropriées."
      }
    ],
    whyUsBadge: "— POURQUOI NOUS?",
    whyUsTitle: "Pourquoi Nous Choisir Comme Partenaire\nde Développement de Produits Logiciels",
    whyUsPoints: [
      {
        title: "DÉVELOPPEMENT\nLOGICIEL\nAXÉ SUR LES RÉSULTATS",
        titleDisplay: "DÉVELOPPEMENT<br />LOGICIEL<br />AXÉ SUR LES RÉSULTATS",
        description: "Nous créons des solutions de développement de produits logiciels personnalisés depuis plus de dix ans. Tous nos processus sont structurés et organisés, ce qui garantit la livraison dans les délais de votre projet avec un budget prévisible."
      },
      {
        title: "EXPERTISE\nAXÉE SUR\nL'INDUSTRIE",
        titleDisplay: "EXPERTISE<br />AXÉE SUR<br />L'INDUSTRIE",
        description: "Nous nous spécialisons dans le développement de logiciels d'entreprise personnalisés pour plusieurs industries. Avant de commencer chaque projet, nous plongeons profondément dans le marché en recherchant ses caractéristiques. C'est pourquoi notre expertise est solide et vous pouvez être assuré de coopérer avec les professionnels de votre domaine."
      },
      {
        title: "RECOMMANDÉ\nPAR NOS\nCLIENTS",
        titleDisplay: "RECOMMANDÉ<br />PAR NOS<br />CLIENTS",
        description: "ITA GROUPE est recommandé comme entreprise de développement de produits logiciels personnalisés par nos clients. Le marketing le plus puissant pour nos services est leurs retours."
      },
      {
        title: "TRANSPARENCE\nTOTALE",
        titleDisplay: "TRANSPARENCE<br />TOTALE",
        description: "Nous organisons le travail sur le projet de manière transparente pour vous. En tant que notre client, vous êtes toujours au courant de toutes les mises à jour du processus de développement et vous savez à quoi vous attendre de l'équipe aux prochaines étapes de notre coopération."
      },
      {
        title: "ÉQUIPE\nD'INGÉNIERIE\nFLEXIBLE",
        titleDisplay: "ÉQUIPE<br />D'INGÉNIERIE<br />FLEXIBLE",
        description: "Nous comprenons que votre entreprise change et se développe continuellement. C'est pourquoi nous sommes flexibles dans la coopération avec vous et prêts à faire évoluer l'équipe de développement pour répondre à vos besoins."
      }
    ],
    ctaTitle: "Prêt à Créer Votre Produit?",
    ctaDesc: "Discutons de votre projet et transformons votre vision en réalité",
    ctaButton: "Commencez Aujourd'hui",
    builtWith: "Construit avec Next.js",
    modernTech: "Technologie web moderne",
    location: "Emplacement",
    timeline: "Calendrier",
    role: "Rôle",
    highlights: "Points Forts Clés",
    techUsed: "Technologies Utilisées",
    viewProject: "Voir le Projet en Direct",
    caseStudies: [
      {
        name: "DadofSEO",
        tagline: "Plateforme de Contenu SEO Pilotée par l'IA",
        description: "Une plateforme innovante de contenu SEO alimentée par l'IA qui aide les entreprises et les blogueurs à créer des articles à fort impact en quelques minutes. Comprend l'optimisation de contenu générée par l'IA et la génération d'images IA via Recraft.",
        location: "États-Unis",
        timeline: "Mars 2025 - Présent",
        role: "Développement Full-Stack",
        highlights: [
          "Génération de contenu pilotée par l'IA",
          "Optimisation SEO automatisée",
          "Génération d'images IA avec Recraft",
          "Intégration de paiement Stripe",
          "Implémentation Next.js full-stack"
        ]
      },
      {
        name: "Eden Build",
        tagline: "Entrepreneur Principal en Construction",
        description: "Un site web complet pour un entrepreneur principal avec une vaste expérience dans tous les domaines de l'industrie de la construction, livrant des projets allant de 200 000 £ à 10 millions de £ avec un accent sur la livraison à temps et dans le budget.",
        location: "Royaume-Uni",
        timeline: "2024",
        role: "Développement Web et Design",
        highlights: [
          "Site web d'entreprise professionnel",
          "Système de présentation de projets",
          "Design responsive",
          "Optimisation des performances",
          "Implémentation SEO"
        ]
      },
      {
        name: "Orlion Studio",
        tagline: "Designer Graphique Freelance et Motion Design",
        description: "Un site web de commerce électronique dynamique pour Orlion Studio, un designer graphique freelance basé au Danemark spécialisé dans l'illustration, le branding et le motion design. Le site présente une typographie audacieuse, des animations ludiques utilisant GSAP et une esthétique moderne vert citron.",
        location: "Danemark",
        timeline: "2024",
        role: "Développement Web et Animation",
        highlights: [
          "Animations GSAP avancées",
          "Fonctionnalité e-commerce",
          "Système de design audacieux et ludique",
          "Support multi-langues",
          "Système de présentation de portfolio"
        ]
      }
    ]
  },
  pl: {
    badge: "Kompleksowy Rozwój Oprogramowania",
    title: "Rozwój Produktu",
    titleHighlight: "Oprogramowania",
    description: "Przekształć swoje pomysły w udane produkty programowe. Zapewniamy kompleksowe usługi rozwojowe od koncepcji po uruchomienie i dalej.",
    cta1: "Rozpocznij Swój Projekt",
    cta2: "Zaplanuj Rozmowę",
    trust1: "10+ Lat Doświadczenia",
    trust2: "500+ Dostarczonych Projektów",
    trust3: "98% Zadowolenia Klientów",
    successBadge: "— NASZE HISTORIE SUKCESU",
    successTitle: "Nasze Studia Przypadków",
    successDesc: "Prawdziwe projekty, prawdziwe rezultaty. Odkryj, jak pomogliśmy firmom przekształcić ich obecność cyfrową.",
    servicesBadge: "— NASZE USŁUGI",
    servicesTitle: "Usługi Rozwoju Produktów\nOprogramowania, Które Zapewniamy",
    services: [
      {
        title: "Konsulting Oprogramowania",
        description: "Planujesz rozwijać oprogramowanie? Lub szukasz sposobu na ulepszenie gotowego? Jesteśmy tutaj, aby pomóc Ci w usługach doradczych dotyczących oprogramowania, których potrzebujesz. Specjaliści techniczni w naszej agencji rozwoju produktów programowych zbierają Twoje wymagania biznesowe, analizują je dokładnie i dostarczają szczegółowy plan wdrożenia oprogramowania."
      },
      {
        title: "Rozwój Mobilny",
        description: "Dzięki naszym usługom rozwoju mobilnego sprawiamy, że Twoje produkty są zawsze pod ręką dla klientów. Nasza wiedza obejmuje zarówno natywne, jak i wieloplatformowe podejścia rozwojowe, aby wybrać to, które najbardziej odpowiada Twojemu projektowi."
      },
      {
        title: "Rozwój Chmurowy",
        description: "Oprogramowanie musi działać na rzecz Twojego biznesu. Dlatego dbamy o optymalizację jego infrastruktury. Dzięki naszym usługom rozwoju w chmurze możesz być pewny, że Twoje rozwiązanie jest bardzo niezawodne z prawie zerowym czasem przestoju."
      },
      {
        title: "Rozwój Webowy",
        description: "Nasze niestandardowe usługi rozwoju produktów programowych pomagają przynieść najlepsze doświadczenie dla użytkowników i generować wysokie konwersje w środowisku internetowym. Tworzymy interaktywne interfejsy i zapewniamy wysoką wydajność funkcjonalności, aby Twoje produkty internetowe były ostre dla konkurencji i przyjemne dla klientów."
      },
      {
        title: "Rozwój Baz Danych",
        description: "Zapewniamy usługi rozwoju baz danych, aby zagwarantować, że wszystkie dane w Twoim dostosowanym rozwiązaniu programowym są zorganizowane i łatwo dostępne. Nasze zespoły inżynieryjne projektują i budują bazy danych, które efektywnie przechowują i pobierają, aby praca Twojego produktu była bezbłędna."
      },
      {
        title: "Rozwój SaaS",
        description: "Oferujemy pełnocyklowe usługi rozwoju produktów SaaS dla szerokiego zakresu branż w oparciu o naszą obszerną wiedzę domenową. Nasze zespoły programistyczne tworzą bezpieczne i szybko ładujące się produkty SaaS, które są skalowalne na żądanie, aby rozwijać się wraz z Twoim biznesem."
      },
      {
        title: "Rozwój API i Integracje",
        description: "Ulepszamy produkty programowe poprzez rozwijanie niestandardowych rozwiązań API i zapewnianie integracji z usługami stron trzecich. Nasza wiedza obejmuje integracje z bramkami płatniczymi, rozwiązaniami korporacyjnymi, platformami komunikacyjnymi, systemami mapowania, a także rozwiązaniami specyficznymi dla branży."
      },
      {
        title: "Modernizacja Oprogramowania",
        description: "Tchnąwmy życie w starsze oprogramowanie. Nasi inżynierowie oprogramowania specjalizują się w migrowaniu rozwiązań programowych na nowoczesne platformy i wzmacnianiu ich nowymi usługami rozwoju produktów programowych w oparciu o Twoje potrzeby biznesowe. Nasza wiedza obejmuje szeroki zakres branż, od edukacji, finansów i bankowości po nieruchomości i wiele innych."
      }
    ],
    techBadge: "— DOSTARCZAMY",
    techTitle: "Technologie, Których Używamy Do\nRozwoju Produktów Oprogramowania",
    technologies: [
      { name: "BIG DATA", description: "Przekształcanie big data w cenne i dostosowane do biznesu modele." },
      { name: "USŁUGI CHMUROWE", description: "Optymalizacja infrastruktury oprogramowania w wysoko wydajnych środowiskach chmurowych." },
      { name: "BLOCKCHAIN", description: "Rozwijanie bezpiecznych i przejrzystych rozwiązań opartych na cyfrowej księdze." },
      { name: "STREAMING WIDEO", description: "Wdrażanie technologii streamingu wideo, aby Twój produkt był angażujący." },
      { name: "EKOSYSTEM SHOPIFY", description: "Dostarczanie rentownych rozwiązań e-commerce w oparciu o ekosystem Shopify." },
      { name: "USŁUGI GEOLOKALIZACYJNE", description: "Zapewnianie zaawansowanego zarządzania danymi geograficznymi i przestrzennymi." },
      { name: "INTEGRACJE STRON TRZECICH", description: "Rozszerzanie możliwości Twojego produktu o zewnętrzne rozwiązania programowe." },
      { name: "INTERNET RZECZY", description: "Osadzanie urządzeń IoT dowolnej złożoności w Twoim oprogramowaniu." }
    ],
    processBadge: "— JAK PRACUJEMY",
    processTitle: "Nasz Proces Rozwoju Produktów Oprogramowania",
    processSteps: [
      {
        number: "01",
        title: "FAZA ODKRYWANIA PRODUKTU",
        description: "Zapewnienie, że Twój produkt zostanie opracowany wydajnie i opłacalnie, jest pierwszym celem strategicznym. Tworzymy jasną wizję Twojego pomysłu biznesowego z Twoim zespołem i przekształcamy ją w wymagania techniczne do dalszego rozwoju."
      },
      {
        number: "02",
        title: "BUDOWANIE ARCHITEKTURY OPROGRAMOWANIA",
        description: "Axon to firma zajmująca się rozwojem produktów programowych, produkująca oprogramowanie zdolne do rozwoju wraz z Twoim biznesem i lekko zintegrowane z Twoim obecnym ekosystemem. Dlatego nasi architekci rozwiązań tworzą skalowalne rozwiązania architektoniczne dla Twojego produktu."
      },
      {
        number: "03",
        title: "ROZWÓJ FRONT-END I BACK-END",
        description: "Tworzymy interfejsy poprzez implementację wizualnych i interaktywnych elementów, które zaangażują i zadowolą Twoich klientów po stronie front-end. Po stronie back-end zapewniamy, że wszystkie funkcjonalności Twojego produktu są wykonywane na wysokim poziomie."
      },
      {
        number: "04",
        title: "ROZWÓJ APLIKACJI MOBILNEJ",
        description: "Chcesz objąć więcej użytkowników i sprawić, by Twój produkt był zawsze pod ręką dla Twoich klientów? Jesteśmy gotowi pomóc Ci w natywnych i wieloplatformowych rozwiązaniach aplikacji dostosowanych do Twojego projektu."
      },
      {
        number: "05",
        title: "ZAPEWNIENIE JAKOŚCI I TESTOWANIE",
        description: "Dbamy o jakość Twojego oprogramowania od samego początku projektu, aby przewidzieć i wyeliminować błędy. Nasi specjaliści ds. zapewnienia jakości stosują sprawdzone ręczne i automatyczne techniki testowania dla właściwej wydajności funkcjonalnej."
      }
    ],
    whyUsBadge: "— DLACZEGO MY?",
    whyUsTitle: "Dlaczego Wybrać Nas Jako Partnera\nw Rozwoju Produktów Oprogramowania",
    whyUsPoints: [
      {
        title: "ROZWÓJ OPROGRAMOWANIA\nSKUPIONY NA WYNIKACH",
        titleDisplay: "ROZWÓJ<br />OPROGRAMOWANIA<br />SKUPIONY NA WYNIKACH",
        description: "Tworzymy niestandardowe rozwiązania rozwoju produktów programowych od ponad dziesięciu lat. Wszystkie nasze procesy są ustrukturyzowane i zorganizowane, co gwarantuje terminową dostawę Twojego projektu z przewidywalnym budżetem."
      },
      {
        title: "EKSPERTYZA\nSKUPIONA\nNA BRANŻY",
        titleDisplay: "EKSPERTYZA<br />SKUPIONA<br />NA BRANŻY",
        description: "Specjalizujemy się w niestandardowym rozwoju oprogramowania biznesowego dla kilku branż. Przed rozpoczęciem każdego projektu zagłębiamy się w rynek, badając jego cechy. Dlatego nasza wiedza jest solidna i możesz mieć pewność, że współpracujesz z profesjonalistami z Twojej dziedziny."
      },
      {
        title: "ZAUFANY\nPRZEZ\nKLIENTÓW",
        titleDisplay: "ZAUFANY<br />PRZEZ<br />KLIENTÓW",
        description: "ITA GROUPE jest polecaną firmą zajmującą się niestandardowym rozwojem produktów programowych przez naszych klientów. Najpotężniejszym marketingiem dla naszych usług są ich opinie."
      },
      {
        title: "PEŁNA\nPRZEJRZYSTOŚĆ",
        titleDisplay: "PEŁNA<br />PRZEJRZYSTOŚĆ",
        description: "Organizujemy pracę nad projektem w sposób przejrzysty dla Ciebie. Jako nasz klient zawsze jesteś świadomy wszelkich aktualizacji w procesie rozwoju i wiesz, czego oczekiwać od zespołu w kolejnych krokach naszej współpracy."
      },
      {
        title: "ELASTYCZNY\nZESPÓŁ\nINŻYNIERYJNY",
        titleDisplay: "ELASTYCZNY<br />ZESPÓŁ<br />INŻYNIERYJNY",
        description: "Rozumiemy, że Twój biznes ciągle się zmienia i rozwija. Dlatego jesteśmy elastyczni we współpracy z Tobą i gotowi skalować zespół programistyczny, aby sprostać Twoim potrzebom."
      }
    ],
    ctaTitle: "Gotowy Stworzyć Swój Produkt?",
    ctaDesc: "Porozmawiajmy o Twoim projekcie i przekształćmy Twoją wizję w rzeczywistość",
    ctaButton: "Rozpocznij Dzisiaj",
    builtWith: "Zbudowane z Next.js",
    modernTech: "Nowoczesna technologia webowa",
    location: "Lokalizacja",
    timeline: "Harmonogram",
    role: "Rola",
    highlights: "Kluczowe Aspekty",
    techUsed: "Użyte Technologie",
    viewProject: "Zobacz Projekt na Żywo",
    caseStudies: [
      {
        name: "DadofSEO",
        tagline: "Platforma Treści SEO Napędzana AI",
        description: "Innowacyjna platforma treści SEO napędzana sztuczną inteligencją, która pomaga firmom i blogerom tworzyć artykuły o dużym wpływie w kilka minut. Zawiera optymalizację treści generowaną przez AI i generowanie obrazów AI za pomocą Recraft.",
        location: "USA",
        timeline: "Marzec 2025 - Obecnie",
        role: "Rozwój Full-Stack",
        highlights: [
          "Generowanie treści napędzane AI",
          "Automatyczna optymalizacja SEO",
          "Generowanie obrazów AI z Recraft",
          "Integracja płatności Stripe",
          "Implementacja Next.js full-stack"
        ]
      },
      {
        name: "Eden Build",
        tagline: "Główny Wykonawca Budowlany",
        description: "Kompleksowa strona internetowa dla głównego wykonawcy z szerokim doświadczeniem we wszystkich obszarach branży budowlanej, realizującego projekty o wartości od 200 tys. £ do 10 mln £ z naciskiem na terminowe i budżetowe wykonanie.",
        location: "Wielka Brytania",
        timeline: "2024",
        role: "Rozwój Web i Design",
        highlights: [
          "Profesjonalna strona korporacyjna",
          "System prezentacji projektów",
          "Responsywny design",
          "Optymalizacja wydajności",
          "Implementacja SEO"
        ]
      },
      {
        name: "Orlion Studio",
        tagline: "Freelance Grafik i Motion Design",
        description: "Żywa strona e-commerce dla Orlion Studio, freelance grafika z siedzibą w Danii specjalizującego się w ilustracji, brandingu i motion design. Strona zawiera odważną typografię, zabawne animacje przy użyciu GSAP i nowoczesną estetykę w kolorze limonkowym.",
        location: "Dania",
        timeline: "2024",
        role: "Rozwój Web i Animacja",
        highlights: [
          "Zaawansowane animacje GSAP",
          "Funkcjonalność e-commerce",
          "Odważny, zabawny system designu",
          "Wsparcie wielojęzyczne",
          "System prezentacji portfolio"
        ]
      }
    ]
  }
};

export default function SoftwareProductDevelopmentPage() {
  const { language } = useLanguage();
  const t = content[language as keyof typeof content];
  
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [hoveredWhy, setHoveredWhy] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = t.services;

  const technologies = t.technologies.map((tech, index) => ({
    icon: [
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.894 4.97c1.39 1.39 2.342 3.165 2.726 5.126H16.94c-.224-1.827-.908-3.523-1.988-4.943l1.942-1.942zm-1.94 1.941c1.118 1.516 1.826 3.32 2.048 5.186h-3.684c-.13-1.427-.51-2.798-1.11-4.088l2.746-1.098zM12 2.25c1.42 0 2.762.335 3.966.924l-1.65 1.65c-.718-.224-1.483-.374-2.316-.374s-1.598.15-2.316.374l-1.65-1.65c1.204-.59 2.546-.924 3.966-.924zM5.166 4.97l1.942 1.942c-1.08 1.42-1.764 3.116-1.988 4.943H.44c.384-1.96 1.336-3.735 2.726-5.126zm-.904 7.125h4.68c.13 1.428.51 2.8 1.11 4.09l-2.746 1.098c-1.118-1.517-1.826-3.32-2.048-5.188h.004zm7.738 7.655c-1.42 0-2.762-.335-3.966-.924l1.65-1.65c.718.224 1.483.374 2.316.374s1.598-.15 2.316-.374l1.65 1.65c-1.204.59-2.546.924-3.966.924zm6.894-2.78c-1.39 1.39-3.165 2.342-5.126 2.726v-4.68c1.827-.224 3.523-.908 4.943-1.988l1.942 1.942h-.76zm-7.938-7.47c.224.224.448.448.672.672s.448.448.672.672c-.224.224-.448.448-.672.672s-.448.448-.672.672c-.224-.224-.448-.448-.672-.672s-.448-.448-.672-.672c.224-.224.448-.448.672-.672s.448-.448.672-.672z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.894 4.97c1.39 1.39 2.342 3.165 2.726 5.126H16.94c-.224-1.827-.908-3.523-1.988-4.943l1.942-1.942zm-1.94 1.941c1.118 1.516 1.826 3.32 2.048 5.186h-3.684c-.13-1.427-.51-2.798-1.11-4.088l2.746-1.098zM12 2.25c1.42 0 2.762.335 3.966.924l-1.65 1.65c-.718-.224-1.483-.374-2.316-.374s-1.598.15-2.316.374l-1.65-1.65c1.204-.59 2.546-.924 3.966-.924zM5.166 4.97l1.942 1.942c-1.08 1.42-1.764 3.116-1.988 4.943H.44c.384-1.96 1.336-3.735 2.726-5.126zm-.904 7.125h4.68c.13 1.428.51 2.8 1.11 4.09l-2.746 1.098c-1.118-1.517-1.826-3.32-2.048-5.188h.004zm7.738 7.655c-1.42 0-2.762-.335-3.966-.924l1.65-1.65c.718.224 1.483.374 2.316.374s1.598-.15 2.316-.374l1.65 1.65c-1.204.59-2.546.924-3.966.924zm6.894-2.78c-1.39 1.39-3.165 2.342-5.126 2.726v-4.68c1.827-.224 3.523-.908 4.943-1.988l1.942 1.942h-.76zm-7.938-7.47c.224.224.448.448.672.672s.448.448.672.672c-.224.224-.448.448-.672.672s-.448.448-.672.672c-.224-.224-.448-.448-.672-.672s-.448-.448-.672-.672c.224-.224.448-.448.672-.672s.448-.448.672-.672z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.894 4.97c1.39 1.39 2.342 3.165 2.726 5.126H16.94c-.224-1.827-.908-3.523-1.988-4.943l1.942-1.942zm-1.94 1.941c1.118 1.516 1.826 3.32 2.048 5.186h-3.684c-.13-1.427-.51-2.798-1.11-4.088l2.746-1.098zM12 2.25c1.42 0 2.762.335 3.966.924l-1.65 1.65c-.718-.224-1.483-.374-2.316-.374s-1.598.15-2.316.374l-1.65-1.65c1.204-.59 2.546-.924 3.966-.924zM5.166 4.97l1.942 1.942c-1.08 1.42-1.764 3.116-1.988 4.943H.44c.384-1.96 1.336-3.735 2.726-5.126zm-.904 7.125h4.68c.13 1.428.51 2.8 1.11 4.09l-2.746 1.098c-1.118-1.517-1.826-3.32-2.048-5.188h.004zm7.738 7.655c-1.42 0-2.762-.335-3.966-.924l1.65-1.65c.718.224 1.483.374 2.316.374s1.598-.15 2.316-.374l1.65 1.65c-1.204.59-2.546.924-3.966.924zm6.894-2.78c-1.39 1.39-3.165 2.342-5.126 2.726v-4.68c1.827-.224 3.523-.908 4.943-1.988l1.942 1.942h-.76zm-7.938-7.47c.224.224.448.448.672.672s.448.448.672.672c-.224.224-.448.448-.672.672s-.448.448-.672.672c-.224-.224-.448-.448-.672-.672s-.448-.448-.672-.672c.224-.224.448-.448.672-.672s.448-.448.672-.672z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.473 4.155l6.458 3.729v7.456l-6.458 3.729-6.458-3.729V7.884l6.458-3.729z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12.5 0C6.152 0 1 5.152 1 11.5S6.152 23 12.5 23 24 17.848 24 11.5 18.848 0 12.5 0zm0 2.5c4.962 0 9 4.038 9 9.6s-4.038 9.6-9 9.6-9-4.038-9-9.6 4.038-9.6 9-9.6z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zm-1.2 3.6v9.6l6-3.6-6-6z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M4.5 4.5v15h15v-15h-15zm1.5 1.5h12v12H6V6zm2 2v2h2V8H8zm3 0v2h2V8h-2zm3 0v2h2V8h-2zm-6 3v2h2v-2H8zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm-6 3v2h2v-2H8zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/>
      </svg>,
      <svg key={index} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zM8.4 7.2v9.6l7.2-4.8-7.2-4.8z"/>
      </svg>
    ][index],
    name: tech.name,
    description: tech.description
  }));

  const caseStudies = t.caseStudies.map((study, index) => ({
    ...study,
    image: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1760629960655.png",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/arche-1760629950413.jpg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-e-commerce-website-screenshot-sho-38f538b0-20251016160050.jpg?"][index],
    url: ["https://dadofseo.com/", "https://edenbuild.co.uk/", "https://www.orlionstudio.com/work"][index],
    technologies: study.highlights.slice(0, study.highlights.length >= 5 ? 6 : study.highlights.length),
    gradient: ["from-purple-500 to-blue-500", "from-green-500 to-teal-500", "from-lime-400 to-green-500"][index]
  }));

  const workProcess = t.processSteps;

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Product Strategy",
      description: "Market research, competitive analysis, and roadmap planning to ensure your product meets market needs."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Agile Development",
      description: "Iterative development process with regular sprints, demos, and continuous feedback integration."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-functional Teams",
      description: "Dedicated teams of developers, designers, QA engineers, and product managers working together."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Prototyping",
      description: "Quick MVP development to validate ideas and gather user feedback before full-scale development."
    }
  ];

  const process = [
    {
      phase: "Discovery",
      description: "Understanding your vision, market research, and defining product requirements."
    },
    {
      phase: "Design",
      description: "Creating wireframes, prototypes, and user experience flows aligned with your goals."
    },
    {
      phase: "Development",
      description: "Building your product with modern technologies and agile methodologies."
    },
    {
      phase: "Launch",
      description: "Deployment, monitoring, and continuous improvement based on user feedback."
    }
  ];

  const benefits = [
    "Faster time-to-market with agile sprints",
    "Reduced development costs through efficient processes",
    "Scalable architecture for future growth",
    "Ongoing support and maintenance",
    "User-centric design approach",
    "Quality assurance at every stage"
  ];

  const whyChooseUs = t.whyUsPoints.map((point, index) => ({
    title: point.title,
    titleDisplay: point.titleDisplay,
    description: point.description,
    hoverBg: ["#FF8D3E", "#F15556", "#53ACF1", "#1BC65C", "#AF6AF0"][index]
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyChooseUs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whyChooseUs.length) % whyChooseUs.length);
  };

  return (
    <div className="min-h-screen bg-white dark:from-neutral-950 dark:to-neutral-900">
      <GlobalNavigation />
      
      {/* Hero Section - IMPROVED */}
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
              {t.titleHighlight}
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

      {/* Success Stories - Case Studies Section */}
      <section className="py-24 px-6 bg-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              {t.successBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.successTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.successDesc}
            </p>
          </motion.div>

          <div className="space-y-24">
            {caseStudies.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Images Column */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Tech Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white dark:text-black">
                        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{t.builtWith}</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">{t.modernTech}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Column */}
                <motion.div 
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/10 text-[#239D89] text-sm font-semibold mb-4">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium mb-4">
                    {project.tagline}
                  </p>
                  
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-6">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>

                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Role Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold">
                      {project.role}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wide">
                      {t.highlights}
                    </h4>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#239D89] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wide">
                      {t.techUsed}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 }}
                          className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#239D89] font-semibold hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {t.viewProject}
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
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
              {t.servicesBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.servicesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                    {[<Layout key={0} className="w-8 h-8" />,
                      <Smartphone key={1} className="w-8 h-8" />,
                      <Cloud key={2} className="w-8 h-8" />,
                      <Code2 key={3} className="w-8 h-8" />,
                      <Database key={4} className="w-8 h-8" />,
                      <Blocks key={5} className="w-8 h-8" />,
                      <RefreshCw key={6} className="w-8 h-8" />,
                      <Zap key={7} className="w-8 h-8" />][index]}
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
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              {t.techBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.techTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
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
                    borderColor: hoveredTech === index ? "#1e90ff" : "",
                    boxShadow: hoveredTech === index ? "0 10px 40px rgba(30, 144, 255, 0.15)" : "",
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
                    <div className="text-[#1e90ff]">
                      {tech.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-center mb-4 text-[#1e3a5f] dark:text-white uppercase tracking-wide"
                    animate={{
                      color: hoveredTech === index ? "#1e90ff" : "",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-center text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    animate={{
                      y: hoveredTech === index ? -3 : 0,
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
                      width: hoveredTech === index ? "80%" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section - with Scroll Effect */}
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
              {t.processBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.processTitle}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {workProcess.map((step, index) => (
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
                      [{step.number}]
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
                {index < workProcess.length - 1 && (
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

      {/* Why Choose Us Section - OVERLAPPING CARDS DESIGN */}
      <section className="relative py-32 px-6 overflow-hidden bg-white dark:bg-neutral-950">
        {/* Background gradient */}
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
              {t.whyUsBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.whyUsTitle}
            </h2>
          </motion.div>

          {/* Desktop: Overlapping Cards Container */}
          <div className="hidden lg:block relative max-w-7xl mx-auto" style={{ minHeight: '850px' }}>
            {/* Card 5 - Background (Most Hidden) */}
            <motion.div
              initial={{ opacity: 0, y: 80, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              onHoverStart={() => setHoveredWhy(4)}
              onHoverEnd={() => setHoveredWhy(null)}
              className="absolute left-0 top-[400px] w-full md:w-[900px] h-[500px] rounded-sm border border-[#2a4466] overflow-hidden cursor-pointer group transition-all duration-500"
              style={{ 
                zIndex: hoveredWhy === 4 ? 100 : 1,
                backgroundColor: hoveredWhy === 4 ? whyChooseUs[4].hoverBg : '#0a1420',
                boxShadow: hoveredWhy === 4 ? `0 20px 60px ${whyChooseUs[4].hoverBg}50` : 'none'
              }}
            >
              <div className="absolute top-12 left-12">
                <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                  [05]
                </span>
              </div>
              <div className="absolute inset-0 p-16 flex flex-col justify-center">
                <h3 
                  className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8 transition-all duration-500 text-white"
                  dangerouslySetInnerHTML={{ __html: whyChooseUs[4].titleDisplay }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredWhy === 4 ? 1 : 0,
                    y: hoveredWhy === 4 ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-white leading-relaxed max-w-2xl"
                >
                  {whyChooseUs[4].description}
                </motion.p>
              </div>
            </motion.div>

            {/* Card 4 - Second Layer */}
            <motion.div
              initial={{ opacity: 0, y: 60, x: -15 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onHoverStart={() => setHoveredWhy(3)}
              onHoverEnd={() => setHoveredWhy(null)}
              className="absolute left-[80px] top-[300px] w-full md:w-[900px] h-[500px] rounded-sm border border-[#2a4466] overflow-hidden cursor-pointer group transition-all duration-500"
              style={{ 
                zIndex: hoveredWhy === 3 ? 100 : 2,
                backgroundColor: hoveredWhy === 3 ? whyChooseUs[3].hoverBg : '#0c1825',
                boxShadow: hoveredWhy === 3 ? `0 20px 60px ${whyChooseUs[3].hoverBg}50` : 'none'
              }}
            >
              <div className="absolute top-12 left-12">
                <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                  [04]
                </span>
              </div>
              <div className="absolute inset-0 p-16 flex flex-col justify-center">
                <h3 
                  className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8 transition-all duration-500 text-white"
                  dangerouslySetInnerHTML={{ __html: whyChooseUs[3].titleDisplay }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredWhy === 3 ? 1 : 0,
                    y: hoveredWhy === 3 ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-white leading-relaxed max-w-2xl"
                >
                  {whyChooseUs[3].description}
                </motion.p>
              </div>
            </motion.div>

            {/* Card 3 - Third Layer */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: -10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onHoverStart={() => setHoveredWhy(2)}
              onHoverEnd={() => setHoveredWhy(null)}
              className="absolute left-[160px] top-[200px] w-full md:w-[900px] h-[500px] rounded-sm border border-[#2a4466] overflow-hidden cursor-pointer group transition-all duration-500"
              style={{ 
                zIndex: hoveredWhy === 2 ? 100 : 3,
                backgroundColor: hoveredWhy === 2 ? whyChooseUs[2].hoverBg : '#0e1d2d',
                boxShadow: hoveredWhy === 2 ? `0 20px 60px ${whyChooseUs[2].hoverBg}50` : 'none'
              }}
            >
              <div className="absolute top-12 left-12">
                <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                  [03]
                </span>
              </div>
              <div className="absolute inset-0 p-16 flex flex-col justify-center">
                <h3 
                  className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8 transition-all duration-500 text-white"
                  dangerouslySetInnerHTML={{ __html: whyChooseUs[2].titleDisplay }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredWhy === 2 ? 1 : 0,
                    y: hoveredWhy === 2 ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-white leading-relaxed max-w-2xl"
                >
                  {whyChooseUs[2].description}
                </motion.p>
              </div>
            </motion.div>

            {/* Card 2 - Fourth Layer */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -5 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onHoverStart={() => setHoveredWhy(1)}
              onHoverEnd={() => setHoveredWhy(null)}
              className="absolute left-[240px] top-[100px] w-full md:w-[900px] h-[500px] rounded-sm border border-[#2a4466] overflow-hidden cursor-pointer group transition-all duration-500"
              style={{ 
                zIndex: hoveredWhy === 1 ? 100 : 4,
                backgroundColor: hoveredWhy === 1 ? whyChooseUs[1].hoverBg : '#0f2235',
                boxShadow: hoveredWhy === 1 ? `0 20px 60px ${whyChooseUs[1].hoverBg}50` : 'none'
              }}
            >
              <div className="absolute top-12 left-12">
                <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                  [02]
                </span>
              </div>
              <div className="absolute inset-0 p-16 flex flex-col justify-center">
                <h3 
                  className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8 transition-all duration-500 text-white"
                  dangerouslySetInnerHTML={{ __html: whyChooseUs[1].titleDisplay }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredWhy === 1 ? 1 : 0,
                    y: hoveredWhy === 1 ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-white leading-relaxed max-w-2xl"
                >
                  {whyChooseUs[1].description}
                </motion.p>
              </div>
            </motion.div>

            {/* Card 1 - Front (Most Visible) */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onHoverStart={() => setHoveredWhy(0)}
              onHoverEnd={() => setHoveredWhy(null)}
              className="absolute left-[320px] top-0 w-full md:w-[900px] h-[500px] rounded-sm border border-[#3a5577] overflow-hidden transition-all duration-500 cursor-pointer group"
              style={{ 
                zIndex: hoveredWhy === 0 ? 100 : 5,
                backgroundColor: hoveredWhy === 0 ? whyChooseUs[0].hoverBg : '#112940',
                boxShadow: hoveredWhy === 0 ? `0 20px 60px ${whyChooseUs[0].hoverBg}50` : 'none'
              }}
            >
              <div className="absolute top-12 left-12">
                <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                  [01]
                </span>
              </div>
              <div className="absolute inset-0 p-16 flex flex-col justify-center">
                <h3 
                  className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.05] tracking-tight transition-all duration-500 text-white"
                  dangerouslySetInnerHTML={{ __html: whyChooseUs[0].titleDisplay }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredWhy === 0 ? 1 : 0,
                    y: hoveredWhy === 0 ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-white leading-relaxed max-w-2xl"
                >
                  {whyChooseUs[0].description}
                </motion.p>
              </div>
              {/* Subtle accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          </div>

          {/* Mobile: Carousel Slider */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                animate={{ x: `-${currentSlide * 100}%` }}
              >
                {whyChooseUs.map((card, index) => (
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
                          {card.titleDisplay}
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

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#239D89] text-white flex items-center justify-center hover:bg-[#1e8473] transition-colors duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {whyChooseUs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#239D89] w-8' 
                        : 'bg-white/30'
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

            {/* Counter */}
            <div className="text-center mt-4">
              <span className="text-white/60 text-sm font-mono">
                {currentSlide + 1} / {whyChooseUs.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {t.ctaDesc}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#239D89] text-white rounded-xl hover:bg-[#1e8473] transition-all shadow-lg hover:shadow-xl"
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