"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-accent-600 tracking-wide uppercase mb-4">
            Projecten
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-2xl">
            Echte AI-workflows voor echte gebruikers, geen theorie
          </h2>
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass glass-hover rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-400 via-accent-500 to-accent-700 bg-[length:200%_100%] accent-shimmer" />
            <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-400/20 text-accent-600 border border-accent-400/30">
                    Uitgelicht project
                  </span>
                  <span className="text-xs text-muted">{featured.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                  {featured.title}
                </h3>
                <p className="text-accent-600 text-sm sm:text-base mb-6">{featured.tagline}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted mb-1.5">Probleem</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{featured.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted mb-1.5">Oplossing</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{featured.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted mb-1.5">Impact</p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{featured.impact}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  {featured.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-on-accent text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Live bekijken <ExternalLink size={15} />
                    </motion.a>
                  )}
                  {featured.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-full glass text-foreground text-sm font-medium"
                    >
                      <GithubIcon size={15} /> GitHub
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted mb-3">Gebruikte AI-tools</p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full glass text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group glass glass-hover rounded-2xl p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <p className="text-xs text-muted mb-4">{p.period}</p>
              <p className="text-sm text-accent-600 mb-4">{p.tagline}</p>

              <div className="space-y-3 flex-1">
                <p className="text-xs text-muted leading-relaxed">
                  <span className="text-foreground/70 font-medium">Probleem: </span>
                  {p.problem}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  <span className="text-foreground/70 font-medium">Oplossing: </span>
                  {p.solution}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  <span className="text-foreground/70 font-medium">Impact: </span>
                  {p.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-foreground/6 text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
