"use client";

import { motion } from "framer-motion";
import StaggerGrid, { staggerItemVariants } from "./StaggerGrid";

interface Challenge {
  title: string;
  desc: string;
}

interface ChallengeGridProps {
  challenges: Challenge[];
}

export default function ChallengeGrid({ challenges }: ChallengeGridProps) {
  return (
    <StaggerGrid className="branche-challenges-grid">
      {challenges.map((c, i) => (
        <motion.div key={i} className="branche-challenge-card" variants={staggerItemVariants}>
          <span className="branche-num">0{i + 1}</span>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </motion.div>
      ))}
    </StaggerGrid>
  );
}
