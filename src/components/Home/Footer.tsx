"use client";

import { ArrowRight, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#18181b] text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-8">
          <div className="flex flex-col">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-4 text-[#71717a]">
              Have any project in mind?
            </p>
            <a 
              href="mailto:hello@itagroupe.com" 
              className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter bg-gradient-text bg-clip-text text-transparent hover:bg-gradient-text/80 transition-colors duration-300 leading-none"
            >
              hello@itagroupe.com
            </a>
          </div>
          
          <button className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 group">
            Book a Call 
            <div className="size-8 bg-zinc-900 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowRight className="size-4 text-white" />
            </div>
          </button>
        </div>

        <hr className="border-white/10 mb-20" />

        {/* Sitemap Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <p className="text-xs text-[#71717a] mb-8 font-medium">© 2026 ITAGROUPE.</p>
            <h3 className="text-xl md:text-2xl font-medium leading-relaxed max-w-sm text-white/90">
              Work with our strategists, designers, and developers who deliver high-quality work with passion.
            </h3>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-8 text-[#71717a]">Navigate</p>
            <nav className="flex flex-col gap-4">
              {['Home', 'Projects', 'Service', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-8 text-[#71717a]">Social Media</p>
            <nav className="flex flex-col gap-4">
              {['Instagram', 'Twitter (X)', 'LinkedIn'].map((item) => (
                <Link 
                  key={item} 
                  href={`https://${item.toLowerCase()}.com`} 
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Massive Wordmark */}
        <div className="relative pt-12">
          <div className="flex items-start justify-between">
            <div className="relative">
              <h2 className="text-[12vw] md:text-[16vw] font-bold tracking-tighter leading-none select-none">
                ITAGROUPE<sup className="text-[2vw] md:text-[3vw] font-light align-top ml-2">TM</sup>
              </h2>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 md:mt-20 group"
            >
              <div className="size-12 md:size-16 border border-white/20 rounded-full flex items-center justify-center transition-colors hover:bg-white hover:border-white">
                <ArrowUp className="size-5 md:size-6 text-white group-hover:text-black transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
