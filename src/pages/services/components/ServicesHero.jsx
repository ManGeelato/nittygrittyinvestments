import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Award, Clock } from 'lucide-react';

const ServicesHero = () => {
  const serviceStats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-4 h-4" />
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-4 h-4" />
    },
    {
      number: "3",
      label: "Major Cities",
      icon: <Users className="w-4 h-4" />
    }
  ];

  const serviceHighlights = [
    "Comprehensive property solutions",
    "Nationwide service coverage",
    "Premium quality materials",
    "Expert certified professionals"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main Background Image/Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-2xl animate-bounce delay-1000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-6 h-6 border-2 border-amber-400 opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-24 left-24 w-4 h-4 bg-yellow-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 border border-amber-300 opacity-25 transform rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-500 border-opacity-30">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-amber-300">Premium Services Since 2008</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Comprehensive
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Property Solutions
              </span>
              Across South Africa
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              From architectural design to pristine maintenance, Nitty Gritty delivers exceptional 
              services that transform properties and maximize investment value. Experience the 
              difference of working with South Africa's trusted property services partner.
            </p>

            {/* Service Highlights */}
            <div className="space-y-2">
              {serviceHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center">
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-amber-500 text-amber-400 px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2" />
                Quick Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full border-2 border-gray-800"></div>
                  ))}
                </div>
                <span className="text-xs text-gray-300">Trusted by 200+ Clients</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs text-gray-300">Award Winning Service</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Our Service Excellence</h3>
                <p className="text-amber-100 text-sm">Delivering quality across South Africa</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {serviceStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-3 rounded-lg bg-white bg-opacity-5 border border-amber-500 border-opacity-20 hover:bg-opacity-10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-white mb-0.5">{stat.number}</div>
                    <div className="text-amber-200 text-xs font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg p-4 text-white text-center">
                <h4 className="font-semibold mb-2 flex items-center justify-center gap-1.5 text-sm">
                  <MapPin className="w-4 h-4" />
                  Serving Major Cities
                </h4>
                <div className="flex justify-center gap-3 text-xs">
                  <span>Johannesburg</span>
                  <span>•</span>
                  <span>Durban</span>
                  <span>•</span>
                  <span>Cape Town</span>
                </div>
              </div>
            </div>

            {/* Floating Service Icons */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full opacity-30 animate-bounce delay-500"></div>
            
            {/* Service Visualization */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-10 blur-lg"></div>
              
              {/* Rotating Service Icons */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Building className="w-5 h-5 text-amber-300" />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Leaf className="w-5 h-5 text-amber-300" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-amber-400 animate-bounce">
            <span className="text-xs font-semibold mb-1">Explore Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Icons for Services
const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Leaf = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Check = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default ServicesHero;