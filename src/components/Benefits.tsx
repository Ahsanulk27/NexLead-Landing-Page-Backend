import React from 'react'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, DollarSign, Clock, Shield, Target, Zap } from 'lucide-react'

const benefits = [
  {
    icon: <TrendingUp size={32} className="text-nexlead-green" />,
    title: "Increased Productivity",
    description: "Focus on your core business while we handle time-consuming processes."
  },
  {
    icon: <DollarSign size={32} className="text-nexlead-green" />,
    title: "Cost Reduction",
    description: "Save up to 70% on operational costs compared to in-house teams."
  },
  {
    icon: <Clock size={32} className="text-nexlead-green" />,
    title: "24/7 Operations",
    description: "Round-the-clock service ensures you never miss an opportunity."
  },
  {
    icon: <Shield size={32} className="text-nexlead-green" />,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure consistent excellence."
  },
  {
    icon: <Target size={32} className="text-nexlead-green" />,
    title: "Scalable Solutions",
    description: "Easily scale your operations up or down based on business needs."
  },
  {
    icon: <Zap size={32} className="text-nexlead-green" />,
    title: "Fast Implementation",
    description: "Quick setup and integration with your existing business processes."
  }
]

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-16 animate-on-scroll ${inView ? 'is-visible' : ''}`}
        >
          <h2 className="section-title">Why Choose NexLead?</h2>
          <p className="section-subtitle">
            Partner with us to experience these transformative benefits for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            })
            
            return (
              <div 
                key={index}
                ref={ref}
                className={`flex items-start p-6 bg-white rounded-lg shadow-md animate-on-scroll ${inView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mr-4 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Start Scaling Your Business Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits