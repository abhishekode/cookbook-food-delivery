import React from 'react';
import { ArrowRight } from 'lucide-react';

const SnacksSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Chicken Burger Card */}
          <div className="bg-yellow-400 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
              $6
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Chicken Burgers</h3>
              <div className="text-lg font-bold text-gray-900">$6</div>
            </div>
            
            <div className="flex justify-center mb-6">
              <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                   alt="Chicken Burger" className="w-64 h-48 object-cover rounded-2xl" />
            </div>
            
            <div className="bg-white rounded-2xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">Crispy potato wedges with extra crunch.</h4>
              <button className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <ArrowRight className="h-5 w-5 mr-1" />
              </button>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Snacks crafted for
              <br />
              taste, & cravings
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Best spicy Cheddar cheese, Lettuce, Tomato, Pickles,
              <br />
              Onion, Special sauce, Toasted bun.
            </p>
            
            <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors flex items-center">
              Visit the listings
              <div className="ml-3 bg-orange-500 p-2 rounded-full">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnacksSection;