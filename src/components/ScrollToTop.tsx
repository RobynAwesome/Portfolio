import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed px-4 py-2 text-white transition rounded-lg shadow bottom-6 right-6 bg-primaryGreen hover:bg-primaryBlue"
      >
        ↑ Top
      </button>
    )
  );
}

export default ScrollToTop;
