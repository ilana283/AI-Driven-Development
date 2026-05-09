import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "../site";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-full flex-1 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <header className="sticky top-0 z-10 border-b border-zinc-200/90 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-3 text-zinc-900 dark:text-zinc-100"
            title={site.siteTitle}
          >
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              className="h-10 w-auto max-w-[min(220px,55vw)] shrink-0 object-contain object-left"
              priority
            />
            <span className="rounded-md border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-800 dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-200">
              {site.brandTag}
            </span>
            <span className="sr-only">{site.siteTitle}</span>
          </Link>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 transition hover:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-10 sm:pt-14">{children}</main>

      <footer className="border-t border-zinc-200/90 bg-white/80 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {site.siteTitle}
        </p>
      </footer>
    </div>
  );
}

