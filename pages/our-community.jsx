"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Josefin_Sans } from "next/font/google";
import Footer from "@/components/Footer";



const ourcommunity = () => {
  const chefs = [
    {
      name: "Sarah Johnson",
      title: "Master Chef",
      recipes: "156",
      followers: "12.4K",
      cuisine: "Italian Cuisine",
      image: "/images/sara.jpg",
    },
    {
      name: "Michael Chen",
      title: "Home Chef",
      recipes: "89",
      followers: "8.2K",
      cuisine: "Asian Fusion",
      image: "/images/Michael Chen.jpg",
    },
    {
      name: "Emma Davis",
      title: "Pastry Expert",
      recipes: "124",
      followers: "15.7K",
      cuisine: "Desserts",
      image: "/images/Emma Davis.jpg",
    },
  ];

  return (
    <div className={`min-h-screen text-gray-800`}>
      <Navbar />

      {/* Intro Section */}
      <section className="relative h-[450px] max-w-6xl w-full mx-auto px-4 md:px-8 mt-8">
        <div className="relative h-full w-full rounded-4xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 box-border p-1 bg-gray-300">
            <div
              className="w-full h-full bg-cover bg-center filter blur-[1px] brightness-80 border-[2px] border-gray-200 rounded-3xl"
              style={{ backgroundImage: "url('/images/cummunity image.jpg')" }}
            ></div>
          </div>
          <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-16">
            <div className="text-left max-w-md text-white mt-16">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join Our</h1>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Community</h2>
              <p className="text-md md:text-lg leading-relaxed mb-6">
                Connect with passionate food lovers, share your culinary creations, and learn
                from experienced chefs around the world.
              </p>
              <a
                href=""
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-5 py-2.5 rounded-full transition"
              >
                Become a Member
                <span className="animate-bounce-right">
                  <FiArrowRight className="text-xl" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members Section */}
      <section className="max-w-6xl w-full mx-auto px-4 md:px-8 mt-12 mb-16">
        <h1 className="text-4xl font-extrabold text-black mb-10">Featured Members</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={chef.image} alt={chef.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-extrabold text-gray-900">{chef.name}</h2>
                <p className="text-orange-500 font-semibold mb-2">{chef.title}</p>
                <p className="text-gray-500 mb-1">
                  {chef.recipes} recipes &nbsp;&nbsp; {chef.followers} followers
                </p>
                <p className="text-gray-600 mb-4">{chef.cuisine}</p>
                <button className="w-full py-2 px-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Community Stats Section */}
     
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 mt-8 mb-8 ">
            {/* Active Discussions */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-900">1.2K</p>
              <p className="text-sm text-gray-600">Active Discussions</p>
            </div>

            {/* Recipe Likes */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 010 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-900">850K</p>
              <p className="text-sm text-gray-600">Recipe Likes</p>
            </div>

            {/* Comments */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h8" />
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-900">450K</p>
              <p className="text-sm text-gray-600">Comments</p>
            </div>

            {/* Recipes Shared */}
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v1a3 3 0 003 3h10a3 3 0 003-3v-1M8 12a4 4 0 018 0" />
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-900">125K</p>
              <p className="text-sm text-gray-600">Recipes Shared</p>
            </div>
          </div>
          {/* Recent Activity Section */}

  <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Recent Activity</h2>
  <div className="space-y-6">
    {/* Activity Card */}
    <div className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4 mt-4 mb-4 h-35">
      <img src="/images/bread.jpg" alt="bread" className=" space-x-4  w-24 h-24 rounded-lg object-cover" />
      <div>
        <p className="text-sm text-gray-800"><span className="text-orange-500 font-bold">Alex M.</span> <span className="font-semibold">shared a new recipe</span></p>
        <p className="text-sm text-gray-600">Homemade Sourdough Bread</p>
        <p className="text-xs text-gray-400 mt-1">⏱ 2 hours ago</p>
      </div>
    </div>

    <div className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4 mt-4 mb-4 h-35">
      <img src="/images/2nd.jpg" alt="Quinoa Bowl" className=" space-x-4  w-25 h-25 rounded-lg object-cover" />
      <div>
        <p className="text-sm text-gray-800"><span className="text-orange-500 font-bold">Maria S.</span> <span className="font-semibold">won recipe of the week</span></p>
        <p className="text-sm text-gray-600">Mediterranean Quinoa Bowl</p>
        <p className="text-xs text-gray-400 mt-1">⏱ 5 hours ago</p>
      </div>
    </div>

    <div className="flex items-center  bg-white rounded-xl shadow-md p-3 space-x-4 mt-4 mb-4 h-35">
      <img src="/images/herbs.jpg" alt="Fresh Herbs" className=" space-x-4  w-25 h-25 rounded-lg object-cover" />
      <div>
        <p className="text-sm text-gray-800"><span className="text-orange-500 font-bold">John D.</span> <span className="font-semibold">started a discussion</span></p>
        <p className="text-sm text-gray-600">Best Ways to Store Fresh Herbs</p>
        <p className="text-xs text-gray-400 mt-1">⏱ 1 day ago</p>
      </div>
    </div>
  </div>

<section className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-white py-20 px-6 text-center rounded-3xl shadow-lg mx-auto max-w-6xl mt-18  mb-6">
      <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
      <p className="text-lg mb-8">
        Share your recipes, connect with other food lovers, and be part of our growing culinary community.
      </p>
      <a
        href="#get-started"
        className="inline-block bg-white hover:bg-gray-100 text-orange-500 font-semibold py-3 px-6 rounded-2xl transition-all duration-300"
      >
        Get Started Now
      </a>
    </section>

        
      </section>
      <Footer/>

    </div>
  );
};

export default ourcommunity;
