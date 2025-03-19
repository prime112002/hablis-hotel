"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useInView } from "react-intersection-observer";

const diningOptions = [
  {
    id: "restaurant",
    name: "Restaurant",
    description:
      "Experience fine dining with a variety of cuisines prepared by top chefs.",
    image: "/uploads/pexels-nastyasensei-66707-331107.jpg",
  },
  {
    id: "cafe",
    name: "Cafe",
    description:
      "Relax and unwind with freshly brewed coffee and light snacks.",
    image: "/uploads/pexels-nastyasensei-66707-331107.jpg",
  },
  {
    id: "bar",
    name: "Bar",
    description:
      "Enjoy signature cocktails and a vibrant nightlife experience.",
    image: "/uploads/pexels-nastyasensei-66707-331107.jpg",
  },
];

const Dining = () => {
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
          <h1 className="text-3xl font-serif text-hotel-primary text-center"></h1>
          <p className="text-center text-gray-600 mt-2"></p>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-white shadow-md py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          {diningOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => scrollToSection(option.id)}
              className="text-hotel-primary hover:text-hotel-secondary font-medium transition-colors"
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-grow">
        <section ref={ref} className="py-16">
          <div className="container mx-auto px-4">
            {diningOptions.map((option, index) => (
              <div
                key={option.id}
                id={option.id}
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
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-serif text-hotel-primary mb-4">
                    {option.name}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Link
                    to={`/dining/${option.id}`}
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
      </main>

      <Footer />
    </div>
  );
};

export default Dining;
