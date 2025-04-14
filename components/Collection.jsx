import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Collection = () => {
  return (
    <section className="flex items-center justify-between py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Image Container */}
        <div className="md:w-2/3 relative">
          <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <Image
              src="/images/collection-pic.webp"
              alt="Mac and Cheese dishes"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">
            COLLECTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            YOUR NEW TITLE HERE
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            YOUR NEW DESCRIPTION HERE
          </p>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Collection), { ssr: false });
