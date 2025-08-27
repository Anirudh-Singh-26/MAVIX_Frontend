import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const CTASection = ({
  title = "Ready to experience the future of AI?",
  subtitle = "Join thousands of users who are already boosting their productivity with MAVIX.",
  primaryText = "Start Free Trial",
  secondaryText = "View Demo",
}) => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 hero-gradient opacity-30 rounded-3xl" />

          <div className="relative glass-card p-12 lg:p-20">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6 text-gradient">
              {title}
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="group"
              >
                {primaryText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/signup")}
              >
                {secondaryText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
