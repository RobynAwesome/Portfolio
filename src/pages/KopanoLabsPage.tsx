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
    <main className="brand-page overflow-hidden pb-24 pt-28">
      <section className="relative overflow-hidden border-b border-[rgba(208,133,77,0.12)] pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,133,77,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(118,143,92,0.1),transparent_28%)]" />
        <div className="brand-topography absolute inset-0 opacity-35" />
        <div className="brand-grid absolute inset-0 opacity-28" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="brand-kicker">Studio</p>
            <h1 className="mt-4 text-[3rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.6rem]">
              Kopano Labs builds systems that respect where they will actually be used.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--brand-soft-text)] sm:text-lg">
              This page is the portfolio-side summary: mission, live work, stack choices, and the
              studio posture behind the public brand.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={studioLinks.kopanoLabs}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Visit kopanolabs.com
                <ArrowUpRight size={16} />
              </a>
              <a
                href={studioLinks.email}
                className="brand-button-olive inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Contact the studio
                <Mail size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="brand-panel rounded-[24px] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 text-[var(--brand-accent-soft)]">
              <Layers3 size={18} />
              <p className="brand-kicker">Mission</p>
            </div>
            <p className="mt-5 text-base leading-7 text-[var(--brand-text)]">
              {canonicalBio.missionStatement}
            </p>
            <p className="mt-5 text-sm leading-7 text-[var(--brand-soft-text)]">
              The core operating belief is that local constraints are not edge cases. They are the
              design brief: power interruptions, data sovereignty, low-bandwidth usage, and operator
              clarity come before ornament.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {studioPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="brand-panel rounded-[22px] p-6"
              >
                <p className="text-xl font-semibold tracking-[-0.03em] text-[var(--brand-text)]">
                  {principle.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--brand-soft-text)]">
                  {principle.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="brand-kicker">Active Projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
                The work currently carrying the studio thesis.
              </h2>
            </div>
            <a
              href={studioLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--brand-olive)] transition-colors hover:text-[var(--brand-text)]"
            >
              Browse GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {studioProjects.map((project, index) => (
              <StudioProjectCard key={project.title} project={project} index={index} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="brand-kicker">Tech Stack</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
            Current platform choices.
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {canonicalBio.stack.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="brand-panel rounded-[18px] px-5 py-4 text-sm text-[var(--brand-soft-text)]"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="brand-panel brand-topography rounded-[24px] p-8 sm:p-10"
          >
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(208,133,77,0.16)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-olive)]">
                <Globe2 size={14} />
                Contact
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-text)] sm:text-4xl">
                Need the studio summary, the live work, or the public company surface?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--brand-soft-text)]">
                This page stays as the short portfolio-side overview. For the outward-facing company
                site and the latest public positioning, continue to kopanolabs.com.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={studioLinks.kopanoLabs}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
              >
                Go to Kopano Labs
                <ArrowUpRight size={16} />
              </a>
              <a
                href={studioLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-button-olive inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
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
