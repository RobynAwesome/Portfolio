import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { StudioProject } from "../data/siteContent";

const statusStyles: Record<StudioProject["status"], string> = {
  Active: "border-[rgba(122,152,102,0.32)] bg-[rgba(122,152,102,0.12)] text-[#9db58b]",
  MVP: "border-[rgba(208,133,77,0.32)] bg-[rgba(208,133,77,0.12)] text-[#dba272]",
  "In Development":
    "border-[rgba(152,168,128,0.32)] bg-[rgba(152,168,128,0.12)] text-[#c2cfb3]",
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group brand-panel overflow-hidden rounded-[24px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--brand-line)] bg-[#0d1112]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,5,0.12),rgba(3,5,5,0.08)_45%,rgba(3,5,5,0.88)_100%)]" />
        <div className="brand-topography absolute inset-0 opacity-35" />
        <span
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className={compact ? "p-5 sm:p-6" : "p-6 sm:p-7"}>
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[var(--brand-text)]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--brand-muted)]">
              {project.description}
            </p>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--brand-olive)] sm:inline">
            0{index + 1}
          </span>
        </div>

        <p className="mb-5 text-sm leading-6 text-[var(--brand-soft-text)]">{project.detail}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-[8px] border border-[rgba(234,223,207,0.1)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--brand-muted)]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between gap-3 border-t border-[rgba(234,223,207,0.08)] pt-4">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                project.deliveryLabel === "Pilot" ? "bg-[#c58c33]" : "bg-[#7a9866]"
              }`}
            />
            {project.deliveryLabel}
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
            {project.category}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(208,133,77,0.28)] bg-[rgba(208,133,77,0.12)] px-4 py-2.5 text-sm font-semibold text-[#e3b082] transition-colors hover:bg-[rgba(208,133,77,0.2)]"
          >
            {project.primaryLink.label}
            <ArrowUpRight size={15} />
          </a>
          {project.secondaryLink && (
            <a
              href={project.secondaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(234,223,207,0.1)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-soft-text)] transition-colors hover:border-[rgba(122,152,102,0.32)] hover:text-[var(--brand-text)]"
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
