import React, { useState } from 'react';
import { Building2, Leaf, Sparkles, Grid3x3, List, SlidersHorizontal, MapPin, Calendar, TrendingUp, X } from 'lucide-react';

const ProjectFilterTabs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { 
      id: 'all', 
      name: 'All Projects', 
      icon: Grid3x3, 
      count: 2500,
      color: 'from-[#A67C00] to-[#A67C00]',
      bgColor: 'bg-amber-50',
      description: 'View our complete portfolio'
    },
    { 
      id: 'architecture', 
      name: 'Architecture', 
      icon: Building2, 
      count: 500,
      color: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-50',
      description: 'Innovative designs & structures'
    },
    { 
      id: 'gardening', 
      name: 'Gardening', 
      icon: Leaf, 
      count: 1000,
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      description: 'Landscape & garden projects'
    },
    { 
      id: 'cleaning', 
      name: 'Cleaning', 
      icon: Sparkles, 
      count: 1000,
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50',
      description: 'Pristine maintenance services'
    }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'johannesburg', name: 'Johannesburg' },
    { id: 'durban', name: 'Durban' },
    { id: 'capetown', name: 'Cape Town' }
  ];

  const years = [
    { id: 'all', name: 'All Time' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const sortOptions = [
    { id: 'recent', name: 'Most Recent', icon: TrendingUp },
    { id: 'oldest', name: 'Oldest First', icon: Calendar },
    { id: 'name', name: 'Name (A-Z)', icon: List }
  ];

  const activeCount = categories.find(c => c.id === activeCategory)?.count || 0;

  return (
    <section className="py-8 lg:py-12 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Category Tabs */}
        <div className="mb-6">
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105` 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-lg'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : `${category.bgColor}`
                  }`}>
                    <Icon 
                      size={20} 
                      className={isActive ? 'text-white' : 'text-gray-600'}
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{category.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-white/30 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 ${
                      isActive ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {category.description}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left Side - Advanced Filters Toggle & Info */}
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                showFilters 
                  ? 'bg-amber-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <SlidersHorizontal size={18} />
              <span className="hidden sm:inline">Filters</span>
              {(selectedLocation !== 'all' || selectedYear !== 'all') && (
                <span className="w-5 h-5 bg-white text-amber-600 text-xs font-bold rounded-full flex items-center justify-center">
                  {(selectedLocation !== 'all' ? 1 : 0) + (selectedYear !== 'all' ? 1 : 0)}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center gap-2 text-gray-600">
              <span className="text-sm">Showing</span>
              <span className="font-bold text-amber-600 text-lg">{activeCount.toLocaleString()}</span>
              <span className="text-sm">projects</span>
            </div>
          </div>

          {/* Right Side - View Mode & Sort */}
          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2.5 pr-10 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <TrendingUp className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-amber-600 shadow-md' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Grid3x3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-white text-amber-600 shadow-md' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="mt-6 p-6 bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <SlidersHorizontal size={20} className="text-amber-600" />
                Advanced Filters
              </h3>
              <button
                onClick={() => {
                  setSelectedLocation('all');
                  setSelectedYear('all');
                }}
                className="text-sm text-gray-600 hover:text-amber-600 font-medium flex items-center gap-1"
              >
                <X size={16} />
                Clear All
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin size={16} className="text-amber-600" />
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-amber-600" />
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent cursor-pointer"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Apply Button */}
              <div className="flex items-end">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                >
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedLocation !== 'all' || selectedYear !== 'all') && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Active Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation !== 'all' && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                      <MapPin size={14} className="text-amber-600" />
                      <span>{locations.find(l => l.id === selectedLocation)?.name}</span>
                      <button
                        onClick={() => setSelectedLocation('all')}
                        className="ml-1 text-gray-400 hover:text-gray-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {selectedYear !== 'all' && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">
                      <Calendar size={14} className="text-amber-600" />
                      <span>{years.find(y => y.id === selectedYear)?.name}</span>
                      <button
                        onClick={() => setSelectedYear('all')}
                        className="ml-1 text-gray-400 hover:text-gray-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile Project Count */}
        <div className="md:hidden mt-4 text-center text-gray-600">
          <span className="text-sm">Showing </span>
          <span className="font-bold text-amber-600 text-lg">{activeCount.toLocaleString()}</span>
          <span className="text-sm"> projects</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectFilterTabs;