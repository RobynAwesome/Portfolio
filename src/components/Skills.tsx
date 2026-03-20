import React from "react";

const skills = [
  { title: "React", desc: "Modular, scalable UI engineering" },
  { title: "TypeScript", desc: "Type-safe, maintainable code" },
  { title: "TailwindCSS", desc: "Responsive, striking interfaces" },
  { title: "GitHub", desc: "Collaborative coding & open-source" },
];

export const Skills = () => (
  <section className="px-6 py-16 text-white bg-gray-800">
    <h3 className="mb-8 text-3xl font-bold text-green-400">Skills</h3>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.title} className="p-6 bg-gray-900 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold text-blue-300">{skill.title}</h4>
          <p className="mt-2 text-gray-300">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
