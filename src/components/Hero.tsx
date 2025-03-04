import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              Business Process <span className="text-nexlead-green">Outsourcing</span> That Drives Results
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Outsource smart, scale faster. Let our expert team handle your business processes while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="btn-primary flex items-center justify-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Business professionals in a meeting" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-nexlead-black to-transparent p-6">
                <p className="text-white font-semibold text-lg">Trusted by 100+ businesses worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero