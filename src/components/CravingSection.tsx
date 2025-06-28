import React from 'react';
import men from '../assists/men.png';

const CravingSection: React.FC = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute -top-5 right-4 md:right-10">
        <img
          src="https://static.vecteezy.com/system/resources/previews/047/825/285/non_2x/red-chili-peppers-and-flakes-isolated-on-a-transparent-background-free-png.png"
          alt=""
          className="h-20 w-20 md:h-40 md:w-40"
        />
      </div>
      <div className="absolute top-10 left-4 md:left-10">
        <img
          src="https://static.vecteezy.com/system/resources/previews/047/706/319/non_2x/pistachios-falling-from-above-with-transparent-background-png.png"
          alt=""
          className="h-20 w-20 md:h-40 md:w-40"
        />
      </div>

      {/* Badge */}
      <div className="absolute top-24 right-4 md:top-36 md:right-40 flex justify-center z-10">
        <div className="bg-yellow-400 rounded-full w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
          <div className="bg-white rounded-full w-16 h-16 md:w-28 md:h-28 flex items-center justify-center">
            <div className="text-center">
              <div className="text-green-700 font-bold text-xs md:text-xl mb-1">PREMIUM FOOD</div>
              <div className="text-gray-600 font-bold text-[10px] md:text-sm">TASTE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headings */}
        <div className="text-center flex flex-col items-center justify-start -mt-14 px-4">
          <p
            className="text-orange-500 font-semibold italic text-2xl sm:text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Taste a bite
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-16 text-center"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Satisfy your craving, it's
            <br />
            fast food-waving
          </h2>
        </div>

        {/* Grid Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-20">
          {/* Left Card */}
         <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-5 max-w-[90%] sm:max-w-xs w-full mx-auto ">
  <div className="overflow-hidden rounded-xl mb-3 sm:mb-4 ">
    <img
      src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&fit=crop"
      alt="Spicy food"
      className="w-full h-40 sm:h-48 object-cover transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <p className="text-sm sm:text-base text-gray-700 font-medium text-center px-1">
    Make spicy <span className="text-orange-500 font-semibold">Spicy Salmon</span>. My own secret.
  </p>
</div>


          {/* Center Circle with Burger */}
          <div className="relative flex items-center justify-center">
            {/* Outer Circle - responsive sizes */}
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full py-10 sm:py-14 text-center h-[280px] sm:h-[400px] w-[280px] sm:w-[400px] -mb-40 sm:-mb-96 mr-0 sm:mr-20 relative">
              
              {/* Inner Circle - responsive */}
              <div className="bg-yellow-500 rounded-full h-52 sm:h-72 w-52 sm:w-72 mx-auto relative" />

              {/* Burger Text and Image */}
              <div className="absolute inset-0 flex items-center justify-center bottom-32 sm:bottom-48">
                <h1 className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  text-[14vw] sm:text-[12vw] font-extrabold text-black/15 uppercase tracking-widest 
                  select-none pointer-events-none leading-none z-10">
                  BURGER
                </h1>
                <img
                  src={men}
                  alt="man eating burger"
                  className="w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CravingSection;
