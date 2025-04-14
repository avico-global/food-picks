import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

// Lazy load components
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Craving = dynamic(() => import('@/components/Craving'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Search = dynamic(() => import('@/components/Search'), { ssr: false });
const ExploreMore = dynamic(() => import('@/components/Exploremore'), { ssr: false });
const Trending = dynamic(() => import('@/components/Trending'), { ssr: false });
const Dontmiss = dynamic(() => import('@/components/Dontmiss'), { ssr: false });
const Moreideas = dynamic(() => import('@/components/Moreideas'), { ssr: false });
const Collection = dynamic(() => import('@/components/Collection'), { ssr: false });
const FanFavorite = dynamic(() => import('@/components/Fanfavourite'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Testimonials />
        <Craving />
        <ExploreMore />
        <Trending />
        <Dontmiss />
        <Moreideas />
        <Collection />
        <FanFavorite />
        <Search />
        <Footer />
      </Suspense>
    </div>
  );
} 
