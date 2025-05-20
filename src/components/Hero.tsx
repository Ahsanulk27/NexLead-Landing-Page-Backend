import React from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen flex items-center bg-primary-bg pt-20">
      <div className="container-custom sm:px-1 lg:px-1">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div
              ref={ref}
              className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text-light">
                Business Process{" "}
                <span className="text-primary-yellow">Outsourcing</span> That
                Drives Results
              </h1>
              <p className="text-lg md:text-xl text-text-muted mb-8">
                Outsource smart, scale faster. Let our expert team handle your
                business processes while you focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="btn-primary flex items-center justify-center"
                >
                  Get Started <ArrowRight size={18} className="ml-2" />
                </a>
                <a
                  href="#services"
                  className="btn-secondary flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div
              ref={ref}
              className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Business professionals in a meeting"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-button-dark to-transparent p-6">
                  <p className="text-text-light font-semibold text-lg">
                    Trusted by 100+ businesses worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
