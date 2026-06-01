import { Rocket, Zap, BarChart3, Cloud, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    icon: <Zap className="w-6 h-6 text-[oklch(0.7_0.2_255)]" />,
    title: "IPL Auction Simulation Platform",
    badge: { label: "Live", color: "bg-[oklch(0.7_0.2_150)]/20 text-[oklch(0.8_0.2_150)] border-[oklch(0.7_0.2_150)]/40" },
    desc: "Real-time auction platform with WebSocket. Event-driven system with real-time updates, role-based dashboards, and scalable auction logic.",
    tags: ["Node.js", "Socket.IO", "Express", "Render"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[oklch(0.75_0.2_330)]" />,
    title: "Fusion – Finance Dashboard",
    badge: { label: "Active", color: "bg-[oklch(0.7_0.22_295)]/20 text-[oklch(0.8_0.2_295)] border-[oklch(0.7_0.22_295)]/40" },
    desc: "Personal finance & analytics dashboard. Track assets, expenses, and investments with AI-powered insights and beautiful visualizations.",
    tags: ["Flask", "SQLite", "Chart.js", "Gemini AI"],
  },
  {
    icon: <Cloud className="w-6 h-6 text-[oklch(0.75_0.15_220)]" />,
    title: "Cloudburst Prediction",
    badge: null,
    desc: "Deep learning-based prediction system. Hybrid CNN-LSTM model for cloudburst classification using multi-source satellite data.",
    tags: ["Python", "TensorFlow", "Keras", "Pandas"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading icon={Rocket} title="FEATURED PROJECTS" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/60 hover:-translate-y-1 transition-all shadow-card flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {p.icon}
                <h3 className="font-bold flex-1">{p.title}</h3>
                {p.badge && (
                  <span className={`text-xs px-2 py-0.5 rounded-md border ${p.badge.color}`}>
                    {p.badge.label}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-md border border-border bg-secondary/40 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}