import Image from "next/image";
import { Globe } from "lucide-react";
import { Badge } from "@/components/preview/Badge";

type ProjectCardProps = {
  title: string;
  period: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
};

export function ProjectCard({
  title,
  period,
  description,
  tech,
  image,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900">
      <div className="relative h-40 w-full overflow-hidden border-b border-black/10 bg-neutral-100 dark:border-white/10 dark:bg-neutral-800">
        {image ? (
          <Image
            src={image}
            alt={`Voorvertoning van ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover object-top"
          />
        ) : (
          // No screenshot exists for the experiments, so the card shows the
          // stack instead of a fake product shot.
          <div className="flex h-full items-center justify-center bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {tech.slice(0, 3).join(" · ")}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pt-3">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
        <time className="font-sans text-xs text-neutral-500 dark:text-neutral-400">
          {period}
        </time>
        <p className="mt-2 max-w-full text-pretty font-sans text-xs text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      <div className="mt-auto flex flex-col px-2 pb-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {tech.map((t) => (
            <Badge key={t} className="px-1 py-0 text-[10px]">
              {t}
            </Badge>
          ))}
        </div>
        {liveUrl && (
          <div className="mt-2 flex flex-wrap gap-1">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              // min-h-11 keeps this comfortably tappable; the label itself stays
              // small so the card does not turn into a button.
              className="inline-flex min-h-11 items-center gap-1.5 rounded-md bg-neutral-900 px-3 text-xs font-medium text-white transition-opacity hover:opacity-85 dark:bg-neutral-100 dark:text-neutral-900"
            >
              <Globe size={12} />
              Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
