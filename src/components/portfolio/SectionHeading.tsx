import type { LucideIcon } from "lucide-react";

export function SectionHeading({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      <Icon className="w-5 h-5 text-primary" />
      <h2 className="text-xl font-bold tracking-[0.25em]">{title}</h2>
      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}