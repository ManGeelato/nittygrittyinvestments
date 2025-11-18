import React from 'react';
import { Star, Shield, Users, Target, Heart, Zap, ArrowRight } from 'lucide-react';

const VisionValues = () => {
  const values = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering exceptional quality that exceeds client expectations and sets industry standards.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      color: "from-amber-400 to-yellow-500",
      features: ["Quality Assurance", "Attention to Detail", "Industry Standards", "Continuous Improvement"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "We build trust through transparent communication, honest practices, and ethical business conduct in all our relationships.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      color: "from-amber-500 to-orange-500",
      features: ["Transparent Pricing", "Honest Communication", "Ethical Practices", "Accountability"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork, working closely with clients and partners to achieve shared success and mutual growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      color: "from-orange-500 to-amber-600",
      features: ["Client Partnership", "Team Synergy", "Open Communication", "Shared Success"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and creative approaches to solve complex challenges and drive industry advancement.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      color: "from-amber-600 to-yellow-600",
      features: ["Creative Solutions", "Technology Adoption", "Process Improvement", "Future Ready"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Our clients' success is our success. We listen, understand, and deliver solutions that truly meet their needs and aspirations.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      color: "from-yellow-500 to-amber-400",
      features: ["Active Listening", "Custom Solutions", "Long-term Relationships", "Client Success"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency",
      description: "We optimize resources, streamline processes, and deliver timely results without compromising on quality or value.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      color: "from-amber-300 to-yellow-400",
      features: ["Timely Delivery", "Resource Optimization", "Process Excellence", "Value Maximization"]
    }
  ];

  const vision = {
    title: "Our Vision for the Future",
    description: "To be South Africa's most trusted and innovative investment partner, transforming properties and communities through exceptional service delivery and sustainable practices.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
    goals: [
      "Expand to 5 additional major cities by 2025",
      "Implement sustainable practices across all services",
      "Develop proprietary technology solutions",
      "Train and empower 1000+ skilled professionals"
    ]
  };

  return (
    <section className="py-12 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-16 left-6 w-10 h-10 bg-amber-200 rounded-lg opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-16 right-6 w-6 h-6 bg-yellow-300 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Core Principles</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto px-4">
            The foundation of everything we do at Nitty Gritty - guiding our decisions, 
            shaping our culture, and driving our success
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Vision Card */}
        <div className="mb-12">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-amber-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Vision Content */}
              <div className="p-5 lg:p-6">
                <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <Target className="w-3.5 h-3.5" />
                  Our Guiding Star
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {vision.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {vision.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Strategic Goals</h4>
                  {vision.goals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{goal}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center text-sm">
                  Our Strategic Plan
                  <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Vision Image */}
              <div className="relative h-48 lg:h-56 min-h-[250px]">
                <img 
                  src={vision.image} 
                  alt={vision.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/4A5568/FFFFFF?text=${encodeURIComponent(vision.title)}`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 via-amber-700/20 to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white bg-opacity-30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg shadow-md border border-amber-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Value Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/4A5568/FFFFFF?text=${encodeURIComponent(value.title)}`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${value.color} opacity-40`}></div>
                
                {/* Overlay Icon */}
                <div className={`absolute top-3 right-3 w-10 h-10 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-300`}>
                  {value.icon}
                </div>
              </div>

              {/* Value Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                
                {/* Features List */}
                <div className="space-y-1.5">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${value.color} rounded-full`}></div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Action */}
                <div className="mt-4 pt-3 border-t border-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full text-center text-amber-600 font-semibold text-xs hover:text-amber-700 transition-colors flex items-center justify-center gap-1.5">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-5 lg:p-6 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Our Business Philosophy</h3>
            <p className="text-base text-amber-100 leading-relaxed max-w-4xl mx-auto">
              "At Nitty Gritty, we believe that exceptional service is built on strong values. 
              Our commitment to excellence, integrity, and innovation ensures that every client 
              receives the attention and quality they deserve, transforming investments into 
              lasting success stories."
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Michael Fakude</p>
                <p className="text-amber-200 text-xs">Director & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Check icon component
const Check = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default VisionValues;