import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold">
            <span className="text-gradient">Y</span>A
          </span>
          <p className="text-xs text-muted-foreground">
            © 2024 Yamparala Akash. All rights reserved.
          </p>
        </div>
        <a
          href="#home"
          className="w-10 h-10 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}