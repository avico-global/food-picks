import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const latestTrendsContent = [
  {
    id: 1,
    type: 'article',
    title: 'The Rise of Plant-Based Cooking',
    image: '/images/article3.jpg',
    category: 'Food Trends',
    readTime: '8 min read',
    trending: 'Hot Topic'
  },
  {
    id: 2,
    type: 'recipe',
    title: 'Air Fryer Korean Fried Chicken',
    image: '/images/recipe4.jpg',
    time: '40 mins',
    difficulty: 'Medium',
    rating: 4.9,
    trending: 'Trending Now'
  },
  {
    id: 3,
    type: 'article',
    title: 'Sustainable Cooking: Zero Waste Tips',
    image: '/images/article4.jpg',
    category: 'Sustainability',
    readTime: '6 min read',
    trending: 'Growing Trend'
  },
  {
    id: 4,
    type: 'recipe',
    title: 'TikTok Famous Baked Feta Pasta',
    image: '/images/recipe5.jpg',
    time: '35 mins',
    difficulty: 'Easy',
    rating: 4.7,
    trending: 'Viral Recipe'
  },
  {
    id: 5,
    type: 'article',
    title: 'Global Food Trends 2024',
    image: '/images/article5.jpg',
    category: 'Food News',
    readTime: '10 min read',
    trending: 'New'
  }
];

export default function LatestTrends() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Latest Trends</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the newest food trends, viral recipes, and emerging culinary movements.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestTrendsContent.map((content) => (
            <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm">
                  {content.trending}
                </div>
              </div>
              <div className="p-6">
                {content.type === 'article' && (
                  <div className="text-sm text-yellow-600 mb-2">{content.category}</div>
                )}
                <h2 className="text-xl font-bold mb-2">{content.title}</h2>
                {content.type === 'recipe' ? (
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{content.time}</span>
                    <span>{content.difficulty}</span>
                    <span>★ {content.rating}</span>
                  </div>
                ) : (
                  <div className="text-sm text-gray-600">
                    {content.readTime}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 