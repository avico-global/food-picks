import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const articles = [
  {
    id: 1,
    title: 'Essential Knife Skills Every Home Cook Should Know',
    image: '/images/knife-skills.webp',
    excerpt: 'Master the basic cutting techniques that will make your cooking faster, safer, and more enjoyable.',
    author: 'Chef Maria Rodriguez',
    readTime: '8 min read',
    date: 'Apr 15, 2024'
  },
  {
    id: 2,
    title: '10 Common Cooking Mistakes and How to Fix Them',
    image: '/images/cooking-mistakes.webp',
    excerpt: 'Learn about the most common cooking errors and get expert tips on how to avoid them.',
    author: 'James Chen',
    readTime: '12 min read',
    date: 'Apr 14, 2024'
  },
  {
    id: 3,
    title: 'The Science Behind Perfect Caramelization',
    image: '/images/caramelization.webp',
    excerpt: 'Understand the chemistry of caramelization and how to achieve perfect results every time.',
    author: 'Dr. Sarah Thompson',
    readTime: '10 min read',
    date: 'Apr 13, 2024'
  },
  // Add more articles as needed
];

export default function CookingTips() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cooking Tips & Techniques</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your culinary skills with expert tips, techniques, and kitchen wisdom
            from professional chefs and experienced home cooks.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Basics
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Advanced
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Professional
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
            Kitchen Hacks
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">{article.date}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 