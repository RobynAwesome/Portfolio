function MilestoneCards() {
  const milestones = [
    { title: "First Website", yearsAgo: 5 },
    { title: "Professional Web Developer", yearsAgo: 3 },
    { title: "React Specialist", yearsAgo: 2 },
    { title: "Open Source Contributor", yearsAgo: 1 },
  ];

  return (
    <section
      id="milestones"
      className="py-20 text-center text-white bg-primaryBlue"
    >
      <h3 className="mb-10 text-3xl font-bold">Milestones</h3>
      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {milestones.map((m) => (
          <div
            key={m.title}
            className="p-6 transition rounded-lg shadow bg-neutralGray hover:bg-primaryGreen"
          >
            <h4 className="text-xl font-semibold">{m.title}</h4>
            <p>{m.yearsAgo} years ago</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MilestoneCards;
