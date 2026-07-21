"use client";

import { motion } from "framer-motion";
import { Building2, Users, Sparkles, GraduationCap, Gift } from "lucide-react";
import { whyTraineeship, profile } from "@/lib/data";

const items = [
  { icon: Building2, title: "Waarom dit bedrijf", text: whyTraineeship.company },
  { icon: Users, title: "Waarom consultancy", text: whyTraineeship.consultancy },
  { icon: Sparkles, title: "Waarom AI", text: whyTraineeship.ai },
  { icon: GraduationCap, title: "Wat ik wil leren", text: whyTraineeship.learn },
  { icon: Gift, title: "Wat ik kan bijdragen", text: whyTraineeship.contribute },
];

export default function WhyTraineeship() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-accent-cyan tracking-wide uppercase mb-4">
            Waarom dit traineeship
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            &quot;We zoeken denkkracht, niet CV-checks&quot;
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Die zin van {profile.companyName} raakt precies waarom ik solliciteer. Ik kom niet
            uit de informatica, ik kom uit ondernemerschap, klantcontact en logistiek. Dat is
            geen omweg naar AI, dat is de denkkracht die ik meeneem.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`glass glass-hover rounded-2xl p-7 ${
                i === items.length - 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-indigo flex items-center justify-center shrink-0"
                >
                  <item.icon size={18} className="text-on-accent" />
                </motion.div>
                <h3 className="text-foreground font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
