import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Send, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import profile from "@/assets/profile.jpg";

const HeroSection = () => {

  const scrollToSection = (id) => {

    const element = document.querySelector(id);

    if (!element) return;

    const navbarHeight = 80;

    const offsetPosition =
      element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block px-4 py-2 mb-5 text-sm rounded-full border border-primary/30 bg-primary/5 text-primary">
              🚀 Available for Freelance Work
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mohammad Ayan
              </span>
            </h1>

            {/* typing animation */}
            <div className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
             <TypeAnimation
sequence={[
"Frontend Developer",
2000,
"React & Tailwind Developer",
2000,
"Building Modern Web Interfaces",
2000,
]}
speed={50}
repeat={Infinity}
/>
            </div>

            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I build responsive, user-friendly and performance-optimized websites using modern frontend technologies. I specialize in converting Figma and PSD designs into pixel-perfect layouts.
            </p>

            {/* tech stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["HTML", "CSS", "JavaScript", "Tailwind", "React", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-4">

  {/* View Projects */}
  <Button
    size="lg"
    variant="hero"
    onClick={() => scrollToSection("#projects")}
  >
    View Projects
    <ArrowDown className="ml-2 h-4 w-4" />
  </Button>

  {/* Contact */}
  <Button
    size="lg"
    variant="heroOutline"
    onClick={() => scrollToSection("#contact")}
  >
    Contact Me
    <Send className="ml-2 h-4 w-4" />
  </Button>

  {/* View Resume */}
<Button size="lg" variant="outline" asChild>
  <a
    href="/Mohammad-Ayan-Frontend-Developer-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume
  </a>
</Button>

{/* Download Resume */}
<Button size="lg" variant="outline" asChild>
  <a
    href="/Mohammad-Ayan-Frontend-Developer-Resume.pdf"
    download
  >
    Download Resume
  </a>
</Button>

</div>

          </motion.div>


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full"></div>

              <img
                src={profile}
                alt="Mohammad Ayan"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-background shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;