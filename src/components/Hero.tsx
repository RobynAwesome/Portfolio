export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-6 text-white border bg-gradient-to-r from-brandGreen via-brandBlue to-brandGray border-brandGray"
    >
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-[0_2px_2px_rgba(107,114,128,0.8)]">
        Kholofelo.dev
      </h1>
      <p className="max-w-2xl py-4 mb-6 text-lg text-center border-t border-b border-brandGray">
        Hands-on Web Developer & Tech Communicator. Crafting modular, scalable
        apps with React, Vite, TailwindCSS, and TypeScript.
      </p>
      <button className="px-6 py-3 font-semibold transition bg-white border rounded-lg shadow-md text-brandGreen hover:bg-brandGray hover:text-white border-brandGray">
        Let’s Collaborate
      </button>
    </section>
  );
}
