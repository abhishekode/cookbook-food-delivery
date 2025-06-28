import React from 'react';
import { ChefHat, Play } from 'lucide-react';


const HeroSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-screen">
   
      {/* Left Panel - Chef Job */}
      <div className="bg-green-700 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <ChefHat className="h-8 w-8 mr-3" />
            <span className="text-xl font-bold">CookBook</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Get your First
            <br />
            <span className="text-yellow-400">Chef Job.</span>
          </h1>
          
          <p className="text-lg mb-8 opacity-90">
            Your first step into your desired career. With few of our 50 job role.
          </p>
          
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
            Start Working
            <div className="ml-3 bg-orange-500 p-2 rounded-full">
              <ChefHat className="h-4 w-4 text-white" />
            </div>
          </button>
        </div>
        
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
          <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
               alt="Burger" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      {/* Center Panel - Cooking Couple */}
      <div className="bg-amber-50 p-8 lg:p-12 flex flex-col justify-center relative">
        <div className="relative">
          <img src="https://images.pexels.com/photos/4252139/pexels-photo-4252139.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
               alt="Couple cooking together" className="w-full h-96 lg:h-full object-cover rounded-2xl" />
          
          <button className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors">
            <Play className="h-6 w-6 text-gray-700 ml-1" />
          </button>
        </div>
      </div>

      {/* Right Panel - Pizza */}
      <div className="bg-yellow-400 text-gray-800 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-10 right-10 w-16 h-16 bg-orange-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-red-500 rounded-full opacity-20"></div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                 alt="Pizza slice" className="w-32 h-32 object-cover rounded-full mx-auto mb-6" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
            Cheese and
            <br />
            Spice on every
            <br />
            Slice.
          </h2>
          
          <p className="text-center mb-8 opacity-80">
            Why online when you can easily
            <br />
            eat our bread at home.
          </p>
          
          <div className="text-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Read Recipe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;