import React from "react";

const Contact = () => (
  <section className="px-6 py-16 text-white bg-gray-900">
    <h3 className="mb-8 text-3xl font-bold text-green-400">Contact</h3>
    <form className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 text-white bg-gray-800 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 text-white bg-gray-800 rounded"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-3 text-white bg-gray-800 rounded"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-3 text-white bg-green-700 rounded hover:bg-green-600"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
