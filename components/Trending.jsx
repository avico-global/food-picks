import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const trendingItems = [
  {
    id: 1,
    title: 'TENDER POT ROAST',
    image: '/images/pot roast.webp',
    link: '/recipes/tender-pot-roast'
  },
  {
    id: 2,
    title: 'CHOCOLATE MOUSSE',
    image: '/images/Chocolate-Mousse.webp',
    link: '/recipes/chocolate-mousse'
  },
  {
    id: 3,
    title: 'BACONY DEVILED EGGS',
    image: '/images/Bacony-Deviled.webp',
    link: '/recipes/bacony-deviled-eggs'
  },
  {
    id: 4,
    title: 'CARROT CAKE',
    image: '/images/carrot-cake.webp',
    link: '/recipes/carrot-cake'
  }
];

const Trending = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">TRENDING NOW</h2>
        <Link 
          href="/trending" 
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingItems.map((item) => (
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

export default Trending;
