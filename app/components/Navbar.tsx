"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-sm"
            : "bg-transparent py-5",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-[0_4px_12px_rgba(124,58,237,0.4)]">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-lg font-bold font-display text-text tracking-tight">
              FlowPilot
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-xl transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-text hover:bg-surface-2 transition-all cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#pricing"
              className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
            >
              Sign in
            </a>
            <Button size="sm" glow>
              Start Free →
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted cursor-pointer"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-xl transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="secondary" size="md" className="w-full justify-center">
                  Sign in
                </Button>
                <Button size="md" className="w-full justify-center">
                  Start Free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
