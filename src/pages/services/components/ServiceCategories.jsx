import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building, Leaf, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const ServiceCategories = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('architecture');

  const serviceCategories = [
    {
      id: 'architecture',
      name: 'Architectural Services',
      description: 'Transform your spaces with innovative architectural design and professional project management.',
      path: '/services/architecture',
      icon: <Building className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-500',
      features: [
        'Building Design & Planning',
        'Project Management',
        '3D Visualization',
        'Sustainable Architecture'
      ],
      image: '/images/services/architecture.jpg',
      stats: { projects: '200+', experience: '15+ years' }
    },
    {
      id: 'gardening',
      name: 'Gardening Services',
      description: 'Create beautiful, sustainable outdoor spaces with our expert landscaping and garden maintenance.',
      path: '/services/gardening',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Landscape Design',
        'Garden Maintenance',
        'Irrigation Systems',
        'Sustainable Gardening'
      ],
      image: '/images/services/gardening.jpg',
      stats: { projects: '150+', experience: '12+ years' }
    },
    {
      id: 'cleaning',
      name: 'Cleaning Services',
      description: 'Maintain pristine environments with our comprehensive commercial and residential cleaning solutions.',
      path: '/services/cleaning',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Commercial Cleaning',
        'Residential Cleaning',
        'Deep Cleaning',
        'Eco-friendly Solutions'
      ],
      image: '/images/services/cleaning.jpg',
      stats: { projects: '150+', experience: '10+ years' }
    }
  ];

  // Determine active tab based on current route
  React.useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes('/services/architecture')) {
      setActiveTab('architecture');
    } else if (currentPath.includes('/services/gardening')) {
      setActiveTab('gardening');
    } else if (currentPath.includes('/services/cleaning')) {
      setActiveTab('cleaning');
    }
  }, [location.pathname]);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Service Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover our comprehensive range of professional services designed to transform your properties 
            and maximize your investment value across South Africa.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-1.5 flex flex-wrap justify-center gap-1 max-w-2xl mx-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeTab === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-sm transform -translate-y-0.5`
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="mb-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeTab === category.id
                  ? 'block animate-fade-in'
                  : 'hidden'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mx-2 sm:mx-0">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                            {category.stats.projects} Projects
                          </span>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                            {category.stats.experience} Experience
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className={`w-5 h-5 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={category.path}
                        className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center text-sm"
                      >
                        Explore {category.name}
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <button className="group border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-amber-500 hover:text-amber-600 transition-all duration-300 flex items-center justify-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Get Quote
                      </button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className={`relative min-h-[300px] lg:min-h-[350px] bg-gradient-to-br ${
                    category.id === 'architecture' ? 'from-amber-100 to-yellow-200' :
                    category.id === 'gardening' ? 'from-green-100 to-emerald-200' :
                    'from-blue-100 to-cyan-200'
                  }`}>
                    {/* Image with fallback */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="relative w-full h-full max-w-md mx-auto">
                        {/* Image Container */}
                        <div className="w-full h-48 sm:h-56 bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-md`}>
                              {category.icon}
                            </div>
                            <p className="text-lg font-semibold text-gray-700 mb-1">{category.name}</p>
                            <p className="text-sm text-gray-600">Professional Service Image</p>
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white bg-opacity-30 rounded-full backdrop-blur-sm border border-white border-opacity-20"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-white bg-opacity-40 rounded-full border border-white border-opacity-30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 px-2 sm:px-0">
          {serviceCategories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 mx-2 sm:mx-0"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {category.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Features Preview */}
                <div className="space-y-1.5 mb-4">
                  {category.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.color} rounded-full`}></div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <div className="text-xs text-amber-600 font-semibold">
                    +{category.features.length - 2} more services
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <span>{category.stats.projects} Projects</span>
                  <span>{category.stats.experience}</span>
                </div>

                {/* Hover Action */}
                <div className="mt-3 pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-amber-600 font-semibold text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
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

export default ServiceCategories;