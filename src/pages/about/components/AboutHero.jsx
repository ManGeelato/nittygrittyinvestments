import React from 'react';
import { CheckCircle, Users, Target, Award } from 'lucide-react';

const AboutHero = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-5 h-5" /> },
    { number: '3', label: 'Major Cities', icon: <Users className="w-5 h-5" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Target className="w-5 h-5" /> }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake",
      color: "from-amber-500 to-yellow-500"
    },
    {
      title: "Integrity",
      description: "Building trust through transparent and honest practices",
      color: "from-amber-600 to-orange-500"
    },
    {
      title: "Innovation",
      description: "Embracing cutting-edge solutions for modern challenges",
      color: "from-yellow-500 to-amber-400"
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
      {/* Background Image with Darker Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-6 left-6 w-48 h-48 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-6 right-6 w-64 h-64 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full opacity-30 blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-amber-300 rounded-lg opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-amber-200 border-2 border-amber-300 opacity-20 transform rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-5 lg:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-amber-100">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-amber-700">Since 2008</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              Building 
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"> Excellence </span>
              Across South Africa
            </h1>

            {/* Description */}
            <p className="text-base text-gray-200 leading-relaxed">
              For over 15 years, <strong className="text-white">Nitty Gritty Investment Company</strong> has been at the forefront of transforming spaces and investments through our comprehensive suite of services. From architectural marvels to pristine landscapes and immaculate cleaning solutions, we deliver quality that stands the test of time.
            </p>

            {/* Key Values */}
            <div className="grid sm:grid-cols-3 gap-3">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-amber-50 hover:shadow-md transition-all duration-300 hover:transform hover:-translate-y-0.5"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-2`}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{value.title}</h3>
                  <p className="text-xs text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center">
                Our Story
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="group border-2 border-amber-400 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-amber-100 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Our Impact in Numbers</h3>
                <p className="text-sm text-gray-600">Delivering excellence across South Africa</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-3 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-800 mb-0.5">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Achievement Badge */}
              <div className="mt-6 p-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg text-white text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Award Winning Service</span>
                </div>
                <p className="text-amber-100 text-xs">
                  Recognized for excellence in architectural design and service delivery
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-amber-300 animate-bounce">
            <span className="text-xs font-semibold mb-1">Scroll to Explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;