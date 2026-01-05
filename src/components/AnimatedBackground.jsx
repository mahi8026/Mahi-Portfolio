"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 60 + 160; // Teal to cyan range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Slight color shift
        this.hue += 0.1;
        if (this.hue > 220) this.hue = 160;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${this.hue}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
            ctx.strokeStyle = "#14b8a6";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // GSAP animations for additional elements
    const ctx2 = gsap.context(() => {
      // Floating orbs animation
      gsap.to(".floating-orb", {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      // Pulsing effect
      gsap.to(".pulse-element", {
        scale: "random(0.8, 1.2)",
        opacity: "random(0.3, 0.8)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      });

      // Rotating elements
      gsap.to(".rotate-element", {
        rotation: 360,
        duration: "random(10, 20)",
        repeat: -1,
        ease: "none",
        stagger: 1,
      });
    }, containerRef);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ctx2.revert();
    };
  }, [isClient]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Canvas for particle system */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Additional GSAP animated elements */}
      <div className="floating-orb absolute top-[15%] left-[8%] w-4 h-4 bg-teal-400/40 rounded-full blur-sm" />
      <div className="floating-orb absolute top-[25%] right-[12%] w-3 h-3 bg-cyan-400/50 rounded-full blur-sm" />
      <div className="floating-orb absolute bottom-[20%] left-[15%] w-5 h-5 bg-purple-400/30 rounded-full blur-sm" />
      <div className="floating-orb absolute bottom-[35%] right-[8%] w-2 h-2 bg-teal-300/60 rounded-full blur-sm" />
      <div className="floating-orb absolute top-[45%] left-[25%] w-3 h-3 bg-cyan-300/40 rounded-full blur-sm" />

      {/* Pulsing geometric shapes */}
      <div className="pulse-element absolute top-[30%] right-[25%] w-8 h-8 border border-teal-400/20 rotate-45" />
      <div className="pulse-element absolute bottom-[40%] left-[30%] w-6 h-6 border border-cyan-400/25 rounded-full" />
      <div className="pulse-element absolute top-[60%] right-[35%] w-10 h-10 border border-purple-400/15 rotate-12" />

      {/* Rotating elements */}
      <div className="rotate-element absolute top-[20%] left-[40%] w-12 h-12 border-2 border-teal-400/10 rounded-full" />
      <div className="rotate-element absolute bottom-[25%] right-[40%] w-16 h-16 border border-cyan-400/8 rotate-45" />
      <div className="rotate-element absolute top-[70%] left-[60%] w-8 h-8 border-2 border-purple-400/12 rounded-lg" />

      {/* Morphing shapes */}
      <div className="absolute top-[50%] left-[70%] w-20 h-20 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-[60%] left-[10%] w-24 h-24 bg-gradient-to-r from-purple-400/4 to-pink-400/4 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default AnimatedBackground;
