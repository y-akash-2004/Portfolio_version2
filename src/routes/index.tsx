import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { EducationAchievements } from "@/components/portfolio/EducationAchievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yamparala Akash — Full-Stack Developer Portfolio" },
      { name: "description", content: "Full-Stack Developer building robust, scalable, and user-centric web applications." },
      { property: "og:title", content: "Yamparala Akash — Full-Stack Developer" },
      { property: "og:description", content: "Portfolio showcasing projects, skills, education and achievements." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <EducationAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
