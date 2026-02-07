import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const brands = [
    { name: 'coinbase', logo: 'coinbase' },
    { name: 'slack', logo: 'slack' },
    { name: 'coinbase', logo: 'coinbase' },
    { name: 'spotify', logo: 'spotify' },
  ];

  return (
    <section className="bg-white py-24 text-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header Area */}
        <div className="flex flex-col mb-20">
          <p className="text-xs font-medium text-zinc-400 mb-6 tracking-tight">
            (REVIEWS - 05)
          </p>
          <div className="flex justify-between items-end">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter bg-gradient-text   bg-clip-text text-transparent leading-none">
              Testimonials
            </h2>
            <div className="flex gap-4 mb-2">
              <button className="size-12 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <ChevronLeft className="size-5 text-zinc-400" />
              </button>
              <button className="size-12 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <ChevronRight className="size-5 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-900 mb-8 max-w-[120px] leading-tight">
              WORDS FROM THE ONES WHO KNOW US BEST
            </p>
            <div className="mb-2">
              <span className="text-6xl lg:text-7xl font-bold tracking-tightest">
                +60%
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
              Conversion Rate
            </p>
          </div>

          <div className="lg:col-span-9 pt-2">
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] max-w-3xl">
              "Working with ITAGROUPE felt less like building with a creative partner. Every visual, every word just hit right."
            </h3>
            {/* <div className="mt-12 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-zinc-900 tracking-tight">Guy Hawkins</span>
                <span className="text-sm font-medium text-zinc-400">Head of Product of Webflow</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Brand Scroller / Logos */}
        {/* <div className="pt-24">
          <div className="flex items-center gap-2 mb-12">
            <span className="size-1 bg-zinc-900 rounded-full" />
            <p className="text-xs font-medium text-zinc-500 tracking-tightest">
              Working with brands that matter
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-[#f9f9f9]/50 rounded-[2rem] h-40 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <span className="text-lg font-bold tracking-tighter text-zinc-400 lowercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;