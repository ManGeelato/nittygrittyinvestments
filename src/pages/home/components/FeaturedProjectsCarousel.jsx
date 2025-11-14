import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Tag, ExternalLink, Building2, Leaf, Sparkles } from 'lucide-react';

const FeaturedProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Modern Corporate Headquarters",
      category: "Architecture",
      categoryIcon: Building2,
      location: "Sandton, Johannesburg",
      date: "Completed 2024",
      description: "A stunning 5-story office building featuring contemporary design, sustainable materials, and state-of-the-art facilities for a leading tech company.",
      tags: ["Commercial", "Modern Design", "Sustainable"],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-100",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=150&q=80"
    },
    {
      id: 2,
      title: "Luxury Residential Estate",
      category: "Architecture",
      categoryIcon: Building2,
      location: "Umhlanga, Durban",
      date: "Completed 2024",
      description: "Exclusive gated community featuring 12 luxury homes with innovative architectural design, maximizing natural light and ocean views.",
      tags: ["Residential", "Luxury", "Coastal"],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-100",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=150&q=80"
    },
    {
      id: 3,
      title: "Botanical Garden Paradise",
      category: "Gardening",
      categoryIcon: Leaf,
      location: "Constantia, Cape Town",
      date: "Completed 2024",
      description: "Complete landscape transformation featuring indigenous plants, water features, and entertainment areas for a 2-acre private estate.",
      tags: ["Landscaping", "Water Features", "Indigenous"],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-100",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      thumbnail: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=150&q=80"
    },
    {
      id: 4,
      title: "Urban Rooftop Garden",
      category: "Gardening",
      categoryIcon: Leaf,
      location: "Braamfontein, Johannesburg",
      date: "Completed 2023",
      description: "Innovative rooftop garden design for a commercial building, creating a green oasis with vertical gardens and sustainable irrigation.",
      tags: ["Rooftop", "Urban", "Vertical Garden"],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-100",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      thumbnail: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=150&q=80"
    },
    {
      id: 5,
      title: "Hospital Deep Clean Project",
      category: "Cleaning",
      categoryIcon: Sparkles,
      location: "Rosebank, Johannesburg",
      date: "Ongoing 2024",
      description: "Comprehensive cleaning and sanitization services for a 300-bed medical facility, ensuring the highest standards of hygiene and safety.",
      tags: ["Medical", "Sanitization", "Commercial"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      thumbnail: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=150&q=80"
    },
    {
      id: 6,
      title: "Shopping Mall Maintenance",
      category: "Cleaning",
      categoryIcon: Sparkles,
      location: "Gateway, Durban",
      date: "Ongoing 2024",
      description: "Daily cleaning and maintenance services for one of South Africa's largest shopping centers, managing high-traffic areas with excellence.",
      tags: ["Retail", "High-Traffic", "Daily Service"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=150&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Get visible projects (current and next two)
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();
  const currentProject = projects[currentIndex];
  const CategoryIcon = currentProject.categoryIcon;

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-gray-50 to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-2xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full blur-2xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 rounded-full text-amber-800 text-xs font-medium mb-3">
            <ExternalLink size={14} className="text-amber-600" />
            <span>Our Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Featured <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
            Explore our portfolio of exceptional projects across architecture, gardening, and cleaning services
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Large Featured Card */}
          <div className="mb-6 lg:mb-8">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-48 lg:h-64 min-h-[300px]">
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/4A5568/FFFFFF?text=${encodeURIComponent(currentProject.title)}`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${currentProject.gradient} opacity-60`}></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                      <CategoryIcon size={14} className="text-amber-600" />
                      <span className="font-semibold text-gray-900 text-xs">{currentProject.category}</span>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-300 hover:scale-105"
                  >
                    <ChevronLeft className="text-gray-900" size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-300 hover:scale-105"
                  >
                    <ChevronRight className="text-gray-900" size={20} />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-5 lg:p-6">
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {currentProject.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <MapPin size={16} className="text-amber-600" />
                      <span className="text-xs font-medium">{currentProject.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Calendar size={16} className="text-amber-600" />
                      <span className="text-xs font-medium">{currentProject.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {currentProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {currentProject.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
                        <Tag size={12} />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/projects"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
                  >
                    View All Projects
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation - Desktop Only */}
          <div className="hidden lg:grid grid-cols-3 gap-4">
            {visibleProjects.map((project, idx) => {
              const Icon = project.categoryIcon;
              const isActive = idx === 0;
              return (
                <button
                  key={project.id}
                  onClick={() => goToSlide((currentIndex + idx) % projects.length)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`group text-left transition-all duration-300 ${
                    isActive ? 'scale-105' : 'scale-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                    isActive ? 'ring-2 ring-amber-400' : ''
                  }`}>
                    {/* Thumbnail Image */}
                    <div className="relative h-28">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/200x150/4A5568/FFFFFF?text=${encodeURIComponent(project.title)}`;
                        }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40`}></div>
                    </div>

                    {/* Thumbnail Content */}
                    <div className="p-3">
                      <div className={`inline-flex items-center gap-1 px-2 py-1 ${project.bgColor} rounded-full mb-1.5`}>
                        <Icon size={12} />
                        <span className="text-xs font-medium">{project.category}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1 group-hover:text-amber-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <MapPin size={10} />
                        <span className="line-clamp-1">{project.location}</span>
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dot Navigation - Mobile */}
          <div className="flex lg:hidden justify-center gap-1.5 mt-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-6 bg-gradient-to-r from-[#A67C00] to-[#A67C00]' 
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-600 font-medium text-sm">
            Showing <span className="text-amber-600 font-bold">{currentIndex + 1}</span> of <span className="text-amber-600 font-bold">{projects.length}</span> featured projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsCarousel;