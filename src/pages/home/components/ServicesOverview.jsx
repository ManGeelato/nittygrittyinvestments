import React, { useState } from 'react';
import { Building2, Leaf, Sparkles, ArrowRight, Check, Phone } from 'lucide-react';


const ServicesOverview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      icon: Building2,
      title: "Architectural Services",
      tagline: "Design & Build Excellence",
      description: "Transform your vision into reality with our comprehensive architectural services. From concept to completion, we deliver innovative designs that blend functionality with aesthetic appeal.",
      color: "from-slate-600 to-slate-800",
      bgGradient: "from-slate-50 to-slate-100",
      accentColor: "slate",
      features: [
        "Residential & Commercial Design",
        "3D Visualization & Modeling",
        "Building Plans & Permits",
        "Structural Engineering",
        "Project Management",
        "Renovations & Extensions"
      ],
      stats: [
        { number: "500+", label: "Projects Designed" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "20+", label: "Years Experience" }
      ],
      image: "/9.png",
      thumbnail: "/9.png"
    },
    {
      id: 1,
      icon: Leaf,
      title: "Gardening Services",
      tagline: "Cultivating Green Spaces",
      description: "Create and maintain beautiful outdoor environments with our expert gardening services. We bring nature's beauty to your doorstep with professional landscaping and ongoing maintenance.",
      color: "from-green-600 to-green-800",
      bgGradient: "from-green-50 to-green-100",
      accentColor: "green",
      features: [
        "Landscape Design & Installation",
        "Garden Maintenance & Care",
        "Irrigation Systems",
        "Tree & Shrub Services",
        "Lawn Care & Fertilization",
        "Seasonal Planting"
      ],
      stats: [
        { number: "1000+", label: "Gardens Maintained" },
        { number: "50+", label: "Landscaping Projects" },
        { number: "100%", label: "Organic Options" }
      ],
      image: "/IMG-20250127-WA0009.jpg",
      thumbnail: "/IMG-20250127-WA0009.jpg"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Cleaning Services",
      tagline: "Pristine Spaces, Professional Care",
      description: "Maintain immaculate environments with our professional cleaning services. We deliver thorough, reliable cleaning solutions for residential and commercial properties.",
      color: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
      accentColor: "blue",
      features: [
        "Residential Deep Cleaning",
        "Commercial Office Cleaning",
        "Post-Construction Cleanup",
        "Window & Carpet Cleaning",
        "Sanitization Services",
        "Regular Maintenance Plans"
      ],
      stats: [
        { number: "2000+", label: "Satisfied Clients" },
        { number: "24/7", label: "Service Available" },
        { number: "15+", label: "Years in Business" }
      ],
      image: "/12.png",
      thumbnail: "/12.png"
    }
  ];

  const currentService = services[activeTab];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 rounded-full text-amber-800 text-xs font-medium mb-3">
            <Sparkles size={14} className="text-amber-600" />
            <span>Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            What We <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across three core service areas, delivered with excellence and professionalism
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row gap-3 mb-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 group relative overflow-hidden rounded-xl p-4 lg:p-6 transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-br ${service.color} text-white shadow-lg scale-105` 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-10 ${isActive ? 'block' : 'hidden'}`}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '25px 25px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  }`}>
                    <Icon size={24} className={isActive ? 'text-white' : 'text-amber-600'} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-1">{service.title}</h3>
                  <p className={`text-xs ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                    {service.tagline}
                  </p>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Service Content */}
        <div className={`bg-gradient-to-br ${currentService.bgGradient} rounded-2xl overflow-hidden shadow-lg`}>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
            {/* Left Content */}
            <div className="space-y-4">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${currentService.color} text-white rounded-full text-xs font-medium mb-3`}>
                  <currentService.icon size={14} />
                  <span>Premium Service</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {currentService.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                {currentService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 group">
                    <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r ${currentService.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href="/contact"
                  className={`group inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gradient-to-r ${currentService.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm`}
                >
                  Request Quote
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </a>
                <a
                  href={`tel:0115246421`}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-amber-400 transition-all duration-300 text-sm"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Content - Stats & Visual */}
            <div className="space-y-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3">
                {currentService.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 lg:p-4 shadow-md text-center transform hover:scale-105 transition-all duration-300">
                    <div className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Card with Image */}
              <div className={`relative h-48 lg:h-60 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${currentService.color}`}>
                {/* Service Image */}
                <img 
                  src={currentService.image} 
                  alt={currentService.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/500x300/4A5568/FFFFFF?text=${encodeURIComponent(currentService.title)}`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent"></div>

                {/* Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <p className="text-xs text-gray-600 mb-0.5">Available in</p>
                  <p className="font-bold text-gray-900 text-sm">Johannesburg • Durban • Cape Town</p>
                </div>
              </div>

              {/* Service Thumbnails */}
              <div className="flex gap-2 justify-center">
                {services.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-12 h-9 rounded-md overflow-hidden shadow-sm transition-all duration-300 ${
                      idx === activeTab ? 'ring-2 ring-amber-500 scale-110' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={service.thumbnail} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/100x75/4A5568/FFFFFF?text=${encodeURIComponent(service.title.split(' ')[0])}`;
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#A67C00] to-[#A67C00] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Quality Guaranteed</p>
                    <p className="text-xs text-gray-600">Licensed, insured & certified professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;