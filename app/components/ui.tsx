import type { ReactNode } from "react";

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-zinc-200/90 bg-white/90 p-5 shadow-sm dark:border-zinc-700/90 dark:bg-zinc-900/60 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800 dark:text-sky-300">
      {children}
    </h2>
  );
}

