import { Mail, FileDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const linkClass =
  "group inline-flex min-h-11 items-center gap-2.5 text-base text-foreground transition-colors hover:text-accent-700";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="border-t border-foreground/15 pt-14">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Kennismaken?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Ik sta open voor functies, projecten en gesprekken op het snijvlak van
              automatisering, operations en klantgerichte technologie.
            </p>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="mt-12 flex flex-col gap-x-12 gap-y-1 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <Mail size={17} className="text-accent-700" />
                <span className="link-underline">{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <LinkedinIcon size={16} className="text-accent-700" />
                <span className="link-underline">LinkedIn</span>
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <GithubIcon size={16} className="text-accent-700" />
                  <span className="link-underline">GitHub</span>
                </a>
              )}
              <a href={profile.cvUrl} download className={linkClass}>
                <FileDown size={17} className="text-accent-700" />
                <span className="link-underline">Download cv</span>
              </a>
            </div>
          </Reveal>
        </div>

        <footer className="mt-20 flex flex-col gap-2 border-t border-rule pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Gebouwd met Next.js, TypeScript en Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
}
