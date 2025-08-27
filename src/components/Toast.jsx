import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";

const Toast = ({
  message,
  type = "success",
  isVisible = false,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose && onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
  };

  const colors = {
    success: "from-green-500 to-emerald-500",
    error: "from-red-500 to-rose-500",
    warning: "from-yellow-500 to-orange-500",
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="glass-strong rounded-2xl p-4 min-w-[320px] border border-white/20 shadow-2xl">
            <div className="flex items-start space-x-3">
              <div
                className={`p-1 rounded-lg bg-gradient-to-r ${colors[type]}`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-text text-sm font-medium">{message}</p>
              </div>

              {onClose && (
                <button
                  onClick={onClose}
                  className="text-muted hover:text-text transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {duration > 0 && (
              <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: duration / 1000, ease: "linear" }}
                  className={`h-full bg-gradient-to-r ${colors[type]}`}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
