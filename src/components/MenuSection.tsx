// MenuCard.tsx
import React from 'react';

interface MenuItemProps {
  title: string;
  price: string;
  description: string;
  ingredients: string;
  comments: string;
  image: string;
}

const MenuCard: React.FC<{ item: MenuItemProps }> = ({ item }) => {
  return (
    <div className="min-w-[300px] max-w-xs bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 border-b-2 border-gray-200">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900 truncate" title={item.title}>{item.title}</h3>
          <span className="text-orange-500 font-semibold text-base">₹{item.price}</span>
        </div>
        <p className="text-sm text-gray-600 italic">{item.description}</p>
        <p className="text-xs text-gray-500 line-clamp-3">{item.ingredients}</p>
        <div className="flex items-center justify-between">
          <button className="text-orange-600 text-sm font-medium hover:underline">Read More +</button>
          <span className="text-xs text-gray-500">💬 {item.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
