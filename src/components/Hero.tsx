export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="mb-4 text-5xl font-extrabold">Kholofelo.dev</h1>
      <p className="max-w-2xl mb-6 text-lg text-center">
        Hands-on Web Developer & Tech Communicator.
      </p>
      <div className="w-32 h-32 bg-red-500"></div>

      {/* Test Tailwind here */}
      <div className="w-32 h-32 bg-red-500"></div>

      <button className="px-6 py-3 text-green-600 bg-white rounded-lg">
        Let’s Collaborate
      </button>
    </section>
  );
}
