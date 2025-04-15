import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Lazy load components with proper loading states
const Hero = dynamic(() => import("../components/Hero"), {
  loading: () => <div className="h-[600px] bg-gray-100 animate-pulse" />,
});

const Testimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />,
});

const Craving = dynamic(() => import("../components/Craving"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const Search = dynamic(() => import("../components/Search"), {
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

const ExploreMore = dynamic(() => import("../components/Exploremore"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

const Trending = dynamic(() => import("../components/Trending"), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />,
});

const Dontmiss = dynamic(() => import("../components/Dontmiss"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

const Moreideas = dynamic(() => import("../components/Moreideas"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

const Collection = dynamic(() => import("../components/Collection"), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse" />,
});

const FanFavorite = dynamic(() => import("../components/Fanfavourite"), {
  loading: () => <div className="h-[300px] bg-gray-100 animate-pulse" />,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="w-full">
          <Hero />
        </div>
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 py-16">
            <section className="w-full">
              <Testimonials />
            </section>
            <section className="w-full">
              <Craving />
            </section>
            <section className="w-full">
              <ExploreMore />
            </section>
            <section className="w-full">
              <Trending />
            </section>
            <section className="w-full">
              <Dontmiss />
            </section>
            <section className="w-full">
              <Moreideas />
            </section>
            <section className="w-full">
              <Collection />
            </section>
            <section className="w-full">
              <FanFavorite />
            </section>
            <section className="w-full">
              <Search />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
