"use client";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Sparkles, LayoutGrid, Users, Bell, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const floatA: Variants = {
  animate: {
    y: [0, -14, 0],
    rotate: [0, 1, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};
const floatB: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
  },
};
const floatC: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
  },
};

/* ── Task card data ── */
const tasks = [
  { label: "Design review", tag: "UI", color: "#7c3aed", done: true },
  { label: "API integration", tag: "Dev", color: "#4f46e5", done: true },
  { label: "Write docs", tag: "Content", color: "#0891b2", done: false },
  { label: "QA testing", tag: "QA", color: "#059669", done: false },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="noise-overlay absolute inset-0" />

      {/* Purple orb */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left copy ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AI-Powered Project Management
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.08] font-bold font-display text-text tracking-tight"
            >
              Project Management{" "}
              <span className="gradient-text">Built for Teams</span>
              <br />That Move Fast.
            </motion.h1>

            <motion.p variants={item} className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Replace scattered tools with one modern platform. Organise tasks, collaborate in real time, automate
              workflows with AI, and track progress effortlessly.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button size="lg" glow magnetic className="group animate-pulse-glow">
                Start Free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary" magnetic className="gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play size={12} fill="currentColor" className="text-primary ml-0.5" />
                </span>
                Watch Demo
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-5 pt-2">
              {["No credit card", "Free 14-day trial", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right dashboard mockup ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full max-w-[500px] rounded-[28px] bg-surface border border-border shadow-[0_32px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-surface-2/50">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
                    <LayoutGrid size={12} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-text">Sprint 24 — Board</span>
                </div>
                <div className="flex items-center gap-2">
                  {["#7c3aed", "#4f46e5", "#0891b2"].map((c, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-surface"
                      style={{ background: c, marginLeft: i ? -8 : 0 }}
                    />
                  ))}
                  <span className="text-xs text-muted ml-1">+5</span>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="p-4 grid grid-cols-3 gap-3 bg-surface-2/20">
                {["To Do", "In Progress", "Done"].map((col, ci) => (
                  <div key={col} className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: ci === 0 ? "#71717a" : ci === 1 ? "#7c3aed" : "#059669",
                        }}
                      />
                      <span className="text-[10px] font-semibold text-muted uppercase tracking-wide">
                        {col}
                      </span>
                    </div>
                    {tasks
                      .filter((_, ti) =>
                        ci === 0 ? ti >= 2 : ci === 1 ? ti === 1 : ti === 0,
                      )
                      .map((t, ti) => (
                        <motion.div
                          key={ti}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + ti * 0.15 }}
                          className="bg-surface rounded-xl p-3 border border-border shadow-sm"
                        >
                          <p className="text-[11px] font-medium text-text leading-snug mb-2">
                            {t.label}
                          </p>
                          <span
                            className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: t.color + "20",
                              color: t.color,
                            }}
                          >
                            {t.tag}
                          </span>
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>

              {/* Bottom AI bar */}
              <div className="px-5 py-3 bg-primary/5 border-t border-border/50 flex items-center gap-3">
                <Sparkles size={14} className="text-primary shrink-0" />
                <p className="text-[11px] text-primary font-medium">
                  AI: 3 tasks overdue — want me to reschedule?
                </p>
                <span className="ml-auto text-[11px] text-primary font-bold cursor-pointer hover:underline">
                  Yes →
                </span>
              </div>
            </motion.div>

            {/* Floating widget: Notifications */}
            <motion.div
              variants={floatA}
              animate="animate"
              className="absolute -top-4 -left-6 md:-left-10 glass rounded-2xl p-3.5 shadow-lg w-48 z-20"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <Bell size={14} className="text-primary" />
                <span className="text-[11px] font-bold text-text">3 new updates</span>
              </div>
              {["Task completed ✓", "Comment from Sarah", "Deadline tomorrow"].map((n, i) => (
                <p key={i} className="text-[10px] text-text-secondary py-1 border-t border-border/40">
                  {n}
                </p>
              ))}
            </motion.div>

            {/* Floating widget: Stats */}
            <motion.div
              variants={floatB}
              animate="animate"
              className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-2xl p-4 shadow-lg w-44 z-20"
            >
              <TrendingUp size={16} className="text-primary mb-1.5" />
              <p className="text-[10px] text-muted uppercase font-semibold tracking-wider">Sprint progress</p>
              <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <p className="text-xs font-bold text-text mt-1.5">72% complete</p>
            </motion.div>

            {/* Floating widget: Team activity */}
            <motion.div
              variants={floatC}
              animate="animate"
              className="absolute -top-2 -right-4 md:-right-8 glass rounded-2xl p-3.5 shadow-lg w-40 z-20"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <Users size={13} className="text-accent" />
                <span className="text-[11px] font-bold text-text">Active now</span>
              </div>
              <div className="flex -space-x-2">
                {["#7c3aed", "#4f46e5", "#0891b2", "#059669"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-surface text-[9px] font-bold flex items-center justify-center text-white"
                    style={{ background: c }}
                  >
                    {["SC", "MR", "AO", "JK"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted mt-1.5">4 editing now</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
