"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Home,
  User,
  Settings,
  Briefcase,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isClient, setIsClient] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);

  // Fix hydration error by ensuring client-side only rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Settings },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Initial navbar animation
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.2 }
      );

      // Logo animation
      gsap.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Nav items stagger animation
      if (navItemsRef.current) {
        gsap.fromTo(
          navItemsRef.current.children,
          { y: -30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.7,
          }
        );
      }
    }, navRef);

    return () => ctx.revert();
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    // Set up intersection observer for active section detection
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isClient]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    if (!isClient) return;

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }

    // Animate active indicator
    const activeItem = document.querySelector(`[data-nav="${sectionId}"]`);
    if (activeItem) {
      gsap.to(activeItem, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
  };

  const handleItemHover = (e) => {
    if (!isClient) return;
    gsap.to(e.currentTarget, {
      y: -3,
      scale: 1.05,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleItemLeave = (e) => {
    if (!isClient) return;
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  return (
    <header
      ref={navRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4"
    >
      {/* Enhanced Glassmorphism Navbar */}
      <nav className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl px-4 py-2 shadow-2xl shadow-black/40 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-purple-500/10 opacity-50"></div>

        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-30"></div>

        <div className="flex items-center justify-between relative z-10">
          {/* Enhanced Logo */}
          <div
            ref={logoRef}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative">
              {/* Logo background with enhanced glass effect */}
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-900/60 rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-500/30 relative overflow-hidden group-hover:shadow-teal-500/50 transition-all duration-300 backdrop-blur-xl border border-teal-400/20">
                {/* Inner glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-2xl"></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>

                {/* Custom SVG Logo */}
                <div className="relative z-10 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 100 100"
                    className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
                    fill="currentColor"
                  >
                    {/* Geometric M Logo based on your design */}
                    <path d="M15 20 L15 80 L25 80 L25 40 L35 50 L50 35 L65 50 L75 40 L75 80 L85 80 L85 20 L75 20 L50 45 L25 20 Z" />

                    {/* Additional geometric accents */}
                    <rect
                      x="12"
                      y="17"
                      width="8"
                      height="8"
                      rx="2"
                      opacity="0.6"
                    />
                    <rect
                      x="80"
                      y="17"
                      width="8"
                      height="8"
                      rx="2"
                      opacity="0.6"
                    />
                    <rect
                      x="46"
                      y="75"
                      width="8"
                      height="8"
                      rx="2"
                      opacity="0.4"
                    />
                  </svg>

                  {/* Animated accent dot */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-80"></div>
                </div>
              </div>
            </div>

            {/* Brand text with enhanced styling */}
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-tight bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                Mahi
              </span>
              <span className="text-teal-400 font-light text-xl">.Dev</span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div
            ref={navItemsRef}
            className="hidden lg:flex items-center gap-0 bg-white/5 backdrop-blur-xl rounded-2xl p-1 border border-white/10"
          >
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isClient && activeSection === item.id;

              return (
                <button
                  key={item.id}
                  data-nav={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={handleItemHover}
                  onMouseLeave={handleItemLeave}
                  className={`relative flex items-center gap-1 px-2 py-1.5 rounded-xl transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500/80 to-cyan-500/80 text-white shadow-lg shadow-teal-500/30 border border-white/20"
                      : "text-slate-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                  }`}
                >
                  {/* Button background glass effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}

                  {/* Active state glass reflection */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  )}

                  <IconComponent size={14} className="relative z-10" />
                  <span className="text-xs font-medium relative z-10">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Medium Screen Navigation (Icons Only) */}
          <div className="hidden md:flex lg:hidden items-center gap-0 bg-white/5 backdrop-blur-xl rounded-2xl p-1 border border-white/10">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isClient && activeSection === item.id;

              return (
                <button
                  key={item.id}
                  data-nav={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={handleItemHover}
                  onMouseLeave={handleItemLeave}
                  title={item.label}
                  className={`relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500/80 to-cyan-500/80 text-white shadow-lg shadow-teal-500/30 border border-white/20"
                      : "text-slate-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                  }`}
                >
                  {/* Button background glass effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}

                  {/* Active state glass reflection */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  )}

                  <IconComponent size={15} className="relative z-10" />
                </button>
              );
            })}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-slate-200 hover:text-white hover:bg-white/20 transition-all duration-300 relative overflow-hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Button glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-white/10 relative">
            {/* Mobile menu background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl"></div>

            <div className="grid grid-cols-3 gap-2 relative z-10">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = isClient && activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 overflow-hidden group ${
                      isActive
                        ? "bg-gradient-to-r from-teal-500/80 to-cyan-500/80 text-white border border-white/20"
                        : "text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Mobile button glass effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}

                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                    )}

                    <IconComponent size={16} className="relative z-10" />
                    <span className="text-xs font-medium relative z-10">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
