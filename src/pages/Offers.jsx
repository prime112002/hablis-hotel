import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const offers = [
  {
    id: "discount",
    name: "20% Discount",
    description: "Get a 20% discount on your next stay.",
  },
  {
    id: "exclusive",
    name: "Exclusive Member Offer",
    description: "Special deals for our loyal members.",
  },
];

const Offers = () => {
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
          <h1 className="text-3xl font-serif text-hotel-primary text-center"></h1>
          <p className="text-center text-gray-600 mt-2"></p>
        </div>
      </div>

      {/* Offer Navigation */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          {offers.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-hotel-primary hover:text-hotel-secondary font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {offers.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 transform transition-all duration-700`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="md:w-1/2 order-2">
                <div className="relative overflow-hidden rounded-lg bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-xl text-white font-semibold">
                    Offer Image
                  </span>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-serif text-hotel-primary mb-4">
                  {item.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
