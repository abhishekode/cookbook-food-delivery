import React from 'react';
import { PhoneCall, Star } from 'lucide-react';

const FlavourSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Title & Image */}
        <div className="w-full md:w-[35%] flex flex-col gap-6 items-center md:items-start">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="h-px w-12 bg-orange-500"></div>
            <h4
              className="text-3xl md:text-4xl font-bold text-orange-500 tracking-wide text-center md:text-left"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Food Flavours
            </h4>
            <div className="h-px w-12 bg-orange-500"></div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1542773729-e92e9ae3e613?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person eating"
            className="w-64 sm:w-72 h-72 md:h-96 sm:h-80 md:w-80 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Center - Food Card */}
        <div className="w-full md:w-[35%] bg-white p-5 rounded-2xl mx-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crispy food"
            className="w-full h-40 object-cover rounded-xl mb-8"
          />

          <h3 className="font-bold text-2xl text-gray-900 mb-5 font-serif leading-snug text-center md:text-left">
            Crispy Potato  
            <br /> <span className='text-orange-500 text-2xl'>Crunchy Wedges</span>
          </h3>

          <p className="text-gray-600 text-sm mb-4 font-serif leading-snug text-center md:text-left">
            Potatoes, Butter, Olive Oil, Onion Powder,<br /><span>Garlic Powder, Paprika.</span> 
          </p>

          <div className="flex flex-row sm:flex-row items-center justify-center sm:justify-start gap-4 md:gap-6">
            <button className="bg-green-800 hover:bg-green-900 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 h-14 md:w-full w-44 sm:w-52 font-serif leading-snug">
              Book Restaurant
            </button>
            <div className="h-12 md:h-12  md:w-16 w-12 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
              <PhoneCall className="w-5 h-5   text-white" />
            </div>
          </div>
        </div>

        {/* Right - Text and Ratings */}
        <div className="w-full md:w-[30%] flex flex-col gap-6 items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif leading-snug text-center md:text-left">
            Savour the
            <br />
            <span className="text-orange-500 ">flavour</span>, any
            <br />
            time you'll
            <br />
            savour
          </h2>

          <div className='flex flex-col gap-8'>
            <div className="h-[1.5px] w-60 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto md:mx-0"></div>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 font-bold text-gray-900 font-serif leading-snug">Rylic Studio</span>
            </div>

            <p className="text-gray-600 text-sm font-serif leading-snug text-center md:text-left px-2">
              Rylic Rice is a publicly powered innovation that eliminates manual effort and fluid waste. Designed for efficiency and sustainability, it streamlines operational workflows while reducing energy consumption.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlavourSection;
