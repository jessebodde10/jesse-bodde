import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import MotionProvider from "@/components/MotionProvider";
import { motivation, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Motivatie",
  description:
    "De motivatie van Jesse Bodde: hoe ondernemerschap, klantcontact en logistiek leidden tot werk in AI-automatisering en procesverbetering.",
};

export default function MotivatiePage() {
  return (
    <MotionProvider>
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
          <Link
            href="/#documenten"
            className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Terug naar portfolio
          </Link>

          <Reveal>
            <p className="eyebrow mt-12">{motivation.title}</p>
            <h1 className="font-display mt-4 text-4xl leading-[1.1] text-foreground sm:text-5xl">
              Waarom ik in automatisering werk
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{motivation.intro}</p>
          </Reveal>

          <div className="mt-14 space-y-12 border-t border-rule pt-12">
            {motivation.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.05}>
                <section>
                  <h2 className="font-display text-2xl text-foreground sm:text-[1.75rem]">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/80">
                    {section.body}
                  </p>
                </section>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.05}>
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-rule pt-10">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex min-h-11 items-center gap-2.5 text-base text-foreground transition-colors hover:text-accent-700"
              >
                <Mail size={17} className="text-accent-700" />
                <span className="link-underline">{profile.email}</span>
              </a>
              <a
                href={profile.cvUrl}
                download
                className="group inline-flex min-h-11 items-center gap-2.5 text-base text-foreground transition-colors hover:text-accent-700"
              >
                <FileDown size={17} className="text-accent-700" />
                <span className="link-underline">Download cv</span>
              </a>
            </div>
          </Reveal>
        </article>
      </main>
    </MotionProvider>
  );
}
