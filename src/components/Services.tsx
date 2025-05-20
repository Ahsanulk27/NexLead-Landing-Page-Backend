import React from "react";
import { useInView } from "react-intersection-observer";
import { PhoneCall, Users, Clock, BarChart } from "lucide-react";

const services = [
  {
    icon: <PhoneCall size={40} className="text-primary-yellow" />,
    title: "Outbound Calling",
    description:
      "Professional outbound calling services to generate leads, qualify prospects, and set appointments.",
  },
  {
    icon: <Users size={40} className="text-primary-yellow" />,
    title: "Lead Generation",
    description:
      "Targeted lead generation campaigns to fill your sales pipeline with qualified prospects.",
  },
  {
    icon: <Clock size={40} className="text-primary-yellow" />,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to ensure your clients always receive timely assistance.",
  },
  {
    icon: <BarChart size={40} className="text-primary-yellow" />,
    title: "Sales Analytics",
    description:
      "Comprehensive sales analytics and reporting to track performance and optimize strategies.",
  },
];

const ServiceCard: React.FC<{
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

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-16 md:py-24 bg-primary-bg">
      <div className="container-custom">
        <div
          ref={ref}
          className={`text-center mb-16 animate-on-scroll ${
            inView ? "is-visible" : ""
          }`}
        >
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            We provide comprehensive business process outsourcing solutions
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index + 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-text-light">
            Choose Your Package
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bronze Package */}
            <div className="bg-button-dark text-text-light rounded-lg shadow-lg overflow-hidden">
              <div className="bg-black bg-opacity-20 py-4">
                <h4 className="text-xl font-bold">BRONZE PACKAGE</h4>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users size={24} className="mr-2 text-primary-yellow" />
                  <p className="text-xl font-semibold">2 CALLERS</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Clock size={24} className="mr-2 text-primary-yellow" />
                  <p className="text-xl font-semibold">5 HRS/DAY · MON–FRI</p>
                </div>
                <ul className="text-sm text-left mb-6 list-disc list-inside space-y-2 text-text-muted">
                  <li>Fully managed by our internal team</li>
                  <li>Consistent daily outreach</li>
                  <li>Great for testing or dependable support</li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full bg-primary-yellow text-accent-contrast font-bold py-3 rounded-md text-center hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Silver Package */}
            <div className="bg-button-dark text-text-light rounded-lg shadow-lg overflow-hidden">
              <div className="bg-black bg-opacity-20 py-4">
                <h4 className="text-xl font-bold">SILVER PACKAGE</h4>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users size={24} className="mr-2 text-primary-yellow" />
                  <p className="text-xl font-semibold">2 CALLERS</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Clock size={24} className="mr-2 text-primary-yellow" />
                  <p className="text-xl font-semibold">5 HRS/DAY · MON–FRI</p>
                </div>
                <ul className="text-sm text-left mb-6 list-disc list-inside space-y-2 text-text-muted">
                  <li>500 free leads/month</li>
                  <li>Dialing software included</li>
                  <li>Tech setup managed for you</li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full bg-primary-yellow text-accent-contrast font-bold py-3 rounded-md text-center hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Gold Package */}
            <div className="bg-button-dark text-text-light rounded-lg shadow-lg overflow-hidden">
              <div className="bg-black bg-opacity-20 py-4">
                <h4 className="text-xl font-bold">GOLD PACKAGE</h4>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users size={24} className="mr-2 text-primary-yellow" />
                  <p className="text-xl font-semibold">2 CALLERS + 1 VA</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Clock size={24} className="mr-2 text-primary-yellow" />
                  <p className="text-xl font-semibold">5 HRS/DAY · MON–FRI</p>
                </div>
                <ul className="text-sm text-left mb-6 list-disc list-inside space-y-2 text-text-muted">
                  <li>Everything in Silver package</li>
                  <li>Dedicated VA for follow-ups & CRM</li>
                  <li>Priority support & lead nurturing</li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full bg-primary-yellow text-accent-contrast font-bold py-3 rounded-md text-center hover:bg-opacity-90 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
