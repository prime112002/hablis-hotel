"use client";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import HotelAmenities from "@/components/common/HotelAmenities";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useInView } from "react-intersection-observer";

const banquetTypes = [
  {
    id: "grand",
    name: "Grand Banquet Hall",
    description:
      "A luxurious banquet hall perfect for weddings, corporate events, and large gatherings, featuring state-of-the-art facilities.",
    image: "/uploads/pexels-pixabay-265947.jpg",
  },
  {
    id: "royal",
    name: "Royal Banquet Hall",
    description:
      "An elegant space designed for grand celebrations, offering premium services and a sophisticated ambiance.",
    image: "/uploads/pexels-pixabay-265947.jpg",
  },
  {
    id: "classic",
    name: "Classic Banquet Hall",
    description:
      "A versatile banquet hall suitable for intimate gatherings, family celebrations, and business events.",
    image: "/uploads/pexels-pixabay-265947.jpg",
  },
];

const Banquets = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full bg-gray-100 py-8">
        <div className="container mx-auto px-4">
        <div className="text-4xl font-bold font-serif text-hotel-primary text-center uppercase tracking-wide"></div>
        <div className="text-lg text-gray-600 text-center mt-4 leading-relaxed"></div>
        </div>
      </div>

      {/* Banquet Navigation - Below the Hero Section */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          {banquetTypes.map((banquet) => (
            <button
              key={banquet.id}
              onClick={() => scrollToSection(banquet.id)}
              className="text-hotel-primary hover:text-hotel-secondary font-medium transition-colors"
            >
              {banquet.name}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-grow">
        <section ref={ref} className="py-16">
          <div className="container mx-auto px-4">
            {banquetTypes.map((banquet, index) => (
              <div
                key={banquet.id}
                id={banquet.id}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 transform transition-all duration-700 ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:w-1/2 order-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={banquet.image || "/placeholder.svg"}
                      alt={banquet.name}
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-serif text-hotel-primary mb-4">{banquet.name}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{banquet.description}</p>
                  <Link
                    to={`/banquets/${banquet.id}`}
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

export default Banquets;
