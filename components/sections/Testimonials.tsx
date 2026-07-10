"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[number] }) {
  return (
    <div className="flex flex-col gap-5 p-8 rounded-[28px] bg-surface border border-border w-[380px] shrink-0 hover:border-primary/30 hover:shadow-lg transition-all">
      <Quote size={28} style={{ color: t.color }} className="opacity-40" />
      <p className="text-text-secondary leading-relaxed text-sm flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={13} fill="#f59e0b" className="text-amber-400" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shadow-md"
          style={{ background: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-bold text-text">{t.name}</p>
          <p className="text-xs text-muted">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setIdx((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="py-24 md:py-32 bg-surface-2/30" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionTitle
            badge="Customer Stories"
            title="Loved by teams"
            titleHighlight="worldwide."
          />
        </motion.div>
      </div>

      {/* Desktop Marquee — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-surface-2/50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-surface-2/50 to-transparent" />

        <motion.div
          className="flex gap-6 py-4 px-6"
          animate={paused ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </motion.div>

      {/* Mobile carousel */}
      <div className="lg:hidden px-6">
        <div className="overflow-hidden rounded-[24px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.35 }}
            >
              <TestimonialCard t={TESTIMONIALS[idx]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-text hover:bg-surface-2 transition-all cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === idx ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-text hover:bg-surface-2 transition-all cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
