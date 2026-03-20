import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

function DynamicNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primaryGreen shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        <a href="#hero" className="flex items-center space-x-2">
          <span className="px-3 py-1 font-bold rounded-lg bg-primaryBlue">
            KH
          </span>
          <span className="text-xl font-semibold tracking-wide">Kholofelo</span>
        </a>
        <ul className="hidden space-x-6 md:flex">
          <li>
            <a href="#skills" className="hover:text-primaryBlue">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primaryBlue">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-primaryBlue">
              Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primaryBlue">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primaryBlue"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primaryBlue"
          >
            LinkedIn
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default DynamicNavbar;
