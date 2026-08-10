import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown, Mail } from "lucide-react";
import { BlurFade } from "@/components/preview/BlurFade";
import { motivation, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Motivatie",
  description:
    "De motivatie van Jesse Bodde: hoe ondernemerschap, klantcontact en logistiek leidden tot werk in AI-automatisering en procesverbetering.",
};

const DELAY = 0.04;

export default function MotivatiePage() {
  return (
    <main className="relative mx-auto min-h-screen max-w-2xl px-6 py-12 sm:py-24">
      <Link
        href="/"
        className="group inline-flex min-h-11 items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
      >
        <ArrowLeft
          size={15}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
        Terug naar portfolio
      </Link>

      <BlurFade delay={DELAY}>
        <h1 className="mt-10 text-3xl font-bold tracking-tighter sm:text-4xl">
          Waarom ik in automatisering werk
        </h1>
      </BlurFade>
      <BlurFade delay={DELAY * 2}>
        <p className="mt-4 text-neutral-600 md:text-lg dark:text-neutral-400">
          {motivation.intro}
        </p>
      </BlurFade>

      <div className="mt-12 flex flex-col gap-y-8 border-t border-black/10 pt-10 dark:border-white/10">
        {motivation.sections.map((section, i) => (
          <BlurFade key={section.heading} delay={DELAY * 3 + i * 0.05}>
            <section>
              <h2 className="text-xl font-bold">{section.heading}</h2>
              <p className="mt-2 text-pretty text-sm text-neutral-600 dark:text-neutral-400">
                {section.body}
              </p>
            </section>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={DELAY * 8}>
        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-black/10 pt-8 dark:border-white/10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex min-h-11 items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
          >
            <FileDown size={16} />
            Download cv
          </a>
        </div>
      </BlurFade>
    </main>
  );
}
