import React from 'react';

const productData = [
  {
    title: 'Basket of wedges',
    price: '35',
    description: 'Crispy potato wedges with extra crunch.',
    ingredients: 'Potatoes, Butter, Olive oil, Ground paprika, Lemon zest, Salt & Pepper for seasoning.',
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
    description: 'Refreshing sugar-free beverage.try this ',
    ingredients: 'Sparkling Water, Natural Flavors, Stevia, Citrus Extract.',
    comments: '22',
    image: 'https://storage.googleapis.com/a1aa/image/076ba64f-5287-461b-87be-f31b4b9e9e5b.jpg',
  },
];

const ProductCards: React.FC = () => {
  return (
    <section className="py-16 px-4 font-[Georgia]">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {productData.map((product, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-4">
            {/* Image */}
            <div className="relative w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 object-cover rounded-full border-2 border-[#b36a1e]"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-1">
                <h1 className="font-sans font-extrabold text-black text-lg leading-tight">
                  {product.title}
                </h1>
                <div className="border-t border-black flex-1" />
                <span className="font-sans font-bold text-black text-lg">{product.price}</span>
              </div>

              <h2 className="font-serif text-black text-xl leading-snug mb-1">
                {product.description}
              </h2>

              <p className="font-serif text-black text-sm leading-relaxed mb-2">
                {product.ingredients}
              </p>

              <div className="flex items-center gap-3 text-black font-sans font-bold text-sm">
                <button className="flex items-center gap-1 hover:underline">
                  Read More <span className="text-lg font-extrabold">+</span>
                </button>
                <div className="border-t border-black w-12" />
                <span>{product.comments}</span>
                <i className="far fa-comment text-base" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
