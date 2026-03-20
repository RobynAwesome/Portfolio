import FadeIn from "./FadeIn";
import AnimatedHeroBackground from "./AnimatedHeroBackground";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen px-4 text-center text-white bg-primaryBlue"
    >
      <AnimatedHeroBackground />
      <FadeIn>
        <h2 className="relative z-10 mb-4 text-4xl font-bold md:text-6xl">
          Hi, I'm Kholofelo
        </h2>
      </FadeIn>
      <FadeIn>
        <p className="relative z-10 mb-6 text-lg md:text-2xl">
          Web Developer & Tech Communicator
        </p>
      </FadeIn>
      <FadeIn>
        <a
          href="#projects"
          className="relative z-10 px-6 py-3 transition rounded-lg shadow bg-primaryGreen hover:bg-neutralGray"
        >
          Explore My Work
        </a>
      </FadeIn>
    </section>
  );
}

export default Hero;
