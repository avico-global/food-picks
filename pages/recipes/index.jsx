import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const recipeCategories = [
  {
    title: 'Breakfast & Brunch',
    href: '/recipes/breakfast-brunch',
    image: '/images/breakfast-brunch.webp',
    description: 'Start your day with delicious breakfast and brunch recipes'
  },
  {
    title: 'Lunch',
    href: '/recipes/lunch',
    image: '/images/lunch.webp',
    description: 'Quick and satisfying lunch recipes'
  },
  {
    title: 'Appetizers & Snacks',
    href: '/recipes/appetizers-snacks',
    image: '/images/appetizers.webp',
    description: 'Perfect party starters and snack ideas'
  },
  {
    title: 'Dinner',
    href: '/recipes/dinner',
    image: '/images/dinner.webp',
    description: 'Delicious dinner recipes for any night of the week'
  },
  {
    title: 'Dessert',
    href: '/recipes/dessert',
    image: '/images/dessert.webp',
    description: 'Sweet treats and dessert recipes'
  },
  {
    title: 'Drink & Cocktail',
    href: '/recipes/drinks',
    image: '/images/drinks.webp',
    description: 'Refreshing drinks and cocktail recipes'
  },
  {
    title: 'Side Dish',
    href: '/recipes/side-dishes',
    image: '/images/sides.webp',
    description: 'Perfect side dish recipes to complement any meal'
  },
  {
    title: 'Grilling & BBQ',
    href: '/recipes/grilling',
    image: '/images/grilling.webp',
    description: 'Outdoor cooking and BBQ recipes'
  },
  {
    title: 'Microwave',
    href: '/recipes/microwave',
    image: '/images/microwave.webp',
    description: 'Quick and easy microwave recipes'
  },
  {
    title: 'Quick & Easy',
    href: '/recipes/quick-easy',
    image: '/images/quick-easy.webp',
    description: 'Simple recipes ready in 30 minutes or less'
  },
  {
    title: 'Slow-Cooker',
    href: '/recipes/slow-cooker',
    image: '/images/slow-cooker.webp',
    description: 'Set it and forget it slow cooker recipes'
  },
  {
    title: 'Air Fryer',
    href: '/recipes/air-fryer',
    image: '/images/air-fryer.webp',
    description: 'Crispy and healthy air fryer recipes'
  }
];

export default function RecipesPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">All Recipe Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeCategories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 