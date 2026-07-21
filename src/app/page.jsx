"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ErrorBoundary from "@/components/ErrorBoundary";
import BackgroundEffects from "@/components/BackgroundEffects";

const ProfileStats = dynamic(() => import("@/components/ProfileStats"), {
  ssr: false,
});

const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: false,
});

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

const MouseFollower = dynamic(() => import("@/components/MouseFollower"), {
  ssr: false,
});

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#0a0a0f]">
        <BackgroundEffects />

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
