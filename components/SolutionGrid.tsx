"use client";

import { motion } from "framer-motion";
import StaggerGrid, { staggerItemVariants } from "./StaggerGrid";

interface Loesung {
  icon: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}

interface SolutionGridProps {
  loesungen: Loesung[];
}

export default function SolutionGrid({ loesungen }: SolutionGridProps) {
  return (
    <StaggerGrid className="branche-solutions-grid">
      {loesungen.map((l, i) => (
        <motion.div
          key={i}
          className="branche-solution-card"
          variants={staggerItemVariants}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="branche-sol-icon" dangerouslySetInnerHTML={{ __html: l.icon }} />
          <h3 className="branche-sol-title">{l.title}</h3>
          <p className="branche-sol-desc">{l.desc}</p>
          <div className="branche-sol-stat">
            <span className="branche-sol-val">{l.stat}</span>
            <span className="branche-sol-lbl">{l.statLabel}</span>
          </div>
        </motion.div>
      ))}
    </StaggerGrid>
  );
}
