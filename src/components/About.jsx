import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Innovation First",
    text: "We use modern technology to turn ideas into practical digital solutions.",
  },
  {
    icon: Target,
    title: "Business Focused",
    text: "Every solution starts with the real problem your business needs to solve.",
  },
  {
    icon: Users,
    title: "Built Around You",
    text: "We create systems around your workflows instead of forcing your business into a template.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              About Aruvixa
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              We don't just build
              <span className="text-slate-400"> technology.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              We build technology that makes businesses work better. Aruvixa
              brings together AI, software, automation, and digital
              transformation to create solutions designed around real-world
              business needs.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-slate-500">
              From the first conversation to final handover, we focus on
              understanding the problem, designing the right solution, and
              delivering technology that can grow with your business.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-800"
            >
              Work with Aruvixa
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 6 }}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}