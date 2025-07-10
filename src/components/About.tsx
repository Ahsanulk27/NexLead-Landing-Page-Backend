import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-primary-bg relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]"></div>
      </div>

      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title text-text-light mb-4">
            <TypeAnimation
              sequence={[
                "About NexLead",
                1000,
                "Your Growth Partner",
                1000,
                "Scaling Experts",
                1000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
              className="text-primary-yellow"
            />
          </h2>

          <motion.p
            className="section-subtitle text-text-muted max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <TypeAnimation
              sequence={[
                "The team behind your fully managed growth engine",
                2000,
                "Your outsourced growth department",
                2000,
                "Premium scaling systems for service businesses",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Who We Are - Animated Card */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                className="h-full bg-gradient-to-br from-primary-bg to-primary-bg/80 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(234, 179, 8, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary-yellow mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-yellow/50 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-yellow/30"></div>
                  <h3 className="text-2xl font-bold text-primary-yellow ml-auto">
                    Who We Are
                  </h3>
                </div>
                <p className="text-lg text-text-muted leading-relaxed">
                  We're{" "}
                  <span className="text-primary-yellow font-medium">
                    NexLead Solutions
                  </span>{" "}
                  — your dedicated{" "}
                  <span className="text-primary-yellow font-medium">
                    growth team
                  </span>{" "}
                  and Business Process Outsourcing (BPO) partner. We deliver
                  scalable business solutions, customer experience outsourcing,
                  and AI-powered automation to help you achieve predictable
                  revenue growth with minimal owner involvement.
                </p>
              </motion.div>
            </Tilt>

            {/* What Makes Us Different - Animated Card */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <motion.div
                className="h-full bg-gradient-to-br from-primary-bg to-primary-bg/80 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(234, 179, 8, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary-yellow mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-yellow/50 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-yellow/30"></div>
                  <h3 className="text-2xl font-bold text-primary-yellow ml-auto">
                    Our Difference
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Comprehensive BPO Solutions",
                    "Customer Service BPO & Experience Outsourcing",
                    "AI-Powered Automation for Efficiency",
                    "Sales Outsourcing & Revenue Growth",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-yellow mr-3"></div>
                      <span className="text-text-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>

        {/* Animated stats bar */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-yellow/10 to-transparent p-6 rounded-xl border border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "200+", label: "Clients Served" },
              { value: "3.5x", label: "Avg. Growth" },
              { value: "24/7", label: "Support" },
              { value: "30min", label: "Onboarding" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-primary-yellow">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
