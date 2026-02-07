import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const TeamSection = () => {
  const teamMemberAvatars = [
    "/images/khalill.avif",
    "/images/mohamed.avif",
    "/images/Yassine-image.avif",
  ];

  const mainTeamPhoto = "https://images.unsplash.com/photo-1646038572819-7fc51f66a979?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0";

  return (
    <section className="py-24 bg-white text-zinc-900 border-t border-zinc-50" id="team">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-5xl ">
            <h2 className="text-7xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-[0.9] pb-4">
              Our Team Behind The Work
            </h2>
          </div>
          <div className="lg:max-w-xs pt-4 lg:text-left text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
              (TEAM - 03)
            </p>
            <div className="flex -space-x-3 mb-6">
              {teamMemberAvatars.map((url, index) => (
                <div 
                  key={index} 
                  className="size-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden ring-1 ring-zinc-100"
                >
                  <img 
                    alt="team-member" 
                    className="size-full object-cover" 
                    src={url} 
                  />
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              From digital campaigns to full-stack brand systems, our small team shipped big things. Every single one, intentional.
            </p>
          </div>
        </div>

        {/* 3-Column Featured Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          
          {/* Column 1: Team Member Photo */}
          <div className="relative group aspect-square bg-zinc-100 rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0">
              <img 
                alt="Main Team Member" 
                className="size-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
                src={mainTeamPhoto} 
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-zinc-900/40 backdrop-blur-md rounded-full text-[10px] items-center flex font-bold uppercase tracking-widest text-white border border-white/10">
                We deliver
              </span>
            </div>
          </div>

          {/* Column 2: Global Recognition Blue Card */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 rounded-[2.5rem] p-10 text-white flex flex-col justify-between aspect-square">
            <div>
              <div className="size-8 text-[#d9ff00] mb-8">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Global Recognition
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
                We thrive to create design that make impact, not just impressions.
              </h3>
            </div>
          </div>

          {/* Column 3: Rating Card */}
          <div className="bg-zinc-50 rounded-[2.5rem] p-10 flex flex-col justify-between aspect-square">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">
                (Rating)
              </p>
              <div className="relative inline-block">
                <h3 className="text-8xl font-bold tracking-tighter text-blue-600">
                  0.0/5
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-full h-px bg-zinc-200" />
              <div className="flex justify-between items-end">
                <p className="text-xs font-medium text-zinc-500 max-w-[120px] leading-tight">
                  by 200K+ clients world-wide
                </p>
                <div className="flex items-center gap-1.5 self-end pb-1">
                  <Star className="size-4 fill-green-500 text-green-500" />
                  <span className="text-sm font-bold tracking-tighter text-zinc-900">Trustpilot</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Text */}
        <div className="max-w-xl">
          <p className="text-zinc-500 font-medium text-sm leading-relaxed">
            Whether you&apos;re launching something new or reshaping what exists, we&apos;re here to help you stand out—with clarity, creativity, and edge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;