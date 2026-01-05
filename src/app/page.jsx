"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileStats from "@/components/ProfileStats";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";
import MouseFollower from "@/components/MouseFollower";
import CreativeEffects from "@/components/CreativeEffects";
import FloatingParticles from "@/components/FloatingParticles";
import ConstellationEffects from "@/components/ConstellationEffects";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#0a0a0f]">
      {/* Multi-layered Animated Background */}
      <AnimatedBackground />
      <CreativeEffects />

      {/* Creative Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-32 h-32 border border-teal-400/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-[60%] right-[15%] w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-lg"
          animate={{
            rotate: [0, -180, 0],
            scale: [1, 0.7, 1.3, 1],
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[30%] left-[20%] w-16 h-16 border-2 border-purple-400/30 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.5, 0.5, 1],
            x: [0, 80, -40, 0],
            y: [0, -60, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Morphing Blob Shapes */}
        <motion.div
          className="absolute top-[10%] right-[20%] w-40 h-40 bg-gradient-to-r from-teal-400/8 to-cyan-500/8 rounded-full blur-xl"
          animate={{
            borderRadius: [
              "50% 50% 50% 50%",
              "60% 40% 60% 40%",
              "40% 60% 40% 60%",
              "50% 50% 50% 50%",
            ],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 90, 180, 360],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-gradient-to-r from-purple-500/6 to-pink-500/6 blur-2xl"
          animate={{
            borderRadius: [
              "30% 70% 70% 30%",
              "70% 30% 30% 70%",
              "50% 50% 80% 20%",
              "30% 70% 70% 30%",
            ],
            scale: [1, 0.7, 1.4, 1],
            rotate: [0, -120, 240, 360],
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pulsating Rings */}
        <motion.div
          className="absolute top-[40%] left-[5%] w-64 h-64 border border-teal-300/10 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[30%] w-48 h-48 border-2 border-cyan-400/15 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.1, 0.4],
            rotate: [0, -270, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Flowing Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M100,300 Q250,200 400,300 T700,300"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main Gradient Orbs (Enhanced) */}
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

        <motion.div
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 0.9, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] bg-teal-300/8 rounded-full blur-[90px]"
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -35, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Constellation and Spiral Effects */}
        <ConstellationEffects />
      </div>

      <Navbar />

      {/* Mouse Follower Effect */}
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

      {/* Simple Footer */}
      <footer className="relative z-10 w-full py-8 mt-10 border-t border-slate-200 dark:border-slate-800 glass-nav">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © 2023 Mahi. Built with Next.js .
          </p>
        </div>
      </footer>
    </div>
  );
}
