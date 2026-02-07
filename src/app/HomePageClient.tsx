import React from 'react'
import Header from '@/components/Home/Header';
import Hero from '@/components/Home/Hero';
import IntroGrid from '@/components/Home/IntroGrid';
import ServicesSection from '@/components/Home/ServicesSection';
import WorkSection from '@/components/Home/WorkSection';
import TeamSection from '@/components/Home/TeamSection';
import Testimonials from '@/components/Home/Testimonials';
import Footer from '@/components/Home/Footer';
import FAQSection from '@/components/Home/FAQSection';

const HomePageClient = () => {
  return (
    <>
    <Header />
    <Hero />
    <IntroGrid />
    <ServicesSection />
    <WorkSection />
    <TeamSection />
    <Testimonials />
    <FAQSection />
    <Footer />
  </>
  )
}

export default HomePageClient