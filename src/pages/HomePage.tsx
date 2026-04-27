import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Building2, MapPin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import StudioProjectCard from "../components/StudioProjectCard";
import {
  canonicalBio,
  homeHighlights,
  homeMetrics,
  studioLinks,
  studioPrinciples,
  studioProjects,
} from "../data/siteContent";

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(127,224,177,0.16),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(201,139,61,0.18),_transparent_34%),linear-gradient(180deg,_#07110f_0%,_#091512_48%,_#0a1411_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-18 sm:px-8 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7fe0b1]/20 bg-[#7fe0b1]/8 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#9bf0c5]">
            Chief Architect, Kopano Labs
          </p>

          <h1 className="max-w-4xl text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.04em] text-[#f1f3ed] sm:text-[4.2rem] lg:text-[5.5rem]">
            Kholofelo "Robyn" Rababalela
          </h1>

          <p className="mt-6 text-lg font-medium uppercase tracking-[0.12em] text-[#d9aa64] sm:text-xl">
            Unity through Technology
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#b1bbb4] sm:text-lg">
            Sovereign digital infrastructure for African realities.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#d8ddd5]">
            Based between the V&amp;A Waterfront and CPUT, building product systems that respect
            load-shedding, data residency, POPIA, and the realities of mobile-first users.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={studioLinks.kopanoLabs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7fe0b1] px-6 py-3.5 text-sm font-semibold text-[#07100d] transition-transform duration-200 hover:scale-[1.02]"
            >
              Visit Kopano Labs
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-[#eef1eb] transition-colors duration-200 hover:border-[#7fe0b1]/40 hover:text-white"
            >
              See Projects
              <ArrowDownRight size={16} />
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {homeMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a968f]">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#e4e8e2]">{metric.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-[#d9aa64]/15 blur-3xl sm:block" />
          <div className="absolute -right-6 bottom-8 hidden h-28 w-28 rounded-full bg-[#7fe0b1]/15 blur-3xl sm:block" />

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111b19]/75 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[5/6] border-b border-white/10 bg-[#0a1411]">
              <img
                src="/profile.jpg"
                alt='Portrait of Kholofelo "Robyn" Rababalela'
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 18%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,15,0.1)_0%,rgba(7,17,15,0.2)_50%,rgba(7,17,15,0.88)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-[#0b1412]/85 p-5 backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9bf0c5]">
                      Studio Signal
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#f2f4ee]">
                      Building infrastructure that behaves well under local pressure.
                    </p>
                  </div>
                  <Building2 className="mt-1 text-[#d9aa64]" size={18} />
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-[20px] border border-white/8 bg-[#0c1614] p-4">
                <MapPin className="text-[#9bf0c5]" size={18} />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86918b]">
                  Location
                </p>
                <p className="mt-2 text-sm leading-6 text-[#edf1ea]">Cape Town, South Africa</p>
              </div>
              <div className="rounded-[20px] border border-white/8 bg-[#0c1614] p-4">
                <Trophy className="text-[#d9aa64]" size={18} />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86918b]">
                  Recognition
                </p>
                <p className="mt-2 text-sm leading-6 text-[#edf1ea]">SA Startup Week 2026 finalist</p>
              </div>
              <div className="rounded-[20px] border border-white/8 bg-[#0c1614] p-4">
                <Building2 className="text-[#9fb9ff]" size={18} />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#86918b]">
                  Affiliation
                </p>
                <p className="mt-2 text-sm leading-6 text-[#edf1ea]">Chief Architect at Kopano Labs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const aboutRows = [
    { label: "Name", value: canonicalBio.name },
    { label: "Role", value: canonicalBio.role },
    { label: "Affiliation", value: canonicalBio.affiliation },
    { label: "Location", value: canonicalBio.location },
    { label: "Mission Statement", value: canonicalBio.missionStatement },
    { label: "Recognition", value: canonicalBio.recognition },
  ];

  return (
    <section id="about" className="border-b border-white/8 bg-[#0b1412] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bf0c5]">
            About
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[#f2f4ee] sm:text-5xl">
            Architecture with local accountability.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#b1bbb4]">
            The portfolio now reflects a transition from freelancer-first messaging to studio leadership:
            product architecture, systems thinking, and infrastructure that remains legible under real-world
            South African constraints.
          </p>

          <div className="mt-10 space-y-4">
            {homeHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/8 bg-white/[0.02] px-5 py-4 text-sm leading-6 text-[#dce1db]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-[30px] border border-white/10 bg-[#111b19]/80 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:p-8"
        >
          <div className="space-y-5">
            {aboutRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-white/8 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[150px_1fr]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#87928b]">
                  {row.label}
                </p>
                <p className="text-sm leading-6 text-[#eef1eb]">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-[#d9aa64]/14 bg-[#d9aa64]/7 px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d9aa64]">
              Founding Belief
            </p>
            <p className="mt-2 text-sm leading-6 text-[#d9ded8]">{canonicalBio.beliefStatement}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="border-b border-white/8 bg-[#091311] py-18 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bf0c5]">
              Studio Direction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f1f3ed] sm:text-4xl">
              A sovereign product studio, not a freelance shop.
            </h2>
          </div>
          <Link
            to="/kopano-labs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#d9aa64] transition-colors hover:text-[#f1c27f]"
          >
            Explore the Kopano Labs page
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {studioPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[26px] border border-white/10 bg-[#101a18] p-6"
            >
              <p className="text-lg font-semibold text-[#f2f4ee]">{principle.title}</p>
              <p className="mt-3 text-sm leading-6 text-[#aeb8b1]">{principle.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#08110f] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bf0c5]">
              Active Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f2f4ee] sm:text-4xl">
              Studio work in motion.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#acb6b0]">
              Three active surfaces define the current direction: live sports infrastructure, township-first
              mobility in the gig economy, and a context framework for multi-agent systems.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#d9aa64] transition-colors hover:text-[#f1c27f]"
          >
            Open the full projects page
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {studioProjects.map((project, index) => (
            <StudioProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PrinciplesSection />
      <ProjectsSection />
    </main>
  );
}
