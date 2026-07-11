"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Kanban, Users, Clock, BarChart3, Zap } from "lucide-react";
import { FEATURES } from "@/constants/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ICONS: Record<
  string,
  React.ComponentType<{
    size?: number;
    className?: string;
    style?: React.CSSProperties;
  }>
> = {
  Sparkles,
  LayoutKanban: Kanban,
  Users,
  Clock,
  BarChart3,
  Zap,
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="features"
      className="lg:py-24 py-16 overflow-x-hidden"
      ref={ref}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        <SectionTitle
          badge="Everything You Need"
          title="The complete toolkit for"
          titleHighlight="modern teams."
          description="Six powerful modules that work together seamlessly — so your team can focus on building, not tool-switching."
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon] ?? Zap;
            return (
              <motion.div
                key={f.title}
                variants={card}
                className="group relative bg-surface border border-border rounded-[24px] p-7 flex flex-col gap-5 card-hover overflow-hidden cursor-default"
              >
                {/* hover gradient bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-[24px]"
                  style={{ background: f.color }}
                />
                {/* gradient top border line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: f.color + "18" }}
                >
                  <Icon size={22} style={{ color: f.color }} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg text-text font-display">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <span
                    className="text-sm font-semibold hover:underline cursor-pointer transition-colors"
                    style={{ color: f.color }}
                  >
                    Learn more →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
