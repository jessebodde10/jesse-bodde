import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Constrains the intro paragraph so lines stay readable. */
  className?: string;
};

/**
 * Shared section opener: small caps label, serif heading, optional intro.
 * Server component, no client JS beyond the Reveal wrapper.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-foreground">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
