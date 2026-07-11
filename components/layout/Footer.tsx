"use client";
import { useState } from "react";
import { Zap, Send, ArrowRight } from "lucide-react";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/ui/BrandIcons";

const cols = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Roadmap", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Guides", "Community", "API Reference"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security", "Cookie Policy"],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border bg-surface relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-accent/4 blur-[100px] pointer-events-none" />

      {/* Newsletter strip */}
      <div className="relative border-b border-border/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Newsletter
            </p>
            <h3 className="text-xl md:text-2xl font-bold font-display text-text">
              Get tips on shipping faster.
            </h3>
            <p className="text-sm text-text-secondary max-w-sm">
              Product updates, team productivity tips, and AI guides. Delivered
              twice a month.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full md:w-auto items-stretch gap-0 max-w-sm"
          >
            {submitted ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold w-full justify-center">
                <Zap size={15} fill="currentColor" />
                You're on the list! 🎉
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-3 rounded-l-2xl bg-surface-2 border border-border border-r-0 text-sm text-text placeholder:text-muted outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-r-2xl bg-primary text-white text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shrink-0"
                >
                  <Send size={14} />
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main footer links */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-14 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-[0_4px_16px_rgba(124,58,237,0.35)] group-hover:shadow-[0_6px_24px_rgba(124,58,237,0.5)] transition-shadow">
                <Zap size={17} className="text-white" fill="white" />
              </div>
              <span className="font-bold font-display text-xl text-text">
                FlowPilot
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              The modern workspace where teams plan, collaborate, and ship
              faster with AI. Loved by 50,000+ teams worldwide.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[TwitterIcon, GithubIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-text hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-text">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-text transition-colors group flex items-center gap-1"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} FlowPilot Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted flex items-center gap-1.5">
            Made with
            <span className="text-primary">♥</span>
            for teams that move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
