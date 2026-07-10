"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { INTEGRATIONS } from "@/constants/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Plug } from "lucide-react";
import {
  SlackLogo,
  GitHubLogo,
  FigmaLogo,
  NotionLogo,
  GoogleDriveLogo,
  JiraLogo,
  DiscordLogo,
  ZapierLogo,
  TeamsLogo,
  DropboxLogo,
  ZoomLogo,
  GitLabLogo,
} from "@/components/ui/IntegrationLogos";

const logoMap = {
  Slack: SlackLogo,
  GitHub: GitHubLogo,
  Figma: FigmaLogo,
  Notion: NotionLogo,
  "Google Drive": GoogleDriveLogo,
  Jira: JiraLogo,
  Discord: DiscordLogo,
  Zapier: ZapierLogo,
  Teams: TeamsLogo,
  Dropbox: DropboxLogo,
  Zoom: ZoomLogo,
  GitLab: GitLabLogo,
};

/* Logo tile with real brand logo */
function IntegrationTile({ name, color }: { name: string; color: string }) {
  const LogoComponent = logoMap[name as keyof typeof logoMap];

  return (
    <div className="flex flex-col items-center gap-2.5 shrink-0 w-[120px]">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-white/10"
        style={{ background: color }}
      >
        {LogoComponent ? (
          <LogoComponent size={28} className="text-white" />
        ) : (
          <span className="text-base font-black">
            {name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-xs font-semibold text-text-secondary text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export function Integrations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const row1 = INTEGRATIONS.slice(0, 6);
  const row2 = INTEGRATIONS.slice(6);

  return (
    <section
      id="integrations"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-surface-2/20 pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle
            badge="Integrations"
            title="Works with every tool"
            titleHighlight="your team uses."
            description="One-click connects with 100+ apps. No dev time needed — FlowPilot slots into your existing workflow in minutes."
          />
        </motion.div>
      </div>

      {/* Marquee rows — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-6 relative z-10"
      >
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 → scroll left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
              <IntegrationTile key={i} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 → scroll right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-2"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          >
            {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
              <IntegrationTile key={i} {...item} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-[24px] border border-border bg-surface shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Plug size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-text">
                Need a custom integration?
              </p>
              <p className="text-xs text-text-secondary">
                Use our REST & GraphQL API to build anything. Full docs
                included.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            View API docs →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
