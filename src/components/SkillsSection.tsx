import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Wrench, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/animations/animations";

const categoryIcons = [Code2, Server, Database, Wrench, Sparkles];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="mb-1.5 flex justify-between text-xs sm:text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <SectionHeading
        title="Technical"
        highlight="Skills"
        subtitle="Frontend, backend, database, and tools from my professional stack."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {skillCategories.map((category, i) => {
          const Icon = categoryIcons[i];
          return (
            <motion.div
              key={category.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="premium-card"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="text-primary" size={20} />
                </div>
                <h3 className="font-heading font-semibold">{category.title}</h3>
              </div>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
