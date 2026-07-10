"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Calendar, Bell, TrendingUp, CheckCircle2, Clock, BarChart3, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const tasks = [
  { label: "Redesign onboarding flow", assignee: "SC", priority: "High", tag: "Design", color: "#7c3aed", done: false },
  { label: "Set up CI/CD pipeline", assignee: "MR", priority: "Med", tag: "Dev", color: "#4f46e5", done: true },
  { label: "Write Q3 product spec", assignee: "AO", priority: "High", tag: "Strategy", color: "#0891b2", done: false },
  { label: "Customer interview round", assignee: "JK", priority: "Low", tag: "Research", color: "#059669", done: false },
];

const barData = [55, 70, 45, 80, 65, 90, 72];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="showcase" className="py-24 md:py-32 bg-surface-2/30" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="mb-14">
            <SectionTitle
              badge="Product Showcase"
              title="Your entire project"
              titleHighlight="in one view."
              description="A beautifully crafted workspace that brings tasks, deadlines, analytics, and AI together in a single coherent interface."
            />
          </motion.div>

          {/* Dashboard shell */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-[28px] border border-border bg-surface shadow-[0_40px_100px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Top bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border bg-surface-2/40">
              <div className="flex gap-1.5">
                {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
                  <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="flex-1 text-center text-xs text-muted font-mono">
                app.flowpilot.io / workspace / sprint-24
              </span>
              <div className="flex -space-x-1.5">
                {["#7c3aed", "#4f46e5", "#0891b2"].map((c, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border border-surface text-[8px] font-bold flex items-center justify-center text-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>

            {/* Body: sidebar + content */}
            <div className="flex min-h-[520px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-1 w-48 shrink-0 border-r border-border bg-surface-2/20 p-3">
                {[
                  { icon: BarChart3, label: "Overview", active: false },
                  { icon: CheckCircle2, label: "My Tasks", active: true },
                  { icon: Calendar, label: "Calendar", active: false },
                  { icon: TrendingUp, label: "Analytics", active: false },
                  { icon: Bell, label: "Notifications", active: false },
                  { icon: Clock, label: "Time Logs", active: false },
                ].map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      active
                        ? "bg-primary text-white shadow-sm"
                        : "text-text-secondary hover:bg-surface-2 hover:text-text"
                    }`}
                  >
                    <Icon size={14} />
                    {label}
                  </div>
                ))}

                <div className="mt-auto pt-4 border-t border-border mx-1">
                  <div className="flex items-center gap-2 px-2">
                    <Sparkles size={13} className="text-primary" />
                    <span className="text-[11px] text-primary font-semibold">AI Active</span>
                  </div>
                </div>
              </div>

              {/* Main area */}
              <div className="flex-1 p-5 flex flex-col gap-5 overflow-auto">
                {/* Top widgets row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Tasks Due Today", value: "8", color: "#7c3aed", icon: CheckCircle2 },
                    { label: "Sprint Progress", value: "72%", color: "#059669", icon: TrendingUp },
                    { label: "Hours Logged", value: "34h", color: "#0891b2", icon: Clock },
                    { label: "AI Suggestions", value: "5", color: "#d97706", icon: Sparkles },
                  ].map(({ label, value, color, icon: Icon }) => (
                    <div
                      key={label}
                      className="glass rounded-2xl p-4 flex flex-col gap-1.5"
                    >
                      <Icon size={14} style={{ color }} />
                      <span className="text-lg font-black text-text">{value}</span>
                      <span className="text-[10px] text-muted font-medium leading-tight">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Mid row: tasks + chart */}
                <div className="grid md:grid-cols-5 gap-4">
                  {/* Task list */}
                  <div className="md:col-span-3 bg-surface rounded-2xl border border-border p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-text">Today's Tasks</span>
                      <span className="text-xs text-primary font-semibold cursor-pointer hover:underline">
                        View all
                      </span>
                    </div>
                    {tasks.map((t, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-2 transition-colors"
                      >
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0`}
                          style={{ borderColor: t.done ? t.color : t.color + "60" }}
                        >
                          {t.done && (
                            <CheckCircle2 size={10} style={{ color: t.color }} fill={t.color} />
                          )}
                        </div>
                        <span className={`text-xs font-medium flex-1 ${t.done ? "line-through text-muted" : "text-text"}`}>
                          {t.label}
                        </span>
                        <div
                          className="w-5 h-5 rounded-full text-[8px] font-bold flex items-center justify-center text-white shrink-0"
                          style={{ background: t.color }}
                        >
                          {t.assignee}
                        </div>
                        <span
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: t.color + "18", color: t.color }}
                        >
                          {t.priority}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Weekly chart */}
                  <div className="md:col-span-2 bg-surface rounded-2xl border border-border p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-text">Weekly Output</span>
                      <span className="text-xs text-muted">This week</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-24 mt-auto">
                      {barData.map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-lg"
                          style={{ background: i === 5 ? "#7c3aed" : "#7c3aed30" }}
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${h}%` } : { height: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1.5">
                      {days.map((d, i) => (
                        <span key={i} className="flex-1 text-center text-[9px] text-muted">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Insight banner */}
                <div className="glass rounded-2xl p-4 flex items-center gap-3 border border-primary/20">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles size={16} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-text mb-0.5">AI Insight</p>
                    <p className="text-xs text-text-secondary">
                      Your team velocity is up 18% vs last sprint. At this pace, Sprint 24 will finish 2 days early.
                    </p>
                  </div>
                  <button className="text-xs text-primary font-semibold shrink-0 cursor-pointer hover:underline">
                    Details →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
