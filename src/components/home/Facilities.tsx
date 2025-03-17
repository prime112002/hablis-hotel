
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facilities = [
  {
    title: "Packed Breakfast For Early Check-Out Guests",
    description: "At Hablis, we take care of our guests. For those who have an early schedule, our chefs take care that a healthy and sumptuous breakfast is packed for the way.",
    image: "/uploads/pexels-mchodakowski-693895.jpg"
  },
  {
    title: "Restaurants and Pubs",
    description: "Three dining options await guests visiting Hablis Hotel Chennai. THE SPICE serves up exquisite Indian and Asian delicacies, THE HEARTH is our 24-hour cafe, and the Irish-themed THE MOON AND SIX PENCE is our signature bar in Chennai.",
    image: "/uploads/pexels-pixabay-258154.jpg"
  },
  {
    title: "Banquets and Conference Halls",
    description: "The Hablis, being a business hotel in Chennai, offers guests with 5 exquisite conference and banquet halls that can host all categories of events.",
    image: "/uploads/pexels-amar-saleem-15661-70441.jpg"
  },
  {
    title: "Premium Fitness Center",
    description: "Stay fit during your trip with our fully-equipped fitness center featuring modern exercise equipment and professional trainers available upon request.",
    image: "/uploads/a6baa24a-b5fa-4af2-88ae-62a74f5c471a.png"
  }
];

const Facilities = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideTimeout = useRef<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (slideTimeout.current) {
      clearTimeout(slideTimeout.current);
    }
    
    slideTimeout.current = window.setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (slideTimeout.current) {
        clearTimeout(slideTimeout.current);
      }
    };
  }, [activeSlide]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`section-title transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          FACILITIES AT THE HABLIS BUSINESS HOTEL IN CHENNAI
        </h2>
        
        <p className={`text-center max-w-3xl mx-auto mb-12 text-gray-700 transition-all duration-700 delay-200 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Our business hotel in Guindy is home to a host of facilities. The hotel provides other facilities that include an elegant lounge, complimentary baby food, free airport shuttle (Monday to Thursday), a fitness centre, banquets and conference halls, and long-stay rooms.
        </p>
        
        <div 
          ref={sliderRef}
          className={`relative max-w-5xl mx-auto transition-all duration-700 delay-400 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {facilities.map((facility, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-xl md:text-2xl font-serif mb-2">{facility.title}</h3>
                      <p className="text-sm md:text-base text-white/90 max-w-2xl">{facility.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 p-2 rounded-full text-white transition-colors"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 p-2 rounded-full text-white transition-colors"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {facilities.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-hotel-primary w-6' : 'bg-gray-300'
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
