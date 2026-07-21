"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { prefersReducedMotion } from "@/utils/performance";

const ConstellationEffects = () => {
  const [isClient, setIsClient] = useState(false);
  const [stars, setStars] = useState([]);
  const [spiralPoints, setSpiralPoints] = useState([]);

  useEffect(() => {
    setIsClient(true);

    if (prefersReducedMotion()) return;

    const generatedStars = [...Array(4)].map((_, i) => ({
      id: i,
      left: 20 + i * 10,
      top: 15 + Math.sin(i) * 20,
      delay: i * 0.3,
    }));

    const generatedSpiralPoints = [...Array(3)].map((_, i) => ({
      id: i,
      left: 50 + Math.cos((i * 60 * Math.PI) / 180) * (20 + i * 5),
      top: 50 + Math.sin((i * 60 * Math.PI) / 180) * (20 + i * 5),
      delay: i * 0.5,
    }));

    setStars(generatedStars);
    setSpiralPoints(generatedSpiralPoints);
  }, []);

  if (!isClient || prefersReducedMotion()) {
    return null;
  }

  return (
    <>
      {/* Constellation Effect */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute w-2 h-2 bg-teal-400/60 rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Spiral Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {spiralPoints.map((point) => (
          <motion.div
            key={`spiral-${point.id}`}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${point.left}%`,
              top: `${point.top}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: point.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default ConstellationEffects;
