import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const trendingRecipes = [
  {
    id: 1,
    title: 'Air Fryer Chicken Wings',
    image: '/images/air-fryer-wings.webp',
    time: '35 mins',
    difficulty: 'Easy',
    rating: 4.9,
    views: '250K'
  },
  {
    id: 2,
    title: 'One-Pot Pasta Alfredo',
    image: '/images/pasta-alfredo.webp',
    time: '25 mins',
    difficulty: 'Easy',
    rating: 4.8,
    views: '180K'
  },
  {
    id: 3,
    title: 'Sheet Pan Chicken Fajitas',
    image: '/images/chicken-fajitas.webp',
    time: '30 mins',
    difficulty: 'Easy',
    rating: 4.7,
    views: '150K'
  }
];

const trendingArticles = [
  {
    id: 1,
    title: '10 Essential Kitchen Tools Every Home Cook Needs',
    image: '/images/kitchen-tools.webp',
    category: 'Kitchen Guides',
    readTime: '5 min read',
    views: '100K'
  },
  {
    id: 2,
    title: 'How to Meal Prep Like a Pro Chef',
    image: '/images/meal-prep.webp',
    category: 'Cooking Tips',
    readTime: '8 min read',
    views: '75K'
  },
  {
    id: 3,
    title: 'The Rise of Plant-Based Cooking',
    image: '/images/plant-based.webp',
    category: 'Food News',
    readTime: '6 min read',
    views: '60K'
  }
];

export default function Popular() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Trending Now</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what's hot in the culinary world. From our most-viewed recipes 
            to trending food articles, find out what everyone's cooking and reading.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Most Viewed
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Latest Trends
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Editor's Picks
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Seasonal Favorites
          </button>
        </div>

        {/* Trending Recipes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm">
                    {recipe.views} views
                  </div>
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
        </section>

        {/* Trending Articles Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm">
                    {article.views} views
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow-600 mb-2">{article.category}</div>
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <div className="text-sm text-gray-600">
                    {article.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 