"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Zap, Globe, Smartphone, ArrowUpRight, ExternalLink, Play } from 'lucide-react';
import LeadFormClient from './LeadFormClient';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";
import { portfolioTranslations } from "@/i18n/page-translations";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPageClient() {
  const { language } = useLanguage();
  const t = portfolioTranslations[language];
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // Services content
  const servicesContent = {
    en: {
      badge: "Our Services",
      title: "What We Provide",
      subtitle: "Custom Software Development Services",
      description: "Complete software services to develop unique software solutions.",
      services: [
        {
          title: "Custom Software Development",
          description: "Development of personalized software solutions by applying innovative technologies.",
          link: "/services/software-product-development"
        },
        {
          title: "Mobile Development",
          description: "Native and cross-platform mobile applications for iOS and Android platforms.",
          link: "/services/mobile-development"
        },
        {
          title: "UX/UI Design",
          description: "User experience and interface design to create intuitive and attractive applications.",
          link: "/services/ux-ui-design"
        },
        {
          title: "SEO Services",
          description: "Search engine optimization to improve your online visibility and ranking.",
          link: "/services/seo"
        },
        {
          title: "Digital Marketing",
          description: "Complete digital marketing strategies to grow your business online.",
          link: "/services/digital-marketing"
        },
        {
          title: "Quality Assurance",
          description: "Comprehensive testing and quality assurance to ensure software reliability.",
          link: "/services/quality-assurance"
        }
      ]
    },
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
          description: "Applications mobiles natives et multiplateformes pour les plateformes iOS et Android.",
          link: "/services/mobile-development"
        },
        {
          title: "Design UX/UI",
          description: "Design d'expérience utilisateur et d'interface pour créer des applications intuitives et attractives.",
          link: "/services/ux-ui-design"
        },
        {
          title: "Services SEO",
          description: "Optimisation pour les moteurs de recherche pour améliorer votre visibilité et classement en ligne.",
          link: "/services/seo"
        },
        {
          title: "Marketing Digital",
          description: "Stratégies complètes de marketing digital pour développer votre entreprise en ligne.",
          link: "/services/digital-marketing"
        },
        {
          title: "Assurance Qualité",
          description: "Tests complets et assurance qualité pour garantir la fiabilité des logiciels.",
          link: "/services/quality-assurance"
        }
      ]
    },
    pl: {
      badge: "Nasze Usługi",
      title: "Co Oferujemy",
      subtitle: "Usługi Tworzenia Oprogramowania na Zamówienie",
      description: "Kompletne usługi programistyczne do tworzenia unikalnych rozwiązań programowych.",
      services: [
        {
          title: "Tworzenie Oprogramowania na Zamówienie",
          description: "Tworzenie spersonalizowanych rozwiązań programowych poprzez zastosowanie innowacyjnych technologii.",
          link: "/services/software-product-development"
        },
        {
          title: "Tworzenie Aplikacji Mobilnych",
          description: "Natywne i wieloplatformowe aplikacje mobilne dla platform iOS i Android.",
          link: "/services/mobile-development"
        },
        {
          title: "Design UX/UI",
          description: "Projektowanie doświadczeń użytkownika i interfejsów do tworzenia intuicyjnych i atrakcyjnych aplikacji.",
          link: "/services/ux-ui-design"
        },
        {
          title: "Usługi SEO",
          description: "Optymalizacja pod kątem wyszukiwarek internetowych, aby poprawić widoczność i ranking online.",
          link: "/services/seo"
        },
        {
          title: "Marketing Cyfrowy",
          description: "Kompletne strategie marketingu cyfrowego do rozwoju biznesu online.",
          link: "/services/digital-marketing"
        },
        {
          title: "Zapewnienie Jakości",
          description: "Kompleksowe testowanie i zapewnienie jakości, aby zagwarantować niezawodność oprogramowania.",
          link: "/services/quality-assurance"
        }
      ]
    }
  };

  // Advantages content
  const advantagesContent = {
    en: {
      badge: "Advantages",
      title: "Why Choose ITA Groupe?",
      description: "Our custom software development agency helps our clients transform their business ideas into tangible results by developing unique software solutions.",
      items: [
        {
          number: "01",
          title: "Expert Team",
          description: "Our team consists of experienced developers, designers, and project managers who are experts in their fields."
        },
        {
          number: "02", 
          title: "Custom Solutions",
          description: "We develop unique software solutions tailored to your specific business needs and requirements."
        },
        {
          number: "03",
          title: "Modern Technologies",
          description: "We use the latest technologies and frameworks to ensure your software is modern and scalable."
        },
        {
          number: "04",
          title: "Quality Assurance",
          description: "Comprehensive testing and quality control to ensure your software works flawlessly."
        },
        {
          number: "05",
          title: "Ongoing Support",
          description: "We provide continuous support and maintenance to keep your software up-to-date and secure."
        }
      ]
    },
    fr: {
      badge: "Avantages",
      title: "Pourquoi choisir ITA Groupe?",
      description: "Notre agence de développement de logiciels sur mesure aide nos clients à transformer leurs idées commerciales en résultats tangibles en développant des solutions logicielles uniques.",
      items: [
        {
          number: "01",
          title: "Équipe d'Experts",
          description: "Notre équipe se compose de développeurs, designers et chefs de projet expérimentés qui sont experts dans leurs domaines."
        },
        {
          number: "02",
          title: "Solutions Personnalisées", 
          description: "Nous développons des solutions logicielles uniques adaptées à vos besoins et exigences commerciales spécifiques."
        },
        {
          number: "03",
          title: "Technologies Modernes",
          description: "Nous utilisons les dernières technologies et frameworks pour garantir que votre logiciel est moderne et évolutif."
        },
        {
          number: "04",
          title: "Assurance Qualité",
          description: "Tests complets et contrôle qualité pour garantir que votre logiciel fonctionne parfaitement."
        },
        {
          number: "05",
          title: "Support Continu",
          description: "Nous fournissons un support et une maintenance continus pour maintenir votre logiciel à jour et sécurisé."
        }
      ]
    },
    pl: {
      badge: "Zalety",
      title: "Dlaczego Wybrać ITA Groupe?",
      description: "Nasza agencja tworzenia oprogramowania na zamówienie pomaga naszym klientom przekształcać ich pomysły biznesowe w namacalne rezultaty poprzez tworzenie unikalnych rozwiązań programowych.",
      items: [
        {
          number: "01",
          title: "Zespół Ekspertów",
          description: "Nasz zespół składa się z doświadczonych programistów, projektantów i kierowników projektów, którzy są ekspertami w swoich dziedzinach."
        },
        {
          number: "02",
          title: "Rozwiązania na Zamówienie",
          description: "Tworzymy unikalne rozwiązania programowe dostosowane do Twoich specyficznych potrzeb i wymagań biznesowych."
        },
        {
          number: "03",
          title: "Nowoczesne Technologie",
          description: "Używamy najnowszych technologii i frameworków, aby zapewnić, że Twoje oprogramowanie jest nowoczesne i skalowalne."
        },
        {
          number: "04",
          title: "Zapewnienie Jakości",
          description: "Kompleksowe testowanie i kontrola jakości, aby zapewnić, że Twoje oprogramowanie działa bezbłędnie."
        },
        {
          number: "05",
          title: "Ciągłe Wsparcie",
          description: "Zapewniamy ciągłe wsparcie i konserwację, aby utrzymać Twoje oprogramowanie na bieżąco i bezpieczne."
        }
      ]
    }
  };

  const content = servicesContent[language];
  const advantages = advantagesContent[language];

  // Auto-slide effect for mobile advantages carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        return (prev + 1) % advantages.items.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [advantages.items.length]);

  // Get showcase projects (first 9 projects for better showcase)
  const showcaseProjects = t.projects.slice(0, 9);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ">
      {/* Hero Section with Form */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 text-white pt-24">
        <motion.div 
          className="container mx-auto px-4 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div className="text-center lg:text-left" variants={itemVariants}>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                Get Your Modern Website
                <span className="block text-emerald-200">Built Today</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-emerald-100"
                variants={itemVariants}
              >
                Professional, fast, and beautiful websites that convert visitors into customers
              </motion.p>
            
            </motion.div>

            {/* Lead Capture Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Get Your Free Quote
                  </h2>
                  <p className="text-lg text-emerald-100">
                    Tell us about your project and we'll get back to you within 24 hours
                  </p>
                </div>
                <LeadFormClient />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

         {/* About Founder/Team Section */}
         <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/team.webp"
                    alt="Professional team member"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <Badge variant="secondary" className="mb-4 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                    Meet Our Team
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#163C2E] mb-6 leading-tight">
                    Passionate Experts
                    <span className="block text-[#239D89]">Behind Every Project</span>
                  </h2>
                </div>

                <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    <strong>Experience meets innovation</strong> in our dedicated team of developers, designers, and digital strategists. We don't just build websites – we craft digital experiences that drive real business results.
                  </p>
                  
                  <p>
                    With <strong>years of expertise</strong> in modern web technologies and a deep understanding of what makes businesses succeed online, we're here to transform your vision into a powerful digital presence.
                  </p>
                  
                  <p>
                    Every project is a partnership. We listen, we understand, and we deliver solutions that not only meet your needs but exceed your expectations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-[#239D89]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#239D89]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">100+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#239D89]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-6"
                >
                  <Button 
                    size="lg" 
                    className="bg-[#239D89] hover:bg-[#1e7a6b] text-white px-8 py-3"
                    onClick={() => router.push('/about')}
                  >
                    Learn More About Us
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Showcase Section */}
      <section className="py-20 bg-slate-50">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the quality and variety of websites we've built for our clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.jpg'}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white text-black hover:bg-white/90"
                        onClick={() => window.open(project.link || '', '_blank', 'noopener,noreferrer')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.slice(0, 3).map((tech: string, techIndex: number): React.ReactNode => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              onClick={() => window.open('/portfolio', '_blank')}
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* We Provide Services Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
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
              className="text-3xl md:text-5xl font-bold text-[#163C2E] mb-4"
            >
              {content.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-700 mb-2"
            >
              {content.subtitle}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-neutral-600"
            >
              {content.description}
            </motion.p>
          </div>
          
          {/* Services Grid */}
          <div className="services-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => router.push(service.link)}
                className="group relative p-8 bg-white border border-neutral-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#239D89]/50 cursor-pointer hover:bg-[#239D89] hover:text-white"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-sm text-[#239D89] group-hover:text-white font-mono transition-colors duration-300">
                    [0{index + 1}]
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#239D89] group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#163C2E] group-hover:text-white mb-4 tracking-wide transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
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

      {/* Why Choose ITA Groupe Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-slate-50">
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
              className="text-3xl md:text-5xl font-bold text-[#163C2E] mb-4"
            >
              {advantages.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 leading-relaxed"
            >
              {advantages.description}
            </motion.p>
          </div>
          
          {/* Desktop Grid */}
          <div className="advantages-grid hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white border border-neutral-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#239D89]/50 cursor-pointer"
              >
                <div className="text-base text-[#239D89] font-mono mb-6">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold text-[#163C2E] mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
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

            {/* Dots Indicator */}
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
              <span className="text-neutral-600 text-sm font-mono">
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

  
      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <motion.div 
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Badge variant="secondary" className="mb-4 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
              Client Success
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with our modern websites
            </p>
          </motion.div>
          
          {/* Static Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-4 text-lg">
                "Amazing work! Our website looks professional and loads super fast. Highly recommended!"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-slate-900">Sarah Johnson</p>
                <p className="text-sm text-slate-500">CEO, TechStart Inc.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-4 text-lg">
                "Professional team, great communication, and delivered exactly what we needed."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-slate-900">Mike Chen</p>
                <p className="text-sm text-slate-500">Business Owner, Retail Plus</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-4 text-lg">
                "Best investment we made for our business. Our online presence is now outstanding!"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-slate-900">Lisa Rodriguez</p>
                <p className="text-sm text-slate-500">Marketing Director, Growth Co.</p>
              </div>
            </motion.div>
          </div>

          {/* Video Testimonials */}
          <div className="mb-16">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Hear From Our Clients</h3>
              <p className="text-lg text-slate-600">Real testimonials from satisfied customers</p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <video
                    className="w-full h-auto"
                    controls
                    poster="/first-client.webp"
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.error('Video error:', e);
                      console.error('Video error details:', (e.target as HTMLVideoElement).error);
                    }}
                    onLoadStart={() => console.log('Video loading started')}
                    onCanPlay={() => console.log('Video can play')}
                    onLoadedData={() => console.log('Video data loaded')}
                    onLoadedMetadata={() => console.log('Video metadata loaded')}
                    onAbort={() => console.log('Video aborted')}
                  >
                    <source src="/video/first-client.mp4" type="video/mp4" />
                    <source src="/video/first-client.mp4" type="video/quicktime" />
                    <source src="/video/first-client.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-[#239D89]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <video
                    className="w-full h-auto"
                    controls
                    poster="/second.webp"
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.error('Video error:', e);
                      console.error('Video error details:', (e.target as HTMLVideoElement).error);
                    }}
                    onLoadStart={() => console.log('Video loading started')}
                    onCanPlay={() => console.log('Video can play')}
                    onLoadedData={() => console.log('Video data loaded')}
                    onLoadedMetadata={() => console.log('Video metadata loaded')}
                    onAbort={() => console.log('Video aborted')}
                  >
                    <source src="/video/second-client.mp4" type="video/mp4" />
                    <source src="/video/second-client.mp4" type="video/quicktime" />
                    <source src="/video/second-client.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-[#239D89]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <video
                    className="w-full h-auto"
                    controls
                    poster="/third.png"
                    preload="metadata"
                    playsInline
                    muted
                    loop
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.error('Video error:', e);
                      console.error('Video error details:', (e.target as HTMLVideoElement).error);
                    }}
                    onLoadStart={() => console.log('Video loading started')}
                    onCanPlay={() => console.log('Video can play')}
                    onLoadedData={() => console.log('Video data loaded')}
                    onLoadedMetadata={() => console.log('Video metadata loaded')}
                    onAbort={() => console.log('Video aborted')}
                  >
                    <source src="/video/third-client.mp4" type="video/mp4" />
                    <source src="/video/third-client.mp4" type="video/quicktime" />
                    <source src="/video/third-client.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="w-8 h-8 text-[#239D89]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              
            </div>
          </div>

          {/* Animated Moving Reviews */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-8"
              animate={{ x: [0, -100 * 6] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "David Wilson", company: "Finance Pro", text: "Exceptional service and results!" },
                { name: "Emma Thompson", company: "HealthCare Plus", text: "Our website traffic increased by 300%!" },
                { name: "James Brown", company: "E-commerce Solutions", text: "Fast delivery and amazing quality." },
                { name: "Maria Garcia", company: "Real Estate Group", text: "Professional team, exceeded expectations." },
                { name: "Alex Johnson", company: "Tech Innovations", text: "Best web development experience ever!" },
                { name: "Sophie Lee", company: "Creative Agency", text: "Outstanding work and great communication." },
                { name: "David Wilson", company: "Finance Pro", text: "Exceptional service and results!" },
                { name: "Emma Thompson", company: "HealthCare Plus", text: "Our website traffic increased by 300%!" },
                { name: "James Brown", company: "E-commerce Solutions", text: "Fast delivery and amazing quality." },
                { name: "Maria Garcia", company: "Real Estate Group", text: "Professional team, exceeded expectations." },
                { name: "Alex Johnson", company: "Tech Innovations", text: "Best web development experience ever!" },
                { name: "Sophie Lee", company: "Creative Agency", text: "Outstanding work and great communication." }
              ].map((review, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 italic mb-3 text-sm">
                      "{review.text}"
                    </p>
                    <div className="text-center">
                      <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                      <p className="text-xs text-slate-500">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-4xl font-bold text-[#239D89] mb-2">500+</div>
              <div className="text-slate-600">Happy Clients</div>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-4xl font-bold text-[#239D89] mb-2">1000+</div>
              <div className="text-slate-600">Projects Completed</div>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-4xl font-bold text-[#239D89] mb-2">5★</div>
              <div className="text-slate-600">Average Rating</div>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <div className="text-4xl font-bold text-[#239D89] mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>


      {/* Final CTA */}
      <section className="py-16 bg-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold text-slate-900 mb-4" variants={itemVariants}>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Join hundreds of satisfied clients who have already transformed their online presence with our modern websites.
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
            <div className="flex items-center gap-2 text-slate-600">
              <Users className="w-5 h-5 text-emerald-600" />
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>14-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Star className="w-5 h-5 text-emerald-600" />
              <span>5-Star Reviews</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
