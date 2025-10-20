"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className="relative flex h-[40rem] md:h-[40rem] lg:h-screend justify-center lg:space-x-12 overflow-y-auto rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 scrollbar-hide bg-background "
      ref={ref}
      style={{
        scrollbarWidth: "none",
        
      }}
    >
      <div className="relative flex items-start w-full lg:w-auto px-2 md:px-4">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16 md:my-24 lg:my-32">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base md:text-lg lg:text-xl max-w-lg text-muted-foreground leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-32 md:h-40" />
        </div>
      </div>
      
      {/* Sticky content panel - hidden on mobile/tablet, visible on large screens */}
      <div
        className={cn(
          "sticky top-10 hidden lg:flex h-[400px] xl:h-[500px] w-[350px] xl:w-[450px] overflow-hidden rounded-2xl shadow-2xl ",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </div>
  );
};