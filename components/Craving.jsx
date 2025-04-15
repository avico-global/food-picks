import React from 'react';
import Image from 'next/image';

const cravingData = [
  {
    id: 1,
    title: 'Pineapple Chicken Salad',
    description: 'A refreshing and healthy salad with pineapple and peanuts!',
    image: '/images/pineapple-chicken-salad-peanut.webp',
    type: 'SALAD'
  },
  {
    id: 2,
    title: 'Delicious Pastry',
    description: 'Sweet and flaky pastries that melt in your mouth!',
    image: '/images/pastery.webp',
    type: 'DESSERT'
  },
  {
    id: 3,
    title: 'Egg Delights',
    description: 'Perfectly cooked eggs for any time of the day!',
    image: '/images/egg.webp',
    type: 'BREAKFAST'
  }
];

const Craving = () => {
  return (
    <section className="py-16 px-4 max-w-[1440px] mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">WHAT WE'RE CRAVING</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cravingData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-gray-800">{item.type}</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Explore Recipes
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Craving;
