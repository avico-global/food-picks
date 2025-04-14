import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const editorsPicksContent = [
  {
    id: 1,
    type: 'recipe',
    title: 'Ultimate Beef Wellington',
    image: '/images/recipe6.jpg',
    time: '3 hours',
    difficulty: 'Hard',
    rating: 4.9,
    editorNote: 'A showstopping classic'
  },
  {
    id: 2,
    type: 'article',
    title: 'The Art of French Cooking',
    image: '/images/article6.jpg',
    category: 'Cooking Guides',
    readTime: '12 min read',
    editorNote: 'Must-read for enthusiasts'
  },
  {
    id: 3,
    type: 'recipe',
    title: 'Traditional Japanese Ramen',
    image: '/images/recipe7.jpg',
    time: '2.5 hours',
    difficulty: 'Medium',
    rating: 4.8,
    editorNote: 'Authentic flavors'
  },
  {
    id: 4,
    type: 'article',
    title: 'Farm to Table Movement',
    image: '/images/article7.jpg',
    category: 'Food Culture',
    readTime: '9 min read',
    editorNote: 'Inspiring story'
  },
  {
    id: 5,
    type: 'recipe',
    title: 'Sourdough Bread Masterclass',
    image: '/images/recipe8.jpg',
    time: '24 hours',
    difficulty: 'Expert',
    rating: 4.9,
    editorNote: 'Worth the effort'
  }
];

export default function EditorsPicks() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Editor's Picks</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully curated selections from our food editors. These exceptional recipes and articles represent the best in culinary excellence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editorsPicksContent.map((content) => (
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
                  {content.editorNote}
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