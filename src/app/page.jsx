"use client";

// PERFORMANCE: Dynamic imports for code splitting
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileStats from "@/components/ProfileStats";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ErrorBoundary from "@/components/ErrorBoundary";

// PERFORMANCE: Lazy load heavy components
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="py-20 text-center text-white">Loading projects...</div>
  ),
  ssr: false,
});

const Education = dynamic(() => import("@/components/Education"), {
  loading: () => (
    <div className="py-20 text-center text-white">Loading education...</div>
  ),
  ssr: false,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="py-20 text-center text-white">Loading contact form...</div>
  ),
  ssr: false,
});

// PERFORMANCE: Lazy load animation components
const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground"),
  {
    ssr: false,
  },
);

const CreativeEffects = dynamic(() => import("@/components/CreativeEffects"), {
  ssr: false,
});

const MouseFollower = dynamic(() => import("@/components/MouseFollower"), {
  ssr: false,
});

const FloatingParticles = dynamic(
  () => import("@/components/FloatingParticles"),
  {
    ssr: false,
  },
);

const ConstellationEffects = dynamic(
  () => import("@/components/ConstellationEffects"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#0a0a0f]">
        {/* PERFORMANCE: Reduced animation layers for better performance */}
        <AnimatedBackground />
        <CreativeEffects />

        {/* OPTIMIZATION: Simplified background animations - removed redundant inline animations */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Main Gradient Orbs */}
          <motion.div
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[120px]"
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -60, 30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-[5%] left-[-15%] w-[700px] h-[700px] bg-cyan-500/8 rounded-full blur-[140px]"
            animate={{
              x: [0, -40, 30, 0],
              y: [0, 60, -40, 0],
              scale: [1, 0.9, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          <FloatingParticles />
          <ConstellationEffects />
        </div>

        <Navbar />
        <MouseFollower />

        <main className="layout-container flex grow flex-col relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 w-full">
          <Hero />
          <ProfileStats />
          <TechStack />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full py-8 mt-10 border-t border-slate-200 dark:border-slate-800 glass-nav">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              © {new Date().getFullYear()} Mahi Rahman. Built with Next.js &
              Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
