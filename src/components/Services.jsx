import { motion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  RefreshCw,
  Code2,
  Building2,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI Solutions",
    description:
      "Intelligent AI solutions designed to solve business challenges, improve decision-making, and create smarter customer experiences.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Automation",
    description:
      "Smart automation that reduces repetitive work, improves efficiency, and helps your team focus on what matters.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Digital Transformation",
    description:
      "Transform traditional business processes into modern, connected, and scalable digital experiences.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Custom Software Development",
    description:
      "Purpose-built software developed around your unique business requirements, workflows, and future goals.",
  },
  {
    icon: Building2,
    number: "05",
    title: "Business Management Systems",
    description:
      "Centralized digital systems that help businesses manage operations, customers, teams, data, and everyday activities.",
  },
  {
    icon: Workflow,
    number: "06",
    title: "Process Automation",
    description:
      "Streamline complex workflows by connecting processes, reducing manual tasks, and improving operational efficiency.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What we do
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Technology that works
            <span className="text-slate-400"> for your business.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We build intelligent digital solutions that simplify operations,
            automate processes, and help businesses grow.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium text-slate-300">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Bottom action */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-all duration-300 group-hover:gap-4 group-hover:text-blue-600">
                  Explore service
                  <span>→</span>
                </div>

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-200/20 blur-3xl transition duration-500 group-hover:bg-blue-300/40" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}