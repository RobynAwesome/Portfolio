import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock3, FlaskConical, LoaderCircle } from "lucide-react";
import { roadmapTracks, upcomingProject } from "../data/portfolioContent";

const STATUS_STYLES = {
  Shipped: {
    icon: CheckCircle2,
    className: "border-[#00e89d]/30 bg-[#00e89d]/10 text-[#00e89d]",
  },
  "In Progress": {
    icon: LoaderCircle,
    className: "border-[#0ea5e9]/30 bg-[#0ea5e9]/10 text-[#0ea5e9]",
  },
  Queued: {
    icon: Clock3,
    className: "border-white/10 bg-white/5 text-gray-300",
  },
  Research: {
    icon: FlaskConical,
    className: "border-[#a855f7]/30 bg-[#a855f7]/10 text-[#c084fc]",
  },
} as const;

function StatusBadge({ status }: { status: keyof typeof STATUS_STYLES }) {
  const config = STATUS_STYLES[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${config.className}`}>
      <Icon size={12} />
      {status}
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060d18] pt-28 pb-24">
      <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#00e89d]">
            2026 Roadmap
          </p>
          <h1 className="mb-5 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Shipped, in progress, queued, and research stay separate here.
          </h1>
          <p className="text-base leading-8 text-gray-300 sm:text-lg">
            This page is a dated working view of the four tracks behind the public portfolio:
            hiring readiness, Kopano Context, Cars4Mars, and Kopano Labs. Planned work stays
            labeled as planned. Live work stays backed by public evidence.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-6 sm:px-8 lg:px-16">
        <div className="rounded-[24px] border border-white/8 bg-[#0b1426]/80 p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#f97316]">
                Upcoming Build
              </p>
              <h2 className="text-2xl font-black text-white">{upcomingProject.title}</h2>
            </div>
            <span className="rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Upcoming
            </span>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
            {upcomingProject.summary}
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-gray-300 md:grid-cols-2">
            {upcomingProject.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 leading-6"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {upcomingProject.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#00e89d]/40 hover:text-[#00e89d]"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6 sm:px-8 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {roadmapTracks.map((track, index) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[24px] border border-white/8 bg-[#0b1426]/80 p-6 shadow-xl shadow-black/20"
            >
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#0ea5e9]">
                Track
              </p>
              <h2 className="text-2xl font-black text-white">{track.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-300">{track.summary}</p>
              <div className="mt-6 space-y-4">
                {track.items.map((item) => (
                  <div
                    key={`${track.title}-${item.title}`}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="max-w-xl">
                        <h3 className="text-base font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{item.detail}</p>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-gray-500">
                      {item.when}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
