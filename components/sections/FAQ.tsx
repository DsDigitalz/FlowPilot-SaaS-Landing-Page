"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FAQ as FAQ_DATA } from "@/constants/data";
import { Accordion } from "@/components/ui/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MessageSquare, Clock, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Setup time", value: "< 5 min", color: "#7c3aed" },
  {
    icon: Shield,
    label: "Compliance",
    value: "SOC 2 & GDPR",
    color: "#4f46e5",
  },
  {
    icon: MessageSquare,
    label: "Support SLA",
    value: "< 2 hours",
    color: "#0891b2",
  },
  { icon: Zap, label: "Uptime SLA", value: "99.9%", color: "#059669" },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="faq"
      className="lg:py-24 py-16 relative overflow-x-hidden"
      ref={ref}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16"
        >
          <SectionTitle
            badge="FAQ"
            title="Frequently"
            titleHighlight="asked questions."
            description="Everything you need to know before getting started. Can't find what you're looking for? Chat with our team."
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: highlights panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="rounded-[28px] border border-border bg-surface p-6 flex flex-col gap-5 shadow-sm">
              <p className="text-xs font-bold text-muted uppercase tracking-widest">
                At a glance
              </p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map(({ icon: Icon, label, value, color }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 p-4 rounded-2xl border border-border bg-surface-2/50 hover:border-primary/20 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: color + "18" }}
                    >
                      <Icon size={15} style={{ color }} />
                    </div>
                    <p className="text-base font-black text-text leading-none">
                      {value}
                    </p>
                    <p className="text-[11px] text-muted font-medium">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Still have questions CTA */}
            <div className="rounded-[24px] border border-primary/20 bg-primary/5 p-6 flex flex-col gap-3">
              <MessageSquare size={20} className="text-primary" />
              <p className="text-sm font-bold text-text">
                Still have questions?
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Our support team replies within 2 hours, even on weekends.
              </p>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Start a conversation →
              </a>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="rounded-[28px] border border-border bg-surface p-2 shadow-sm">
              <Accordion items={FAQ_DATA} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
