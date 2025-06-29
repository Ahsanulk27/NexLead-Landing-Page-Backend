import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    price: "$1,250/mo",
    description: "Launch your outbound motion with the essential pieces in place.",
    features: [
      "1 campaign (cold calling or digital)",
      "1 SDR + 1 VA",
      "Basic CRM setup",
      "Monthly reporting",
      "30-min onboarding call"
    ],
    highlight: false,
  },
  {
    name: "Growth Engine",
    price: "$2,750/mo",
    description: "A full growth system — people, systems, and reporting.",
    features: [
      "Cold calling + digital outreach",
      "Website + brand refresh",
      "CRM + SOPs + automation",
      "Operator mentorship",
      "Weekly reporting & insights"
    ],
    highlight: true,
  },
  {
    name: "Elite Partner",
    price: "Custom Pricing",
    description: "Full growth department + strategic partnership.",
    features: [
      "Dedicated SDRs, VAs, and strategist",
      "Graphics + content creation",
      "Custom dashboards & portals",
      "Private Slack + VIP support",
      "Quarterly strategy summits"
    ],
    highlight: false,
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-primary-bg relative">
      <div className="container-custom text-center mb-16">
        <h2 className="section-title">Transparent, Scalable Pricing</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          All packages are fully managed — so you can stay in founder mode while we run your outbound engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`relative rounded-xl overflow-hidden shadow-xl p-8 bg-button-dark text-text-light border transition-transform duration-300 ${
              plan.highlight
                ? "border-primary-yellow scale-105 z-10"
                : "border-gray-800"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 text-primary-yellow">{plan.name}</h3>
            <p className="text-xl font-semibold mb-4">{plan.price}</p>
            <p className="text-text-muted mb-6">{plan.description}</p>
            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm text-text-muted">
                  <CheckCircle className="text-primary-yellow mr-2 mt-1" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block w-full text-center font-bold py-3 rounded-md transition-colors ${
                plan.highlight
                  ? "bg-primary-yellow text-accent-contrast hover:bg-opacity-90"
                  : "bg-gray-800 text-text-light hover:bg-gray-700"
              }`}
            >
              {plan.highlight ? "Get Started" : "Talk to Us"}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
