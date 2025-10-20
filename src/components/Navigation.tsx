"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ChevronDown } from "lucide-react";

const servicesItems = [
  { name: "Tech Due Diligence", link: "/services/tech-due-diligence" },
  { name: "Software Engineering", link: "/services/software-engineering" },
  { name: "Mobile Application", link: "/services/mobile-application" },
  { name: "Mobile Development", link: "/services/mobile-development" },
  { name: "Software Architecture", link: "/services/software-architecture" },
  { name: "Software Product Development", link: "/services/product-development" },
  { name: "UX/UI Design", link: "/services/ui-ux-design" },
  { name: "Quality Assurance", link: "/services/quality-assurance" },
  { name: "Business Analysis", link: "/services/business-analysis" },
  { name: "Dedicated Teams", link: "/services/dedicated-teams" },
];

const industriesItems = [
  { name: "Real Estate", link: "/industries/real-estate" },
  { name: "Education", link: "/industries/education" },
  { name: "Insurance", link: "/industries/insurance" },
  { name: "Finance & Banking", link: "/industries/finance" },
  { name: "Marketing & Advertising", link: "/industries/marketing" },
  { name: "Cryptocurrency", link: "/industries/cryptocurrency" },
  { name: "Agriculture", link: "/industries/agriculture" },
];

const expertiseItems = [
  { name: "Software Integration Services", link: "/expertise/software-integration" },
  { name: "AI Software Development", link: "/expertise/ai-development" },
  { name: "DevOps & Infrastructure", link: "/expertise/devops" },
  { name: "Cloud Architecture", link: "/expertise/cloud-architecture" },
  { name: "IoT Application Development", link: "/expertise/iot-development" },
  { name: "Property Management Systems", link: "/expertise/property-management" },
  { name: "Tenant Engagement Apps", link: "/expertise/tenant-engagement" },
  { name: "ESG for PropTech", link: "/expertise/esg-proptech" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (subKey: string) => {
    setMobileSubmenu(prev => prev === subKey ? null : subKey);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo  />
        <div className="flex items-center gap-6">
          <a href="/" className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors py-2">
            Home
          </a>
          
          {/* What We Do Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <button className="flex items-center gap-1 text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors py-2">
              What We Do
              <ChevronDown className={`h-4 w-4 transition-transform ${showMegaMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Dropdown */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 transition-all duration-300 backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95 ${
                showMegaMenu
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                  : 'opacity-0 invisible -translate-y-4 pointer-events-none'
              }`}
              style={{ zIndex: 9999 }}
            >
              <div className="grid grid-cols-3 gap-8 p-8">
                {/* Services Column */}
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b-2 border-primary/20">
                    Services
                  </h3>
                  <div className="space-y-1">
                    {servicesItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-3 py-2 text-base text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary rounded-lg transition-all cursor-pointer"
                        onClick={() => setShowMegaMenu(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Industries Column */}
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b-2 border-primary/20">
                    Industries
                  </h3>
                  <div className="space-y-1">
                    {industriesItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-3 py-2 text-base text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary rounded-lg transition-all cursor-pointer"
                        onClick={() => setShowMegaMenu(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Expertise Column */}
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b-2 border-primary/20">
                    Expertise
                  </h3>
                  <div className="space-y-1">
                    {expertiseItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        className="block px-3 py-2 text-base text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary rounded-lg transition-all cursor-pointer"
                        onClick={() => setShowMegaMenu(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/about" className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors py-2">
            About
          </a>
          <a href="/careers" className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors py-2">
            Careers
          </a>
          <a href="/contact" className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary transition-colors py-2">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <NavbarButton variant="primary">Demander un devis</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo  />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 text-base"
          >
            <span className="block">Home</span>
          </a>

          {/* What We Do - Services Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("services")}
              className="flex items-center justify-between w-full text-neutral-600 dark:text-neutral-300 text-base"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileSubmenu === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileSubmenu === "services" && (
              <div className="pl-4 mt-2 space-y-2">
                {servicesItems.map((item, idx) => (
                  <a
                    key={`services-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-neutral-500 dark:text-neutral-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* What We Do - Industries Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("industries")}
              className="flex items-center justify-between w-full text-neutral-600 dark:text-neutral-300 text-base"
            >
              <span>Industries</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileSubmenu === "industries" ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileSubmenu === "industries" && (
              <div className="pl-4 mt-2 space-y-2">
                {industriesItems.map((item, idx) => (
                  <a
                    key={`industries-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-neutral-500 dark:text-neutral-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* What We Do - Expertise Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu("expertise")}
              className="flex items-center justify-between w-full text-neutral-600 dark:text-neutral-300 text-base"
            >
              <span>Expertise</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileSubmenu === "expertise" ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileSubmenu === "expertise" && (
              <div className="pl-4 mt-2 space-y-2">
                {expertiseItems.map((item, idx) => (
                  <a
                    key={`expertise-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm text-neutral-500 dark:text-neutral-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 text-base"
          >
            <span className="block">About</span>
          </a>

          <a
            href="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 text-base"
          >
            <span className="block">Careers</span>
          </a>

          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300 text-base"
          >
            <span className="block">Contact</span>
          </a>

          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Demander un devis
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}