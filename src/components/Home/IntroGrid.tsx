import React from 'react';
import Image from 'next/image';

interface IntroGridProps {
  // Use "use client" if interactivity is needed, but this section seems static based on layout
}

const IntroGrid: React.FC<IntroGridProps> = () => {
  return (
    <section className="py-24 bg-white text-zinc-900 border-b border-zinc-100">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-5xl">
            Reshaping what exists, we&apos;re here to help you stand out-{' '}
            <span className="text-zinc-400">with clarity, creativity, and edge.</span>
          </h2>
          <div className="hidden lg:flex size-14 bg-[#D9FF00] rounded-full items-center justify-center shrink-0">
            <span className="text-zinc-900 text-xs font-bold flex flex-col items-center leading-none">
              <span className="mb-0.5">↑</span>
              <span>↓</span>
            </span>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Blue Card: Made for the bold */}
          <div className="bg-gradient-to-br from-[#2563EB] to-[#4338CA] rounded-[2.5rem] justify-between p-10 text-white flex flex-col min-h-[440px]">
            <div className="w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#D9FF00]">
                <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-70">
                Made for the bold
              </p>
              <h3 className="text-[32px] font-medium leading-[1.2] tracking-tight">
                Design experiences, not just screens. Tell stories, not just taglines.
              </h3>
            </div>
          </div>

          {/* Dark Card: Heritage / Since 2010 */}
          <div className="relative bg-[#09090B] rounded-[2.5rem] items-center justify-center p-10 text-white flex flex-col min-h-[440px] overflow-hidden">
            <div className="text-center">
              <span className="text-zinc-500/50 text-[96px] lg:text-[120px] font-black italic select-none leading-none block">
                2024
              </span>
              <p className="text-white/80 text-sm font-medium tracking-wide mt-4 max-w-[200px] mx-auto">
                Over a decade of craft. Still building.
              </p>
            </div>
            <div className="absolute bottom-8 left-8 px-5 py-2.5 bg-zinc-800/40 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-xs font-bold tracking-wider text-white">Est. 2010</span>
            </div>
          </div>

          {/* White Card: Growth Metric */}
          <div className="bg-zinc-50 rounded-[2.5rem] justify-between p-10 flex flex-col min-h-[440px] border border-zinc-100">
            <div>
              <p className="text-xs font-bold text-zinc-400 mb-4 tracking-widest uppercase">
                (Growth)
              </p>
              <h3 className="text-8xl font-bold tracking-tighter bg-gradient-to-r from-[#2563EB] to-[#60A5FA] bg-clip-text text-transparent">
                +32%
              </h3>
            </div>
            <div className="pt-8 border-t border-zinc-200 flex flex-col gap-8">
              <p className="text-zinc-600 font-medium max-w-[220px] text-lg leading-tight">
                Design experiences, not just screens.
              </p>
              <div className="flex -space-x-3">
                <div className="size-11 rounded-full border-2 border-white bg-zinc-200 overflow-hidden relative">
                  <Image
                    src="/images/Yassine-image.avif"
                    alt="Team member 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="size-11 rounded-full border-2 border-white bg-zinc-200 overflow-hidden relative">
                  <Image
                    src="/images/mohamed.avif"
                    alt="Team member 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="size-11 rounded-full border-2 border-white bg-zinc-200 overflow-hidden relative">
                  <Image
                    src="/images/khalill.avif"
                    alt="Team member 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            (About - 01)
          </p>
          <p className="text-zinc-500 font-medium max-w-sm text-[15px] leading-relaxed">
            We help you to shape your ideas into visuals that resonate, disrupt, and last.
          </p>
          <a
            href="#contact"
            className="text-zinc-900 font-extrabold text-sm border-b-2 border-zinc-900 pb-1 hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
          >
            Book a Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroGrid;