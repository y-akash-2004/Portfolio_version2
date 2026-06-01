import { Code, Atom, Hexagon, Database, Wrench, Cloud, Wrench as Tool } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const skills = [
  {
    icon: <div className="w-14 h-14 rounded-lg bg-[oklch(0.85_0.18_90)] text-[oklch(0.2_0_0)] font-extrabold flex items-center justify-center text-xl">JS</div>,
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "C"],
  },
  {
    icon: <Atom className="w-12 h-12 text-[oklch(0.75_0.15_200)]" />,
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3, Tailwind CSS", "Chart.js", "Responsive UI"],
  },
  {
    icon: <Hexagon className="w-12 h-12 text-[oklch(0.7_0.2_140)]" />,
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask, FastAPI", "Socket.IO", "REST APIs", "JSON Handling"],
  },
  {
    icon: <Database className="w-12 h-12 text-[oklch(0.7_0.22_295)]" />,
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "SQLite (ORM)", "MongoDB (NoSQL)"],
  },
  {
    icon: <Wrench className="w-12 h-12 text-[oklch(0.7_0.2_45)]" />,
    title: "Tools",
    items: ["Git, GitHub Actions", "Docker", "Postman", "Render", "CI/CD Pipelines"],
  },
  {
    icon: <Cloud className="w-12 h-12 text-[oklch(0.75_0.13_220)]" />,
    title: "APIs & Integration",
    items: ["Third-party API (Gemini AI)", "WebSocket (Socket.IO)", "RESTful Services", "JSON Data Handling"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Tool} title="MY SKILLS" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="group bg-card border border-border rounded-xl p-5 hover:border-primary/60 hover:-translate-y-1 transition-all shadow-card"
            >
              <div className="flex justify-center mb-4 transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-center font-bold text-lg mb-4">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}