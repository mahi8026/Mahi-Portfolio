"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statusRef = useRef(null);
  const stackRef = useRef(null);
  const codeCardRef = useRef(null);
  const floatingCard1Ref = useRef(null);
  const floatingCard2Ref = useRef(null);
  const floatingCard3Ref = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          buttonsRef.current,
          statusRef.current,
          stackRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(codeCardRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
      });

      gsap.set(
        [
          floatingCard1Ref.current,
          floatingCard2Ref.current,
          floatingCard3Ref.current,
        ],
        {
          opacity: 0,
          scale: 0.5,
        }
      );

      // Main timeline
      const tl = gsap.timeline({ delay: 0.2 });

      // Status badge entrance
      tl.to(statusRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        // Title entrance with split text effect
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Subtitle entrance
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Buttons entrance
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        // Stack entrance
        .to(
          stackRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // Code card entrance
        .to(
          codeCardRef.current,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        // Floating cards entrance
        .to(
          floatingCard1Ref.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .to(
          floatingCard2Ref.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .to(
          floatingCard3Ref.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      // Continuous animations
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating animations for cards
      gsap.to(floatingCard1Ref.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatingCard2Ref.current, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      gsap.to(floatingCard3Ref.current, {
        y: -12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // Code card floating
      gsap.to(codeCardRef.current, {
        y: -10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax effect on scroll
      gsap.to(codeCardRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (e, scale = 1.05) => {
    gsap.to(e.currentTarget, {
      scale,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleButtonLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center gap-12 py-12 lg:py-24 min-h-screen"
    >
      {/* Left: Text Content */}
      <div className="flex flex-col gap-8 flex-1 w-full lg:w-1/2">
        {/* Status Chip */}
        <div ref={statusRef} className="flex items-start">
          <div className="inline-flex h-8 items-center gap-x-2 rounded-full bg-white/5 border border-white/10 pl-2 pr-4 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 text-xs font-medium tracking-wide uppercase">
              Available for new projects
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <h1
            ref={titleRef}
            className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Digital
            </span>{" "}
            Experiences.
          </h1>
          <p
            ref={subtitleRef}
            className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-xl"
          >
            I am a Full-Stack Architect building accessible, pixel-perfect, and
            performant web applications with{" "}
            <span className="text-white font-medium">MERN Stack</span>,{" "}
            <span className="text-white font-medium">Next.js</span>, and{" "}
            <span className="text-white font-medium">Tailwind CSS</span>.
          </p>
        </div>

        {/* CTAs */}
        <div ref={buttonsRef} className="flex flex-wrap gap-4 pt-2">
          <button
            className="flex items-center justify-center h-12 px-8 rounded-xl bg-primary hover:bg-primary-dark text-white text-base font-bold shadow-xl shadow-primary/20 transition-all transform"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            View Projects
          </button>
          <button
            className="flex items-center justify-center h-12 px-8 rounded-xl bg-transparent border border-white/20 hover:bg-white/5 text-white text-base font-bold transition-all hover:border-white/40 group"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <Download
              className="mr-2 group-hover:translate-y-0.5 transition-transform"
              size={20}
            />
            Download Resume
          </button>
        </div>

        {/* Trust/Social Proof */}
        <div
          ref={stackRef}
          className="flex items-center gap-4 pt-8 border-t border-white/5"
        >
          <span className="text-slate-500 text-sm font-medium">
            Core Stack:
          </span>
          <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-white text-2xl" title="React">
              ⚛️
            </span>
            <span className="text-white text-2xl" title="Database">
              🗄️
            </span>
            <span className="text-white text-2xl" title="Cloud">
              ☁️
            </span>
            <span className="text-white text-2xl" title="Security">
              🔒
            </span>
          </div>
        </div>
      </div>

      {/* Right: Visual/Abstract Representation */}
      <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end relative">
        {/* Decorative Background Glow */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-teal-400/20 to-cyan-500/15 rounded-full blur-[60px]"
        ></div>

        {/* Main Code Card Container */}
        <div
          ref={codeCardRef}
          className="relative w-full max-w-[500px] glass-card rounded-2xl shadow-2xl p-1 overflow-hidden"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs text-slate-500 font-mono">App.tsx</div>
          </div>

          {/* Abstract Code Content */}
          <div className="p-6 font-mono text-sm leading-relaxed relative bg-[#0d0d12]/80">
            <div className="flex gap-4">
              <div className="flex flex-col text-slate-700 text-right select-none">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="text-pink-400">
                  import <span className="text-white">React</span> from{" "}
                  <span className="text-green-400">'react'</span>;
                </div>
                <div className="text-pink-400">
                  const <span className="text-blue-400">Portfolio</span> ={" "}
                  <span className="text-yellow-300">()</span>{" "}
                  <span className="text-pink-400">=&gt;</span> {"{"}
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-pink-400">return</span> (
                </div>
                <div className="pl-8 text-blue-300">&lt;Hero</div>
                <div className="pl-12">
                  <span className="text-purple-300">title</span>=
                  <span className="text-green-400">"Full Stack Dev"</span>
                </div>
                <div className="pl-12">
                  <span className="text-purple-300">stack</span>={"{"}
                  <span className="text-yellow-300">[</span>
                  <span className="text-green-400">"MERN"</span>,{" "}
                  <span className="text-green-400">"Next.js"</span>
                  <span className="text-yellow-300">]</span>
                  {"}"}
                </div>
                <div className="pl-8 text-blue-300">/&gt;</div>
                <div className="pl-4 text-slate-300">);</div>
                <div className="text-slate-300">{"}"};</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tech Cards */}
        <div
          ref={floatingCard1Ref}
          className="absolute -right-4 top-10 glass-card p-3 rounded-xl flex items-center gap-3 shadow-lg shadow-black/50"
        >
          <span className="text-sky-400 text-[28px]">⚛️</span>
          <div>
            <p className="text-xs text-slate-400 font-medium">Library</p>
            <p className="text-sm text-white font-bold">React.js</p>
          </div>
        </div>

        <div
          ref={floatingCard2Ref}
          className="absolute -left-6 bottom-20 glass-card p-3 rounded-xl flex items-center gap-3 shadow-lg shadow-black/50"
        >
          <span className="text-green-500 text-[28px]">🟢</span>
          <div>
            <p className="text-xs text-slate-400 font-medium">Backend</p>
            <p className="text-sm text-white font-bold">Node.js</p>
          </div>
        </div>

        <div
          ref={floatingCard3Ref}
          className="absolute right-10 -bottom-6 glass-card p-3 rounded-xl flex items-center gap-3 shadow-lg shadow-black/50"
        >
          <span className="text-teal-400 text-[28px]">🎨</span>
          <div>
            <p className="text-xs text-slate-400 font-medium">Styling</p>
            <p className="text-sm text-white font-bold">Tailwind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
