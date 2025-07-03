import React from 'react';
import { ArrowRight, Sparkle } from 'lucide-react';

const ChickenBurgerSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b-2 border-gray-200 overflow-hidden relative h-screen">
      <div className=" mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-16">
            <div className="relative">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Dive into the <br />
                <span className="text-orange-500">delicious</span> corn <br />
                chicken <span className="text-orange-500">burger!</span>
              </h2>

              {/* Chili Image */}
              <img
                src="https://www.shutterstock.com/image-photo/falling-sliced-red-hot-chili-600nw-2176842815.jpg"
                alt="chili"
                className="absolute top-[-45px]  right-8 md:h-60 md:w-40 h-32 w-20 object-cover rounded-xl"
              />
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-6">
              <button className="bg-green-800 hover:bg-green-900 text-white  sm:w-64 px-8 py-4 rounded-full font-medium font-serif text-lg flex justify-between items-center transition duration-300">
                Learn the Magic
                <ArrowRight className="h-8 w-8 bg-orange-500 p-1 rounded-full ml-2" />
              </button>
              <div className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                <Sparkle className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Info Card */}
            <div >
              <h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Basil pasta with sun dried <br /> tomato touch
              </h3>
              <p className="text-gray-700 mb-6 text-base font-serif">
                Beat protein with sun dried tomato pesto with <br />
                lots of herbs and delicious seasoning.
              </p>

              {/* Avatars */}
              <div className="flex items-center gap-3">
                {[ 
                  "https://t4.ftcdn.net/jpg/05/17/27/83/360_F_517278381_npC0cMTTo14wDSQMHtbM5qI1BN0jhEpB.jpg",
                  "https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A",
                  "https://b.zmtcdn.com/data/dish_photos/8ac/5fa70d27ec515040be6860c8d469c8ac.jpeg"
                ].map((src, i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                    <img src={src} alt="avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Grid Images */}
          <div className="grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <img
                src="https://b.zmtcdn.com/data/dish_photos/8ac/5fa70d27ec515040be6860c8d469c8ac.jpeg"
                alt="momo"
                className="h-48 w-48 object-cover rounded-full mx-auto"
              />
              <div className="h-52 w-full rounded-3xl overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/11/45/93/39/360_F_1145933918_BB7bacEKG2gIVFWemphKrbS54HvzBeBL.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="h-44 w-full rounded-3xl overflow-hidden">
                <img
                  src="https://img.freepik.com/premium-photo/fried-french-fries-falling-from-top-bottom-blue-background_705203-26659.jpg?w=3600"
                  alt="Fries"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="relative md:h-56 h-44 w-full rounded-3xl overflow-hidden bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://mir-s3-cdn-cf.behance.net/project_modules/hd/12858a32751817.56929eefe8431.jpg')"
                }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/045/910/794/small_2x/a-pizza-with-tomatoes-and-cheese-on-a-wooden-board-stock-png.png"
                  alt="Pizza"
                  className="absolute  -bottom-1 left-1/2 transform -translate-x-1/2 h-36 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChickenBurgerSection;
