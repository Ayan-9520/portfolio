import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Send, Download, MapPin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profile from "@/assets/profile.jpg";
import AnimatedBackground from "@/components/AnimatedBackground";
import { personalInfo, heroTags } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scrollTo";
import { staggerContainer, staggerItem } from "@/animations/animations";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-[88dvh] items-center overflow-hidden pt-[4.5rem] pb-10 sm:pb-12"
  >
    <AnimatedBackground />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={staggerItem} className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:text-sm">
              Available for opportunities
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
              <MapPin size={14} className="text-primary" />
              {personalInfo.location}
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mb-4 font-heading text-[1.65rem] font-bold leading-tight sm:mb-5 sm:text-3xl md:text-4xl md:whitespace-nowrap lg:text-[2.5rem]"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="mb-2 min-h-[2rem] text-base font-medium text-muted-foreground sm:min-h-[2.5rem] sm:text-lg md:text-xl"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1800,
                "React.js & TypeScript",
                1800,
                "Python Developer",
                1800,
                "Python | FastAPI | PostgreSQL",
                1800,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p variants={staggerItem} className="mb-2 text-sm text-primary/90 sm:text-base">
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div variants={staggerItem} className="mb-8 flex flex-wrap gap-2">
            {heroTags.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-foreground sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button
              size="lg"
              variant="hero"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="heroOutline"
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Me
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex w-full gap-3 sm:w-auto">
              <Button size="lg" variant="outline" className="flex-1 sm:flex-none" asChild>
                <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 sm:flex-none" asChild>
                <a href={personalInfo.resume} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-primary/30 sm:-inset-4"
            />
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl" />
            <img
              src={profile}
              alt={personalInfo.name}
              className="relative mx-auto aspect-square w-56 max-w-full rounded-2xl border-2 border-primary/20 object-cover shadow-2xl shadow-primary/10 sm:w-64 md:w-72 lg:w-80"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
