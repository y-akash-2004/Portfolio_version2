import { GraduationCap, Trophy, Code2, Target, Activity } from "lucide-react";

export function EducationAchievements() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-5">
        {/* Education */}
        <div className="bg-card border border-border rounded-xl p-7 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-bold tracking-wider">EDUCATION</h3>
          </div>
          <div className="relative pl-6 space-y-7">
            <span className="absolute left-1.5 top-2 bottom-2 w-px bg-border" />
            {[
              {
                school: "Indian Institute of Information Technology Kalyani",
                date: "2023 — 2027",
                detail: "B.Tech, Computer Science and Engineering",
                extra: "CGPA: 7.94",
              },
              {
                school: "Bashyam Junior College",
                date: "2021 — 2023",
                detail: "Class XII",
                extra: "95.7%",
              },
            ].map((e) => (
              <div key={e.school} className="relative">
                <span className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-gradient-brand ring-4 ring-card" />
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h4 className="font-bold">{e.school}</h4>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
                    {e.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{e.detail}</p>
                <p className="text-sm text-muted-foreground">{e.extra}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div id="achievements" className="bg-card border border-border rounded-xl p-7 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-[oklch(0.8_0.18_85)]" />
            <h3 className="text-lg font-bold tracking-wider">ACHIEVEMENTS</h3>
          </div>
          <ul className="space-y-5">
            {[
              { Icon: Trophy, color: "text-[oklch(0.8_0.18_85)]", bold: "Winner", text: "— StatusCode 1.0 coding competition, IISER Kolkata." },
              { Icon: Code2, color: "text-[oklch(0.7_0.2_150)]", bold: "Lead Organiser & Developer", text: "— sole developer of the official website for StatusCode 2.0, IISER Kolkata's annual tech fest." },
              { Icon: Target, color: "text-[oklch(0.7_0.22_25)]", bold: "Scored 95th percentile", text: "in JEE Mains — top 5% among 1.2M+ candidates." },
              { Icon: Activity, color: "text-[oklch(0.7_0.2_255)]", bold: "Participated in Inter-IIIT Athletics Competition", text: "as a Long Jump Athlete." },
            ].map(({ Icon, color, bold, text }, i) => (
              <li key={i} className="flex gap-4">
                <Icon className={`w-6 h-6 shrink-0 mt-0.5 ${color}`} />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="text-foreground font-semibold">{bold}</span> {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}