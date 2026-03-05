"use client";
import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // ─── Intersection Observer for fade-up ───────────────────────────────────
    const fadeEls = document.querySelectorAll<HTMLElement>(".fade-up");
    // Mark them hidden initially only if not yet visible
    fadeEls.forEach((el) => {
      el.classList.add("fade-up-hidden");
    });

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("fade-up-hidden");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    fadeEls.forEach((el) => fadeObserver.observe(el));

    // ─── Counter Animation ────────────────────────────────────────────────────
    const counterEls = document.querySelectorAll<HTMLElement>("[data-target]");

    const animateCounter = (el: HTMLElement) => {
      const target = parseInt(el.getAttribute("data-target") ?? "0", 10);
      const suffix = el.getAttribute("data-suffix") ?? "";
      if (!target) return;

      const duration = 1800;
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = `${current}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterEls.forEach((el) => counterObserver.observe(el));

    return () => {
      fadeObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
