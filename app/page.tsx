import { site } from "./site";

export default function Home() {
  return (
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
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

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
    </div>
  );
}
