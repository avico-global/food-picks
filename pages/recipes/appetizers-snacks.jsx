import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const recipes = [
  {
    id: 1,
    title: 'Spinach Artichoke Dip',
    image: '/images/spinach-dip.webp',
    time: '30 mins',
    difficulty: 'Easy',
    rating: 4.9
  },
  {
    id: 2,
    title: 'Crispy Buffalo Wings',
    image: '/images/buffalo-wings.webp',
    time: '45 mins',
    difficulty: 'Medium',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Bruschetta',
    image: '/images/bruschetta.webp',
    time: '20 mins',
    difficulty: 'Easy',
    rating: 4.7
  }
];

export default function AppetizersSnacks() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Appetizers & Snacks</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your party right with our collection of crowd-pleasing appetizers and snacks.
            From quick dips to elegant hors d'oeuvres, find the perfect recipe for any occasion.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Party Favorites
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Make Ahead
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Quick & Easy
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Vegetarian
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