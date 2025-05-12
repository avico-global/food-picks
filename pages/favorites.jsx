import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { recipes } from '../data/recipes';
import { useFavorites } from '../context/FavoritesContext';

const Navbar = dynamic(() => import('../components/Navbar'), {
  loading: () => <div className="h-[80px] bg-gray-100 animate-pulse" />,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const router = useRouter();
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('newest');
  const [view, setView] = React.useState('grid');
  const [filter, setFilter] = React.useState('all');

  let favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  // Filter
  if (filter !== 'all') {
    favoriteRecipes = favoriteRecipes.filter(r => r.cuisine === filter);
  }
  // Search
  if (search.trim()) {
    favoriteRecipes = favoriteRecipes.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));
  }
  // Sort
  if (sort === 'newest') {
    favoriteRecipes = favoriteRecipes.slice().reverse();
  } else if (sort === 'oldest') {
    favoriteRecipes = favoriteRecipes.slice();
  } else if (sort === 'az') {
    favoriteRecipes = favoriteRecipes.slice().sort((a, b) => a.title.localeCompare(b.title));
  }

  // Unique cuisines for filter dropdown
  const cuisines = Array.from(new Set(recipes.map(r => r.cuisine)));

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif' }}>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-black mb-1" style={{letterSpacing: 0}}>My Favorites</h1>
        <div className="text-lg text-gray-500 mb-8">All your saved recipes in one place</div>
        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex-1 flex items-center gap-2">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 pl-10 text-base focus:outline-none focus:ring-2 focus:ring-orange-200"
                placeholder="Search your saved recipes..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{fontFamily: 'inherit'}}
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </div>
            <button className="ml-2 p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100" title="Filter">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-7 7V19a1 1 0 01-1.447.894l-4-2A1 1 0 017 17v-5.293l-7-7A1 1 0 013 4z" /></svg>
            </button>
          </div>
          <select className="border border-gray-300 rounded-lg py-2 px-3 text-base" value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="border border-gray-300 rounded-lg py-2 px-3 text-base" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">A-Z</option>
          </select>
          <div className="flex gap-1 ml-2">
            <button className={`p-2 rounded-lg border ${view === 'grid' ? 'bg-orange-500 text-white' : 'bg-white text-gray-500 border-gray-300'}`} onClick={() => setView('grid')}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></button>
            <button className={`p-2 rounded-lg border ${view === 'list' ? 'bg-orange-500 text-white' : 'bg-white text-gray-500 border-gray-300'}`} onClick={() => setView('list')}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="3"/><rect x="4" y="10.5" width="16" height="3"/><rect x="4" y="16" width="16" height="3"/></svg></button>
          </div>
        </div>
        <div className="mb-4 text-gray-700 text-base font-medium">
          Showing {favoriteRecipes.length} {favoriteRecipes.length === 1 ? 'saved recipe' : 'saved recipes'}
        </div>
        {/* Recipes */}
        {favoriteRecipes.length === 0 ? (
          <div className="text-gray-400 text-center py-20 text-lg">No favorite recipes yet. Go save some delicious recipes!</div>
        ) : view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favoriteRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col relative group">
                <button
                  className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors"
                  onClick={() => toggleFavorite(recipe.id)}
                  aria-label="Remove from favorites"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                <div className="flex-1 flex flex-col">
                  <div className="font-bold text-lg text-gray-900 mb-1">{recipe.title}</div>
                  <div className="text-xs text-gray-500 mb-2">{recipe.cuisine}</div>
                  <button
                    className="mt-auto bg-orange-500 text-white rounded-xl py-2 font-semibold hover:bg-orange-600 transition"
                    onClick={() => router.push(`/recipes/${recipe.id}`)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {favoriteRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-md p-4 flex items-center relative group">
                <button
                  className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors"
                  onClick={() => toggleFavorite(recipe.id)}
                  aria-label="Remove from favorites"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img src={recipe.image} alt={recipe.title} className="w-24 h-24 object-cover rounded-xl mr-6" />
                <div className="flex-1 flex flex-col">
                  <div className="font-bold text-lg text-gray-900 mb-1">{recipe.title}</div>
                  <div className="text-xs text-gray-500 mb-2">{recipe.cuisine}</div>
                  <button
                    className="mt-auto bg-orange-500 text-white rounded-xl py-2 px-4 font-semibold hover:bg-orange-600 transition w-max"
                    onClick={() => router.push(`/recipes/${recipe.id}`)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage; 