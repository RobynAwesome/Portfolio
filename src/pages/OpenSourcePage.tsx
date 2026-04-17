import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ExternalLink, Github, ShieldCheck, Sparkles, TerminalSquare } from "lucide-react";
import {
  aiProduct,
  featuredCaseStudy,
  publicBadges,
  publicLinks,
  qualitySignals,
  supportingProjects,
} from "../data/portfolioContent";

type Mode = "studio" | "terminal" | "blueprint" | "arcade";

const modes: { key: Mode; label: string; hint: string }[] = [
  { key: "studio", label: "Studio", hint: "Curated view" },
  { key: "terminal", label: "Terminal", hint: "Repo-first" },
  { key: "blueprint", label: "Blueprint", hint: "System view" },
  { key: "arcade", label: "Arcade", hint: "Play mode" },
];

export default function OpenSourcePage() {
  const [mode, setMode] = useState<Mode>("studio");

  const engineeringIndex = useMemo(
    () => [
      {
        title: featuredCaseStudy.title,
        summary:
          "Primary production case study. Live bookings, payments, venue operations, and public repo history tied to a real business surface.",
        links: featuredCaseStudy.links,
        tags: ["production", "bookings", "payments", "ops"],
      },
      {
        title: aiProduct.title,
        summary:
          "Primary AI systems repo. Multi-agent orchestration, routing, trust checks, replay logs, test surfaces, and documentation depth.",
        links: aiProduct.links,
        tags: ["ai runtime", "tools", "evals", "safety"],
      },
      ...supportingProjects.map((project) => ({
        title: project.title,
        summary: project.summary,
        links: project.links,
        tags: project.tech.slice(0, 4),
      })),
    ],
    [],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060d18] pt-28 pb-24 text-white">
      <section className="relative overflow-hidden pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,232,157,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
              Open Source
            </p>
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Public work,
              <span className="block bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                with different ways to read it.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              The same public proof can be scanned four ways: curated, repo-first,
              systems-first, or playful. The evidence stays employer-readable in every mode.
            </p>
          </motion.div>

          <div className="mt-10 inline-flex flex-wrap gap-3 rounded-[8px] border border-white/10 bg-white/[0.03] p-2">
            {modes.map((item) => (
              <button
                key={item.key}
                onClick={() => setMode(item.key)}
                className={`rounded-[8px] px-4 py-2 text-sm font-semibold transition-all ${
                  mode === item.key
                    ? "bg-[#00e89d] text-[#060d18]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label} <span className="ml-1 text-xs opacity-70">{item.hint}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {mode === "studio" ? (
        <section className="py-6">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {engineeringIndex.map((entry, index) => (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-black text-white">{entry.title}</h2>
                    <Sparkles size={16} className="text-[#00e89d]" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{entry.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[#081224] px-3 py-1.5 text-xs font-medium text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {entry.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399]"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {mode === "terminal" ? (
        <section className="py-6">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="rounded-[28px] border border-[#0ea5e9]/20 bg-[#07111f] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3 text-[#00e89d]">
                <TerminalSquare size={18} />
                <p className="font-mono text-sm">open-source://public-index</p>
              </div>
              <div className="space-y-5 font-mono text-sm leading-7 text-gray-300">
                {engineeringIndex.map((entry) => (
                  <div key={entry.title} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-[#00e89d]">$ repo show {entry.title.toLowerCase().replace(/\s+/g, "-")}</p>
                    <p className="mt-2 text-white">{entry.summary}</p>
                    <p className="mt-2 text-gray-500">tags: {entry.tags.join(" · ")}</p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {entry.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0ea5e9] hover:text-[#38bdf8]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {mode === "blueprint" ? (
        <section className="py-6">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="rounded-[28px] border border-[#60a5fa]/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.10),rgba(6,13,24,0.88))] p-6 sm:p-8">
              <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-[#081224] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#60a5fa]">
                    System Layers
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      "Public surfaces: portfolio, live products, roadmap pages",
                      "Production flows: bookings, auth, payments, admin operations",
                      "AI layer: routing, moderation, tooling, replay logs, trust checks",
                      "Proof layer: tests, docs, credentials, public repo history",
                    ].map((line) => (
                      <div key={line} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <p className="text-sm leading-7 text-gray-300">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00e89d]">
                    Quality Signals
                  </p>
                  <div className="mt-5 space-y-4">
                    {qualitySignals.map((signal) => (
                      <div key={signal.title} className="border-l-2 border-[#00e89d]/40 pl-4">
                        <p className="text-sm font-semibold text-white">{signal.title}</p>
                        <p className="mt-2 text-sm leading-7 text-gray-400">{signal.evidence}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {mode === "arcade" ? (
        <section className="py-6">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[28px] border border-[#a855f7]/20 bg-[linear-gradient(180deg,rgba(168,85,247,0.14),rgba(6,13,24,0.95))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f472b6]">
                  Public Achievements
                </p>
                <div className="mt-5 grid gap-3">
                  {publicBadges.slice(0, 6).map((badge) => (
                    <a
                      key={badge.title}
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition-transform hover:-translate-y-0.5"
                    >
                      <p className="text-sm font-semibold text-white">{badge.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-500">
                        {badge.source}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#00e89d]/20 bg-[linear-gradient(180deg,rgba(0,232,157,0.10),rgba(6,13,24,0.95))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00e89d]">
                  Proof Board
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Live system", value: "Bookit / 5's Arena" },
                    { label: "AI build", value: "Kopano Context" },
                    { label: "Docs depth", value: "MCP vault + handbook" },
                    { label: "Profile hub", value: "GitHub + LinkedIn + HackerRank" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-xl font-black text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={publicLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[8px] bg-white px-5 py-2.5 text-sm font-bold text-[#060d18]"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={publicLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[8px] border border-white/15 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    <ExternalLink size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-white/5 bg-[#07111f] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00e89d]">
              What Repos Prove
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Quality, safety, and public traceability
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {qualitySignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <ShieldCheck size={18} className="text-[#00e89d]" />
                <h3 className="mt-4 text-lg font-black text-white">{signal.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{signal.summary}</p>
                <p className="mt-4 text-sm font-medium text-gray-200">{signal.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
