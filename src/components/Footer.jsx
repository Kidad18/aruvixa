import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-slate-950"
            >
              ARUVIXA<span className="text-blue-600">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Building intelligent digital solutions for modern businesses.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="group flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Start a project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aruvixa. All rights reserved.</p>

          <p>AI · Software · Automation</p>
        </div>
      </div>
    </footer>
  );
}