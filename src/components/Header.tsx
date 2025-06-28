import React from 'react';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  const List = [
  { label: "Diners", href: "#dinners" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Food News", href: "#food-news" }
];
  return (
    <header className="bg-transparent shadow-sm relative z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center ">
            <div className="text-2xl font-bold text-green-700 font-">CookBook</div>
          </div>
          <div className='hidden md:flex h-9 w-52 bg-gray-200 rounded-full items-center px-3 hover:bg-gray-300 transition-colors'><Search/></div>
          
          <nav className="hidden md:flex space-x-8">
            {List.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                {item.label}
              </a>
              
            ))}
            
            
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