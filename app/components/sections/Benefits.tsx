"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { BENEFITS } from "@/constants/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* Simple SVG illustration of connected nodes */
function TeamIllustration() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-square flex items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 bg-primary/8 rounded-full blur-[80px]" />

      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10" fill="none">
        {/* Connection lines */}
        {[
          [200, 200, 200, 70],
          [200, 200, 320, 280],
          [200, 200, 80, 280],
          [200, 70, 320, 280],
          [200, 70, 80, 280],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.2 }}
          />
        ))}

        {/* Nodes */}
        {[
          { cx: 200, cy: 200, r: 36, label: "You", color: "#7c3aed", delay: 0 },
          { cx: 200, cy: 70, r: 28, label: "AI", color: "#4f46e5", delay: 0.2 },
          { cx: 320, cy: 280, r: 28, label: "Team", color: "#0891b2", delay: 0.4 },
          { cx: 80, cy: 280, r: 28, label: "Data", color: "#059669", delay: 0.6 },
        ].map(({ cx, cy, r, label, color, delay }) => (
          <g key={label}>
            <motion.circle
              cx={cx} cy={cy} r={r}
              fill={color + "22"}
              stroke={color}
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <motion.circle
              cx={cx} cy={cy} r={r - 8}
              fill={color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: delay + 0.1 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize={11} fontWeight="bold">
              {label}
            </text>
          </g>
        ))}

        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating micro-cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-4 glass rounded-xl px-3 py-2 shadow-md"
      >
        <p className="text-[10px] font-bold text-text">🚀 Shipped on time</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-2 glass rounded-xl px-3 py-2 shadow-md"
      >
        <p className="text-[10px] font-bold text-text">⚡ 3× productivity</p>
      </motion.div>
    </div>
  );
}

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <TeamIllustration />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                badge="Why Teams Love Us"
                title="Why teams switch to"
                titleHighlight="FlowPilot."
                align="left"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors group"
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-text-secondary leading-snug">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
