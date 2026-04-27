import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StudioProjectCard from "../components/StudioProjectCard";
import { studioLinks, studioProjects } from "../data/siteContent";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#07110f] pb-24 pt-28">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(127,224,177,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(217,170,100,0.12),_transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bf0c5]">
              Projects
            </p>
            <h1 className="mt-4 text-[2.8rem] font-semibold tracking-[-0.05em] text-[#f2f4ee] sm:text-[4.4rem]">
              Product work grounded in infrastructure, not theater.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#b3bdb6] sm:text-lg">
              The current portfolio focus is narrower and more deliberate: fewer projects, stronger operating
              context, and clearer alignment with Kopano Labs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {studioProjects.map((project, index) => (
              <StudioProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 pt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[30px] border border-white/10 bg-[#111b19]/80 p-8 sm:p-10"
          >
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f2f4ee] sm:text-4xl">
              More source material lives on GitHub.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#b5beb8]">
              The public portfolio now foregrounds the studio thesis, while GitHub remains the fuller trail of
              experiments, prototypes, and implementation detail.
            </p>
            <a
              href={studioLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#7fe0b1] px-6 py-3 text-sm font-semibold text-[#07100d]"
            >
              Open GitHub profile
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
