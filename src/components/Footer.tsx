import { Github, Linkedin, Mail } from "lucide-react";
import { studioLinks } from "../data/siteContent";

const footerLinks = [
  { href: studioLinks.github, label: "GitHub", icon: Github },
  { href: studioLinks.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: studioLinks.email, label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(208,133,77,0.12)] bg-[#070909] pb-28 pt-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-[12px] uppercase tracking-[0.2em] text-[var(--brand-muted)] sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="space-y-2">
          <p>&copy; 2026 Kopano Labs (Pty) Ltd.</p>
          <p className="tracking-[0.16em] text-[var(--brand-soft-text)]">All rights reserved.</p>
        </div>

        <div className="space-y-2 text-[var(--brand-soft-text)]">
          <p>Cape Town, South Africa</p>
          <p className="normal-case tracking-normal text-[var(--brand-muted)]">rkholofelo@gmail.com</p>
        </div>

        <div className="flex items-center gap-4">
          {footerLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[rgba(234,223,207,0.1)] text-[var(--brand-olive)] transition-colors hover:border-[rgba(208,133,77,0.28)] hover:text-[var(--brand-text)]"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
