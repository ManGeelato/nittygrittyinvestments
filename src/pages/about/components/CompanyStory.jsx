import React from 'react';
import { Calendar, Target, Eye, Users, TrendingUp, Shield } from 'lucide-react';

const CompanyStory = () => {
  const timeline = [
    {
      year: "2008",
      title: "Humble Beginnings",
      description: "Nitty Gritty started as a small architectural firm in Johannesburg, focusing on residential projects and building a reputation for quality workmanship.",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-amber-400 to-yellow-500"
    },
    {
      year: "2012",
      title: "Expansion into Services",
      description: "Recognizing market needs, we expanded our offerings to include professional gardening and cleaning services, creating a comprehensive property management solution.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      year: "2016",
      title: "National Presence",
      description: "Opened regional offices in Durban and Cape Town, establishing ourselves as a nationwide provider of premium investment and property services.",
      icon: <Users className="w-5 h-5" />,
      color: "from-orange-500 to-amber-600"
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Now recognized as a leading investment company, managing over 500 projects with a 98% client satisfaction rate across South Africa.",
      icon: <Shield className="w-5 h-5" />,
      color: "from-amber-600 to-yellow-600"
    }
  ];

  const missionValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description: "To transform properties and investments through exceptional architectural, gardening, and cleaning services that exceed client expectations and build lasting value.",
      color: "bg-gradient-to-br from-amber-500 to-yellow-500"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision",
      description: "To be South Africa's most trusted investment partner, renowned for innovative solutions and uncompromising quality in every project we undertake.",
      color: "bg-gradient-to-br from-amber-600 to-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Our Promise",
      description: "We commit to integrity, excellence, and client satisfaction in every interaction, ensuring your investment receives the attention it deserves.",
      color: "bg-gradient-to-br from-yellow-500 to-amber-400"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Journey</span> of Excellence
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto px-4">
            From humble beginnings to becoming a trusted name in investment services across South Africa
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Section */}
          <div className="space-y-6">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-amber-500" />
              Our History
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start group">
                    {/* Timeline Dot */}
                    <div className={`absolute left-5 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                    
                    {/* Content */}
                    <div className="ml-12 bg-white p-4 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-lg font-bold text-amber-600">{item.year}</div>
                          <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission & Values Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-amber-500" />
                Our Core Purpose
              </h3>
              
              {/* Mission Values Cards */}
              <div className="space-y-4">
                {missionValues.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-amber-100 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-5 text-white">
              <h3 className="text-xl font-bold mb-4 text-center">Why Choose Nitty Gritty?</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-semibold text-sm">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-semibold text-sm">Nationwide Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-semibold text-sm">Multi-Service Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-semibold text-sm">Award-Winning Quality</span>
                </div>
              </div>
            </div>

            {/* Founder's Note */}
            <div className="bg-white rounded-xl shadow-md border border-amber-100 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-base">MG</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Mike Grundy</h4>
                  <p className="text-amber-600 text-xs">Founder & CEO</p>
                </div>
              </div>
              <blockquote className="text-sm text-gray-600 italic border-l-2 border-amber-400 pl-3">
                "At Nitty Gritty, we believe that every property tells a story. Our mission is to help write success stories through exceptional service, innovative solutions, and unwavering commitment to our clients' investments."
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Write Your Success Story?</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their properties and investments with Nitty Gritty.
            </p>
            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Start Your Project Today
            </button>
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

export default CompanyStory;