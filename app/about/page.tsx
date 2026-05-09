import { site } from "../site";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";
import { Panel, SectionTitle } from "../components/ui";

export default function AboutPage() {
  return (
    <SiteShell>
      <section aria-labelledby="about-title" className="mb-10 sm:mb-12">
        <Reveal>
          <Panel className="border-l-4 border-l-sky-500 pl-6">
            <h1 id="about-title" className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              About
            </h1>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
              {site.role} · {site.location}
            </p>
          </Panel>
        </Reveal>
      </section>

      <section className="mb-10 sm:mb-12" aria-labelledby="about-summary">
        <SectionTitle>Summary</SectionTitle>
        <Panel className="mt-6 border-l-4 border-l-sky-500/80">
          <div className="space-y-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
            {site.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mb-10 sm:mb-12" aria-labelledby="experience-heading">
        <SectionTitle>Experience</SectionTitle>
        <ul className="mt-6 space-y-5">
          {site.experience.map((job) => (
            <li key={`${job.company}-${job.title}-${job.start}`}>
              <Reveal>
                <Panel className="border-l-4 border-l-sky-500/70">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{job.title}</h3>
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
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="education-heading">
        <SectionTitle>Education</SectionTitle>
        <ul className="mt-6 space-y-5">
          {site.education.map((edu) => (
            <li key={`${edu.school}-${edu.start}`}>
              <Reveal>
                <Panel className="border-l-4 border-l-sky-500/70">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{edu.degree}</h3>
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
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal>
          <Panel className="mt-5 border-l-4 border-l-amber-500/80 bg-amber-50/50 dark:bg-amber-950/20">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{site.military}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Languages: </span>
              {site.languages}
            </p>
          </Panel>
        </Reveal>
      </section>
    </SiteShell>
  );
}

