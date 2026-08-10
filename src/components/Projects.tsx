import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/lib/data";

function ExternalLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-700"
        >
          <span className="link-underline">Bekijk live</span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-700"
        >
          <GithubIcon size={15} />
          <span className="link-underline">Repository</span>
        </a>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.12em] text-muted">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-foreground/80">{children}</dd>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projecten" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projecten"
          title="Wat ik bouw"
          intro="Automatiseringen die ik zelf heb opgezet, van een eigen praktijk tot experimenten waarmee ik uitzoek hoe ver ik met agents kom."
        />

        {featured && (
          <Reveal delay={0.05}>
            <article className="card mt-14 p-7 transition-colors duration-300 hover:border-accent-600/50 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="font-display text-3xl text-foreground sm:text-4xl">
                  {featured.title}
                  {featured.subtitle && (
                    <span className="ml-3 align-middle text-base text-muted">
                      {featured.subtitle}
                    </span>
                  )}
                </h3>
                <span className="font-mono text-xs text-muted">{featured.period}</span>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {featured.context}
              </p>

              <dl className="mt-9 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
                <Field label="Probleem">{featured.problem}</Field>
                <Field label="Aanpak">{featured.approach}</Field>
              </dl>

              <div className="mt-9 flex flex-col gap-6 border-t border-rule pt-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted">Techniek</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-foreground/75"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted">{featured.status}</p>
                </div>
                <ExternalLinks project={featured} />
              </div>
            </article>
          </Reveal>
        )}

        {/* The remaining work sits in a quieter list so the lead project keeps
            the visual weight. */}
        <div className="mt-16 border-t border-rule">
          {rest.map((project, i) => (
            <Reveal key={project.slug} as="article" delay={i * 0.06}>
              <div className="grid gap-x-10 gap-y-4 border-b border-rule py-9 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <h3 className="font-display text-2xl leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs text-muted">{project.period}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{project.context}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    <span className="text-muted">Probleem. </span>
                    {project.problem}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    <span className="text-muted">Aanpak. </span>
                    {project.approach}
                  </p>
                  <p className="font-mono text-xs text-muted">{project.tech.join(" · ")}</p>
                  <p className="text-sm text-muted">{project.status}</p>
                  <ExternalLinks project={project} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
