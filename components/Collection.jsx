import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Collection = () => {
  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Container - Taking up more space on the left */}
          <div className="w-full md:w-2/3 p-2">
            <div className="aspect-[16/9] relative overflow-hidden">
              <Image
                src="/images/collection-pic.webp"
                alt="Mac and Cheese dishes"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                quality={90}
              />
            </div>
          </div>

          {/* Content Container - Right side with text */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-sm font-medium tracking-wider text-gray-500 uppercase mb-4">
              COLLECTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              32 BEST MAC & CHEESE RECIPES
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Cheesy and oh so satisfying, mac and cheese can do no wrong. Transport yourself back to childhood with one of these classic or kicked-up options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
