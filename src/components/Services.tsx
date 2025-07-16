import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  PhoneCall,
  Users,
  Clock,
  BarChart,
  MonitorSmartphone,
  LayoutDashboard,
  Briefcase,
} from "lucide-react";

// Updated features from "What You Get"
const features = [
  {
    icon: <Users size={40} className="text-primary-yellow" />,
    title: "Autopilot Sales Engine",
    description:
      "AI-driven sales acceleration, guided by expert human strategists for exponential growth.",
    bg: "bg-gradient-to-br from-primary-bg to-gray-900",
  },
  {
    icon: <PhoneCall size={40} className="text-primary-yellow" />,
    title: "Customer Experience Elevation",
    description:
      "24/7 intelligent support and engagement, blending empathy with automation for unforgettable experiences.",
    bg: "bg-gradient-to-br from-primary-bg to-gray-900",
  },
  {
    icon: <Clock size={40} className="text-primary-yellow" />,
    title: "AI-Enhanced Operations",
    description:
      "Streamlined processes and real-time insights, powered by the synergy of human and machine.",
    bg: "bg-gradient-to-br from-primary-bg to-gray-900",
  },
  {
    icon: <LayoutDashboard size={40} className="text-primary-yellow" />,
    title: "Strategic Growth Dashboard",
    description:
      "Always-on analytics and proactive recommendations, so you’re never guessing—only growing.",
    bg: "bg-gradient-to-br from-primary-bg to-gray-900",
  },
];

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <div
        className="h-full perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
          animate={{ rotateY: isFlipped || isHovered ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Front of Card */}
          <motion.div
            className="backface-hidden bg-gradient-to-br from-primary-bg to-primary-yellow/10 border border-primary-yellow/20 rounded-xl p-8 shadow-lg h-full flex flex-col"
            initial={{ opacity: 1 }}
            animate={{ opacity: isFlipped || isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-bold mb-3 text-text-light">{title}</h3>
            <p className="text-text-muted flex-grow">{description}</p>
            <motion.div
              className="mt-4 text-primary-yellow text-sm font-medium"
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              Click to learn more →
            </motion.div>
          </motion.div>

          {/* Back of Card */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full backface-hidden bg-gradient-to-br from-primary-bg to-primary-yellow/10 border border-primary-yellow/30 rounded-xl p-8 shadow-lg flex flex-col justify-center rotate-y-180"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped || isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-3 text-primary-yellow">
              {title}
            </h3>
            <div className="space-y-2 text-text-muted">
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-yellow mr-2"></span>
                {description}
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-yellow mr-2"></span>
                Fully managed by our team
              </p>
              <p className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-yellow mr-2"></span>
                Weekly performance reports
              </p>
            </div>
            <button className="mt-6 px-4 py-2 bg-primary-yellow/10 border border-primary-yellow/30 text-primary-yellow rounded-lg text-sm hover:bg-primary-yellow/20 transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PackageCard: React.FC<{
  title: string;
  features: string[];
  index: number;
  highlighted?: boolean;
}> = ({ title, features, index, highlighted = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative ${highlighted ? "z-10" : ""}`}
    >
      {highlighted && (
        <motion.div
          className="absolute -inset-1 bg-primary-yellow/20 blur-lg rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        />
      )}
      <div
        className={`bg-button-dark text-text-light rounded-lg shadow-lg overflow-hidden h-full relative ${
          highlighted
            ? "border-2 border-primary-yellow"
            : "border border-gray-800"
        }`}
      >
        <div
          className={`py-4 ${
            highlighted ? "bg-primary-yellow/10" : "bg-black bg-opacity-20"
          }`}
        >
          <h4 className="text-xl font-bold text-center">{title}</h4>
        </div>
        <div className="p-6">
          <ul className="text-sm text-left mb-6 space-y-3">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.15 + i * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 rounded-full bg-primary-yellow mt-2 mr-2 flex-shrink-0"></span>
                <span className="text-text-muted">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#contact"
            className={`block w-full font-bold py-3 rounded-md text-center transition-colors ${
              highlighted
                ? "bg-primary-yellow text-accent-contrast hover:bg-opacity-90"
                : "bg-gray-800 text-text-light hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-primary-bg relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary-yellow blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-primary-yellow blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="section-title text-text-light mb-4">
            Unlock the Next Level of Growth
          </h2>
          <p className="section-subtitle text-text-muted max-w-2xl mx-auto">
            Discover a suite of AI-powered, human-enhanced solutions designed to
            elevate every aspect of your business—seamlessly, intelligently, and
            at scale.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Packages */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold mb-4 text-text-light"
            whileInView={{ scale: [0.98, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Choose Your Autopilot Package
          </motion.h3>
          <motion.p
            className="text-text-muted mb-10 max-w-2xl mx-auto"
            whileInView={{ x: [-10, 0], opacity: [0.9, 1] }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            From foundational support to a full remote growth department — pick
            your growth tier.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <PackageCard
              title="FOUNDATION PACKAGE"
              features={[
                "1 campaign (cold calling or digital)",
                "1 SDR + 1 VA",
                "Basic CRM setup",
                "Monthly reporting",
                "30-min onboarding — hands-off after",
              ]}
              index={0}
            />

            <PackageCard
              title="GROWTH ENGINE"
              features={[
                "Website + brand refresh",
                "CRM + SOPs + follow-up automation",
                "Cold calling + digital outreach team",
                "Operator mentorship access",
                "Weekly insights & team reporting",
              ]}
              index={1}
              highlighted
            />

            <PackageCard
              title="ELITE PARTNER"
              features={[
                "Full growth department: SDRs, VAs, strategist",
                "Graphics + content creation team",
                "Custom dashboards & client portals",
                "Private Slack + VIP support",
                "Quarterly strategy summits",
              ]}
              index={2}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
