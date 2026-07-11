"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

const socialProof = [
  { avatar: "SC", color: "#7c3aed" },
  { avatar: "MR", color: "#4f46e5" },
  { avatar: "AO", color: "#0891b2" },
  { avatar: "JK", color: "#059669" },
  { avatar: "PT", color: "#d97706" },
];

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="lg:py-24 py-16 overflow-x-hidden" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] bg-primary px-8 py-16 md:px-16 md:py-20 text-center shadow-[0_40px_120px_rgba(124,58,237,0.45)]"
        >
          {/* Background geometry */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25) 0%, transparent 45%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.15) 0%, transparent 40%)",
            }}
          />
          <div className="absolute inset-0 grid-lines opacity-10" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -4, 0] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-12 right-16 w-32 h-32 rounded-full bg-white/5 blur-2xl"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase border border-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Start in under 60 seconds
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Ready to Build Faster?
            </h2>

            <p className="text-white/75 text-lg leading-relaxed max-w-lg">
              Join thousands of teams transforming how they plan and deliver
              projects. No setup, no consultants needed.
            </p>

            {/* Social proof avatars */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
              <div className="flex -space-x-2.5">
                {socialProof.map(({ avatar, color }, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center text-[11px] font-black text-white shadow-md"
                    style={{ background: color }}
                  >
                    {avatar}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#fbbf24"
                      className="text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-xs mt-0.5">
                  Loved by 50,000+ teams
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button
                variant="secondary"
                size="lg"
                magnetic
                className="bg-white text-primary hover:bg-white/90 border-transparent shadow-lg group"
              >
                Start Free Today
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                size="lg"
                magnetic
                className="bg-white/15 hover:bg-white/25 text-white border-white/30 border backdrop-blur-sm"
              >
                <Calendar size={18} />
                Book a Demo
              </Button>
            </div>

            <p className="text-white/50 text-sm mt-1">
              Free forever plan · No credit card required · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
