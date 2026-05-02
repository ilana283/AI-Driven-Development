import type { ReactNode } from "react";
import { site } from "./site";

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
    >
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-[var(--background)]/85 backdrop-blur-md dark:border-zinc-800/80">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="font-semibold text-zinc-900 dark:text-zinc-100">
            {site.name}
          </a>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-10 sm:pt-14">
        <section className="mb-16 sm:mb-20" aria-labelledby="hero-heading">
          <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">{site.role}</p>
          <h1
            id="hero-heading"
            className="font-sans text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
          >
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {site.tagline}
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{site.location}</p>
        </section>

        <section id="about" className="mb-16 scroll-mt-24 sm:mb-20" aria-labelledby="about-heading">
          <SectionTitle id="about-heading">About</SectionTitle>
          <div className="mt-6 space-y-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="mb-16 scroll-mt-24 sm:mb-20"
          aria-labelledby="experience-heading"
        >
          <SectionTitle id="experience-heading">Experience</SectionTitle>
          <ul className="mt-8 space-y-10">
            {site.experience.map((job) => (
              <li key={`${job.company}-${job.title}-${job.start}`}>
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
                  <p className="shrink-0 text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
                    {job.start} — {job.end}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 leading-relaxed dark:text-zinc-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="education"
          className="mb-16 scroll-mt-24 sm:mb-20"
          aria-labelledby="education-heading"
        >
          <SectionTitle id="education-heading">Education</SectionTitle>
          <ul className="mt-8 space-y-10">
            {site.education.map((edu) => (
              <li key={`${edu.school}-${edu.start}`}>
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
                  <p className="shrink-0 text-sm tabular-nums text-zinc-500 dark:text-zinc-400">
                    {edu.start} — {edu.end}
                  </p>
                </div>
                {edu.highlights?.map((h) => (
                  <p key={h} className="mt-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {h}
                  </p>
                ))}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {site.military}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Languages: </span>
            {site.languages}
          </p>
        </section>

        <section id="projects" className="mb-16 scroll-mt-24 sm:mb-20" aria-labelledby="projects-heading">
          <SectionTitle id="projects-heading">Projects</SectionTitle>
          <ul className="mt-8 space-y-8">
            {site.projects.map((project) => (
              <li
                key={project.name}
                className="rounded-xl border border-zinc-200/90 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.href ? (
                      <a
                        href={project.href}
                        className="underline decoration-zinc-400/60 underline-offset-4 transition hover:decoration-zinc-600 dark:hover:decoration-zinc-300"
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
                    <p className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      {project.tech.join(" · ")}
                    </p>
                  )}
                </div>
                <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24" aria-labelledby="contact-heading">
          <SectionTitle id="contact-heading">Contact</SectionTitle>
          <p className="mt-6 text-zinc-700 leading-relaxed dark:text-zinc-300">
            Reach out for collaboration or opportunities.
          </p>
          <ul className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
            <li>
              <a
                href={site.links.email}
                className="text-sky-700 underline decoration-sky-700/30 underline-offset-4 transition hover:decoration-sky-700 dark:text-sky-400 dark:decoration-sky-400/40"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                className="text-sky-700 underline decoration-sky-700/30 underline-offset-4 transition hover:decoration-sky-700 dark:text-sky-400 dark:decoration-sky-400/40"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-200/80 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </>
  );
}
