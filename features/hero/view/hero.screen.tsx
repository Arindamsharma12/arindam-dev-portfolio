import Background from "../component/background.component";
import HeroContent from "../component/hero-content.component";

const HeroScreen = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-black transition-colors duration-300">
      <Background />
      <HeroContent />
    </div>
  );
};

export default HeroScreen;
