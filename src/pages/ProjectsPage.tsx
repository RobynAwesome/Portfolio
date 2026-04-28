import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import {
  aiProduct,
  featuredCaseStudy,
  supportingProjects,
  upcomingProject,
} from "../data/portfolioContent";

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="brand-kicker">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--brand-text)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--brand-soft-text)]">{body}</p>
    </div>
  );
}

function ProjectLink({ label, href }: { label: string; href: string }) {
  const isRepo = /github/i.test(label) || /repository/i.test(label);
  const Icon = isRepo ? Github : ExternalLink;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(208,133,77,0.18)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-text)] transition-colors hover:bg-[rgba(208,133,77,0.12)]"
    >
      <Icon size={15} />
      {label}
    </a>
  );
}

function DetailList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="brand-panel rounded-[22px] p-6">
      <p className="brand-kicker">{title}</p>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--brand-soft-text)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <ArrowRight size={16} className={`mt-1 flex-shrink-0 ${accent}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="brand-page overflow-hidden pb-24 pt-28">
      <section className="relative overflow-hidden border-b border-[rgba(208,133,77,0.12)] pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,133,77,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(118,143,92,0.1),transparent_26%)]" />
        <div className="brand-topography absolute inset-0 opacity-30" />
        <div className="brand-grid absolute inset-0 opacity-28" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="brand-kicker">Projects</p>
            <h1 className="mt-4 text-[3rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--brand-text)] sm:text-[4.6rem]">
              Delivery first, systems depth second, experiments clearly labeled.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--brand-soft-text)] sm:text-lg">
              This page returns to the original structure: flagship delivery, AI systems proof,
              clearly separated upcoming work, and supporting builds underneath.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Bookit Flagship"
            title={featuredCaseStudy.title}
            body="A live product surface where delivery, operations, and product responsibility are easy to inspect quickly."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="brand-panel overflow-hidden rounded-[24px]">
              <div className="relative aspect-[4/5] overflow-hidden border-b border-[rgba(208,133,77,0.12)]">
                <img
                  src="/project-banners/bookit-banner-opt.png"
                  alt="Bookit 5s Arena project visual"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,7,0.08),rgba(5,7,7,0.7))]" />
              </div>

              <div className="p-6">
                <p className="brand-kicker">Result First</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                  A live booking and venue operations product.
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--brand-soft-text)]">
                  {featuredCaseStudy.summary}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featuredCaseStudy.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[16px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-[var(--brand-text)]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <DetailList
                title="Architecture"
                items={featuredCaseStudy.architecture}
                accent="text-[var(--brand-olive)]"
              />
              <div className="grid gap-5 lg:grid-cols-2">
                <DetailList
                  title="Tradeoffs"
                  items={featuredCaseStudy.tradeoffs}
                  accent="text-[var(--brand-accent-soft)]"
                />
                <DetailList
                  title="Production Lessons"
                  items={featuredCaseStudy.productionLessons}
                  accent="text-[var(--brand-olive)]"
                />
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {featuredCaseStudy.links.map((link) => (
              <ProjectLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Context Systems"
            title={aiProduct.title}
            body="The original AI systems section stays intact, but it now sits inside the same darker studio language as the rest of the portfolio."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mt-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]"
          >
            <div className="brand-panel rounded-[24px] p-6">
              <p className="brand-kicker">Problem</p>
              <p className="mt-4 text-sm leading-8 text-[var(--brand-soft-text)]">
                {aiProduct.problem}
              </p>

              <div className="mt-6 grid gap-3">
                {aiProduct.measurableResults.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[16px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-[var(--brand-text)]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 lg:grid-cols-2">
                <DetailList
                  title="Architecture"
                  items={aiProduct.architecture}
                  accent="text-[var(--brand-olive)]"
                />
                <DetailList
                  title="Prompts + Tools"
                  items={aiProduct.promptAndTooling}
                  accent="text-[var(--brand-accent-soft)]"
                />
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                <DetailList
                  title="Eval Approach"
                  items={aiProduct.evalApproach}
                  accent="text-[var(--brand-olive)]"
                />
                <div className="brand-panel rounded-[22px] p-6">
                  <p className="brand-kicker">Failure Cases</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--brand-soft-text)]">
                    {aiProduct.failureCases.map((item) => (
                      <li key={item} className="flex gap-3">
                        <AlertTriangle
                          size={16}
                          className="mt-1 flex-shrink-0 text-[var(--brand-accent-soft)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {aiProduct.links.map((link) => (
              <ProjectLink key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(208,133,77,0.12)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Upcoming Build"
            title={upcomingProject.title}
            body="This remains explicitly separated from shipped proof, exactly as the original projects page intended."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="brand-panel mt-10 grid gap-6 rounded-[24px] p-6 lg:grid-cols-[1fr_0.94fr]"
          >
            <div>
              <p className="text-base leading-8 text-[var(--brand-soft-text)]">
                {upcomingProject.summary}
              </p>
              <div className="mt-6 grid gap-3">
                {upcomingProject.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm leading-7 text-[var(--brand-soft-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[18px] border border-[rgba(208,133,77,0.22)] bg-[rgba(208,133,77,0.1)] p-5">
                <p className="brand-kicker">Verified Public Status</p>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-text)]">
                  Entries close on <span className="font-semibold">30 April 2026</span>. The build
                  priority stays on mobility, control, video, and detection before higher-risk autonomy.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {upcomingProject.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-[10px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--brand-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {upcomingProject.links.map((link) => (
                  <ProjectLink key={link.href} label={link.label} href={link.href} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Supporting Work"
            title="Additional delivery proof"
            body="The original supporting grid is preserved here, only restyled into the new corporate shell."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="brand-panel rounded-[22px] p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="brand-kicker">{project.status}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.links[0]?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-text)]"
                    aria-label={`Open ${project.title}`}
                  >
                    {/github|repository/i.test(project.links[0]?.label ?? "") ? (
                      <Github size={18} />
                    ) : (
                      <ExternalLink size={18} />
                    )}
                  </a>
                </div>

                <p className="mt-3 text-sm text-[var(--brand-accent-soft)]">{project.strapline}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--brand-soft-text)]">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-[10px] border border-[rgba(234,223,207,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--brand-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <ProjectLink key={link.href} label={link.label} href={link.href} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
