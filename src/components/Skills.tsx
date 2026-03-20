export default function Skills() {
  const skills = [
    { name: "React", desc: "Modular, scalable UI engineering" },
    { name: "TypeScript", desc: "Type-safe, maintainable code" },
    { name: "TailwindCSS", desc: "Responsive, striking interfaces" },
    { name: "GitHub", desc: "Collaborative coding & open-source" },
  ];

  return (
    <section id="skills" className="py-16 text-white bg-brandGray">
      <h2 className="mb-10 text-3xl font-bold text-center">Skills</h2>
      <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 transition rounded-lg shadow-md bg-brandBlue hover:bg-brandGreen"
          >
            <h3 className="mb-2 text-xl font-semibold">{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
