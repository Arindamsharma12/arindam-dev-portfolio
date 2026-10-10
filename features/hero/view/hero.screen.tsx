import Background from "../component/background.component";
import HeroContent from "../component/hero-content.component";

const HeroScreen = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Background />
      <HeroContent />
    </div>
  );
};

export default HeroScreen;
