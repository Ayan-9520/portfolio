import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "MoneyMines Team",
    role: "Finance Platform",
    quote:
      "Ayan consistently delivered responsive and well-structured UI components. His ability to convert designs into clean and scalable frontend code significantly improved our website experience.",
    initials: "MM",
  },
  {
    name: "RupeeDial Project",
    role: "Loan Service Platform",
    quote:
      "Ayan developed responsive layouts and improved UI usability across mobile and desktop devices. His attention to detail and performance optimization helped enhance the platform's user experience.",
    initials: "RD",
  },
  {
    name: "Motorcart Team",
    role: "Automobile Marketplace",
    quote:
      "Ayan built structured frontend pages and reusable UI components that improved development speed and consistency across the platform.",
    initials: "MC",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-hover p-6 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
