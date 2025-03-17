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
      <div className="bg-white shadow-md sticky top-0 z-10 py-4">
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
          {offers.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="mb-16 p-8 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition"
              onClick={() => scrollToSection(item.id)}
            >
              <h2 className="text-2xl font-serif text-hotel-primary mb-4">
                {item.name}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
