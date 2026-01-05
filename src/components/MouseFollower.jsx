"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MouseFollower = () => {
  const followerRef = useRef(null);
  const trailRefs = useRef([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const follower = followerRef.current;
    const trails = trailRefs.current;

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;

      // Animate main follower
      gsap.to(follower, {
        x: mouseX - 10,
        y: mouseY - 10,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate trail elements with delay
      trails.forEach((trail, index) => {
        gsap.to(trail, {
          x: mouseX - 5,
          y: mouseY - 5,
          duration: 0.5 + index * 0.1,
          ease: "power2.out",
        });
      });

      // Create ripple effect on click
      if (e.type === "click") {
        const ripple = document.createElement("div");
        ripple.className =
          "fixed w-8 h-8 border-2 border-teal-400/50 rounded-full pointer-events-none z-50";
        ripple.style.left = `${mouseX - 16}px`;
        ripple.style.top = `${mouseY - 16}px`;
        document.body.appendChild(ripple);

        gsap.fromTo(
          ripple,
          { scale: 0, opacity: 1 },
          {
            scale: 3,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => ripple.remove(),
          }
        );
      }
    };

    const handleMouseStop = () => {
      if (isMoving) {
        isMoving = false;
        // Pulse effect when mouse stops
        gsap.to(follower, {
          scale: 1.5,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      }
    };

    let stopTimeout;
    const handleMouseMoveWithStop = (e) => {
      handleMouseMove(e);
      clearTimeout(stopTimeout);
      stopTimeout = setTimeout(handleMouseStop, 100);
    };

    document.addEventListener("mousemove", handleMouseMoveWithStop);
    document.addEventListener("click", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveWithStop);
      document.removeEventListener("click", handleMouseMove);
      clearTimeout(stopTimeout);
    };
  }, [isClient]);

  return (
    <>
      {/* Main follower */}
      <div
        ref={followerRef}
        className="fixed w-5 h-5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Trail elements */}
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
