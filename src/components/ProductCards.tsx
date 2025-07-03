import React from 'react';
import MenuCard from './MenuSection';

const productData = [
  {
    title: 'Basket of wedges',
    price: '35',
    description: 'Crispy potato wedges with extra crunch.',
    ingredients: 'Potatoes, Butter, Olive oil, Ground paprika, Lemon zest, Salt.',
    comments: '36',
    image: 'https://storage.googleapis.com/a1aa/image/f7d40fbf-fa69-422c-47b5-0257eed98bf1.jpg',
  },
  {
    title: 'Classic Chicken Burger',
    price: '45',
    description: 'Juicy chicken burger with fresh veggies.',
    ingredients: 'Chicken, Lettuce, Tomato, Cheese, Pickles, Secret Sauce.',
    comments: '58',
    image: 'https://storage.googleapis.com/a1aa/image/ac157f92-c59c-419f-762a-9d7cbd856915.jpg',
  },
  {
    title: 'Sugar Free Delight',
    price: '29',
    description: 'Refreshing sugar-free beverage.',
    ingredients: 'Sparkling Water, Natural Flavors, Stevia, Citrus Extract.',
    comments: '22',
    image: 'https://storage.googleapis.com/a1aa/image/076ba64f-5287-461b-87be-f31b4b9e9e5b.jpg',
  },
  {
    title: 'Paneer Wrap',
    price: '39',
    description: 'Indian masala wrap with paneer cubes.',
    ingredients: 'Paneer, Onion, Tomato, Spices, Wheat wrap.',
    comments: '14',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  },
  {
    title: 'Mango Shake',
    price: '25',
    description: 'Chilled mango shake with a scoop of ice cream.',
    ingredients: 'Mango, Ice Cream, Sugar, Milk.',
    comments: '29',
    image: 'https://images.pexels.com/photos/1618912/pexels-photo-1618912.jpeg',
  },
];

const MenuSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#fffdf8] font-serif border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-500 mb-2" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Explore Our Delicious Menu
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">Delight your taste buds with every bite</p>
        </div>

        {/* Scrollable Card Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max">
            {productData.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
