import React from 'react';
import { Shield, Star, Clock, Users, Award, CheckCircle, Phone, Heart, Zap, Target, ThumbsUp, Recycle } from 'lucide-react';

const CommitmentSection = () => {
  const commitments = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "We stand behind every project with our comprehensive quality guarantee. If you're not satisfied, we'll make it right.",
      features: ["100% Satisfaction Guarantee", "Quality Control Checks", "Industry Standards Compliance", "Continuous Improvement"],
      color: "from-amber-500 to-yellow-500",
      stat: "98%",
      statLabel: "Client Satisfaction",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Your time is valuable. We commit to completing every project on schedule with our efficient project management system.",
      features: ["On-Time Completion", "Progress Tracking", "Clear Timelines", "Regular Updates"],
      color: "from-amber-600 to-orange-500",
      stat: "95%",
      statLabel: "On-Time Delivery",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Every project is handled by certified professionals with extensive experience in their respective fields.",
      features: ["Certified Professionals", "Ongoing Training", "Specialized Expertise", "Team Collaboration"],
      color: "from-orange-500 to-amber-600",
      stat: "15+",
      statLabel: "Years Experience",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Materials",
      description: "We use only the highest quality materials and equipment, ensuring durability and exceptional results.",
      features: ["Premium Suppliers", "Quality Materials", "Modern Equipment", "Sustainable Options"],
      color: "from-amber-400 to-yellow-400",
      stat: "100%",
      statLabel: "Quality Materials",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  const servicePromises = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for emergencies and urgent matters",
      color: "bg-amber-500"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Transparent Pricing",
      description: "No hidden costs with detailed quotes and regular budget updates",
      color: "bg-amber-600"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Personalized Service",
      description: "Custom solutions tailored to your specific needs and preferences",
      color: "bg-orange-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Rapid Response",
      description: "Quick response times and efficient problem resolution",
      color: "bg-yellow-500"
    }
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Detailed needs assessment and project understanding",
      icon: <Users className="w-5 h-5" />
    },
    {
      step: "02",
      title: "Custom Planning",
      description: "Tailored solution design and comprehensive project planning",
      icon: <Target className="w-5 h-5" />
    },
    {
      step: "03",
      title: "Quality Execution",
      description: "Professional implementation with continuous quality checks",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "Rigorous quality assurance and client approval process",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
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
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Unwavering Commitment</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto px-4">
            At Nitty Gritty, we don't just deliver services - we deliver peace of mind. 
            Our commitment to excellence is the foundation of every project we undertake.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Commitment Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {commitments.map((commitment, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Commitment Image */}
              <div className="relative h-32">
                <img 
                  src={commitment.image} 
                  alt={commitment.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/4A5568/FFFFFF?text=${encodeURIComponent(commitment.title)}`;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${commitment.color} opacity-40`}></div>
              </div>

              <div className="p-4 lg:p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${commitment.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                    {commitment.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xl lg:text-2xl font-bold text-amber-600">{commitment.stat}</div>
                    <div className="text-xs text-gray-600">{commitment.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">{commitment.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{commitment.description}</p>

                <div className="space-y-2">
                  {commitment.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-4 h-4 bg-gradient-to-r ${commitment.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Process */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">Our Quality Assurance Process</h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Every project follows our rigorous 4-step quality process to ensure exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {qualityProcess.map((step, index) => (
              <div 
                key={index}
                className="relative text-center group"
              >
                {/* Connecting Line */}
                {index < qualityProcess.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-amber-200 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-lg shadow-md border border-amber-100 p-4 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 mx-auto">
                    {step.step}
                  </div>
                  
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-3 mx-auto">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-base font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Promises */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-5 lg:p-6 text-white mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">Our Service Promises to You</h3>
            <p className="text-amber-100 text-sm">
              We commit to these core service principles in every client interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicePromises.map((promise, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className={`w-10 h-10 ${promise.color} rounded-full flex items-center justify-center text-white mx-auto mb-3`}>
                  {promise.icon}
                </div>
                <h4 className="font-bold text-sm mb-1.5">{promise.title}</h4>
                <p className="text-amber-100 text-xs">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Commitment Statement */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Your Success is Our Priority</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              At Nitty Gritty, we believe that our success is measured by your satisfaction. 
              That's why we've built our entire operation around delivering exceptional value 
              and building lasting relationships with our clients.
            </p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-700 font-semibold">Dedicated Project Managers</span>
              </div>
              <div className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-700 font-semibold">Sustainable Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-700 font-semibold">Comprehensive Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-sm text-gray-700 font-semibold">Industry Certifications</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Experience Our Commitment
            </button>
          </div>

          {/* Commitment Visual */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-200 rounded-xl p-5 h-48 lg:h-56 flex items-center justify-center">
            <div className="text-center text-amber-700">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold mb-1">Our Promise to You</h4>
              <p className="text-amber-800 text-sm">
                Quality, Reliability, and Excellence in Every Project
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-12">
          <h4 className="text-base font-semibold text-gray-600 mb-4">Trusted and Certified</h4>
          <div className="flex flex-wrap justify-center gap-4 opacity-60">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
              <p className="text-xs text-gray-600 mt-1.5">SAIA Certified</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
              <p className="text-xs text-gray-600 mt-1.5">ISO 9001</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
              <p className="text-xs text-gray-600 mt-1.5">Green Certified</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto"></div>
              <p className="text-xs text-gray-600 mt-1.5">BBB Accredited</p>
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

export default CommitmentSection;