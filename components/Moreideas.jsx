import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const recipeIdeas = [
  {
    id: 1,
    title: 'CHICKEN TIKKA MASALA',
    image: '/images/chicken-tikka.webp',
    link: '/recipes/chicken-tikka-masala'
  },
  {
    id: 2,
    title: 'VEGAN BACON',
    image: '/images/Bacony-Deviled.webp',
    link: '/recipes/vegan-bacon'
  },
  {
    id: 3,
    title: "COPYCAT MCDONALD'S BIG MAC SAUCE",
    image: '/images/copy-cat.webp',
    link: '/recipes/big-mac-sauce'
  },
  {
    id: 4,
    title: 'CROCK-POT BEEF ROAST',
    image: '/images/pot roast.webp',
    link: '/recipes/beef-roast'
  }
];

const MoreIdeas = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">MORE IDEAS</h2>
          <Link href="/recipes" className="text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipeIdeas.map((recipe) => (
            <Link href={recipe.link} key={recipe.id} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {recipe.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreIdeas;
