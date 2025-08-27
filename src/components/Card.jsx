import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={cn("glass-card p-6", className)}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
