import React from 'react';
import { Star } from 'lucide-react';

const FlavourSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.pexels.com/photos/3768730/pexels-photo-3768730.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                     alt="Person eating" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">Food flavours</h4>
                </div>
              </div>
              
              <img src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                   alt="Crispy food" className="w-full h-32 object-cover rounded-xl mb-4" />
              
              <h3 className="font-bold text-gray-900 mb-2">Crispy potato crunchy wedges.</h3>
              <p className="text-gray-600 text-sm">
                Potatoes, Butter, Olive oil, Onions powder, Garlic powder, Paprika.
              </p>
            </div>
          </div>

          {/* Right side - Main content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Savour the
              <br />
              <span className="text-orange-500">flavour</span>, any
              <br />
              time you'll
              <br />
              savour
            </h2>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 font-bold text-gray-900">Rylic Studio</span>
            </div>
            
            <p className="text-gray-600 mb-8">
              Rylic Rice is a publicly powered, eliminates working and fluids, guiding on taste quality and always offering special of care.
            </p>
            
            <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors">
              Book Restaurant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavourSection;