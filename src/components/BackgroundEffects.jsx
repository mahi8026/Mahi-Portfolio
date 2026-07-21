"use client";

import { useEffect, useRef } from "react";
import { useIsClient } from "@/hooks/useIsClient";

const PARTICLE_COUNT = 30;

const BackgroundEffects = () => {
  const isClient = useIsClient();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let rafId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.15,
      hue: Math.random() * 60 + 160,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = `hsl(${p.hue}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = dx * dx + dy * dy;
          if (dist < 10000) {
            ctx.save();
            ctx.globalAlpha = ((100 - Math.sqrt(dist)) / 100) * 0.08;
            ctx.strokeStyle = "#14b8a6";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      <div className="absolute top-[15%] left-[8%] w-4 h-4 bg-teal-400/30 rounded-full blur-sm animate-float-slow" />
      <div className="absolute top-[25%] right-[12%] w-3 h-3 bg-cyan-400/40 rounded-full blur-sm animate-float-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[20%] left-[15%] w-5 h-5 bg-purple-400/20 rounded-full blur-sm animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[35%] right-[8%] w-2 h-2 bg-teal-300/50 rounded-full blur-sm animate-float-slow" style={{ animationDelay: "0.5s" }} />

      <div className="absolute top-[30%] right-[25%] w-8 h-8 border border-teal-400/15 rotate-45 animate-float-slow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-[40%] left-[30%] w-6 h-6 border border-cyan-400/20 rounded-full animate-float-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[60%] right-[35%] w-10 h-10 border border-purple-400/10 rotate-12 animate-float-slow" style={{ animationDelay: "0.8s" }} />

      <div className="absolute top-[20%] left-[40%] w-12 h-12 border-2 border-teal-400/8 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-[25%] right-[40%] w-16 h-16 border border-cyan-400/6 rotate-45 animate-rotate-slow" style={{ animationDuration: "25s" }} />

      <div className="absolute top-[50%] left-[70%] w-20 h-20 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-[60%] left-[10%] w-24 h-24 bg-gradient-to-r from-purple-400/4 to-pink-400/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="absolute top-[10%] right-[20%] w-40 h-40 bg-gradient-to-r from-teal-400/6 to-cyan-500/6 rounded-full blur-xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-400/8 rounded-full blur-[120px] animate-drift" />
      <div className="absolute bottom-[5%] left-[-15%] w-[700px] h-[700px] bg-cyan-500/6 rounded-full blur-[140px] animate-drift" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] animate-drift" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] bg-teal-300/6 rounded-full blur-[90px] animate-drift" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default BackgroundEffects;
