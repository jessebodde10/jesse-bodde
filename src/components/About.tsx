"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Cpu, BookOpen, Rocket, Medal } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Waarom AI",
    text: "Jarenlang loste ik knelpunten voor klanten en werkgevers handmatig op, telefonisch, per mail, op papier bij de douane. AI is het eerste gereedschap waarmee ik die oplossingen kan omzetten in een systeem dat zelf doorwerkt. Dat verschil, van uitvoeren naar bouwen, is wat me vasthoudt.",
  },
  {
    icon: Cpu,
    title: "Waarom technologie",
    text: "Ik ben geen informaticus van huis uit, ik kom uit ondernemerschap en klantcontact. Techniek is voor mij ook nooit een doel op zich geweest, gewoon het snelste middel om een proces echt beter te maken in plaats van er telkens omheen te blijven werken.",
  },
  {
    icon: BookOpen,
    title: "Mijn manier van leren",
    text: "Doen, breken, opnieuw bouwen. Ik volgde een intensieve Full Stack-cursus, maar het grootste deel van wat ik nu weet over AI-agents en automatisering heb ik mezelf geleerd door gewoon workflows te bouwen voor échte ondernemers, met vallen, opstaan en debuggen tot 's avonds laat.",
  },
  {
    icon: Rocket,
    title: "Mijn ambitie",
    text: "Doorgroeien van iemand die slim AI-tools inzet naar een Agentic Engineer die betrouwbare AI-systemen ontwerpt voor organisaties die geen ruimte hebben voor fouten. Dit traineeship is daarvoor de kortste, meest serieuze weg die ik ken.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-accent-cyan tracking-wide uppercase mb-4">
            Over mij
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Van ondernemer aan de telefoon tot bouwer van AI-agents
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Mijn pad naar AI liep niet via een informatica-opleiding. Het liep via vijf jaar
            eigen onderneming, een intensieve overstap naar programmeren, jaren klantcontact
            en douaneadministratie waar precisie geen keuze is, en uiteindelijk via avonden en
            weekenden waarin ik mezelf leerde AI-agents en workflows te bouwen. Wat begon als
            nieuwsgierigheid naar &quot;kan dit slimmer?&quot; is inmiddels een eigen praktijk:
            Leadz Systems, waar ik AI-automatisering bouw voor kleine ondernemers.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-7"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center mb-5"
              >
                <c.icon size={20} className="text-on-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 glass glass-hover rounded-2xl p-7 sm:p-9 grid sm:grid-cols-[auto_1fr] gap-7 items-center"
        >
          <div className="relative w-full sm:w-44 h-56 sm:h-56 rounded-2xl overflow-hidden mx-auto sm:mx-0 shrink-0">
            <Image
              src="/images/kika.jpg"
              alt="Jesse Bodde als finisher van de Berlin Marathon voor Stichting KiKa"
              fill
              sizes="(max-width: 640px) 220px, 176px"
              className="object-cover"
            />
          </div>
          <div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center mb-5"
            >
              <Medal size={20} className="text-on-accent" />
            </motion.div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Vrije tijd</h3>
            <p className="text-sm text-muted leading-relaxed">
              In mijn vrije tijd ben ik daarnaast fanatiek hardloper en zet ik mij jaarlijks in
              voor Stichting KiKa door marathons te lopen en geld op te halen voor kinderen met
              kanker. Dat vraagt om discipline, doorzettingsvermogen en het stellen van
              duidelijke doelen, dezelfde eigenschappen die ik meeneem in hoe ik werk en leer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
