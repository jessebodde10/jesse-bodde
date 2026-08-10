import Link from "next/link";
import { FileDown, FileText, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

export default function Documents() {
  return (
    <section id="documenten" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Documenten"
          title="Cv en motivatie"
          intro="Mijn volledige cv als pdf, en een langere toelichting op waar ik vandaan kom en wat ik zoek."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <a
              href={profile.cvUrl}
              download
              className="card group flex h-full items-start gap-4 p-6 transition-colors duration-300 hover:border-accent-600/50 sm:p-7"
            >
              <FileDown size={20} className="mt-0.5 shrink-0 text-accent-700" />
              <span>
                <span className="block font-medium text-foreground">Download cv</span>
                <span className="mt-1 block text-sm text-muted">
                  Pdf met mijn volledige werkervaring, opleiding en cursussen.
                </span>
              </span>
              <ArrowRight
                size={16}
                className="ml-auto mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>

          <Reveal delay={0.07}>
            <Link
              href="/motivatie"
              className="card group flex h-full items-start gap-4 p-6 transition-colors duration-300 hover:border-accent-600/50 sm:p-7"
            >
              <FileText size={20} className="mt-0.5 shrink-0 text-accent-700" />
              <span>
                <span className="block font-medium text-foreground">Bekijk motivatie</span>
                <span className="mt-1 block text-sm text-muted">
                  Waarom ik in automatisering terecht ben gekomen en hoe ik werk.
                </span>
              </span>
              <ArrowRight
                size={16}
                className="ml-auto mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
