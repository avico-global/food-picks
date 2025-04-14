import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  const recipeCategories = [
    { title: 'Breakfast & Brunch', href: '/recipes/breakfast-brunch' },
    { title: 'Lunch', href: '/recipes/lunch' },
    { title: 'Appetizers & Snacks', href: '/recipes/appetizers-snacks' },
    { title: 'Dinner', href: '/recipes/dinner' },
    { title: 'Dessert', href: '/recipes/dessert' },
    { title: 'Drink & Cocktail', href: '/recipes/drinks' },
    { title: 'Side Dish', href: '/recipes/side-dishes' },
    { title: 'Grilling & BBQ', href: '/recipes/grilling' },
    { title: 'Microwave', href: '/recipes/microwave' },
    { title: 'Quick & Easy', href: '/recipes/quick-easy' },
    { title: 'Slow-Cooker', href: '/recipes/slow-cooker' },
    { title: 'Air Fryer', href: '/recipes/air-fryer' },
  ]

  const popularCategories = [
    { title: 'Most Viewed', href: '/popular/most-viewed' },
    { title: 'Latest Trends', href: '/popular/latest-trends' },
    { title: "Editor's Picks", href: '/popular/editors-picks' },
    { title: 'Seasonal Favorites', href: '/popular/seasonal' },
    { title: 'Trending Recipes', href: '/popular/trending-recipes' },
    { title: 'Popular Articles', href: '/popular/trending-articles' },
  ]

  const articleCategories = [
    { title: 'Cooking Tips', href: '/articles/cooking-tips' },
    { title: 'Kitchen Guides', href: '/articles/kitchen-guides' },
    { title: 'Food News', href: '/articles/food-news' },
    { title: 'Restaurant Reviews', href: '/articles/restaurant-reviews' },
    { title: 'Chef Interviews', href: '/articles/chef-interviews' },
    { title: 'Food Culture', href: '/articles/food-culture' },
  ]

  return (
    <header className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-4xl font-bold">
            Food<span className="text-yellow-400">.</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 ml-10">
          {/* Recipes Dropdown */}
          <div className="relative group">
            <Link href="/recipes" className="font-medium hover:text-yellow-400 py-2 inline-block">
              RECIPES
            </Link>
            <div className="hidden group-hover:block absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
              <div className="py-2">
                {recipeCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Dropdown */}
          <div className="relative group">
            <Link href="/popular" className="font-medium hover:text-yellow-400 py-2 inline-block">
              POPULAR
            </Link>
            <div className="hidden group-hover:block absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
              <div className="py-2">
                {popularCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/meat-seafood" className="font-medium hover:text-yellow-400 py-2">
            MEAT & SEAFOOD
          </Link>
          <Link href="/healthy-diet" className="font-medium hover:text-yellow-400 py-2">
            HEALTHY & DIET
          </Link>
          <Link href="/holidays" className="font-medium hover:text-yellow-400 py-2">
            HOLIDAYS
          </Link>
          <Link href="/cuisine" className="font-medium hover:text-yellow-400 py-2">
            CUISINE
          </Link>
          <Link href="/seasonal" className="font-medium hover:text-yellow-400 py-2">
            SEASONAL
          </Link>

          {/* Articles Dropdown */}
          <div className="relative group">
            <Link href="/articles" className="font-medium hover:text-yellow-400 py-2 inline-block">
              ARTICLES
            </Link>
            <div className="hidden group-hover:block absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
              <div className="py-2">
                {articleCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="hover:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Bookmark Icon */}
          <button className="hover:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          
          {/* User Icon */}
          <button className="hover:text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
