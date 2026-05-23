import { motion } from "framer-motion";

export default function Loader() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-white text-4xl font-bold"
      >
        Ayan.dev
      </motion.h1>

    </motion.div>

  );

}