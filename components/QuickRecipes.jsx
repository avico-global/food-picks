import React, { useState } from 'react';
import Image from 'next/image';
import { recipes } from '../data/recipes';
import Link from 'next/link';

const CARDS_PER_VIEW = 4;

const QuickRecipes = () => {
  const [start, setStart] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const end = start + CARDS_PER_VIEW;
  const canGoBack = start > 0;
  const canGoForward = end < recipes.length;

  const handlePrev = () => {
    if (canGoBack) setStart(start - CARDS_PER_VIEW);
  };
  const handleNext = () => {
    if (canGoForward) setStart(start + CARDS_PER_VIEW);
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold tracking-tight">QUICK RECIPES</h2>
      </div>
      <div className="relative">
        <div className="flex gap-8 overflow-hidden">
          {recipes.slice(start, end).map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md flex flex-col w-64 min-w-0"
              onMouseEnter={() => setHoveredCard(recipe.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 w-full rounded-t-2xl overflow-hidden cursor-pointer"
                onClick={() => recipe.youtubeShort && setModalVideo(recipe.youtubeShort)}
              >
                {hoveredCard === recipe.id && recipe.youtubeShort ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${recipe.youtubeShort}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${recipe.youtubeShort}`}
                    title={recipe.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                )}
                {recipe.youtubeShort && (
                  <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-2 shadow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 16.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                <Link href={`/recipes/${recipe.id}`} className="mt-auto text-orange-500 font-semibold hover:underline">View Recipe &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          onClick={handlePrev}
          disabled={!canGoBack}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10 ${!canGoBack ? 'opacity-30 cursor-not-allowed' : 'hover:bg-orange-50'}`}
          aria-label="Previous recipes"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={handleNext}
          disabled={!canGoForward}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10 ${!canGoForward ? 'opacity-30 cursor-not-allowed' : 'hover:bg-orange-50'}`}
          aria-label="Next recipes"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      {/* Modal for fullscreen video */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalVideo(null)}>
          <div className="relative w-full max-w-2xl aspect-video bg-black" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&controls=1&modestbranding=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
              aria-label="Close video"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickRecipes; 