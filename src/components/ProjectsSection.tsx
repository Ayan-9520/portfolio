import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/animations/animations";

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        title="Key"
        highlight="Projects"
        subtitle="Production websites and platforms I've contributed to — from fintech to automotive."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-shadow duration-500 hover:shadow-[0_20px_40px_-20px_hsl(var(--primary)/0.35)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-1.5 font-heading text-sm font-semibold sm:text-base">
                {project.title}
              </h3>
              <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
