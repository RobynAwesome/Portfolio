import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Story from "../components/Story";
import AISection from "../components/AISection";
import BottomCTA from "../components/BottomCTA";
import InfiniteScrollBar from "../components/InfiniteScrollBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <InfiniteScrollBar />
      <About />
      <Skills />
      <Certificates />
      <Story />
      <AISection />
      <BottomCTA />
    </main>
  );
}
