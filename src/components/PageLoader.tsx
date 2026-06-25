import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const PageLoader = () => {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      onAnimationComplete={() => setHidden(true)}
      className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo showText={false} size="md" />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
      />
    </motion.div>
  );
};

export default PageLoader;
