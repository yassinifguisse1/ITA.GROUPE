"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const LETTERS = "ITAGROUPE".split("");

// Tiny inline SVG grain (~0.5KB) – tiles with no network request. Replaces heavy grain.svg.
// const GRAIN_DATA_URL =
//   "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden text-white bg-gradient-to-tr from-[#09090b] via-[#2563eb] to-[#4338ca]/60 rounded-b-4xl">
      {/* Grain overlay – visible film-grain texture */}
      {/* <div
        aria-hidden
        style={{
          backgroundImage: `url("${GRAIN_DATA_URL}")`,
          backgroundSize: "180px 180px",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
        className="absolute inset-0 pointer-events-none opacity-90"
      /> */}
     <div
  style={{
    backgroundImage: "url(/images/grain.avif)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    mixBlendMode: "overlay",
  }}
  className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-50"
/>
{/* <div className="absolute inset-0">
  <Image src="/images/grain.avif" alt="Grain" fill className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-50" />
  
</div> */}
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-[#4b5563] pointer-events-none opacity-50 mix-blend-overlay" aria-hidden />

      <div className="container mx-auto px-8 lg:px-4 relative z-10 mb-48 lg:mb-45">
        <div className="max-w-4xl">
          <p
            className="uppercase text-white/60 text-xs lg:text-sm 2xl:text-base font-bold tracking-[0.3rem] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            AGENCY THAT MOVES CULTURE
          </p>

          <h2
            className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl 2xl:max-w-4xl font-medium tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100"
          >
            Design studio that not only creates digital products but also experiences.
          </h2>

          <button
            className="mt-12 p-3 px-6 flex items-center gap-4 tracking-tight cursor-pointer rounded-full bg-[#d9ff00] text-[#09090b] font-bold transition-all duration-300 hover:scale-105 active:scale-95 group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
          >
            Let&apos;s Collaborate
            <div className="size-10 bg-[#09090b] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight size={20} className="text-[#d9ff00]" />
            </div>
          </button>
        </div>
      </div>

      {/* HUGE BRAND-TEXT with wave animation */}
      <div className="relative w-full">
        <h1
          className="absolute text-white text-[85px] tracking-tighter font-bold -rotate-90 bottom-30 2xl:-bottom-60 -right-42 2xl:left-[120px] lg:rotate-0 lg:left-[60px] lg:-bottom-32 lg:text-[18vw] leading-none select-none flex"
          style={{ letterSpacing: "-0.05em" }}
          aria-label="ITAGROUPE"
        >
          {LETTERS.map((letter, i) => (
            <span
              key={i}
              className="wave-letter inline-block"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 40%, 100% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-0.35em);
          }
        }
        .wave-letter {
          animation: wave 1.4s ease-in-out infinite;
        }
        @media (min-width: 1024px) {
          h1 {
            margin-bottom: -0.1em;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
