import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Dinners', href: '#dinners' },
    { label: 'Restaurants', href: '#restaurants' },
    { label: 'Food News', href: '#food-news' }
  ];

  return (
    <header className="bg-white shadow-sm  top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-700">
            CookBook<span className="text-orange-500">.</span>
          </div>

          {/* Search (hidden on small screens) */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 h-10 hover:bg-gray-200 transition-all duration-200">
            <Search className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm text-gray-700 w-36"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 ml-6">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-green-700 font-medium transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-700 transition">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-green-700 transition">
              <User className="h-6 w-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-green-700 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 border-t shadow-sm">
          <div className="flex items-center bg-gray-100 rounded-full px-3 h-10 mb-4">
            <Search className="text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm text-gray-700 w-full"
            />
          </div>
          <nav className="space-y-3">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-green-700 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
