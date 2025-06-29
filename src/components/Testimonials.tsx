import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    name: "David Wilson",
    role: "Marketing Director, BrandUp",
    content:
      "The analytics dashboard provided by NexLead gives us incredible insights into our lead conversion rates. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center px-4 md:px-8 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-button-dark shadow-lg"
      >
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
          >
            <Star
              size={24}
              className="text-primary-yellow fill-primary-yellow"
            />
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-text-light mb-8 italic"
      >
        "{content}"
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="text-lg font-bold text-text-light">{name}</h4>
        <p className="text-text-muted">{role}</p>
      </motion.div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [autoPlay, setAutoPlay] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  // Reset auto-play when user interacts
  useEffect(() => {
    if (!autoPlay) {
      const timer = setTimeout(() => setAutoPlay(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [autoPlay]);

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </motion.div>

        <div className="relative min-h-[400px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-12 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-button-dark text-text-light hover:text-primary-yellow transition-colors shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-button-dark text-text-light hover:text-primary-yellow transition-colors shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary-yellow scale-125"
                  : "bg-button-dark hover:bg-primary-yellow"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;