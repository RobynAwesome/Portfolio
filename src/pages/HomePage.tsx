import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Download,
  Globe2,
  GraduationCap,
  MapPin,
  Music4,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import EcosystemDiagram from "../components/EcosystemDiagram";
import FaithPurposeOrbit from "../components/FaithPurposeOrbit";
import StudioProjectCard from "../components/StudioProjectCard";
import CVPickerModal from "../components/cv-download/CVPickerModal";
import {
  canonicalBio,
  educationSignals,
  homeHighlights,
  homeMetrics,
  homeQuote,
  homeTraits,
  studioLinks,
  studioNotes,
  studioProjects,
} from "../data/siteContent";

const statIcons = [Building2, GraduationCap, BookOpen, MapPin];

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [kopanoOpen, setKopanoOpen] = useState(false);
  const [amaPhuOpen, setAmaPhuOpen] = useState(false);

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

          <div className="mt-10 grid gap-0 overflow-hidden rounded-[20px] border border-[var(--brand-line)] bg-[var(--brand-surface)] md:grid-cols-2 xl:grid-cols-4">
            {homeMetrics.map((metric, index) => {
              const Icon = statIcons[index];

              return (
                <div
                  key={metric.label}
                  className="flex gap-4 border-b border-[var(--brand-line)] px-6 py-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[var(--brand-line)] text-[var(--brand-accent-soft)]">
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
        className="relative border-b border-[var(--brand-line)] bg-[var(--brand-bg)] py-16 sm:py-20"
      >
        <div className="brand-topography absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <p className="brand-kicker">About</p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.2rem]">
                Systems that serve people.
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
              <FaithPurposeOrbit />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="cape-town"
        className="relative border-b border-[var(--brand-line)] bg-[var(--brand-bg)] py-14 sm:py-16"
        data-asset-status="ASSET_REQUIRED"
      >
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-12">
          <div>
            <p className="brand-kicker">Origin</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
              Built in Cape Town.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--brand-soft-text)]">
              Built for people.
            </p>
          </div>
          <div
            className="relative min-h-[220px] overflow-hidden rounded-[24px] border border-dashed border-[var(--brand-accent-soft)] bg-[var(--brand-surface)] p-6"
            aria-label="Cape Town visual placeholder — owned asset required"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--brand-olive)]">
              ASSET_REQUIRED
            </p>
            <p className="mt-4 max-w-sm text-lg font-semibold tracking-[-0.03em] text-[var(--brand-text)]">
              Table Mountain / city landscape — owned photo not yet vendored.
            </p>
            <p className="mt-3 text-sm text-[var(--brand-muted)]">
              No stock photography. Coordinates hold the place until an approved local asset lands.
            </p>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--brand-accent-soft)]">
              S 33.9249° · E 18.4241°
            </p>
          </div>
        </div>
      </section>

      <section
        id="featured-projects"
        className="border-b border-[var(--brand-line)] bg-[var(--brand-bg)] py-16 sm:py-20"
      >
        <div className="mx-auto mb-14 max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="brand-panel mode-map-panel rounded-[28px] p-6 sm:p-8"
          >
            <EcosystemDiagram />
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="mb-12 grid gap-5 md:grid-cols-2"
          >
            {educationSignals.map((item) => (
              <div key={item.institution} className="brand-panel rounded-[24px] p-6">
                <p className="brand-kicker">Education</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                  {item.institution}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[var(--brand-accent-soft)]">
                  {item.award}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--brand-olive)]">
                  {item.period}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--brand-soft-text)]">{item.note}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="brand-kicker">Featured Projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-text)] sm:text-4xl">
                Built. Shipped. Proven.
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

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {studioProjects.map((project, index) => (
              <StudioProjectCard key={project.title} project={project} index={index} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="max-w-3xl">
              <p className="brand-kicker">Execution Lanes</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
                Two Worlds. One Mission.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--brand-soft-text)]">
                Systems and culture. Same operator. Same proof standard.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              role="button"
              tabIndex={0}
              onClick={() => setKopanoOpen((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setKopanoOpen((value) => !value);
                }
              }}
              onMouseEnter={() => setKopanoOpen(true)}
              onFocus={() => setKopanoOpen(true)}
              aria-expanded={kopanoOpen}
              className={`brand-panel brand-topography grid cursor-pointer gap-6 rounded-[24px] p-6 text-left sm:p-8 lg:grid-cols-[220px_1fr] lg:items-center ${
                kopanoOpen ? "ring-1 ring-[var(--brand-accent-soft)]" : ""
              }`}
            >
              <div className="flex h-44 items-center justify-center rounded-[18px] border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] p-6">
                <img
                  src="/kopano-labs-logo.png"
                  alt="Kopano Labs logo"
                  className="max-h-28 w-full object-contain"
                />
              </div>

              <div>
                <p className="brand-kicker">Kopano</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-text)]">
                  Systems. Research. Products.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--brand-soft-text)]">
                  Sovereign product studio for African digital infrastructure.
                </p>
                <motion.div
                  animate={{ height: kopanoOpen ? "auto" : 0, opacity: kopanoOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
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
                </motion.div>
                <div className="mt-6">
                  <Link
                    to="/kopano-labs"
                    className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Explore Kopano Labs
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              role="button"
              tabIndex={0}
              onClick={() => setAmaPhuOpen((value) => !value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setAmaPhuOpen((value) => !value);
                }
              }}
              onMouseEnter={() => setAmaPhuOpen(true)}
              onFocus={() => setAmaPhuOpen(true)}
              aria-expanded={amaPhuOpen}
              className={`brand-panel brand-topography grid cursor-pointer gap-6 rounded-[24px] p-6 text-left sm:p-8 lg:grid-cols-[220px_1fr] lg:items-center ${
                amaPhuOpen ? "ring-1 ring-[var(--brand-accent-soft)]" : ""
              }`}
            >
              <div className="flex h-44 flex-col justify-between rounded-[18px] border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] p-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--brand-line)] text-[var(--brand-accent-soft)]">
                  <Music4 size={22} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--brand-olive)]">
                    Music · Culture · Artists
                  </p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                    Ama-Phu Entertainment
                  </p>
                </div>
              </div>

              <div>
                <p className="brand-kicker">Ama-Phu</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-text)]">
                  Music. Culture. Live.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--brand-soft-text)]">
                  Creative lane with listening, discovery, and arena crossover.
                </p>
                <motion.div
                  animate={{ height: amaPhuOpen ? "auto" : 0, opacity: amaPhuOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 flex flex-wrap gap-4">
                    {["Music surface", "Creator routing", "5's Arena crossover"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 text-sm text-[var(--brand-muted)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent-soft)]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/ama-phu-entertainment"
                    className="brand-button-copper inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Explore Ama-Phu
                    <ArrowUpRight size={16} />
                  </Link>
                  <a
                    href={studioLinks.amaPhuEntertainment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-button-olive inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Open link hub
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-[rgba(208,133,77,0.12)] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,232,157,0.06),transparent_40%)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl px-5 text-center sm:px-8"
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[rgba(0,232,157,0.8)]">
            Looking to hire?
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-text)] sm:text-4xl">
            Download my CV
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--brand-soft-text)]">
            Pick a role focus. Get a tailored PDF.
          </p>
          <button
            type="button"
            onClick={() => setCvModalOpen(true)}
            className="mt-8 inline-flex items-center gap-3 rounded-[12px] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #00e89d, #34d399)",
              color: "#060d18",
              boxShadow: "0 0 30px rgba(0,232,157,0.2)",
            }}
          >
            <Download size={16} />
            Get Tailored CV
          </button>
        </motion.div>
      </section>

      <CVPickerModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
