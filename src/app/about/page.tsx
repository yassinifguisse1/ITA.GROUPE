"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe2, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { aboutTranslations } from "@/i18n/services-translations";
import ShaderBackground from "@/components/ShaderBackground";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import WorldMap from "@/components/ui/world-map";

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState("0");

  // Extract number from value string (e.g., "10+" -> 10)
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);

  useEffect(() => {
    if (!hasAnimated && ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasAnimated(true);
            const controls = animate(count, numericValue, {
              duration: 2.5,
              ease: "easeOut",
            });

            return controls.stop;
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [hasAnimated, count, numericValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest.toString());
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#239D89] dark:text-white mb-3">
      {displayValue}{suffix}
    </div>
  );
}

export default function AboutPage() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  return (
    <>
      <main className="min-h-screen bg-white dark:from-neutral-950 dark:to-neutral-900">
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
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative">
              <div className="max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium rounded-full inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                    <Sparkles className="h-4 w-4" />
                    <span>{t.hero.badge}</span>
                  </Badge>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                >
                  {t.hero.title}<br />
                  <span className="text-[#239D89]">{t.hero.titleHighlight}</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl md:text-2xl text-white/80 max-w-3xl"
                >
                  {t.hero.subtitle}
                </motion.p>
              </div>
            </div>
          </section>
        </ShaderBackground>

        {/* Stats Section */}
        <section className="py-16 border-y border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0A1628]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {t.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.value.replace(/\d/g, "")} 
                  />
                  <div className="text-neutral-600 dark:text-gray-400 text-sm md:text-base uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
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
                  <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10 uppercase tracking-wider">{t.locations.badge}</Badge>
                </motion.div>
               
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-neutral-700 dark:text-gray-300 mb-4 font-medium"
                >
                  {t.locations.subtitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg text-neutral-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                  {t.locations.description}
                </motion.p>
              </div>

              {/* World Map */}
              <motion.div
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
              </motion.div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    title: language === 'fr' ? '24/7 Disponibilité' : language === 'en' ? '24/7 Availability' : 'Dostępność 24/7',
                    description: language === 'fr' ? 'Service continu grâce à notre équipe distribuée dans différents fuseaux horaires.' : language === 'en' ? 'Continuous service thanks to our team distributed across different time zones.' : 'Ciągła obsługa dzięki naszemu zespołowi rozproszonemu w różnych strefach czasowych.',
                    icon: '🌍'
                  },
                  {
                    title: language === 'fr' ? 'Perspectives Diverses' : language === 'en' ? 'Diverse Perspectives' : 'Różnorodne Perspektywy',
                    description: language === 'fr' ? 'Enrichissement de chaque projet par la diversité culturelle et professionnelle de notre équipe.' : language === 'en' ? 'Each project enriched by the cultural and professional diversity of our team.' : 'Każdy projekt wzbogacony o różnorodność kulturową i zawodową naszego zespołu.',
                    icon: '💡'
                  },
                  {
                    title: language === 'fr' ? 'Flexibilité Maximale' : language === 'en' ? 'Maximum Flexibility' : 'Maksymalna Elastyczność',
                    description: language === 'fr' ? 'Adaptation rapide à vos besoins sans contraintes géographiques ou horaires.' : language === 'en' ? 'Rapid adaptation to your needs without geographical or time constraints.' : 'Szybka adaptacja do Twoich potrzeb bez ograniczeń geograficznych czy czasowych.',
                    icon: '⚡'
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
                      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
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
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-32 px-6 bg-[#0f1724] overflow-hidden">
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
                {t.mission.badge}
              </div>
            </motion.div>

            <div className="space-y-24">
              {/* Main Description Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.21, 0.45, 0.27, 0.9]
                }}
                className="relative"
              >
                <motion.div 
                  className="text-center mb-16"
                  whileInView={{ 
                    scale: [0.95, 1],
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 
                  }}
                >
                  <motion.h3 
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.3,
                    }}
                  >
                    {language === 'fr' ? 'NOTRE VISION' : language === 'en' ? 'OUR VISION' : 'NASZA WIZJA'}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.4 
                    }}
                  >
                    {t.mission.description}
                  </motion.p>

                  <motion.div 
                    className="h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent mt-12 max-w-md mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Key Points Cards */}
              {t.mission.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: (index + 1) * 0.1,
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
                      delay: (index + 1) * 0.1 + 0.2 
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
                          delay: (index + 1) * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        [0{index + 1}]
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
                        
                        <motion.p 
                          className="text-lg text-neutral-300 leading-relaxed relative z-10"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.5,
                            delay: (index + 1) * 0.1 + 0.4 
                          }}
                        >
                          {point}
                        </motion.p>

                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#239D89] to-[#1e90ff]"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.8,
                            delay: (index + 1) * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {index < t.mission.points.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute left-16 top-full w-0.5 h-24 bg-gradient-to-b from-[#239D89] to-transparent"
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5,
                        delay: (index + 1) * 0.1 + 0.6 
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Overlapping Cards */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-neutral-50 dark:bg-[#0D1B2A]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-6 text-[#239D89] bg-[#239D89]/10">{t.values.badge}</Badge>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-4"
              >
                {t.values.title}
              </motion.h2>
            </div>
            
            {/* Overlapping Cards Container */}
            <div className="relative max-w-6xl mx-auto" style={{ minHeight: '700px' }}>
              {t.values.items.map((value, index) => {
                // Calculate position offsets for overlapping effect
                const leftOffset = index * 15; // Horizontal offset
                const topOffset = index * 100; // Vertical offset increased for bigger cards
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group absolute w-full md:w-[650px] p-12 bg-white dark:bg-[#0A1628] border border-neutral-200 dark:border-[#1E3A5F] rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#239D89]/50 cursor-pointer"
                    style={{
                      left: `${leftOffset}%`,
                      top: `${topOffset}px`,
                      zIndex: 10 + index
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.zIndex = '100';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.zIndex = String(10 + index);
                    }}
                  >
                    <div className="text-base text-[#239D89] font-mono mb-6">
                      {value.number}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#163C2E] dark:text-white mb-6 tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-lg text-neutral-600 dark:text-gray-400 leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-[#0A1628]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-[#163C2E] dark:text-white mb-6"
              >
                {t.cta.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-neutral-700 dark:text-gray-300 mb-8"
              >
                {t.cta.subtitle}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="rounded-full bg-[#239D89] hover:bg-[#1e8473] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="/contact">{t.cta.primary}</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-2 border-[#239D89] text-[#239D89] hover:bg-[#239D89]/10 px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/">{t.cta.secondary}</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}