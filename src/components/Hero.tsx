export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Kholofelo</h1>
      <p className="text-xl mb-6">Web Developer & Tech Communicator</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-indigo-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        Explore My Work
      </a>
    </section>
  );
}
