"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProfileStats = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const profileImageRef = useRef(null);
  const statsGridRef = useRef(null);
  const floatingStat1Ref = useRef(null);
  const floatingStat2Ref = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(leftContentRef.current.children, {
        opacity: 0,
        y: 50,
      });

      gsap.set(profileImageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: 20,
      });

      gsap.set([floatingStat1Ref.current, floatingStat2Ref.current], {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(statsGridRef.current.children, {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Left content animation
      tl.to(leftContentRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
        // Profile image animation
        .to(
          profileImageRef.current,
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        )
        // Floating stats animation
        .to(
          [floatingStat1Ref.current, floatingStat2Ref.current],
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        // Stats grid animation
        .to(
          statsGridRef.current.children,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      // Continuous floating animations
      gsap.to(floatingStat1Ref.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(floatingStat2Ref.current, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // Profile image hover effect
      const profileContainer = profileImageRef.current;
      profileContainer.addEventListener("mouseenter", () => {
        gsap.to(profileContainer, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      profileContainer.addEventListener("mouseleave", () => {
        gsap.to(profileContainer, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      y: -5,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleStatHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -10,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleStatLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  return (
    <section ref={sectionRef} className="py-16" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight">
                Hi, I'm Mahi.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Full Stack Web Developer
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
                I specialize in building exceptional digital experiences.
                Currently, I'm focused on creating accessible, human-centered
                products using React, Node.js, and modern UI frameworks.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold btn-glow transition-all"
                onMouseEnter={(e) =>
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })
                }
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })
                }
              >
                <Download size={18} />
                Download Resume
              </button>

              {/* Social Icons */}
              <div ref={socialIconsRef} className="flex gap-3">
                <a
                  className="flex items-center justify-center w-12 h-12 rounded-lg glass-card hover:bg-primary/10 text-slate-600 dark:text-slate-300 hover:text-primary transition-all duration-300"
                  href="https://github.com/mahi8026"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Github size={20} />
                </a>
                <a
                  className="flex items-center justify-center w-12 h-12 rounded-lg glass-card hover:bg-primary/10 text-slate-600 dark:text-slate-300 hover:text-primary transition-all duration-300"
                  href="https://www.linkedin.com/in/mahimrahman-dev/"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  className="flex items-center justify-center w-12 h-12 rounded-lg glass-card hover:bg-primary/10 text-slate-600 dark:text-slate-300 hover:text-primary transition-all duration-300"
                  href="https://mail.google.com/mail/u/0/#inbox"
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialLeave}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Tech Stack Label */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                Tech Stack
              </p>
            </div>
          </div>

          {/* Right Side - Profile Image with Stats */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Background Decorative Shapes */}
              <div className="absolute inset-4 bg-gradient-to-tr from-teal-400/15 to-transparent rounded-[2rem] transform rotate-3 z-0"></div>
              <div className="absolute inset-4 glass-card rounded-[2rem] transform -rotate-2 z-0"></div>

              {/* Main Profile Container */}
              <div
                ref={profileImageRef}
                className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-700/50 bg-slate-800 cursor-pointer"
              >
                <Image
                  src="/images/Gemini_Generated_Image_hk4flnhk4flnhk4f.png"
                  alt="Mahi - Full Stack Developer"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Stats Cards */}
              <div
                ref={floatingStat1Ref}
                className="absolute -left-4 top-10 z-20 glass-card p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400">
                  <span className="text-lg">💼</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Experience
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    6+ Months
                  </p>
                </div>
              </div>

              <div
                ref={floatingStat2Ref}
                className="absolute -right-4 bottom-10 z-20 glass-card p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                  <span className="text-lg">✅</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Projects Done
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    20+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div
          ref={statsGridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "20+", label: "Projects Completed" },
            { number: "6+", label: "Month Experience" },
            { number: "5+", label: "Happy Clients" },
            { number: "99%", label: "Success Rate" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 rounded-xl text-center cursor-pointer"
              onMouseEnter={handleStatHover}
              onMouseLeave={handleStatLeave}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileStats;
