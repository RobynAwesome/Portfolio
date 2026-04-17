import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import {
  aiProduct,
  experience,
  featuredCaseStudy,
  profile,
  publicLinks,
  upcomingProject,
} from "../data/portfolioContent";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: easeCurve },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#060d18] text-white">
      <Hero />

      <section className="relative px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,232,157,0.08),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              The strongest proof lives where teams can inspect it quickly.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
              Bookit shows live delivery. Kopano Context shows AI systems thinking. Cars4Mars stays clearly upcoming.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.article
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.05 }}
              className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#00e89d]/20 bg-[#00e89d]/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#00e89d]">
                  Flagship Delivery
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                  {featuredCaseStudy.strapline}
                </span>
              </div>
              <h3 className="mt-5 text-3xl font-black text-white">{featuredCaseStudy.title}</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                {featuredCaseStudy.summary}
              </p>
              <p className="mt-5 text-sm leading-7 text-gray-400">
                Booking, payments, admin operations, and live venue support belong on the proof page, not the homepage.
              </p>
            </motion.article>

            <div className="grid gap-6">
              <motion.article
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 }}
                className="rounded-[8px] border border-white/10 bg-[#091326] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#38bdf8]">AI Systems Flagship</p>
                <h3 className="mt-4 text-2xl font-black text-white">{aiProduct.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Multi-agent orchestration with prompts, tools, evals, observability, and guardrails kept visible for technical review.
                </p>
              </motion.article>

              <motion.article
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.15 }}
                className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#fbbf24]">Upcoming</p>
                <h3 className="mt-4 text-2xl font-black text-white">{upcomingProject.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">{upcomingProject.summary}</p>
                <p className="mt-4 text-sm text-gray-400">
                  This stays framed as next work, not shipped proof.
                </p>
              </motion.article>
            </div>
          </div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.18 }}
            className="mt-8 flex justify-start"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e89d] transition-colors hover:text-[#34f0af]"
            >
              Open the full projects page
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/6 bg-[#07111f] px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div {...reveal}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
              Backstory
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              I work best where ownership spans product decisions, frontend execution, and delivery discipline.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-400">
              {experience[0].summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#00e89d]/30 hover:text-[#00e89d]"
              >
                Resume
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/open-source"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#00e89d]/30 hover:text-[#00e89d]"
              >
                Open Source
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
        <motion.div
          {...reveal}
          className="mx-auto max-w-5xl rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(14,165,233,0.08),rgba(0,232,157,0.08))] px-6 py-10 text-center sm:px-10 sm:py-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00e89d]">
            Open to hiring conversations
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Hire someone whose best work is already inspectable.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
            {profile.title}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#00e89d] px-5 py-3 text-sm font-bold text-[#06101d] transition-colors hover:bg-[#34f0af]"
            >
              Hire Me
              <ArrowRight size={16} />
            </Link>
            <a
              href={publicLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/12 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/24 hover:bg-white/[0.05]"
            >
              LinkedIn
              <ExternalLink size={15} />
            </a>
            <a
              href={publicLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[8px] border border-white/12 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/24 hover:bg-white/[0.05]"
            >
              GitHub
              <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
