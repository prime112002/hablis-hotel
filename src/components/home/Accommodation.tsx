
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from 'lucide-react';

const accommodationImages = [
  '/uploads/pexels-gustavorodrigues-1755288.jpg',
  '/uploads/pexels-pixabay-210604.jpg',
  '/uploads/pexels-pixabay-271672.jpg',
  '/uploads/pexels-pixabay-271672.jpg',
  '/uploads/pexels-mchodakowski-693895.jpg',
  '/uploads/pexels-amar-saleem-15661-70441.jpg'
];

const Accommodation = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`section-title transform transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          ACCOMMODATION AT OUR HOTEL IN CHENNAI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accommodationImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-md transform transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={image} 
                  alt={`Accommodation ${index + 1}`}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-serif text-xl mb-2">Luxurious Stay</h3>
                  <Link to="/rooms" className="inline-flex items-center text-white hover:text-hotel-secondary transition-colors">
                    <span>Explore Rooms</span>
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transform transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8">
            Hablis is a business hotel in Chennai that offers two categories of exquisitely designed accommodations, namely HABLIS MASTER and HABLIS SUITE. Each of these rooms & suites is built spaciously, making it one of the best places to stay in Chennai for both business and leisure travellers. Each and every room has been designed intricately to cater to both short and long stay travellers. The room sizes vary between 330 sq. ft. to 625 sq. ft. and have sufficient storage facilities.
          </p>
          <Link 
            to="/rooms" 
            className="inline-flex items-center px-6 py-3 bg-hotel-primary text-white rounded hover:bg-hotel-primary/90 transition-colors"
          >
            View All Accommodations
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
