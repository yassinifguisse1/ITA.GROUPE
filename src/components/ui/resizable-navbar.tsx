"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out bg-background/25 border border-border shadow-lg rounded-3xl mt-2",
        scrolled
          ? "bg-background/25 backdrop-blur-3xl border border-border shadow-lg rounded-3xl mt-9"
          : " w-full"
      )}
      style={{
        width: scrolled ? "80%" : "90%",
        maxWidth: scrolled ? "1200px" : "1800px",
      }}
    >
      <div 
        className={cn(
          "mx-auto px-4 transition-all duration-500",
          scrolled ? "py-2" : "py-2"
        )}
      >
        {children}
      </div>
    </nav>
  );
};

export const NavBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden md:flex items-center justify-between transition-all duration-500">
      {children}
    </div>
  );
};

export const NavbarLogo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
        alt="iTA Groupe"
        width={scrolled ? 68 : 79}
        height={scrolled ? 23 : 27}
        className="transition-all duration-500 group-hover:scale-105"
        priority
      />
    </Link>
  );
};

export const NavItems = ({ items }: { items: { name: string; link: string }[] }) => {
  return (
    <div className="flex items-center space-x-8">
      {items.map((item, idx) => (
        <Link
          key={`nav-item-${idx}`}
          href={item.link}
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </div>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-xl",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
  };

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:hidden">{children}</div>;
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between transition-all duration-500">
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-foreground hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110"
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-2xl transition-all duration-500 overflow-hidden",
        isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="px-4 py-6 space-y-4 overflow-y-auto max-h-[calc(80vh-2rem)]">
        {children}
      </div>
    </div>
  );
};