import React from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-700">CookBook</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#dinners" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Dinners
            </a>
            <a href="#restaurants" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Restaurants
            </a>
            <a href="#food-news" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Food News
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-700 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-700 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-green-700 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;