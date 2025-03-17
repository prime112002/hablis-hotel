
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif mb-4">Hablis Hotel Chennai</h3>
            <p className="flex items-start">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <span>No. 19, Grand Southern Trunk Road, Guindy, Chennai, Tamil Nadu 600032</span>
            </p>
            <p className="flex items-center">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              <a href="mailto:reservations@hablis.com" className="hover:text-hotel-secondary transition-colors">
                reservations@hablis.com
              </a>
            </p>
            <p className="flex items-center">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              <a href="tel:+914444023555" className="hover:text-hotel-secondary transition-colors">
                +91 44 4023 5555
              </a>
            </p>
            <p className="flex items-center">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              <a href="tel:+914422234000" className="hover:text-hotel-secondary transition-colors">
                +91 44 2223 4000
              </a>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="hover:text-hotel-secondary transition-colors py-1">Home</Link>
              <Link to="/rooms" className="hover:text-hotel-secondary transition-colors py-1">Rooms</Link>
              <Link to="/banquets" className="hover:text-hotel-secondary transition-colors py-1">Banquets</Link>
              <Link to="/dining" className="hover:text-hotel-secondary transition-colors py-1">Dining</Link>
              <Link to="/day-use" className="hover:text-hotel-secondary transition-colors py-1">Day Use</Link>
              <Link to="/offers" className="hover:text-hotel-secondary transition-colors py-1">Offers</Link>
              <Link to="/manage-booking" className="hover:text-hotel-secondary transition-colors py-1">Manage Booking</Link>
              <Link to="/booking" className="hover:text-hotel-secondary transition-colors py-1">Book Now</Link>
            </div>
          </div>
          
          {/* Connect with us */}
          <div>
            <h3 className="text-xl font-serif mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-serif mb-4">Get in Touch</h3>
            <Link to="/contact" className="px-6 py-2 border border-white/20 hover:bg-white/10 inline-block transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Bottom links */}
        <div className="pt-8 border-t border-white/10 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          
          <p className="text-center">
            © {new Date().getFullYear()} Hablis Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
