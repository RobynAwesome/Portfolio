import DynamicNavbar from "./components/DynamicNavbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectFilter from "./components/ProjectFilter";
import CertificatesAnimated from "./components/CertificatesAnimated";
import ExperienceTimeline from "./components/ExperienceTimeline";
import MilestoneCards from "./components/MilestoneCards";
import RecruiterCTA from "./components/RecruiterCTA";
import HireMeBanner from "./components/HireMeBanner";
import MoreAboutMe from "./components/MoreAboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white bg-neutralGray">
      <DynamicNavbar />
      <Hero />
      <Skills />
      <Projects />
      <ProjectFilter />
      <CertificatesAnimated />
      <ExperienceTimeline />
      <MilestoneCards />
      <RecruiterCTA />
      <HireMeBanner />
      <MoreAboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
