
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const locations = [
  { name: "Olympia Technology Park", distance: "1.3 km", time: "3 mins" },
  { name: "Tamarai Tech Park", distance: "1 km", time: "3 mins" },
  { name: "Kochar Building", distance: "4 km", time: "17 mins" },
  { name: "HTC Towers", distance: "0.1 km", time: "1 min" },
  { name: "Chennai Trade Centre", distance: "2.5 km", time: "5 mins" },
  { name: "DLF Cybercity Chennai", distance: "4.9 km", time: "20 mins" },
  { name: "IITM Institute Hospital", distance: "10.2 km", time: "30 mins" },
  { name: "Adyar Cancer Institute", distance: "5.5 km", time: "18 mins" },
  { name: "MGM Healthcare", distance: "8.8 km", time: "25 mins" },
  { name: "Indian Institute Of Technology, Chennai", distance: "9.8 km", time: "30 mins" },
  { name: "IIT Madras Research Centre", distance: "9.1 km", time: "25 mins" },
  { name: "College of Engineering, Guindy", distance: "5.2 km", time: "18 mins" }
];

const NearbyLocations = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`section-title transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          POPULAR LOCATIONS NEAR OUR CHENNAI HOTEL
        </h2>
        
        <p className={`text-center max-w-3xl mx-auto mb-12 text-gray-700 transition-all duration-700 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Several IT parks, hospitals and colleges are located close to Hablis Hotel Chennai, ensuring you remain unperturbed about travelling to your destination during your stay with us. If you are a shopaholic, enjoy a range of accessories, clothing, shoes and much more at Phoenix Marketcity, which is just 0.6 km away (14 mins). Here is a list of hubs nearby and the distance from our hotel.
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mr-3 text-hotel-primary mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium text-hotel-dark">{location.name}</h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">{location.distance}</span> / {location.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-10 p-6 bg-gray-50 rounded-lg shadow-inner text-center transition-all duration-700 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-700">
            Getting to Hablis by road is a convenience that is seldom provided by business hotels in Chennai. Offering excellent connectivity to highways such as The Grand Southern Trunk Road - the road which connects Chennai and Trichy, our hotel is at the major entry point to the city, making sure that our signature hospitality greets you at the very doorstep!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NearbyLocations;
