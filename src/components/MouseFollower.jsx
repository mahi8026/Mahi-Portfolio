"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsClient } from "@/hooks/useIsClient";

const MouseFollower = () => {
  const followerRef = useRef(null);
  const trailRefs = useRef([]);
  const isClient = useIsClient();
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    if (!isClient) return;

    const follower = followerRef.current;
    const trails = trailRefs.current;

    const animate = () => {
      const { x, y } = mousePos.current;

      gsap.set(follower, { x: x - 10, y: y - 10 });

      trails.forEach((trail, index) => {
        if (trail) {
          gsap.set(trail, {
            x: x - 5,
            y: y - 5,
          });
        }
      });

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    rafId.current = requestAnimationFrame(animate);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isClient]);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed w-5 h-5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className={`fixed w-${3 - i} h-${3 - i} bg-teal-400/${
            20 - i * 3
          } rounded-full pointer-events-none z-40 mix-blend-screen`}
          style={{ transform: "translate(-50%, -50%)" }}
        />
      ))}
    </>
  );
};

export default MouseFollower;
