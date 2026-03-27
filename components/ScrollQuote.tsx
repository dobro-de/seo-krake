"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollQuoteProps {
  quote: string;
  author?: string;
  className?: string;
}

export default function ScrollQuote({ quote, author, className }: ScrollQuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = quote.split(" ");

  return (
    <section ref={ref} className={`scroll-quote-section${className ? ` ${className}` : ""}`}>
      <div className="container">
        <div className="scroll-quote-inner">
          <span className="scroll-quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="scroll-quote-text" aria-label={quote}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  delay: i * 0.05,
                }}
                className="scroll-quote-word"
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>
          {author && (
            <motion.p
              className="scroll-quote-author"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: words.length * 0.05 + 0.1 }}
            >
              — {author}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
