import Background from "../component/background.component";
import HeroContent from "../component/hero-content.component";

const HeroScreen = () => {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <Background />
      <HeroContent />
    </section>
  );
};

export default HeroScreen;
