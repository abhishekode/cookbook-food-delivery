import React from 'react';
import { Star, Heart } from 'lucide-react';

const ProductCards: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Basket of wedges",
      price: "$5",
      description: "Crispy potato wedges with extra crunch.",
      details: "Potatoes, Butter, Olive oil, Onions powder, Garlic powder, Paprika for seasoning.",
      rating: 4.5,
      image: "https://images.pexels.com/photos/2878725/pexels-photo-2878725.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Chicken Burgers",
      price: "$8",
      description: "Chicken spicy seasoned meat with Homemade Chicken Burger with corn.",
      details: "Read More",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Sugar Free",
      price: "",
      description: "One of the online donut list specialist ingredients",
      details: "Read More",
      rating: 4.2,
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      badge: "satisfy you"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                {product.badge && (
                  <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  {product.price && (
                    <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  
                  <button className="text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors">
                    {product.details}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;