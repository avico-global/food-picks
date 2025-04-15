import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const testimonialData = [
  {
    id: 1,
    user: {
      name: 'Anonymous',
      avatar: '/images/burger.png',
    },
    type: 'asked a question about',
    subject: 'Neiman-Marcus $250',
    content: 'This recipe here is different than the recipe on the Neiman-Marcus website. That said, I make a bar cookie with both white flour and oat flour and it is very good so I will give this a shot!',
    timeAgo: '9 minutes ago'
  },
  {
    id: 2,
    user: {
      name: 'Murphy.connie69',
      avatar: '/images/taco.png',
    },
    type: 'reviewed',
    subject: "Linda's Peanut Butter Easter Eggs",
    content: 'I used crockpot to melt my chocolate seen a friend do it looked easy and was on low',
    timeAgo: '48 minutes ago'
  },
  {
    id: 3,
    user: {
      name: 'vadeas1971',
      avatar: '/images/pop.png',
    },
    type: 'tweaked',
    subject: 'Pizza Hut Original Pan Pizza',
    content: 'I used vitamin D whole milk, instead of Instant Non Fat Dry milk, and baked at a lower temperature. 400 degrees, for around 25 minutes. The results were that the crust was softer, and juicier.',
    timeAgo: '3 days ago'
  }
];

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">FRESH FROM OUR COMMUNITY</h2>
        <Link href="/community" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.map((item) => (
          <div key={item.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-5">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src={item.user.avatar}
                  alt={item.user.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1">
                  <span className="font-semibold text-gray-900 truncate">{item.user.name}</span>
                  <span className="text-gray-500 text-sm">{item.type}</span>
                  <span className="font-medium text-blue-600 truncate">{item.subject}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-5 leading-relaxed flex-grow">{item.content}</p>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-gray-500 text-sm">{item.timeAgo}</span>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors">REPLY</button>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 