import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const articleCategories = [
  {
    title: 'Cooking Tips',
    href: '/articles/cooking-tips',
    image: '/images/cooking-tips.webp',
    description: 'Expert cooking tips and techniques to improve your kitchen skills'
  },
  {
    title: 'Kitchen Guides',
    href: '/articles/kitchen-guides',
    image: '/images/kitchen-guides.webp',
    description: 'Comprehensive guides for kitchen tools and equipment'
  },
  {
    title: 'Food News',
    href: '/articles/food-news',
    image: '/images/food-news.webp',
    description: 'Latest news and trends in the food industry'
  },
  {
    title: 'Restaurant Reviews',
    href: '/articles/restaurant-reviews',
    image: '/images/restaurant-reviews.webp',
    description: 'Reviews of restaurants and dining experiences'
  },
  {
    title: 'Chef Interviews',
    href: '/articles/chef-interviews',
    image: '/images/chef-interviews.webp',
    description: 'Exclusive interviews with renowned chefs'
  },
  {
    title: 'Food Culture',
    href: '/articles/food-culture',
    image: '/images/food-culture.webp',
    description: 'Exploring food traditions and cultures around the world'
  }
];

export default function ArticlesPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Food Articles & Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleCategories.map((category) => (
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