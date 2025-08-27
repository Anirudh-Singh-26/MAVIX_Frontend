  import { useState, useEffect } from "react";
  import { motion } from "framer-motion";
  import { MessageSquare, FileText, Code, Globe } from "lucide-react";
  import Card from "../components/Card";
  import { fadeInUp } from "../lib/animations";

  const Features = () => {
    const [activeSection, setActiveSection] = useState("chat");

    const features = [
      {
        id: "chat",
        icon: MessageSquare,
        title: "Intelligent Chat",
        description:
          "Experience natural conversations with our advanced AI that understands context, maintains conversation history, and provides thoughtful, accurate responses tailored to your needs.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&fit=crop",
      },
      {
        id: "summaries",
        icon: FileText,
        title: "Document Summaries",
        description:
          "Upload documents, PDFs, and text files to get instant summaries, extract key insights, and ask specific questions about your content with remarkable accuracy.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&fit=crop",
      },
      {
        id: "code",
        icon: Code,
        title: "Code Help",
        description:
          "Get expert assistance with programming across multiple languages. Debug code, optimize performance, learn best practices, and accelerate your development workflow.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&fit=crop",
      },
      {
        id: "multilang",
        icon: Globe,
        title: "Multi-Language Support",
        description:
          "Communicate seamlessly in over 50 languages with accurate translations, cultural context awareness, and native-level fluency across diverse linguistic needs.",
        image:
          "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&fit=crop",
      },
    ];

    // Handle scroll-based active section updates
    useEffect(() => {
      const handleScroll = () => {
        const sections = features.map((f) => document.getElementById(f.id));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(features[i].id);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

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
        {/* Hero Section (Matches About Page) */}
        <section className="py-20 bg-bg">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h1
              className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-text"
              {...fadeInUp}
            >
              Powerful <span className="text-gradient">Features</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted max-w-2xl mx-auto leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Discover the comprehensive suite of AI-powered capabilities that
              make MAVIX the ultimate productivity companion.
            </motion.p>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="relative">
          <div className="sticky top-24 z-30 bg-bg/95 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex space-x-6 sm:space-x-8 py-4 overflow-x-auto">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => scrollToSection(feature.id)}
                    className={`flex items-center space-x-2 whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === feature.id
                        ? "bg-primary text-white"
                        : "text-muted hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <feature.icon className="h-4 w-4" />
                    <span className="font-medium">{feature.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Feature Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <section key={feature.id} id={feature.id} className="py-20">
              <motion.div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text">
                      {feature.title}
                    </h2>
                  </div>

                  <p className="text-lg text-muted leading-relaxed mb-8">
                    {feature.description}
                  </p>

                  {/* Feature-specific details */}
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-text mb-4">
                      Key Capabilities:
                    </h3>
                    <ul className="space-y-2">
                      {feature.id === "chat" && (
                        <>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Context-aware conversations
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Multi-turn dialogue support
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Personalized responses
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Real-time typing indicators
                          </li>
                        </>
                      )}
                      {feature.id === "summaries" && (
                        <>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            PDF and document analysis
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Intelligent summarization
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Key insight extraction
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Question-based queries
                          </li>
                        </>
                      )}
                      {feature.id === "code" && (
                        <>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Multi-language support
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Debugging assistance
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Code optimization tips
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Best practice guidance
                          </li>
                        </>
                      )}
                      {feature.id === "multilang" && (
                        <>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            50+ language support
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Cultural context awareness
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Accurate translations
                          </li>
                          <li className="flex items-center text-muted">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            Native-level fluency
                          </li>
                        </>
                      )}
                    </ul>
                  </Card>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } relative`}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20" />
                  </motion.div>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </motion.div>
    );
  };

  export default Features;
