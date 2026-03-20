import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  {
    icon: <Github size={16} />,
    href: "https://github.com/RobynAwesome",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:rkholofelo@gmail.com",
    label: "Email",
  },
];

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a2744] pt-16 pb-8">
      {/* Gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#00e89d]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00e89d] to-[#0ea5e9] flex items-center justify-center text-[#060d18] font-black text-xs">
                KR
              </div>
              <span className="font-bold text-white group-hover:text-[#00e89d] transition-colors">
                Robyn
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00e89d] pulse-glow" />
            </a>
            <p className="text-xs text-gray-500 leading-relaxed">
              Full-Stack MERN Developer based in Cape Town, South Africa.
              Building scalable web apps and beautiful interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Profiles */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Profiles
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/RobynAwesome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.hackerrank.com/profile/rkholofelo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                HackerRank
              </a>
              <a
                href="https://orcid.org/0009-0000-3995-6147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                ORCID
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://paypal.me/osheenviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                PayPal
              </a>
              <a
                href="https://ko-fi.com/robynawesome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                Ko-fi
              </a>
              <a
                href="mailto:rkholofelo@gmail.com"
                className="text-sm text-gray-500 hover:text-[#00e89d] transition-colors"
              >
                rkholofelo@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a2744] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Kholofelo Robyn Rababalela. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-600 hover:text-[#00e89d] hover:bg-[#00e89d]/5 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500" /> using React, TypeScript & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
