import React from "react";

export const Hero = () => (
  <section className="flex flex-col items-center justify-center py-20 text-center bg-gradient-to-b from-green-700 to-blue-800">
    <h2 className="mb-4 text-4xl font-bold">Hi, I’m Kholofelo</h2>
    <p className="max-w-xl text-lg">
      Hands-on Web Developer & Tech Communicator. I craft modular, scalable apps
      with React, Vite, TailwindCSS, and TypeScript.
    </p>
    <button className="px-6 py-3 mt-6 text-green-400 bg-gray-800 rounded-lg hover:bg-gray-700">
      Let’s Collaborate
    </button>
  </section>
);
