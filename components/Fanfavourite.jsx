import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { recipes } from '../data/recipes';

const FanFavorite = () => {
  // Use the first 9 recipes
  const fanFavorites = recipes.slice(0, 9);

  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight">FAN FAVORITES</h2>
        <Link href="/recipes" className="text-orange-500 font-semibold text-lg hover:underline flex items-center">
          View All <span className="ml-1">&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {fanFavorites.map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="group">
            <div className="relative h-56 overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={recipe.id <= 4}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">{recipe.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FanFavorite;
