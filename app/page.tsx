import * as React from "react";
import Link from "next/link";
import { site } from "./site";
import { Reveal } from "./components/Reveal";
import { SiteShell } from "./components/SiteShell";
import { Panel } from "./components/ui";

export default function Home() {
  return (
    <SiteShell>
      <section className="mb-10 sm:mb-12" aria-labelledby="hero-heading">
        <Reveal>
          <Panel className="border-l-4 border-l-sky-500 pl-6">
            <p className="mb-2 text-sm font-medium text-sky-800 dark:text-sky-300">{site.role}</p>
            <h1
              id="hero-heading"
              className="font-sans text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
            >
              {site.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {site.tagline}
            </p>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">{site.location}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
              <Link
                href="/about"
                className="rounded-xl bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-500"
              >
                About me
              </Link>
              <Link
                href="/projects"
                className="rounded-xl border border-zinc-200 bg-white/70 px-4 py-2 text-zinc-900 transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/70"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-zinc-200 bg-white/70 px-4 py-2 text-zinc-900 transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/70"
              >
                Contact
              </Link>
            </div>
          </Panel>
        </Reveal>
      </section>

      <section aria-labelledby="featured-projects" className="mb-10 sm:mb-12">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            id="featured-projects"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800 dark:text-sky-300"
          >
            Featured
          </h2>
          <Link href="/projects" className="text-sm text-zinc-600 hover:text-sky-700 dark:text-zinc-400">
            View all
          </Link>
        </div>
        <div className="mt-6 space-y-5">
          {site.projects.slice(0, 2).map((project) => (
            <Reveal key={project.name}>
              <Panel className="border-l-4 border-l-sky-500">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
                  {project.tech?.length ? (
                    <p className="shrink-0 font-mono text-xs text-sky-900/80 dark:text-sky-300/90">
                      {project.tech.join(" · ")}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">{project.description}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
