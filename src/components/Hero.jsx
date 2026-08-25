import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setMouse({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 pt-24"
    >
      {/* =========================================
          MOUSE FOLLOWING LIGHT
      ========================================== */}

      <div
        className="pointer-events-none absolute z-0 h-96 w-96 rounded-full bg-blue-400/30 blur-[100px] transition-all duration-300 ease-out"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary light - moves slightly differently */}
      <div
        className="pointer-events-none absolute z-0 h-[420px] w-[420px] rounded-full bg-violet-400/20 blur-[120px] transition-all duration-500 ease-out"
        style={{
          left: `${100 - mouse.x}%`,
          top: `${100 - mouse.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Static cyan glow */}
      <div className="pointer-events-none absolute bottom-[-150px] left-1/2 z-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-xl"
        >
          ✦ AI · Automation · Digital Transformation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-bold tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-8xl"
        >
          We build
          <br />

          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            digital experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
        >
          Aruvixa combines AI, technology, and creative thinking to build
          digital solutions that help businesses move forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-7 py-3.5 font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
          >
            Start a Project →
          </a>

          <a
            href="#work"
            className="rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 font-medium text-slate-700 backdrop-blur transition hover:-translate-y-1 hover:bg-white"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}