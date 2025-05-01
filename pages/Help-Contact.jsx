"use client";
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import { FiArrowRight } from "react-icons/fi";
import Footer from '@/components/Footer';

const HelpandContact = () => {
  return (
    <div className="min-h-screen border bg-white text-gray-800 font-sans">
      <Navbar />
      <div className="w-full">
        {/* Introduction */}
        <section className="relative h-[450px] max-w-6xl w-full mx-auto px-4 md:px-8 mt-8">
          <div className="relative h-full w-full rounded-4xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 box-border p-1 bg-gray-300">
              <div
                className="w-full h-full bg-cover bg-center filter blur-[1px] brightness-80 border-[2px] border-gray-200 rounded-3xl"
                style={{ backgroundImage: "url('/images/bgcontact.jpg')" }}
              ></div>
            </div>
            <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-16">
              <div className="text-left max-w-md text-white mt-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Help &</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Contact</h2>
                <p className="text-md md:text-lg leading-relaxed mb-6">
                  Need assistance or have a question? We're here to help. Reach out to us through the form below or explore our FAQs.
                </p>
                <a
                  href="#recipes"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium px-5 py-2.5 rounded-full transition"
                >
                  Get In Touch
                  <span className="animate-bounce-right">
                    <FiArrowRight className="text-xl" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="relative max-w-6xl w-full mx-auto px-4 md:px-8 mt-20 grid md:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
              <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Message" rows={5} className="w-full p-3 border rounded-lg" />
              <button
                type="submit"
                className="bg-orange-500 text-white w-full py-3 rounded-2xl font-semibold flex justify-center items-center gap-2 hover:bg-orange-600"
              >
                <span>✉️</span> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-500" />
                <div>
                  <p>info@recipechef.com</p>
                  <p>support@recipechef.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-orange-500" />
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-orange-500" />
                <p>123 Recipe Street, New York, NY 10001</p>
              </div>
              <div className="flex items-center gap-4">
                <FaClock className="text-orange-500" />
                <p>Mon-Fri: 9am-5pm EST<br />Sat-Sun: Closed</p>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex items-center gap-6 text-gray-700 text-2xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-blue-600 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-pink-500 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-blue-400 transition" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-gray-900 transition" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="mt-20 px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.919711471927!2d-74.00594148459388!3d40.71277577933143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1614095274469!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center justify-center mt-20">
            Frequently Asked Questions
          </h2>
          <div className="relative max-w-6xl w-full mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">How can I report a bug?</h2>
              <p>
                If you encounter a bug, please email us at support@recipechef.com with details about what happened,
                what you were trying to do, and any error messages you saw.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">How do I request a feature?</h2>
              <p>
                We love hearing your ideas! Send us an email at feedback@recipechef.com with your feature request
                and we'll add it to our roadmap for consideration.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">How can I partner with Recipe Picks?</h2>
              <p>
                We're always looking for new partners! Email us at partnerships@recipechef.com with information
                about your company and how you'd like to collaborate.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 mb-10">
              <h2 className="text-2xl font-bold mb-6">How do I report inappropriate content?</h2>
              <p>
                If you find content that violates our community guidelines, please report it using the "Report"
                button on the content or email us at moderation@recipechef.com.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default HelpandContact;
