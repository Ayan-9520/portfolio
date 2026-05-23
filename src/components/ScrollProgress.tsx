import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {

  const { scrollYProgress } = useScroll();

  return (

    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[999]"
    />

  );
};

export default ScrollProgress;