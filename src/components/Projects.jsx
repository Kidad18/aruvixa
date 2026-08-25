import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "Business Management",
    title: "Smart Business Management System",
    description:
      "A centralized platform designed to simplify business operations, manage workflows, and improve visibility.",
    tags: ["Management", "Automation", "Web App"],
  },
  {
    number: "02",
    category: "AI Solutions",
    title: "AI-Powered Business Assistant",
    description:
      "An intelligent solution that helps businesses automate tasks, process information, and make faster decisions.",
    tags: ["AI", "Automation", "Intelligence"],
  },
  {
    number: "03",
    category: "Process Automation",
    title: "Workflow Automation Platform",
    description:
      "A digital workflow system that connects business processes and reduces repetitive manual operations.",
    tags: ["Workflow", "Automation", "Integration"],
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-50 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Selected work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Ideas transformed
              <span className="text-slate-400"> into solutions.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A glimpse into the kind of digital systems and experiences we
              create for modern businesses.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-1 hover:shadow-lg"
          >
            Start your project →
          </a>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.01 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-200/70 md:p-10"
            >
              <div className="grid gap-10 md:grid-cols-[120px_1fr_auto] md:items-center">
                {/* Number */}
                <div className="text-5xl font-bold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-blue-100">
                  {project.number}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-400 transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                  ↗
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}