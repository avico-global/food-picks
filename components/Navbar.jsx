import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFavorites } from '../context/FavoritesContext';
import { recipes } from '../data/recipes';

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-transparent text-yellow-500 font-bold">{part}</mark> : part
  );
}

export default function Navbar() {
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { favorites } = useFavorites();
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (search.trim() === '') {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    const q = search.trim().toLowerCase();
    const filtered = recipes.filter(r =>
      r.title.toLowerCase().includes(q) ||
      (r.description && r.description.toLowerCase().includes(q)) ||
      (r.tags && r.tags.some(tag => tag.toLowerCase().includes(q)))
    );
    setResults(filtered);
    setShowDropdown(true);
  }, [search]);

  // Close search dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCuisineClick = (cuisine) => {
    router.push({ pathname: '/recipes', query: { cuisine } })
  }

  return (
    <header className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            Food<span className="text-yellow-400">.</span>
          </a>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 ml-6 mr-4">
          <button onClick={() => handleCuisineClick('american')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">AMERICAN</button>
          <button onClick={() => handleCuisineClick('asian')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">ASIAN</button>
          <button onClick={() => handleCuisineClick('brazilian')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">BRAZILIAN</button>
          <button onClick={() => handleCuisineClick('british')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">BRITISH</button>
          <button onClick={() => handleCuisineClick('caribbean')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">CARIBBEAN</button>
          <button onClick={() => handleCuisineClick('chinese')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">CHINESE</button>
          <button onClick={() => handleCuisineClick('ethiopian')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">ETHIOPIAN</button>
          <button onClick={() => handleCuisineClick('french')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">FRENCH</button>
          <button onClick={() => handleCuisineClick('german')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">GERMAN</button>
          <button onClick={() => handleCuisineClick('greek')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">GREEK</button>
          <button onClick={() => handleCuisineClick('indian')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">INDIAN</button>
          <button onClick={() => handleCuisineClick('italian')} className="font-medium text-sm text-white hover:text-yellow-400 tracking-wide uppercase bg-transparent">ITALIAN</button>
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-3">
          {/* Search Icon */}
          <div className="relative">
            <button className="hover:text-yellow-400" onClick={() => { setSearchOpen((v) => !v); setShowDropdown(false); setSearch(''); }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {searchOpen && (
              <div className="absolute right-0 mt-2 w-96 bg-white text-black rounded-2xl shadow-2xl z-50 p-2" ref={dropdownRef} style={{ fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif' }}>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search recipes..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-orange-200 text-lg mb-2"
                  autoFocus
                  onFocus={() => search && setShowDropdown(true)}
                />
                {showDropdown && (
                  <div>
                    {results.length === 0 ? (
                      <div className="p-6 text-center text-gray-500 text-lg">Recipe not found</div>
                    ) : (
                      results.map(recipe => (
                        <div
                          key={recipe.id}
                          className="flex gap-4 items-start p-3 rounded-xl hover:bg-gray-100 cursor-pointer"
                          onClick={() => { setShowDropdown(false); setSearchOpen(false); setSearch(''); router.push(`/recipes/${recipe.id}`); }}
                        >
                          <img src={recipe.image} alt={recipe.title} className="w-16 h-16 object-cover rounded-xl border" />
                          <div className="flex-1">
                            <div className="font-bold text-lg mb-1">{highlightMatch(recipe.title, search)}</div>
                            <div className="text-gray-500 text-sm mb-1">
                              {recipe.cuisine} &bull; {recipe.category || recipe.mealType}
                            </div>
                            <div className="text-gray-500 text-base mb-1">
                              {highlightMatch(recipe.description || '', search)}
                            </div>
                            <div className="flex gap-2 flex-wrap mb-1">
                              {recipe.tags && recipe.tags.map((tag, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                              ))}
                            </div>
                            <div className="text-xs text-gray-400 italic mt-1">Matches in: title, description</div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* User Icon */}
          <button className="hover:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          {/* Favorite Icon */}
          <button
            className="relative hover:text-yellow-400"
            aria-label="Favorites"
            onClick={() => router.push('/favorites')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={favorites.length > 0 ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}