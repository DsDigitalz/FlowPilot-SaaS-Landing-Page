"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TRUST_LOGOS, STATS } from "@/constants/data";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stat_config = [
  { raw: 50, suffix: "K+", label: "Teams" },
  { raw: 99.9, suffix: "%", label: "Uptime", display: "99.9%" },
  { raw: 5, suffix: "M+", label: "Tasks Completed" },
  { raw: 120, suffix: "+", label: "Countries" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 border-y border-border bg-surface-2/40" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-10">
        {/* Tagline */}
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center text-sm font-semibold text-muted uppercase tracking-[0.2em]"
        >
          Trusted by innovative teams worldwide
        </motion.p>

        {/* Logo row */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {TRUST_LOGOS.map((name) => (
            <motion.span
              key={name}
              variants={fadeUp}
              className="text-muted/60 font-bold text-sm md:text-base tracking-tight hover:text-text transition-colors cursor-default uppercase"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4"
        >
          {stat_config.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center flex flex-col gap-1.5"
            >
              <span className="text-3xl md:text-4xl font-black font-display gradient-text">
                {s.display ? s.display : <CountUp target={s.raw} suffix={s.suffix} />}
              </span>
              <span className="text-sm text-muted font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
