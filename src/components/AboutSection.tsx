import { motion } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, Rocket, Coffee } from "lucide-react";
import { useInView } from "framer-motion";
import { fadeUp } from "@/animations/animations";

const stats = [
  { icon: Briefcase, value: "1+", label: "Years Experience" },
  { icon: Rocket, value: "4+", label: "Projects Completed" },
  { icon: Code2, value: "10+", label: "Technologies Used" },
  { icon: Coffee, value: "∞", label: "Learning Everyday" },
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "React",
  "Git",
  "Responsive Design",
];

const AboutSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <section id="about" className="py-16 md:py-20" ref={ref}>

      <div className="container mx-auto px-4 max-w-5xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>

        </motion.div>


        {/* About text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-10"
        >

          <p className="mb-4">
            I'm <strong>Mohammad Ayan</strong>, a Front-End Developer based in
            New Delhi with experience building responsive and modern websites
            using HTML, CSS, JavaScript and Tailwind CSS.
          </p>

          <p>
            I specialize in converting Figma and PSD designs into
            pixel-perfect interfaces while maintaining clean, scalable and
            SEO-friendly code.
          </p>

        </motion.div>


        {/* Tech Stack */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >

          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-sm rounded-full border border-primary/20 bg-primary/10 hover:bg-primary/20 transition"
            >
              {tech}
            </span>
          ))}

        </motion.div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, i) => (

            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-5 text-center"
            >

              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />

              <div className="text-xl font-bold gradient-text">
                {stat.value}
              </div>

              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default AboutSection;