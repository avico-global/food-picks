"use client";
import React, { useState } from 'react';
import { FaApple, FaGoogle, FaAmazon, FaFacebookF } from 'react-icons/fa';
import { FiArrowRight, FiMail } from 'react-icons/fi';

export default function LoginPage({ switchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-full overflow-hidden p-4">
      <div className="w-full max-w-[450px] max-h-screen bg-white p-6 rounded shadow-2xl space-y-6 text-black overflow-auto">
        <div>
          <h1 className="text-center font-bold text-4xl text-gray-900 mt-2">
            Welcome back!
          </h1>
        </div>
      <div className="flex justify-center mt-8">
          <img
            src="/images/4.jpg" 
            alt="Delicious Food"
            className="w-40 h-40 object-cover rounded-full shadow-xl"

          />
        </div>
       
        {/* Header */}
        <h1 className="text-center text-3xl font-bold text-gray-800 mt-2 font-montserrat">
        LOG IN
</h1>

        <p className="text-center text-gray-800 text-lg leading-relaxed font-medium tracking-wide">
          Access your saved recipes, reviews, and more
        </p>

        {/* Email Field */}
        <div className="space-y-2 relative">
          <label htmlFor="email" className="block text-sm font-semibold text-black">EMAIL</label>
          <div className="relative">
            <FiMail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-lg" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2 relative">
          <label htmlFor="password" className="block text-sm font-semibold text-black">PASSWORD</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-12 py-3 bg-gray-100 rounded-4xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-gray-600 font-semibold hover:text-white hover:bg-purple-400 px-1 py-3 rounded cursor-pointer transition-colors duration-200"
            >
              {showPassword ? 'HIDE' : 'SHOW'}
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-lg text-blue-600 px-2 py-1 rounded transition-colors duration-200 hover:text-white hover:bg-purple-500 font-semibold">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Social Login */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-black font-semibold text-base text-center tracking-wide">
            OR CONTINUE WITH
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-black text-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaApple className="text-xl" />
            </div>
            <div className="border border-gray-300 p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaGoogle className="text-xl text-gray-700" />
            </div>
            <div className="bg-[#FF9900] text-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaAmazon className="text-xl" />
            </div>
            <div className="bg-[#1877F2] text-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaFacebookF className="text-xl" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-60 flex items-center justify-center gap-2 bg-yellow-500 text-white font-semibold py-3 rounded-4xl transition-all duration-300 ease-in-out shadow-xl cursor-pointer hover:bg-purple-600 hover:shadow-2xl hover:brightness-110 hover:scale-105"
          >
            LOG IN
            <FiArrowRight className="text-lg" />
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-base text-gray-600">
          Don’t have an account yet?{' '}
          <button
            onClick={switchToSignup}
            className="text-blue-600 font-bold hover:cursor-pointer hover:bg-purple-500 rounded hover:text-white"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
