import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, Layers3, Mail } from "lucide-react";
import StudioProjectCard from "../components/StudioProjectCard";
import {
  canonicalBio,
  studioLinks,
  studioPrinciples,
  studioProjects,
} from "../data/siteContent";

export default function KopanoLabsPage() {
  return (
    <main className="min-h-screen bg-[#07110f] pt-28 pb-24">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(127,224,177,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(217,170,100,0.12),_transparent_28%)]" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#9bf0c5]">
              Kopano Labs
            </p>
            <h1 className="mt-4 text-[2.8rem] font-semibold tracking-[-0.05em] text-[#f2f4ee] sm:text-[4.4rem]">
              A sovereign product studio built for African infrastructure realities.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#b2bcb5] sm:text-lg">
              Kopano Labs is where product architecture, resilient delivery, and context-aware systems meet.
              The studio focuses on dependable digital infrastructure for operators, communities, and platforms
              that cannot assume ideal power, perfect bandwidth, or offshore data habits.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={studioLinks.kopanoLabs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7fe0b1] px-6 py-3 text-sm font-semibold text-[#07100d]"
              >
                Visit kopanolabs.com
                <ArrowUpRight size={16} />
              </a>
              <a
                href={studioLinks.email}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-[#edf1ea]"
              >
                Contact the studio
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="rounded-[30px] border border-white/10 bg-[#111b19]/80 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <Layers3 className="text-[#d9aa64]" size={18} />
              <h2 className="text-2xl font-semibold tracking-tight text-[#f2f4ee]">Mission</h2>
            </div>
            <p className="mt-5 text-base leading-7 text-[#d7ddd6]">
              {canonicalBio.missionStatement}
            </p>
            <p className="mt-5 text-sm leading-7 text-[#aeb8b1]">
              The operating lens is simple: local constraints are not edge cases. They are the design brief.
              That means product decisions account for power interruptions, data sovereignty, regulatory clarity,
              and operator control before polish.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {studioPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[26px] border border-white/10 bg-[#0d1614] p-6"
              >
                <p className="text-lg font-semibold text-[#f2f4ee]">{principle.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#aab4ad]">{principle.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#9bf0c5]">
                Active Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f2f4ee] sm:text-4xl">
                Products currently carrying the studio thesis.
              </h2>
            </div>
            <a
              href={studioLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d9aa64]"
            >
              Browse GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {studioProjects.map((project, index) => (
              <StudioProjectCard key={project.title} project={project} index={index} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#9bf0c5]">
              Tech Stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f2f4ee] sm:text-4xl">
              Current studio platform choices.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {canonicalBio.stack.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[22px] border border-white/10 bg-[#111b19]/80 px-5 py-4 text-sm text-[#e7ebe5]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(127,224,177,0.08),rgba(217,170,100,0.08),rgba(255,255,255,0.02))] p-8 sm:p-10"
          >
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#9bf0c5]">
                <Globe2 size={14} />
                Contact
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f2f4ee] sm:text-4xl">
                Need the studio overview, the live work, or the public company page?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#b7c0ba]">
                This portfolio page is the short studio summary. For the public-facing company site and latest
                outward-facing positioning, continue to kopanolabs.com.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={studioLinks.kopanoLabs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7fe0b1] px-6 py-3 text-sm font-semibold text-[#07100d]"
              >
                Go to Kopano Labs
                <ArrowUpRight size={16} />
              </a>
              <a
                href={studioLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-[#edf1ea]"
              >
                Open LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
