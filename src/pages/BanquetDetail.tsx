
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Banquet } from '@/types';

// Sample banquet data (would normally come from API)
const banquetsData: Record<string, Banquet> = {
  hall1: {
    id: "hall1",
    name: "Grand Ballroom",
    description: "Our largest and most elegant venue, perfect for grand weddings and corporate events. The Grand Ballroom features crystal chandeliers, a spacious dance floor, and state-of-the-art audiovisual equipment.",
    images: ["/uploads/pexels-pixabay-265947.jpg"],
    capacity: 500,
    area: "10,000 sq ft",
    dimensions: {
      length: "100 ft",
      breadth: "100 ft",
      height: "20 ft"
    },
    layouts: [
      { type: "Theater", capacity: 500 },
      { type: "Classroom", capacity: 300 },
      { type: "Banquet", capacity: 400 },
      { type: "U-Shape", capacity: 150 }
    ]
  },
  hall2: {
    id: "hall2",
    name: "Executive Conference Room",
    description: "Perfect for business meetings and corporate conferences, our Executive Conference Room offers a professional setting with premium furnishings and the latest presentation technology.",
    images: ["/uploads/pexels-pixabay-265947.jpg"],
    area: "2,000 sq ft",
    dimensions: {
      length: "50 ft",
      breadth: "40 ft",
      height: "12 ft"
    },
    layouts: [
      { type: "Boardroom", capacity: 40 },
      { type: "Theater", capacity: 100 },
      { type: "Classroom", capacity: 60 },
      { type: "U-Shape", capacity: 35 }
    ]
  },
  hall3: {
    id: "hall3",
    name: "Garden Pavilion",
    description: "An open-air venue surrounded by lush gardens, the Garden Pavilion is ideal for receptions, cocktail parties, and intimate gatherings in a beautiful natural setting.",
    images: ["/uploads/pexels-pixabay-265947.jpg"],
    capacity: 200,
    area: "4,000 sq ft",
    dimensions: {
      length: "80 ft",
      breadth: "50 ft",
      height: "Open air"
    },
    layouts: [
      { type: "Reception", capacity: 200 },
      { type: "Banquet", capacity: 150 },
      { type: "Ceremony", capacity: 180 },
      { type: "Cocktail", capacity: 220 }
    ]
  }
};

const banquetIds = ["hall1", "hall2", "hall3"];

const BanquetDetail = () => {
  const { banquetId } = useParams<{ banquetId: string }>();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (banquetId && !banquetIds.includes(banquetId)) {
      navigate('/banquets', { replace: true });
    }
  }, [banquetId, navigate]);

  if (!banquetId || !banquetsData[banquetId]) {
    return null;
  }

  const banquet = banquetsData[banquetId];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Banquet Navigation */}
        <div className="bg-hotel-light py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-8">
              {banquetIds.map((id) => (
                <Link
                  key={id}
                  to={`/banquets/${id}`}
                  className={`transition-colors ${
                    banquetId === id 
                      ? 'text-hotel-secondary font-semibold' 
                      : 'text-hotel-primary hover:text-hotel-secondary font-medium'
                  }`}
                >
                  {banquetsData[id].name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Banquet Details */}
        <section ref={ref} className="py-16">
          <div className="container mx-auto px-4">
            <div className={`transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-3xl font-serif text-hotel-primary mb-8 text-center">{banquet.name}</h1>
              
              {/* Specifications Table */}
              <div className="max-w-3xl mx-auto mb-12 overflow-hidden rounded-lg shadow-md">
                <table className="w-full">
                  <thead className="bg-hotel-primary text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium">Specification</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">Area</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{banquet.area}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">Dimensions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {banquet.dimensions.length} × {banquet.dimensions.breadth} × {banquet.dimensions.height}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">Max Capacity</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{banquet.capacity} guests</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Layout Options */}
              <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-xl font-serif text-hotel-primary mb-4">Layout Options</h2>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-hotel-light">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-hotel-primary">Layout Type</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-hotel-primary">Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {banquet.layouts.map((layout) => (
                        <tr key={layout.type}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{layout.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{layout.capacity} guests</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Banquet Images */}
              <div className="mb-12">
                <h2 className="text-xl font-serif text-hotel-primary mb-6 text-center">Venue Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {banquet.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative h-64 overflow-hidden rounded-lg shadow-md"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <img 
                        src={image} 
                        alt={`${banquet.name} - View ${index + 1}`} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  to="/bookings" 
                  className="inline-flex items-center px-6 py-3 bg-hotel-primary text-white rounded hover:bg-hotel-primary/90 transition-colors"
                >
                  Book This Venue
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BanquetDetail;
