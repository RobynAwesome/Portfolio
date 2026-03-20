import React from "react";

const projects = [
  { name: "Portfolio", tech: "React + Vite + TailwindCSS" },
  { name: "Open Source Docs", tech: "Markdown + GitHub Pages" },
  { name: "UI Toolkit", tech: "TypeScript + TailwindCSS" },
];

export const Projects = () => (
  <section className="px-6 py-16 text-white bg-gray-900">
    <h3 className="mb-8 text-3xl font-bold text-green-400">Projects</h3>
    <ul className="space-y-6">
      {projects.map((proj) => (
        <li key={proj.name} className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-300">{proj.name}</h4>
          <p className="mt-2 text-gray-300">{proj.tech}</p>
        </li>
      ))}
    </ul>
  </section>
);
