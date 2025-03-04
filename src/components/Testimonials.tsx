import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "NexLead transformed our lead generation process. Their team is professional, efficient, and delivers results consistently. Our sales have increased by 45% since we started working with them."
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthFusion",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "The quality of leads we receive from NexLead is exceptional. Their team understands our business and targets the right prospects. I highly recommend their services to any business looking to scale."
  },
  {
    name: "Jessica Williams",
    position: "Sales Manager, Elevate Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    quote: "Working with NexLead has been a game-changer for our sales team. Their outbound calling services have helped us connect with high-value prospects we couldn't reach before. The ROI has been incredible."
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-16 animate-on-scroll ${inView ? 'is-visible' : ''}`}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about working with NexLead.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials