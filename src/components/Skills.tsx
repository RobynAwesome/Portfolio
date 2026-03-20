export default function Skills() {
  const skills = [
    "React",
    "Vite",
    "TypeScript",
    "TailwindCSS",
    "AWS",
    "GitHub",
  ];
  return (
    <section id="skills" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
