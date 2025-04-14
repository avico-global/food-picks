import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const recipes = [
  {
    id: 1,
    title: 'Grilled Salmon with Herbs',
    image: '/images/grilled-salmon.webp',
    time: '25 mins',
    difficulty: 'Medium',
    rating: 4.9
  },
  {
    id: 2,
    title: 'Homemade Pizza',
    image: '/images/homemade-pizza.webp',
    time: '1 hour',
    difficulty: 'Medium',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Beef Stir Fry',
    image: '/images/beef-stir-fry.webp',
    time: '30 mins',
    difficulty: 'Easy',
    rating: 4.7
  }
];

export default function Dinner() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Dinner Recipes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover delicious dinner recipes that will satisfy the whole family.
            From quick weeknight meals to special occasion dishes, we've got you covered.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Quick & Easy
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Family Favorites
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            One-Pot Meals
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Healthy Options
          </button>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{recipe.time}</span>
                  <span>{recipe.difficulty}</span>
                  <span>★ {recipe.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 