import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recipes as recipesData } from "../../data/recipes";
import Image from "next/image";
import FilterSidebar from "@/components/FilterSidebar";
import { useFavorites } from "../../context/FavoritesContext";

const getUnique = (arr, key) => Array.from(new Set(arr.map((item) => item[key]).filter(Boolean)));

export default function RecipesList() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();
  const [filters, setFilters] = useState({
    search: "",
    cuisine: [],
    mealType: [],
    dietary: [],
    difficulty: [],
    cookingTime: [],
    onlyFavorites: false,
  });
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Load initial recipes
  useEffect(() => {
    setRecipes(recipesData);
    setFilteredRecipes(recipesData);
    setIsLoading(false);
  }, []);

  // Handle URL query parameters
  useEffect(() => {
    if (!router.isReady) return;
    const parseArray = (val) => {
      if (!val) return [];
      if (Array.isArray(val)) return val.flatMap(v => v.split(","));
      return val.split(",");
    };
    const { cuisine, mealType, dietary, difficulty, cookingTime, search, onlyFavorites } = router.query;
    setFilters({
      search: search || "",
      cuisine: parseArray(cuisine),
      mealType: parseArray(mealType),
      dietary: parseArray(dietary),
      difficulty: parseArray(difficulty),
      cookingTime: parseArray(cookingTime),
      onlyFavorites: onlyFavorites === "true",
    });
  }, [router.isReady, router.query]);

  // Apply filters to recipes
  useEffect(() => {
    let filtered = [...recipes];
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchTerm) ||
          (recipe.tags && recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm))) ||
          (recipe.cuisine && recipe.cuisine.toLowerCase().includes(searchTerm))
      );
    }
    if (filters.cuisine.length > 0) {
      filtered = filtered.filter((recipe) => recipe.cuisine && filters.cuisine.includes(recipe.cuisine.toLowerCase()));
    }
    if (filters.mealType.length > 0) {
      filtered = filtered.filter((recipe) => recipe.category && filters.mealType.includes(recipe.category.toLowerCase()));
    }
    if (filters.dietary.length > 0) {
      filtered = filtered.filter((recipe) => {
        const recipeDiet = (recipe.dietary || []).map(d => d.toLowerCase());
        return filters.dietary.some(d => recipeDiet.includes(d));
      });
    }
    if (filters.difficulty.length > 0) {
      filtered = filtered.filter((recipe) => recipe.difficulty && filters.difficulty.includes(recipe.difficulty.toLowerCase()));
    }
    if (filters.cookingTime.length > 0) {
      filtered = filtered.filter((recipe) => {
        const time = recipe.cookingTime || recipe.duration || 0;
        return filters.cookingTime.some(val => {
          if (val === "under15") return time <= 15;
          if (val === "15to30") return time > 15 && time <= 30;
          if (val === "30to60") return time > 30 && time <= 60;
          if (val === "over60") return time > 60;
          return false;
        });
      });
    }
    if (filters.onlyFavorites) {
      filtered = filtered.filter((recipe) => favorites.includes(recipe.id));
    }
    setFilteredRecipes(filtered);
  }, [recipes, filters, favorites]);

  // Get all recipes with a youtubeShort property
  const videoRecipes = filteredRecipes.filter(r => r.youtubeShort);

  // Handle video popup open
  const handleVideoClick = (recipe) => {
    const index = videoRecipes.findIndex((r) => r.id === recipe.id);
    setActiveVideoIndex(index);
    setIsVideoPopupOpen(true);
  };

  // Handle next/previous video
  const handleNextVideo = () => {
    if (activeVideoIndex < videoRecipes.length - 1) {
      setActiveVideoIndex((prev) => prev + 1);
    }
  };
  const handlePreviousVideo = () => {
    if (activeVideoIndex > 0) {
      setActiveVideoIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation for video popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isVideoPopupOpen) return;
      if (e.key === "ArrowRight") handleNextVideo();
      else if (e.key === "ArrowLeft") handlePreviousVideo();
      else if (e.key === "Escape") setIsVideoPopupOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoPopupOpen, activeVideoIndex, videoRecipes.length]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen" style={{ fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif' }}>
        <main className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* New Filter Sidebar */}
            <FilterSidebar />
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
                {/* Search Bar */}
                <div className="flex items-center gap-2 flex-1 min-w-[220px] max-w-xs">
                  <input
                    type="text"
                    value={filters.search}
                    onChange={e => {
                      const newQuery = { ...router.query, search: e.target.value };
                      if (!e.target.value) delete newQuery.search;
                      router.push({ pathname: '/recipes', query: newQuery }, undefined, { shallow: true });
                    }}
                    placeholder="Search recipes..."
                    className="w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:border-amber-500 focus:ring focus:ring-amber-500 focus:ring-opacity-50"
                  />
                  {filters.search && (
                    <button
                      onClick={() => {
                        const newQuery = { ...router.query };
                        delete newQuery.search;
                        router.push({ pathname: '/recipes', query: newQuery }, undefined, { shallow: true });
                      }}
                      className="text-gray-400 hover:text-gray-600 px-2"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
              {/* Clear All Filters link above grid, right-aligned, only if recipes exist and search is active */}
              {filteredRecipes.length > 0 && filters.search && filters.search.trim() !== "" && (
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => router.push({ pathname: '/recipes' }, undefined, { shallow: true })}
                    className="text-orange-500 font-semibold underline underline-offset-4 hover:text-orange-600 transition-colors text-base px-2 py-1 rounded"
                    style={{ fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif', letterSpacing: '0.01em' }}
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
              {filteredRecipes.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No recipes found</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">Can't find what you're looking for? Try adjusting your filters or search for something different.</p>
                  {filters.search && filters.search.trim() !== "" && (
                    <button
                      onClick={() => router.push({ pathname: '/recipes' }, undefined, { shallow: true })}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 mt-4"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-2xl shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          fill
                          className="object-cover"
                        />
                        <button
                          onClick={() => toggleFavorite(recipe.id)}
                          className={`absolute top-2 right-2 z-10 p-2 rounded-full shadow-md transition-colors ${favorites.includes(recipe.id) ? 'bg-amber-500 text-white' : 'bg-white text-gray-400 hover:bg-amber-100'}`}
                          aria-label={favorites.includes(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill={favorites.includes(recipe.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                          </svg>
                        </button>
                        {recipe.youtubeShort && (
                          <button
                            onClick={() => handleVideoClick(recipe)}
                            className="absolute bottom-2 left-2 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 hover:bg-black"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9z"/></svg>
                            Watch Video
                          </button>
                        )}
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {recipe.dietary && recipe.dietary.map((diet, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs font-semibold bg-black/10 text-gray-800 rounded-lg">{diet}</span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
                          <span>⏱ {recipe.cookingTime || recipe.duration || '-'} min</span>
                          <span>• {recipe.difficulty}</span>
                        </div>
                        <a href={`/recipes/${recipe.id}`} className="mt-auto text-amber-500 font-semibold hover:underline">View Recipe &rarr;</a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      {/* Video Popup Modal */}
      {isVideoPopupOpen && videoRecipes[activeVideoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setIsVideoPopupOpen(false)}>
          <div className="relative w-full max-w-2xl aspect-video bg-black" onClick={e => e.stopPropagation()}>
            <div className="w-full lg:w-5/12 rounded-3xl overflow-hidden flex lg:ml-6 relative">
              <div className="w-full h-[420px]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoRecipes[activeVideoIndex].youtubeShort}?autoplay=1&controls=1&modestbranding=1`}
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-3xl"
                />
              </div>
              {/* Buttons at bottom right */}
              <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2 z-10">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-2xl py-3 px-4 font-semibold text-gray-700 bg-white hover:bg-gray-100 transition shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Save Recipe
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white rounded-2xl py-3 px-4 font-semibold hover:bg-orange-600 transition shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
                  Print Recipe
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsVideoPopupOpen(false)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
              aria-label="Close video"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Previous/Next buttons */}
            {activeVideoIndex > 0 && (
              <button
                onClick={handlePreviousVideo}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                aria-label="Previous video"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            )}
            {activeVideoIndex < videoRecipes.length - 1 && (
              <button
                onClick={handleNextVideo}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                aria-label="Next video"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
} 