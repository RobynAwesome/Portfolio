import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
} from "lucide-react";
import CVDownloadButton from "../components/cv-download/CVDownloadButton";
import CVPickerModal from "../components/cv-download/CVPickerModal";
import {
  aiProduct,
  courseworkCredentials,
  experience,
  featuredCaseStudy,
  publicBadges,
  profile,
  publicLinks,
  qualitySignals,
  supportingProjects,
  verifiedCredentials,
} from "../data/portfolioContent";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: easeCurve },
};

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#00e89d]/20 bg-[#00e89d]/10">
        <Icon size={18} className="text-[#00e89d]" />
      </div>
      <h2 className="text-2xl font-black tracking-tight text-white">{title}</h2>
    </div>
  );
}

export default function ResumePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060d18] pb-24 pt-24 text-white">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(8,14,28,0.92)] shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
        >
          <div className="h-[2px] bg-[linear-gradient(90deg,transparent,#00e89d,#0ea5e9,transparent)]" />

          <div className="p-6 sm:p-10 lg:p-14">
            <section className="grid gap-8 border-b border-white/8 pb-10 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00e89d]">
                  Resume
                </p>
                <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-4 max-w-3xl text-xl font-semibold text-[#d9fced]">
                  Junior software engineer with shipped product work and credible AI-systems depth.
                </p>
                <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300">
                  Best fit for teams hiring across frontend delivery, product systems, documentation, and quality-minded implementation.
                </p>

                <div className="mt-8 grid gap-3 text-sm text-gray-400 sm:grid-cols-2">
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white">
                    <Mail size={16} className="text-[#00e89d]" />
                    {profile.email}
                  </a>
                  <div className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-[#0ea5e9]" />
                    {profile.location}
                  </div>
                  <a
                    href={publicLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <Linkedin size={16} className="text-[#0ea5e9]" />
                    LinkedIn
                  </a>
                  <a
                    href={publicLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <Github size={16} className="text-[#00e89d]" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <div className="w-full rounded-[8px] border border-white/10 bg-white/[0.03] p-5 lg:max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00e89d]">
                    Hiring Summary
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-gray-300">
                    <p className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                      Flagship shipped system: Bookit for 5&apos;s Arena.
                    </p>
                    <p className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                      Flagship AI systems proof: Kopano Context.
                    </p>
                    <p className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                      Delivery spans build, quality, deployment, and documentation.
                    </p>
                  </div>
                </div>

                <CVDownloadButton variant="inline" onClick={() => setCvModalOpen(true)} />
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle icon={Briefcase} title="Delivery Experience" />
              <div className="space-y-8">
                {experience.map((item) => (
                  <motion.div
                    key={`${item.role}-${item.company}`}
                    {...reveal}
                    className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-7"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white">{item.role}</h3>
                        <p className="mt-1 text-sm font-semibold text-[#00e89d]">{item.company}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.period} · {item.location}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300">{item.summary}</p>

                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">
                          Delivery ownership
                        </p>
                        <ul className="mt-3 space-y-3 text-sm leading-7 text-gray-400">
                          {item.achievements.map((achievement) => (
                            <li key={achievement} className="flex gap-3">
                              <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">
                          Systems touched
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.systems.map((system) => (
                            <span
                              key={system}
                              className="rounded-full border border-white/10 bg-[#081224] px-3 py-1.5 text-xs font-medium text-gray-200"
                            >
                              {system}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={Rocket} title="Selected Work" />
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div {...reveal} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00e89d]">
                    Shipped System
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">{featuredCaseStudy.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{featuredCaseStudy.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-300">
                    {featuredCaseStudy.tradeoffs.slice(0, 3).map((line) => (
                      <li key={line} className="flex gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#0ea5e9]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div {...reveal} className="rounded-[8px] border border-white/10 bg-[#091326] p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a855f7]">
                    AI Systems Proof
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white">{aiProduct.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{aiProduct.problem}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-300">
                    {[
                      aiProduct.promptAndTooling[0],
                      aiProduct.evalApproach[0],
                      aiProduct.failureCases[0],
                    ].map((line) => (
                      <li key={line} className="flex gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={FileCheck2} title="Testing / Quality / Deployment" />
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {qualitySignals.map((signal) => (
                  <motion.div
                    key={signal.title}
                    {...reveal}
                    className="rounded-[8px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-lg font-black text-white">{signal.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">{signal.summary}</p>
                    <p className="mt-4 text-sm font-medium text-gray-200">{signal.evidence}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={GraduationCap} title="Education" />
              <motion.div {...reveal} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <h3 className="text-xl font-black text-white">
                  Bachelor of Engineering Technology — Computer Engineering
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#00e89d]">
                  Cape Peninsula University of Technology
                </p>
                <p className="mt-2 text-sm text-gray-500">2025 — Present</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300">
                  Current studies strengthen the systems mindset behind the public portfolio work: software design,
                  engineering rigor, and applied problem-solving rather than frontend-only delivery.
                </p>
              </motion.div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={Award} title="Verified Credentials" />
              <motion.div {...reveal} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <div className="space-y-4">
                  {verifiedCredentials.map((credential) => (
                    <div
                      key={`${credential.title}-${credential.issuer}`}
                      className="flex flex-col gap-3 border-b border-white/8 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{credential.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-500">
                          {credential.issuer} · {credential.date}
                        </p>
                      </div>
                      {credential.href ? (
                        <a
                          href={credential.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399]"
                        >
                          View credential
                          <ExternalLink size={14} />
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={Award} title="Badges / Profile Proof" />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {publicBadges.map((badge) => (
                  <motion.a
                    key={`${badge.title}-${badge.source}`}
                    {...reveal}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[8px] border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#00e89d]/30"
                  >
                    <p className="text-lg font-black text-white">{badge.title}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#00e89d]">
                      {badge.source} · {badge.kind}
                    </p>
                    {badge.note ? <p className="mt-3 text-sm leading-7 text-gray-400">{badge.note}</p> : null}
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5e9]">
                      Open proof
                      <ExternalLink size={14} />
                    </span>
                  </motion.a>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={Award} title="Coursework" />
              <motion.div {...reveal} className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <div className="space-y-4">
                  {courseworkCredentials.map((credential) => (
                    <div
                      key={`${credential.title}-${credential.issuer}`}
                      className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="text-sm font-semibold text-white">{credential.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-500">
                        {credential.issuer} · {credential.date}
                      </p>
                      {credential.note ? <p className="mt-2 text-sm leading-7 text-gray-400">{credential.note}</p> : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="mt-12">
              <SectionTitle icon={Github} title="Supporting Work" />
              <div className="grid gap-4 md:grid-cols-2">
                {supportingProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    {...reveal}
                    className="rounded-[8px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-lg font-black text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#00e89d]">{project.strapline}</p>
                    <p className="mt-3 text-sm leading-7 text-gray-400">{project.summary}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      <CVDownloadButton variant="floating" onClick={() => setCvModalOpen(true)} />
      <CVPickerModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
