import React, { useState } from 'react';
import { useRouter } from 'next/router';

const filterGroups = [
  {
    key: 'cuisine',
    label: 'Cuisine Type',
    options: [
      'american', 'asian', 'brazilian', 'british', 'caribbean',
      'chinese', 'ethiopian', 'french', 'german', 'greek',
      'indian', 'italian', 'japanese', 'mexican', 'thai'
    ]
  },
  {
    key: 'mealType',
    label: 'Meal Type',
    options: [
      'breakfast', 'lunch', 'dinner', 'snack', 'dessert', 'salad'
    ]
  },
  {
    key: 'dietary',
    label: 'Dietary',
    options: [
      'vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'keto', 'paleo'
    ]
  },
  {
    key: 'difficulty',
    label: 'Difficulty',
    options: [
      'easy', 'medium', 'hard'
    ]
  },
  {
    key: 'cookingTime',
    label: 'Cooking Time',
    options: [
      { label: 'Under 15 min', value: 'under15' },
      { label: '15-30 min', value: '15to30' },
      { label: '30-60 min', value: '30to60' },
      { label: 'Over 60 min', value: 'over60' }
    ]
  }
];

function parseArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.flatMap(v => v.split(","));
  return val.split(",");
}

export default function FilterSidebar() {
  const router = useRouter();
  const query = router.query;

  // Collapsed state for each group
  const [collapsed, setCollapsed] = useState({});
  const toggleCollapse = (key) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // For each group, get the selected array from query
  const getSelected = (key) => parseArray(query[key]);
  const getSelectedCount = (key) => getSelected(key).length;

  const handleCheckboxChange = (key, value) => {
    const selected = getSelected(key);
    let newSelected;
    if (selected.includes(value)) {
      newSelected = selected.filter((v) => v !== value);
    } else {
      newSelected = [...selected, value];
    }
    // Update query param as comma-separated string or remove if empty
    const newQuery = { ...query };
    if (newSelected.length > 0) {
      newQuery[key] = newSelected.join(",");
    } else {
      delete newQuery[key];
    }
    router.push({ pathname: '/recipes', query: newQuery }, undefined, { shallow: true });
  };

  const clearFilters = () => {
    router.push({ pathname: '/recipes' }, undefined, { shallow: true });
  };

  return (
    <aside className="hidden md:block w-72 min-h-screen bg-transparent p-2" style={{fontFamily: 'Century Gothic, Poppins, Nunito, Arial, sans-serif'}}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">Filters</h2>
        </div>
        {/* Filter Groups */}
        {filterGroups.map(group => {
          const selected = getSelected(group.key);
          const isCollapsed = collapsed[group.key];
          return (
            <div className="mb-8" key={group.key}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-700">{group.label}</span>
                  {selected.length > 0 && (
                    <span className="bg-orange-500 text-white text-xs font-bold rounded-full px-2 py-0.5">{selected.length}</span>
                  )}
                </div>
                <button
                  onClick={() => toggleCollapse(group.key)}
                  className="focus:outline-none"
                  aria-label={isCollapsed ? `Expand ${group.label}` : `Collapse ${group.label}`}
                >
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {!isCollapsed && (
                <div className="flex flex-col gap-2">
                  {group.options.map(opt => {
                    const value = typeof opt === 'string' ? opt : opt.value;
                    const label = typeof opt === 'string' ? opt.charAt(0).toUpperCase() + opt.slice(1).replace('-', ' ') : opt.label;
                    const checked = selected.includes(value);
                    return (
                      <label key={value} className={`flex items-center w-full px-3 py-2 rounded-lg cursor-pointer transition-colors border border-transparent ${checked ? 'bg-orange-100 text-orange-600 font-bold border-orange-500' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                        <span
                          className={`w-7 h-7 mr-3 flex items-center justify-center rounded-lg border transition-all duration-150 ${
                            checked ? 'bg-orange-500 border-orange-500' : 'bg-white border-gray-300'
                          }`}
                        >
                          {checked && (
                            <svg
                              className="w-5 h-5 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleCheckboxChange(group.key, value)}
                          className="hidden"
                        />
                        <span>{label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
} 