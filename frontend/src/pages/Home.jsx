import Hero from '../components/Hero';
import { ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('under799');
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const categories = [
    { name: 'Dog Food', image: '🐕', color: 'bg-orange-100' },
    { name: 'Cat Food', image: '🐈', color: 'bg-blue-100' },
    { name: 'Toys', image: '🎾', color: 'bg-green-100' },
    { name: 'Treats', image: '🦴', color: 'bg-yellow-100' },
    { name: 'Accessories', image: '🎀', color: 'bg-pink-100' },
    { name: 'Grooming', image: '✂️', color: 'bg-purple-100' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Dog Food',
      price: '₹1,299',
      originalPrice: '₹1,599',
      image: '🐕',
      rating: 4.5,
      discount: '20% OFF',
    },
    {
      id: 2,
      name: 'Cat Scratching Post',
      price: '₹899',
      originalPrice: '₹1,199',
      image: '🐱',
      rating: 4.8,
      discount: '25% OFF',
    },
    {
      id: 3,
      name: 'Interactive Ball Toy',
      price: '₹499',
      originalPrice: '₹699',
      image: '⚽',
      rating: 4.3,
      discount: '30% OFF',
    },
    {
      id: 4,
      name: 'Pet Grooming Kit',
      price: '₹1,499',
      originalPrice: '₹1,999',
      image: '✂️',
      rating: 4.6,
      discount: '25% OFF',
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders above ₹999',
    },
    {
      icon: ShoppingBag,
      title: 'Easy Returns',
      description: '30 days return policy',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% secure transactions',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated customer care',
    },
  ];

  const bestsellerProducts = {
    under799: [
      { id: 1, name: 'Premium Dog Treats', price: '₹749', originalPrice: '₹999', image: '🦴', rating: 4.7, discount: '25% OFF' },
      { id: 2, name: 'Cat Toy Bundle', price: '₹599', originalPrice: '₹799', image: '🎾', rating: 4.5, discount: '25% OFF' },
      { id: 3, name: 'Pet Collar & Leash', price: '₹699', originalPrice: '₹899', image: '🎀', rating: 4.6, discount: '22% OFF' },
      { id: 4, name: 'Grooming Brush Set', price: '₹549', originalPrice: '₹749', image: '✂️', rating: 4.4, discount: '27% OFF' },
      { id: 5, name: 'Pet Shampoo', price: '₹449', originalPrice: '₹599', image: '🧴', rating: 4.8, discount: '25% OFF' },
    ],
    under499: [
      { id: 6, name: 'Chew Toys Pack', price: '₹399', originalPrice: '₹599', image: '🦷', rating: 4.3, discount: '33% OFF' },
      { id: 7, name: 'Pet Bowl Set', price: '₹349', originalPrice: '₹499', image: '🥣', rating: 4.6, discount: '30% OFF' },
      { id: 8, name: 'Catnip Toys', price: '₹299', originalPrice: '₹449', image: '🐱', rating: 4.5, discount: '33% OFF' },
      { id: 9, name: 'Dog Treats Combo', price: '₹449', originalPrice: '₹599', image: '🍖', rating: 4.7, discount: '25% OFF' },
      { id: 10, name: 'Pet Waste Bags', price: '₹249', originalPrice: '₹349', image: '🛍️', rating: 4.4, discount: '29% OFF' },
    ],
    under199: [
      { id: 11, name: 'Squeaky Ball', price: '₹149', originalPrice: '₹249', image: '⚽', rating: 4.2, discount: '40% OFF' },
      { id: 12, name: 'Pet Hair Remover', price: '₹179', originalPrice: '₹299', image: '🧹', rating: 4.5, discount: '40% OFF' },
      { id: 13, name: 'Cat Teaser Wand', price: '₹129', originalPrice: '₹199', image: '🪄', rating: 4.3, discount: '35% OFF' },
      { id: 14, name: 'Pet ID Tag', price: '₹99', originalPrice: '₹199', image: '🏷️', rating: 4.6, discount: '50% OFF' },
      { id: 15, name: 'Poop Scooper', price: '₹169', originalPrice: '₹249', image: '🧤', rating: 4.4, discount: '32% OFF' },
    ],
  };

  // Auto-slide for featured products on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProductSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-6 h-6 md:w-10 md:h-10 text-orange-500 mb-2" />
                <h3 className="text-xs md:text-base font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-[10px] md:text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-gray-800">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-lg p-3 md:p-6 text-center cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="text-3xl md:text-5xl mb-2 md:mb-3">{category.image}</div>
                <h3 className="text-xs md:text-base font-semibold text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">Featured Products</h2>
            <button className="text-sm md:text-base text-orange-500 hover:text-orange-600 font-semibold">View All →</button>
          </div>

          {/* Mobile: Slider with 2 products visible + peek of 3rd */}
          <div className="md:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-3"
              style={{ transform: `translateX(-${currentProductSlide * 47}%)` }}
            >
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group min-w-[45%] flex-shrink-0"
                >
                  <div className="relative bg-gray-100 h-32 flex items-center justify-center">
                    <div className="text-4xl">{product.image}</div>
                    {product.discount && (
                      <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-base font-bold text-gray-800">{product.price}</span>
                        <span className="text-xs text-gray-400 line-through ml-1">{product.originalPrice}</span>
                      </div>
                    </div>
                    <button className="w-full bg-orange-500 text-white text-xs py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 gap-2">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProductSlide ? 'bg-orange-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative bg-gray-100 h-40 md:h-48 flex items-center justify-center">
                  <div className="text-5xl md:text-6xl">{product.image}</div>
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-sm md:text-base">★</span>
                    <span className="text-xs md:text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg md:text-xl font-bold text-gray-800">{product.price}</span>
                      <span className="text-xs md:text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>
                  <button className="w-full mt-2 md:mt-3 bg-orange-500 text-white text-sm md:text-base py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl md:rounded-2xl p-6 md:p-12 text-white text-center">
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Special Offer!</h2>
            <p className="text-sm md:text-xl mb-4 md:mb-6">Get up to 50% off on selected items</p>
            <button className="bg-white text-orange-500 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800">
            Bestsellers For Your Pet
          </h2>

          {/* Price Tabs */}
          <div className="flex justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab('under799')}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                activeTab === 'under799'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Under ₹799
            </button>
            <button
              onClick={() => setActiveTab('under499')}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                activeTab === 'under499'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Under ₹499
            </button>
            <button
              onClick={() => setActiveTab('under199')}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                activeTab === 'under199'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Under ₹199
            </button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-gray-800">Popular Brands</h2>
          {/* Mobile: Scrollable Row - 3 brands visible + 25% of 4th */}
          <div className="flex lg:hidden overflow-x-auto gap-1 pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
            {['/brand1.avif', '/brand2.avif', '/brand3.avif', '/brand4.avif', '/brand5.avif', '/brand6.avif'].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[31%] snap-start"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-24 object-contain cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          {/* Desktop: Grid Layout - 6 brands in a row */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4">
            {['/brand1.avif', '/brand2.avif', '/brand3.avif', '/brand4.avif', '/brand5.avif', '/brand6.avif'].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-32 object-contain cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
