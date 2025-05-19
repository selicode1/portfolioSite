import { useState, useRef, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2, triggerOnce: true });
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView]);
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black  overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-gray-500 dark:text-gray-400 font-semibold tracking-widest mb-3 uppercase" style={{ letterSpacing: '0.18em' }}>
            WHAT CLIENTS SAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400  mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className={`bg-white dark:bg-gray-950  border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg p-8 sm:p-10 transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="mb-6 text-white dark:text-white">
                      <Quote className="w-12 h-12 mx-auto opacity-40" />
                    </div>
                    <blockquote className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-200 dark:border-purple-900">
                        <img 
                          src={testimonial.avatarUrl} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.title}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 p-2 rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 p-2 rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400  w-6'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}