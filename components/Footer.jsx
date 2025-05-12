import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <Link href="https://facebook.com" className="hover:text-gray-400">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://instagram.com" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://pinterest.com" className="hover:text-gray-400">
            <FaPinterestP size={20} />
          </Link>
          <Link href="https://twitter.com" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://youtube.com" className="hover:text-gray-400">
            <FaYoutube size={20} />
          </Link>
          <Link href="mailto:contact@example.com" className="hover:text-gray-400">
            <FaEnvelope size={20} />
          </Link>
        </div>

        {/* Back to Top */}
        <div className="text-center mb-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-gray-400"
          >
            ↑ BACK TO TOP
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6">
          <Link href="/recipes" className="hover:text-gray-400">
            All Categories
          </Link>
          <Link href="/site-map" className="hover:text-gray-400">
            Site Map
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/help" className="hover:text-gray-400">
            Help
          </Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center space-x-4 text-sm mb-4">
          <Link href="/advertise" className="hover:text-gray-400">
            Advertise
          </Link>
          <Link href="/adchoices" className="hover:text-gray-400">
            AdChoices
          </Link>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/visitor-agreement" className="hover:text-gray-400">
            Visitor Agreement
          </Link>
          <Link href="/california-privacy" className="hover:text-gray-400">
            California Privacy Policy
          </Link>
          <Link href="/do-not-sell" className="hover:text-gray-400">
            Do Not Sell or Share My Personal Information
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
