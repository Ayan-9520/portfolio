import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/portfolio";
import { staggerContainer, staggerItem } from "@/animations/animations";

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <SectionHeading
        title="Client"
        highlight="Testimonials"
        subtitle="Feedback from teams and projects I've worked with."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="glass-card-hover relative p-6"
          >
            <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15" />
            <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                <span className="text-xs font-bold text-primary-foreground">{t.initials}</span>
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
