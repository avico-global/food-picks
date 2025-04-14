import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const breakfastRecipes = [
  {
    id: 1,
    title: 'Classic French Toast',
    image: '/images/breakfast-brunch.webp',
    time: '20 mins',
    difficulty: 'Easy',
    rating: 4.8,
    category: 'Quick & Easy'
  },
  {
    id: 2,
    title: 'Eggs Benedict',
    image: '/images/egg.webp',
    time: '30 mins',
    difficulty: 'Medium',
    rating: 4.7,
    category: 'Weekend Brunch'
  },
  // Add more recipes as needed
];

export default function BreakfastBrunch() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Image */}
      <div className="w-full h-[600px] relative">
        <img
          src="/images/recipy-1.webp"
          alt="Scrambled eggs with herbs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="max-w-7xl mx-auto w-full px-4 py-12">
        <h1 className="text-[42px] font-bold tracking-wider text-gray-900 uppercase mb-6">
          BREAKFAST & BRUNCH RECIPES
        </h1>
        <p className="text-xl text-gray-600 font-normal leading-relaxed max-w-3xl">
          No morning is complete without a good meal, and we have all the wake up-worthy breakfast recipes to start your day off right.
        </p>
      </div>

      {/* Featured Section */}
      <div className="relative w-full h-[600px] mb-8">
        <img
          src="/images/recipy-2.webp"
          alt="Featured breakfast recipes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-12 bg-gradient-to-r from-black/50 to-transparent">
          <div className="max-w-2xl">
            <h2 className="text-white text-6xl font-bold leading-tight mb-8">
              TOP 100 BREAKFAST & BRUNCH RECIPES
            </h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-medium rounded">
              SEE THEM ALL
            </button>
          </div>
        </div>
      </div>

      {/* The Classics Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">THE CLASSICS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Breakfast Essentials Card */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/images/classic-3.webp"
              alt="Breakfast essentials"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white text-sm font-medium mb-2 block">COLLECTION</span>
                <h3 className="text-white text-2xl font-bold">27 BREAKFAST ESSENTIALS</h3>
              </div>
            </div>
          </div>

          {/* Eggs Card */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/images/classic-2.webp"
              alt="Eggs benedict with hollandaise sauce"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white text-sm font-medium mb-2 block">COLLECTION</span>
                <h3 className="text-white text-2xl font-bold">EGGS FOR BREAKFAST: 59 WAYS</h3>
              </div>
            </div>
          </div>

          {/* Pancake & Waffle Card */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/images/classic-1.webp"
              alt="Stack of waffles with blueberries"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white text-sm font-medium mb-2 block">COLLECTION</span>
                <h3 className="text-white text-2xl font-bold">48 TOP PANCAKE & WAFFLE RECIPES</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Section - Oat Milk */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full lg:w-2/3">
            <img
              src="/images/19-Oat-Milk_HERO.webp"
              alt="Different flavors of homemade oat milk in glass bottles"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/3">
            <span className="text-sm font-medium text-gray-600 mb-2 block">COLLECTION</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              HOW TO MAKE OAT MILK AT HOME
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Love a tall glass of oat milk—or a splash in your coffee—but can't stand paying a fortune for the industrial stuff? Here's a simple, three-ingredient recipe for this dairy-free alternative.
            </p>
          </div>
        </div>
      </div>

      {/* Try Something New Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">TRY SOMETHING NEW</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* No Eggs Breakfast Card */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/images/milk-cereal.webp"
              alt="Breakfast recipes with no eggs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white text-sm font-medium mb-2 block">COLLECTION</span>
                <h3 className="text-white text-2xl font-bold">BREAKFAST RECIPES WITH NO EGGS</h3>
              </div>
            </div>
          </div>

          {/* Rise and Shine Casseroles */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/images/totcasserole.webp"
              alt="Rise and shine casseroles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white text-sm font-medium mb-2 block">COLLECTION</span>
                <h3 className="text-white text-2xl font-bold">RISE-AND-SHINE CASSEROLES</h3>
              </div>
            </div>
          </div>

          {/* International Breakfast */}
          <div className="relative h-[400px] rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/images/international-eats.webp"
              alt="International breakfast ideas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-white text-sm font-medium mb-2 block">COLLECTION</span>
                <h3 className="text-white text-2xl font-bold">INTERNATIONAL BREAKFAST IDEAS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Section - State Recipes */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full lg:w-2/3">
            <img
              src="/images/smoked-salmon.webp"
              alt="Smoked salmon breakfast bites"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/3">
            <span className="text-sm font-medium text-gray-600 mb-2 block">COLLECTION</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              THE TOP BREAKFAST RECIPE IN EVERY STATE
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Start your day with iconic recipes from Alabama to Wyoming.
            </p>
          </div>
        </div>
      </div>

      {/* Something Sweet Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">SOMETHING SWEET</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Granola Card */}
          <div className="group cursor-pointer">
            <div className="relative h-[280px] rounded-lg overflow-hidden mb-4">
              <img
                src="/images/granola.webp"
                alt="Best granola recipes"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">BEST GRANOLA RECIPES</h3>
          </div>

          {/* Crepes Card */}
          <div className="group cursor-pointer">
            <div className="relative h-[280px] rounded-lg overflow-hidden mb-4">
              <img
                src="/images/crepes.webp"
                alt="Creative crepes"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">CREATIVE CREPES THAT'LL MAKE YOUR MORNING</h3>
          </div>

          {/* Monkey Bread Card */}
          <div className="group cursor-pointer">
            <div className="relative h-[280px] rounded-lg overflow-hidden mb-4">
              <img
                src="/images/money-bread.webp"
                alt="Monkey bread recipes"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">MONKEY BREAD FOR EVERY OCCASION</h3>
          </div>

          {/* French Toast Card */}
          <div className="group cursor-pointer">
            <div className="relative h-[280px] rounded-lg overflow-hidden mb-4">
              <img
                src="/images/french-toast.webp"
                alt="French toast recipes"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">FAVORITE FRENCH TOAST RECIPES</h3>
          </div>
        </div>
      </div>

      {/* Cold Brew Coffee Feature */}
      <div className="relative w-full h-[600px] mb-8">
        <img
          src="/images/cold-brew-coffee.webp"
          alt="Cold brew coffee with ice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-12 bg-gradient-to-r from-black/50 to-transparent">
          <div className="max-w-2xl">
            <h2 className="text-white text-6xl font-bold leading-tight mb-8">
              HOW TO MAKE COLD BREW COFFEE
            </h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-medium rounded">
              SEE THEM ALL
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 py-4 justify-center">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
              Quick & Easy
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
              Weekend Brunch
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
              Healthy Options
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
              Family Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakfastRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm">
                  {recipe.category}
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
      </main>

      <Footer />
    </div>
  );
} 