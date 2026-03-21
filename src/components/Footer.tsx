import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/open-source", label: "Open Source" },
  { to: "/contact", label: "Contact" },
];

const profileLinks = [
  { href: "https://github.com/RobynAwesome", label: "GitHub" },
  { href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/", label: "LinkedIn" },
  { href: "https://www.hackerrank.com/profile/rkholofelo", label: "HackerRank" },
  { href: "https://orcid.org/0009-0000-3995-6147", label: "ORCID" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a2744]/50 pt-16 pb-28">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-12 sm:px-20 lg:px-36">
        {/* Top section — brand + nav */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="w-8 h-8 rounded-full object-cover object-top border border-[#0ea5e9]/30"
              />
              <span className="font-bold text-white text-sm">Kholofelo</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Full-Stack MERN Developer based in Cape Town, South Africa.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-16">
            {/* Navigation */}
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
                Navigate
              </h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-xs text-gray-500 hover:text-[#00e89d] transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Profiles */}
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
                Profiles
              </h4>
              <div className="flex flex-col gap-2">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-[#00e89d] transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink size={9} className="opacity-30" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#1a2744]/40 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-600">
            &copy; 2026 Kholofelo Robyn Rababalela
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/RobynAwesome"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#00e89d] transition-colors"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#00e89d] transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:rkholofelo@gmail.com"
              className="p-1.5 rounded-md text-gray-600 hover:text-[#00e89d] transition-colors"
            >
              <Mail size={14} />
            </a>
          </div>

          <p className="text-[10px] text-gray-600 flex items-center gap-1">
            Built with <Heart size={8} className="text-red-500" /> React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
