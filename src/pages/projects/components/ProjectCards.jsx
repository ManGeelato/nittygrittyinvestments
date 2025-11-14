import React, { useState } from 'react';
import { Building2, Leaf, Sparkles, MapPin, Calendar, Users, Clock, ArrowRight, Heart, Share2, ZoomIn, CheckCircle, Award, TrendingUp } from 'lucide-react';

const ProjectCards = () => {
  const [likedProjects, setLikedProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Sandton Corporate Tower",
      category: "Architecture",
      categoryIcon: Building2,
      client: "Tech Innovations Ltd",
      location: "Sandton, Johannesburg",
      completionDate: "March 2024",
      duration: "18 months",
      teamSize: "25 professionals",
      projectValue: "R 45 Million",
      description: "A 12-story modern office building featuring smart building technology, sustainable energy systems, and contemporary architectural design. The project includes underground parking, rooftop gardens, and state-of-the-art facilities.",
      services: ["Architectural Design", "Structural Engineering", "Project Management"],
      highlights: [
        "LEED Gold Certified",
        "Smart Building Systems",
        "Rooftop Solar Panels",
        "Rainwater Harvesting"
      ],
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-50",
      textColor: "text-slate-700",
      images: 8,
      featured: true,
      award: "Best Commercial Building 2024"
    },
    {
      id: 2,
      title: "Waterfall Estate Gardens",
      category: "Gardening",
      categoryIcon: Leaf,
      client: "Waterfall Residential Estate",
      location: "Waterfall, Midrand",
      completionDate: "January 2024",
      duration: "6 months",
      teamSize: "15 landscapers",
      projectValue: "R 8 Million",
      description: "Comprehensive landscape design and installation for a luxury residential estate. The project features indigenous gardens, water-wise plants, automated irrigation, and sustainable landscaping practices across 5 hectares.",
      services: ["Landscape Design", "Plant Installation", "Irrigation Systems"],
      highlights: [
        "100% Indigenous Plants",
        "Water-Wise Design",
        "Automated Irrigation",
        "Eco-Friendly Materials"
      ],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      images: 12,
      featured: true,
      award: "Sustainable Landscaping Award"
    },
    {
      id: 3,
      title: "Gateway Mall Facility Management",
      category: "Cleaning",
      categoryIcon: Sparkles,
      client: "Gateway Mall Management",
      location: "Umhlanga, Durban",
      completionDate: "Ongoing since 2023",
      duration: "Long-term contract",
      teamSize: "50+ staff",
      projectValue: "R 12 Million/year",
      description: "Comprehensive cleaning and facility management for one of South Africa's premier shopping destinations. Services include daily cleaning, sanitization, waste management, and specialized maintenance for high-traffic retail spaces.",
      services: ["Daily Cleaning", "Sanitization", "Waste Management", "Floor Care"],
      highlights: [
        "24/7 Service Coverage",
        "Eco-Friendly Products",
        "Quality Assurance Program",
        "Trained Specialists"
      ],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      images: 6,
      featured: true,
      award: "Service Excellence 2024"
    }
  ];

  const toggleLike = (projectId) => {
    setLikedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Featured <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Detailed view of our most prestigious and award-winning projects
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.categoryIcon;
            const isLiked = likedProjects.includes(project.id);
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  {/* Image Section */}
                  <div className={`relative h-80 lg:h-auto ${isEven ? '' : 'lg:col-start-2'}`}>
                    {/* Main Image with Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                          backgroundSize: '30px 30px'
                        }}></div>
                      </div>

                      {/* Large Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={160} className="text-white/10 group-hover:scale-110 transition-transform duration-700" strokeWidth={0.5} />
                      </div>

                      {/* Top Right Badges */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button
                          onClick={() => toggleLike(project.id)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md transition-all duration-300 ${
                            isLiked 
                              ? 'bg-red-500 text-white scale-105' 
                              : 'bg-white/90 text-gray-700 hover:bg-white hover:scale-105'
                          }`}
                        >
                          <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                        </button>
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-105 transition-all shadow-md">
                          <Share2 size={18} className="text-gray-700" />
                        </button>
                        <button 
                          onClick={() => setSelectedImage(project.id)}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-105 transition-all shadow-md"
                        >
                          <ZoomIn size={18} className="text-gray-700" />
                        </button>
                      </div>

                      {/* Bottom Info Badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-10 h-10 ${project.bgColor} rounded-lg flex items-center justify-center`}>
                                <Icon size={20} className={project.textColor} />
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 font-medium">{project.category} Project</p>
                                <p className="text-base font-bold text-gray-900">{project.images} Images</p>
                              </div>
                            </div>
                            {project.featured && (
                              <div className="px-2 py-1 bg-amber-500 text-white rounded-full text-xs font-bold flex items-center gap-1">
                                <Award size={12} />
                                <span>Featured</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    {/* Award Badge */}
                    {project.award && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-3 w-fit">
                        <Award size={14} />
                        <span>{project.award}</span>
                      </div>
                    )}

                    {/* Title & Category */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-1">
                        <span className={`px-2 py-0.5 ${project.bgColor} ${project.textColor} rounded-full text-xs font-bold`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-base text-gray-600 font-medium">Client: {project.client}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center flex-shrink-0">
                          <MapPin size={16} className="text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Location</p>
                          <p className="text-sm font-bold text-gray-900">{project.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center flex-shrink-0">
                          <Calendar size={16} className="text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Completed</p>
                          <p className="text-sm font-bold text-gray-900">{project.completionDate}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center flex-shrink-0">
                          <Clock size={16} className="text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Duration</p>
                          <p className="text-sm font-bold text-gray-900">{project.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center flex-shrink-0">
                          <Users size={16} className="text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Team Size</p>
                          <p className="text-sm font-bold text-gray-900">{project.teamSize}</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Value */}
                    <div className={`${project.bgColor} rounded-xl p-3 mb-4`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-600 font-medium mb-0.5">Project Value</p>
                          <p className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.projectValue}
                          </p>
                        </div>
                        <TrendingUp size={28} className={project.textColor} />
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-gray-900 mb-2 flex items-center gap-1">
                        <CheckCircle size={16} className="text-amber-600" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`group flex items-center justify-center gap-1 w-full px-4 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm`}>
                      <span>View Full Project Details</span>
                      <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-base">
            Want to see more of our exceptional work?
          </p>
          <a
            href="/projects"
            className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
          >
            Browse All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;