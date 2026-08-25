import { motion } from "framer-motion";
import {
  UserPlus,
  MapPin,
  ClipboardList,
  PenTool,
  FileText,
  CheckCircle2,
  Rocket,
  CreditCard,
  Handshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Lead",
    description: "We understand your initial idea and business needs.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Site Visit",
    description: "We learn about your environment, team, and requirements.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Requirement",
    description: "We define the features, goals, and scope of the project.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Design",
    description: "We create the experience and system structure around your needs.",
    icon: PenTool,
  },
  {
    number: "05",
    title: "Quotation",
    description: "You receive a clear proposal covering the project scope and cost.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Approval",
    description: "Once everything is aligned, we finalize the project.",
    icon: CheckCircle2,
  },
  {
    number: "07",
    title: "Project",
    description: "Our team builds, tests, and refines the solution.",
    icon: Rocket,
  },
  {
    number: "08",
    title: "Payment",
    description: "Payments are handled according to the agreed project milestones.",
    icon: CreditCard,
  },
  {
    number: "09",
    title: "Handover",
    description: "We deliver the completed solution and help you get started.",
    icon: Handshake,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            How we work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            From idea
            <span className="text-slate-400"> to impact.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A clear process keeps every project organized, transparent, and
            focused on delivering the right solution.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative mt-24">
          {/* Connecting line */}
          <div className="absolute left-[28px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-blue-200 via-violet-200 to-slate-200 md:block" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="group relative flex gap-6 md:gap-10"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 group-hover:border-blue-300 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:shadow-md">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-slate-200/50 md:flex md:items-center md:justify-between md:px-8">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-widest text-blue-600">
                          {step.number}
                        </span>

                        <h3 className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                        {step.description}
                      </p>
                    </div>

                    <span className="mt-4 hidden text-2xl text-slate-300 transition-colors duration-300 group-hover:text-blue-500 md:block">
                      →
                    </span>
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