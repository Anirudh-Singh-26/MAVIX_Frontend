import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-white hover:shadow-glow",
    secondary:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    outline:
      "border border-muted text-muted hover:border-primary hover:text-primary",
    ghost: "text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm", // slimmer small
    md: "px-5 py-2 text-base", // reduced height for medium
    lg: "px-6 py-3 text-lg", // large stays tall
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:shadow-none"
    : "";

  return (
    <motion.button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabledClasses,
        className
      )}
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
