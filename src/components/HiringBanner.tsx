"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HiringBanner() {
  return (
    <Link href="/careers" className="block">
      <section className="bg-[#239D89] py-6 overflow-hidden cursor-pointer hover:bg-[#1e8675] transition-colors duration-300">
        <div className="relative w-full overflow-hidden bg-[#239D89] border-y border-[#1CCCAA] py-8">
          <div className="flex flex-col gap-4">
            {/* First Row - Moving Right to Left */}
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(12)].map((_, index) => (
                <div key={index} className="flex items-center gap-10">
                  <span className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                    WE'RE HIRING
                  </span>
                  <div className="flex-shrink-0 mr-10">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
                      alt="iTA Groupe"
                      width={200}
                      height={100}
                      className="h-16 w-auto "
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Second Row - Moving Left to Right */}
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(12)].map((_, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider ">
                    WE'RE HIRING
                  </span>
                  <div className="flex-shrink-0 mr-10">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
                      alt="iTA Groupe"
                      width={200}
                      height={100}
                      className="h-16 w-auto"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Link>
  );
}