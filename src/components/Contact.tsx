export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center bg-indigo-600 text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Let’s Collaborate</h2>
      <p className="mb-6">
        I thrive on collaboration — let’s build something impactful together.
      </p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/yourusername" className="underline">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/robyn-rababalela"
          className="underline"
        >
          LinkedIn
        </a>
        <a href="mailto:your@email.com" className="underline">
          Email
        </a>
      </div>
    </section>
  );
}
