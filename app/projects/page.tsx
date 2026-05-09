import { site } from "../site";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";
import { Panel, SectionTitle } from "../components/ui";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section aria-labelledby="projects-title" className="mb-10 sm:mb-12">
        <Reveal>
          <Panel className="border-l-4 border-l-sky-500 pl-6">
            <h1
              id="projects-title"
              className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              Projects
            </h1>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
              A small selection of work and learning projects.
            </p>
          </Panel>
        </Reveal>
      </section>

      <section aria-labelledby="projects-list">
        <SectionTitle>Project list</SectionTitle>
        <ul className="mt-6 space-y-5">
          {site.projects.map((project) => (
            <li key={project.name}>
              <Reveal>
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
                    {project.tech?.length ? (
                      <p className="shrink-0 font-mono text-xs text-sky-900/80 dark:text-sky-300/90">
                        {project.tech.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">{project.description}</p>
                </Panel>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}

