import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

const ArnoldSection: React.FC = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-12 py-10  font-roboto flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start">

        {/* Left Card */}
        <div className="relative bg-[#fbdc4a] rounded-2xl p-6 md:p-8 w-full max-w-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base md:text-lg font-extrabold text-black">Chicken Burgers</h2>
            <div className="w-16 md:w-20 h-[2px] bg-black mx-2"></div>
            <span className="text-base md:text-lg font-semibold">18</span>
          </div>

          <img
            src="https://storage.googleapis.com/a1aa/image/c98eba60-a3e0-414d-1b6c-dd3157a33582.jpg"
            alt="Chicken Burger"
            className="mx-auto rounded-xl w-full max-w-[260px] object-cover"
          />

          <p className="mt-6 text-black text-base md:text-lg font-semibold max-w-[220px] leading-snug font-playfair">
            Crispy potato wedges with extra crunch.
          </p>

          <button
            aria-label="More Details"
            className="absolute bottom-6 right-6 bg-white w-10 h-10 rounded-full flex items-center justify-center text-xl text-black shadow-md hover:shadow-lg transition"
          >
            <ArrowUp className="w-6 h-6 rotate-45" />
          </button>

          {/* Decorative Circles */}
          <div
            className="hidden md:block absolute top-1/2 -left-10 w-20 h-20 bg-[#0f4f44] rounded-full"
            aria-hidden
          />
          <div
            className="hidden md:block absolute top-1/2 -right-10 w-20 h-20 bg-[#f15a29] rounded-full"
            aria-hidden
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between w-full max-w-3xl p-4 sm:p-6 md:p-10 rounded-2xl">
          {/* Headline Section */}
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Snacks crafted for <br />
              <span>taste, &</span>
              <span className="text-[#a0522d]"> cravings</span>
            </h1>

            <p
              className="text-sm md:text-xl text-black max-w-lg mb-8"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Beef patty, Cheddar cheese, Lettuce, Tomato, Pickles,
              <br className="hidden sm:block" /> Onion, Secret sauce, Toasted bun.
            </p>

            <div className="flex gap-4 items-center flex-wrap">
              <button className="bg-[#0f4f44] text-white px-6 py-2 text-sm md:text-base font-semibold rounded-full hover:bg-[#0d3d36] transition h-12">
                Taste the Magic
              </button>
              <button
                aria-label="Burger Icon"
                className="w-12 h-12 bg-[#f15a29] text-white text-lg flex items-center justify-center rounded-full hover:bg-[#c04a22] transition"
              >
                <Sparkles />
              </button>
            </div>
          </div>

          {/* Chef Profile Section */}
          <div className="flex flex-col justify-center mt-10 bg-white rounded-2xl p-6 md:p-8 relative w-full">
            <h1
              className="text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Arnold Classic
            </h1>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-20 sm:w-36 h-[2px] bg-black"></div>
              <h2 className="text-lg md:text-xl font-serif text-black">Chef</h2>
            </div>

            <p className="text-xs sm:text-sm text-black leading-relaxed mb-4">
              Our master chef passionately <br className='md:hidden'/>crafts fresh, flavorful,
               and <br className=" md:block" /> dishes to delight every palate.
            </p>

            {/* Chef Image */}
            <div className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 rounded-full overflow-hidden absolute  right-20 md:right-20 z-10 translate-x-2/3 bottom-6 ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/052/793/073/non_2x/chef-logo-design-vector.jpg"
                alt="Chef"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Signature */}
            <span
              className="absolute bottom-6 left-40 translate-x-2/3 text-[#f15a29] font-semibold text-2xl sm:text-3xl md:text-4xl -rotate-6 italic select-none z-10 md:bottom-8 md:left-2/3"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Arnold
            </span>

            {/* Decorative Icon */}
            <img
              src="https://i.pinimg.com/564x/74/37/3e/74373e9595c430d19eb3eac5ec0b6074.jpg"
              alt="leaf"
              className="w-14 sm:w-16 h-14 sm:h-16 absolute right-4 md:-right-12 md:top-5 md:w-20 md:h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArnoldSection;
