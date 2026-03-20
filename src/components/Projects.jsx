export default function Projects() {
  const projects = [
    { name: "5s Arena Blog", tech: "React, Vite, AWS", link: "#" },
    {
      name: "Financial Product Comparisons",
      tech: "React, Tailwind",
      link: "#",
    },
  ];
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.tech}</p>
            <a href={p.link} className="text-indigo-600 mt-2 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
