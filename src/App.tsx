import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./pages/HomePage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const OpenSourcePage = lazy(() => import("./pages/OpenSourcePage"));
const RoadmapPage = lazy(() => import("./pages/RoadmapPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/open-source" element={<OpenSourcePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <FooterNav />
    </>
  );
}
