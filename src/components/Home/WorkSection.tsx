// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { ArrowRight } from 'lucide-react';

// const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
//   const [count, setCount] = useState(0);
//   const hasStarted = useRef(false);

//   useEffect(() => {
//     if (!startCounting || hasStarted.current) return;
//     hasStarted.current = true;

//     let startTime: number | null = null;
//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * end));
//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };
//     requestAnimationFrame(animate);
//   }, [end, duration, startCounting]);

//   return count;
// };

// const MilestoneCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);
//   const count = useCountUp(end, 2000, isVisible);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className="flex flex-col gap-4">
//       <span className="text-6xl lg:text-[5rem] font-bold tracking-tightest text-zinc-900 leading-none">
//         {count}<span className="text-zinc-900">{suffix}</span>
//       </span>
//       <span className="text-zinc-500 text-sm font-medium tracking-wide">{label}</span>
//     </div>
//   );
// };

// const WorkSection = () => {
//   return (
//     <section id="project" className="py-24 bg-white text-zinc-900">
//       <div className="container mx-auto px-6 lg:px-4">
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16">
//           <h2 className="text-7xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent">
//             Our Work
//           </h2>
//           <p className="text-sm font-bold text-zinc-400 mt-4 lg:mt-0 uppercase tracking-widest leading-none">
//             (PROJECT - 03)
//           </p>
//         </div>

//         {/* Primary Project Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {/* Chat Genius */}
//           <div className="group cursor-pointer">
//             <div className="aspect-[4/3] bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
//               <div className="absolute inset-0 flex items-center justify-center italic text-zinc-400 opacity-0 group-hover:opacity-100 text-lg transition-opacity duration-300 z-10 bg-zinc-100/10 backdrop-blur-sm">
//                 View Project
//               </div>
//               <Image
//                 src="https://images.unsplash.com/photo-1741348571852-fabd00511e92?q=80&amp;w=629&amp;auto=format&amp;fit=crop"
//                 alt="Chat Genius Project"
//                 fill
//                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
//               />
//             </div>
//             <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
//               <div>
//                 <h3 className="text-2xl font-semibold tracking-tight">Chat Genius</h3>
//                 <p className="text-zinc-500 text-sm mt-2 font-medium">(2024 — Still on going)</p>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
//                   Website Design
//                 </span>
//                 <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
//                   Development
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Field Type */}
//           <div className="group cursor-pointer">
//             <div className="aspect-[4/3] bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
//               <div className="absolute inset-0 flex items-center justify-center italic text-zinc-400 opacity-0 group-hover:opacity-100 text-lg transition-opacity duration-300 z-10 bg-zinc-100/10 backdrop-blur-sm">
//                 View Project
//               </div>
//               <Image
//                 src="https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"
//                 alt="Field Type Project"
//                 fill
//                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
//               />
//             </div>
//             <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
//               <div>
//                 <h3 className="text-2xl font-semibold tracking-tight">Field Type</h3>
//                 <p className="text-zinc-500 text-sm mt-2 font-medium">(2023 — Jan 2025)</p>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
//                   Branding
//                 </span>
//                 <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
//                   Social Media
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Secondary Layout Block */}
//         <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 py-12">
//           {/* Rock Bottom Feature */}
//           <div className="lg:col-span-4 cursor-pointer group">
//             <div className="aspect-square w-full max-w-[320px] bg-zinc-100 rounded-[2.5rem] mb-6 overflow-hidden relative">
//               <Image
//                 src="https://images.unsplash.com/photo-1660490987070-b7cc89e41b38?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"
//                 alt="Rock Bottom"
//                 fill
//                 className="object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//             </div>
//             <div className="px-2">
//               <h4 className="font-semibold text-xl tracking-tight">Rock Bottom</h4>
//               <p className="text-zinc-400 text-sm mt-1 font-medium">(Graphic Design - 2025)</p>
//             </div>
//           </div>

//           {/* Mission & CTA */}
//           <div className="lg:col-span-8 flex flex-col items-start lg:items-end lg:text-right">
//             <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-3xl mb-12">
//               We born in a shared studio loft with one mission: <span className="font-bold">create work that doesn't blend in</span>
//             </h3>
//               <a href="/projects" className="flex items-center gap-6 bg-[#d9ff00] hover:bg-[#cbe635] text-zinc-950 px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-105 group">
//                 See All Projects 
//                 <div className="size-10 bg-zinc-950 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
//                   <ArrowRight className="text-[#d9ff00]" size={20} />
//                 </div>
//               </a>
//           </div>
//         </div>

//         {/* Agency Milestones */}
//         <div className="border-t border-zinc-100 pt-16">
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-16">
//             AGENCY MILESTONES
//           </p>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
//               <MilestoneCounter end={2} suffix="+" label="Years of Experience" />
//               <MilestoneCounter end={12} suffix="+" label="Projects Completed" />
//               <MilestoneCounter end={29} suffix="+" label="Clients Worldwide" />
//               <MilestoneCounter end={99} suffix="%" label="Customer Satisfaction" />
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default WorkSection;
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startCounting || hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);

  return count;
};

const MilestoneCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(end, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <span className="text-6xl lg:text-[5rem] font-bold tracking-tightest text-zinc-900 leading-none">
        {count}<span className="text-blue-600">{suffix}</span>
      </span>
      <span className="text-zinc-500 text-sm font-medium tracking-wide">{label}</span>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section id="project" className="py-24 bg-white text-zinc-900">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16">
          <h2 className="text-7xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-sm font-bold text-zinc-400 mt-4 lg:mt-0 uppercase tracking-widest leading-none">
            (PROJECT - 03)
          </p>
        </div>

        {/* Primary Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* DadOfSEO */}
          <Link href="/projects/dadofseo" className="group cursor-pointer">
            <div className="aspect-[4/3] bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-zinc-900/20 backdrop-blur-[2px]">
                <div className="size-20 bg-zinc-900/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="size-6 text-white -rotate-45" />
                </div>
              </div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1761043906770.png"
                alt="DadOfSEO Project"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-blue-600 transition-colors duration-300">DadOfSEO</h3>
                <p className="text-zinc-500 text-sm mt-2 font-medium">(2024 — Ongoing)</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
                  SaaS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
                  Development
                </span>
              </div>
            </div>
          </Link>

          {/* Amseel Cars */}
          <Link href="/projects/amseel-cars" className="group cursor-pointer">
            <div className="aspect-[4/3] bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-zinc-900/20 backdrop-blur-[2px]">
                <div className="size-20 bg-zinc-900/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="size-6 text-white -rotate-45" />
                </div>
              </div>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1761042786652.png"
                alt="Amseel Cars Project"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-blue-600 transition-colors duration-300">Amseel Cars</h3>
                <p className="text-zinc-500 text-sm mt-2 font-medium">(2025)</p>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
                  Development
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600">
                  SEO
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Layout Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 py-12">
          {/* Mister Fish Feature */}
          <Link href="/projects/misterfish" className="lg:col-span-4 cursor-pointer group">
            <div className="aspect-square w-full max-w-[320px] bg-zinc-100 rounded-[2.5rem] mb-6 overflow-hidden relative">
              <Image
                src="/images/misterfish.avif"
                alt="Mister Fish"
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="px-2">
              <h4 className="font-semibold text-xl tracking-tight group-hover:text-blue-600 transition-colors duration-300">Mister Fish</h4>
              <p className="text-zinc-400 text-sm mt-1 font-medium">(Restaurant Website - 2025)</p>
            </div>
          </Link>

          {/* Mission & CTA */}
          <div className="lg:col-span-8 flex flex-col items-start lg:items-end lg:text-right">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight max-w-3xl mb-12">
              We born in a shared studio loft with one mission: <span className="font-bold">create work that doesn&apos;t blend in</span>
            </h3>
              <Link href="/projects" className="flex items-center gap-6 bg-[#d9ff00] hover:bg-[#cbe635] text-zinc-950 px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-105 group">
                See All Projects 
                <div className="size-10 bg-zinc-950 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="text-[#d9ff00]" size={20} />
                </div>
              </Link>
          </div>
        </div>

        {/* Agency Milestones */}
        <div className="border-t border-zinc-100 pt-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-16">
            AGENCY MILESTONES
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              <MilestoneCounter end={12} suffix="+" label="Years of Experience" />
              <MilestoneCounter end={41} suffix="+" label="Projects Completed" />
              <MilestoneCounter end={17} suffix="+" label="Clients Worldwide" />
              <MilestoneCounter end={83} suffix="%" label="Customer Satisfaction" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
