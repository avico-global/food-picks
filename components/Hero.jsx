import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Delicious food spread"
          fill
          className="object-cover brightness-[0.85]"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            88 ALL-TIME BEST
            <br />
            DINNER RECIPES
          </h1>
          <Link
            href="/recipes"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            SEE THEM ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
