"use client";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  glow?: boolean;
  asChild?: boolean;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_4px_24px_rgba(124,58,237,0.35)] hover:bg-primary/90 hover:shadow-[0_8px_32px_rgba(124,58,237,0.5)]",
  secondary:
    "bg-surface text-text border border-border hover:bg-surface-2 hover:border-primary/30",
  ghost: "text-text hover:bg-surface-2 hover:text-primary",
  outline:
    "border border-border text-text hover:border-primary hover:text-primary bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-xl gap-1.5",
  md: "h-11 px-6 text-sm font-semibold rounded-2xl gap-2",
  lg: "h-13 px-8 text-base font-semibold rounded-2xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  magnetic = false,
  glow = false,
  className,
  children,
  href,
  ...props
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18 });
  const sy = useSpring(my, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.3);
    my.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const base = cn(
    "relative inline-flex items-center justify-center select-none cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className,
  );

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-flex"
    >
      {glow && variant === "primary" && (
        <span className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl -z-10 scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      {/* @ts-expect-error dynamic tag */}
      <Tag ref={ref} href={href} className={base} {...props}>
        <span className="relative z-10 flex items-center gap-inherit">{children}</span>
      </Tag>
    </motion.div>
  );
}
