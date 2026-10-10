import HeroScreen from "@/features/hero/view/hero.screen";
import TechScreen from "@/features/tech/view/tech.screen";
import ProjectsScreen from "@/features/projects/view/projects.screen";
import ExperienceScreen from "@/features/experience/view/experience.screen";
import FooterScreen from "@/features/footer/view/footer.screen";

export default function Home() {
  return (
    <main>
      <HeroScreen />
      <ProjectsScreen />
      <TechScreen />
      <ExperienceScreen />
      <FooterScreen />
    </main>
  );
}

