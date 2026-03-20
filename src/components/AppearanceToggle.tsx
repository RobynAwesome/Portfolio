import { useState } from "react";

function AppearanceToggle() {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    setDark(!dark);
    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 ml-4 text-white transition rounded-lg bg-neutralGray hover:bg-primaryGreen"
    >
      {dark ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default AppearanceToggle;
