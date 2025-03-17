
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10 flex items-center"
          aria-label="Hablis Hotel - Go to homepage"
        >
          <div className="relative w-12 h-12 bg-white/90 flex items-center justify-center shadow-sm">
            <span className="text-2xl font-serif font-bold text-hotel-primary">H</span>
          </div>
          <span className="ml-2 text-xl font-serif font-medium uppercase tracking-wider">
            Hablis
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden relative z-10 text-hotel-dark hover:text-hotel-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/rooms" className="nav-link">Rooms</Link>
          <Link to="/banquets" className="nav-link">Banquets</Link>
          <Link to="/dining" className="nav-link">Dining</Link>
          <Link to="/day-use" className="nav-link">Day Use</Link>
          <Link to="/offers" className="nav-link">Offers</Link>
          <Link to="/manage-booking" className="nav-link">Manage Booking</Link>
          <Link to="/booking" className="btn-book-now ml-2">Book Now</Link>
        </nav>
        
        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-white z-[5] transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            <Link to="/rooms" className="text-xl font-medium text-hotel-dark hover:text-hotel-primary transition-colors">Rooms</Link>
            <Link to="/banquets" className="text-xl font-medium text-hotel-dark hover:text-hotel-primary transition-colors">Banquets</Link>
            <Link to="/dining" className="text-xl font-medium text-hotel-dark hover:text-hotel-primary transition-colors">Dining</Link>
            <Link to="/day-use" className="text-xl font-medium text-hotel-dark hover:text-hotel-primary transition-colors">Day Use</Link>
            <Link to="/offers" className="text-xl font-medium text-hotel-dark hover:text-hotel-primary transition-colors">Offers</Link>
            <Link to="/manage-booking" className="text-xl font-medium text-hotel-dark hover:text-hotel-primary transition-colors">Manage Booking</Link>
            <Link to="/booking" className="btn-book-now w-48 mt-4">Book Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
