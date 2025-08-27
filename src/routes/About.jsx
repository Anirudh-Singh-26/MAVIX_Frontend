import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  Zap,
  Shield,
  Globe,
  Heart,
} from "lucide-react";
import { pageTransition } from "../lib/animations";

const About = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible with AI technology.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your data is protected with enterprise-grade security measures.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making AI assistance available to everyone, everywhere.",
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description: "Technology that enhances human capability and creativity.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Founded with a vision to democratize AI assistance and make advanced technology accessible to everyone.",
      milestone: "Company Founded",
    },
    {
      year: "2023",
      title: "First Launch",
      description:
        "Launched our beta platform with basic chat functionality and gained our first 1,000 users.",
      milestone: "Beta Release",
    },
    {
      year: "2024",
      title: "Major Expansion",
      description:
        "Introduced advanced features like code assistance and document summarization, reaching 50,000 users.",
      milestone: "50K Users",
    },
    {
      year: "2024",
      title: "Global Reach",
      description:
        "Expanded to support 100+ languages and established partnerships with major organizations.",
      milestone: "Global Launch",
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Continuing to innovate with new AI capabilities and expanding our mission worldwide.",
      milestone: "What's Next",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former AI researcher at Stanford with 10+ years in machine learning.",
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer specializing in large language models and scalable systems.",
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "Product leader with expertise in user experience and AI interface design.",
      avatar: "EW",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack architect with experience building enterprise AI platforms.",
      avatar: "DK",
    },
    {
      name: "Lisa Park",
      role: "Head of Design",
      bio: "Creative director focused on making complex AI interactions intuitive.",
      avatar: "LP",
    },
    {
      name: "Alex Thompson",
      role: "Head of Research",
      bio: "AI researcher pushing the boundaries of natural language understanding.",
      avatar: "AT",
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 mesh-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text mb-6">
              About
              <span className="block text-gradient">MAVIX</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              We're on a mission to democratize artificial intelligence and make
              advanced AI assistance accessible to everyone, transforming how
              people work and create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-2xl"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold text-text">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                To empower individuals and organizations with intelligent AI
                assistance that enhances human creativity, productivity, and
                decision-making. We believe technology should amplify human
                potential, not replace it.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-2xl"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold text-text">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">
                A world where advanced AI assistance is universally accessible,
                helping people accomplish more, learn faster, and unlock their
                full creative potential through seamless human-AI collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              The principles that guide everything we do at MAVIX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="glass p-8 rounded-2xl h-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 mx-auto"></div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-text mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Passionate individuals working together to shape the future of AI
              assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl text-center hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {member.avatar}
                </div>
                <h3 className="font-display text-xl font-semibold text-text mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted">
              From idea to impact - the story of MAVIX.
            </p>
          </div>

          <div className="relative">
            {/* Curved timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-pink-500 opacity-50"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 glass p-8 rounded-2xl flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-2xl font-bold text-text">
                        {item.title}
                      </h3>
                      <div className="flex flex-col items-end">
                        <span className="text-primary font-semibold text-lg">
                          {item.year}
                        </span>
                        <span className="text-muted text-sm">
                          {item.milestone}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-mesh"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-muted mb-8">
              Be part of the AI revolution and help us shape the future of
              human-AI collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => (window.location.href = "/signup")}
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
