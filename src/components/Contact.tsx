"use client";

import { motion } from "framer-motion";
import { Mail, FileDown, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-[2rem] p-8 sm:p-14 text-center overflow-hidden"
        >
          <div
            className="bg-glow animate-glow w-[420px] h-[420px] -top-32 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-400 via-accent-500 to-accent-700 bg-[length:200%_100%] accent-shimmer" />

          <div className="relative">
            <p className="text-sm font-medium text-accent-600 tracking-wide uppercase mb-4">
              Contact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-2xl mx-auto">
              Klaar om verder te praten?
            </h2>
            <p className="mt-5 text-muted max-w-lg mx-auto">
              Deze site was mijn motivatiebrief. Het CV en het gesprek zijn de logische
              vervolgstap, ik hoor graag van {profile.companyName}.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.dispatchEvent(new Event("open-pitch"))}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-on-accent text-sm sm:text-base font-medium hover:shadow-[0_0_40px_-10px_rgba(217,119,6,0.6)] transition-shadow"
              >
                <motion.span
                  animate={{ rotate: [0, -12, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Zap size={16} />
                </motion.span>
                Waarom zou je mij aannemen?
              </motion.button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/85 text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Mail size={15} /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/85 text-sm transition-all hover:scale-105 active:scale-95"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/85 text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <GithubIcon size={15} /> GitHub
                </a>
              )}
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/85 text-sm transition-all hover:scale-105 active:scale-95"
              >
                <FileDown size={15} /> Download CV
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-muted">
          Gebouwd door {profile.name} met React, Next.js, TypeScript, Tailwind CSS en Framer
          Motion.
        </p>
      </div>
    </section>
  );
}
