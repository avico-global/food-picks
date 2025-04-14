import React from 'react';

const FanFavorite = () => {
  const foodItems = [
    {
      id: 1,
      title: 'OVEN-BAKED RIBS',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    },
    {
      id: 2,
      title: 'MOZZARELLA STICKS',
      image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7',
    },
    {
      id: 3,
      title: '5 MINUTE VEGAN PANCAKES',
      image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7',
    },
    {
      id: 4,
      title: 'SHAKSHUKA',
      image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa',
    },
    {
      id: 5,
      title: 'GRILLED SALMON',
      image: 'https://images.unsplash.com/photo-1567121938596-cf8d2c8c5359',
    },
    {
      id: 6,
      title: 'BEEF & BROCCOLI',
      image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d',
    },
    {
      id: 7,
      title: 'FISH TACOS',
      image: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd',
    },
    {
      id: 8,
      title: 'STRAWBERRY CUPCAKES',
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce',
    },
    {
      id: 9,
      title: 'CHICKEN CURRY',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641',
    },
    {
      id: 10,
      title: 'MARGHERITA PIZZA',
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    },
    {
      id: 11,
      title: 'SUSHI ROLLS',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    },
    {
      id: 12,
      title: 'CHOCOLATE BROWNIES',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    },
    {
      id: 13,
      title: 'CAESAR SALAD',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    },
    {
      id: 14,
      title: 'BEEF BURGER',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    },
    {
      id: 15,
      title: 'PAD THAI',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    },
    {
      id: 16,
      title: 'TIRAMISU',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight">FAN FAVORITES</h2>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {foodItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative h-72 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanFavorite;
