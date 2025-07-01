import React from 'react';
import { ArrowRight, Sparkle } from 'lucide-react';


const ChickenBurgerSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          

          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <div className='flex justify-between'>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-bold"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Dive into the <br />
              <span className="text-orange-500 font-bold">delicious</span> corn <br />
              chicken <span className="text-orange-500 font-bold">burger!</span>
            </h2>
           <img src="https://www.shutterstock.com/image-photo/falling-sliced-red-hot-chili-600nw-2176842815.jpg" alt="chiily" className='h-40 w-40 mt-10'  /></div>
           

            {/* CTA Button + Icon */}
           
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full">
              <button className="bg-green-800 hover:bg-green-900 text-white w-52 sm:w-52 px-5 py-2 rounded-full font-medium transition duration-300 h-14 font-serif flex justify-between items-center">
                Learn the Magic
                <ArrowRight className="h-8 w-8 bg-orange-500 p-1 rounded-full" />
              </button>
              <div className="h-12 w-12 md:rounded-full rounded-2xl bg-orange-500 flex items-center justify-center shadow-md">
                <Sparkle className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3
                className="font-bold text-xl sm:text-2xl text-gray-900 mb-2"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Basil pasta with sun dried <br /> tomato touch
              </h3>
              <p className="text-gray-600 mb-4 font-serif leading-snug">
                Beat protein with sun dried tomato pesto with <br />
                lots of herbs and delicious herb.
              </p>

              {/* Profile Avatars */}
                <div className="flex -space-x-2  items-center">
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
              
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* First Image Column */}
            <div className="flex flex-col items-center sm:items-start gap-6 relative">
             
              <img
                src="https://b.zmtcdn.com/data/dish_photos/8ac/5fa70d27ec515040be6860c8d469c8ac.jpeg"
                alt="Hotdog"
                className="h-40 object-cover rounded-full w-40  md:-top-40 sm:-top-36 sm:-right-8  "
              />
              <div className="h-52 w-52 sm:w-44 bg-yellow-500 rounded-2xl overflow-hidden  ">
                <img
                  src="https://t4.ftcdn.net/jpg/11/45/93/39/360_F_1145933918_BB7bacEKG2gIVFWemphKrbS54HvzBeBL.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Second Image Column */}
            <div className="flex flex-col gap-6 ">
              <div className="  rounded-2xl h-36 flex items-center justify-center overflow-hidden ">
                <img
                  src="https://img.freepik.com/premium-photo/fried-french-fries-falling-from-top-bottom-blue-background_705203-26659.jpg?w=3600"
                  alt="Fries"
                  className="h-full md:w-52 object-cover rounded-2xl"
                />
              </div>

              <div
                className="relative rounded-2xl h-48  md:w-full w-52 flex left-20 md:left-0 items-center justify-center "
                style={{
                  backgroundImage:
                    "url('https://mir-s3-cdn-cf.behance.net/project_modules/hd/12858a32751817.56929eefe8431.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/045/910/794/small_2x/a-pizza-with-tomatoes-and-cheese-on-a-wooden-board-stock-png.png"
                  alt="Pizza"
                  className="md:h-48 h-32 md:w-72 w-48 object-cover absolute md:-bottom-8 "
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
