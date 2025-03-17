
import { useEffect, useRef } from 'react';

const History = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-hotel-light opacity-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <div className="relative">
              <img 
                src="/uploads/pexels-jgathisan0612-1580112.jpg" 
                alt="Hablis Hotel History" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-hotel-primary z-[-1] rounded"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-hotel-secondary z-[-1] rounded"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-sm uppercase tracking-wider text-hotel-primary font-medium mb-2 block">Our Legacy</span>
            <h2 className="section-title !text-left mb-6">The History of Hablis</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2009, Hablis Hotel Chennai started with a vision to create a perfect blend of luxury and comfort for business travelers. Our journey began with the commitment to provide exceptional hospitality services that cater to both the practical and indulgent needs of our guests.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Over the years, we have established ourselves as one of the premier business hotels in Chennai, consistently delivering impeccable service and maintaining the highest standards of quality. Our strategic location near the airport and IT corridor has made us the preferred choice for business travelers, while our luxurious accommodations and facilities have won us numerous accolades.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <div className="mb-4 sm:mb-0">
                <p className="text-3xl font-serif text-hotel-primary font-semibold">15+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div className="mb-4 sm:mb-0">
                <p className="text-3xl font-serif text-hotel-primary font-semibold">50K+</p>
                <p className="text-sm text-gray-600">Happy Guests</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-hotel-primary font-semibold">20+</p>
                <p className="text-sm text-gray-600">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
