export default function Certificates() {
  const certs = [
    { name: "AWS Certified Cloud Practitioner", year: "2025" },
    { name: "AI Fluency Assessment", year: "2026" },
  ];
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {certs.map((c) => (
          <div key={c.name} className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-gray-600">{c.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
