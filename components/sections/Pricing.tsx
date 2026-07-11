"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { PRICING } from "@/constants/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="lg:py-24 py-16 overflow-x-hidden"
      ref={ref}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-10"
          >
            <SectionTitle
              badge="Pricing"
              title="Simple,"
              titleHighlight="transparent pricing."
              description="Start free. Upgrade when your team needs more power. No hidden fees, no nasty surprises."
            />
          </motion.div>

          {/* Toggle */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <span
              className={`text-sm font-medium ${!yearly ? "text-text" : "text-muted"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${yearly ? "bg-primary" : "bg-border"}`}
            >
              <motion.span
                layout
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm"
                animate={{ left: yearly ? "calc(100% - 22px)" : "2px" }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            </button>
            <span
              className={`text-sm font-medium flex items-center gap-1.5 ${yearly ? "text-text" : "text-muted"}`}
            >
              Annually
              <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                Save 20%
              </span>
            </span>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PRICING.map((plan) => {
              const price =
                plan.price === null
                  ? "Custom"
                  : yearly && plan.price > 0
                    ? `$${Math.round(plan.price * 0.8)}`
                    : plan.price === 0
                      ? "Free"
                      : `$${plan.price}`;

              return (
                <motion.div
                  key={plan.name}
                  variants={card}
                  whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                  className={`relative flex flex-col gap-6 rounded-[24px] p-7 border ${
                    plan.popular
                      ? "bg-primary text-white border-primary shadow-[0_24px_60px_rgba(124,58,237,0.35)]"
                      : "bg-surface border-border hover:border-primary/30"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5">
                    <h3
                      className={`font-bold text-xl font-display ${plan.popular ? "text-white" : "text-text"}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${plan.popular ? "text-white/70" : "text-text-secondary"}`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-black font-display ${plan.popular ? "text-white" : "text-text"}`}
                    >
                      {price}
                    </span>
                    {plan.price !== null && plan.price > 0 && (
                      <span
                        className={`text-sm ${plan.popular ? "text-white/60" : "text-muted"}`}
                      >
                        /mo{yearly ? " billed annually" : ""}
                      </span>
                    )}
                  </div>

                  <ul
                    className="flex flex-col gap-3 py-6 border-t border-b"
                    style={{
                      borderColor: plan.popular
                        ? "rgba(255,255,255,0.2)"
                        : undefined,
                    }}
                  >
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}
                        >
                          <Check
                            size={10}
                            className={
                              plan.popular ? "text-white" : "text-primary"
                            }
                            strokeWidth={3}
                          />
                        </div>
                        <span
                          className={`text-sm ${plan.popular ? "text-white/90" : "text-text-secondary"}`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "secondary" : "outline"}
                    size="md"
                    className={`w-full justify-center ${plan.popular ? "bg-white text-black hover:bg-white/90 border-transparent" : ""}`}
                    magnetic
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
