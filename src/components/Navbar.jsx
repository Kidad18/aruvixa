import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 right-0 top-0 z-[100] px-4 py-4 sm:px-6"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-slate-200 bg-white/90 shadow-lg shadow-slate-200/30 backdrop-blur-xl"
              : "border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavigation}
            className="relative z-10 text-xl font-bold tracking-tight text-slate-950"
          >
            ARUVIXA<span className="text-blue-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const active = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "text-slate-950"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 -z-10 rounded-full bg-slate-100"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-600 md:block"
          >
            Let's Talk →
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((previous) => !previous)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition hover:bg-slate-200 md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-xl shadow-slate-200/40 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const active = activeSection === sectionId;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleNavigation}
                      className={`rounded-2xl px-4 py-3.5 text-sm font-medium transition ${
                        active
                          ? "bg-slate-100 text-slate-950"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={handleNavigation}
                  className="mt-2 rounded-2xl bg-slate-950 px-4 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Let's Talk →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}