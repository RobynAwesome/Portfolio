import { ArrowUpRight, Building2, Coffee, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { canonicalBio, studioLinks } from "../data/siteContent";

const internalLinks = [
  { to: "/", label: "Home" },
  { to: "/kopano-labs", label: "Kopano Labs" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/open-source", label: "Open Source" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/contact", label: "Contact" },
];

const externalLinks = [
  { href: studioLinks.github, label: "GitHub", icon: Github },
  { href: studioLinks.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: studioLinks.koFi, label: "Ko-fi", icon: Coffee },
  { href: studioLinks.kopanoLabs, label: "Kopano Labs", icon: Building2 },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07110f] pb-28 pt-16 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-12">
        <div className="max-w-md">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#9bf0c5]">
            Portfolio
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#f2f4ee]">
            {canonicalBio.name}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#afb8b2]">
            {canonicalBio.role}. Building digital infrastructure that is usable, legible, and resilient in
            real African operating conditions.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#8d9891]">{canonicalBio.beliefStatement}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#88948d]">
            Navigate
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {internalLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-[#dce1db] transition-colors hover:text-[#9bf0c5]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#88948d]">
            Profiles
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {externalLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#dce1db] transition-colors hover:text-[#9bf0c5]"
                >
                  <Icon size={15} />
                  {item.label}
                  <ArrowUpRight size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/8 px-5 pt-6 text-xs text-[#88948d] sm:px-8 sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p>&copy; 2026 Kholofelo "Robyn" Rababalela</p>
        <p>Cape Town, South Africa</p>
      </div>
    </footer>
  );
}
