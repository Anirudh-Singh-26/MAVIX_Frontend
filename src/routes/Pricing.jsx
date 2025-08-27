import { motion } from "framer-motion";
import PricingTable from "../components/PricingTable";
import { fadeInUp } from "../lib/animations";

const Pricing = () => {
  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial of our Pro plan with no credit card required. You can experience all premium features risk-free.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with MAVIX, contact us within 30 days for a full refund.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade encryption and security measures. Your data is never shared with third parties and is stored securely in compliance with GDPR and SOC 2 standards.",
    },
  ];

  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
      }}
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section (now matches About/Contact page) */}
      <section className="py-16 relative">
        <div className="absolute inset-0 mesh-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-text">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your needs. Start free and scale as
              you grow. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto glass-card p-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 text-text">
                Need Something More?
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Looking for custom solutions, dedicated support, or
                enterprise-grade features? Our team is here to help you build
                the perfect AI solution for your organization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold text-text mb-2">
                    Custom Models
                  </h3>
                  <p className="text-muted text-sm">
                    Tailored AI models trained on your specific data and use
                    cases
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-text mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-muted text-sm">
                    24/7 priority support with dedicated customer success
                    manager
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-text mb-2">
                    On-Premise Deployment
                  </h3>
                  <p className="text-muted text-sm">
                    Deploy MAVIX within your own infrastructure for
                    maximum security
                  </p>
                </div>
              </div>
              <motion.a
                href="mailto:enterprise@MAVIX.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Enterprise Sales
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 text-text">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted">
              Have questions? We have answers. If you can't find what you're
              looking for, feel free to contact our support team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="glass-card p-6 rounded-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <summary className="cursor-pointer text-lg font-semibold text-text flex justify-between items-center">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform duration-200">
                    ▼
                  </span>
                </summary>
                <p className="text-muted mt-4 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-8 text-text">
              Trusted by 50,000+ Users Worldwide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  99.9%
                </div>
                <div className="text-sm text-muted">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  50K+
                </div>
                <div className="text-sm text-muted">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">1M+</div>
                <div className="text-sm text-muted">Messages Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-muted">User Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
