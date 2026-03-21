import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
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
      <Story />
      <AISection />
      <BottomCTA />
    </main>
  );
}
