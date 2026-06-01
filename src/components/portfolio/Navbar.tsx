import { useEffect, useState } from "react";

const links = [
  { label: "HOME", id: "home" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "EDUCATION", id: "education" },
  { label: "ACHIEVEMENTS", id: "achievements" },
  { label: "CONTACT", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1 text-2xl font-extrabold">
          <span className="text-gradient">Y</span>
          <span className="text-foreground">A</span>
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                className={`text-xs tracking-[0.2em] font-semibold transition-colors ${
                  active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
              {active === l.id && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-8 bg-gradient-brand rounded-full" />
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
          <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
          <span className="block w-6 h-0.5 bg-foreground" />
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block text-sm tracking-wider font-semibold text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}