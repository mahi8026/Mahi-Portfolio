"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { prefersReducedMotion } from "@/utils/performance";

const FloatingParticles = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);

    if (prefersReducedMotion()) return;

    const generatedParticles = [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 50 - 25,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));

    setParticles(generatedParticles);
  }, []);

  if (!isClient || prefersReducedMotion()) {
    return null;
  }

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-teal-400/40 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;
