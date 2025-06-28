import React from 'react';
import { ArrowRight } from 'lucide-react';

const FuelSection: React.FC = () => {
  return (
    <section className="py-16 bg-green-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2 mr-4">
                <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-red-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Better Taste, Life Feel</div>
                <div className="opacity-80">Ultimate experience</div>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Fuel your <span className="text-yellow-400">stomach</span>
              <br />
              in every bite
            </h2>
            
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
              Subscribe Us
              <div className="ml-3 bg-orange-500 p-2 rounded-full">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </button>
          </div>
          
          <div className="flex justify-center space-x-4">
            <div className="space-y-4">
              <img src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop" 
                   alt="Food item 1" className="w-24 h-32 object-cover rounded-2xl" />
            </div>
            
            <div className="space-y-4 mt-8">
              <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                   alt="Pizza" className="w-32 h-32 object-cover rounded-full" />
            </div>
            
            <div className="space-y-4">
              <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=150&h=200&fit=crop" 
                   alt="Burger" className="w-24 h-32 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelSection;