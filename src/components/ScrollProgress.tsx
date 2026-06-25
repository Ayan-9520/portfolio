import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { getLenis } from "@/utils/smoothScroll";

const ScrollProgress = () => {
  const progress = useMotionValue(0);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const attach = () => {
      const lenis = getLenis();
      if (!lenis) {
        requestAnimationFrame(attach);
        return;
      }

      const update = () => {
        const limit = lenis.limit;
        progress.set(limit > 0 ? lenis.scroll / limit : 0);
      };

      lenis.on("scroll", update);
      update();
      cleanup = () => lenis.off("scroll", update);
    };

    attach();
    return () => cleanup?.();
  }, [progress]);

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-[90] h-[3px] origin-left bg-primary"
    />
  );
};

export default ScrollProgress;
