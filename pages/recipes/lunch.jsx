import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const recipes = [
  {
    id: 1,
    title: 'Classic Club Sandwich',
    image: '/images/club-sandwich.webp',
    time: '15 mins',
    difficulty: 'Easy',
    rating: 4.7
  },
  {
    id: 2,
    title: 'Mediterranean Quinoa Bowl',
    image: '/images/quinoa-bowl.webp',
    time: '25 mins',
    difficulty: 'Easy',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Asian Chicken Salad',
    image: '/images/chicken-salad.webp',
    time: '20 mins',
    difficulty: 'Easy',
    rating: 4.6
  }
];

export default function Lunch() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Lunch Recipes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover delicious and satisfying lunch recipes perfect for work, school, or home.
            From quick sandwiches to healthy salads and warm bowls, find your next favorite lunch idea.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Quick & Easy
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Make Ahead
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Healthy
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Under 30 Minutes
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