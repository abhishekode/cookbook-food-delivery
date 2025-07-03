import React from 'react';
import { BookOpen, ChefHat, Facebook, Play } from 'lucide-react';
import Burger from '../assists/burger.png'



const HeroSection: React.FC = () => {
  return (

    <section className="mx-auto flex flex-col md:flex-row rounded-b-3xl overflow-hidden font-['Open_Sans'] bg-[#f9f8f0]">
      
      
      {/* Left Panel */}
      <div className="bg-[#0f4d40] flex flex-col justify-center items-center p-8 md:p-12 md:w-1/3 relative ">
        <div className="w-full flex justify-between items-center mb-12">
          <h1 className="text-white font-merri text-3xl md:text-4xl leading-tight">
            CookBook<span className="text-[#f28c2b]">.</span>
          </h1>
          <button
            aria-label="Search"
            className="bg-white rounded-full w-10 h-10 flex justify-center items-center"
          >
           <ChefHat className="w-6 h-6 text-[#0f4d40]" />
          </button>
        </div>

        <img
          src={Burger}
          alt="Cheeseburger"
          className="mb-8"
          width="200"
          height="200"
        />

        <h2 className="text-white font-merri text-3xl md:text-4xl text-center leading-tight mb-4">
          Get your First <br /> Chef Job.
        </h2>

        <p className="text-white text-center text-sm md:text-base mb-8 max-w-xs">
          Your first step in the career <br /> path is to get a job.
        </p>

        <div className="flex space-x-4">
          <button className="bg-white text-[#0f4d40] font-semibold rounded-full px-6 py-3 flex items-center space-x-2 hover:bg-gray-100 transition">
            <i className="fas fa-pen-nib" />
            <span>Start Writing</span>
          </button>
          <button
            aria-label="Discord"
            className="bg-[#f28c2b] rounded-full w-12 h-12 flex justify-center items-center hover:bg-[#e07a1f] transition"
          >
            <Facebook className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* Middle Panel */}
      <div className="md:w-1/3 relative">
      
      
        <img
          src="https://storage.googleapis.com/a1aa/image/ea6fbed4-17ac-4eca-5b5f-1ee1bf488063.jpg"
          alt="People cooking"
          className="w-full h-full object-cover"
        />
       
        
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-white text-xs font-semibold px-2">
          
          <i className="fas fa-pause" />
          <div className="h-1 bg-[#f28c2b] rounded-full flex-grow mx-2" />
          <Play className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Right Panel */}
      <div className="bg-[#f9d94c] p-8 md:p-12 md:w-1/3 flex flex-col justify-center rounded-b-3xlounded-br-3xl">
        <nav className="flex justify-center space-x-6 mb-8 text-sm font-semibold text-[#1a1a1a]">
          <a href="#" className="hover:underline">
            Dinners
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Restaurants
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Food News
          </a>
        </nav>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/045/910/794/small_2x/a-pizza-with-tomatoes-and-cheese-on-a-wooden-board-stock-png.png"
          alt="Pizza"
          className="mx-auto mb-8"
          width="250"
          height="250"
        />

        <h2 className="font-merri text-3xl md:text-4xl text-center leading-tight mb-4 text-[#1a1a1a]">
          Cheese and <br />
          Spice on every <br />
          Slice.
        </h2>

        <p className="text-center text-sm md:text-base mb-8 text-[#1a1a1a]">
          Why bother when you can easily <br /> mix up a batch at home.
        </p>

        <button className="bg-white text-[#1a1a1a] font-semibold rounded-full px-6 py-3 flex items-center space-x-2 mx-auto hover:bg-gray-100 transition">
          <BookOpen className="w-6 h-6" />
          <span>Read Recipe</span>
        </button>
      </div>
    </section>      


  );
};

export default HeroSection;