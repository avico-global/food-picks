import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Lazy load components with proper loading states
const Hero = dynamic(() => import("../components/Hero"), {
  loading: () => <div className="h-[600px] bg-gray-100 animate-pulse" />,
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});





const FanFavorite = dynamic(() => import("../components/Fanfavourite"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

const Categories = dynamic(() => import("../components/Categories"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

import QuickRecipes from "../components/QuickRecipes";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen" style={{ fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif' }}>
      <Navbar />
      <main className="flex-grow">
        <div className="w-full">
          <Hero />
        </div>
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 py-16">
            <section className="w-full">
              <Categories />
            </section>
            <section className="w-full">
              <QuickRecipes />
            </section>
            <section className="w-full">
              <FanFavorite />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
