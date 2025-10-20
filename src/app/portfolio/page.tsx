"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioTranslations } from "@/i18n/page-translations";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PortfolioPage() {
  const { language } = useLanguage();
  const t = portfolioTranslations[language];
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const filteredProjects = selectedCategory === 0 
    ? t.projects 
    : t.projects.filter(p => p.category === t.categories[selectedCategory]);

  const handleProjectClick = (project: any) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-[#0A1628]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#239D89] rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#163C2E] rounded-full blur-[150px]"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">
                  {t.hero.badge}
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-[#163C2E] dark:text-white"
              >
                {t.hero.title}{" "}
                <span className="gradient-text">{t.hero.titleHighlight}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-neutral-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 border-y border-neutral-200 dark:border-[#1E3A5F] bg-neutral-50 dark:bg-[#0D1B2A]">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {t.categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === index ? "default" : "outline"}
                  className="rounded-full transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedCategory(index)}
                  style={{
                    backgroundColor: selectedCategory === index ? '#239D89' : undefined,
                    borderColor: selectedCategory === index ? '#239D89' : undefined
                  }}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32 bg-white dark:bg-[#0A1628]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => {
                const hoverColors = ["#FF8D3E", "#F15556", "#53ACF1", "#1BC65C", "#AF6AF0", "#FF8D3E"];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white dark:bg-[#0A1628] rounded-2xl border border-neutral-200 dark:border-[#1E3A5F] overflow-hidden hover:border-[#239D89]/50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                    onMouseEnter={(e) => {
                      const gradient = e.currentTarget.querySelector('.project-gradient') as HTMLElement;
                      if (gradient) {
                        gradient.style.backgroundColor = hoverColors[index % hoverColors.length];
                        gradient.style.opacity = '0.15';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const gradient = e.currentTarget.querySelector('.project-gradient') as HTMLElement;
                      if (gradient) {
                        gradient.style.opacity = '0';
                      }
                    }}
                  >
                    {/* Project Image */}
                    <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-[#0D1B2A] dark:to-[#1E3A5F]">
                      {project.image ? (
                        <>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${
                          index % 6 === 0 ? 'from-[#239D89]/20 to-[#163C2E]/20' :
                          index % 6 === 1 ? 'from-[#163C2E]/20 to-[#239D89]/20' :
                          index % 6 === 2 ? 'from-[#239D89]/30 to-[#239D89]/10' :
                          index % 6 === 3 ? 'from-[#163C2E]/30 to-[#163C2E]/10' :
                          index % 6 === 4 ? 'from-[#239D89]/15 to-[#163C2E]/25' :
                          'from-[#163C2E]/15 to-[#239D89]/25'
                        }`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl font-bold text-[#239D89]/20 dark:text-[#239D89]/30">
                              {project.title.substring(0, 2)}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="project-gradient absolute inset-0 transition-opacity duration-500 opacity-0"></div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <Badge variant="secondary" className="text-xs text-[#53ACF1] bg-[#53ACF1]/10">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-[#163C2E] dark:text-white group-hover:text-[#239D89] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-[#0D1B2A] text-neutral-700 dark:text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Project Link */}
                      <Button variant="ghost" className="w-full group/btn hover:text-[#239D89]">
                        {project.link ? t.viewCaseStudy : t.viewCaseStudy}
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-xl text-neutral-600 dark:text-gray-400">
                  {language === 'fr' ? 'Aucun projet trouvé dans cette catégorie.' : 
                   language === 'en' ? 'No projects found in this category.' : 
                   'Nie znaleziono projektów w tej kategorii.'}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-neutral-50 dark:bg-[#0D1B2A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF8D3E] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#239D89] rounded-full blur-[120px]"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative bg-white dark:bg-[#0A1628] rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden border border-neutral-200 dark:border-[#1E3A5F]">
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF8D3E] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#239D89] rounded-full blur-[120px]"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="max-w-2xl mb-8">
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#163C2E] dark:text-white mb-6 leading-tight"
                      >
                        {t.cta.title}
                      </motion.h2>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center gap-4"
                      >
                        <p className="text-xl md:text-2xl text-neutral-700 dark:text-gray-300 font-medium">
                          {t.cta.subtitle}
                        </p>
                        
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
                          
                          <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-[#239D89] rounded-full animate-ping opacity-20"></div>
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-8 gap-2 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="bg-[#239D89] rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}