import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mostViewedContent = [
  {
    id: 1,
    type: 'recipe',
    title: 'Classic Chocolate Chip Cookies',
    image: '/images/Chocolate-Mousse.webp',
    time: '30 mins',
    difficulty: 'Easy',
    rating: 4.9,
    views: '500K'
  },
  {
    id: 2,
    type: 'article',
    title: '5 Secret Tips from Professional Chefs',
    image: '/images/chicken-tikka.webp',
    category: 'Cooking Tips',
    readTime: '7 min read',
    views: '450K'
  },
  {
    id: 3,
    type: 'recipe',
    title: 'Perfect Homemade Pizza',
    image: '/images/burger.png',
    time: '45 mins',
    difficulty: 'Medium',
    rating: 4.8,
    views: '400K'
  },
  {
    id: 4,
    type: 'article',
    title: 'Essential Kitchen Tools Guide',
    image: '/images/collection-pic.webp',
    category: 'Kitchen Guides',
    readTime: '10 min read',
    views: '380K'
  },
  {
    id: 5,
    type: 'recipe',
    title: 'Creamy Mac and Cheese',
    image: '/images/carrot-cake.webp',
    time: '25 mins',
    difficulty: 'Easy',
    rating: 4.7,
    views: '350K'
  }
];

export default function MostViewed() {
  const [imageError, setImageError] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageError = (id) => {
    setImageError(prev => ({
      ...prev,
      [id]: true
    }));
  };

  if (!isMounted) {
    return (
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Most Viewed</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular recipes and articles of all time. Discover what millions of food lovers are reading and cooking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mostViewedContent.map((content) => (
              <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Loading...</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
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

  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Most Viewed</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular recipes and articles of all time. Discover what millions of food lovers are reading and cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mostViewedContent.map((content) => (
            <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  priority={content.id <= 3}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(content.id)}
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full text-sm">
                  {content.views} views
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