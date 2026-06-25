import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/data/portfolio";
import { fadeUp } from "@/animations/animations";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading
        title="Education"
        highlight="& Background"
        subtitle="Academic foundation alongside hands-on development experience."
      />

      {education.map((item, i) => (
        <motion.div
          key={item.degree}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6 }}
          className="premium-card flex flex-col gap-4 sm:flex-row sm:items-start"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <div>
            <p className="mb-1 text-xs font-medium text-primary">{item.period}</p>
            <h3 className="font-heading text-lg font-semibold sm:text-xl">{item.degree}</h3>
            <p className="mb-2 text-sm text-muted-foreground">{item.institution}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;
