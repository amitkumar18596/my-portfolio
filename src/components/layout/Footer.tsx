import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
              Amit<span className="text-foreground">.dev</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
              Building modern web experiences with a focus on performance, accessibility, and clean design.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:maharana.amit96@gmail.com" className="hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Amit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
