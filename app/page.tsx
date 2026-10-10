import HeroScreen from "@/features/hero/view/hero.screen";
import TechScreen from "@/features/tech/view/tech.screen";
import ProjectsScreen from "@/features/projects/view/projects.screen";

export default function Home() {
  return (
    <main>
      <HeroScreen />
      <ProjectsScreen />
      <TechScreen />
    </main>
  );
}
