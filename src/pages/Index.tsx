
import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Accommodation from '@/components/home/Accommodation';
import Facilities from '@/components/home/Facilities';
import NearbyLocations from '@/components/home/NearbyLocations';
import Reviews from '@/components/home/Reviews';
import HotelAmenities from '@/components/common/HotelAmenities';
import History from '@/components/home/History';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Special Offers Cards */}
              <div className="bg-gradient-to-br from-hotel-primary to-hotel-accent text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3">
                    LIMITED TIME
                  </span>
                  <h3 className="text-2xl font-serif mb-2">30% Off on Weekend Stays</h3>
                  <p className="mb-4 text-white/80">Enjoy a relaxing weekend getaway with our special discount. Book now for the best rates.</p>
                  <a 
                    href="/offers" 
                    className="inline-block px-4 py-2 bg-white text-hotel-primary rounded hover:bg-white/90 transition-colors"
                  >
                    View Offer
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-hotel-accent to-hotel-dark text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3">
                    EXECUTIVE PACKAGE
                  </span>
                  <h3 className="text-2xl font-serif mb-2">Business Travel Made Easy</h3>
                  <p className="mb-4 text-white/80">Complimentary airport transfers, breakfast, and high-speed internet for business travelers.</p>
                  <a 
                    href="/offers" 
                    className="inline-block px-4 py-2 bg-white text-hotel-accent rounded hover:bg-white/90 transition-colors"
                  >
                    View Offer
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-hotel-secondary to-amber-700 text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3">
                    EARLY BIRD
                  </span>
                  <h3 className="text-2xl font-serif mb-2">40% Off on Advance Bookings</h3>
                  <p className="mb-4 text-white/80">Plan ahead and save big! Book 30 days in advance and get 40% off on your stay.</p>
                  <a 
                    href="/offers" 
                    className="inline-block px-4 py-2 bg-white text-amber-700 rounded hover:bg-white/90 transition-colors"
                  >
                    View Offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <History />
        <Accommodation />
        <Facilities />
        <NearbyLocations />
        <Reviews />
        <HotelAmenities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
