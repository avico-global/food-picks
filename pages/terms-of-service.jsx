"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { Josefin_Sans } from "next/font/google";
import Footer from "@/components/Footer";



const termsofservice = () => {
  return (
    <div className={`$ min-h-screen text-gray-800`}>
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-black mb-4 ml-8">
          Terms Of Service
        </h1>
        <p className="text-sm text-gray-500 mb-4 mt-8 ml-8">
          <strong>Last updated:</strong> April 23, 2025
        </p>

        <div className="rounded-lg p-8">
          <section className="space-y-6 mb-2">
            <h2 className="text-2xl font-semibold text-black mb-2">1. Introduction</h2>
            <p className="mb-4 mt-4">
              Welcome to <stronge>Food. </stronge>These Terms and Conditions govern your use of our website and services.
              By accessing or using Recipe Picks, you agree to be bound by these Terms and Conditions.
              <br></br>
              If you disagree with any part of these terms, you may not access our service.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-black">2. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>"Service" refers to the Recipe Picks website and all related services.</li>
              <li>"User" refers to any individual who accesses or uses our Service.</li>
              <li>"Content" refers to all information, text, graphics, photos, and other materials uploaded, downloaded, or appearing on our Service.
              </li>

            </ul>

            <h3 className="text-xl font-medium text-black mt-4">3. User Accounts</h3>
            <p>When you create an account with us, you must provide accurate, complete, and current information.
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              <br></br>
              <br></br>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>

          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-black mt-4">4. Intellectual Property</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on or through the Service.
              <br></br>
              <br></br>
              Recipe Picks reserves the right to remove any content that violates these Terms or that we find objectionable for any reason.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-black mt-4 mb-2">6. Limitation of Liability</h2>
            <p className="mt-4 mb-4"> In no event shall Recipe Picks, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.

            </p>

          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-black">7. Changes to Terms</h2>
            <p>
              We use industry-standard safeguards to protect your information.
              While we strive to keep your data secure, no internet transmission
              or storage system is 100% secure.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-black mt-4 mb-4">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:
              <br></br>

             Email: youremail.com</p>
           
          </section>
        </div>

        <hr className="my-8 border-t border-gray-300 w-full" />

        {/* Footer section - unchanged */}

      </div>
      <Footer />
    </div>
  );
};

export default termsofservice;
