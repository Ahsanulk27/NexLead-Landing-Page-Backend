import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "NexLead has transformed our sales process. Their outbound calling team consistently delivers high-quality leads, and their professionalism is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Michael Chen",
    role: "Sales Director, GrowthCo",
    content:
      "The lead generation service has been a game-changer for our business. We've seen a 40% increase in qualified leads since partnering with NexLead.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Innovate Solutions",
    content:
      "Their 24/7 support team has been instrumental in our expansion. The quality of service and attention to detail is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}> = ({ name, role, content, rating, image }) => {
  return (
    <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-button-dark">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={24}
            className="text-primary-yellow fill-primary-yellow"
          />
        ))}
      </div>
      <p className="text-xl md:text-2xl text-text-light mb-8 italic">
        "{content}"
      </p>
      <div>
        <h4 className="text-lg font-bold text-text-light">{name}</h4>
        <p className="text-text-muted">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary-bg">
      <div className="container-custom">
        <div
          ref={ref}
          className={`text-center mb-16 animate-on-scroll ${
            inView ? "is-visible" : ""
          }`}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="relative">
          <div
            className={`transition-opacity duration-500 animate-on-scroll ${
              inView ? "is-visible" : ""
            }`}
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-button-dark text-text-light hover:text-primary-yellow transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-button-dark text-text-light hover:text-primary-yellow transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary-yellow"
                    : "bg-button-dark hover:bg-primary-yellow"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
