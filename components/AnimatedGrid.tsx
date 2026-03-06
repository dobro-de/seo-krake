"use client";
import { useEffect, useRef } from "react";

type Pulse = {
  axis: "h" | "v";
  lineIndex: number;
  pos: number;       // 0..1 along the line
  speed: number;     // normalized per ms
  size: number;      // gradient spread in px
  alpha: number;     // peak opacity
};

const CELL = 64;
const ACCENT = "249, 115, 22";
const PULSE_COUNT_H = 5;
const PULSE_COUNT_V = 5;

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    const makePulse = (axis: "h" | "v"): Pulse => {
      const hLines = Math.ceil(h / CELL) + 1;
      const vLines = Math.ceil(w / CELL) + 1;
      return {
        axis,
        lineIndex: axis === "h"
          ? Math.floor(Math.random() * hLines)
          : Math.floor(Math.random() * vLines),
        pos: Math.random(),
        speed: axis === "h"
          ? 0.00022 + Math.random() * 0.00018   // horizontal: left→right
          : 0.00015 + Math.random() * 0.00015,   // vertical: top→bottom
        size: 140 + Math.random() * 160,
        alpha: 0.28 + Math.random() * 0.18,
      };
    };

    const pulses: Pulse[] = [
      ...Array.from({ length: PULSE_COUNT_H }, () => makePulse("h")),
      ...Array.from({ length: PULSE_COUNT_V }, () => makePulse("v")),
    ];

    let lastTime = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(now - lastTime, 50); // cap delta to avoid jumps
      lastTime = now;

      ctx.clearRect(0, 0, w, h);

      const hLines = Math.ceil(h / CELL) + 1;
      const vLines = Math.ceil(w / CELL) + 1;

      // ── Base grid (very faint static lines) ──────────────────────────────
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${ACCENT}, 0.045)`;
      ctx.lineWidth = 1;

      for (let i = 0; i < hLines; i++) {
        const y = i * CELL;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      for (let j = 0; j < vLines; j++) {
        const x = j * CELL;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      ctx.stroke();

      // ── Animated gradient pulses ──────────────────────────────────────────
      for (const p of pulses) {
        p.pos += p.speed * dt;
        if (p.pos > 1.15) {
          // Reset to new random line when it exits the screen
          const newP = makePulse(p.axis);
          newP.pos = -0.1;
          Object.assign(p, newP);
        }

        ctx.lineWidth = 1;

        if (p.axis === "h") {
          const y = p.lineIndex * CELL;
          const cx = p.pos * w;
          const x0 = cx - p.size;
          const x1 = cx + p.size;
          const grad = ctx.createLinearGradient(x0, y, x1, y);
          grad.addColorStop(0,    `rgba(${ACCENT}, 0)`);
          grad.addColorStop(0.5,  `rgba(${ACCENT}, ${p.alpha})`);
          grad.addColorStop(1,    `rgba(${ACCENT}, 0)`);
          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.moveTo(x0, y);
          ctx.lineTo(x1, y);
          ctx.stroke();
        } else {
          const x = p.lineIndex * CELL;
          const cy = p.pos * h;
          const y0 = cy - p.size;
          const y1 = cy + p.size;
          const grad = ctx.createLinearGradient(x, y0, x, y1);
          grad.addColorStop(0,    `rgba(${ACCENT}, 0)`);
          grad.addColorStop(0.5,  `rgba(${ACCENT}, ${p.alpha})`);
          grad.addColorStop(1,    `rgba(${ACCENT}, 0)`);
          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.moveTo(x, y0);
          ctx.lineTo(x, y1);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
