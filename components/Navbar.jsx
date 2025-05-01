"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Signup from './Signup';
import Login from './Login';

export default function Navbar() {
  const router = useRouter();
  const [isOpenSign, setIsOpenSign] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const signRef = useRef(null);
  const loginRef = useRef(null);

  // Close Signup modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenSign && signRef.current && !signRef.current.contains(event.target)) {
        setIsOpenSign(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpenSign]);

  // Close Login modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenLogin && loginRef.current && !loginRef.current.contains(event.target)) {
        setIsOpenLogin(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpenLogin]);

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
  ];

  const popularCategories = [
    { title: 'Most Viewed', href: '/popular/most-viewed' },
    { title: 'Latest Trends', href: '/popular/latest-trends' },
    { title: "Editor's Picks", href: '/popular/editors-picks' },
    { title: 'Seasonal Favorites', href: '/popular/seasonal' },
    { title: 'Trending Recipes', href: '/popular/trending-recipes' },
    { title: 'Popular Articles', href: '/popular/trending-articles' },
  ];

  const articleCategories = [
    { title: 'Cooking Tips', href: '/articles/cooking-tips' },
    { title: 'Kitchen Guides', href: '/articles/kitchen-guides' },
    { title: 'Food News', href: '/articles/food-news' },
    { title: 'Restaurant Reviews', href: '/articles/restaurant-reviews' },
    { title: 'Chef Interviews', href: '/articles/chef-interviews' },
    { title: 'Food Culture', href: '/articles/food-culture' },
  ];

  return (
    <header className="bg-black text-white w-full relative">
      {/* Signup Modal */}
      {isOpenSign && (
        <div className="fixed top-0 left-0 w-screen h-full flex justify-center items-center z-50 backdrop-blur-lg bg-black/30">
          <div ref={signRef} className="relative flex flex-col my-12 justify-center">
            <Signup
              switchToLogin={() => {
                setIsOpenSign(false);
                setIsOpenLogin(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isOpenLogin && (
        <div className="fixed top-0 left-0 w-screen h-full flex justify-center items-center z-50 backdrop-blur-lg bg-black/30">
          <div ref={loginRef} className="relative flex flex-col my-12 justify-center">
            <Login
              switchToSignup={() => {
                setIsOpenLogin(false);
                setIsOpenSign(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold">
          Food<span className="text-yellow-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ml-10">
          {/* Dropdowns */}
          {[
            { label: "RECIPES", items: recipeCategories, href: "/recipes" },
            { label: "POPULAR", items: popularCategories, href: "/popular" },
            { label: "ARTICLES", items: articleCategories, href: "/articles" },
          ].map((menu) => (
            <div key={menu.label} className="relative group">
              <Link href={menu.href} className="font-medium hover:text-yellow-400 py-2 inline-block">
                {menu.label}
              </Link>
              <div className="hidden group-hover:block absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
                <div className="py-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Static Links */}
          {[
            { title: 'MEAT & SEAFOOD', href: '/meat-seafood' },
            { title: 'HEALTHY & DIET', href: '/healthy-diet' },
            { title: 'HOLIDAYS', href: '/holidays' },
            { title: 'CUISINE', href: '/cuisine' },
            { title: 'SEASONAL', href: '/seasonal' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="font-medium hover:text-yellow-400 py-2">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-yellow-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button className="hover:text-yellow-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          <button onClick={() => setIsOpenLogin(true)} className="hover:text-yellow-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
