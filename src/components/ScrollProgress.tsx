import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {

  const { scrollYProgress } = useScroll();

  return (

    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 z-[90] h-[3px] origin-left bg-primary"
    />

  );
};

export default ScrollProgress;