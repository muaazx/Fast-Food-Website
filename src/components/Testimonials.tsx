import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  // Define sliding motion variables for carousel transition
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0
    })
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] bg-[#FF2D20]/3 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Quote floating icon */}
        <div className="absolute top-10 left-6 sm:left-12 opacity-5 pointer-events-none">
          <Quote className="w-48 h-48 text-[#FF2D20] rotate-180" />
        </div>

        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-[#FF2D20] font-montserrat text-sm font-extrabold tracking-widest uppercase mb-3">
            Real Reviews
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl tracking-wide text-white">
            WORDS FROM OUR <span className="text-[#FFB800]">FIRE SQUAD</span>
          </h2>
        </div>

        {/* Slider Card Container */}
        <div className="relative min-h-[360px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative"
            >
              {/* Circular Avatar */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#FF2D20]/20 rounded-full blur-md scale-105 pointer-events-none"></div>
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-3 border-[#FF2D20] relative z-10"
                />
              </div>

              {/* Review Text details */}
              <div className="flex-grow text-center md:text-left">
                {/* Gold Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: currentTestimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFB800] fill-[#FFB800]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="font-inter text-[#F5F5F5]/90 text-base sm:text-lg italic leading-relaxed mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Reviewer Meta Details */}
                <div>
                  <cite className="not-italic font-montserrat text-base font-extrabold text-white block">
                    {currentTestimonial.name}
                  </cite>
                  <span className="font-inter text-xs text-[#FF2D20] font-semibold tracking-wider uppercase">
                    {currentTestimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 p-3 bg-[#1A1A1A] hover:bg-[#FF2D20] border border-white/5 hover:border-[#FF2D20] text-white hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 p-3 bg-[#1A1A1A] hover:bg-[#FF2D20] border border-white/5 hover:border-[#FF2D20] text-white hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel manual indicators / dots */}
        <div className="flex justify-center items-center space-x-2.5 mt-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index 
                  ? 'w-8 bg-[#FF2D20] shadow-[0_0_10px_rgba(255,45,32,0.5)]' 
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
