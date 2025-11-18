import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Excellence in Architectural Design",
      subtitle: "Transforming Visions into Reality",
      description: "Professional architectural services that bring your dreams to life with precision and creativity",
      image: "/7.png",
      stats: { number: "500+", label: "Projects Completed" }
    },
    {
      title: "Premium Gardening Services",
      subtitle: "Creating Green Sanctuaries",
      description: "Expert landscaping and garden maintenance that transforms outdoor spaces into stunning environments",
      image: "/13.png",
      stats: { number: "1000+", label: "Gardens Maintained" }
    },
    {
      title: "Professional Cleaning Solutions",
      subtitle: "Spotless Spaces, Every Time",
      description: "Comprehensive cleaning services that maintain pristine environments for homes and businesses",
      image: "/11.png",
      stats: { number: "2000+", label: "Satisfied Clients" }
    }
  ];

  const thumbnailImages = [
    "7.png",
    "13.png",
    "11.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: Award, text: "20+ Years Experience" },
    { icon: Users, text: "Expert Team" },
    { icon: Star, text: "Quality Assured" },
    { icon: CheckCircle, text: "Licensed & Insured" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217, 119, 6) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)] py-8 lg:py-12">
          {/* Right Content - Images */}
          <div className="relative lg:h-[500px] h-[350px]">
            {/* Main Image Card */}
            <div className="relative h-full rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* Image with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 via-amber-700/20 to-transparent z-10"></div>
              
              {/* Service Images */}
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/4A5568/FFFFFF?text=${encodeURIComponent(slides[currentSlide].title)}`;
                }}
              />

              {/* Stat Card */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  {slides[currentSlide].stats.number}
                </div>
                <div className="text-sm text-gray-600 font-medium mt-0.5">
                  {slides[currentSlide].stats.label}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 z-20 bg-amber-500 text-white px-3 py-1.5 rounded-full font-semibold shadow-lg text-sm">
                Premium Service
              </div>
            </div>

            {/* Additional Service Images Preview */}
            <div className="flex gap-2 mt-4 justify-center">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${
                    idx === currentSlide ? 'ring-2 ring-amber-500 scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={thumbnailImages[idx]} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/100x75/4A5568/FFFFFF?text=${encodeURIComponent(slide.title.split(' ')[0])}`;
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-amber-300 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Left Content */}
          <div className="space-y-6 animate-fadeIn">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
                {slides[currentSlide].title.split(' ').map((word, idx) => (
                  <span key={idx}>
                    {idx === slides[currentSlide].title.split(' ').length - 1 || 
                     idx === slides[currentSlide].title.split(' ').length - 2 ? (
                      <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                        {word}{' '}
                      </span>
                    ) : (
                      <span>{word} </span>
                    )}
                  </span>
                ))}
              </h1>
              <p className="text-lg sm:text-xl text-amber-600 font-semibold">
                {slides[currentSlide].subtitle}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border border-gray-200 hover:border-amber-400 transition-all duration-300 text-sm"
              >
                View Services
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-1.5">
                    <feature.icon className="text-amber-600" size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-1.5 pb-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide 
                  ? 'w-6 bg-gradient-to-r from-[#A67C00] to-[#A67C00]' 
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52C840 55 960 60 1080 62C1200 65 1320 65 1380 65L1440 65V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;