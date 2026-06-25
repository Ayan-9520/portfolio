import { motion } from "framer-motion";
import { fadeUp } from "@/animations/animations";

type SectionHeadingProps = {
  title: string;
  highlight: string;
  subtitle?: string;
};

const SectionHeading = ({ title, highlight, subtitle }: SectionHeadingProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    className="mb-8 text-center md:mb-10"
  >
    <h2 className="font-heading text-3xl font-bold md:text-4xl">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 64 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-primary to-secondary"
    />
    {subtitle && (
      <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
