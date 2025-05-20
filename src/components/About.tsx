import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-primary-bg relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-yellow blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary-yellow blur-xl"></div>
      </div>

      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title text-text-light"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="section-subtitle text-text-muted"
            whileHover={{ scale: 1.01 }}
          >
            Learn more about our mission and values
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            className="space-y-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Who We Are Section */}
            <motion.div 
              className="space-y-4 bg-gradient-to-r from-transparent via-primary-bg/50 to-transparent p-6 rounded-xl"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-center text-primary-yellow"
                whileInView={{ scale: [0.98, 1] }}
                transition={{ duration: 0.5 }}
              >
                Who We Are
              </motion.h3>
              <motion.p 
                className="text-lg text-text-muted leading-relaxed"
                whileInView={{ x: [-10, 0] }}
                transition={{ duration: 0.5 }}
              >
                We are{" "}
                <span className="font-semibold text-primary-yellow hover:text-primary-yellow/90 transition-colors duration-300">
                  NexLead Solutions
                </span>{" "}
                — your ultimate business growth partner. We don't just offer
                services — we deliver results. From high-converting telesales to
                AI-powered lead generation, NexLead powers some of the
                fastest-growing businesses in the U.S. and beyond. Our clients
                scale smarter, faster, and more profitably — while saving up to{" "}
                <span className="font-semibold text-primary-yellow hover:text-primary-yellow/90 transition-colors duration-300">
                  70% in operational costs
                </span>
                .
              </motion.p>
            </motion.div>

            {/* What We Do Best Section */}
            <motion.div 
              className="space-y-4 bg-gradient-to-r from-transparent via-primary-bg/50 to-transparent p-6 rounded-xl"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-primary-yellow text-center"
                whileInView={{ scale: [0.98, 1] }}
                transition={{ duration: 0.5 }}
              >
                What We Do Best
              </motion.h3>
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
              >
                {[
                  {
                    title: "Telesales & Cold Calling That Closes:",
                    desc: "Our U.S. market-trained agents pitch, handle objections, and close like pros — no fluff, just results."
                  },
                  {
                    title: "Lead Generation That Delivers:",
                    desc: "Powered by our proprietary NexLead Hunter tech, we provide live, verified B2B leads ready to convert."
                  },
                  {
                    title: "Full-Service Virtual Assistant Support:",
                    desc: "From appointment setting to CRM updates, our VAs are trained to think like business owners — so you stay focused on closing deals."
                  },
                  {
                    title: "Digital Marketing Domination:",
                    desc: "We create and manage Meta (Facebook/Instagram) ad campaigns that pull in leads and grow your brand."
                  },
                  {
                    title: "Website & Funnel Development:",
                    desc: "Whether it's a sleek website or conversion-optimized funnel, we help turn visitors into customers."
                  },
                  {
                    title: "Custom Software & SaaS Development:",
                    desc: "Automate your business with tailored tools designed to increase efficiency and performance."
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-primary-yellow font-bold text-xl group-hover:scale-110 transition-transform">•</span>
                    <div>
                      <span className="font-semibold text-text-light group-hover:text-primary-yellow transition-colors">
                        {item.title}
                      </span>
                      <p className="text-text-muted mt-1 group-hover:text-text-light/90 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;