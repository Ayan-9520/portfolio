import { motion } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { useInView } from "framer-motion";

const experiences = [
  {
    title: "Front-End Developer",
    company: "MoneyMines.co.in",
    period: "May 2025 – Present",
    description:
      "Developing responsive UI using HTML, CSS, JavaScript and Tailwind CSS. Improved website performance and built reusable components for scalable UI development.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    title: "Front-End Developer",
    company: "SNM Technologies",
    period: "Nov 2024 – Apr 2025",
    description:
      "Built responsive websites using HTML5, CSS3, Bootstrap and JavaScript. Converted Figma and PSD designs into pixel-perfect layouts.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

const ExperienceSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (

    <section id="experience" className="py-16 md:py-20 bg-muted/30" ref={ref}>

      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>

          <p className="text-muted-foreground max-w-lg mx-auto">
            My professional journey building responsive and modern web applications.
          </p>

        </motion.div>


        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">

          {/* animated line */}
          <motion.div
            initial={{ height:0 }}
            whileInView={{ height:"100%" }}
            transition={{ duration:1 }}
            viewport={{ once:true }}
            className="absolute left-4 md:left-1/2 w-[2px] bg-border"
          />

          {experiences.map((exp, i) => (

            <motion.div
              key={exp.title}
              initial={{ opacity:0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 flex ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >

              {/* timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2"></div>


              {/* Card */}
              <motion.div
                whileHover={{ y:-6 }}
                className="ml-10 md:ml-0 md:w-[45%]"
              >

                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">

                  {/* period */}
                  <div className="flex items-center gap-2 mb-2 text-primary text-xs font-medium">
                    <Briefcase size={14}/>
                    {exp.period}
                  </div>

                  {/* title */}
                  <h3 className="font-semibold text-lg">
                    {exp.title}
                  </h3>

                  {/* company */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.company}
                  </p>

                  {/* description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* tech stack */}
                  <div className="flex flex-wrap gap-2">

                    {exp.tech.map((tech)=>(
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

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default ExperienceSection;