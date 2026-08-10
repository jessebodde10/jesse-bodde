import Image from "next/image";
// Aliased because the page component itself is called HomePage.
import { Home as HomeIcon, Mail, FileDown, FileText } from "lucide-react";
import { BlurFade, BlurFadeText } from "@/components/preview/BlurFade";
import { DotPattern } from "@/components/preview/DotPattern";
import { Dock, DockIcon, DockSeparator } from "@/components/preview/Dock";
import { ThemeToggle } from "@/components/preview/ThemeToggle";
import { ResumeCard } from "@/components/preview/ResumeCard";
import { ProjectCard } from "@/components/preview/ProjectCard";
import { Badge } from "@/components/preview/Badge";
import { LinkedinIcon } from "@/components/icons";
import {
  profile,
  about,
  work,
  education,
  projects,
  skillGroups,
  experienceOutlook,
} from "@/lib/data";

/** Logos taken from each employer's own site. Leadz Social Media Marketing has
 *  no site left, so that row keeps its initials. */
const logoFor: Record<string, string> = {
  Cargomate: "/images/logos/cargomate.svg",
  "CAK Den Haag, medicijnverklaringen": "/images/logos/cak.png",
  Centuristics: "/images/logos/centuristics.png",
  "Bit Academy, cursus van twaalf weken": "/images/logos/bit-academy.png",
  "ROC Mondriaan Delft": "/images/logos/roc-mondriaan.svg",
  "Stanislascollege Reinier de Graafpad": "/images/logos/stanislascollege.png",
};

/** Fallback when no logo exists. */
const initialsFor: Record<string, string> = {
  Cargomate: "CM",
  "CAK Den Haag, medicijnverklaringen": "CAK",
  "Leadz Social Media Marketing": "LZ",
  Centuristics: "CE",
  "Bit Academy, cursus van twaalf weken": "BA",
  "ROC Mondriaan Delft": "RM",
  "Stanislascollege Reinier de Graafpad": "SC",
};

const BLUR_DELAY = 0.04;

const allSkills = skillGroups.flatMap((g) => g.items);

const projectImages: Record<string, string> = {
  "leadz-systems": "/images/projects/leadz-systems.png",
};

export default function HomePage() {
  return (
    <main className="relative mx-auto min-h-screen max-w-2xl px-6 py-12 sm:py-24">
      {/* Dot grid behind the top of the page, faded out downward. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <DotPattern />
      </div>

      <div className="flex flex-col gap-12">
        {/* ------------------------------------------------------------ hero */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="flex justify-between gap-2">
              <div className="flex flex-1 flex-col space-y-1.5">
                <BlurFadeText
                  delay={BLUR_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                  yOffset={8}
                  text="Hey, ik ben Jesse"
                  animateByCharacter
                />
                <BlurFadeText
                  className="max-w-[600px] text-neutral-600 md:text-xl dark:text-neutral-400"
                  delay={BLUR_DELAY * 2}
                  text="AI-automatisering, procesverbetering en klantgerichte technologie. Ik kom uit ondernemerschap, klantcontact en logistiek en bouw nu workflows die werk uit handen nemen."
                />
              </div>
              <BlurFade delay={BLUR_DELAY}>
                <span className="relative block size-28 shrink-0 overflow-hidden rounded-full border border-black/10 dark:border-white/15">
                  <Image
                    src="/images/jesse-bodde.png"
                    alt="Jesse Bodde"
                    fill
                    priority
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </span>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- about */}
        <section id="about">
          <BlurFade delay={BLUR_DELAY * 3}>
            <h2 className="text-xl font-bold">Over mij</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-3">
            {[about.lead, ...about.body, about.kika].map((paragraph, i) => (
              <BlurFade key={i} delay={BLUR_DELAY * 4 + i * 0.04}>
                <p className="max-w-full text-pretty font-sans text-sm text-neutral-600 dark:text-neutral-400">
                  {paragraph}
                </p>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------ work */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_DELAY * 5}>
              <h2 className="text-xl font-bold">Werkervaring</h2>
            </BlurFade>
            {work.map((item, i) => (
              <BlurFade key={item.title + item.period} delay={BLUR_DELAY * 6 + i * 0.05}>
                <ResumeCard
                  logo={logoFor[item.org]}
                  initials={initialsFor[item.org] ?? item.org.slice(0, 2).toUpperCase()}
                  title={item.org}
                  subtitle={item.title}
                  period={item.period}
                  description={item.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- education */}
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_DELAY * 7}>
              <h2 className="text-xl font-bold">Opleiding</h2>
            </BlurFade>
            {education.map((item, i) => (
              <BlurFade key={item.title + item.period} delay={BLUR_DELAY * 8 + i * 0.05}>
                <ResumeCard
                  logo={logoFor[item.org]}
                  initials={initialsFor[item.org] ?? item.org.slice(0, 2).toUpperCase()}
                  title={item.org}
                  subtitle={item.title}
                  period={item.period}
                  description={item.description}
                />
              </BlurFade>
            ))}
            <BlurFade delay={BLUR_DELAY * 8 + education.length * 0.05}>
              <p className="pt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {experienceOutlook}
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ---------------------------------------------------------- skills */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_DELAY * 9}>
              <h2 className="text-xl font-bold">Vaardigheden</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {allSkills.map((skill, i) => (
                <BlurFade key={skill} delay={BLUR_DELAY * 10 + i * 0.02}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- projects */}
        <section id="projects">
          <div className="w-full space-y-12 py-12">
            <BlurFade delay={BLUR_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge variant="solid" className="rounded-lg px-3 py-1 text-sm">
                    Mijn projecten
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Waar ik aan werk
                  </h2>
                  <p className="text-neutral-600 md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                    Automatiseringen die ik zelf heb opgezet, van een eigen praktijk tot
                    experimenten waarmee ik uitzoek hoe ver ik met agents kom.
                  </p>
                </div>
              </div>
            </BlurFade>

            <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
              {projects.map((project, i) => (
                <BlurFade key={project.slug} delay={BLUR_DELAY * 12 + i * 0.05}>
                  <ProjectCard
                    title={project.title}
                    period={project.period}
                    description={project.approach}
                    tech={project.tech}
                    image={projectImages[project.slug]}
                    liveUrl={project.liveUrl}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- contact */}
        <section id="contact">
          <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
            <BlurFade delay={BLUR_DELAY * 13}>
              <div className="space-y-3">
                <Badge variant="solid" className="rounded-lg px-3 py-1 text-sm">
                  Contact
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Even kennismaken?
                </h2>
                <p className="mx-auto max-w-[600px] text-neutral-600 md:text-xl/relaxed dark:text-neutral-400">
                  Ik sta open voor functies, projecten en gesprekken op het snijvlak van
                  automatisering, operations en klantgerichte technologie. Stuur gerust een{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-blue-600 underline underline-offset-2 dark:text-blue-400"
                  >
                    mailtje
                  </a>{" "}
                  en ik reageer zo snel mogelijk.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------------- dock */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="pointer-events-auto mx-auto w-full">
          <Dock>
            <DockIcon href="#hero" label="Naar boven">
              <HomeIcon size={18} />
            </DockIcon>
            <DockIcon href={profile.linkedin} label="LinkedIn" external>
              <LinkedinIcon size={17} />
            </DockIcon>
            <DockIcon href={`mailto:${profile.email}`} label="E-mail">
              <Mail size={18} />
            </DockIcon>
            <DockSeparator />
            <DockIcon href={profile.cvUrl} label="Download cv">
              <FileDown size={18} />
            </DockIcon>
            <DockIcon href="/motivatie" label="Motivatie">
              <FileText size={18} />
            </DockIcon>
            <DockSeparator />
            <ThemeToggle />
          </Dock>
        </div>
      </div>

      {/* Keeps the last section clear of the fixed dock. */}
      <div className="h-16" />
    </main>
  );
}
