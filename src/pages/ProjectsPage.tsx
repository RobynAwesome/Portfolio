import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, ExternalLink, Github } from "lucide-react";
import {
  aiProduct,
  featuredCaseStudy,
  supportingProjects,
  upcomingProject,
} from "../data/portfolioContent";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: easeCurve },
};

function SectionHeader({
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
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00e89d]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">{body}</p>
    </div>
  );
}

function LinkRow({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399]"
    >
      {label}
      <ExternalLink size={14} />
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060d18] pb-24 pt-28 text-white">
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,232,157,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_24%)]" />
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="max-w-4xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
              Projects
            </p>
            <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Start with the shipped system, then read the AI systems proof.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              This page is staged for hiring review: Bookit first, Kopano Context second, Cars4Mars clearly upcoming, then supporting work underneath.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Bookit Flagship"
            title={featuredCaseStudy.title}
            body="The clearest shipped proof in the portfolio. This is where delivery, operations, and product responsibility are easiest to inspect."
          />

          <motion.div
            {...reveal}
            className="mt-10 rounded-[8px] border border-white/10 bg-white/[0.03] p-7 sm:p-10"
          >
            <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[8px] border border-white/10 bg-[#081224] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00e89d]">
                  Result First
                </p>
                <h3 className="mt-4 text-3xl font-black text-white">A live booking and venue-operations product.</h3>
                <p className="mt-4 text-sm leading-8 text-gray-300">{featuredCaseStudy.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {featuredCaseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[8px] border border-white/8 bg-white/[0.03] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">{metric.label}</p>
                      <p className="mt-2 text-lg font-bold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">Role + System</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-300">
                    {featuredCaseStudy.architecture.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowRight size={16} className="mt-1 flex-shrink-0 text-[#00e89d]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0ea5e9]">Tradeoffs</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
                      {featuredCaseStudy.tradeoffs.map((item) => (
                        <li key={item} className="flex gap-3">
                          <ArrowRight size={16} className="mt-1 flex-shrink-0 text-[#0ea5e9]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a855f7]">Production Lessons</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
                      {featuredCaseStudy.productionLessons.map((item) => (
                        <li key={item} className="flex gap-3">
                          <ArrowRight size={16} className="mt-1 flex-shrink-0 text-[#a855f7]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {featuredCaseStudy.links.map((link) => (
                <LinkRow key={link.href} label={link.label} href={link.href} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="KC Flagship"
            title={aiProduct.title}
            body="The clearest AI systems proof in the portfolio. This section keeps prompts, tools, evals, failure cases, and observability visible."
          />

          <motion.div
            {...reveal}
            className="mt-10 rounded-[8px] border border-white/10 bg-[#091326] p-7 sm:p-10"
          >
            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">Problem</p>
                <p className="mt-4 text-sm leading-8 text-gray-300">{aiProduct.problem}</p>
                <div className="mt-6 grid gap-3">
                  {aiProduct.measurableResults.map((metric) => (
                    <div key={metric.label} className="rounded-[8px] border border-white/8 bg-[#081224] px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">{metric.label}</p>
                      <p className="mt-2 text-lg font-bold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-5 lg:grid-cols-2">
                  <DetailPanel title="Architecture" items={aiProduct.architecture} accent="text-[#00e89d]" />
                  <DetailPanel title="Prompts + Tools" items={aiProduct.promptAndTooling} accent="text-[#0ea5e9]" />
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  <DetailPanel title="Eval Approach" items={aiProduct.evalApproach} accent="text-[#a855f7]" />
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f97316]">Failure Cases</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
                      {aiProduct.failureCases.map((item) => (
                        <li key={item} className="flex gap-3">
                          <AlertTriangle size={16} className="mt-1 flex-shrink-0 text-[#f97316]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              {aiProduct.links.map((link) => (
                <LinkRow key={link.href} label={link.label} href={link.href} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#07111f] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Cars4Mars"
            title={upcomingProject.title}
            body="Upcoming only. This is intentionally separated from shipped proof and framed with explicit public-status language."
          />

          <motion.div
            {...reveal}
            className="mt-10 grid gap-6 rounded-[8px] border border-white/10 bg-white/[0.03] p-7 sm:p-10 xl:grid-cols-[1fr_0.95fr]"
          >
            <div>
              <p className="text-sm leading-8 text-gray-300">{upcomingProject.summary}</p>
              <div className="mt-6 grid gap-3">
                {upcomingProject.highlights.map((item) => (
                  <div key={item} className="rounded-[8px] border border-white/8 bg-[#081224] px-4 py-4 text-sm leading-7 text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-[8px] border border-[#f59e0b]/20 bg-[#f59e0b]/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fbbf24]">
                  Verified Public Status
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-200">
                  Entries close on <span className="font-semibold">30 April 2026</span>. The build focus remains mobility,
                  control, video, and detection before higher-risk autonomy work.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {upcomingProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-5">
                {upcomingProject.links.map((link) => (
                  <LinkRow key={link.href} label={link.label} href={link.href} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <SectionHeader
            eyebrow="Supporting Work"
            title="Additional delivery proof"
            body="Useful secondary evidence for shipped breadth, client work, and product experimentation without competing with the main case studies."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <motion.div
                key={project.slug}
                {...reveal}
                className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00e89d]">
                      {project.status}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">{project.title}</h3>
                  </div>
                  <a
                    href={project.links[0]?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white"
                    aria-label={`Open ${project.title}`}
                  >
                    {project.status === "live" ? <ExternalLink size={18} /> : <Github size={18} />}
                  </a>
                </div>

                <p className="mt-3 text-sm text-[#0ea5e9]">{project.strapline}</p>
                <p className="mt-4 text-sm leading-7 text-gray-400">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <LinkRow key={link.href} label={link.label} href={link.href} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DetailPanel({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6">
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${accent}`}>{title}</p>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
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
