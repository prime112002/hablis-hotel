
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import HotelAmenities from '@/components/common/HotelAmenities';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { RoomType } from '@/types';

const roomDetails = {
  normal: {
    name: "Normal Room",
    description: "Our comfortable standard rooms provide all the essentials for a relaxing stay, featuring modern amenities and elegant design. Each room is equipped with a plush king-sized bed or twin beds, a spacious work desk, and a modern bathroom with premium toiletries. Enjoy the convenience of complimentary high-speed Wi-Fi, a 42-inch smart TV, and individually controlled air conditioning.",
    image: "/uploads/pexels-pixabay-271672.jpg",
    features: [
      "32 sq. m. of space",
      "King-sized or twin beds",
      "Work desk with ergonomic chair",
      "40-inch smart TV",
      "Tea and coffee making facilities",
      "In-room safe",
      "Mini refrigerator"
    ],
    price: 4999
  },
  standard: {
    name: "Standard Room",
    description: "Enjoy additional space and premium amenities in our deluxe rooms, perfect for both business and leisure travelers seeking extra comfort. These rooms feature upgraded furnishings, a cozy seating area, and enhanced bathroom amenities. Wake up refreshed with our premium bedding and enjoy the beautiful city views from your window.",
    image: "/uploads/pexels-pixabay-271672.jpg",
    features: [
      "40 sq. m. of space",
      "Premium king-sized bed",
      "Separate seating area",
      "50-inch smart TV",
      "Nespresso coffee machine",
      "Enhanced bathroom amenities",
      "Bathrobe and slippers",
      "City view"
    ],
    price: 6999
  },
  suite: {
    name: "Suite Room",
    description: "Experience luxury in our spacious suites featuring separate living areas, premium furnishings, and exclusive amenities for the ultimate stay. Our suites offer the perfect blend of sophistication and comfort with a separate bedroom, elegant living room, and upgraded bathroom with a deep-soaking tub. Enjoy exclusive perks like evening turndown service and access to the executive lounge.",
    image: "/uploads/pexels-pixabay-271672.jpg",
    features: [
      "65 sq. m. of space",
      "Separate bedroom with king-sized bed",
      "Spacious living room with sofa",
      "Dining area",
      "55-inch smart TVs in both rooms",
      "Premium bathroom with bathtub",
      "Executive lounge access",
      "Welcome fruit basket",
      "Evening turndown service"
    ],
    price: 9999
  }
};

const roomTypes = ["normal", "standard", "suite"];

const RoomDetail = () => {
  const { roomType } = useParams<{ roomType: string }>();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (roomType && !roomTypes.includes(roomType)) {
      navigate('/rooms', { replace: true });
    }
  }, [roomType, navigate]);

  if (!roomType || !roomDetails[roomType as RoomType]) {
    return null;
  }

  const room = roomDetails[roomType as RoomType];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Room Types Navigation */}
        <div className="bg-hotel-light py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-8">
              {roomTypes.map((type) => (
                <Link
                  key={type}
                  to={`/rooms/${type}`}
                  className={`transition-colors ${
                    roomType === type 
                      ? 'text-hotel-secondary font-semibold' 
                      : 'text-hotel-primary hover:text-hotel-secondary font-medium'
                  }`}
                >
                  {roomDetails[type as RoomType].name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Room Details */}
        <section ref={ref} className="py-16">
          <div className="container mx-auto px-4">
            <div className={`transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="mb-10">
                <div className="relative h-[500px] overflow-hidden rounded-lg mb-8">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="text-3xl font-serif text-hotel-primary mb-6">{room.name}</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-xl font-serif text-hotel-primary mb-4">Description</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {room.description}
                    </p>
                    
                    <h2 className="text-xl font-serif text-hotel-primary mb-4">Room Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <ChevronRight size={16} className="text-hotel-secondary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-hotel-light p-6 rounded-lg h-fit">
                    <h3 className="text-xl font-serif text-hotel-primary mb-4">Room Details</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Room type:</span>
                        <span className="font-medium">{room.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Price per night:</span>
                        <span className="font-medium">₹{room.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Max occupancy:</span>
                        <span className="font-medium">2 Adults, 1 Child</span>
                      </div>
                    </div>
                    <Link 
                      to="/bookings" 
                      className="w-full block text-center py-3 bg-hotel-primary text-white rounded hover:bg-hotel-primary/90 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HotelAmenities />
      </main>
      <Footer />
    </div>
  );
};

export default RoomDetail;
