import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Wrench, Layers } from "lucide-react";
import { fadeUp } from "@/animations/animations";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    icon: Layout,
    title: "Frameworks",
    skills: [
      { name: "React.js", level: 70 },
      { name: "Responsive Design", level: 95 },
      { name: "Cross Browser", level: 88 },
      { name: "UI Components", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Chrome DevTools", level: 88 },
      { name: "Figma", level: 80 },
    ],
  },
  {
    icon: Layers,
    title: "Other Skills",
    skills: [
      { name: "Figma to HTML", level: 90 },
      { name: "PSD to HTML", level: 88 },
      { name: "WordPress", level: 80 },
      { name: "SEO Optimization", level: 82 },
    ],
  },
];

const SkillBar = ({ name, level }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">

      <div className="flex justify-between mb-1 text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 rounded-full bg-muted overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />

      </div>

    </div>
  );
};

const SkillsSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <section id="skills" className="py-16 md:py-20 bg-muted/30" ref={ref}>

      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>

          <p className="text-muted-foreground max-w-lg mx-auto">
            Technologies and tools I use to build modern and responsive web applications.
          </p>

        </motion.div>


        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillCategories.map((category, i) => {

            const Icon = category.icon;

            return (

              <motion.div
                key={category.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
              >

                <div className="flex items-center gap-2 mb-4">

                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="text-primary" size={18} />
                  </motion.div>

                  <h3 className="font-semibold">
                    {category.title}
                  </h3>

                </div>

                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>

  );
};

export default SkillsSection;