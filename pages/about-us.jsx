"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { RiGlobalFill } from "react-icons/ri";
import { MdLocalLibrary } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { TfiMedallAlt } from "react-icons/tfi";
import { MdOutlineMenuBook, MdTimer } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Footer from "@/components/Footer";


export default function AboutUs() {
  return (
    
    <div className="min-h-screen border bg-white text-gray-800 font-sans">
      <Navbar />
      {/* Content Section */}
      <div className="w-full">
        {/* Introduction */}
        <section className="relative h-[450px] max-w-6xl w-full mx-auto px-4 md:px-8 mt-8">
          <div className="relative h-full w-full rounded-4xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 box-border p-1 bg-gray-300">
              <div
                className="w-full h-full bg-cover bg-center filter blur-[1px] brightness-80 border-[2px] border-gray-200 rounded-3xl"
                style={{ backgroundImage: "url('/images/article1.jpg')" }}
              ></div>
            </div>
            <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-16">
              <div className="text-left max-w-md text-white mt-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Food.</h2>
                <p className="text-md md:text-lg leading-relaxed mb-6">
                  We're passionate about making cooking accessible, enjoyable, and social for everyone, from beginners to seasoned chefs.
                </p>
                <a
                  href="#recipes"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-5 py-2.5 rounded-full transition"
                >
                  Explore Our Recipes
                  <span className="animate-bounce-right">
                    <FiArrowRight className="text-xl" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-20 mb-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-500 text-center mx-auto max-w-3xl">
            At food., we believe that cooking is more than just preparing meals—it's about creating memories, sharing traditions, and bringing people together.
          </p>
        </section>

        {/* Features Section */}
        <section className="max-h-[450px] max-w-5xl w-full mx-auto px-4 md:px-8  mt-6 mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w">
            {[{
              name: "Global Community",
              des: "Connect with food enthusiasts from around the world, sharing unique recipes and cultural traditions."
            }, {
              name: "Expert Guidance",
              des: "Learn from professional chefs and experienced home cooks through detailed recipes and video tutorials."
            }, {
              name: "Recipe Library",
              des: "Access thousands of tested and reviewed recipes, from quick meals to gourmet dishes."
            }].map((item, i) => (
              <div
                key={i}
                className="bg-white gap-3 p-6 rounded-lg shadow-md text-left flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-amber-100 rounded-full text-orange-500">
                  {i === 0 ? (
                    <RiGlobalFill className="w-8 h-8" />
                  ) : i === 1 ? (
                    <ImSpoonKnife className="w-8 h-8" />
                  ) : (
                    <MdLocalLibrary className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className=" h-[450px] max-w-5xl w-full mx-auto px-4 md:px-8 mb-2 mt-2">
          <div className="bg-gradient-to-r from-blue-600 via-pink-500 to-red-400  rounded-3xl shadow-2xl px-12 py-14 w-full mx-auto max-w-7xl h-100 ">
            <h2 className="text-3xl font-extrabold text-center text-white mb-16">Our Growing Community</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 bg-gradient-to-br from-indigo-100 to-indigo-300">
                <HiUserGroup className="text-indigo-700 text-5xl mb-4" />
                <p className="text-4xl font-extrabold text-indigo-800">100K+</p>
                <p className="text-indigo-900 mt-2 font-medium">Active Users</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 bg-gradient-to-br from-pink-100 to-pink-300">
                <MdOutlineMenuBook className="text-pink-700 text-5xl mb-4" />
                <p className="text-4xl font-extrabold text-pink-800">50K+</p>
                <p className="text-pink-900 mt-2 font-medium">Recipes Shared</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 bg-gradient-to-br from-green-100 to-green-300">
                <FaRegBookmark className="text-green-700 text-5xl mb-4" />
                <p className="text-4xl font-extrabold text-green-800">1M+</p>
                <p className="text-green-900 mt-2 font-medium">Recipe Saves</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 bg-gradient-to-br from-yellow-100 to-yellow-300">
                <MdTimer className="text-yellow-700 text-5xl mb-4" />
                <p className="text-4xl font-extrabold text-yellow-800">5K+</p>
                <p className="text-yellow-900 mt-2 font-medium">Hours of Content</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <div className="w-full px-6 md:px-16 py-12 mt-20">
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center py-20 h-[400px] max-w-5xl w-full mx-auto px-4 md:px-8 mb-60">
              <div>
                <img src="/images/article1.jpg" alt="Our Story" className="rounded-4xl shadow-lg w-full h-150 object-cover" />
              </div>
              <div className="space-y-6 text-justify">
                <h2 className="text-4xl font-semibold text-black">Our Story</h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  Founded in 2022, food. started as a small community of food enthusiasts sharing their favorite recipes. Today, we've grown into a global platform where millions come together to discover, share, and celebrate the art of cooking.
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  Our platform combines traditional recipe sharing with modern social features, making it easier than ever to connect, learn, and explore cuisines worldwide.
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  Whether you're a home cook or a professional chef, food. is your destination for all things culinary.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Our Values */}
        <h1 className="text-3xl font-bold text-center text-black tracking-wide  mt-10">Our Values</h1>
        <section className="py-20 h-[450px] max-w-5xl w-full mx-auto px-4 md:px-8 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{
              name: "Community First",
              des: "We believe in the power of community and foster an environment where everyone can learn, share, and grow together."
            }, {
              name: "Quality Content",
              des: "We maintain high standards for our content, ensuring every recipe is tested, reliable, and delicious."
            }, {
              name: "Passion for Food",
              des: "We're passionate about food and committed to making cooking an enjoyable experience for everyone."
            }].map((item, i) => (
              <div
                key={i}
                className="bg-white gap-3 p-6 rounded-lg shadow-md text-left flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-amber-100 rounded-full text-orange-500">
                  {i === 0 ? (
                    <HiUserGroup className="w-8 h-8" />
                  ) : i === 1 ? (
                    <TfiMedallAlt className="w-8 h-8" />
                  ) : (
                    <FaHeart className="w-8 h-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 h-[450px] max-w-5xl w-full mx-auto px-4 md:px-8 mb-6">
          <div className="container mx-full px-6 py-18 rounded-xl shadow-md bg-gray-50 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-4xl font-bold text-black tracking-wide">Ready to Start Cooking?</h1>
            <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
              Join our community today and start sharing your culinary creations with food lovers around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="bg-orange-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-3xl transition duration-300 cursor-pointer">Sign Up</button>
              <button className="bg-white text-orange-500 hover:bg-amber-200 font-semibold py-2 px-6 border border-orange-500 rounded-3xl transition duration-300 cursor-pointer">Browse Recipes</button>
            </div>
          </div>
        </section>

       
        <Footer />
        
      </div>
    </div>
  );
}

