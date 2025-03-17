
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Kritika Pandey",
    date: "2022-08-18",
    rating: 5,
    content: "Very comfortable stay with Hablis. The service was very good. The food was also very nice we got many varieties in the food of North Indian, South Indian etc. The rooms were very comfortable and the staff was very cooperative and helpful."
  },
  {
    id: 2,
    author: "Sarath Kumar B",
    date: "2022-08-16",
    rating: 4,
    content: "I had a wonderful experience at Hablis hotel. Mr Javahar helped us out with his service. He made our family proud by guaranteeing us the best room available in our budget. The location was also totally worth it. My favourite was simply both veg and non-veg Chennai chicken curry with all this experience I would tell to one line that Hablis is the place to be in Chennai."
  },
  {
    id: 3,
    author: "Lakshmi Yogesh",
    date: "2022-08-18",
    rating: 5,
    content: "Banquet hall booking process was easy. Mr Javahar has streamlined the process. He was very polite and available at anytime to answer all questions. The banquet hall location is very nice with a separate entrance for the wedding welcome. The best part is food. Food was sumptuous and everyone enjoyed the party with good food and ambience. To be honest, I have given this 5-star review because of Mr Javahar's excellent support for the event."
  },
  {
    id: 4,
    author: "Priya Sharma",
    date: "2022-09-05",
    rating: 5,
    content: "Absolutely fantastic experience from start to finish. The staff went above and beyond to make our stay comfortable. Special mention to the restaurant staff who accommodated our dietary preferences. The room was spacious, clean and had all amenities we needed. Location is perfect - close to the airport and business district. Will definitely return!"
  },
  {
    id: 5,
    author: "Raj Malhotra",
    date: "2022-08-25",
    rating: 4,
    content: "Had a business meeting here and decided to stay overnight. The conference facilities were excellent with good technical support. Room was comfortable though a bit dated. Breakfast spread was impressive with both Indian and continental options. The staff were professional and attentive. Good value for money overall."
  }
];

const Reviews = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayReviews, setDisplayReviews] = useState<typeof reviews>([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      // On large screens, show 3 reviews at a time
      const maxActive = reviews.length - 3;
      const end = Math.min(activeSlide + 3, reviews.length);
      const start = Math.max(0, end - 3);
      setDisplayReviews(reviews.slice(start, end));
    } else if (window.innerWidth >= 768) {
      // On medium screens, show 2 reviews at a time
      const maxActive = reviews.length - 2;
      const end = Math.min(activeSlide + 2, reviews.length);
      const start = Math.max(0, end - 2);
      setDisplayReviews(reviews.slice(start, end));
    } else {
      // On small screens, show 1 review at a time
      setDisplayReviews([reviews[activeSlide]]);
    }
  }, [activeSlide, window.innerWidth]);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section ref={ref} className="py-20 bg-hotel-light">
      <div className="container mx-auto px-4">
        <h2 className={`section-title transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          REVIEWS
        </h2>
        
        <div className={`relative max-w-6xl mx-auto mt-12 transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.map((review, index) => (
              <div 
                key={review.id} 
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-4">{review.content}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-hotel-dark">{review.author}</span>
                  <span className="text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md text-hotel-dark transition-colors"
            onClick={prevSlide}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md text-hotel-dark transition-colors"
            onClick={nextSlide}
            aria-label="Next reviews"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button 
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-hotel-primary scale-125' : 'bg-gray-300'
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
