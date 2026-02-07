"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceItem = ({ number, title, description, tags, isOpen, onToggle }: ServiceItemProps) => {
  return (
    <div className="py-10 border-b border-zinc-100 last:border-0">
      <div 
        className="flex items-center justify-between cursor-pointer group"
        onClick={onToggle}
      >
        <div className="flex items-baseline gap-6">
          <span className="text-sm font-medium text-zinc-400 font-sans">{number}</span>
          <h4 className={cn(
            "text-4xl font-semibold tracking-tight transition-colors duration-300 font-sans",
            isOpen ? "bg-gradient-text bg-clip-text text-transparent" : "text-zinc-900 group-hover:text-zinc-500"
          )}>
            {title}
          </h4>
        </div>
        <span className="text-2xl font-light text-zinc-400">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      
      <div className={cn(
        "overflow-hidden transition-all duration-500 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
      )}>
        <div className="pl-12">
          <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-md font-sans">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-4 py-2 rounded-full border border-zinc-200 text-zinc-600 font-medium font-sans whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      number: "01.",
      title: "Brand Identity",
      description: "We specialize in crafting unique brand identities that resonate with audiences. Our expertise lies in understanding the essence of your brand and translating it into compelling visuals and narratives.",
      tags: ["Graphic Design", "Brand Name", "Logo Design", "Package Design", "Typography", "Color Scheme", "Voice and Tone"],
        image: "/services/brand-identity.svg"
      },
      {
        number: "02.",
        title: "UI/UX Design",
        description: "We create intuitive digital experiences that delight users and drive results. Our process involves deep research, wireframing, and high-fidelity prototyping to ensure seamless interaction.",
        tags: ["User Research", "Wireframing", "Prototyping", "Mobile App Design", "Web Design"],
        image: "/services/uiux-design.svg"
      },
      {
        number: "03.",
        title: "Development",
        description: "Bringing designs to life with clean, scalable code. We build robust web and mobile applications using modern technologies and best practices to ensure peak performance.",
        tags: ["React", "Tailwind CSS", "Node.js", "Full-stack", "API Integration", "Performance"],
        image: "/services/development.svg"
      },
      {
        number: "04.",
        title: "SEO",
        description: "We optimize your digital presence to rank higher and reach the right audience. From technical audits to content strategy, we drive organic growth that converts.",
        tags: ["Technical SEO", "Content Strategy", "Keyword Research", "Analytics", "Link Building", "Local SEO"],
        image: "/services/seo.svg"
      }
  ];

  return (
    <section id="service" className="py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Heading Section */}
        <div className="mb-20">
          <h2 className="text-7xl lg:text-9xl font-semibold tracking-tighter bg-gradient-to-r from-[#163c2e] to-[#239D89]   bg-clip-text text-transparent mb-8 leading-none">
            Our Services
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <p className="text-sm font-medium text-zinc-500 mt-2 font-sans tracking-tight">
              (SERVICE - 02)
            </p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl font-sans tracking-tightest">
              An agency that brings <span className="italic font-normal mr-2">passion</span> into every project.
            </h3>
          </div>
        </div>

        <div className="border-t border-zinc-100"></div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Accordion Column */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceItem
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
                tags={service.tags}
                isOpen={activeIndex === index}
                onToggle={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Visual Preview Column */}
          <div className="relative pt-10 sticky top-24 pb-12">
            <div className="aspect-[4/5] bg-zinc-50 rounded-[2.5rem] overflow-hidden group">
              <div className="relative size-full cursor-pointer">
                {/* Background Placeholder Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-zinc-300 font-medium italic font-sans">
                    ({services[activeIndex].title} Image)
                  </span>
                </div>
                
                {/* Image Overlay */}
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover object-center absolute inset-0 group-hover:opacity-0 transition-opacity duration-700 ease-in-out"
                />

                {/* Hover States */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 backdrop-blur-[2px]">
                  <div className="size-20 bg-zinc-900/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl rotate-45">
                      <ArrowUp className="w-6 h-6" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection