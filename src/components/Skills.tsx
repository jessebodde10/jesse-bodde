import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

/**
 * Plain lists, no meters. A percentage next to a skill claims a precision
 * nobody can back up, so the grouping does the work instead.
 */
export default function Skills() {
  return (
    <section id="vaardigheden" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Vaardigheden"
          title="Waar ik mee werk"
          intro="Een overzicht van de tools en vakgebieden waarin ik ervaring heb opgebouwd, verdeeld over techniek en de operationele kant."
        />

        <div className="mt-14 grid gap-x-12 gap-y-12 border-t border-rule pt-12 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-[0.95rem] text-muted"
                  >
                    <span
                      className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-accent-600/60"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
