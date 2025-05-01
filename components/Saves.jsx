import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function SpacesSection() {
  const [activeTab, setActiveTab] = useState('recipes');

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Tabs */}
      <div className="bg-white border-b border-gray-300">
        <div className="flex justify-center space-x-12 py-4 font-semibold text-lg tracking-wide">
          <button
            className={`pb-2 ${activeTab === 'recipes' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('recipes')}
          >
            RECIPES
          </button>
          <button
            className={`pb-2 ${activeTab === 'boards' ? 'border-b-4 border-purple-700 text-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('boards')}
          >
            MY BOARDS
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-center items-start py-16 px-4 flex-grow">
        {activeTab === 'recipes' && (
          <div className="bg-white w-[250px] h-[350px] rounded-xl shadow-md flex flex-col justify-center items-center space-y-4 text-center">
            <div className="bg-purple-700 p-4 rounded-full text-white">
              <FiPlus className="text-2xl" />
            </div>
            <h2 className="font-bold text-lg text-purple-800">DISCOVER RECIPES</h2>
            <p className="text-sm text-gray-500">------ or ------</p>
            <button className="text-purple-700 font-medium hover:underline">
              Add Your Own Recipe
            </button>
          </div>
        )}
        {activeTab === 'boards' && (
          <div className="text-center text-gray-600 text-xl mt-20">Your boards will appear here.</div>
        )}
      </div>
    </div>
  );
}
