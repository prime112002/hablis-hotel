import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HotelAmenities from '@/components/common/HotelAmenities';
import { Banquet } from '@/types';

const banquets: Banquet[] = [
  {
    id: "hall1",
    name: "Grand Ballroom",
    description: "Our largest and most elegant venue, perfect for grand weddings and corporate events.",
    images: ["/uploads/pexels-reneterp-2504913.jpg"],
    capacity: 500,
    area: "10,000 sq ft",
  },
  {
    id: "hall2",
    name: "Executive Conference Room",
    description: "Perfect for business meetings and corporate conferences.",
    images: ["/uploads/pexels-pixabay-265947.jpg"],
    capacity: 100,
    area: "2,000 sq ft",
  },
  {
    id: "hall3",
    name: "Garden Pavilion",
    description: "An open-air venue surrounded by lush gardens.",
    images: ["/uploads/pexels-pixabay-265947.jpg"],
    capacity: 200,
    area: "4,000 sq ft",
  }
];

const Banquets = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-hotel-light py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-8">
              {banquets.map((banquet) => (
                <Link
                  key={banquet.id}
                  to={`/banquets/${banquet.id}`}
                  className="text-hotel-primary hover:text-hotel-secondary font-medium transition-colors"
                  aria-label={`View details for ${banquet.name}`}
                >
                  {banquet.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="relative h-[500px] overflow-hidden rounded-lg mb-8">
              <img 
                src="/uploads/pexels-pixabay-265947.jpg"
                alt="Main Banquet Hall" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-serif text-hotel-primary mb-4">Elegant Banquet Halls</h1>
              <p className="text-gray-700 mb-8">
                Discover our stunning banquet halls perfect for weddings, corporate events, and special occasions.
              </p>
            </div>
          </div>
        </section>

        <section ref={ref} className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif text-center text-hotel-primary mb-12">Our Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {banquets.map((banquet, index) => (
                <div 
                  key={banquet.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={banquet.images[0]} 
                      alt={banquet.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-hotel-primary mb-2">{banquet.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{banquet.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Capacity: {banquet.capacity} guests</span>
                      <Link 
                        to={`/banquets/${banquet.id}`}
                        className="inline-flex items-center px-4 py-2 bg-hotel-primary text-white text-sm rounded hover:bg-hotel-primary/90 transition-colors"
                        aria-label={`View more details for ${banquet.name}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HotelAmenities />
      </main>
      <Footer />
    </div>
  );
};

export default Banquets;
