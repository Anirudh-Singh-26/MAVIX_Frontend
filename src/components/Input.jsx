import { cn } from "../lib/utils";

const Input = ({ label, error, className, type = "text", ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-text">{label}</label>
      )}
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg",
          "text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
          "transition-colors duration-200",
          error && "border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
