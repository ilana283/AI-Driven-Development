import { site } from "../site";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";
import { Panel, SectionTitle } from "../components/ui";

export default function ContactPage() {
  return (
    <SiteShell>
      <section aria-labelledby="contact-title" className="mb-10 sm:mb-12">
        <Reveal>
          <Panel className="border-l-4 border-l-sky-500 pl-6">
            <h1
              id="contact-title"
              className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              Contact
            </h1>
            <p className="mt-3 text-zinc-700 leading-relaxed dark:text-zinc-300">
              Want to collaborate or talk? Email me or reach out on LinkedIn.
            </p>
          </Panel>
        </Reveal>
      </section>

      <section aria-labelledby="links">
        <SectionTitle>Links</SectionTitle>
        <div className="mt-6 space-y-5">
          <Reveal>
            <Panel className="border-l-4 border-l-sky-500">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Email</h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Fastest way to reach me.</p>
                </div>
                <a
                  href={site.links.email}
                  className="w-full rounded-xl bg-sky-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-sky-500 sm:w-auto"
                >
                  Send email
                </a>
              </div>
            </Panel>
          </Reveal>

          <Reveal>
            <Panel className="border-l-4 border-l-sky-500">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">LinkedIn</h2>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">For professional updates.</p>
                </div>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-zinc-200 bg-white/70 px-4 py-2 text-center text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/70 sm:w-auto"
                >
                  Open LinkedIn
                </a>
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

