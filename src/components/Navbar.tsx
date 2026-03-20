export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 text-white shadow-md bg-brandBlue">
      <h1 className="text-2xl font-bold">Kholofelo.dev</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#home" className="hover:text-brandGreen">
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-brandGreen">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-brandGreen">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
