import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  Layers,
  BarChart2,
  Zap,
} from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const benefits = [
  {
    icon: <Rocket size={36} className="text-primary-yellow" />,
    title: "Built for Growth",
    description:
      "From day one, your team, systems, and outreach are optimized to grow revenue — not just maintain ops.",
    color: "yellow",
  },
  {
    icon: <Users size={36} className="text-primary-yellow" />,
    title: "No Hiring. No Training.",
    description:
      "Skip the headaches — we hand you a trained, managed team under your brand with zero micromanagement.",
    color: "yellow",
  },
  {
    icon: <Clock size={36} className="text-primary-yellow" />,
    title: "Faster Launches",
    description:
      "We deploy in days, not months. Get your growth engine live and working faster than traditional hiring ever could.",
    color: "yellow",
  },
  {
    icon: <ShieldCheck size={36} className="text-nexlead-green" />,
    title: "Fully Managed",
    description:
      "From performance reviews to CRM hygiene — our team handles the backend so you focus on CEO-level tasks.",
    color: "green",
  },
  {
    icon: <Zap size={36} className="text-nexlead-green" />,
    title: "On Autopilot",
    description:
      "Once you're onboarded, our systems and people execute daily — you just monitor results and guide the strategy.",
    color: "green",
  },
  {
    icon: <BarChart2 size={36} className="text-primary-yellow" />,
    title: "Data-Driven Insights",
    description:
      "Weekly reporting, live dashboards, and real operator feedback keep you in the loop without daily check-ins.",
    color: "yellow",
  },
  {
    icon: <Layers size={36} className="text-nexlead-green" />,
    title: "Custom-Tailored Stack",
    description:
      "Your growth stack is designed around your offers, market, and goals — no cookie-cutter setups.",
    color: "green",
  },
  {
    icon: <TrendingUp size={36} className="text-primary-yellow" />,
    title: "Scales as You Scale",
    description:
      "Need more callers? More campaigns? New CRMs? Your infrastructure scales as your revenue does.",
    color: "yellow",
  },
];

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}> = ({ icon, title, description, color, index }) => {
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
        className="h-full relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background particles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${
                    color === "yellow" 
                      ? "bg-primary-yellow/20" 
                      : "bg-nexlead-green/20"
                  }`}
                  initial={{ 
                    opacity: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    width: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Card Content */}
        <motion.div
          className={`h-full p-8 rounded-xl border ${
            color === "yellow" 
              ? "border-primary-yellow/20 hover:border-primary-yellow/40" 
              : "border-nexlead-green/20 hover:border-nexlead-green/40"
          } bg-gradient-to-br from-primary-bg to-gray-900/50 flex flex-col transition-all duration-300`}
          whileHover={{ 
            y: -5,
            boxShadow: color === "yellow" 
              ? "0 10px 30px -10px rgba(234, 179, 8, 0.2)" 
              : "0 10px 30px -10px rgba(74, 222, 128, 0.2)"
          }}
        >
          <motion.div
            className={`w-14 h-14 rounded-lg ${
              color === "yellow" 
                ? "bg-primary-yellow/10" 
                : "bg-nexlead-green/10"
            } flex items-center justify-center mb-6`}
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-xl font-bold mb-3 text-text-light">{title}</h3>
          
          <motion.p 
            className="text-text-muted flex-grow"
            animate={{
              color: isHovered 
                ? color === "yellow" 
                  ? "rgba(255,255,255,0.9)" 
                  : "rgba(255,255,255,0.9)"
                : "rgba(163, 163, 163, 1)",
            }}
          >
            {description}
          </motion.p>
          
          <motion.div
            className={`mt-6 h-1 ${
              color === "yellow" 
                ? "bg-primary-yellow/30" 
                : "bg-nexlead-green/30"
            } rounded-full overflow-hidden`}
          >
            <motion.div
              className={`h-full ${
                color === "yellow" ? "bg-primary-yellow" : "bg-nexlead-green"
              } rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5 + index * 0.1, duration: 1.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="benefits" className="py-16 md:py-24 bg-primary-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-primary-yellow blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-nexlead-green blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="section-title mb-4"
            whileInView={{
              textShadow: "0 0 15px rgba(234, 179, 8, 0.3)",
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <TypeAnimation
              sequence={[
                'Why NexLead Autopilot',
                1500,
                'Your Growth Advantage',
                1500,
                'Built for Scaling',
                1500,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </motion.h2>
          
          <motion.p
            className="section-subtitle max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We don't just give you people — we build, run, and optimize your{" "}
            <span className="text-primary-yellow font-semibold">growth machine</span>. Here's what you get by partnering with us.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center px-8 py-4 rounded-lg text-lg font-bold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Talk to a Growth Strategist</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary-yellow to-nexlead-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
            />
            <motion.span
              className="absolute inset-0 bg-primary-yellow"
              initial={{ opacity: 1 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;