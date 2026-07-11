"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/data";
// import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggle } = useTheme();
  // const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const fn = () => setScrolled(window.scrollY > 24);
  //   window.addEventListener("scroll", fn, { passive: true });
  //   return () => window.removeEventListener("scroll", fn);
  // }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 py-3 md:py-4 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center">
              <Image
                src="/image.png"
                alt="FlowPilot Logo"
                width={70}
                height={70}
                className="rounded-2xl border-4 bg-linear-to-r from-purple-500 to-blue-500 "
              />
            </div>
            <span className="text-base sm:text-lg font-bold font-display text-text tracking-tight">
              FlowPilot
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-2 sm:px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-lg lg:rounded-xl transition-all whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg lg:rounded-xl border border-border flex items-center justify-center text-muted hover:text-text hover:bg-surface-2 transition-all cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#pricing"
              className="text-xs sm:text-sm font-medium text-text-secondary hover:text-text transition-colors hidden lg:block"
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
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted cursor-pointer hover:bg-surface-2 transition-all"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted cursor-pointer hover:bg-surface-2 transition-all"
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
            className="fixed inset-x-0 top-[56px] sm:top-[60px] z-40 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 sm:py-3 px-3 sm:px-4 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-lg lg:rounded-xl transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full justify-center text-sm"
                >
                  Sign in
                </Button>
                <Button size="md" className="w-full justify-center text-sm">
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
