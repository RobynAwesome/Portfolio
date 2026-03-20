import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/RobynAwesome",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://linkedin.com/in/kholofelo-robyn",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:your@email.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t py-12" style={{ borderColor: "var(--border-color)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-lg font-bold gradient-text">
              KR
            </a>
            <p className="text-xs opacity-30 mt-1">
              &copy; {new Date().getFullYear()} Kholofelo Robyn Rababalela
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg opacity-40 hover:opacity-100 transition-opacity"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="text-xs opacity-30 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
