import React from 'react';
import { ArrowRight } from 'lucide-react';

const ArnoldSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-400 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Arnold Classic
                <br />
                <span className="text-2xl">Chef</span>
              </h2>
              
              <p className="text-gray-700 mb-8">
                Our master chef demonstrates with fresh, flavorful & unforgettable dishes to delight every palate.
              </p>
              
              <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors flex items-center">
                Visit the listings
                <div className="ml-3 bg-orange-500 p-2 rounded-full">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img src="https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
                     alt="Arnold Chef" className="w-64 h-80 object-cover rounded-3xl" />
                
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-orange-500 font-bold text-lg">Arnold</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 bg-green-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default ArnoldSection;