import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useInView } from "react-intersection-observer";

const dayusePackages = [
  {
    id: "morning",
    name: "Morning Package",
    description:
      "Enjoy a refreshing morning stay with breakfast and access to amenities.",
    image: "/uploads/pexels-pixabay-210604.jpg",
  },
  {
    id: "afternoon",
    name: "Afternoon Package",
    description:
      "Relax in the afternoon with a comfortable room and lunch options.",
    image: "/uploads/pexels-pixabay-210604.jpg",
  },
];

const Dayuse = () => {
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

      <div className="w-full bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif text-hotel-primary text-center"></h1>
          <p className="text-center text-gray-600 mt-2"></p>
        </div>
      </div>

      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          {dayusePackages.map((item) => (
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

      <main className="flex-grow">
        <section ref={ref} className="py-16">
          <div className="container mx-auto px-4">
            {dayusePackages.map((item, index) => (
              <div
                key={item.id}
                id={item.id}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 transform transition-all duration-700 ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:w-1/2 order-2">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dayuse;
