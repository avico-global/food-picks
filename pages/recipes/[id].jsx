'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { recipes } from '../../data/recipes';
import { useFavorites } from '../../context/FavoritesContext';

const Navbar = dynamic(() => import('../../components/Navbar'), {
  loading: () => <div className="h-[80px] bg-gray-100 animate-pulse" />,
});

const Footer = dynamic(() => import('../../components/Footer'), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { favorites, toggleFavorite } = useFavorites();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (id) setSaved(favorites.includes(id));
  }, [id, favorites]);

  const handleSave = () => {
    toggleFavorite(id);
    setSaved(!saved);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!id) return null;

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Recipe not found</h1>
            <button
              onClick={() => router.push('/recipes')}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Back to Recipes
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif' }}>
      <Head>
        <title>{recipe.title} - Food Picks</title>
        <meta name="description" content={recipe.description} />
      </Head>
      <Navbar />
      <main className="flex-grow">
        {/* Top Section: Video + Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Video on the left */}
          <div className="w-full lg:w-5/12 rounded-3xl overflow-hidden flex lg:ml-6">
            <div className="w-full h-[420px]">
              <iframe
                src={`https://www.youtube.com/embed/${recipe.youtubeShort}`}
                title={recipe.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>
          {/* Info Card on the right */}
          <div className="w-full lg:w-7/12 flex flex-col justify-between">
            <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-2 justify-between">
              {/* Author and Published */}
              <div className="flex flex-row items-center gap-4 mb-1">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center text-base">M</div>
                  <div>
                    <div className="text-[11px] text-gray-500 font-semibold leading-tight">Recipe by</div>
                    <div className="text-sm font-semibold text-gray-800 leading-tight">Michael Brown</div>
                  </div>
                </div>
                <div className="border-l border-gray-200 h-6 mx-3"></div>
                <div>
                  <div className="text-[11px] text-gray-500 font-semibold leading-tight">Published</div>
                  <div className="text-sm font-semibold text-gray-800 leading-tight">Recently</div>
                </div>
              </div>
              {/* Title and Description */}
              <div className="flex-1 flex flex-col mb-4">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 leading-tight">{recipe.title}</h1>
                <p className="text-gray-600 mb-2 text-sm leading-snug">Detailed recipe for {recipe.title} with step-by-step instructions and fresh ingredients.</p>
                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-3 my-6">
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {recipe.views || "1.5M"}
                    </div>
                    <div className="text-sm text-gray-500">Views</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {recipe.likes || "100K"}
                    </div>
                    <div className="text-sm text-gray-500">Likes</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50 col-span-2 row-span-2 flex flex-col justify-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {recipe.ratings?.average || "4.5"}
                    </div>
                    <div className="text-sm text-gray-500">Score</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {recipe.difficulty || "Easy"}
                    </div>
                    <div className="text-sm text-gray-500">Difficulty</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-gray-50">
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {recipe.cookingTime} min
                    </div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-3 px-2 pb-1">
                <button
                  className={`flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-2xl py-2.5 font-semibold transition text-sm ${saved ? 'bg-green-100 text-green-700 border-green-300' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={handleSave}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {saved ? 'Saved!' : 'Save Recipe'}
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white rounded-2xl py-2.5 font-semibold hover:bg-orange-600 transition text-sm"
                  onClick={handlePrint}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
                  Print Recipe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-600 mb-8">{recipe.description}</p>

                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>

                {/* Share Section */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold mb-4">Share This Recipe</h2>
                  <div className="flex gap-4">
                    <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipeDetail; 