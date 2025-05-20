import React from "react";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Target,
  Zap,
  Users,
  Settings,
} from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp size={40} className="text-primary-yellow" />,
    title: "Increased Efficiency",
    description:
      "Streamline your operations and boost productivity with our expert BPO solutions.",
  },
  {
    icon: <Clock size={40} className="text-primary-yellow" />,
    title: "24/7 Availability",
    description:
      "Round-the-clock support ensures your business never misses an opportunity.",
  },
  {
    icon: <Users size={40} className="text-primary-yellow" />,
    title: "Skilled Professionals",
    description:
      "Access a pool of trained professionals dedicated to your business success.",
  },
  {
    icon: <DollarSign size={40} className="text-primary-yellow" />,
    title: "Cost-Effective",
    description:
      "Reduce operational costs while maintaining high-quality service delivery.",
  },
  {
    icon: <Shield size={32} className="text-nexlead-green" />,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensure consistent excellence.",
  },
  {
    icon: <Target size={32} className="text-nexlead-green" />,
    title: "Scalable Solutions",
    description:
      "Easily scale your operations up or down based on business needs.",
  },
  {
    icon: <Zap size={32} className="text-nexlead-green" />,
    title: "Fast Implementation",
    description:
      "Quick setup and integration with your existing business processes.",
  },
  {
    icon: <Settings size={32} className="text-primary-yellow" />,
    title: "Fully Managed Service",
    description:
      "From hiring and training to performance monitoring, we handle it all so you can focus on growth.",
  }
  
  
];

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`card animate-on-scroll ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-text-light">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="benefits" className="py-16 md:py-24 bg-primary-bg">
      <div className="container-custom">
        <div
          ref={ref}
          className={`text-center mb-16 animate-on-scroll ${
            inView ? "is-visible" : ""
          }`}
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the advantages of partnering with a leading BPO service
            provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index + 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Start Scaling Your Business Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
