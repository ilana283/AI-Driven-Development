<<<<<<< Updated upstream
=======
import type { ReactNode } from "react";
>>>>>>> Stashed changes
import { site } from "./site";

/** Shared “card” panel: border, soft background, optional accent stripe like the Projects block */
function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
<<<<<<< Updated upstream
    <div className="min-h-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_55%)]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white/90 focus:px-3 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-white"
          >
            {site.name}
          </a>
          <nav className="hidden items-center gap-5 sm:flex">
=======
    <div
      className={`rounded-xl border border-zinc-200/90 bg-white/90 p-5 shadow-sm dark:border-zinc-700/90 dark:bg-zinc-900/60 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-sm font-semibold uppercase tracking-[0.2em] text-sky-800 dark:text-sky-300"
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="min-h-full flex-1 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
      <header className="sticky top-0 z-10 border-b border-zinc-200/90 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="font-semibold text-zinc-900 dark:text-zinc-100">
            {site.name}
          </a>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
>>>>>>> Stashed changes
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
<<<<<<< Updated upstream
                className="text-sm text-white/70 hover:text-white"
=======
                className="text-zinc-600 transition hover:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-300"
>>>>>>> Stashed changes
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

<<<<<<< Updated upstream
      <main id="content" className="mx-auto w-full max-w-5xl px-4">
        <section id="top" className="py-16 sm:py-20">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-white/60">
                {site.location}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {site.name}
              </h1>
              <p className="mt-3 text-lg text-white/80 sm:text-xl">
                {site.role}
              </p>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/70">
                {site.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={site.links.email}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Email
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-white/10" />

        <section id="about" className="py-12 sm:py-16">
          <h2 className="text-base font-semibold text-white">About</h2>
          <div className="mt-4 grid gap-4">
            {site.about.map((p) => (
              <p key={p} className="max-w-3xl text-white/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-white/10" />

        <section id="experience" className="py-12 sm:py-16">
          <h2 className="text-base font-semibold text-white">Experience</h2>
          <div className="mt-6 grid gap-4">
            {site.experience.map((item) => (
              <article
                key={`${item.company}-${item.title}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {item.company}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                  </div>
                  <p className="text-xs text-white/50">
                    {item.start} — {item.end}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-white/10" />

        <section id="projects" className="py-12 sm:py-16">
          <h2 className="text-base font-semibold text-white">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.projects.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-indigo-300 hover:text-indigo-200"
                    >
                      View
                    </a>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {p.description}
                </p>
                {p.tech?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-white/10" />

        <section id="contact" className="py-12 sm:py-16">
          <h2 className="text-base font-semibold text-white">Contact</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/70">
              Want to collaborate or talk? Email me or reach out on LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.links.email}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
              >
                ilana.p283@gmail.com
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="pb-10 pt-2 text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </main>
=======
      <main id="top" className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-10 sm:pt-14">
        <section className="mb-10 sm:mb-12" aria-labelledby="hero-heading">
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
          </Panel>
        </section>

        <section id="about" className="mb-10 scroll-mt-28 sm:mb-12" aria-labelledby="about-heading">
          <SectionTitle id="about-heading">About</SectionTitle>
          <Panel className="mt-6 border-l-4 border-l-sky-500/80">
            <div className="space-y-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Panel>
        </section>

        <section
          id="experience"
          className="mb-10 scroll-mt-28 sm:mb-12"
          aria-labelledby="experience-heading"
        >
          <SectionTitle id="experience-heading">Experience</SectionTitle>
          <ul className="mt-6 space-y-5">
            {site.experience.map((job) => (
              <li key={`${job.company}-${job.title}-${job.start}`}>
                <Panel className="border-l-4 border-l-sky-500/70">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {job.title}
                      </h3>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ""}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm tabular-nums text-sky-800/90 dark:text-sky-300/90">
                      {job.start} — {job.end}
                    </p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Panel>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="education"
          className="mb-10 scroll-mt-28 sm:mb-12"
          aria-labelledby="education-heading"
        >
          <SectionTitle id="education-heading">Education</SectionTitle>
          <ul className="mt-6 space-y-5">
            {site.education.map((edu) => (
              <li key={`${edu.school}-${edu.start}`}>
                <Panel className="border-l-4 border-l-sky-500/70">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.degree}
                      </h3>
                      <p className="text-zinc-700 dark:text-zinc-300">
                        {edu.school}
                        {edu.location ? ` · ${edu.location}` : ""}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm tabular-nums text-sky-800/90 dark:text-sky-300/90">
                      {edu.start} — {edu.end}
                    </p>
                  </div>
                  {edu.highlights?.map((h) => (
                    <p key={h} className="mt-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
                      {h}
                    </p>
                  ))}
                </Panel>
              </li>
            ))}
          </ul>
          <Panel className="mt-5 border-l-4 border-l-amber-500/80 bg-amber-50/50 dark:bg-amber-950/20">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{site.military}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Languages: </span>
              {site.languages}
            </p>
          </Panel>
        </section>

        <section
          id="projects"
          className="mb-10 scroll-mt-28 sm:mb-12"
          aria-labelledby="projects-heading"
        >
          <SectionTitle id="projects-heading">Projects</SectionTitle>
          <ul className="mt-6 space-y-5">
            {site.projects.map((project) => (
              <li key={project.name}>
                <Panel className="border-l-4 border-l-sky-500">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {project.href ? (
                        <a
                          href={project.href}
                          className="underline decoration-sky-600/40 underline-offset-4 transition hover:decoration-sky-600 dark:decoration-sky-400/50 dark:hover:decoration-sky-300"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    {project.tech && project.tech.length > 0 && (
                      <p className="shrink-0 font-mono text-xs text-sky-900/80 dark:text-sky-300/90">
                        {project.tech.join(" · ")}
                      </p>
                    )}
                  </div>
                  <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {project.description}
                  </p>
                </Panel>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-28" aria-labelledby="contact-heading">
          <SectionTitle id="contact-heading">Contact</SectionTitle>
          <Panel className="mt-6 border-l-4 border-l-sky-500">
            <p className="text-zinc-700 leading-relaxed dark:text-zinc-300">
              Reach out for collaboration or opportunities.
            </p>
            <ul className="mt-5 flex flex-wrap gap-6 text-sm font-medium">
              <li>
                <a
                  href={site.links.email}
                  className="rounded-md text-sky-700 underline decoration-sky-600/40 underline-offset-4 transition hover:bg-sky-50 hover:decoration-sky-700 dark:text-sky-400 dark:hover:bg-sky-950/50 dark:hover:decoration-sky-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={site.links.linkedin}
                  className="rounded-md text-sky-700 underline decoration-sky-600/40 underline-offset-4 transition hover:bg-sky-50 hover:decoration-sky-700 dark:text-sky-400 dark:hover:bg-sky-950/50 dark:hover:decoration-sky-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Panel>
        </section>
      </main>

      <footer className="border-t border-zinc-200/90 bg-white/80 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </footer>
>>>>>>> Stashed changes
    </div>
  );
}
