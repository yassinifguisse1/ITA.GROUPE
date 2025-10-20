"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const showcaseContent = {
  fr: {
    badge: "Notre Showcase",
    title: "Projets Sélectionnés",
    subtitle: "Solutions numériques qui font la différence",
    viewAll: "Voir Tous Les Projets",
    projects: [
      {
        title: "Amseel Cars",
        subtitle: "Location de voitures de luxe",
        location: "Morocco",
        category: "E-Commerce",
        description: "Plateforme de location de voitures premium avec système de réservation en temps réel et gestion de flotte.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-luxury-car-rental-website-screens-7d09115e-20251019134540.jpg",
        color: "#FF8D3E",
        link: "/portfolio/amseel-cars"
      },
      {
        title: "Soul Surf House",
        subtitle: "Hébergement & Surf",
        location: "Morocco",
        category: "Tourisme",
        description: "Site web moderne pour une auberge de surf au Maroc avec système de réservation et galerie photo immersive.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-surf-hostel-website-screenshot%2c-f2202e7e-20251019134548.jpg",
        color: "#53ACF1",
        link: "/portfolio/soul-surf"
      },
      {
        title: "Unity HVAC",
        subtitle: "Services CVC professionnels",
        location: "USA",
        category: "Services",
        description: "Site vitrine professionnel pour entreprise de chauffage et climatisation avec système de devis en ligne.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/professional-hvac-company-website-screen-edee806c-20251019134555.jpg",
        color: "#F15556",
        link: "/portfolio/unity-hvac"
      },
      {
        title: "DadOfSeo",
        subtitle: "Agence SEO & Marketing",
        location: "USA",
        category: "Marketing Digital",
        description: "Plateforme complète d'agence SEO avec blog, portfolio de clients et outils d'analyse de performance.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-seo-and-digital-marketing-agency--21eb7bbe-20251019134602.jpg",
        color: "#1BC65C",
        link: "/portfolio/dadofseo"
      }
    ]
  },
  en: {
    badge: "Our Showcase",
    title: "Selected Projects",
    subtitle: "Digital solutions that make a difference",
    viewAll: "View All Projects",
    projects: [
      {
        title: "Amseel Cars",
        subtitle: "Luxury car rental",
        location: "Morocco",
        category: "E-Commerce",
        description: "Premium car rental platform with real-time booking system and fleet management.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-luxury-car-rental-website-screens-7d09115e-20251019134540.jpg",
        color: "#FF8D3E",
        link: "/portfolio/amseel-cars"
      },
      {
        title: "Soul Surf House",
        subtitle: "Accommodation & Surf",
        location: "Morocco",
        category: "Tourism",
        description: "Modern website for a surf hostel in Morocco with booking system and immersive photo gallery.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-surf-hostel-website-screenshot%2c-f2202e7e-20251019134548.jpg",
        color: "#53ACF1",
        link: "/portfolio/soul-surf"
      },
      {
        title: "Unity HVAC",
        subtitle: "Professional HVAC services",
        location: "USA",
        category: "Services",
        description: "Professional showcase website for heating and air conditioning company with online quote system.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/professional-hvac-company-website-screen-edee806c-20251019134555.jpg",
        color: "#F15556",
        link: "/portfolio/unity-hvac"
      },
      {
        title: "DadOfSeo",
        subtitle: "SEO & Marketing Agency",
        location: "USA",
        category: "Digital Marketing",
        description: "Complete SEO agency platform with blog, client portfolio, and performance analysis tools.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-seo-and-digital-marketing-agency--21eb7bbe-20251019134602.jpg",
        color: "#1BC65C",
        link: "/portfolio/dadofseo"
      }
    ]
  },
  pl: {
    badge: "Nasze Realizacje",
    title: "Wybrane Projekty",
    subtitle: "Rozwiązania cyfrowe, które robią różnicę",
    viewAll: "Zobacz Wszystkie Projekty",
    projects: [
      {
        title: "Amseel Cars",
        subtitle: "Wynajem luksusowych samochodów",
        location: "Morocco",
        category: "E-Commerce",
        description: "Platforma wynajmu samochodów premium z systemem rezerwacji w czasie rzeczywistym i zarządzaniem flotą.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-luxury-car-rental-website-screens-7d09115e-20251019134540.jpg",
        color: "#FF8D3E",
        link: "/portfolio/amseel-cars"
      },
      {
        title: "Soul Surf House",
        subtitle: "Zakwaterowanie i Surfing",
        location: "Morocco",
        category: "Turystyka",
        description: "Nowoczesna strona dla hostelu surfingowego w Maroku z systemem rezerwacji i immersyjną galerią zdjęć.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-surf-hostel-website-screenshot%2c-f2202e7e-20251019134548.jpg",
        color: "#53ACF1",
        link: "/portfolio/soul-surf"
      },
      {
        title: "Unity HVAC",
        subtitle: "Profesjonalne usługi HVAC",
        location: "USA",
        category: "Usługi",
        description: "Profesjonalna strona wizytówkowa dla firmy klimatyzacyjnej i grzewczej z systemem wyceny online.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/professional-hvac-company-website-screen-edee806c-20251019134555.jpg",
        color: "#F15556",
        link: "/portfolio/unity-hvac"
      },
      {
        title: "DadOfSeo",
        subtitle: "Agencja SEO i Marketingu",
        location: "USA",
        category: "Marketing Cyfrowy",
        description: "Kompletna platforma agencji SEO z blogiem, portfolio klientów i narzędziami analitycznymi.",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee5c3257-c8b5-46cb-a5e9-d3c2a26d1cac/generated_images/modern-seo-and-digital-marketing-agency--21eb7bbe-20251019134602.jpg",
        color: "#1BC65C",
        link: "/portfolio/dadofseo"
      }
    ]
  }
};

export function StickyScrollRevealDemo() {
  const router = useRouter();
  const language = "en";
  const content = showcaseContent[language];

  return (
    <section className="py-20 md:py-32 bg-neutral-50 dark:bg-[#0D1B2A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#239D89] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#163C2E] rounded-full blur-[150px]"></div>
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
              className="text-lg text-neutral-600 dark:text-gray-400"
            >
              {content.subtitle}
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {content.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => router.push(project.link)}
                className="group relative bg-white dark:bg-[#0A1628] rounded-2xl overflow-hidden border border-neutral-200 dark:border-[#1E3A5F] hover:border-[#239D89] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Location Badge - Top Right */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-[#239D89]" />
                    <span className="text-xs font-semibold text-[#163C2E] dark:text-white">
                      {project.location}
                    </span>
                  </div>
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white dark:bg-[#0A1628] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#239D89]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="text-xs uppercase tracking-wider"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      color: project.color
                    }}
                  >
                    {project.category}
                  </Badge>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#163C2E] dark:text-white mb-1 group-hover:text-[#239D89] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-gray-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="pt-4">
                    <div 
                      className="h-1 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ backgroundColor: project.color }}
                    ></div>
                  </div>
                </div>

                {/* Colored Left Border */}
                <div 
                  className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-500"
                  style={{ backgroundColor: project.color }}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#239D89] hover:bg-[#1E8575] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#239D89]/30 group"
            >
              <span>
                {language === "en" ? "View All Projects" : language === "fr" ? "Voir Tous les Projets" : "Zobacz Wszystkie Projekty"}
              </span>
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}