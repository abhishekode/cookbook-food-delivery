import React from "react";

const socialIcons = [
  { name: "Instagram", bg: "bg-green-700" },
  { name: "Youtube", bg: "bg-orange-500" },
  { name: "Facebook", bg: "bg-yellow-500" },
  { name: "Linkedin", bg: "bg-gray-500" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8  w-max-content md:max-w-[90rem]">
      <div className="mx-auto space-y-8 ">
        {/* Main Grid */}
        <div className="grid grid-cols-2   sm:grid-cols-2 md:grid-cols-4 gap-16 md:ml-32 ml-5">
          {/* Brand */}
          <div className=" flex-col ">
            <h2 className=" text-3xl sm:text-4xl font-bold text-green-700 mb-4 md:-ml-10 md:text-5xl font-[poppins] ">CookBook<span className="text-orange-500">.</span></h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-2xl  md:-ml-6 font-[poppins]">
              Enjoy your live meal with <br />
              cook book
            </p>
          </div>
  
          {/* Section Mapper */}
          {[
            {
              title: "Visit us",
              items: ["Our Restaurants", "Career Acceptance", "News", "Opens at July - 2024"],
            },
            {
              title: "Know more",
              items: ["Gift cards", "Restaurants", "Countries", "Burger Eat", "Chicken Recipe"],
            },
            {
              title: "Help center",
              items: ["FAQs", "payments and", "other charges", "Quick Contact", "Privacy policy"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="font-[poppins] font-bold text-gray-900 mb-5 text-lg md:text-3xl">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700 md:text-lg font-sans">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
           
        {/* Social & Images */}
        <div className="pt-8 md:ml-16 border-gray-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Social Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center flex-wrap gap-2 mb-10 ">
                <h4 className="font-bold text-gray-900 text-3xl font-serif">Social Profiles</h4>
                <div className="h-[2px] w-24 bg-gray-600 rounded-sm"/>
                <span className="text-gray-800 text-xl">4</span>
              </div>

              <div className="flex flex-wrap gap-4 ">
                {socialIcons.map(({ name, bg }, index) => (
                  <div
                    key={index}
                    className={`${bg} ${index % 2 === 0 ? 'rotate-[-10deg] text-white' : 'rotate-[10deg] text-gray-900'} 
                    w-28 sm:w-36 h-16 rounded-[50%] flex items-center justify-center 
                     text-sm sm:text-base font-[poppins] hover:scale-105 transition-all duration-300 ease-in-out  `}
                  >
                    <button>{name}</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Images */}
            <div className="flex justify-end items-end gap-3 w-full lg:w-auto md:mr-24 md:mt-10">
              <img
                src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Food 1"
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full md:translate-y-8 ring-2 ring-green-600 md:h-32 md:w-32"
              />
              <img
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Food 2"
                className="w-16 sm:w-24 h-16 sm:h-24 object-cover rounded-full -translate-y-8 ring-2 ring-green-600 md:h-32 md:w-32"
              />
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Food 3"
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full md:translate-y-8 ring-2 ring-green-600 md:h-32 md:w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
