import { motion } from "framer-motion";
import { Briefcase, Rocket, Code2, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, stats } from "@/data/portfolio";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/animations";

const statIcons = [Briefcase, Rocket, Code2, Users];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading
        title="About"
        highlight="Me"
        subtitle="Professional summary aligned with my experience building production-ready web applications."
      />

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base"
      >
        I'm <strong className="text-foreground">{personalInfo.name}</strong>, a{" "}
        {personalInfo.title} based in {personalInfo.location}. {personalInfo.summary}
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
      >
        {stats.map((stat, i) => {
          const Icon = statIcons[i];
          return (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card-hover p-5 text-center sm:p-6"
            >
              <Icon className="mx-auto mb-3 h-6 w-6 text-primary" />
              <div className="text-2xl font-bold gradient-text sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
