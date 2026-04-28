import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, ShieldCheck } from "lucide-react";
import {
  aiProduct,
  featuredCaseStudy,
  publicBadges,
  publicLinks,
  qualitySignals,
  supportingProjects,
  verifiedCredentials,
} from "../data/portfolioContent";

const repositoryCards = [
  {
    title: featuredCaseStudy.title,
    summary:
      "Live booking and venue operations proof with both public deployment and public repository history.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Stripe"],
    links: featuredCaseStudy.links,
  },
  {
    title: aiProduct.title,
    summary:
      "Open systems work around orchestration, tooling, runtime control, and persistent context design.",
    tech: ["Python", "FastAPI", "LiteLLM", "SQLite"],
    links: aiProduct.links,
  },
  ...supportingProjects.slice(0, 4).map((project) => ({
    title: project.title,
    summary: project.summary,
    tech: project.tech.slice(0, 4),
    links: project.links,
  })),
];

function CardLink({ label, href }: { label: string; href: string }) {
  const isRepo = /github|repo/i.test(label);
  const Icon = isRepo ? Github : ExternalLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(234,223,207,0.1)] px-3.5 py-2 text-sm font-semibold text-[var(--brand-text)] transition-colors hover:border-[rgba(208,133,77,0.28)] hover:bg-[rgba(208,133,77,0.1)]"
    >
      <Icon size={14} />
      {label}
    </a>
  );
}

export default function OpenSourcePage() {
  return (
    <main className="brand-page overflow-hidden pb-24 pt-28">
      <section className="relative overflow-hidden border-b border-[rgba(208,133,77,0.12)] pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,133,77,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(118,143,92,0.1),transparent_28%)]" />
        <div className="brand-topography absolute inset-0 opacity-35" />
        <div className="brand-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="brand-kicker">Open Source</p>
            <h1 className="mt-4 text-[3rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.5rem]">
              Public proof, clean repos, and visible engineering habits.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--brand-soft-text)] sm:text-lg">
              This page drops the novelty modes and returns to a more corporate structure:
              repositories first, verification second, quality signals third.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="brand-kicker">Repositories</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
                Start with the repos that carry the clearest public trail.
              </h2>
            </div>
            <a
              href={publicLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--brand-olive)] transition-colors hover:text-[var(--brand-text)]"
            >
              GitHub profile
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {repositoryCards.map((repo, index) => (
              <motion.article
                key={repo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="brand-panel rounded-[22px] p-6"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                  {repo.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--brand-soft-text)]">{repo.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {repo.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-[10px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--brand-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {repo.links.map((link) => (
                    <CardLink key={link.href} label={link.label} href={link.href} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <p className="brand-kicker">Verified Credentials</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
              Public credentials that can be checked quickly.
            </h2>
            <div className="mt-8 space-y-4">
              {verifiedCredentials.slice(0, 6).map((credential) => (
                <a
                  key={credential.title}
                  href={credential.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-panel block rounded-[18px] p-5 transition-colors hover:border-[rgba(208,133,77,0.24)]"
                >
                  <p className="text-lg font-semibold text-[var(--brand-text)]">{credential.title}</p>
                  <p className="mt-2 text-sm text-[var(--brand-muted)]">
                    {credential.issuer} • {credential.date}
                  </p>
                  {credential.note && (
                    <p className="mt-3 text-sm leading-7 text-[var(--brand-soft-text)]">
                      {credential.note}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="brand-kicker">Public Badges</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
              Evidence that stays visible outside the resume.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {publicBadges.map((badge) => (
                <a
                  key={badge.title}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-panel rounded-[18px] p-5 transition-colors hover:border-[rgba(208,133,77,0.24)]"
                >
                  <p className="text-lg font-semibold text-[var(--brand-text)]">{badge.title}</p>
                  <p className="mt-2 text-sm text-[var(--brand-muted)]">
                    {badge.source} • {badge.kind}
                  </p>
                  {badge.note && (
                    <p className="mt-3 text-sm leading-7 text-[var(--brand-soft-text)]">
                      {badge.note}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="brand-kicker">Quality Signals</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
            Habits that make the public repos more trustworthy.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {qualitySignals.map((signal, index) => (
              <motion.article
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="brand-panel rounded-[22px] p-6"
              >
                <ShieldCheck size={18} className="text-[var(--brand-olive)]" />
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--brand-text)]">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-soft-text)]">
                  {signal.summary}
                </p>
                <p className="mt-4 text-sm text-[var(--brand-muted)]">{signal.evidence}</p>

                {signal.links?.length ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {signal.links.map((link) => (
                      <CardLink key={link.href} label={link.label} href={link.href} />
                    ))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="brand-panel brand-topography rounded-[24px] p-8 text-center sm:p-10"
          >
            <p className="brand-kicker">Open Profile</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-text)]">
              The fuller trail still lives on GitHub.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--brand-soft-text)]">
              Repositories, contribution history, and the wider implementation trail remain public
              and browseable through the main GitHub profile.
            </p>
            <a
              href={publicLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-copper mt-8 inline-flex items-center justify-center gap-3 rounded-[12px] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              Open GitHub
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
