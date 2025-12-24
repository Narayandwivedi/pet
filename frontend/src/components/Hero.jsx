import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Premium Pet Food',
      subtitle: 'Nutritious meals for your furry friends',
      bgColor: 'bg-gradient-to-r from-orange-400 to-orange-600',
      cta: 'Shop Now',
    },
    {
      id: 2,
      title: 'Toys & Accessories',
      subtitle: 'Keep your pets happy and active',
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
      cta: 'Explore',
    },
    {
      id: 3,
      title: 'Grooming Essentials',
      subtitle: 'Everything for pet care and hygiene',
      bgColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
      cta: 'Discover',
    },
  ];

  const quickCategories = [
    { name: 'Dogs', icon: '🐕', path: '/dogs' },
    { name: 'Cats', icon: '🐈', path: '/cats' },
    { name: 'Food', icon: '🍖', path: '/food' },
    { name: 'Toys', icon: '🎾', path: '/toys' },
    { name: 'Treats', icon: '🦴', path: '/treats' },
    { name: 'Grooming', icon: '✂️', path: '/grooming' },
    { name: 'Health', icon: '💊', path: '/health' },
    { name: 'Beds', icon: '🛏️', path: '/beds' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full mb-20 md:mb-24">
      {/* Hero Slider */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center`}>
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <button className="bg-white text-gray-800 px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Overlay Category Cards - 20% inside, 80% outside */}
      <div className="absolute -bottom-16 md:-bottom-20 left-0 right-0 z-20 px-4">
        <div className="container mx-auto">
          {/* Mobile: Scrollable horizontal */}
          <div className="flex md:hidden overflow-x-auto gap-3 pb-2 scrollbar-hide snap-x snap-mandatory">
            {quickCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all group p-4 flex flex-col items-center justify-center border border-gray-100 min-w-[100px] h-[100px] snap-start"
              >
                <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-500 transition-colors text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop: Grid with 8 columns - all cards in one row */}
          <div className="hidden md:grid md:grid-cols-8 gap-8">
            {quickCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all group p-3 flex flex-col items-center justify-center border border-gray-100 h-[130px] max-w-[117px] mx-auto w-full"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-500 transition-colors text-center leading-tight">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
