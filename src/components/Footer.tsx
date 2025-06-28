import React from "react";

const socialIcons = [
  { name: "Instagram", bg: "bg-green-600" },
  { name: "Youtube", bg: "bg-orange-500" },
  { name: "Facebook", bg: "bg-yellow-500" },
  { name: "Linkedin", bg: "bg-gray-500" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-green-700 mb-4">CookBook<span className="text-orange-500">.</span></h2>
            <p className="text-gray-600 text-base sm:text-lg font-poppins font-bold">
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
              <h3 className="font-serif font-bold text-gray-900 mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Images */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Social Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <h4 className="font-bold text-gray-900 font-serif">Social Profiles</h4>
                <div className="h-[2px] w-24 bg-gray-600 rounded-sm"></div>
                <span className="text-gray-800 text-lg">4</span>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialIcons.map(({ name, bg }, index) => (
                  <div
                    key={index}
                    className={`${bg} ${index % 2 === 0 ? 'rotate-[-10deg] text-white' : 'rotate-[10deg] text-gray-900'} 
                    w-28 sm:w-32 h-12 rounded-[50%] flex items-center justify-center 
                     text-sm sm:text-base font-poppins hover:scale-105 transition-all duration-300 ease-in-out`}
                  >
                    <button>{name}</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Images */}
            <div className="flex justify-end items-end gap-4 w-full lg:w-auto ">
              <img
                src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Food 1"
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full translate-y-2 ring-2 ring-green-600"
              />
              <img
                src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Food 2"
                className="w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-full -translate-y-2 ring-2 ring-green-600"
              />
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Food 3"
                className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full translate-y-2 ring-2 ring-green-600"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
