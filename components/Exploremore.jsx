import React from 'react';
import Image from 'next/image';

const Exploremore = () => {
  const categories = [
    {
      title: 'COMFORT FOOD CLASSICS',
      image: '/images/comfort-picks.webp',
      link: '/comfort-food'
    },
    {
      title: 'INTERNATIONAL EATS',
      image: '/images/international-eats.webp',
      link: '/international'
    },
    {
      title: 'BREAKFAST & BRUNCH',
      image: '/images/breakfast-brunch.webp',
      link: '/breakfast'
    },
    {
      title: 'COMMUNITY PICKS',
      image: '/images/community-picks.webp',
      link: '/community'
    },
    {
      title: 'QUICK & EASY',
      image: '/images/quick and easy.webp',
      link: '/quick-easy'
    },
    {
      title: 'COPYCAT RECIPES',
      image: '/images/copycat.webp',
      link: '/copycat'
    }
  ];

  return (
    <section className="w-full">
      <h2 className="text-4xl font-bold text-center mb-12">EXPLORE MORE</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <a 
            key={index} 
            href={category.link}
            className="flex flex-col items-center group"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={category.image}
                alt={category.title}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-sm font-medium tracking-wide">
              {category.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Exploremore;
