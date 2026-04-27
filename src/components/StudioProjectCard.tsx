import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { StudioProject } from "../data/siteContent";

const statusStyles: Record<StudioProject["status"], string> = {
  Active:
    "border-[#6dd7a4]/30 bg-[#6dd7a4]/10 text-[#9df0c1]",
  MVP: "border-[#e7c06b]/30 bg-[#e7c06b]/10 text-[#f1d894]",
  "In Development":
    "border-[#8fb0ff]/30 bg-[#8fb0ff]/10 text-[#c7d6ff]",
};

type StudioProjectCardProps = {
  project: StudioProject;
  index?: number;
  compact?: boolean;
};

export default function StudioProjectCard({
  project,
  index = 0,
  compact = false,
}: StudioProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111b19]/80 shadow-[0_20px_80px_rgba(0,0,0,0.28)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0d1614]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091110] via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className={`${compact ? "p-6" : "p-7 sm:p-8"}`}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#f2f4ee]">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#a6b1aa]">
              {project.description}
            </p>
          </div>
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-[#7fe0b1] sm:inline">
            0{index + 1}
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-[#d8ddd5]">{project.detail}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-[#bcc5be]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#7fe0b1] px-4 py-2.5 text-sm font-semibold text-[#07100d] transition-transform duration-200 hover:scale-[1.02]"
          >
            {project.primaryLink.label}
            <ArrowUpRight size={15} />
          </a>
          {project.secondaryLink && (
            <a
              href={project.secondaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-semibold text-[#d9ded8] transition-colors duration-200 hover:border-[#7fe0b1]/40 hover:text-[#f2f4ee]"
            >
              {project.secondaryLink.label}
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
