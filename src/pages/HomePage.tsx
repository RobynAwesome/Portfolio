import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Globe2,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import StudioProjectCard from "../components/StudioProjectCard";
import {
  canonicalBio,
  homeHighlights,
  homeMetrics,
  homeQuote,
  homeTraits,
  studioLinks,
  studioNotes,
  studioProjects,
} from "../data/siteContent";

const statIcons = [Building2, MapPin, Star];

export default function HomePage() {
  return (
    <main className="brand-page overflow-hidden">
      <section className="relative overflow-hidden border-b border-[rgba(208,133,77,0.12)] pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,133,77,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(118,143,92,0.12),transparent_28%)]" />
        <div className="brand-topography absolute inset-0 opacity-40" />
        <div className="brand-grid absolute inset-0 opacity-35" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="brand-panel relative overflow-hidden rounded-[28px]">
                <div className="absolute left-4 top-12 hidden items-center gap-4 lg:flex">
                  <p className="[writing-mode:vertical-rl] rotate-180 font-mono text-[12px] uppercase tracking-[0.28em] text-[var(--brand-olive)]/80">
                    S.18.4241° E 33.9249°
                  </p>
                </div>

                <img
                  src="/profile.jpg"
                  alt='Portrait of Kholofelo "Robyn" Rababalela'
                  className="min-h-[520px] w-full object-cover object-[center_18%] sm:min-h-[620px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,0.16)_0%,rgba(5,7,7,0.06)_34%,rgba(5,7,7,0.45)_100%),linear-gradient(180deg,rgba(5,7,7,0.06)_0%,rgba(5,7,7,0.12)_58%,rgba(5,7,7,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(circle_at_10%_75%,rgba(229,165,108,0.55),transparent_18%),radial-gradient(circle_at_24%_82%,rgba(214,146,89,0.55),transparent_16%),radial-gradient(circle_at_42%_78%,rgba(240,200,140,0.4),transparent_16%),radial-gradient(circle_at_64%_82%,rgba(224,163,95,0.38),transparent_17%),radial-gradient(circle_at_80%_74%,rgba(214,146,89,0.35),transparent_15%)] opacity-80" />
                <div className="absolute bottom-4 left-4 hidden h-8 w-8 items-center justify-center rounded-full border border-[rgba(122,152,102,0.45)] text-[var(--brand-olive)] lg:flex">
                  <Globe2 size={15} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative pb-2"
            >
              <p className="brand-kicker">
                {homeTraits.map((trait, index) => (
                  <span key={trait}>
                    {index > 0 ? " • " : ""}
                    {trait}
                  </span>
                ))}
              </p>

              <h1 className="mt-5 text-[3.1rem] font-semibold leading-[0.9] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.8rem] lg:text-[6rem]">
                <span className="block">Kholofelo</span>
                <span className="block">“Robyn”</span>
                <span className="block">Rababalela</span>
              </h1>

              <div className="mt-7 h-px w-16 bg-[rgba(208,133,77,0.8)]" />
              <p className="mt-5 font-mono text-[1rem] uppercase tracking-[0.12em] text-[var(--brand-olive)] sm:text-[1.15rem]">
                {canonicalBio.role}
              </p>
              <p className="mt-4 text-[2rem] font-medium leading-none tracking-[-0.03em] text-[var(--brand-accent-soft)] sm:text-[3rem]">
                Unity through Technology
              </p>
              <p className="mt-4 max-w-2xl font-mono text-[1rem] leading-7 text-[var(--brand-soft-text)]">
                Sovereign digital infrastructure for African realities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={studioLinks.kopanoLabs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  Visit Kopano Labs
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#featured-projects"
                  className="brand-button-olive inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  See Projects
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-0 overflow-hidden rounded-[20px] border border-[rgba(208,133,77,0.12)] bg-[rgba(9,12,12,0.86)] md:grid-cols-3">
            {homeMetrics.map((metric, index) => {
              const Icon = statIcons[index];

              return (
                <div
                  key={metric.label}
                  className="flex gap-4 border-b border-[rgba(208,133,77,0.12)] px-6 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(208,133,77,0.2)] text-[var(--brand-accent-soft)]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="brand-kicker text-[10px]">{metric.label}</p>
                    <p className="mt-2 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--brand-text)]">
                      {metric.value}
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--brand-muted)]">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative border-b border-[rgba(208,133,77,0.12)] bg-[#080b0c] py-16 sm:py-20"
      >
        <div className="brand-topography absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="brand-kicker">About</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.2rem]">
              I architect systems that serve our people.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-8 text-[var(--brand-soft-text)]">
              {homeHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="brand-panel brand-topography rounded-[24px] p-6 sm:p-8"
          >
            <p className="text-5xl leading-none text-[var(--brand-olive)]">“</p>
            <p className="mt-3 max-w-xl text-[1.7rem] leading-[1.5] tracking-[-0.03em] text-[var(--brand-text)] sm:text-[2rem]">
              {homeQuote}
            </p>
            <div className="mt-8 h-px w-14 bg-[rgba(208,133,77,0.8)]" />
            <div className="mt-6 flex items-center gap-3 text-sm text-[var(--brand-muted)]">
              <Sparkles size={16} className="text-[var(--brand-olive)]" />
              <p>Faith guides. Purpose drives. People first.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="featured-projects"
        className="border-b border-[rgba(208,133,77,0.12)] bg-[#070909] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="brand-kicker">Featured Projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-text)] sm:text-4xl">
                Public work with clear operating context.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--brand-olive)] transition-colors hover:text-[var(--brand-text)]"
            >
              View all projects
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {studioProjects.map((project, index) => (
              <StudioProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#070909] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="brand-panel brand-topography grid gap-6 rounded-[24px] p-6 sm:p-8 lg:grid-cols-[240px_1fr_auto] lg:items-center"
          >
            <div className="flex h-44 items-center justify-center rounded-[18px] border border-[rgba(208,133,77,0.18)] bg-[rgba(8,11,12,0.82)]">
              <img src="/favicon.svg" alt="Kopano Labs mark" className="h-24 w-24" />
            </div>

            <div>
              <p className="brand-kicker">The Studio</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-text)]">
                Kopano Labs
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--brand-soft-text)]">
                A sovereign product studio building the digital backbone of Africa’s future.
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                {studioNotes.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-sm text-[var(--brand-muted)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent-soft)]" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--brand-muted)]">
                Product studio. Systems thinking. African excellence.
              </p>
            </div>

            <Link
              to="/kopano-labs"
              className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              Explore Kopano Labs
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
