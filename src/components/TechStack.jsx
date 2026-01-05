"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TechStack = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const techChipsRef = useRef(null);

  const technologies = [
    { name: "MongoDB", icon: "🗄️" },
    { name: "Express", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(containerRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(techChipsRef.current.children, {
        opacity: 0,
        y: 20,
        scale: 0.8,
      });

      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      });

      // Container entrance
      tl.to(containerRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        // Title entrance
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Tech chips entrance with stagger
        .to(
          techChipsRef.current.children,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: {
              amount: 0.6,
              from: "center",
            },
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );

      // Continuous floating animation for the container
      gsap.to(containerRef.current, {
        y: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChipHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      y: -8,
      duration: 0.3,
      ease: "back.out(1.7)",
    });

    // Add a subtle glow effect
    gsap.to(e.currentTarget, {
      boxShadow: "0 10px 25px rgba(59, 43, 238, 0.3)",
      duration: 0.3,
    });
  };

  const handleChipLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });

    gsap.to(e.currentTarget, {
      boxShadow: "0 0 0 rgba(59, 43, 238, 0)",
      duration: 0.3,
    });
  };

  return (
    <section ref={sectionRef} className="w-full pb-10" id="techstack">
      <div
        ref={containerRef}
        className="glass-card rounded-2xl p-6 w-full overflow-hidden"
      >
        <p
          ref={titleRef}
          className="text-center text-slate-400 text-sm font-medium mb-6 uppercase tracking-widest"
        >
          Powering Next-Gen Applications With
        </p>
        <div
          ref={techChipsRef}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors pl-3 pr-4 cursor-pointer"
              onMouseEnter={handleChipHover}
              onMouseLeave={handleChipLeave}
            >
              <span className="text-white text-[20px]">{tech.icon}</span>
              <p className="text-white text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
