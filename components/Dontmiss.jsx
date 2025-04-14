import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const dontMissItems = [
  {
    id: 1,
    title: 'GARLIC BUTTER SHRIMP',
    image: '/images/pot roast.webp',
    link: '/recipes/garlic-butter-shrimp'
  },
  {
    id: 2,
    title: 'AVOCADO TOAST',
    image: '/images/egg.webp',
    link: '/recipes/avocado-toast'
  },
  {
    id: 3,
    title: 'MEDITERRANEAN SALAD',
    image: '/images/pineapple-chicken-salad-peanut.webp',
    link: '/recipes/mediterranean-salad'
  },
  {
    id: 4,
    title: 'HOMEMADE PIZZA',
    image: '/images/pastery.webp',
    link: '/recipes/homemade-pizza'
  }
];

const Dontmiss = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">DON'T MISS</h2>
        <Link 
          href="/dont-miss" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dontMissItems.map((item) => (
          <Link key={item.id} href={item.link} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Dontmiss;
