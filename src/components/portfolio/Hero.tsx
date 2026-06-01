import { Download, Rocket, Linkedin, Github, Mail, Code2, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/akash-hero.png";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[oklch(0.5_0.2_270)]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[oklch(0.6_0.25_320)]/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            YAMPARALA
            <br />
            <span className="text-gradient">AKASH</span>
          </h1>
          <p className="text-lg">
            <span className="text-gradient font-semibold">Full-Stack Developer</span>
            <span className="text-muted-foreground"> | Problem Solver | Tech Enthusiast</span>
          </p>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            I build robust, scalable, and user-centric web applications. Passionate
            about turning ideas into real-world solutions with clean code.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-brand text-primary-foreground font-semibold shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Rocket className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur font-semibold hover:bg-card transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="pt-6">
            <p className="text-sm text-muted-foreground mb-3">Find me on</p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/yamparala-akash" },
                { Icon: Github, href: "https://github.com/y-akash-2004" },
                { Icon: Mail, href: "mailto:akashyamparala@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-glow transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-40 blur-2xl" />
            <div className="absolute inset-8 rounded-full border-2 border-primary/60 shadow-glow" />
            <div className="absolute inset-10 rounded-full border border-[oklch(0.7_0.2_255)]/40" />

            <img
              src={heroImg}
              alt="Yamparala Akash"
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
            />

            {/* Floating code snippet card */}
            <div className="absolute top-4 left-0 z-20 hidden sm:block bg-card/80 backdrop-blur border border-border rounded-lg p-3 font-mono text-[11px] text-muted-foreground shadow-card">
              <div className="text-[oklch(0.75_0.2_180)]">const developer = {"{"}</div>
              <div className="pl-3">name: <span className="text-[oklch(0.8_0.18_60)]">"Akash"</span>,</div>
              <div className="pl-3">passion: <span className="text-[oklch(0.8_0.18_60)]">"Code"</span>,</div>
              <div className="pl-3">focus: <span className="text-[oklch(0.8_0.18_60)]">"Impact"</span></div>
              <div className="text-[oklch(0.75_0.2_180)]">{"}"};</div>
            </div>

            <div className="absolute top-10 right-0 z-20 bg-card/80 backdrop-blur border border-border rounded-lg px-3 py-2 shadow-card">
              <p className="text-[11px] text-muted-foreground">Building</p>
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold">Digital Solutions</p>
                <Code2 className="w-3.5 h-3.5 text-primary" />
              </div>
            </div>

            <div className="absolute bottom-16 right-0 z-20 bg-card/80 backdrop-blur border border-border rounded-lg px-3 py-2 shadow-card">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-xs font-semibold">Clean Code</p>
                  <p className="text-xs font-semibold">Scalable Solutions</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[oklch(0.7_0.2_150)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}