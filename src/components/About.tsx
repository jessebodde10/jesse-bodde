import Image from "next/image";
import Reveal from "@/components/Reveal";
import { about } from "@/lib/data";

/**
 * One continuous story rather than a grid of cards: type, a rule and the KiKa
 * photograph carry the section.
 */
export default function About() {
  return (
    <section id="over-mij" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          {/* Carries the section's heading level. The lead below is the visual
              headline but is far too long to be a sensible <h2>. */}
          <h2 className="eyebrow">Over mij</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-display mt-6 max-w-4xl text-2xl leading-[1.35] text-foreground sm:text-3xl lg:text-[2.35rem] lg:leading-[1.3]">
            {about.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-6 border-t border-rule pt-10 md:grid-cols-2">
          {about.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col gap-8 border-t border-rule pt-10 sm:flex-row sm:items-center sm:gap-10">
            <div className="relative aspect-4/5 w-40 shrink-0 overflow-hidden sm:w-44">
              <Image
                src="/images/kika.jpg"
                alt={about.kikaImageAlt}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground sm:text-2xl">Buiten werk</h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{about.kika}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
