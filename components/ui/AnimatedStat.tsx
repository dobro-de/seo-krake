"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  /** The display value string, e.g. "80.000+", "−80%", "24/7" */
  value: string;
  label: string;
}

/**
 * Parses a leading numeric portion from the value string and counts up to it.
 * Non-numeric values (like "24/7") are displayed as-is without animation.
 */
function parseNumeric(value: string): { prefix: string; num: number | null; suffix: string } {
  // Match optional leading sign/dash, then digits, then the rest
  const match = value.match(/^([−\-]?)(\d[\d.,]*)(.*)$/);
  if (!match) return { prefix: "", num: null, suffix: value };
  const prefix = match[1] === "−" ? "−" : match[1];
  const numStr = match[2].replace(/[.,]/g, "");
  const num = parseInt(numStr, 10);
  const suffix = match[3];
  return { prefix, num: isNaN(num) ? null : num, suffix };
}

function formatWithSeparators(n: number, template: string): string {
  // Detect German thousands separator (dot) vs plain
  if (template.includes(".")) {
    return n.toLocaleString("de-DE");
  }
  return String(n);
}

export default function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  const { prefix, num, suffix } = parseNumeric(value);

  useEffect(() => {
    if (num === null) {
      setDisplayed(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const duration = 1200;
          const steps = 40;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * num);
            setDisplayed(prefix + formatWithSeparators(current, value) + suffix);

            if (step >= steps) {
              clearInterval(timer);
              setDisplayed(value); // snap to exact original
            }
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, value, prefix, suffix, hasAnimated]);

  return (
    <div className="branche-hero-stat" ref={ref}>
      <span className="branche-hero-stat-val">{num !== null ? displayed : value}</span>
      <span className="branche-hero-stat-lbl">{label}</span>
    </div>
  );
}
