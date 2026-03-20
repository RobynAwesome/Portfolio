function PerformanceTips() {
  return (
    <section
      id="performance"
      className="py-20 text-center text-white bg-primaryBlue"
    >
      <h3 className="mb-6 text-3xl font-bold">Performance Optimizations</h3>
      <ul className="max-w-3xl mx-auto space-y-4 text-left">
        <li>✔️ Lazy load images</li>
        <li>✔️ Code splitting with Vite</li>
        <li>✔️ Tailwind JIT for minimal CSS</li>
        <li>✔️ SEO meta tags for recruiter discoverability</li>
      </ul>
    </section>
  );
}

export default PerformanceTips;
