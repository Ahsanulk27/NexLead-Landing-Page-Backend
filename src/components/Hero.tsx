import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
// @ts-ignore
import * as THREE from "three";
// @ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Vanta.js background setup
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const initializeVanta = () => {
      if (!vantaEffect.current && vantaRef.current) {
        vantaEffect.current = GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfacc15,
          backgroundColor: 0x35020a,
          size: 1.1,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 18.0,
        });
      }
    };

    // Delay Vanta until after DOM settles
    timeoutId = setTimeout(initializeVanta, 500); // Try 300–800ms if needed

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Vanta.js Animated Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0 bg-primary-bg"
        style={{ pointerEvents: "none" }}
      />
      <div className="container-custom sm:px-1 lg:px-1 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div
              ref={ref}
              className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text-light">
                Scale on <span className="text-primary-yellow">Autopilot</span>{" "}
                with a Fully Managed Growth Infrastructure
              </h1>

              <p className="text-lg md:text-xl text-text-muted mb-8">
                From backend operations to outbound sales, we design, build, and
                operate the engine that drives your business forward — without
                you lifting a finger.
              </p>
              <p className="text-md md:text-lg text-primary-yellow font-medium mb-8">
                Powered by a human + AI hybrid model — using machine learning to
                accelerate your business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact" // you can update this to a Calendly or actual form section
                  className="btn-primary flex items-center justify-center"
                >
                  Book a Private Strategy Call{" "}
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a
                  href="#benefits"
                  className="btn-secondary flex items-center justify-center"
                >
                  See What You Get
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <div
              ref={ref}
              className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                {/* <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Growth team in action"
                  className="w-full h-auto"
                /> */}
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
