import React from 'react';
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-green-700 mb-4">CookBook</div>
            <p className="text-gray-600 text-sm">
              Enjoy your live meal with
              <br />
              cook book
            </p>
          </div>
          
          {/* Visit us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Visit us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Our Restaurants</li>
              <li>Career Acceptance</li>
              <li>News</li>
              <li>Opens at July - 2024</li>
            </ul>
          </div>
          
          {/* Know more */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Know more</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Gift cards</li>
              <li>Restaurants</li>
              <li>Countries</li>
              <li>Burger Eat</li>
              <li>Chicken Recipe</li>
            </ul>
          </div>
          
          {/* Help center */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Help center</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>FAQs</li>
              <li>payments and</li>
              <li>other charges</li>
              <li>Quick Contact</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        
        {/* Social Profiles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <div className="bg-green-700 p-2 rounded-lg">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Youtube className="h-5 w-5 text-white" />
                </div>
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                   alt="Food 1" className="w-16 h-16 object-cover rounded-full" />
              <img src="https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                   alt="Food 2" className="w-16 h-16 object-cover rounded-full" />
              <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                   alt="Food 3" className="w-16 h-16 object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;