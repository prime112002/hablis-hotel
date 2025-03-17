
import { useState, useEffect, useRef } from 'react';
import BookingForm from './BookingForm';

const images = [
  '/uploads/pexels-julieaagaard-2096983.jpg',
  '/uploads/pexels-boonkong-boonpeng-442952-1134176.jpg',
  '/uploads/pexels-amar-saleem-15661-70441.jpg',
  '/uploads/pexels-pixabay-258154.jpg'
];

const captions = [
  {
    title: "Grand Rooms for a Luxurious Stay",
    subtitle: "Experience comfort and elegance in the heart of Chennai"
  },
  {
    title: "Exquisite Dining Experiences",
    subtitle: "Indulge in culinary delights at our premium restaurants"
  },
  {
    title: "Banquet Halls for Special Occasions",
    subtitle: "Create unforgettable moments in our elegant venues"
  },
  {
    title: "Day Use Rooms for Business Travelers",
    subtitle: "Perfect for short stays and business meetings"
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  
  const changeImage = () => {
    setIsTransitioning(true);
    setNextImageIndex((currentImageIndex + 1) % images.length);
    
    setTimeout(() => {
      setCurrentImageIndex(nextImageIndex);
      setIsTransitioning(false);
    }, 1000);
  };
  
  useEffect(() => {
    timeoutRef.current = window.setTimeout(changeImage, 5000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImageIndex, nextImageIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentImageIndex
              ? 'opacity-100 z-10'
              : index === nextImageIndex && isTransitioning
              ? 'opacity-0 z-20'
              : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-20"></div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              setNextImageIndex(index);
              changeImage();
            }}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Caption */}
      <div className="absolute bottom-20 left-0 w-full text-center text-white z-30 px-4">
        <div className="container mx-auto">
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 font-light">
              {captions[currentImageIndex].title}
            </h1>
            <p className="text-xl md:text-2xl font-light">
              {captions[currentImageIndex].subtitle}
            </p>
          </div>
        </div>
      </div>
      
      {/* Booking Form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-4xl px-4">
        <BookingForm />
      </div>
      
      {/* Hotel Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-hotel-dark/80 backdrop-blur-sm text-white py-4 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-serif">Hablis Hotel Chennai</h3>
              <p className="text-sm text-white/80">Luxury accommodations in Guindy, Chennai</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/914444023555" className="flex items-center hover:text-hotel-secondary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="mr-2">
                  <path d="M22.125 7.5c0 4.142-4.059 7.5-9.062 7.5a10.08 10.08 0 0 1-3.015-.455L4.5 16.5l1.955-3.955c-.604-.97-.955-2.095-.955-3.295 0-4.142 4.059-7.5 9.062-7.5s9.063 3.358 9.063 7.5z" />
                </svg>
                +91 44 4023 5555
              </a>
              <a href="mailto:reservations@hablis.com" className="flex items-center hover:text-hotel-secondary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                reservations@hablis.com
              </a>
              <a href="tel:+914422234000" className="flex items-center hover:text-hotel-secondary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="mr-2">
                  <path d="M16 2v4c0 1.1-.9 2-2 2h-4v10c0 1.1-.9 2-2 2H4" />
                  <path d="M15 22h5c1.1 0 2-.9 2-2v-5" />
                  <path d="M22 15v-2c0-8.5-7.5-11-7.5-11H13" />
                  <path d="M9 10c0-4.5-4-8-4-8H4" />
                </svg>
                +91 44 2223 4000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
