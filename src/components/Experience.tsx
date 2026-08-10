import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  work,
  education,
  ownProjects,
  experienceOutlook,
  type ExperienceItem,
} from "@/lib/data";

const groups: { title: string; items: ExperienceItem[] }[] = [
  { title: "Werkervaring", items: work },
  { title: "Opleiding en cursussen", items: education },
  { title: "Eigen projecten", items: ownProjects },
];

function Entry({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <Reveal as="li" delay={Math.min(index, 4) * 0.05}>
      {/* The dot sits on the vertical rule and marks the entry. */}
      <div className="group relative border-b border-rule py-6 pl-6 last:border-0 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-8 sm:pl-8">
        <span
          className="absolute left-0 top-8 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-600/50 transition-colors duration-300 group-hover:bg-accent-600 sm:left-0"
          aria-hidden="true"
        />
        <p className="font-mono text-xs text-muted sm:pt-1">{item.period}</p>
        <div>
          <h4 className="text-base font-medium text-foreground">{item.title}</h4>
          <p className="mt-0.5 text-sm text-accent-700">{item.org}</p>
          {item.description && (
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="ervaring" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Ervaring" title="Mijn route tot nu toe" />

        <div className="mt-14 space-y-16">
          {groups.map((group) => (
            <div key={group.title}>
              <Reveal>
                <h3 className="border-b border-foreground/15 pb-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground">
                  {group.title}
                </h3>
              </Reveal>
              {/* One rule runs behind every entry in the group. */}
              <ul className="relative mt-2 before:absolute before:bottom-6 before:left-0 before:top-0 before:w-px before:bg-rule">
                {group.items.map((item, i) => (
                  <Entry key={item.title + item.period} item={item} index={i} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-14 max-w-2xl border-t border-rule pt-8 text-base leading-relaxed text-foreground/80">
            {experienceOutlook}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
