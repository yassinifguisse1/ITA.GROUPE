"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const timeStr = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(timeStr);
    };

    window.addEventListener("scroll", handleScroll);
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

    const navItems = [
      { label: "About", href: "/about" },
      { label: "Service", href: "/#service" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" }
    ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 p-5 lg:px-10 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md text-zinc-900 shadow-sm" : "text-white"
      }`}
    >
      <div className="container mx-auto px-2 flex items-center justify-between">
        {/* Left Side: Logo and Time */}
        <div className="flex items-center gap-6 lg:gap-16">
          <a href="/" className="block">
            <div
              className={`text-3xl lg:text-4xl relative tracking-tighter max-w-fit font-medium transition-colors duration-300 ${
                isScrolled ? "text-zinc-950" : "text-white"
              }`}
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ITAGROUPE
              <sup className="text-[10px] font-thin absolute top-1 -right-4">TM</sup>
            </div>
          </a>
          {/* <p
            className={`text-xs lg:text-lg hidden lg:inline-flex tracking-wide mt-1 transition-colors duration-300 ${
              isScrolled ? "text-zinc-500" : "text-white/70"
            }`}
          >
            • France, {time} (GMT+2)
          </p> */}
        </div>

        {/* Right Side: Nav and CTA */}
        <div className="hidden lg:flex items-center gap-12 lg:gap-24">
          <nav className="flex items-center gap-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <a
                    href={item.href}
                    className={`relative group px-1 py-1 inline-block transition-all duration-300 ${
                    isScrolled ? "text-zinc-600 hover:text-zinc-900" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
                {index < navItems.length - 1 && (
                  <span className={`ml-1 opacity-40 ${isScrolled ? "text-zinc-900" : "text-white"}`}>,</span>
                )}
              </div>
            ))}
          </nav>
          
            <a
              href="/contact"
              className={`text-[10px] lg:text-xs font-bold uppercase tracking-widest pb-0.5 border-b cursor-pointer transition-all duration-300 ${
                isScrolled
                  ? "text-zinc-900 border-zinc-900/40 hover:border-zinc-900"
                  : "text-white/90 border-white/40 hover:border-white"
              }`}
            >
              Get Connected
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`p-2 transition-colors duration-300 ${isScrolled ? "text-zinc-900" : "text-white"}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="size-8" /> : <Menu className="size-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - full viewport, solid background, above page content */}
      <div
        className={`lg:hidden fixed left-0 right-0 bottom-0 top-[72px] z-[9999] min-h-[calc(100vh-72px)] bg-white text-zinc-900 transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xl font-semibold tracking-tight py-4 border-b border-zinc-100 hover:text-[#2563eb] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xl font-semibold tracking-tight py-4 border-b border-zinc-100 hover:text-[#2563eb] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Connected
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;