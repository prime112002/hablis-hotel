import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HotelAmenities from '@/components/common/HotelAmenities';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useInView } from 'react-intersection-observer';

const roomTypes = [
  {
    id: "normal",
    name: "Normal Room",
    description: "Our comfortable standard rooms provide all the essentials for a relaxing stay, featuring modern amenities and elegant design.",
    image: "/uploads/pexels-pixabay-210604.jpg"
  },
  {
    id: "standard",
    name: "Standard Room",
    description: "Enjoy additional space and premium amenities in our deluxe rooms, perfect for both business and leisure travelers seeking extra comfort.",
    image: "/uploads/pexels-pixabay-271672.jpg"
  },
  {
    id: "suite",
    name: "Suite Room",
    description: "Experience luxury in our spacious suites featuring separate living areas, premium furnishings, and exclusive amenities for the ultimate stay.",
    image: "/uploads/pexels-pixabay-271672.jpg"
  }
];

const Rooms = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-white shadow-md sticky top-0 z-10 py-4">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          {roomTypes.map((room) => (
            <button
              key={room.id}
              onClick={() => scrollToSection(room.id)}
              className="text-hotel-primary hover:text-hotel-secondary font-medium transition-colors"
            >
              {room.name}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-grow">
        <section ref={ref} className="py-16">
          <div className="container mx-auto px-4">
            {roomTypes.map((room, index) => (
              <div 
                key={room.id}
                id={room.id}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 transform transition-all duration-700 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:w-1/2 order-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-serif text-hotel-primary mb-4">{room.name}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  <Link 
                    to={`/rooms/${room.id}`}
                    className="inline-flex items-center px-5 py-2 bg-hotel-primary text-white rounded hover:bg-hotel-primary/90 transition-colors"
                  >
                    More Info
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <HotelAmenities />
      </main>
      <Footer />
    </div>
  );
};

export default Rooms;
