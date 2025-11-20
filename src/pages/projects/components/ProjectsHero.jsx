import React, { useState } from 'react';
import { Briefcase, Building2, Leaf, Sparkles, Search, SlidersHorizontal, TrendingUp, Award, Users, CheckCircle } from 'lucide-react';

const ProjectsHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Briefcase, count: '2500+', color: 'from-[#A67C00] to-[#A67C00]' },
    { id: 'architecture', name: 'Architecture', icon: Building2, count: '500+', color: 'from-slate-600 to-slate-800' },
    { id: 'gardening', name: 'Gardening', icon: Leaf, count: '1000+', color: 'from-green-600 to-green-800' },
    { id: 'cleaning', name: 'Cleaning', icon: Sparkles, count: '1000+', color: 'from-blue-600 to-blue-800' }
  ];

  const stats = [
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: Award, value: '20+', label: 'Industry Awards' },
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: CheckCircle, value: '100%', label: 'Quality Assured' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(245, 158, 11) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-600 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Content */}
        <div className="text-center mb-10 lg:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-amber-400 text-xs font-medium mb-4 border border-white/20">
            <Briefcase size={14} />
            <span>Our Portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Transforming Visions Into
            <span className="block mt-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Remarkable Reality
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Explore our portfolio of exceptional projects across South Africa. From architectural masterpieces to lush gardens and pristine spaces.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-4xl mx-auto mb-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#A67C00] to-[#A67C00] rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#A67C00] to-[#A67C00] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden">
                <div className="pl-4">
                  <Search className="text-gray-400" size={18} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by name, location, or service..."
                  className="flex-1 bg-transparent px-3 py-3 text-white placeholder-gray-400 focus:outline-none text-sm"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold text-sm">
                  Search
                </button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Category Filter Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-[#A67C00] to-[#A67C00] shadow-lg scale-105 ring-2 ring-amber-400/50' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-10 ${isActive ? 'block' : 'hidden'}`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : `bg-gradient-to-br ${category.color} bg-opacity-10`
                  } group-hover:scale-105`}>
                    <Icon 
                      className={isActive ? 'text-white' : 'text-amber-400'} 
                      size={24} 
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <h3 className={`text-base font-bold mb-1 ${isActive ? 'text-white' : 'text-white'}`}>
                      {category.name}
                    </h3>
                    <p className={`text-xl font-bold ${isActive ? 'text-white' : 'text-amber-400'}`}>
                      {category.count}
                    </p>
                    <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                      Projects Completed
                    </p>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Hover Gradient Border */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-20 blur`}></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Filter Options */}
        {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 text-xs font-medium">
            <SlidersHorizontal size={16} />
            <span>More Filters</span>
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Showing:</span>
            <span className="font-semibold text-amber-400">
              {selectedCategory === 'all' ? 'All Projects' : categories.find(c => c.id === selectedCategory)?.name}
            </span>
          </div>
        </div> */}

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-white">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52C840 54 960 58 1080 60C1200 62 1320 62 1380 62L1440 62V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;