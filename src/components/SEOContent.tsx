"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Target, Users, Zap, Globe } from "lucide-react";

interface SEOContentProps {
  language: "en" | "fr" | "pl";
}

export default function SEOContent({ language }: SEOContentProps) {
  const content = {
    en: {
      mainHeading: "Professional Web Development & Digital Marketing Agency",
      mainDescription: "iTA Groupe is a leading digital agency specializing in website creation, SEO optimization, social media management, Google Ads campaigns, and comprehensive digital marketing solutions. We help businesses grow their online presence and achieve measurable results through data-driven strategies and cutting-edge web technologies.",
      
      sections: [
        {
          icon: Globe,
          title: "Expert Website Development Services",
          description: "Our web development team creates custom websites, e-commerce platforms, and web applications using the latest technologies. From responsive web design to complex web portals, we deliver professional websites that convert visitors into customers. Our website development process includes UX/UI design, mobile optimization, performance optimization, and SEO-friendly architecture.",
          keywords: ["website development", "web design", "custom websites", "e-commerce", "responsive design", "web applications", "mobile-first design", "WordPress development", "React development", "Next.js websites"]
        },
        {
          icon: TrendingUp,
          title: "Advanced SEO Services & Search Engine Optimization",
          description: "Dominate search engine results with our proven SEO strategies. Our SEO experts provide technical SEO audits, keyword research, on-page optimization, link building, local SEO, and content optimization. We improve your website rankings on Google, increase organic traffic, and drive qualified leads through comprehensive search engine optimization campaigns.",
          keywords: ["SEO services", "search engine optimization", "Google ranking", "keyword research", "technical SEO", "local SEO", "SEO audit", "link building", "organic traffic", "SERP optimization"]
        },
        {
          icon: Users,
          title: "Social Media Marketing & Management",
          description: "Build your brand presence across all major social media platforms. Our social media experts manage Facebook, Instagram, LinkedIn, Twitter, and TikTok accounts. We create engaging content, run targeted social media campaigns, grow your followers, increase engagement rates, and generate leads through strategic social media marketing.",
          keywords: ["social media marketing", "Facebook marketing", "Instagram management", "LinkedIn strategy", "content creation", "social media campaigns", "community management", "influencer marketing", "social media advertising", "brand awareness"]
        },
        {
          icon: Target,
          title: "Google Ads & PPC Advertising Campaigns",
          description: "Maximize your ROI with expertly managed Google Ads and PPC campaigns. Our certified Google Ads specialists create high-converting search ads, display advertising, shopping campaigns, and remarketing strategies. We optimize your ad spend, improve quality scores, reduce cost-per-click, and drive targeted traffic that converts.",
          keywords: ["Google Ads", "PPC advertising", "pay-per-click", "search ads", "display advertising", "Google Shopping", "remarketing campaigns", "conversion optimization", "ad management", "SEM services"]
        },
        {
          icon: Zap,
          title: "Digital Marketing Strategy & Consulting",
          description: "Transform your business with comprehensive digital marketing strategies. We offer digital marketing consulting, online marketing plans, brand strategy, content marketing, email marketing automation, conversion rate optimization, and marketing analytics. Our data-driven approach ensures maximum return on investment for your marketing budget.",
          keywords: ["digital marketing", "marketing strategy", "online marketing", "content marketing", "email marketing", "marketing automation", "conversion optimization", "marketing analytics", "brand strategy", "digital transformation"]
        },
        {
          icon: CheckCircle2,
          title: "Complete Digital Solutions for Business Growth",
          description: "As a full-service digital agency, we provide end-to-end solutions including web hosting, domain registration, SSL certificates, website maintenance, security monitoring, performance optimization, and 24/7 technical support. Our integrated approach combines web development, digital marketing, and ongoing optimization to ensure your long-term success.",
          keywords: ["digital agency", "web hosting", "website maintenance", "technical support", "performance optimization", "security monitoring", "domain registration", "SSL certificates", "website management", "digital solutions"]
        }
      ],
      
      industries: {
        title: "Industries We Serve - Digital Marketing for Every Business",
        description: "We provide specialized digital marketing and web development services across multiple industries:",
        list: [
          "E-commerce & Online Retail - Build and grow your online store",
          "Healthcare & Medical Services - Patient acquisition and medical SEO",
          "Real Estate & Property Management - Lead generation and property listings",
          "Legal Services & Law Firms - Legal marketing and client acquisition",
          "Financial Services & Banking - Compliant financial marketing solutions",
          "Education & E-learning - Student recruitment and online course marketing",
          "Restaurants & Hospitality - Local SEO and online reservations",
          "Professional Services - B2B marketing and lead generation",
          "Manufacturing & Industrial - Industrial SEO and B2B websites",
          "Technology & SaaS - Software marketing and product launches"
        ]
      },
      
      technologies: {
        title: "Modern Web Technologies & Digital Marketing Tools",
        description: "We leverage the latest technologies and platforms to deliver superior results:",
        categories: [
          {
            name: "Web Development Technologies",
            items: ["React", "Next.js", "WordPress", "Shopify", "WooCommerce", "PHP", "Node.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
          },
          {
            name: "Digital Marketing Platforms",
            items: ["Google Analytics", "Google Search Console", "Google Ads", "Facebook Ads Manager", "SEMrush", "Ahrefs", "Moz", "Hootsuite", "Buffer", "HubSpot"]
          },
          {
            name: "SEO & Analytics Tools",
            items: ["Google Analytics 4", "Google Tag Manager", "Search Console", "Screaming Frog", "Yoast SEO", "Schema Markup", "PageSpeed Insights", "GTmetrix", "Hotjar", "Microsoft Clarity"]
          }
        ]
      },
      
      locations: {
        title: "Digital Marketing Services - Local & Global Reach",
        description: "Serving businesses worldwide with localized digital marketing expertise. Our team provides web development and digital marketing services in France, Europe, and internationally. Whether you need local SEO for your city or global digital marketing campaigns, we have the expertise to help your business succeed online."
      },
      
      cta: {
        title: "Start Your Digital Transformation Today",
        description: "Contact iTA Groupe for a free consultation and discover how our digital marketing services can grow your business. Get a custom proposal tailored to your goals, budget, and industry. Our team of experts is ready to help you succeed online.",
        features: [
          "Free digital marketing audit",
          "Custom strategy proposal",
          "Transparent pricing",
          "Proven track record",
          "Dedicated account manager",
          "Monthly performance reports"
        ]
      }
    },
    fr: {
      mainHeading: "Agence de Développement Web & Marketing Digital Professionnel",
      mainDescription: "iTA Groupe est une agence digitale leader spécialisée dans la création de sites web, l'optimisation SEO, la gestion des réseaux sociaux, les campagnes Google Ads et les solutions de marketing digital complètes. Nous aidons les entreprises à développer leur présence en ligne et à obtenir des résultats mesurables grâce à des stratégies basées sur les données et les technologies web de pointe.",
      
      sections: [
        {
          icon: Globe,
          title: "Services de Développement Web Expert",
          description: "Notre équipe de développement web crée des sites web sur mesure, des plateformes e-commerce et des applications web en utilisant les dernières technologies. Du design web responsive aux portails web complexes, nous livrons des sites web professionnels qui convertissent les visiteurs en clients. Notre processus de développement web inclut la conception UX/UI, l'optimisation mobile, l'optimisation des performances et une architecture SEO-friendly.",
          keywords: ["développement web", "création site web", "site internet sur mesure", "e-commerce", "design responsive", "application web", "design mobile-first", "développement WordPress", "développement React", "sites Next.js"]
        },
        {
          icon: TrendingUp,
          title: "Services SEO Avancés & Référencement Naturel",
          description: "Dominez les résultats des moteurs de recherche avec nos stratégies SEO éprouvées. Nos experts SEO fournissent des audits SEO techniques, recherche de mots-clés, optimisation on-page, création de liens, SEO local et optimisation de contenu. Nous améliorons votre positionnement sur Google, augmentons le trafic organique et générons des leads qualifiés grâce à des campagnes complètes d'optimisation pour les moteurs de recherche.",
          keywords: ["services SEO", "référencement naturel", "positionnement Google", "recherche mots-clés", "SEO technique", "SEO local", "audit SEO", "netlinking", "trafic organique", "optimisation SERP"]
        },
        {
          icon: Users,
          title: "Marketing & Gestion des Réseaux Sociaux",
          description: "Construisez votre présence de marque sur toutes les principales plateformes de réseaux sociaux. Nos experts en médias sociaux gèrent les comptes Facebook, Instagram, LinkedIn, Twitter et TikTok. Nous créons du contenu engageant, lançons des campagnes ciblées sur les réseaux sociaux, augmentons vos abonnés, améliorons les taux d'engagement et générons des leads grâce au marketing stratégique des réseaux sociaux.",
          keywords: ["marketing réseaux sociaux", "marketing Facebook", "gestion Instagram", "stratégie LinkedIn", "création contenu", "campagnes social media", "community management", "marketing d'influence", "publicité réseaux sociaux", "notoriété marque"]
        },
        {
          icon: Target,
          title: "Campagnes Google Ads & Publicité PPC",
          description: "Maximisez votre ROI avec des campagnes Google Ads et PPC gérées par des experts. Nos spécialistes Google Ads certifiés créent des annonces de recherche à forte conversion, de la publicité display, des campagnes shopping et des stratégies de remarketing. Nous optimisons vos dépenses publicitaires, améliorons les scores de qualité, réduisons le coût par clic et générons du trafic ciblé qui convertit.",
          keywords: ["Google Ads", "publicité PPC", "paiement par clic", "annonces recherche", "publicité display", "Google Shopping", "campagnes remarketing", "optimisation conversion", "gestion publicité", "services SEM"]
        },
        {
          icon: Zap,
          title: "Stratégie & Conseil en Marketing Digital",
          description: "Transformez votre entreprise avec des stratégies de marketing digital complètes. Nous offrons du conseil en marketing digital, des plans de marketing en ligne, stratégie de marque, marketing de contenu, automatisation email marketing, optimisation du taux de conversion et analyse marketing. Notre approche basée sur les données garantit un retour sur investissement maximal pour votre budget marketing.",
          keywords: ["marketing digital", "stratégie marketing", "marketing en ligne", "content marketing", "email marketing", "automatisation marketing", "optimisation conversion", "analyse marketing", "stratégie marque", "transformation digitale"]
        },
        {
          icon: CheckCircle2,
          title: "Solutions Digitales Complètes pour la Croissance d'Entreprise",
          description: "En tant qu'agence digitale full-service, nous fournissons des solutions de bout en bout incluant l'hébergement web, l'enregistrement de domaine, les certificats SSL, la maintenance de site web, la surveillance de sécurité, l'optimisation des performances et le support technique 24/7. Notre approche intégrée combine développement web, marketing digital et optimisation continue pour assurer votre succès à long terme.",
          keywords: ["agence digitale", "hébergement web", "maintenance site web", "support technique", "optimisation performance", "surveillance sécurité", "nom de domaine", "certificat SSL", "gestion site web", "solutions digitales"]
        }
      ],
      
      industries: {
        title: "Secteurs d'Activité - Marketing Digital pour Chaque Entreprise",
        description: "Nous fournissons des services spécialisés de marketing digital et développement web dans plusieurs secteurs :",
        list: [
          "E-commerce & Vente en Ligne - Construire et développer votre boutique en ligne",
          "Santé & Services Médicaux - Acquisition de patients et SEO médical",
          "Immobilier & Gestion de Patrimoine - Génération de leads et annonces immobilières",
          "Services Juridiques & Cabinets d'Avocats - Marketing juridique et acquisition de clients",
          "Services Financiers & Banque - Solutions marketing financier conformes",
          "Éducation & E-learning - Recrutement d'étudiants et marketing de cours en ligne",
          "Restaurants & Hôtellerie - SEO local et réservations en ligne",
          "Services Professionnels - Marketing B2B et génération de leads",
          "Industrie & Manufacturier - SEO industriel et sites web B2B",
          "Technologie & SaaS - Marketing logiciel et lancements de produits"
        ]
      },
      
      technologies: {
        title: "Technologies Web Modernes & Outils de Marketing Digital",
        description: "Nous exploitons les dernières technologies et plateformes pour offrir des résultats supérieurs :",
        categories: [
          {
            name: "Technologies de Développement Web",
            items: ["React", "Next.js", "WordPress", "Shopify", "WooCommerce", "PHP", "Node.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
          },
          {
            name: "Plateformes de Marketing Digital",
            items: ["Google Analytics", "Google Search Console", "Google Ads", "Facebook Ads Manager", "SEMrush", "Ahrefs", "Moz", "Hootsuite", "Buffer", "HubSpot"]
          },
          {
            name: "Outils SEO & Analytics",
            items: ["Google Analytics 4", "Google Tag Manager", "Search Console", "Screaming Frog", "Yoast SEO", "Schema Markup", "PageSpeed Insights", "GTmetrix", "Hotjar", "Microsoft Clarity"]
          }
        ]
      },
      
      locations: {
        title: "Services de Marketing Digital - Portée Locale & Mondiale",
        description: "Au service des entreprises du monde entier avec une expertise en marketing digital localisée. Notre équipe fournit des services de développement web et de marketing digital en France, en Europe et à l'international. Que vous ayez besoin de SEO local pour votre ville ou de campagnes de marketing digital mondial, nous avons l'expertise pour aider votre entreprise à réussir en ligne."
      },
      
      cta: {
        title: "Commencez Votre Transformation Digitale Aujourd'hui",
        description: "Contactez iTA Groupe pour une consultation gratuite et découvrez comment nos services de marketing digital peuvent développer votre entreprise. Obtenez une proposition personnalisée adaptée à vos objectifs, votre budget et votre secteur. Notre équipe d'experts est prête à vous aider à réussir en ligne.",
        features: [
          "Audit marketing digital gratuit",
          "Proposition de stratégie personnalisée",
          "Tarification transparente",
          "Bilan éprouvé",
          "Gestionnaire de compte dédié",
          "Rapports de performance mensuels"
        ]
      }
    },
    pl: {
      mainHeading: "Profesjonalna Agencja Tworzenia Stron i Marketingu Cyfrowego",
      mainDescription: "iTA Groupe to wiodąca agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, optymalizacji SEO, zarządzaniu mediami społecznościowymi, kampaniach Google Ads i kompleksowych rozwiązaniach marketingu cyfrowego. Pomagamy firmom rozwijać swoją obecność online i osiągać wymierne rezultaty poprzez strategie oparte na danych i najnowsze technologie webowe.",
      
      sections: [
        {
          icon: Globe,
          title: "Eksperckie Usługi Tworzenia Stron Internetowych",
          description: "Nasz zespół tworzenia stron internetowych tworzy niestandardowe witryny, platformy e-commerce i aplikacje webowe przy użyciu najnowszych technologii. Od responsywnego projektowania stron po złożone portale internetowe, dostarczamy profesjonalne strony internetowe, które konwertują odwiedzających na klientów. Nasz proces tworzenia stron obejmuje projektowanie UX/UI, optymalizację mobilną, optymalizację wydajności i architekturę przyjazną SEO.",
          keywords: ["tworzenie stron", "projektowanie stron", "strony internetowe na zamówienie", "e-commerce", "responsywny design", "aplikacje webowe", "projektowanie mobile-first", "WordPress", "React", "strony Next.js"]
        },
        {
          icon: TrendingUp,
          title: "Zaawansowane Usługi SEO i Optymalizacja dla Wyszukiwarek",
          description: "Zdominuj wyniki wyszukiwarek dzięki naszym sprawdzonym strategiom SEO. Nasi eksperci SEO zapewniają audyty techniczne SEO, badanie słów kluczowych, optymalizację on-page, budowanie linków, lokalne SEO i optymalizację treści. Poprawiamy rankingi Twojej witryny w Google, zwiększamy ruch organiczny i generujemy wykwalifikowanych leadów poprzez kompleksowe kampanie optymalizacji dla wyszukiwarek.",
          keywords: ["usługi SEO", "optymalizacja dla wyszukiwarek", "ranking Google", "badanie słów kluczowych", "techniczne SEO", "lokalne SEO", "audyt SEO", "budowanie linków", "ruch organiczny", "optymalizacja SERP"]
        },
        {
          icon: Users,
          title: "Marketing i Zarządzanie Mediami Społecznościowymi",
          description: "Zbuduj obecność swojej marki na wszystkich głównych platformach mediów społecznościowych. Nasi eksperci od mediów społecznościowych zarządzają kontami na Facebook, Instagram, LinkedIn, Twitter i TikTok. Tworzymy angażujące treści, prowadzimy ukierunkowane kampanie w mediach społecznościowych, zwiększamy liczbę obserwujących, poprawiamy wskaźniki zaangażowania i generujemy leady poprzez strategiczny marketing w mediach społecznościowych.",
          keywords: ["marketing mediów społecznościowych", "marketing Facebook", "zarządzanie Instagram", "strategia LinkedIn", "tworzenie treści", "kampanie w mediach społecznościowych", "zarządzanie społecznością", "marketing influencerów", "reklama w mediach społecznościowych", "świadomość marki"]
        },
        {
          icon: Target,
          title: "Kampanie Google Ads i Reklama PPC",
          description: "Maksymalizuj swój ROI dzięki profesjonalnie zarządzanym kampaniom Google Ads i PPC. Nasi certyfikowani specjaliści Google Ads tworzą wysokokonwertujące reklamy wyszukiwania, reklamę displayową, kampanie zakupowe i strategie remarketingowe. Optymalizujemy Twoje wydatki na reklamy, poprawiamy wyniki jakości, obniżamy koszt kliknięcia i generujemy ukierunkowany ruch, który konwertuje.",
          keywords: ["Google Ads", "reklama PPC", "płatność za kliknięcie", "reklamy wyszukiwania", "reklama displayowa", "Google Shopping", "kampanie remarketingowe", "optymalizacja konwersji", "zarządzanie reklamami", "usługi SEM"]
        },
        {
          icon: Zap,
          title: "Strategia Marketingu Cyfrowego i Doradztwo",
          description: "Przekształć swoją firmę dzięki kompleksowym strategiom marketingu cyfrowego. Oferujemy doradztwo w zakresie marketingu cyfrowego, plany marketingu online, strategię marki, content marketing, automatyzację email marketingu, optymalizację współczynnika konwersji i analitykę marketingową. Nasze podejście oparte na danych zapewnia maksymalny zwrot z inwestycji w budżet marketingowy.",
          keywords: ["marketing cyfrowy", "strategia marketingowa", "marketing online", "content marketing", "email marketing", "automatyzacja marketingu", "optymalizacja konwersji", "analityka marketingowa", "strategia marki", "transformacja cyfrowa"]
        },
        {
          icon: CheckCircle2,
          title: "Kompletne Rozwiązania Cyfrowe dla Rozwoju Biznesu",
          description: "Jako agencja cyfrowa oferująca pełen zakres usług, zapewniamy kompleksowe rozwiązania, w tym hosting, rejestrację domeny, certyfikaty SSL, utrzymanie strony internetowej, monitorowanie bezpieczeństwa, optymalizację wydajności i wsparcie techniczne 24/7. Nasze zintegrowane podejście łączy tworzenie stron internetowych, marketing cyfrowy i ciągłą optymalizację, aby zapewnić Twój długoterminowy sukces.",
          keywords: ["agencja cyfrowa", "hosting", "utrzymanie strony", "wsparcie techniczne", "optymalizacja wydajności", "monitorowanie bezpieczeństwa", "rejestracja domeny", "certyfikaty SSL", "zarządzanie stroną", "rozwiązania cyfrowe"]
        }
      ],
      
      industries: {
        title: "Branże, które Obsługujemy - Marketing Cyfrowy dla Każdej Firmy",
        description: "Zapewniamy specjalistyczne usługi marketingu cyfrowego i tworzenia stron internetowych w wielu branżach:",
        list: [
          "E-commerce i Sprzedaż Detaliczna Online - Budowanie i rozwój sklepu internetowego",
          "Opieka Zdrowotna i Usługi Medyczne - Pozyskiwanie pacjentów i medyczne SEO",
          "Nieruchomości i Zarządzanie Nieruchomościami - Generowanie leadów i oferty nieruchomości",
          "Usługi Prawne i Kancelarie Prawne - Marketing prawny i pozyskiwanie klientów",
          "Usługi Finansowe i Bankowość - Zgodne rozwiązania marketingowe finansowe",
          "Edukacja i E-learning - Rekrutacja studentów i marketing kursów online",
          "Restauracje i Hotelarstwo - Lokalne SEO i rezerwacje online",
          "Usługi Profesjonalne - Marketing B2B i generowanie leadów",
          "Produkcja i Przemysł - Przemysłowe SEO i strony B2B",
          "Technologia i SaaS - Marketing oprogramowania i premiery produktów"
        ]
      },
      
      technologies: {
        title: "Nowoczesne Technologie Webowe i Narzędzia Marketingu Cyfrowego",
        description: "Wykorzystujemy najnowsze technologie i platformy do dostarczania doskonałych rezultatów:",
        categories: [
          {
            name: "Technologie Tworzenia Stron",
            items: ["React", "Next.js", "WordPress", "Shopify", "WooCommerce", "PHP", "Node.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
          },
          {
            name: "Platformy Marketingu Cyfrowego",
            items: ["Google Analytics", "Google Search Console", "Google Ads", "Facebook Ads Manager", "SEMrush", "Ahrefs", "Moz", "Hootsuite", "Buffer", "HubSpot"]
          },
          {
            name: "Narzędzia SEO i Analityki",
            items: ["Google Analytics 4", "Google Tag Manager", "Search Console", "Screaming Frog", "Yoast SEO", "Schema Markup", "PageSpeed Insights", "GTmetrix", "Hotjar", "Microsoft Clarity"]
          }
        ]
      },
      
      locations: {
        title: "Usługi Marketingu Cyfrowego - Zasięg Lokalny i Globalny",
        description: "Obsługujemy firmy na całym świecie z lokalną wiedzą w zakresie marketingu cyfrowego. Nasz zespół świadczy usługi tworzenia stron internetowych i marketingu cyfrowego we Francji, Europie i międzynarodowo. Niezależnie od tego, czy potrzebujesz lokalnego SEO dla swojego miasta, czy globalnych kampanii marketingu cyfrowego, mamy wiedzę, aby pomóc Twojej firmie odnieść sukces online."
      },
      
      cta: {
        title: "Rozpocznij Swoją Cyfrową Transformację Dziś",
        description: "Skontaktuj się z iTA Groupe, aby uzyskać bezpłatną konsultację i odkryj, jak nasze usługi marketingu cyfrowego mogą rozwinąć Twoją firmę. Otrzymaj niestandardową propozycję dostosowaną do Twoich celów, budżetu i branży. Nasz zespół ekspertów jest gotowy, aby pomóc Ci odnieść sukces online.",
        features: [
          "Bezpłatny audyt marketingu cyfrowego",
          "Niestandardowa propozycja strategii",
          "Przejrzyste ceny",
          "Sprawdzony track record",
          "Dedykowany menedżer konta",
          "Miesięczne raporty wydajności"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main SEO Introduction */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t.mainHeading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            {t.mainDescription}
          </p>
        </div>

        {/* Service Sections with Keywords */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {t.sections.map((section, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold flex-1">{section.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Industries Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-bold mb-6 text-center gradient-text">
            {t.industries.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            {t.industries.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.industries.list.map((industry, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-bold mb-6 text-center gradient-text">
            {t.technologies.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            {t.technologies.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.technologies.categories.map((category, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-bold text-lg mb-4">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Locations Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text">
            {t.locations.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.locations.description}
          </p>
        </div>

        {/* Final CTA Section */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t.cta.title}</h3>
            <p className="text-lg text-muted-foreground">
              {t.cta.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {t.cta.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}