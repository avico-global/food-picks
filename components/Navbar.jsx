import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white w-full flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-4xl font-bold">
          Food<span className="text-yellow-400">.</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 ml-10">
        <Link href="/recipes" className="font-medium hover:text-yellow-400">
          RECIPES
        </Link>
        <Link href="/popular" className="font-medium hover:text-yellow-400">
          POPULAR
        </Link>
        <Link href="/meat-seafood" className="font-medium hover:text-yellow-400">
          MEAT & SEAFOOD
        </Link>
        <Link href="/healthy-diet" className="font-medium hover:text-yellow-400">
          HEALTHY & DIET
        </Link>
        <Link href="/holidays" className="font-medium hover:text-yellow-400">
          HOLIDAYS
        </Link>
        <Link href="/cuisine" className="font-medium hover:text-yellow-400">
          CUISINE
        </Link>
        <Link href="/seasonal" className="font-medium hover:text-yellow-400">
          SEASONAL
        </Link>
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
    </nav>
  )
}
