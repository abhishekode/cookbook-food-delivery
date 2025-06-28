import React from 'react';
import { ArrowRight } from 'lucide-react';

const ChickenBurgerSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dive into the
              <br />
              delicious corn
              <br />
              chicken burger !
            </h2>
            
            <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors flex items-center mb-8">
              Learn the Recipe
              <div className="ml-3 bg-orange-500 p-2 rounded-full">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Basil pasta with sun dried tomato touch</h3>
              <p className="text-gray-600 text-sm mb-4">
                Beat protein with sun dried tomato pesto with 
                lots of herbs and delicious herb.
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-400 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" 
                   alt="Hot dog" className="w-full h-32 object-cover rounded-2xl" />
              <img src="https://images.pexels.com/photos/2878725/pexels-photo-2878725.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" 
                   alt="French fries" className="w-full h-32 object-cover rounded-2xl" />
            </div>
            
            <div className="space-y-4">
              <div className="bg-yellow-400 rounded-2xl p-4 h-32 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop" 
                     alt="Burger stack" className="w-20 h-16 object-cover rounded-xl" />
              </div>
              <div className="bg-green-700 rounded-2xl p-4 h-32 flex items-center justify-center">
                <img src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop" 
                     alt="Fried chicken" className="w-20 h-16 object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChickenBurgerSection;