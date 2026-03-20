export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive React + Tailwind portfolio showcasing skills and projects.",
    },
    {
      title: "Open Source Contributions",
      desc: "Collaborative GitHub repos with modular, scalable code.",
    },
    {
      title: "UI Component Library",
      desc: "Reusable components built with TypeScript and TailwindCSS.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 text-white bg-gradient-to-r from-brandGreen via-brandBlue to-brandGray"
    >
      <h2 className="inline-block px-4 mb-10 text-3xl font-bold text-center border-b border-brandGray">
        Projects
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 transition border rounded-lg shadow-md bg-brandGray border-brandBlue hover:border-brandGreen"
          >
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
