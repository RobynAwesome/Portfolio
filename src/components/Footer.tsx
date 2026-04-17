import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/open-source", label: "Open Source" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/contact", label: "Contact" },
];

const profileLinks = [
  { href: "https://github.com/RobynAwesome/", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    label: "LinkedIn",
  },
  {
    href: "https://www.hackerrank.com/profile/rkholofelo",
    label: "HackerRank",
  },
  { href: "https://orcid.org/0009-0000-3995-6147", label: "ORCID" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a2744]/50 pt-16 pb-28">
      <div className="absolute top-0 left-1/2 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-12 sm:px-20 lg:px-36">
        <div className="mb-12 flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2.5">
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="h-8 w-8 rounded-full border border-[#0ea5e9]/30 object-cover object-top"
              />
              <span className="text-sm font-bold text-white">Kholofelo</span>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00e89d]" />
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              Junior software engineer based in Cape Town, building production web systems and AI tooling.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">
                Navigate
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    key={l.to}
                    to={l.to}
                    className="text-xs text-gray-500 transition-colors hover:text-[#00e89d]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase">
                Profiles
              </h4>
              <div className="flex flex-col gap-2">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-[#00e89d]"
                  >
                    {link.label}
                    <ExternalLink size={9} className="opacity-30" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 h-px w-full bg-[#1a2744]/40" />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[10px] text-gray-600">
            &copy; 2026 Kholofelo Robyn Rababalela
          </p>

          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/RobynAwesome"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#00e89d] transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <Github size={14} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#00e89d] transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <Linkedin size={14} />
            </motion.a>
            <motion.a
              href="mailto:rkholofelo@gmail.com"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#00e89d] transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              <Mail size={14} />
            </motion.a>
          </div>

          <p className="flex items-center gap-1 text-[10px] text-gray-600">
            Built with <Heart size={8} className="text-red-500" /> React &
            TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
