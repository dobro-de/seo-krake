"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wraps a hero section with a subtle parallax background layer.
 * Place decorative elements (orbs, gradients) as children — they shift at 40%
 * of the scroll speed, creating a subtle depth effect.
 */
export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Move background at 30% scroll speed (subtle effect)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="parallax-hero-bg"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
    >
      <motion.div
        style={{ y, position: "absolute", inset: "-20% 0", willChange: "transform" }}
        className="parallax-hero-layer"
      >
        {/* Radial gradient orb — top center */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(250,239,112,0.06) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
        {/* Secondary orb — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: "400px",
            height: "300px",
            background:
              "radial-gradient(ellipse at center, rgba(249,115,22,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </div>
  );
}
