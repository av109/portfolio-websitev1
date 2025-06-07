import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card relative border-t border-border mt-12 pt-4 flex items-center justify-between">
      <div className="flex-1 flex justify-center">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Ayushv. All rights reserved.
        </p>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors ml-4"
        style={{ alignSelf: "flex-end" }}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};