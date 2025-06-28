import React from 'react';

const CravingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold mb-2">Taste a bite</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Satisfy your craving, it's
            <br />
            fast food-waving
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left - Food item */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <img src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&fit=crop" 
                 alt="Spicy food" className="w-full h-40 object-cover rounded-xl mb-4" />
            <p className="text-sm text-gray-600">
              Make spicy Spicy Salmon. My own secret.
            </p>
          </div>

          {/* Center - Person eating */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 text-center">
              <img src="https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
                   alt="Person enjoying food" className="w-48 h-64 object-cover rounded-2xl mx-auto" />
            </div>
          </div>

          {/* Right - Badge */}
          <div className="flex justify-center">
            <div className="bg-yellow-400 rounded-full p-8 w-48 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="text-green-700 font-bold text-lg mb-2">PREMIUM FOOD</div>
                <div className="text-green-700 font-bold text-sm">TASTE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CravingSection;