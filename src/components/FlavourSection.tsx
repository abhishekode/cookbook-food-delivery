import React from "react";
import { PhoneCall, Star } from "lucide-react";

const FlavourSection: React.FC = () => {
  return (
    <section className="bg-white py-20 border-b-2 border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16 items-center lg:items-start">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-[33%] flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-1 bg-orange-500"></div>
            <h4 className="text-4xl font-bold text-orange-500" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Food Flavours
            </h4>
            <div className="w-14 h-1 bg-orange-500"></div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1542773729-e92e9ae3e613?q=80&w=687"
            alt="Person eating"
            className="rounded-3xl shadow-xl w-[90%] max-w-sm h-[26rem] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* CENTER SECTION */}
        <div className="w-full lg:w-[34%] bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170"
            alt="Crispy food"
            className="w-full max-w-md h-48 object-cover rounded-xl mb-6"
          />

          <h3 className="text-3xl font-bold text-gray-900 font-serif text-center leading-tight">
            Crispy Potato  
            <br /> <span className="text-orange-500">Crunchy Wedges</span>
          </h3>

          <p className="text-gray-600 text-base mt-4 mb-6 font-serif text-center leading-relaxed">
            Potatoes, Butter, Olive Oil, Onion Powder,<br />Garlic Powder, Paprika.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-full text-base font-semibold font-serif w-full sm:w-auto transition-all duration-300">
              Book Restaurant
            </button>
            <div className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[33%] flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-5xl font-bold text-gray-900 font-serif leading-tight">
            Savour the <br />
            <span className="text-orange-500">flavour</span>, any <br />
            time you'll savour.
          </h2>

          <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto lg:mx-0"></div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-bold text-gray-800 font-serif">Rylic Studio</span>
          </div>

          <p className="text-gray-700 text-base font-serif leading-relaxed max-w-md px-2 lg:px-0">
            Rylic Rice is a publicly powered innovation that eliminates manual effort and fluid waste. Designed for efficiency and sustainability, it streamlines operational workflows while reducing energy consumption.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FlavourSection;
