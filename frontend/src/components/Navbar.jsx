import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Dogs', path: '/dogs' },
    { name: 'Cats', path: '/cats' },
    { name: 'Food', path: '/food' },
    { name: 'Treats', path: '/treats' },
    { name: 'Toys', path: '/toys' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Sale', path: '/sale', highlight: true },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-orange-500 text-white text-center py-2 text-xs sm:text-sm overflow-hidden">
        <p className="whitespace-nowrap">Free Shipping on orders above ₹999 | Same Day Delivery Available</p>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 outline-none focus:outline-none">
            <div className="text-2xl font-bold text-orange-500">
              🐾 PetStore
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                  link.highlight ? 'text-orange-500 font-bold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search bar - Desktop */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none ml-2 w-48 text-sm"
              />
            </div>

            {/* Wishlist */}
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
              <Heart className="w-6 h-6 text-gray-700" />
            </button>

            {/* User */}
            <Link to="/login" className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition">
              <User className="w-6 h-6 text-gray-700" />
            </Link>

            {/* Cart - Hidden on mobile */}
            <Link to="/cart" className="hidden md:block relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-orange-500 font-medium transition-colors py-2 ${
                    link.highlight ? 'text-orange-500 font-bold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
