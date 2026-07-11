"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingUp, Calendar, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const aiMessages = [
  {
    type: "ai",
    text: "I've analysed this sprint. 3 tasks are at risk of missing Friday's deadline.",
  },
  {
    type: "ai",
    text: "Suggested: reassign 'API integration' to Marcus — his calendar is clear tomorrow.",
  },
  {
    type: "user",
    text: "Do it. Also reschedule the design review to Thursday.",
  },
  {
    type: "ai",
    text: "Done! Sprint now looks on track. Estimated completion: Thursday 4 PM. 🎉",
  },
];

export function AISection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="lg:py-24 py-16 bg-surface-2/30 overflow-x-hidden"
      ref={ref}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-col gap-7"
          >
            <motion.div variants={fadeUp}>
              <SectionTitle
                badge="AI Project Manager"
                title="Meet your"
                titleHighlight="AI co-pilot."
                description="FlowPilot AI automatically prioritises work, summarises meetings, predicts deadlines, identifies blockers, and keeps your team moving — without any manual input."
                align="left"
                shimmer
              />
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Sparkles,
                  title: "Auto-prioritisation",
                  desc: "AI ranks your backlog by impact and urgency.",
                },
                {
                  icon: Calendar,
                  title: "Deadline prediction",
                  desc: "Predicts slippage before it happens.",
                },
                {
                  icon: TrendingUp,
                  title: "Meeting summaries",
                  desc: "Generates action items from transcripts.",
                },
                {
                  icon: ShieldCheck,
                  title: "Risk detection",
                  desc: "Flags blockers and capacity issues early.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 bg-surface rounded-2xl border border-border"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text">{title}</p>
                    <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button size="lg" glow magnetic className="group">
                Try AI Free
                <Sparkles
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: AI chat illustration */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/8 rounded-[32px] blur-[60px]" />

            <div className="relative rounded-[28px] border border-border bg-surface shadow-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-surface-2/50">
                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center animate-pulse-glow">
                  <Sparkles size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text">FlowPilot AI</p>
                  <p className="text-[10px] text-primary font-medium">
                    ● Active — analysing Sprint 24
                  </p>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="p-5 flex flex-col gap-3 min-h-[280px]">
                {aiMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.25, duration: 0.4 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.type === "ai"
                          ? "bg-surface-2 text-text rounded-tl-sm"
                          : "bg-primary text-white rounded-tr-sm"
                      }`}
                    >
                      {msg.type === "ai" && (
                        <span className="text-[10px] font-bold text-primary block mb-1">
                          AI
                        </span>
                      )}
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.6 }}
                  className="flex items-center gap-1.5 px-4 py-3 bg-surface-2 rounded-2xl rounded-tl-sm w-fit"
                >
                  {[0, 0.2, 0.4].map((d, i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-muted"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Input mock */}
              <div className="px-5 py-4 border-t border-border bg-surface-2/30 flex items-center gap-3">
                <div className="flex-1 h-9 rounded-xl bg-surface border border-border px-3 flex items-center">
                  <span className="text-xs text-muted">
                    Ask AI anything about your project...
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Sparkles size={14} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
