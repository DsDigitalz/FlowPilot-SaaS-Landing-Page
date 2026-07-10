"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface Item { q: string; a: string; }
interface Props { items: Item[]; }

export function Accordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`border-b border-border last:border-0 transition-colors ${
              isOpen ? "bg-primary/[0.03]" : ""
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group cursor-pointer"
            >
              <span
                className={`text-sm font-semibold transition-colors leading-relaxed ${
                  isOpen ? "text-primary" : "text-text group-hover:text-primary"
                }`}
              >
                {item.q}
              </span>
              <div
                className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  isOpen
                    ? "bg-primary border-primary text-white"
                    : "border-border text-muted group-hover:border-primary/40 group-hover:text-primary"
                }`}
              >
                {isOpen ? <Minus size={13} /> : <Plus size={13} />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
