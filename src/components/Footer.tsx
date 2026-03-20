import React from "react";

export const Footer = () => (
  <footer className="py-6 text-center text-white bg-green-700">
    <p>
      © {new Date().getFullYear()} Kholofelo.dev — Built with React &
      TailwindCSS
    </p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://github.com/yourusername" className="hover:text-blue-300">
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        className="hover:text-blue-300"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);
