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
import { portfolioTranslations } from "@/i18n/page-translations";

// Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
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
        <div className="text-xs sm:text-sm text-slate-400">Days</div>
      </div>
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">Hours</div>
      </div>
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">Minutes</div>
      </div>
      <div className="bg-slate-900 text-white rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center">
        <div className="text-2xl sm:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs sm:text-sm text-slate-400">Seconds</div>
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
  
  // Get portfolio projects - prioritize e-commerce but include all projects with images
  const portfolioT = portfolioTranslations[language];
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
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
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
                Get An Award Winning<br className="sm:hidden block" />
                <span className="text-yellow-300"> Website </span><br className="sm:hidden block" />
                Done From <br className="sm:hidden block" />
                <span className="text-3xl sm:text-4xl lg:text-5xl"> $199</span> This Black Friday
              </h1>

              {/* Discount Badge */}
              <div className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg inline-block font-bold text-lg">
                75% OFF Black Friday Coupon Valid Until Timer Hits 0
              </div>

              {/* Countdown Timer */}
              <div className="py-4">
                <CountdownTimer targetDate={targetDate} />
              </div>

              {/* Video Section */}
              <div className="space-y-3">
                <div className="bg-blue-600 px-4 py-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-blue-700 transition-colors">
                  <Play className="w-6 h-6" />
                  <span className="font-semibold">Watch This Short Video To See How It Works</span>
                </div>
                <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 cursor-pointer hover:bg-white/30 transition-colors">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* As Seen On */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm font-semibold">AS SEEN ON:</span>
                <div className="flex gap-3 opacity-80">
                  <span className="text-xs font-bold">FOX NEWS</span>
                  <span className="text-xs font-bold">CBS</span>
                  <span className="text-xs font-bold">NBC</span>
                  <span className="text-xs font-bold">ABC</span>
                </div>
              </div>

              {/* What You Get */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Order Now And You'll Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">Done-For-You Website: $2,500+</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">30+ Winning Products Uploaded: $1,500+</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">Private Access To Top Suppliers: $1,000+</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="line-through opacity-70">Optimized Product Descriptions: $750+</span>
                      <span className="ml-2 font-bold">Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Fully Hands-Off Order Fulfilment: Priceless</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Award Winning 24/7 Support: Priceless</span>
                    </div>
                  </li>
                </ul>

                {/* Bonuses */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-bold text-lg mb-3">Plus 3 Bonuses:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="line-through opacity-70">Bonus #1: Done-For-You Logo Design: $300+</span>
                        <span className="ml-2 font-bold">FREE</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="line-through opacity-70">Bonus #2: $0 - $412k Case Study: $500+</span>
                        <span className="ml-2 font-bold">FREE</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="line-through opacity-70">Bonus #3: Mystery Gift: $500+</span>
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
                      $199!
                    </motion.span>
                  </motion.div>
                  <p className="text-slate-600 text-sm mb-2">75% OFF Black Friday Coupon Applied! (Usually $20)</p>
                  
                  {/* Availability */}
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2">Black Friday Store Availability for Today:</p>
                   
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: "We Set Up Your Store",
                description: "Your eCommerce site is built, including 30 high-potential products in your niche, all for just $199."
              },
              {
                icon: Package,
                title: "Suppliers Handle Fulfillment",
                description: "Integrated suppliers ship products directly to your customers, taking care of all logistics."
              },
              {
                icon: DollarSign,
                title: "Keep the Difference",
                description: "When a dropshipping sale occurs, you keep the difference. Example: Sell for $39.99, pay the supplier $9.99, and keep $30 difference."
              },
              {
                icon: TrendingUp,
                title: "Scale and Grow",
                description: "Reinvest profits, optimize your store, and expand to build a thriving online business."
              }
            ].map((step, index) => (
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
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Claim Your $199 Store! 🎁
              <Gift className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-slate-600 mt-2">And Get It Delivered By Tomorrow...</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Examples of Our Stores</h2>
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
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                    <a 
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
                    </a>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Real People, Real Results.</h2>
            <p className="text-lg text-slate-600">Trusted by New Store Owners Worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Adessa M.",
                initials: "AM",
                title: "6 Sales in My First Week",
                review: "Store arrived in under 12 hours. Followed the ad guide and made six sales in week one. Best $199 I've spent.",
                verified: true
              },
              {
                name: "Cosmas C.",
                initials: "CC",
                title: "Store Delivered Overnight",
                review: "Ordered in the afternoon, live by morning. Clean branding and products loaded - better than the $3k store I bought last year.",
                verified: true
              },
              {
                name: "Gabriel V.",
                initials: "GV",
                title: "First Sale in 48 Hours",
                review: "Didn't touch any code. Followed their launch steps and got my first order in two days - then two more by the end of the week.",
                verified: true
              },
              {
                name: "Tammy H.",
                initials: "TH",
                title: "From Zero to Live in 24 Hours",
                review: "They built the store, loaded products, and handed me a simple launch plan. I dreaded the tech - now I'm excited to sell.",
                verified: true
              },
              {
                name: "Aisha K.",
                initials: "AK",
                title: "Legit & Worth Every Penny",
                review: "Looked too cheap to be real - it is legit. My pet store looks premium and was ready to sell instantly. Orders came in the first week.",
                verified: true
              },
              {
                name: "Patrick M.",
                initials: "PM",
                title: "Faster Than I Imagined",
                review: "I've tried the DIY route. This blew it away - launched in under a day and started seeing traffic and orders immediately after.",
                verified: true
              },
              {
                name: "Kay S.D.",
                initials: "KS",
                title: "The $199 That Changed Everything",
                review: "Almost paid thousands for a 'system.' Glad I didn't. This was high-quality, fast, and actually made money.",
                verified: true
              },
              {
                name: "Faith M.",
                initials: "FM",
                title: "Even a Beginner Can Do This",
                review: "Store ready, ad guide included, first sales within days. It felt effortless - and the support actually solves problems.",
                verified: true
              },
              {
                name: "Logan M.",
                initials: "LM",
                title: "Finally Moving After Stalling",
                review: "I'd failed with two stores before. The difference here was the step-by-step launch and quick answers on support. First customer message on day two.",
                verified: true
              }
            ].map((testimonial, index) => (
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
                        {testimonial.initials}
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
                        {testimonial.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                    <h5 className="font-bold text-lg mb-2 text-slate-900">{testimonial.title}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">{testimonial.review}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Your Most Common Questions Answered Below...
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Do I need to have a Shopify Account Before using the Websites?",
                answer: "No! All our Shopify Dropshipping Stores come as brand new stores that you'll get a 3 day free trial with. After the 3 Day Free Trial, Shopify will be $1/Month for 3 Months and after 3 Months Shopify will be $39/Month. Shopify gives you an entire 90 Days to give your website a shot and only after 90 days you can choose to pay the $39 which is nothing if you are making sales on your store every day. if you don't want to pay the $39 you can cancel your $1/month for 3 months trial. The risk is very low."
              },
              {
                question: "What if I already have a Shopify Store?",
                answer: "Most of the time it is a lot better if you have an expert setup the store from scratch for you since the design you made is most likely not setup for success. So, even if you have already have a shopify store, don't worry. We'll still be able to create a new one for you that is setup correctly."
              },
              {
                question: "How many products will I get on my store?",
                answer: "All our stores come pre-implemented with 30 Products."
              },
              {
                question: "What other fees are associated with this?",
                answer: "The only other thing that you have to pay for is hosting for your Shopify store. You will get 3 month trial for $1 a month, if you choose to keep it you will need to pay $39 a month for hosting your website through shopify, you can cancel at anytime and there are no contracts or other hidden fees."
              },
              {
                question: "Do you advertise the store for me?",
                answer: "We do NOT do any advertising for your store. That will be for you to do when the store is done."
              },
              {
                question: "What if I have my own products? Can I add them to my store?",
                answer: "Yes! You'll easily be able to add as many products as you like to your store after deliver it. The process is extremely simple and you can do it within a couple of clicks."
              },
              {
                question: "Are these stores prebuilt?",
                answer: "Yes our stores are prebuilt, meaning it's a template for you to build off of and shouldn't be considered a 'Business in a box'. We are building a website template for you, not a business. We are a website design agency, not a business opportunity."
              },
              {
                question: "How will I be able to use the Shopify Store as my own?",
                answer: "24 - 48 Hours after you place your order, we'll send you your login information for your new Shopify Dropshipping Store. All you'll have to do is login, change the password, and the store is all yours!"
              },
              {
                question: "Can I get a Refund if I don't like my Shopify store?",
                answer: "We have a 365 Day Guarantee, if you use your store for 365 Days and don't make your money back we'll fully refund you."
              },
              {
                question: "Will you help me make changes and customizations on my Shopify Store?",
                answer: "We will provide you support to help you access the Shopify store and use it. We'll also give you a step by step video guide on how to access and make changes to your store. However, we will not be able to go into your account and do the changes FOR YOU as that will not allow us to provide our stores are this good of a price. Rest assured, you will love your website and you'll easily be able to make the changes you would like."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2">
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
              Claim Your $199 Store! 🎁
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              And Get It Delivered By Tomorrow...
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-bold"
              onClick={scrollToForm}
            >
              Order Now
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

