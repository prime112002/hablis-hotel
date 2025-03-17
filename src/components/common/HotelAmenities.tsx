
import { useInView } from 'react-intersection-observer';
import { 
  BadgePercent, 
  MapPin, 
  Shield, 
  Car, 
  Coffee, 
  Ticket, 
  Building, 
  Wifi,
  Utensils,
  Dumbbell,
  ShowerHead,
  Tv,
  AirVent
} from 'lucide-react';

const amenities = [
  {
    icon: <BadgePercent className="text-hotel-primary" size={20} />,
    title: "Lowest Prices Ever",
    description: ""
  },
  {
    icon: <MapPin className="text-hotel-primary" size={20} />,
    title: "Great Location",
    description: "10 mins From Chennai Airport"
  },
  {
    icon: <Shield className="text-hotel-primary" size={20} />,
    title: "Enjoy Risk Free Booking",
    description: ""
  },
  {
    icon: <Car className="text-hotel-primary" size={20} />,
    title: "Airport transfers / Office transfers / Meals",
    description: "included for eligible rates. Please contact the hotel directly to avail of these inclusions"
  },
  {
    icon: <Coffee className="text-hotel-primary" size={20} />,
    title: "Packed breakfast for early check-out guest",
    description: ""
  },
  {
    icon: <Ticket className="text-hotel-primary" size={20} />,
    title: "Voucher for next Booking",
    description: ""
  },
  {
    icon: <Building className="text-hotel-primary" size={20} />,
    title: "Hotel Near IT Chennai & Chennai Trade Centre",
    description: ""
  },
  {
    icon: <BadgePercent className="text-hotel-primary" size={20} />,
    title: "Up to 15% Off on Food & Beverage",
    description: ""
  }
];

const additionalAmenities = [
  { icon: <Wifi className="text-hotel-primary" size={20} />, title: "Free Wi-Fi" },
  { icon: <Dumbbell className="text-hotel-primary" size={20} />, title: "Fitness Center" },
  { icon: <Utensils className="text-hotel-primary" size={20} />, title: "24/7 Room Service" },
  { icon: <ShowerHead className="text-hotel-primary" size={20} />, title: "Rainfall Shower" },
  { icon: <Tv className="text-hotel-primary" size={20} />, title: "Flat Screen TV" },
  { icon: <AirVent className="text-hotel-primary" size={20} />, title: "Climate Control" }
];

const HotelAmenities = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`section-title transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Hotel Amenities
        </h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-start space-x-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mt-1">{amenity.icon}</div>
              <div>
                <h3 className="font-medium text-hotel-dark">{amenity.title}</h3>
                {amenity.description && <p className="text-gray-600 text-sm">{amenity.description}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <h3 className={`text-xl font-serif text-center mt-12 mb-8 transition-all duration-700 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          In-room Amenities
        </h3>
        
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 delay-600 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {additionalAmenities.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-2"
              style={{ animationDelay: `${(index + 8) * 100}ms` }}
            >
              {amenity.icon}
              <span className="text-sm font-medium text-hotel-dark">{amenity.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelAmenities;
