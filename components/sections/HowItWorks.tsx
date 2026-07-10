"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Building2, Layout, Rocket, ChevronRight } from "lucide-react";
import { HOW_IT_WORKS } from "@/constants/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Layout, Rocket,
};

const COLORS = ["#7c3aed", "#4f46e5", "#0891b2"];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-surface-2/30 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <SectionTitle
              badge="How It Works"
              title="Up and running in"
              titleHighlight="three steps."
              description="FlowPilot is designed to get your team productive from the first day. No lengthy onboarding, no consultants needed."
            />
          </motion.div>

          <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+52px)] right-[calc(16.66%+52px)] h-[2px]">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #4f46e5, #0891b2)",
                }}
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
              {/* Arrow indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 2 }}
                className="absolute right-[calc(50%+8px)] top-1/2 -translate-y-1/2"
              >
                <ChevronRight size={14} className="text-secondary" />
              </motion.div>
            </div>

            {HOW_IT_WORKS.map(({ step, title, description, icon }, i) => {
              const Icon = ICONS[icon] ?? Rocket;
              const color = COLORS[i];
              return (
                <motion.div
                  key={step}
                  variants={fadeUp}
                  custom={i}
                  className="relative flex flex-col items-center text-center gap-5"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex flex-col items-center">
                    {/* Glowing ring */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center gap-1"
                        style={{
                          background: `radial-gradient(circle at 40% 40%, ${color}25, ${color}08)`,
                          border: `2px solid ${color}40`,
                          boxShadow: `0 0 32px ${color}20`,
                        }}
                      >
                        <Icon size={28} />
                        <span
                          className="text-[10px] font-black uppercase tracking-widest"
                          style={{ color: color + "cc" }}
                        >
                          Step {step}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 max-w-[280px]">
                    <h3 className="font-bold text-xl font-display text-text">{title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                  </div>

                  {/* Feature chip */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold border"
                    style={{
                      background: color + "10",
                      color: color,
                      borderColor: color + "25",
                    }}
                  >
                    {i === 0 && "Import from Jira, Notion & CSV"}
                    {i === 1 && "AI suggests your roadmap"}
                    {i === 2 && "Real-time progress tracking"}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
