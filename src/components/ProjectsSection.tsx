import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "MoneyMines.co.in",
    description:
      "Responsive financial services platform UI built with clean layout and optimized performance.",
    image: project1,
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
    liveUrl: "https://moneymines.co.in",
  },
  {
    title: "RupeeDial.com",
    description:
      "Loan services platform with responsive UI and optimized mobile-first design.",
    image: project2,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://rupeedial.com",
  },
  {
    title: "Motorcart.in",
    description:
      "Automobile marketplace UI with structured layout and reusable frontend components.",
    image: project3,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://motorcart.in",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern developer portfolio built using React, Tailwind CSS and animations.",
    image: project1,
    technologies: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
  },
];

const ProjectsSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (

    <section id="projects" className="py-16 md:py-20" ref={ref}>

      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Some of the real projects I have worked on including live production websites.
          </p>

        </motion.div>


        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, i) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3"
                >

                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    href={project.liveUrl}
                    target="_blank"
                    className="p-3 bg-white rounded-full shadow"
                  >
                    <ExternalLink size={16} />
                  </motion.a>

                </motion.div>

              </div>


              {/* Content */}
              <div className="p-5">

                <h3 className="font-semibold mb-2 text-sm">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>


                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-[10px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default ProjectsSection;