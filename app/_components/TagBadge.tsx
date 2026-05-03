import type { ReactNode } from "react";

type TagBadgeProps = {
  children: ReactNode;
  variant?: "accent" | "dark" | "white" | "stone";
};

const styles: Record<NonNullable<TagBadgeProps["variant"]>, string> = {
  accent:
    "rounded border border-accent-200 text-accent-600 px-3 py-0.5 text-xs",
  dark: "rounded border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-100",
  white: "rounded border border-white/90 px-3 py-0.5 text-xs text-white",
  stone:
    "rounded-full border border-stone-200 bg-white px-3 py-0.5 text-xs text-stone-500",
};

export default function TagBadge({
  children,
  variant = "accent",
}: TagBadgeProps) {
  return <span className={styles[variant]}>{children}</span>;
}
