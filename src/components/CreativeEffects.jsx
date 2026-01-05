"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CreativeEffects = () => {
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      // Matrix rain effect
      const createMatrixRain = () => {
        const characters = "01";
        const drops = [];

        for (let i = 0; i < 20; i++) {
          const drop = document.createElement("div");
          drop.className =
            "fixed text-teal-400/20 font-mono text-xs pointer-events-none z-0";
          drop.style.left = `${Math.random() * 100}%`;
          drop.style.top = "-20px";
          drop.textContent =
            characters[Math.floor(Math.random() * characters.length)];

          containerRef.current.appendChild(drop);

          gsap.to(drop, {
            y: window.innerHeight + 20,
            duration: Math.random() * 3 + 2,
            ease: "none",
            repeat: -1,
            delay: Math.random() * 2,
            onRepeat: () => {
              drop.textContent =
                characters[Math.floor(Math.random() * characters.length)];
              drop.style.left = `${Math.random() * 100}%`;
            },
          });
        }
      };

      // Floating geometric shapes
      const createFloatingShapes = () => {
        const shapes = ["circle", "square", "triangle"];

        for (let i = 0; i < 15; i++) {
          const shape = document.createElement("div");
          const shapeType = shapes[Math.floor(Math.random() * shapes.length)];

          shape.className = `fixed pointer-events-none z-0 opacity-10`;

          if (shapeType === "circle") {
            shape.className += " w-4 h-4 border border-teal-400 rounded-full";
          } else if (shapeType === "square") {
            shape.className += " w-3 h-3 border border-cyan-400 rotate-45";
          } else {
            shape.className +=
              " w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-purple-400";
          }

          shape.style.left = `${Math.random() * 100}%`;
          shape.style.top = `${Math.random() * 100}%`;

          containerRef.current.appendChild(shape);

          gsap.to(shape, {
            x: `random(-50, 50)`,
            y: `random(-50, 50)`,
            rotation: `random(0, 360)`,
            scale: `random(0.5, 1.5)`,
            duration: `random(5, 10)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      };

      // Energy waves
      const createEnergyWaves = () => {
        for (let i = 0; i < 5; i++) {
          const wave = document.createElement("div");
          wave.className =
            "fixed w-96 h-96 border border-teal-400/5 rounded-full pointer-events-none z-0";
          wave.style.left = "50%";
          wave.style.top = "50%";
          wave.style.transform = "translate(-50%, -50%)";

          containerRef.current.appendChild(wave);

          gsap.fromTo(
            wave,
            { scale: 0, opacity: 0.3 },
            {
              scale: 3,
              opacity: 0,
              duration: 4,
              repeat: -1,
              delay: i * 0.8,
              ease: "power2.out",
            }
          );
        }
      };

      // Constellation connections
      const createConstellation = () => {
        const stars = [];

        // Create stars
        for (let i = 0; i < 12; i++) {
          const star = document.createElement("div");
          star.className =
            "fixed w-1 h-1 bg-teal-400/40 rounded-full pointer-events-none z-0";
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;

          containerRef.current.appendChild(star);
          stars.push(star);

          gsap.to(star, {
            opacity: `random(0.2, 0.8)`,
            scale: `random(0.5, 1.5)`,
            duration: `random(2, 4)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      };

      // Particle burst on scroll
      const createScrollParticles = () => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          const scrollDelta = Math.abs(currentScrollY - lastScrollY);

          if (scrollDelta > 50) {
            for (let i = 0; i < 5; i++) {
              const particle = document.createElement("div");
              particle.className =
                "fixed w-1 h-1 bg-cyan-400/60 rounded-full pointer-events-none z-0";
              particle.style.left = `${Math.random() * 100}%`;
              particle.style.top = `${Math.random() * 100}%`;

              containerRef.current.appendChild(particle);

              gsap.fromTo(
                particle,
                { scale: 0, opacity: 1 },
                {
                  scale: 2,
                  opacity: 0,
                  x: `random(-100, 100)`,
                  y: `random(-100, 100)`,
                  duration: 1,
                  ease: "power2.out",
                  onComplete: () => particle.remove(),
                }
              );
            }
            lastScrollY = currentScrollY;
          }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      };

      // Initialize all effects
      createMatrixRain();
      createFloatingShapes();
      createEnergyWaves();
      createConstellation();
      const cleanupScroll = createScrollParticles();

      return cleanupScroll;
    }, containerRef);

    return () => ctx.revert();
  }, [isClient]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Aurora background */}
      <div className="absolute inset-0 animate-aurora opacity-5" />

      {/* Breathing light effect */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-400/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-400/4 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-3/4 left-1/2 w-24 h-24 bg-purple-400/6 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};

export default CreativeEffects;
