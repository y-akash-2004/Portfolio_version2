import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const contacts = [
  { Icon: Mail, label: "Email", value: "akashyamparala@gmail.com", href: "mailto:akashyamparala@gmail.com", color: "text-[oklch(0.75_0.22_330)]" },
  { Icon: Phone, label: "Phone", value: "+91 8125976799", href: "tel:+918125976799", color: "text-[oklch(0.75_0.2_30)]" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yamparala-akash", color: "text-[oklch(0.7_0.2_240)]" },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
            LET'S BUILD SOMETHING <span className="text-gradient">AMAZING</span> TOGETHER
          </h2>
          <p className="mt-3 text-muted-foreground">
            I'm open to new opportunities and collaborations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {contacts.map(({ Icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              className="group bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:border-primary/60 hover:-translate-y-1 transition-all shadow-card"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-secondary/60 flex items-center justify-center border border-border">
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  {value && <p className="text-xs text-muted-foreground">{value}</p>}
                </div>
              </div>
              <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}