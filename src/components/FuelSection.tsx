import React from 'react';
import { FaBell, FaDiscord } from 'react-icons/fa';

const FuelSection: React.FC = () => {
  return (
    <section
      className="relative py-12 sm:py-16 text-white overflow-hidden w-[95%] mx-auto rounded-3xl bg-cover bg-center"
      style={{
        backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/hd/12858a32751817.56929eefe8431.jpg')`,
      }}
    >
      {/* Background dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      {/* Floating decorative images */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-[-40px] left-4 md:left-28 w-24 md:w-36 lg:w-48 h-24 md:h-36 lg:h-48 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://toppng.com/uploads/preview/pizza-food-transparent-background-11668769810o5tjxnfu4u.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-[-40px] right-4 md:right-28 w-24 md:w-36 lg:w-40 h-24 md:h-36 lg:h-40 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/8ac/5fa70d27ec515040be6860c8d469c8ac.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-[-20px] left-[-8px] w-16 md:w-20 h-16 md:h-20 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://www.mypricechopper.com/Frontend/Media/Recipes/ChicagoHotDog_Web_1110x625.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-8 -right-8 w-24 md:w-32 lg:w-48 h-24 md:h-32 lg:h-48 rounded-full overflow-hidden border-2 border-white">
          <img
            src="https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani-500x500.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatars and description */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex -space-x-2 mb-2 justify-center items-center">
             <div className='w-20 h-[1px] bg-white  bg-gradient-to-r from-gray-400 to-transparent blur-10'></div>

              <div className="w-12 h-12 bg-yellow-400 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1301906355/photo/vegetarian-pizza-isolated-on-a-yellow-background-woman-taking-a-slice-of-pizza.jpg?s=612x612&w=0&k=20&c=T1Rw7sxs1QL38Il6NRIA_QliWFnmPf_aGujuc-ijJOE="
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="w-12 h-12 bg-white rounded-full border-2 border-yellow-400 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
                  alt="Cheeseburger"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="w-12 h-12 bg-red-500 rounded-full border-2 border-white overflow-hidden z-10">
                <img
                  src="https://b.zmtcdn.com/data/dish_photos/8ac/5fa70d27ec515040be6860c8d469c8ac.jpeg"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className='w-20 h-[1px] bg-white  bg-gradient-to-l from-gray-400 to-transparent blur-10'></div>
            </div>

            <div className="text-sm text-center">
              <div className="font-semibold">Better Taste, Life Feel</div>
              <div className="opacity-80">Ultimate experience</div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-snug">
            Fuel your <span className="text-yellow-400">stomach</span>
            <br />
            in every bite
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2">
              <FaBell className="w-5 h-5 text-black" />
              Subscribe Us
            </button>
            <div className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center">
              <FaDiscord className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelSection;
