import { Home, Grid, ShoppingCart, User, Pill } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Categories', path: '/categories', icon: Grid },
    { name: 'Pharmacy', path: '/pharmacy', icon: Pill },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-gray-50 border-t border-gray-200 shadow-2xl z-50 backdrop-blur-sm">
      <div className="flex items-center justify-around py-1 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center justify-center px-3 py-2 transition-all duration-300 ease-in-out group"
            >
              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
              )}

              {/* Icon container with background */}
              <div className={`relative p-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-orange-100 scale-110 shadow-md'
                  : 'group-hover:bg-gray-100 group-hover:scale-105'
              }`}>
                <Icon className={`w-5 h-5 transition-colors duration-300 ${
                  isActive ? 'text-orange-500' : 'text-gray-600 group-hover:text-orange-400'
                }`} />
              </div>

              {/* Label */}
              <span className={`text-[10px] mt-1 font-semibold transition-all duration-300 ${
                isActive
                  ? 'text-orange-500 scale-105'
                  : 'text-gray-500 group-hover:text-gray-700'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
