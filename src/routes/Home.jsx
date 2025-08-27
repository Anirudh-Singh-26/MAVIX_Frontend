import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  FileText,
  Code,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import CTASection from "../components/CTASection";
import {
  pageVariants,
  pageTransition,
  fadeInUp,
  staggerContainer,
  staggerChild,
} from "../lib/animations";

const Home = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: MessageCircle,
      title: "Intelligent Chat",
      description:
        "Engage in natural conversations with our advanced AI that understands context and provides thoughtful responses.",
    },
    {
      icon: FileText,
      title: "Smart Summaries",
      description:
        "Transform lengthy documents, articles, and reports into concise, actionable summaries in seconds.",
    },
    {
      icon: Code,
      title: "Code Assistant",
      description:
        "Get help with coding challenges, debugging, and learning new programming languages with expert guidance.",
    },
    {
      icon: Globe,
      title: "Multi-language",
      description:
        "Communicate seamlessly across language barriers with real-time translation and multilingual support.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Experience instant responses powered by cutting-edge AI infrastructure and optimized performance.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your data is protected with enterprise-grade security and privacy-first design principles.",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Sign Up",
      description:
        "Create your account in seconds and start your journey with MAVIX.",
    },
    {
      step: 2,
      title: "Chat & Create",
      description:
        "Ask questions, generate content, and solve problems with our AI assistant.",
    },
    {
      step: 3,
      title: "Boost Productivity",
      description:
        "Transform your workflow and achieve more with AI-powered assistance.",
    },
  ];

  const testimonials = [
    {
      content:
        "MAVIX has revolutionized how I approach daily tasks. The AI understands exactly what I need and delivers beyond expectations.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      rating: 5,
    },
    {
      content:
        "The code assistance feature is incredible. It's like having a senior developer on call 24/7 to help with any programming challenge.",
      author: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "DevCorp",
      rating: 5,
    },
    {
      content:
        "I've tried many AI assistants, but MAVIX stands out with its accuracy, speed, and intuitive interface. Absolutely recommended!",
      author: "Emma Thompson",
      role: "Content Creator",
      company: "Creative Labs",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="hero-gradient" />
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.08)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* 🔵 Floating Blue Balls */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-primary rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              The Future of <span className="text-gradient">AI Assistance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of artificial intelligence with
              MAVIX. Chat, create, code, and collaborate with an AI that
              truly understands your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="group"
              >
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/signup")}
              >
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Powerful Features for{" "}
              <span className="text-gradient">Every Need</span>
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Discover the comprehensive suite of AI-powered tools designed to
              enhance your productivity.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={staggerChild}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-bg to-bg/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Get started with MAVIX in three simple steps and transform
              your productivity today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold text-xl mb-6 shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 right-0 translate-x-1/2 h-6 w-6 text-primary/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              What Our <span className="text-gradient">Users Say</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their
              productivity.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Navigation */}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              { number: "1M+", label: "Active Users" },
              { number: "50M+", label: "Conversations" },
              { number: "99.9%", label: "Uptime" },
              { number: "4.9/5", label: "User Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
};

export default Home;
