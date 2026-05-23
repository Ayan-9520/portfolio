import { motion } from "framer-motion";

const PageLoader = () => {

return(

<motion.div
initial={{opacity:1}}
animate={{opacity:0}}
transition={{delay:1,duration:1}}
className="fixed inset-0 bg-background flex items-center justify-center z-[9999]"
>

<div className="text-2xl font-bold gradient-text">
Loading...
</div>

</motion.div>

);

};

export default PageLoader;