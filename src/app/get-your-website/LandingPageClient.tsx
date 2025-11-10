"use client";

import { motion, useAnimationControls } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Users, Zap, ArrowUpRight, ExternalLink, Play, Rocket, Package, DollarSign, TrendingUp, Clock, Shield, Gift, Award } from 'lucide-react';
import LeadFormClient from './LeadFormClient';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioTranslations, getYourWebsiteTranslations } from "@/i18n/page-translations";
import Link from "next/link";


// Countdown Timer Component
function CountdownTimer({ targetDate, translations }: { targetDate: Date; translations: { days: string; hours: string; minutes: string; seconds: string } }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">{translations.days}</div>
      </div>
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">{translations.hours}</div>
      </div>
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">{translations.minutes}</div>
      </div>
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">{translations.seconds}</div>
      </div>
    </div>
  );
}

export default function LandingPageClient() {
  const { language } = useLanguage();
  const [targetDate] = useState(new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)); // 4 days from now
  const formSectionRef = useRef<HTMLDivElement>(null);
  const carouselControls = useAnimationControls();
  const currentXRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  
  // Get translations
  const t = getYourWebsiteTranslations[language];
  const portfolioT = portfolioTranslations[language];
  
  // Get portfolio projects - prioritize e-commerce but include all projects with images
  const allEcommerceProjects = portfolioT.projects
    .filter(project => project.category === "E-commerce" && project.image && project.link);
  
  // Get all projects with images and links (not just e-commerce)
  const allProjectsWithImages = portfolioT.projects
    .filter(project => project.image && project.link);
  
  // Combine: e-commerce first, then other projects, to show more variety
  const displayProjects = [
    ...allEcommerceProjects,
    ...allProjectsWithImages.filter(p => p.category !== "E-commerce")
  ];
  
  // Duplicate projects for seamless infinite scroll (duplicate multiple times for smoother loop)
  const duplicatedProjects = [...displayProjects, ...displayProjects, ...displayProjects];
  
  // Calculate the width of one set of projects
  const cardWidth = 380;
  const gap = 24;
  const oneSetWidth = displayProjects.length * (cardWidth + gap);
  
  // Animation function
  const startAnimation = useCallback(() => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
    
    const animate = () => {
      if (isPausedRef.current) return;
      
      currentXRef.current -= 1;
      if (currentXRef.current <= -oneSetWidth) {
        currentXRef.current = 0;
      }
      carouselControls.set({ x: currentXRef.current });
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animationIdRef.current = requestAnimationFrame(animate);
  }, [carouselControls, oneSetWidth]);
  
  // Start animation on mount
  useEffect(() => {
    if (displayProjects.length === 0) return;
    startAnimation();
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [displayProjects.length, startAnimation]);

  // Scroll to form section
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Countdown and Form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white pt-20 pb-12">
        <motion.div 
          className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Hero Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              {/* Logo/Brand */}
              {/* <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl font-bold">iTA GROUPE</span>
              </div> */}

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                {t.hero.title}<br className="sm:hidden block" />
                <span className="text-yellow-300"> {t.hero.titleHighlight} </span><br className="sm:hidden block" />
                {t.hero.subtitle} <br className="sm:hidden block" />
                <span className="text-3xl sm:text-4xl lg:text-5xl"> {t.hero.price}</span> {t.hero.priceLabel}
              </h1>

              {/* Discount Badge */}
              <div className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg inline-block font-bold text-lg">
                {t.hero.discountBadge}
              </div>

              {/* Countdown Timer */}
              <div className="py-4">
                <CountdownTimer targetDate={targetDate} translations={t.countdown || { days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }} />
              </div>

              {/* Video Section */}
              <div className="space-y-3">
                <div className="bg-emerald-600 px-4 py-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-emerald-700 transition-colors">
                  <Play className="w-6 h-6" />
                  <span className="font-semibold">{t.hero.videoTitle}</span>
                </div>
                <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden group">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
                    preload="auto"
                    playsInline
                    autoPlay
                    // muted
                    loop
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.error('Video error:', e);
                      console.error('Video error details:', (e.target as HTMLVideoElement).error);
                    }}
                  >
                    <source src="/video/adsvd.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* As Seen On */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm font-semibold">{t.hero.asSeenOn}</span>
                <div className="flex gap-3 opacity-80">
                  <span className="text-xs font-bold">FOX NEWS</span>
                  <span className="text-xs font-bold">CBS</span>
                  <span className="text-xs font-bold">NBC</span>
                  <span className="text-xs font-bold">ABC</span>
                </div>
              </div>

              {/* What You Get */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">{t.hero.orderTitle}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">{t.hero.items.website}</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">{t.hero.items.products}</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">{t.hero.items.suppliers}</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">{t.hero.items.descriptions}</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{t.hero.items.fulfillment}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{t.hero.items.support}</span>
                    </div>
                  </li>
                </ul>

                {/* Bonuses */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-bold text-lg mb-3">{t.hero.bonusesTitle}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="line-through opacity-70">{t.hero.items.bonus1}</span>
                        <span className="ml-2 font-bold">FREE</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="line-through opacity-70">{t.hero.items.bonus2}</span>
                        <span className="ml-2 font-bold">FREE</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="line-through opacity-70">{t.hero.items.bonus3}</span>
                        <span className="ml-2 font-bold">FREE</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Order Form */}
            <motion.div variants={itemVariants} className="lg:sticky lg:top-8" ref={formSectionRef}>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <motion.div 
                    className="bg-green-500 text-white rounded-lg px-4 py-2 inline-block mb-4 relative overflow-visible"
                    animate={{
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        "0 0 0px rgba(34, 197, 94, 0)",
                        "0 0 20px rgba(34, 197, 94, 0.8)",
                        "0 0 0px rgba(34, 197, 94, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.span 
                      className="text-3xl font-bold inline-block"
                      animate={{
                        scale: [1, 1.2, 1],
                        textShadow: [
                          "0 0 0px rgba(255, 255, 255, 0)",
                          "0 0 10px rgba(255, 255, 0, 1)",
                          "0 0 0px rgba(255, 255, 255, 0)",
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {t.hero.formPrice}
                    </motion.span>
                  </motion.div>
                  <p className="text-slate-600 text-sm mb-2">{t.hero.formDiscount}</p>
                  
                  {/* Availability */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2">{t.hero.availability}</p>
                   
                  </div>
                </div>
                <LeadFormClient />
                
                {/* Guarantee */}
              
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t.howItWorks.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.howItWorks.steps.map((step, index) => {
              const icons = [Rocket, Package, DollarSign, TrendingUp];
              const StepIcon = icons[index];
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <StepIcon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
              onClick={scrollToForm}
            >
              {t.howItWorks.cta}
              <Gift className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-slate-600 mt-2">{t.howItWorks.ctaSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Examples of Stores Section */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t.examples.title}</h2>
          </motion.div>

          {/* Infinite Scrolling Carousel */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
              startAnimation();
            }}
          >
            <motion.div
              className="flex gap-6"
              animate={carouselControls}
              style={{
                width: `${duplicatedProjects.length * (cardWidth + gap)}px`,
              }}
            >
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer h-full p-0">
                    <Link 
                      href={project.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="aspect-video bg-slate-200 relative overflow-hidden">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="380px"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                            <div className="text-center">
                              <div className="w-16 h-16 border-2 border-slate-300 rounded-lg mx-auto mb-2"></div>
                              <p className="text-sm">{project.title}</p>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2">{project.description}</p>
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-lg text-slate-600">{t.testimonials.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.items.map((testimonial, index) => {
              const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                        {initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                          {t.verified || "Verified"}
                        </Badge>
                      </div>
                    </div>
                    <h5 className="font-bold text-lg mb-2 text-slate-900">{testimonial.title}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">{testimonial.review}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {t.faq.title}
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b bg-slate-50 hover:bg-emerald-50 transition-colors rounded-lg mb-2 px-4 py-2">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.finalCta.title}
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              {t.finalCta.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-bold"
              onClick={scrollToForm}
            >
              {t.finalCta.button}
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

