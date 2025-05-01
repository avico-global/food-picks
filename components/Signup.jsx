"use client";
import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { FiArrowRight, FiUser, FiMail } from 'react-icons/fi';

export default function SignupPage({ switchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen w-full overflow-hidden p-4">
      <div className="w-full max-w-[450px] max-h-screen bg-white 100 p-6 rounded shadow-2xl space-y-6 text-black overflow-auto">
      
        {/* 🍔 Food Image at Top */}
        <div className="flex justify-center mt-8">
          <img
            src="/images/4.jpg" 
            alt="Delicious Food"
            className="w-40 h-40 object-cover rounded-full shadow-xl"

          />
        </div>
        {/* Header */}
        <h1 className="text-center font-semibold text-3xl text-gray-800 mt-12">
          CREATE AN ACCOUNT
        </h1>

        <p className="text-center text-gray-800 text-lg leading-relaxed font-medium tracking-wide">
          Save recipes across devices, write reviews, and share your own photos
        </p>

        {/* Name & Email */}
        <div className="space-y-4">
          <div className="space-y-2 relative">
            <label htmlFor="name" className="block text-sm font-semibold text-black">NAME</label>
            <div className="relative">
              <FiUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-4xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2 relative">
            <label htmlFor="email" className="block text-sm font-semibold text-black">EMAIL</label>
            <div className="relative">
              <FiMail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-4xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="relative space-y-2">
          <label htmlFor="password" className="block text-sm font-semibold text-black">PASSWORD</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Create your Password"
            className="w-full pr-12 px-4 py-3 bg-gray-100 rounded-4xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute top-[30px] right-3 text-sm text-gray-600 font-semibold hover:text-white hover:bg-purple-400 px-1 py-3  rounded cursor-pointer transition-colors duration-200"
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        </div>
        {/* confirm password */}
        <div className="relative space-y-2">
          <label htmlFor="password" className="block text-sm font-semibold text-black">CONFIRM PASSWORD</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Confirm your Password"
            className="w-full pr-12 px-4 py-3 bg-gray-100 rounded-4xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute top-[30px] right-3 text-sm text-gray-600 font-semibold hover:text-white hover:bg-purple-400 px-1 py-3  rounded cursor-pointer transition-colors duration-200"
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3 text-sm text-gray-700  ">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-5 w-10 text-blue-600 border-gray-300 rounded hover:cursor-pointer"
          />
          <p>
            By creating an account, you agree to the{' '}
            <a href="#" className="text-blue-500 underline">Terms of Use</a> and{' '}
            <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
            Discovery and its affiliates may use your email to send updates, ads, and offers.
          </p>
        </div>

        {/* Social Login */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-800 font-semibold text-lg tracking-wide">
            OR CONTINUE WITH
          </p>
          <div className="flex space-x-4">
            <div className="bg-black text-white p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaApple className="text-xl" />
            </div>
            <div className="border border-gray-300 p-3 rounded-full cursor-pointer hover:scale-110 transition">
              <FaGoogle className="text-xl text-gray-700" />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-60 flex items-center justify-center gap-2 bg-yellow-500
            text-white font-semibold py-3 rounded-4xl
            transition-all duration-300 ease-in-out shadow-xl cursor-pointer
            hover:bg-purple-600
            hover:shadow-2xl hover:brightness-110 hover:scale-105"
          >
            Create Account
            <FiArrowRight className="text-lg" />
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-base text-gray-600">
          Already have an account?{' '}
          <button
            onClick={switchToLogin}
            className="text-blue-600 font-bold hover:cursor-pointer hover:bg-purple-500 rounded hover:text-white"
          >
            Log in here
          </button>
        </p>
      </div>
    </div>
  );
}
