import { motion } from "framer-motion";
import Card from "./Card";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="text-center h-full">
        <div className="inline-flex p-3 bg-gradient-to-r from-primary to-accent rounded-lg mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3 text-text">
          {title}
        </h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
