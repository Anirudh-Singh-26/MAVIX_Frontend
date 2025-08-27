import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Card from "./Card";
import Button from "./Button";
import { formatPrice } from "../lib/utils";
import { useNavigate } from "react-router-dom";


const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for getting started",
      features: [
        "10 messages per day",
        "Basic chat assistance",
        "Standard response time",
        "Web access",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: 20,
      description: "For power users and professionals",
      features: [
        "Unlimited messages",
        "Advanced AI capabilities",
        "Priority response time",
        "Code assistance",
        "Document analysis",
        "API access",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Teams",
      price: 50,
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin dashboard",
        "Usage analytics",
        "Custom integrations",
        "Priority support",
        "SSO integration",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];
    const navigate = useNavigate();


  return (
    <div className="space-y-8">
      {/* Toggle */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4 bg-white/5 p-1 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              !isYearly ? "bg-primary text-white" : "text-muted hover:text-text"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              isYearly ? "bg-primary text-white" : "text-muted hover:text-text"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
            <span className="ml-2 px-2 py-1 bg-accent text-xs rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <Card
              className={`h-full mt-10 ${
                plan.popular ? "ring-2 ring-primary/50" : ""
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading font-semibold mb-2 text-text">
                  {plan.name}
                </h3>
                <p className="text-muted text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-heading font-bold text-gradient">
                    {formatPrice(plan.price, isYearly)}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-muted ml-2">
                      {isYearly ? "/year" : "/month"}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                onClick={() => navigate("/signup")}
                variant={plan.popular ? "primary" : "secondary"}
              >
                {plan.cta}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
