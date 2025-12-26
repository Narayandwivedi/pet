import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      id: 1,
      bgColor: 'bg-gradient-to-r from-orange-400 to-orange-600',
      image: '/hero.webp',
      mobileImage: '/hero mobile.webp',
    },
    {
      id: 2,
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
      image: '/hero2.webp',
      mobileImage: '/hero2 mobile.webp',
    },
    {
      id: 3,
      bgColor: 'bg-gradient-to-r from-purple-400 to-purple-600',
      image: '/hero3.webp',
      mobileImage: '/hero3 mobile.webp',
    },
    {
      id: 4,
      bgColor: 'bg-gradient-to-r from-pink-400 to-pink-600',
      image: '/hero4.webp',
      mobileImage: '/hero4 mobile.webp',
    },
  ];

  const quickCategories = [
    { name: 'Dogs', icon: '🐕', path: '/dogs', gradient: 'from-orange-100 via-orange-50 to-white' },
    { name: 'Cats', icon: '🐈', path: '/cats', gradient: 'from-blue-100 via-blue-50 to-white' },
    { name: 'Food', icon: '🍖', path: '/food', gradient: 'from-green-100 via-green-50 to-white' },
    { name: 'Toys', icon: '🎾', path: '/toys', gradient: 'from-pink-100 via-pink-50 to-white' },
    { name: 'Treats', icon: '🦴', path: '/treats', gradient: 'from-yellow-100 via-yellow-50 to-white' },
    { name: 'Grooming', icon: '✂️', path: '/grooming', gradient: 'from-purple-100 via-purple-50 to-white' },
    { name: 'Health', icon: '💊', path: '/health', gradient: 'from-red-100 via-red-50 to-white' },
    { name: 'Beds', icon: '🛏️', path: '/beds', gradient: 'from-indigo-100 via-indigo-50 to-white' },
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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    }

    if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative w-full mb-16 md:mb-20">
      {/* Mobile Search Bar - Overlaid on Hero */}
      <div className="md:hidden absolute top-4 left-4 right-4 z-30">
        <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>
      </div>

      {/* Hero Slider */}
      <div
        className="relative w-full h-[315px] md:h-[360px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="w-full h-full relative flex items-center justify-center">
              {slide.image ? (
                <>
                  {/* Mobile Image */}
                  <img
                    src={slide.mobileImage}
                    alt="Hero slide"
                    className="absolute w-full h-full object-cover object-center md:hidden"
                  />
                  {/* Desktop Image */}
                  <img
                    src={slide.image}
                    alt="Hero slide"
                    className="absolute w-full h-full object-cover object-center hidden md:block"
                  />
                </>
              ) : (
                <>
                  <div className={`absolute w-full h-full ${slide.bgColor}`}></div>
                  <div className="relative text-center text-white px-4 z-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                    <button className="bg-white text-gray-800 px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      {slide.cta}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Navigation Arrows - Desktop only */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
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
      <div className="absolute -bottom-12 md:-bottom-16 left-0 right-0 z-20 px-4">
        <div className="container mx-auto">
          {/* Mobile: Scrollable horizontal - 4 full cards + 25% of 5th */}
          <div className="flex md:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide snap-x snap-mandatory">
            {quickCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className={`bg-gradient-to-br ${category.gradient} rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group p-2 flex flex-col items-center justify-center border border-white/50 min-w-[23%] h-[65px] snap-start flex-shrink-0 backdrop-blur-sm`}
              >
                <div className="text-lg mb-0.5 group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="text-[9px] font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop: Grid with 8 columns - all cards in one row */}
          <div className="hidden md:grid md:grid-cols-8 gap-6">
            {quickCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className={`bg-gradient-to-br ${category.gradient} rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group p-2 flex flex-col items-center justify-center border border-white/50 h-[90px] max-w-[100px] mx-auto w-full backdrop-blur-sm`}
              >
                <div className="text-xl mb-1 group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="text-[9px] font-bold text-gray-800 group-hover:text-orange-600 transition-colors text-center leading-tight">
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
