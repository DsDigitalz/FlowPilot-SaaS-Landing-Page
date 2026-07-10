import { cn } from "@/lib/utils";

interface Props {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  shimmer?: boolean;
}

export function SectionTitle({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
  shimmer = false,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] leading-tight font-bold font-display text-text tracking-tight max-w-3xl">
        {title}{" "}
        {titleHighlight && (
          <span className={shimmer ? "gradient-text-shimmer" : "gradient-text"}>
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
