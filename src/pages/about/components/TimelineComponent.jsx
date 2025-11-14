import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, TrendingUp, Building, Star, Target, Zap, Heart } from 'lucide-react';

const TimelineComponent = () => {
  const [activeYear, setActiveYear] = useState(2023);

  const milestones = [
    {
      year: 2008,
      title: "Company Foundation",
      description: "Nitty Gritty was founded in Johannesburg with a focus on architectural services and small-scale property investments.",
      icon: <Building className="w-5 h-5" />,
      color: "from-amber-400 to-yellow-500",
      achievements: ["Founded in Johannesburg", "Initial focus on architecture", "First 10 projects completed"],
      stats: { projects: 10, team: 3, locations: 1 },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2010,
      title: "First Major Expansion",
      description: "Expanded service offerings to include gardening services and secured our first corporate client contracts.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500",
      achievements: ["Added gardening services", "First corporate clients", "Team grew to 15 members"],
      stats: { projects: 45, team: 15, locations: 1 },
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2013,
      title: "Cleaning Division Launch",
      description: "Launched professional cleaning services division, completing our comprehensive property management portfolio.",
      icon: <Zap className="w-5 h-5" />,
      color: "from-orange-500 to-amber-600",
      achievements: ["Cleaning services launched", "100+ projects completed", "Industry recognition"],
      stats: { projects: 120, team: 25, locations: 1 },
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2015,
      title: "KZN Regional Office",
      description: "Opened our first regional office in Durban, establishing presence in KwaZulu-Natal and expanding our reach.",
      icon: <MapPin className="w-5 h-5" />,
      color: "from-amber-600 to-yellow-600",
      achievements: ["Durban office opened", "Expanded to KZN province", "50+ new team members"],
      stats: { projects: 200, team: 75, locations: 2 },
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2018,
      title: "Cape Town Expansion",
      description: "Established Western Cape operations with our Cape Town office, becoming a truly national service provider.",
      icon: <Users className="w-5 h-5" />,
      color: "from-yellow-500 to-amber-400",
      achievements: ["Cape Town office opened", "National coverage achieved", "Team exceeded 100 members"],
      stats: { projects: 350, team: 120, locations: 3 },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description: "Implemented comprehensive digital systems and launched our client portal for seamless service management.",
      icon: <Target className="w-5 h-5" />,
      color: "from-amber-300 to-yellow-400",
      achievements: ["Digital client portal", "Streamlined operations", "Enhanced customer experience"],
      stats: { projects: 420, team: 150, locations: 3 },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2022,
      title: "Industry Recognition",
      description: "Received multiple industry awards for excellence in service delivery and sustainable business practices.",
      icon: <Award className="w-5 h-5" />,
      color: "from-amber-400 to-yellow-500",
      achievements: ["Service Excellence Award", "Sustainable Business Award", "Top Employer Recognition"],
      stats: { projects: 480, team: 180, locations: 3 },
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2023,
      title: "500+ Projects Milestone",
      description: "Celebrated completing over 500 successful projects across South Africa with 98% client satisfaction.",
      icon: <Star className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500",
      achievements: ["500+ projects completed", "98% client satisfaction", "Industry leadership position"],
      stats: { projects: 500, team: 200, locations: 3 },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      year: 2024,
      title: "Future Growth Vision",
      description: "Planning expansion into new African markets and developing innovative service solutions for the future.",
      icon: <Heart className="w-5 h-5" />,
      color: "from-orange-500 to-amber-600",
      achievements: ["African expansion plans", "Innovation lab launch", "Sustainable growth strategy"],
      stats: { projects: "600+", team: "250+", locations: "5+" },
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      future: true
    }
  ];

  const activeMilestone = milestones.find(milestone => milestone.year === activeYear) || milestones[0];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Growth Journey</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto px-4">
            From humble beginnings to becoming a trusted name in investment services across South Africa. 
            Discover the milestones that shaped our success story.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-4 sticky top-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-500" />
                Journey Timeline
              </h3>
              
              <div className="space-y-1.5">
                {milestones.map((milestone, index) => (
                  <button
                    key={milestone.year}
                    onClick={() => setActiveYear(milestone.year)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeYear === milestone.year
                        ? `bg-gradient-to-r ${milestone.color} text-white shadow-md transform -translate-y-0.5`
                        : 'bg-amber-50 text-gray-700 hover:bg-amber-100 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-semibold">{milestone.year}</div>
                        <div className={`text-xs ${activeYear === milestone.year ? 'text-amber-100' : 'text-gray-600'}`}>
                          {milestone.title}
                        </div>
                      </div>
                      {milestone.future && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1.5">
                  <span>2008</span>
                  <span>2024</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-yellow-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${((activeYear - 2008) / (2024 - 2008)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Milestone Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
              {/* Milestone Header */}
              <div className={`bg-gradient-to-r ${activeMilestone.color} p-5 lg:p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    {activeMilestone.icon}
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold">{activeMilestone.year}</div>
                    <h3 className="text-xl lg:text-2xl font-semibold">{activeMilestone.title}</h3>
                  </div>
                </div>
                <p className="text-amber-100 text-sm leading-relaxed">{activeMilestone.description}</p>
              </div>

              {/* Milestone Content */}
              <div className="p-4 lg:p-6">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Milestone Image */}
                  <div className="relative rounded-lg h-40 lg:h-48 overflow-hidden">
                    <img 
                      src={activeMilestone.image} 
                      alt={activeMilestone.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/4A5568/FFFFFF?text=${encodeURIComponent(activeMilestone.year)}`;
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeMilestone.color} opacity-40`}></div>
                  </div>

                  {/* Key Statistics */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {activeMilestone.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className={`w-5 h-5 bg-gradient-to-r ${activeMilestone.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-2 bg-amber-50 rounded-lg">
                        <div className="text-lg lg:text-xl font-bold text-amber-600">{activeMilestone.stats.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center p-2 bg-amber-50 rounded-lg">
                        <div className="text-lg lg:text-xl font-bold text-amber-600">{activeMilestone.stats.team}</div>
                        <div className="text-xs text-gray-600">Team</div>
                      </div>
                      <div className="text-center p-2 bg-amber-50 rounded-lg">
                        <div className="text-lg lg:text-xl font-bold text-amber-600">{activeMilestone.stats.locations}</div>
                        <div className="text-xs text-gray-600">Locations</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Future Plans for 2024 */}
                {activeMilestone.future && (
                  <div className="mt-5 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-amber-500" />
                      Future Vision
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Our journey continues with ambitious plans for growth and innovation in the coming years.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">Expansion into new African markets</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                          <Zap className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm text-gray-700">Innovation lab for new services</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => {
                  const currentIndex = milestones.findIndex(m => m.year === activeYear);
                  if (currentIndex > 0) setActiveYear(milestones[currentIndex - 1].year);
                }}
                disabled={activeYear === 2008}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <button
                onClick={() => {
                  const currentIndex = milestones.findIndex(m => m.year === activeYear);
                  if (currentIndex < milestones.length - 1) setActiveYear(milestones[currentIndex + 1].year);
                }}
                disabled={activeYear === 2024}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 text-white rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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

export default TimelineComponent;