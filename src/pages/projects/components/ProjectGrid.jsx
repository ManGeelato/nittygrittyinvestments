import React, { useState } from 'react';
import { Building2, Leaf, Sparkles, MapPin, Calendar, Eye, ArrowRight, Star, Award } from 'lucide-react';

const ProjectGrid = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modern Corporate Headquarters",
      category: "Architecture",
      categoryIcon: Building2,
      location: "Sandton, Johannesburg",
      date: "2024",
      client: "Tech Solutions SA",
      description: "A stunning 5-story office building featuring contemporary design and sustainable materials.",
      tags: ["Commercial", "Modern", "Sustainable"],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-100",
      featured: true,
      award: "Best Commercial Design 2024"
    },
    {
      id: 2,
      title: "Luxury Villa Estate",
      category: "Architecture",
      categoryIcon: Building2,
      location: "Umhlanga, Durban",
      date: "2024",
      client: "Private Client",
      description: "Exclusive 6-bedroom villa with ocean views and innovative architectural elements.",
      tags: ["Residential", "Luxury", "Coastal"],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-100",
      featured: false
    },
    {
      id: 3,
      title: "Botanical Garden Paradise",
      category: "Gardening",
      categoryIcon: Leaf,
      location: "Constantia, Cape Town",
      date: "2024",
      client: "Estate Holdings",
      description: "2-acre landscape transformation featuring indigenous plants and water features.",
      tags: ["Landscaping", "Indigenous", "Water Features"],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-100",
      featured: true,
      award: "Garden Excellence Award"
    },
    {
      id: 4,
      title: "Urban Rooftop Oasis",
      category: "Gardening",
      categoryIcon: Leaf,
      location: "Braamfontein, Johannesburg",
      date: "2023",
      client: "City Center Complex",
      description: "Innovative rooftop garden with vertical gardens and sustainable irrigation.",
      tags: ["Rooftop", "Urban", "Vertical Garden"],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-100",
      featured: false
    },
    {
      id: 5,
      title: "Medical Facility Cleaning",
      category: "Cleaning",
      categoryIcon: Sparkles,
      location: "Rosebank, Johannesburg",
      date: "2024",
      client: "Rosebank Medical Center",
      description: "Comprehensive sanitization services for a 300-bed medical facility.",
      tags: ["Medical", "Sanitization", "Commercial"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100",
      featured: false
    },
    {
      id: 6,
      title: "Premium Shopping Mall",
      category: "Cleaning",
      categoryIcon: Sparkles,
      location: "Gateway, Durban",
      date: "2024",
      client: "Gateway Mall Management",
      description: "Daily maintenance for one of SA's largest shopping centers.",
      tags: ["Retail", "High-Traffic", "Daily Service"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100",
      featured: true,
      award: "Service Excellence 2024"
    },
    {
      id: 7,
      title: "Heritage Building Restoration",
      category: "Architecture",
      categoryIcon: Building2,
      location: "City Centre, Cape Town",
      date: "2023",
      client: "Heritage Trust",
      description: "Careful restoration of a historic 1920s building preserving original features.",
      tags: ["Heritage", "Restoration", "Historical"],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-100",
      featured: false
    },
    {
      id: 8,
      title: "Resort Garden Maintenance",
      category: "Gardening",
      categoryIcon: Leaf,
      location: "Ballito, KZN",
      date: "2023",
      client: "Coastal Resort Group",
      description: "Ongoing maintenance of tropical gardens spanning 5 hectares.",
      tags: ["Resort", "Tropical", "Maintenance"],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-100",
      featured: false
    },
    {
      id: 9,
      title: "Industrial Complex Cleaning",
      category: "Cleaning",
      categoryIcon: Sparkles,
      location: "Rosslyn, Pretoria",
      date: "2023",
      client: "Manufacturing Corp",
      description: "Specialized industrial cleaning services for manufacturing facilities.",
      tags: ["Industrial", "Specialized", "Manufacturing"],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-100",
      featured: false
    }
  ];

  return (
    <section className="py-10 lg:py-12 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project) => {
            const Icon = project.categoryIcon;
            const isHovered = hoveredProject === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer ${
                  isHovered ? 'scale-105 -translate-y-1' : ''
                }`}
              >
                {/* Image/Visual Section */}
                <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '25px 25px'
                    }}></div>
                  </div>

                  {/* Large Icon Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={80} className="text-white/20 transition-all duration-500 group-hover:scale-110" strokeWidth={1} />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div className={`flex items-center gap-1 px-2 py-1 ${project.bgColor} backdrop-blur-sm rounded-lg shadow-md`}>
                      <Icon size={12} />
                      <span className="text-xs font-bold">{project.category}</span>
                    </div>
                    {project.featured && (
                      <div className="px-2 py-1 bg-amber-500 text-white rounded-lg shadow-md flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-bold">Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md">
                        <Award size={14} className="text-amber-600" />
                        <span className="text-xs font-bold text-gray-900 line-clamp-1">{project.award}</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center text-white">
                      <Eye size={24} className="mx-auto mb-1" />
                      <p className="text-xs font-semibold">View Details</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                      <MapPin size={14} className="text-amber-600 flex-shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                      <Calendar size={14} className="text-amber-600 flex-shrink-0" />
                      <span>Completed {project.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View Button */}
                  <button className={`w-full flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-md text-sm`}>
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${
                  isHovered ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="group inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 text-sm">
            <span>Load More Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p className="text-gray-600 text-xs mt-3">
            Showing <span className="font-bold text-amber-600">9</span> of <span className="font-bold text-amber-600">2,500</span> projects
          </p>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent mb-1">
              500+
            </div>
            <div className="text-xs text-gray-600 font-medium">Architecture</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-1">
              1,000+
            </div>
            <div className="text-xs text-gray-600 font-medium">Gardening</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1">
              1,000+
            </div>
            <div className="text-xs text-gray-600 font-medium">Cleaning</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#A67C00] to-[#A67C00] bg-clip-text text-transparent mb-1">
              98%
            </div>
            <div className="text-xs text-gray-600 font-medium">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;