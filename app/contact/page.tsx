import type { Metadata } from "next";
import { site } from "../site";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";
import { Panel, SectionTitle } from "../components/ui";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const { contactPage: c } = site;

  return (
    <SiteShell>
      <section aria-labelledby="contact-title" className="mb-10 sm:mb-12">
        <Reveal>
          <Panel className="border-l-4 border-l-sky-500 pl-6">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{site.role}</p>
            <h1
              id="contact-title"
              className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              {c.title}
            </h1>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">{c.intro}</p>
          </Panel>
        </Reveal>
      </section>

      <section aria-labelledby="contact-links">
        <SectionTitle id="contact-links">Get in touch</SectionTitle>
        <div className="mt-6 space-y-5">
          <Reveal>
            <Panel className="border-l-4 border-l-sky-500">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.sections.email.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{c.sections.email.hint}</p>
                  <p className="mt-2 font-mono text-sm text-zinc-800 dark:text-zinc-200">
                    {site.emailAddress}
                  </p>
                </div>
                <a
                  href={site.links.email}
                  className="w-full shrink-0 rounded-xl bg-sky-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-sky-500 sm:w-auto"
                >
                  {c.sections.email.button}
                </a>
              </div>
            </Panel>
          </Reveal>

          <Reveal>
            <Panel className="border-l-4 border-l-sky-500">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.sections.linkedin.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{c.sections.linkedin.hint}</p>
                </div>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-zinc-200 bg-white/70 px-4 py-2 text-center text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/70 sm:w-auto"
                >
                  {c.sections.linkedin.button}
                </a>
              </div>
            </Panel>
          </Reveal>

          <Reveal>
            <Panel className="border-l-4 border-l-sky-500">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.sections.phone.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{c.sections.phone.hint}</p>
                  <p className="mt-2 font-mono text-sm text-zinc-800 dark:text-zinc-200">
                    {site.phoneDisplay}
                  </p>
                </div>
                <a
                  href={site.links.phone}
                  className="w-full shrink-0 rounded-xl border border-zinc-200 bg-white/70 px-4 py-2 text-center text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/70 sm:w-auto"
                >
                  {c.sections.phone.button}
                </a>
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
