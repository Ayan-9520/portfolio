import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";
import { fadeUp } from "@/animations/animations";

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <SectionHeading
        title="Work"
        highlight="Experience"
        subtitle="Professional roles building responsive, API-driven web applications."
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2" />

        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative mb-10 pl-12 last:mb-0 md:mb-12 md:pl-0"
          >
            <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />

            <motion.div
              whileHover={{ y: -6 }}
              className={`md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}
            >
              <div className="premium-card">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
                  <Briefcase size={14} />
                  {exp.period}
                </div>
                <h3 className="font-heading text-lg font-semibold">{exp.title}</h3>
                <p className="mb-3 text-sm text-primary/80">{exp.company}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
