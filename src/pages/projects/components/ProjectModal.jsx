import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Building2, Leaf, Sparkles, MapPin, Calendar, Users, TrendingUp, Award, Star, Quote, CheckCircle, Download, Share2, Heart, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';

const ProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(50);

  const project = {
    id: 1,
    title: "Sandton Corporate Tower",
    category: "Architecture",
    categoryIcon: Building2,
    client: "Tech Innovations Ltd",
    location: "Sandton, Johannesburg",
    completionDate: "March 2024",
    startDate: "September 2022",
    duration: "18 months",
    teamSize: "25 professionals",
    projectValue: "R 45 Million",
    gradient: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    
    overview: "A landmark 12-story modern office building that sets new standards for sustainable commercial architecture in Johannesburg. This project seamlessly integrates cutting-edge smart building technology with environmentally conscious design principles.",
    
    challenge: "The client required a building that would accommodate rapid growth while maintaining operational efficiency and minimizing environmental impact in a dense urban setting.",
    
    solution: "We designed a flexible, modular structure incorporating advanced building management systems, renewable energy sources, and water conservation technologies while maximizing natural light and creating inspiring work environments.",
    
    services: [
      "Architectural Design",
      "Structural Engineering",
      "Interior Design",
      "Project Management",
      "Sustainability Consulting",
      "Landscape Architecture"
    ],
    
    highlights: [
      { title: "LEED Gold Certified", description: "Achieved gold standard for sustainable buildings" },
      { title: "Smart Building Systems", description: "AI-powered climate and energy management" },
      { title: "40% Energy Savings", description: "Through solar panels and efficient systems" },
      { title: "Rainwater Harvesting", description: "60% reduction in municipal water usage" },
      { title: "Green Rooftop", description: "1000m² rooftop garden and relaxation space" },
      { title: "Underground Parking", description: "300 secure parking bays with EV charging" }
    ],
    
    specifications: [
      { label: "Total Area", value: "15,000 m²" },
      { label: "Floors", value: "12 stories" },
      { label: "Height", value: "48 meters" },
      { label: "Office Capacity", value: "800 people" },
      { label: "Construction Type", value: "Steel & Glass" },
      { label: "Foundation", value: "Deep Pile" }
    ],
    
    testimonial: {
      text: "Nitty Gritty exceeded our expectations in every way. Their attention to detail, commitment to sustainability, and ability to deliver on time and within budget made this project a resounding success. The building has become an iconic landmark in Sandton.",
      author: "Michael Chen",
      position: "CEO, Tech Innovations Ltd",
      rating: 5
    },
    
    results: [
      { metric: "On-Time Delivery", value: "100%" },
      { metric: "Budget Adherence", value: "98%" },
      { metric: "Client Satisfaction", value: "5/5" },
      { metric: "Safety Record", value: "Zero incidents" }
    ],
    
    awards: [
      "Best Commercial Building 2024",
      "Sustainable Architecture Award",
      "Innovation in Design Excellence"
    ],
    
    gallery: [
      { id: 1, type: "exterior", label: "Main Facade" },
      { id: 2, type: "exterior", label: "Night View" },
      { id: 3, type: "interior", label: "Lobby" },
      { id: 4, type: "interior", label: "Office Space" },
      { id: 5, type: "detail", label: "Rooftop Garden" },
      { id: 6, type: "detail", label: "Smart Systems" }
    ]
  };

  const Icon = project.categoryIcon;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
      >
        View Project Details
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="sticky top-4 right-4 float-right z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Header Section */}
            <div className={`relative bg-gradient-to-br ${project.gradient} text-white p-8 lg:p-12 rounded-t-3xl overflow-hidden`}>
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>

              {/* Large Background Icon */}
              <div className="absolute right-0 top-0 opacity-10">
                <Icon size={300} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                {/* Category & Awards */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold flex items-center gap-2">
                    <Icon size={16} />
                    {project.category}
                  </span>
                  {project.awards.slice(0, 1).map((award, idx) => (
                    <span key={idx} className="px-4 py-2 bg-amber-500 rounded-full text-sm font-bold flex items-center gap-2">
                      <Award size={16} />
                      {award}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h2>
                <p className="text-xl text-white/90 mb-6">Client: {project.client}</p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <MapPin size={20} className="mb-2" />
                    <p className="text-sm text-white/80">Location</p>
                    <p className="font-bold">{project.location}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Calendar size={20} className="mb-2" />
                    <p className="text-sm text-white/80">Completed</p>
                    <p className="font-bold">{project.completionDate}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Users size={20} className="mb-2" />
                    <p className="text-sm text-white/80">Team Size</p>
                    <p className="font-bold">{project.teamSize}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <TrendingUp size={20} className="mb-2" />
                    <p className="text-sm text-white/80">Value</p>
                    <p className="font-bold">{project.projectValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 lg:p-12">
              {/* Before/After Slider */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <ArrowRightIcon className="text-amber-600" size={28} />
                    Before & After Transformation
                  </h3>
                  <button
                    onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                    className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-semibold hover:bg-amber-200 transition-all"
                  >
                    {showBeforeAfter ? 'Show Gallery' : 'Show Comparison'}
                  </button>
                </div>

                {showBeforeAfter ? (
                  <div 
                    className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden cursor-col-resize"
                    onMouseMove={handleSliderMove}
                    onTouchMove={(e) => {
                      const touch = e.touches[0];
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = touch.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    }}
                  >
                    {/* Before Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-30">BEFORE</div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-30">AFTER</div>
                      </div>
                    </div>

                    {/* Slider Handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <div className="flex gap-1">
                          <ArrowLeft size={16} className="text-gray-700" />
                          <ArrowRightIcon size={16} className="text-gray-700" />
                        </div>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-bold">
                      After
                    </div>
                  </div>
                ) : (
                  // Gallery View
                  <div className="relative">
                    <div className={`h-96 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center`}>
                      <div className="text-white text-center">
                        <Icon size={80} className="mx-auto mb-4 opacity-50" />
                        <p className="text-2xl font-bold">{project.gallery[currentImageIndex].label}</p>
                        <p className="text-white/80">Image {currentImageIndex + 1} of {project.gallery.length}</p>
                      </div>
                    </div>

                    {/* Gallery Navigation */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all"
                    >
                      <ChevronLeft size={24} className="text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all"
                    >
                      <ChevronRight size={24} className="text-gray-700" />
                    </button>

                    {/* Thumbnails */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {project.gallery.map((img, idx) => (
                        <button
                          key={img.id}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg transition-all ${
                            idx === currentImageIndex 
                              ? `bg-gradient-to-br ${project.gradient} ring-4 ring-amber-400` 
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{idx + 1}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Overview */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.overview}</p>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">!</span>
                      </div>
                      The Challenge
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      Our Solution
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle size={24} className="text-amber-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{highlight.title}</h4>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-12 bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div>
                        <p className="text-sm text-gray-600">{spec.label}</p>
                        <p className="text-lg font-bold text-gray-900">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 relative">
                  <Quote size={48} className="text-amber-300 absolute top-8 left-8" />
                  <div className="relative z-10 pl-12">
                    <div className="flex gap-1 mb-4">
                      {[...Array(project.testimonial.rating)].map((_, idx) => (
                        <Star key={idx} size={20} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{project.testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {project.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{project.testimonial.author}</p>
                        <p className="text-gray-600">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Results */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Results</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-amber-400 hover:shadow-lg transition-all">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                        {result.value}
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{result.metric}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-gray-200">
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                  <Download size={20} />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                  <Share2 size={20} />
                  Share Project
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                  <Heart size={20} />
                  Save to Favorites
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg">
                  Start Similar Project
                  <ArrowRightIcon size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;